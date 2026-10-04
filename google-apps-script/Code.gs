/** MAHARATI DRIVE BRIDGE. Deploy as owner; caller authenticated by server HMAC.
 * Script Properties: BRIDGE_SECRET (>=32 chars), DRIVE_FOLDER_ID, SPREADSHEET_ID.
 * Never expose BRIDGE_SECRET in frontend or Google Sheet cells.
 */
function doGet(){return json_({ok:true,service:'MAHARATI private file bridge'});}
function doPost(e){
 var lock=LockService.getScriptLock();
 try{
  if(!e||!e.postData||e.postData.contents.length>7100000)throw Error('Permintaan tidak valid.');
  var envelope=JSON.parse(e.postData.contents);verify_(envelope);
  if(!lock.tryLock(25000))throw Error('Layanan sibuk. Coba kembali.');
  var cache=CacheService.getScriptCache();if(cache.get('nonce:'+envelope.nonce))throw Error('Permintaan sudah dipakai.');cache.put('nonce:'+envelope.nonce,'1',600);
  var p=JSON.parse(envelope.payload);
  if(!/^[0-9a-f-]{36}$/i.test(p.request_id||''))throw Error('ID tidak valid.');
  var props=PropertiesService.getScriptProperties(),folder=DriveApp.getFolderById(props.getProperty('DRIVE_FOLDER_ID'));
  var book=SpreadsheetApp.openById(props.getProperty('SPREADSHEET_ID'));
  var sheet=book.getSheetByName('Uploads');if(!sheet)throw Error('Jalankan setupMaharati dahulu.');
  if(folder.getSharingAccess()!==DriveApp.Access.PRIVATE || DriveApp.getFileById(book.getId()).getSharingAccess()!==DriveApp.Access.PRIVATE)throw Error('Folder dan spreadsheet harus Restricted/PRIVATE.');
  if(p.action==='health'){return json_({ok:true,bridge_version:'2026-10-04'});}
  var existing=findRow_(sheet,p.request_id);
  if(p.action==='read'){
   if(!existing||existing.values[5]!==p.file_id)throw Error('Arsip tidak ditemukan.');
   var file=DriveApp.getFileById(p.file_id);if(!belongs_(file,folder.getId()))throw Error('Folder tidak cocok.');
   var blob=file.getBlob(),data=blob.getBytes();if(data.length!==Number(existing.values[8])||mime_(data)!==existing.values[7])throw Error('Berkas arsip berubah.');return json_({ok:true,base64:Utilities.base64Encode(data),mime:existing.values[7],size:data.length});
  }
  if(p.action!=='upload'||!['donations','payouts'].includes(p.kind)||!/^[0-9a-f-]{36}$/i.test(p.user_id||''))throw Error('Tindakan tidak valid.');
  var bytes=Utilities.base64Decode(p.base64||''),mime=mime_(bytes);
  if(!mime||mime!==p.mime||bytes.length!==p.size||bytes.length>5242880)throw Error('Berkas tidak valid.');
  if(existing){if(existing.values[1]!==p.user_id||existing.values[2]!==p.kind||Number(existing.values[8])!==p.size||existing.values[7]!==mime)throw Error('ID unggahan tidak cocok.');return json_({ok:true,file_id:existing.values[5],mime:mime,size:bytes.length});}
  var ext=mime==='image/png'?'png':mime==='application/pdf'?'pdf':'jpg';
  var name=p.request_id+'.'+ext;
  // Named by request ID: recover a file created before an interrupted sheet append.
  var matches=folder.getFilesByName(name),file=matches.hasNext()?matches.next():folder.createFile(Utilities.newBlob(bytes,mime,name));
  file.setSharing(DriveApp.Access.PRIVATE,DriveApp.Permission.NONE);
  var path=p.user_id+'/'+p.kind+'/'+name;
  sheet.appendRow([p.request_id,p.user_id,p.kind,path,name,file.getId(),file.getUrl(),mime,bytes.length,new Date().toISOString(),'stored']);
  return json_({ok:true,file_id:file.getId(),mime:mime,size:bytes.length});
 }catch(err){return json_({ok:false,error:err.message||'Permintaan gagal.'});}
 finally{if(lock.hasLock())lock.releaseLock();}
}
function verify_(e){
 var secret=PropertiesService.getScriptProperties().getProperty('BRIDGE_SECRET')||'';
 if(secret.length<32||typeof e.payload!=='string'||!Number.isFinite(e.timestamp)||Math.abs(Date.now()-e.timestamp)>300000||!/^[\w-]{20,80}$/.test(e.nonce||''))throw Error('Otentikasi penghubung gagal.');
 var expected=Utilities.computeHmacSha256Signature(e.timestamp+'.'+e.nonce+'.'+e.payload,secret).map(function(b){return ('0'+((b+256)%256).toString(16)).slice(-2);}).join('');
 var actual=String(e.signature||''),diff=expected.length^actual.length;for(var i=0;i<expected.length;i++)diff|=expected.charCodeAt(i)^(actual.charCodeAt(i)||0);if(diff!==0)throw Error('Tanda tangan tidak valid.');
}
function findRow_(sheet,id){if(sheet.getLastRow()<2)return null;var cell=sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext();return cell?{row:cell.getRow(),values:sheet.getRange(cell.getRow(),1,1,11).getValues()[0]}:null;}
function belongs_(file,folder){var parents=file.getParents();while(parents.hasNext())if(parents.next().getId()===folder)return true;return false;}
function mime_(bytes){var b=bytes.slice(0,8).map(function(x){return(x+256)%256;});if(b.length>=8&&[137,80,78,71,13,10,26,10].every(function(x,i){return b[i]===x;}))return'image/png';if(b[0]===255&&b[1]===216&&b[2]===255)return'image/jpeg';if(String.fromCharCode.apply(null,b.slice(0,5))==='%PDF-')return'application/pdf';return null;}
function json_(data){return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);}
function setupMaharati(){
 var p=PropertiesService.getScriptProperties();
 if(!p.getProperty('BRIDGE_SECRET')||(p.getProperty('BRIDGE_SECRET')||'').length<32)throw Error('Isi BRIDGE_SECRET minimal 32 karakter di Script Properties.');
 if(!p.getProperty('DRIVE_FOLDER_ID')){var f=DriveApp.createFolder('MAHARATI_PRIVATE_PROOFS');f.setSharing(DriveApp.Access.PRIVATE,DriveApp.Permission.NONE);p.setProperty('DRIVE_FOLDER_ID',f.getId());}
 if(!p.getProperty('SPREADSHEET_ID')){var b=SpreadsheetApp.create('MAHARATI — Arsip Unggahan');p.setProperty('SPREADSHEET_ID',b.getId());}
 var book=SpreadsheetApp.openById(p.getProperty('SPREADSHEET_ID'));
 var sheet=book.getSheetByName('Uploads')||book.insertSheet('Uploads');
 if(sheet.getLastRow()===0){sheet.appendRow(['request_id','user_id','kind','proof_path','file_name','drive_file_id','drive_url','mime_type','byte_size','created_at','archive_status']);sheet.setFrozenRows(1);}
 // Keep the spreadsheet private. Do not deploy it as a public CSV.
 return 'Selesai. ID folder dan spreadsheet tersimpan pada Script Properties.';
}
