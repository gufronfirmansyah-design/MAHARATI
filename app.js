(function(){"use strict";function zc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var mo={exports:{}},Er={};var qc;function Hy(){if(qc)return Er;qc=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(u,o,m){var c=null;if(m!==void 0&&(c=""+m),o.key!==void 0&&(c=""+o.key),"key"in o){m={};for(var h in o)h!=="key"&&(m[h]=o[h])}else m=o;return o=m.ref,{$$typeof:i,type:u,key:c,ref:o!==void 0?o:null,props:m}}return Er.Fragment=n,Er.jsx=r,Er.jsxs=r,Er}var Vc;function zy(){return Vc||(Vc=1,mo.exports=Hy()),mo.exports}var k=zy(),co={exports:{}},ca={};var Fc;function qy(){if(Fc)return ca;Fc=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),j=Symbol.for("react.view_transition"),T=Symbol.iterator;function P(w){return w===null||typeof w!="object"?null:(w=T&&w[T]||w["@@iterator"],typeof w=="function"?w:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,L={};function U(w,H,ra){this.props=w,this.context=H,this.refs=L,this.updater=ra||E}U.prototype.isReactComponent={},U.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},U.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=U.prototype;function z(w,H,ra){this.props=w,this.context=H,this.refs=L,this.updater=ra||E}var ea=z.prototype=new O;ea.constructor=z,S(ea,U.prototype),ea.isPureReactComponent=!0;var W=Array.isArray;function q(){}var ia={H:null,A:null,T:null,S:null},ya=Object.prototype.hasOwnProperty;function Pa(w,H,ra){var ua=ra.ref;return{$$typeof:i,type:w,key:H,ref:ua!==void 0?ua:null,props:ra}}function wa(w,H){return Pa(w.type,H,w.props)}function Ma(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function I(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ra){return H[ra]})}var oa=/\/+/g;function pa(w,H){return typeof w=="object"&&w!==null&&w.key!=null?I(""+w.key):H.toString(36)}function R(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(q,q):(w.status="pending",w.then(function(H){w.status==="pending"&&(w.status="fulfilled",w.value=H)},function(H){w.status==="pending"&&(w.status="rejected",w.reason=H)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function G(w,H,ra,ua,Ea){var Na=typeof w;(Na==="undefined"||Na==="boolean")&&(w=null);var Ca=!1;if(w===null)Ca=!0;else switch(Na){case"bigint":case"string":case"number":Ca=!0;break;case"object":switch(w.$$typeof){case i:case n:Ca=!0;break;case y:return Ca=w._init,G(Ca(w._payload),H,ra,ua,Ea)}}if(Ca)return Ea=Ea(w),Ca=ua===""?"."+pa(w,0):ua,W(Ea)?(ra="",Ca!=null&&(ra=Ca.replace(oa,"$&/")+"/"),G(Ea,H,ra,"",function(qn){return qn})):Ea!=null&&(Ma(Ea)&&(Ea=wa(Ea,ra+(Ea.key==null||w&&w.key===Ea.key?"":(""+Ea.key).replace(oa,"$&/")+"/")+Ca)),H.push(Ea)),1;Ca=0;var ta=ua===""?".":ua+":";if(W(w))for(var ka=0;ka<w.length;ka++)ua=w[ka],Na=ta+pa(ua,ka),Ca+=G(ua,H,ra,Na,Ea);else if(ka=P(w),typeof ka=="function")for(w=ka.call(w),ka=0;!(ua=w.next()).done;)ua=ua.value,Na=ta+pa(ua,ka++),Ca+=G(ua,H,ra,Na,Ea);else if(Na==="object"){if(typeof w.then=="function")return G(R(w),H,ra,ua,Ea);throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Ca}function Q(w,H,ra){if(w==null)return w;var ua=[],Ea=0;return G(w,ua,"","",function(Na){return H.call(ra,Na,Ea++)}),ua}function X(w){if(w._status===-1){var H=w._result,ra=H();ra.then(function(ua){(w._status===0||w._status===-1)&&(w._status=1,w._result=ua,ra.status===void 0&&(ra.status="fulfilled",ra.value=ua))},function(ua){(w._status===0||w._status===-1)&&(w._status=2,w._result=ua,ra.status===void 0&&(ra.status="rejected",ra.reason=ua))}),w._status===-1&&(w._status=0,w._result=ra)}if(w._status===1)return w._result.default;throw w._result}var ma=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Va(w){var H=ia.T,ra={};ra.types=H!==null?H.types:null,ia.T=ra;try{var ua=w(),Ea=ia.S;Ea!==null&&Ea(ra,ua),typeof ua=="object"&&ua!==null&&typeof ua.then=="function"&&ua.then(q,ma)}catch(Na){ma(Na)}finally{H!==null&&ra.types!==null&&(H.types=ra.types),ia.T=H}}function Ue(w){var H=ia.T;if(H!==null){var ra=H.types;ra===null?H.types=[w]:ra.indexOf(w)===-1&&ra.push(w)}else Va(Ue.bind(null,w))}var V={map:Q,forEach:function(w,H,ra){Q(w,function(){H.apply(this,arguments)},ra)},count:function(w){var H=0;return Q(w,function(){H++}),H},toArray:function(w){return Q(w,function(H){return H})||[]},only:function(w){if(!Ma(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ca.Activity=f,ca.Children=V,ca.Component=U,ca.Fragment=r,ca.Profiler=o,ca.PureComponent=z,ca.StrictMode=u,ca.Suspense=g,ca.ViewTransition=j,ca.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ia,ca.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ia.H.useMemoCache(w)}},ca.addTransitionType=Ue,ca.cache=function(w){return function(){return w.apply(null,arguments)}},ca.cacheSignal=function(){return null},ca.cloneElement=function(w,H,ra){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ua=S({},w.props),Ea=w.key;if(H!=null)for(Na in H.key!==void 0&&(Ea=""+H.key),H)!ya.call(H,Na)||Na==="key"||Na==="__self"||Na==="__source"||Na==="ref"&&H.ref===void 0||(ua[Na]=H[Na]);var Na=arguments.length-2;if(Na===1)ua.children=ra;else if(1<Na){for(var Ca=Array(Na),ta=0;ta<Na;ta++)Ca[ta]=arguments[ta+2];ua.children=Ca}return Pa(w.type,Ea,ua)},ca.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},ca.createElement=function(w,H,ra){var ua,Ea={},Na=null;if(H!=null)for(ua in H.key!==void 0&&(Na=""+H.key),H)ya.call(H,ua)&&ua!=="key"&&ua!=="__self"&&ua!=="__source"&&(Ea[ua]=H[ua]);var Ca=arguments.length-2;if(Ca===1)Ea.children=ra;else if(1<Ca){for(var ta=Array(Ca),ka=0;ka<Ca;ka++)ta[ka]=arguments[ka+2];Ea.children=ta}if(w&&w.defaultProps)for(ua in Ca=w.defaultProps,Ca)Ea[ua]===void 0&&(Ea[ua]=Ca[ua]);return Pa(w,Na,Ea)},ca.createRef=function(){return{current:null}},ca.forwardRef=function(w){return{$$typeof:h,render:w}},ca.isValidElement=Ma,ca.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:X}},ca.memo=function(w,H){return{$$typeof:b,type:w,compare:H===void 0?null:H}},ca.startTransition=Va,ca.unstable_useCacheRefresh=function(){return ia.H.useCacheRefresh()},ca.use=function(w){return ia.H.use(w)},ca.useActionState=function(w,H,ra){return ia.H.useActionState(w,H,ra)},ca.useCallback=function(w,H){return ia.H.useCallback(w,H)},ca.useContext=function(w){return ia.H.useContext(w)},ca.useDebugValue=function(){},ca.useDeferredValue=function(w,H){return ia.H.useDeferredValue(w,H)},ca.useEffect=function(w,H){return ia.H.useEffect(w,H)},ca.useEffectEvent=function(w){return ia.H.useEffectEvent(w)},ca.useId=function(){return ia.H.useId()},ca.useImperativeHandle=function(w,H,ra){return ia.H.useImperativeHandle(w,H,ra)},ca.useInsertionEffect=function(w,H){return ia.H.useInsertionEffect(w,H)},ca.useLayoutEffect=function(w,H){return ia.H.useLayoutEffect(w,H)},ca.useMemo=function(w,H){return ia.H.useMemo(w,H)},ca.useOptimistic=function(w,H){return ia.H.useOptimistic(w,H)},ca.useReducer=function(w,H,ra){return ia.H.useReducer(w,H,ra)},ca.useRef=function(w){return ia.H.useRef(w)},ca.useState=function(w){return ia.H.useState(w)},ca.useSyncExternalStore=function(w,H,ra){return ia.H.useSyncExternalStore(w,H,ra)},ca.useTransition=function(){return ia.H.useTransition()},ca.version="19.3.0",ca}var Yc;function ko(){return Yc||(Yc=1,co.exports=qy()),co.exports}var _=ko();const Vy=zc(_);var ho=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Xc=/^[\\/]{2}/;function Fy(i,n){return n+i.replace(/\\/g,"/")}var Qc="popstate";function Wc(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function Yy(i={}){function n(o,m){let{pathname:c="/",search:h="",hash:g=""}=$t(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),go("",{pathname:c,search:h,hash:g},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function r(o,m){let c=o.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let g=o.location.href,b=g.indexOf("#");h=b===-1?g:g.slice(0,b)}return h+"#"+(typeof m=="string"?m:vi(m))}function u(o,m){Ye(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Qy(n,r,u,i)}function qa(i,n){if(i===!1||i===null||typeof i>"u")throw new Error(n)}function Ye(i,n){if(!i){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Xy(){return Math.random().toString(36).substring(2,10)}function Zc(i,n){return{usr:i.state,key:i.key,idx:n,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function go(i,n,r=null,u,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof n=="string"?$t(n):n,state:r,key:n&&n.key||u||Xy(),mask:o}}function vi({pathname:i="/",search:n="",hash:r=""}){return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function $t(i){let n={};if(i){let r=i.indexOf("#");r>=0&&(n.hash=i.substring(r),i=i.substring(0,r));let u=i.indexOf("?");u>=0&&(n.search=i.substring(u),i=i.substring(0,u)),i&&(n.pathname=i)}return n}function Qy(i,n,r,u={}){let{window:o=document.defaultView,v5Compat:m=!1}=u,c=o.history,h="POP",g=null,b=y();b==null&&(b=0,c.replaceState({...c.state,idx:b},""));function y(){return(c.state||{idx:null}).idx}function f(){h="POP";let S=y(),L=S==null?null:S-b;b=S,g&&g({action:h,location:E.location,delta:L})}function j(S,L){h="PUSH";let U=Wc(S)?S:go(E.location,S,L);r&&r(U,S),b=y()+1;let O=Zc(U,b),z=E.createHref(U.mask||U);try{c.pushState(O,"",z)}catch(ea){if(ea instanceof DOMException&&ea.name==="DataCloneError")throw ea;o.location.assign(z)}m&&g&&g({action:h,location:E.location,delta:1})}function T(S,L){h="REPLACE";let U=Wc(S)?S:go(E.location,S,L);r&&r(U,S),b=y();let O=Zc(U,b),z=E.createHref(U.mask||U);c.replaceState(O,"",z),m&&g&&g({action:h,location:E.location,delta:0})}function P(S){return Wy(o,S)}let E={get action(){return h},get location(){return i(o,c)},listen(S){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Qc,f),g=S,()=>{o.removeEventListener(Qc,f),g=null}},createHref(S){return n(o,S)},createURL:P,encodeLocation(S){let L=P(S);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:j,replace:T,go(S){return c.go(S)}};return E}function Wy(i,n,r=!1){let u="http://localhost";i&&(u=i.location.origin!=="null"?i.location.origin:i.location.href),qa(u,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:vi(n);return o=o.replace(/ $/,"%20"),!r&&Xc.test(o)&&(o=u+o),new URL(o,u)}function ak(i,n,r="/"){return Zy(i,n,r,!1)}function Zy(i,n,r,u,o){let m=typeof n=="string"?$t(n):n,c=Kn(m.pathname||"/",r);if(c==null)return null;let h=av(i),g=null,b=mv(c);for(let y=0;g==null&&y<h.length;++y)g=dv(h[y],b,u);return g}function av(i){let n=ek(i);return ev(n),n}function ek(i,n=[],r=[],u="",o=!1){let m=(c,h,g=o,b)=>{let y={relativePath:b===void 0?c.path||"":b,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&g)return;qa(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let f=ln([u,y.relativePath]),j=r.concat(y);c.children&&c.children.length>0&&(qa(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),ek(c.children,n,j,f,g)),!(c.path==null&&!c.index)&&n.push({path:f,score:lv(f,c.index),routesMeta:j.map((T,P)=>{let[E,S]=rk(T.relativePath,T.caseSensitive,P===j.length-1);return{...T,matcher:E,compiledParams:S}})})};return i.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))m(c,h);else for(let g of nk(c.path))m(c,h,!0,g)}),n}function nk(i){let n=i.split("/");if(n.length===0)return[];let[r,...u]=n,o=r.endsWith("?"),m=r.replace(/\?$/,"");if(u.length===0)return o?[m,""]:[m];let c=nk(u.join("/")),h=[];return h.push(...c.map(g=>g===""?m:[m,g].join("/"))),o&&h.push(...c),h.map(g=>i.startsWith("/")&&g===""?"/":g)}function ev(i){i.sort((n,r)=>n.score!==r.score?r.score-n.score:ov(n.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var nv=/^:[\w-]+$/,tv=3,iv=2,rv=1,sv=10,uv=-2,tk=i=>i==="*";function lv(i,n){let r=i.split("/"),u=r.length;return r.some(tk)&&(u+=uv),n&&(u+=iv),r.filter(o=>!tk(o)).reduce((o,m)=>o+(nv.test(m)?tv:m===""?rv:sv),u)}function ov(i,n){return i.length===n.length&&i.slice(0,-1).every((u,o)=>u===n[o])?i[i.length-1]-n[n.length-1]:0}function dv(i,n,r=!1){let{routesMeta:u}=i,o={},m="/",c=[];for(let h=0;h<u.length;++h){let g=u[h],b=h===u.length-1,y=m==="/"?n:n.slice(m.length)||"/",f={path:g.relativePath,caseSensitive:g.caseSensitive,end:b},j=g.matcher&&g.compiledParams?ik(f,y,g.matcher,g.compiledParams):Ys(f,y),T=g.route;if(!j&&b&&r&&!u[u.length-1].route.index&&(j=Ys({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!j)return null;Object.assign(o,j.params),c.push({params:o,pathname:ln([m,j.pathname]),pathnameBase:hv(ln([m,j.pathnameBase])),route:T}),j.pathnameBase!=="/"&&(m=ln([m,j.pathnameBase]))}return c}function Ys(i,n){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[r,u]=rk(i.path,i.caseSensitive,i.end);return ik(i,n,r,u)}function ik(i,n,r,u){let o=n.match(r);if(!o)return null;let m=o[0],c=ji(m,1),h=o.slice(1);return{params:u.reduce((b,{paramName:y,isOptional:f},j)=>{if(y==="*"){let P=h[j]||"";c=ji(m.slice(0,m.length-P.length),1)}const T=h[j];return f&&!T?b[y]=void 0:b[y]=(T||"").replace(/%2F/g,"/"),b},{}),pathname:m,pathnameBase:c,pattern:i}}function rk(i,n=!1,r=!0){Ye(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,g,b,y)=>{if(u.push({paramName:h,isOptional:g!=null}),g){let f=y.charAt(b+c.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),u]}function mv(i){try{return i.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ye(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),i}}function Kn(i,n){if(n==="/")return i;if(!i.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,u=i.charAt(r);return u&&u!=="/"?null:i.slice(r)||"/"}function cv(i,n="/"){let{pathname:r,search:u="",hash:o=""}=typeof i=="string"?$t(i):i,m;return r?(r=lk(r),r.startsWith("/")||r.startsWith("\\")?m=sk(r.substring(1),"/"):m=sk(r,n)):m=n,{pathname:m,search:gv(u),hash:pv(o)}}function sk(i,n){let r=ji(n).split("/");return i.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function po(i,n,r,u){return`Cannot include a '${i}' character in a manually specified \`to.${n}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kv(i){return i.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function uk(i){let n=kv(i);return n.map((r,u)=>u===n.length-1?r.pathname:r.pathnameBase)}function bo(i,n,r,u=!1){let o;typeof i=="string"?o=$t(i):(o={...i},qa(!o.pathname||!o.pathname.includes("?"),po("?","pathname","search",o)),qa(!o.pathname||!o.pathname.includes("#"),po("#","pathname","hash",o)),qa(!o.search||!o.search.includes("#"),po("#","search","hash",o)));let m=i===""||o.pathname==="",c=m?"/":o.pathname,h;if(c==null)h=r;else{let f=n.length-1;if(!u&&c.startsWith("..")){let j=c.split("/");for(;j[0]==="..";)j.shift(),f-=1;o.pathname=j.join("/")}h=f>=0?n[f]:"/"}let g=cv(o,h),b=c&&c!=="/"&&c.endsWith("/"),y=(m||c===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(b||y)&&(g.pathname+="/"),g}var lk=i=>i.replace(/[\\/]{2,}/g,"/"),ln=i=>lk(i.join("/"));function ji(i,n=0){let r=i.length;for(;r>n&&i.charCodeAt(r-1)===47;)r--;return r===i.length?i:i.slice(0,r)}var hv=i=>ji(i).replace(/^\/*/,"/"),gv=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,pv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,bv=class{constructor(i,n,r,u=!1){this.status=i,this.statusText=n||"",this.internal=u,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function fv(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function yv(i){let n=i.map(r=>r.route.path).filter(Boolean);return ln(n)||"/"}var ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function dk(i,n){let r=i;if(typeof r!="string"||!ho.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let u=r,o=!1;if(ok)try{let m=new URL(window.location.href),c=Xc.test(r)?new URL(Fy(r,m.protocol)):new URL(r),h=Kn(c.pathname,n);c.origin===m.origin&&h!=null?r=h+c.search+c.hash:o=!0}catch{Ye(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:o,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mk=new URL("http://localhost");function ck(i){if(i.createURL)return i.createURL("/");try{return new URL(i.createHref("/"),mk)}catch{return mk}}function fo(i,n){return i.origin===n.origin&&(i.origin!=="null"||i.protocol===n.protocol&&i.host===n.host)}function vv(i,n){if(i.startsWith("//"))return!0;let r=n.protocol.toLowerCase();return i.toLowerCase().startsWith(r)?n.host===""||i.slice(r.length).startsWith("//"):!1}function kk(i,n,r,u){let o=null;try{o=i==null?null:new URL(i,r)}catch{}let m=new URL(n,r),c=o!=null&&!fo(o,r),h=!fo(m,r);if(u==="reject"){if(c||h)throw new Error("External navigation is not allowed")}else if(h&&(o==null||!vv(i,o)||!fo(o,m)))throw new Error("External navigation is not allowed")}var hk=["POST","PUT","PATCH","DELETE"];new Set(hk);var jv=["GET",...hk];new Set(jv);var Sv=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Tv(i){try{return Sv.includes(new URL(i).protocol)}catch{return!1}}var Si=_.createContext(null);Si.displayName="DataRouter";var Xs=_.createContext(null);Xs.displayName="DataRouterState";var gk=_.createContext(!1);function Av(){return _.useContext(gk)}var pk=_.createContext({isTransitioning:!1});pk.displayName="ViewTransition";var _v=_.createContext(new Map);_v.displayName="Fetchers";var Pv=_.createContext(null);Pv.displayName="Await";var Xe=_.createContext(null);Xe.displayName="Navigation";var Rr=_.createContext(null);Rr.displayName="Location";var on=_.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var yo=_.createContext(null);yo.displayName="RouteError";var bk="REACT_ROUTER_ERROR",wv="REDIRECT",Mv="ROUTE_ERROR_RESPONSE";function Ev(i){if(i.startsWith(`${bk}:${wv}:{`))try{let n=JSON.parse(i.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Rv(i){if(i.startsWith(`${bk}:${Mv}:{`))try{let n=JSON.parse(i.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new bv(n.status,n.statusText,n.data)}catch{}}function Nv(i,{relative:n}={}){qa(Nr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=_.useContext(Xe),{hash:o,pathname:m,search:c}=xr(i,{relative:n}),h=m;return r!=="/"&&(h=m==="/"?r:ln([r,m])),u.createHref({pathname:h,search:c,hash:o})}function Nr(){return _.useContext(Rr)!=null}function dn(){return qa(Nr(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Rr).location}var fk="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yk(i){_.useContext(Xe).static||_.useLayoutEffect(i)}function Qs(){let{isDataRoute:i}=_.useContext(on);return i?qv():xv()}function xv(){qa(Nr(),"useNavigate() may be used only in the context of a <Router> component.");let i=_.useContext(Si),{basename:n,navigator:r}=_.useContext(Xe),{matches:u}=_.useContext(on),{pathname:o}=dn(),m=JSON.stringify(uk(u)),c=_.useRef(!1);return yk(()=>{c.current=!0}),_.useCallback((g,b={})=>{if(Ye(c.current,fk),!c.current)return;if(typeof g=="number"){r.go(g);return}let y=bo(g,JSON.parse(m),o,b.relative==="path");i==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:ln([n,y.pathname])),kk(typeof g=="string"?g:vi(g),r.createHref(y),ck(r),"reject"),(b.replace?r.replace:r.push)(y,b.state,b)},[n,r,m,o,i])}var Cv=_.createContext(null);function Bv(i){let n=_.useContext(on).outlet;return _.useMemo(()=>n&&_.createElement(Cv.Provider,{value:i},n),[n,i])}function vk(){let{matches:i}=_.useContext(on);return i[i.length-1]?.params??{}}function xr(i,{relative:n}={}){let{matches:r}=_.useContext(on),{pathname:u}=dn(),o=JSON.stringify(uk(r));return _.useMemo(()=>bo(i,JSON.parse(o),u,n==="path"),[i,o,u,n])}function Ov(i,n){return jk(i,n)}function jk(i,n,r){qa(Nr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=_.useContext(Xe),{matches:o}=_.useContext(on),m=o[o.length-1],c=m?m.params:{},h=m?m.pathname:"/",g=m?m.pathnameBase:"/",b=m&&m.route;{let S=b&&b.path||"";Ak(h,!b||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let y=dn(),f;if(n){let S=typeof n=="string"?$t(n):n;qa(g==="/"||S.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${S.pathname}" was given in the \`location\` prop.`),f=S}else f=y;let j=f.pathname||"/",T=j;if(g!=="/"){let S=g.replace(/^\//,"").split("/");T="/"+j.replace(/^\//,"").split("/").slice(S.length).join("/")}let P=r&&r.state.matches.length?r.state.matches.map(S=>Object.assign(S,{route:r.manifest[S.route.id]||S.route})):ak(i,{pathname:T});Ye(b||P!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Ye(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Iv(P&&P.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:ln([g,u.encodeLocation?u.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?g:ln([g,u.encodeLocation?u.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),o,r);return n&&E?_.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},E):E}function Dv(){let i=zv(),n=fv(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),r=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:m},"ErrorBoundary")," or"," ",_.createElement("code",{style:m},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},n),r?_.createElement("pre",{style:o},r):null,c)}var Uv=_.createElement(Dv,null),Sk=class extends _.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,n){return n.location!==i.location||n.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:n.error,location:n.location,revalidation:i.revalidation||n.revalidation}}componentDidCatch(i,n){this.props.onError?this.props.onError(i,n):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const r=Rv(i.digest);r&&(i=r)}let n=i!==void 0?_.createElement(on.Provider,{value:this.props.routeContext},_.createElement(yo.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?_.createElement(Kv,{error:i},n):n}};Sk.contextType=gk;var vo=new WeakMap;function Kv({children:i,error:n}){let{basename:r,navigator:u}=_.useContext(Xe);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let o=Ev(n.digest);if(o){let m=vo.get(n);if(m)throw m;let c=dk(o.location,r),h=c.absoluteURL||c.to;if(kk(o.location,h,ck(u),"allow-explicit"),Tv(h))throw new Error("Invalid redirect location");if(ok&&!vo.get(n))if(c.isExternal||o.reloadDocument)window.location.href=h;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw vo.set(n,g),g}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return i}function Lv({routeContext:i,match:n,children:r}){let u=_.useContext(Si);return u&&u.static&&u.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(on.Provider,{value:i},r)}function Iv(i,n=[],r){let u=r?.state;if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(n.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let o=i,m=u?.errors;if(m!=null){let y=o.findIndex(f=>f.route.id&&m?.[f.route.id]!==void 0);qa(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let c=!1,h=-1;if(r&&u){c=u.renderFallback;for(let y=0;y<o.length;y++){let f=o[y];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(h=y),f.route.id){let{loaderData:j,errors:T}=u,P=f.route.loader&&!j.hasOwnProperty(f.route.id)&&(!T||T[f.route.id]===void 0);if(f.route.lazy||P){r.isStatic&&(c=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let g=r?.onError,b=u&&g?(y,f)=>{g(y,{location:u.location,params:u.matches?.[0]?.params??{},pattern:yv(u.matches),errorInfo:f})}:void 0;return o.reduceRight((y,f,j)=>{let T,P=!1,E=null,S=null;u&&(T=m&&f.route.id?m[f.route.id]:void 0,E=f.route.errorElement||Uv,c&&(h<0&&j===0?(Ak("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,S=null):h===j&&(P=!0,S=f.route.hydrateFallbackElement||null)));let L=n.concat(o.slice(0,j+1)),U=()=>{let O;return T?O=E:P?O=S:f.route.Component?O=_.createElement(f.route.Component,null):f.route.element?O=f.route.element:O=y,_.createElement(Lv,{match:f,routeContext:{outlet:y,matches:L,isDataRoute:u!=null},children:O})};return u&&(f.route.ErrorBoundary||f.route.errorElement||j===0)?_.createElement(Sk,{location:u.location,revalidation:u.revalidation,component:E,error:T,children:U(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:b}):U()},null)}function jo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $v(i){let n=_.useContext(Si);return qa(n,jo(i)),n}function Jv(i){let n=_.useContext(Xs);return qa(n,jo(i)),n}function Gv(i){let n=_.useContext(on);return qa(n,jo(i)),n}function So(i){let n=Gv(i),r=n.matches[n.matches.length-1];return qa(r.route.id,`${i} can only be used on routes that contain a unique "id"`),r.route.id}function Hv(){return So("useRouteId")}function zv(){let i=_.useContext(yo),n=Jv("useRouteError"),r=So("useRouteError");return i!==void 0?i:n.errors?.[r]}function qv(){let{router:i}=$v("useNavigate"),n=So("useNavigate"),r=_.useRef(!1);return yk(()=>{r.current=!0}),_.useCallback(async(o,m={})=>{Ye(r.current,fk),r.current&&(typeof o=="number"?await i.navigate(o):await i.navigate(o,{fromRouteId:n,...m}))},[i,n])}var Tk={};function Ak(i,n,r){!n&&!Tk[i]&&(Tk[i]=!0,Ye(!1,r))}_.memo(Vv);function Vv({routes:i,manifest:n,future:r,state:u,isStatic:o,onError:m}){return jk(i,void 0,{manifest:n,state:u,isStatic:o,onError:m})}function Fv(i){return Bv(i.context)}function Pe(i){qa(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yv({basename:i="/",children:n=null,location:r,navigationType:u="POP",navigator:o,static:m=!1,useTransitions:c}){qa(!Nr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),g=_.useMemo(()=>({basename:h,navigator:o,static:m,useTransitions:c,future:{}}),[h,o,m,c]);typeof r=="string"&&(r=$t(r));let{pathname:b="/",search:y="",hash:f="",state:j=null,key:T="default",mask:P}=r,E=_.useMemo(()=>{let S=Kn(b,h);return S==null?null:{location:{pathname:S,search:y,hash:f,state:j,key:T,mask:P},navigationType:u}},[h,b,y,f,j,T,u,P]);return Ye(E!=null,`<Router basename="${h}"> is not able to match the URL "${b}${y}${f}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:_.createElement(Xe.Provider,{value:g},_.createElement(Rr.Provider,{children:n,value:E}))}function Xv({children:i,location:n}){return Ov(To(i),n)}function To(i,n=[]){let r=[];return _.Children.forEach(i,(u,o)=>{if(!_.isValidElement(u))return;let m=[...n,o];if(u.type===_.Fragment){r.push.apply(r,To(u.props.children,m));return}qa(u.type===Pe,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qa(!u.props.index||!u.props.children,"An index route cannot have child routes.");let c={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(c.children=To(u.props.children,m)),r.push(c)}),r}var Ws="get",Zs="application/x-www-form-urlencoded";function au(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Qv(i){return au(i)&&i.tagName.toLowerCase()==="button"}function Wv(i){return au(i)&&i.tagName.toLowerCase()==="form"}function Zv(i){return au(i)&&i.tagName.toLowerCase()==="input"}function aj(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ej(i,n){return i.button===0&&(!n||n==="_self")&&!aj(i)}function Ao(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((n,r)=>{let u=i[r];return n.concat(Array.isArray(u)?u.map(o=>[r,o]):[[r,u]])},[]))}function nj(i,n){let r=Ao(i);return n&&n.forEach((u,o)=>{r.has(o)||n.getAll(o).forEach(m=>{r.append(o,m)})}),r}var eu=null;function tj(){if(eu===null)try{new FormData(document.createElement("form"),0),eu=!1}catch{eu=!0}return eu}var ij=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _o(i){return i!=null&&!ij.has(i)?(Ye(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zs}"`),null):i}function rj(i,n){let r,u,o,m,c;if(Wv(i)){let h=i.getAttribute("action");u=h?Kn(h,n):null,r=i.getAttribute("method")||Ws,o=_o(i.getAttribute("enctype"))||Zs,m=new FormData(i)}else if(Qv(i)||Zv(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=i.getAttribute("formaction")||h.getAttribute("action");if(u=g?Kn(g,n):null,r=i.getAttribute("formmethod")||h.getAttribute("method")||Ws,o=_o(i.getAttribute("formenctype"))||_o(h.getAttribute("enctype"))||Zs,m=new FormData(h,i),!tj()){let{name:b,type:y,value:f}=i;if(y==="image"){let j=b?`${b}.`:"";m.append(`${j}x`,"0"),m.append(`${j}y`,"0")}else b&&m.append(b,f)}}else{if(au(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ws,u=null,o=Zs,c=i}return m&&o==="text/plain"&&(c=m,m=void 0),{action:u,method:r.toLowerCase(),encType:o,formData:m,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Po(i,n){if(i===!1||i===null||typeof i>"u")throw new Error(n)}function _k(i,n,r,u){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${u}`:o.pathname=`${o.pathname}.${u}`:o.pathname==="/"?o.pathname=`_root.${u}`:n&&Kn(o.pathname,n)==="/"?o.pathname=`${ji(n)}/_root.${u}`:o.pathname=`${ji(o.pathname)}.${u}`,o}async function sj(i,n){if(i.id in n)return n[i.id];try{let r=await import(i.module);return n[i.id]=r,r}catch(r){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uj(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function lj(i,n,r){let u=await Promise.all(i.map(async o=>{let m=n.routes[o.route.id];if(m){let c=await sj(m,r);return c.links?c.links():[]}return[]}));return cj(u.flat(1).filter(uj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pk(i,n,r,u,o,m){let c=(g,b)=>r[b]?g.route.id!==r[b].route.id:!0,h=(g,b)=>r[b].pathname!==g.pathname||r[b].route.path?.endsWith("*")&&r[b].params["*"]!==g.params["*"];return m==="assets"?n.filter((g,b)=>c(g,b)||h(g,b)):m==="data"?n.filter((g,b)=>{let y=u.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(c(g,b)||h(g,b))return!0;if(g.route.shouldRevalidate){let f=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function oj(i,n,{includeHydrateFallback:r}={}){return dj(i.map(u=>{let o=n.routes[u.route.id];if(!o)return[];let m=[o.module];return o.clientActionModule&&(m=m.concat(o.clientActionModule)),o.clientLoaderModule&&(m=m.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(m=m.concat(o.hydrateFallbackModule)),o.imports&&(m=m.concat(o.imports)),m}).flat(1))}function dj(i){return[...new Set(i)]}function mj(i){let n={},r=Object.keys(i).sort();for(let u of r)n[u]=i[u];return n}function cj(i,n){let r=new Set;return new Set(n),i.reduce((u,o)=>{let m=JSON.stringify(mj(o));return r.has(m)||(r.add(m),u.push({key:m,link:o})),u},[])}function wo(){let i=_.useContext(Si);return Po(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function kj(){let i=_.useContext(Xs);return Po(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Mo=_.createContext(void 0);Mo.displayName="FrameworkContext";function nu(){let i=_.useContext(Mo);return Po(i,"You must render this element inside a <HydratedRouter> element"),i}function hj(i,n){let r=_.useContext(Mo),[u,o]=_.useState(!1),[m,c]=_.useState(!1),{onFocus:h,onBlur:g,onMouseEnter:b,onMouseLeave:y,onTouchStart:f}=n,j=_.useRef(null);_.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let E=L=>{L.forEach(U=>{c(U.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return j.current&&S.observe(j.current),()=>{S.disconnect()}}},[i]),_.useEffect(()=>{if(u){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[u]);let T=()=>{o(!0)},P=()=>{o(!1),c(!1)};return r?i!=="intent"?[m,j,{}]:[m,j,{onFocus:Cr(h,T),onBlur:Cr(g,P),onMouseEnter:Cr(b,T),onMouseLeave:Cr(y,P),onTouchStart:Cr(f,T)}]:[!1,j,{}]}function Cr(i,n){return r=>{i&&i(r),r.defaultPrevented||n(r)}}function gj({page:i,...n}){let r=Av(),{nonce:u}=nu(),{router:o}=wo(),m=_.useMemo(()=>ak(o.routes,i,o.basename),[o.routes,i,o.basename]);return m?(n.nonce==null&&u&&(n={...n,nonce:u}),r?_.createElement(bj,{page:i,matches:m,...n}):_.createElement(fj,{page:i,matches:m,...n})):null}function pj(i){let{manifest:n,routeModules:r}=nu(),[u,o]=_.useState([]);return _.useEffect(()=>{let m=!1;return lj(i,n,r).then(c=>{m||o(c)}),()=>{m=!0}},[i,n,r]),u}function bj({page:i,matches:n,...r}){let u=dn(),{future:o}=nu(),{basename:m}=wo(),c=_.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let h=_k(i,m,o.v8_trailingSlashAwareDataRequests,"rsc"),g=!1,b=[];for(let y of n)typeof y.route.shouldRevalidate=="function"?g=!0:b.push(y.route.id);return g&&b.length>0&&h.searchParams.set("_routes",b.join(",")),[h.pathname+h.search]},[m,o.v8_trailingSlashAwareDataRequests,i,u,n]);return _.createElement(_.Fragment,null,c.map(h=>_.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...r})))}function fj({page:i,matches:n,...r}){let u=dn(),{future:o,manifest:m,routeModules:c}=nu(),{basename:h}=wo(),{loaderData:g,matches:b}=kj(),y=_.useMemo(()=>Pk(i,n,b,m,u,"data"),[i,n,b,m,u]),f=_.useMemo(()=>Pk(i,n,b,m,u,"assets"),[i,n,b,m,u]),j=_.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let E=new Set,S=!1;if(n.forEach(U=>{let O=m.routes[U.route.id];!O||!O.hasLoader||(!y.some(z=>z.route.id===U.route.id)&&U.route.id in g&&c[U.route.id]?.shouldRevalidate||O.hasClientLoader?S=!0:E.add(U.route.id))}),E.size===0)return[];let L=_k(i,h,o.v8_trailingSlashAwareDataRequests,"data");return S&&E.size>0&&L.searchParams.set("_routes",n.filter(U=>E.has(U.route.id)).map(U=>U.route.id).join(",")),[L.pathname+L.search]},[h,o.v8_trailingSlashAwareDataRequests,g,u,m,y,n,i,c]),T=_.useMemo(()=>oj(f,m),[f,m]),P=pj(f);return _.createElement(_.Fragment,null,j.map(E=>_.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...r})),T.map(E=>_.createElement("link",{key:E,rel:"modulepreload",href:E,...r})),P.map(({key:E,link:S})=>_.createElement("link",{key:E,nonce:r.nonce,...S,crossOrigin:S.crossOrigin??r.crossOrigin})))}function yj(...i){return n=>{i.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}var vj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vj&&(window.__reactRouterVersion="7.18.4")}catch{}function jj({basename:i,children:n,useTransitions:r,window:u}){let o=_.useRef();o.current==null&&(o.current=Yy({window:u,v5Compat:!0}));let m=o.current,[c,h]=_.useState({action:m.action,location:m.location}),g=_.useCallback(b=>{r===!1?h(b):_.startTransition(()=>h(b))},[r]);return _.useLayoutEffect(()=>m.listen(g),[m,g]),_.createElement(Yv,{basename:i,children:n,location:c.location,navigationType:c.action,navigator:m,useTransitions:r})}var Ra=_.forwardRef(function({onClick:n,discover:r="render",prefetch:u="none",relative:o,reloadDocument:m,replace:c,mask:h,state:g,target:b,to:y,preventScrollReset:f,viewTransition:j,defaultShouldRevalidate:T,...P},E){let{basename:S,navigator:L,useTransitions:U}=_.useContext(Xe),O=typeof y=="string"&&ho.test(y),z=dk(y,S);y=z.to;let ea=Nv(y,{relative:o}),W=dn(),q=null;if(h){let pa=bo(h,[],W.mask?W.mask.pathname:"/",!0);S!=="/"&&(pa.pathname=pa.pathname==="/"?S:ln([S,pa.pathname])),q=L.createHref(pa)}let[ia,ya,Pa]=hj(u,P),wa=Aj(y,{replace:c,mask:h,state:g,target:b,preventScrollReset:f,relative:o,viewTransition:j,defaultShouldRevalidate:T,useTransitions:U});function Ma(pa){n&&n(pa),pa.defaultPrevented||wa(pa)}let I=!(z.isExternal||m),oa=_.createElement("a",{...P,...Pa,href:(I?q:void 0)||z.absoluteURL||ea,onClick:I?Ma:n,ref:yj(E,ya),target:b,"data-discover":!O&&r==="render"?"true":void 0});return ia&&!O?_.createElement(_.Fragment,null,oa,_.createElement(gj,{page:ea})):oa});Ra.displayName="Link";var tu=_.forwardRef(function({"aria-current":n="page",caseSensitive:r=!1,className:u="",end:o=!1,style:m,to:c,viewTransition:h,children:g,...b},y){let f=xr(c,{relative:b.relative}),j=dn(),T=_.useContext(Xs),{navigator:P,basename:E}=_.useContext(Xe),S=T!=null&&Ej(f)&&h===!0,L=P.encodeLocation?P.encodeLocation(f).pathname:f.pathname,U=j.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;r||(U=U.toLowerCase(),O=O?O.toLowerCase():null,L=L.toLowerCase()),O&&E&&(O=Kn(O,E)||O);const z=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let ea=U===L||!o&&U.startsWith(L)&&U.charAt(z)==="/",W=O!=null&&(O===L||!o&&O.startsWith(L)&&O.charAt(L.length)==="/"),q={isActive:ea,isPending:W,isTransitioning:S},ia=ea?n:void 0,ya;typeof u=="function"?ya=u(q):ya=[u,ea?"active":null,W?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Pa=typeof m=="function"?m(q):m;return _.createElement(Ra,{...b,"aria-current":ia,className:ya,ref:y,style:Pa,to:c,viewTransition:h},typeof g=="function"?g(q):g)});tu.displayName="NavLink";var Sj=_.forwardRef(({discover:i="render",fetcherKey:n,navigate:r,reloadDocument:u,replace:o,state:m,method:c=Ws,action:h,onSubmit:g,relative:b,preventScrollReset:y,viewTransition:f,defaultShouldRevalidate:j,...T},P)=>{let{useTransitions:E}=_.useContext(Xe),S=wj(),L=Mj(h,{relative:b}),U=c.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&ho.test(h),z=ea=>{if(g&&g(ea),ea.defaultPrevented)return;ea.preventDefault();let W=ea.nativeEvent.submitter,q=W?.getAttribute("formmethod")||c,ia=()=>S(W||ea.currentTarget,{fetcherKey:n,method:q,navigate:r,replace:o,state:m,relative:b,preventScrollReset:y,viewTransition:f,defaultShouldRevalidate:j});E&&r!==!1?_.startTransition(()=>ia()):ia()};return _.createElement("form",{ref:P,method:U,action:L,onSubmit:u?g:z,...T,"data-discover":!O&&i==="render"?"true":void 0})});Sj.displayName="Form";function Tj(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wk(i){let n=_.useContext(Si);return qa(n,Tj(i)),n}function Aj(i,{target:n,replace:r,mask:u,state:o,preventScrollReset:m,relative:c,viewTransition:h,defaultShouldRevalidate:g,useTransitions:b}={}){let y=Qs(),f=dn(),j=xr(i,{relative:c});return _.useCallback(T=>{if(ej(T,n)){T.preventDefault();let P=r!==void 0?r:vi(f)===vi(j),E=()=>y(i,{replace:P,mask:u,state:o,preventScrollReset:m,relative:c,viewTransition:h,defaultShouldRevalidate:g});b?_.startTransition(()=>E()):E()}},[f,y,j,r,u,o,n,i,m,c,h,g,b])}function Eo(i){Ye(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=_.useRef(Ao(i)),r=_.useRef(!1),u=dn(),o=_.useMemo(()=>nj(u.search,r.current?null:n.current),[u.search]),m=Qs(),c=_.useCallback((h,g)=>{const b=Ao(typeof h=="function"?h(new URLSearchParams(o)):h);r.current=!0,m("?"+b,g)},[m,o]);return[o,c]}var _j=0,Pj=()=>`__${String(++_j)}__`;function wj(){let{router:i}=wk("useSubmit"),{basename:n}=_.useContext(Xe),r=Hv(),u=i.fetch,o=i.navigate;return _.useCallback(async(m,c={})=>{let{action:h,method:g,encType:b,formData:y,body:f}=rj(m,n);if(c.navigate===!1){let j=c.fetcherKey||Pj();await u(j,r,c.action||h,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:f,formMethod:c.method||g,formEncType:c.encType||b,flushSync:c.flushSync})}else await o(c.action||h,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:f,formMethod:c.method||g,formEncType:c.encType||b,replace:c.replace,state:c.state,fromRouteId:r,flushSync:c.flushSync,viewTransition:c.viewTransition})},[u,o,n,r])}function Mj(i,{relative:n}={}){let{basename:r}=_.useContext(Xe),u=_.useContext(on);qa(u,"useFormAction must be used inside a RouteContext");let[o]=u.matches.slice(-1),m={...xr(i||".",{relative:n})},c=dn();if(i==null){m.search=c.search;let h=new URLSearchParams(m.search),g=h.getAll("index");if(g.some(y=>y==="")){h.delete("index"),g.filter(f=>f).forEach(f=>h.append("index",f));let y=h.toString();m.search=y?`?${y}`:""}}return(!i||i===".")&&o.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(m.pathname=m.pathname==="/"?r:ln([r,m.pathname])),vi(m)}function Ej(i,{relative:n}={}){let r=_.useContext(pk);qa(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=wk("useViewTransitionState"),o=xr(i,{relative:n});if(!r.isTransitioning)return!1;let m=Kn(r.currentLocation.pathname,u)||r.currentLocation.pathname,c=Kn(r.nextLocation.pathname,u)||r.nextLocation.pathname;return Ys(o.pathname,c)!=null||Ys(o.pathname,m)!=null}var Ro={exports:{}},me={};var Mk;function Rj(){if(Mk)return me;Mk=1;var i=ko();function n(y){var f="https://react.dev/errors/"+y;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)f+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),c=Symbol.for("react.optimistic_key");function h(y,f,j){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:T===c?c:""+T,children:y,containerInfo:f,implementation:j}}var g=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(y,f){if(y==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,me.browser=function(y){return{$$typeof:m,_reason:y}},me.createPortal=function(y,f){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(n(299));return h(y,f,null,j)},me.flushSync=function(y){var f=g.T,j=u.p;try{if(g.T=null,u.p=2,y)return y()}finally{g.T=f,u.p=j,u.d.f()}},me.preconnect=function(y,f){typeof y=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(y,f))},me.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},me.preinit=function(y,f){if(typeof y=="string"&&f&&typeof f.as=="string"){var j=f.as,T=b(j,f.crossOrigin),P=typeof f.integrity=="string"?f.integrity:void 0,E=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;j==="style"?u.d.S(y,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:T,integrity:P,fetchPriority:E}):j==="script"&&u.d.X(y,{crossOrigin:T,integrity:P,fetchPriority:E,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},me.preinitModule=function(y,f){if(typeof y=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var j=b(f.as,f.crossOrigin);u.d.M(y,{crossOrigin:j,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0})}}else f==null&&u.d.M(y)},me.preload=function(y,f){if(typeof y=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var j=f.as,T=b(j,f.crossOrigin);u.d.L(y,j,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},me.preloadModule=function(y,f){if(typeof y=="string")if(f){var j=b(f.as,f.crossOrigin);u.d.m(y,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:j,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0})}else u.d.m(y)},me.requestFormReset=function(y){u.d.r(y)},me.unstable_batchedUpdates=function(y,f){return y(f)},me.useFormState=function(y,f,j){return g.H.useFormState(y,f,j)},me.useFormStatus=function(){return g.H.useHostTransitionStatus()},me.version="19.3.0",me}var Ek;function Nj(){if(Ek)return Ro.exports;Ek=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Ro.exports=Rj(),Ro.exports}const xj=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rk=(...i)=>i.filter((n,r,u)=>!!n&&n.trim()!==""&&u.indexOf(n)===r).join(" ").trim();var Cj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bj=_.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:u,className:o="",children:m,iconNode:c,...h},g)=>_.createElement("svg",{ref:g,...Cj,width:n,height:n,stroke:i,strokeWidth:u?Number(r)*24/Number(n):r,className:Rk("lucide",o),...h},[...c.map(([b,y])=>_.createElement(b,y)),...Array.isArray(m)?m:[m]]));const _a=(i,n)=>{const r=_.forwardRef(({className:u,...o},m)=>_.createElement(Bj,{ref:m,iconNode:n,className:Rk(`lucide-${xj(i)}`,u),...o}));return r.displayName=`${i}`,r};const Nk=_a("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const iu=_a("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Jt=_a("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const xk=_a("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const No=_a("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Oj=_a("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Dj=_a("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Ck=_a("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Uj=_a("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const xo=_a("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);const Co=_a("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);const Kj=_a("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const Lj=_a("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);const Bk=_a("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);const Ij=_a("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);const Bo=_a("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const $j=_a("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);const Jj=_a("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);const Gj=_a("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const Hj=_a("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const zj=_a("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);const qj=_a("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);const Vj=_a("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Fj=_a("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);const Yj=_a("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);const Xj=_a("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const Ok=_a("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const lt=_a("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Qj=_a("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const ru=_a("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);const Dk=_a("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const Wj=_a("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);const Uk=_a("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Kk={formUrl:"https://script.google.com/macros/s/AKfycbzPvb-YG3XtHIyg9h0ZmLeSU5cUlxta_QTi_-zkYjmGkuR5z_M2Vr6XJd1Pn8qzJumm/exec"};function Zj(){return k.jsxs("section",{className:"gemini-banner","aria-label":"Penawaran Gemini Pro",children:[k.jsx("span",{className:"gemini-symbol","aria-hidden":"true",children:k.jsx(lt,{size:26})}),k.jsxs("div",{className:"gemini-copy",children:[k.jsx("span",{className:"gemini-kicker",children:"PILIHAN UNTUK BERKARYA"}),k.jsx("h2",{children:"Butuh Gemini Pro?"}),k.jsx("p",{children:"Akun Head tersedia · Family habis"})]}),k.jsxs("div",{className:"gemini-price",children:[k.jsx("span",{children:"Harga & stok terkini"}),k.jsx("div",{children:k.jsx("strong",{children:"Lihat penawaran ↗"})})]}),k.jsxs(Ra,{className:"button gemini-cta",to:"/gemini",children:["Beli Gemini Pro ",k.jsx(Jt,{size:18})]})]})}function a0(){const[i,n]=_.useState(!1),[r,u]=_.useState(!0);return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"PENAWARAN GEMINI PRO"}),k.jsxs("section",{className:"gemini-hero",children:[k.jsxs("div",{children:[k.jsxs("span",{className:"gemini-stock",children:[k.jsx(No,{size:15})," Akun Head tersedia"]}),k.jsxs("h1",{children:["Lebih banyak ruang",k.jsx("br",{}),k.jsx("em",{children:"untuk ide Anda."})]}),k.jsx("p",{children:"Pilih akun Gemini Pro Head dan lanjutkan pemesanan melalui formulir yang tersedia."}),k.jsxs("div",{className:"gemini-hero-price",children:[k.jsx("strong",{children:"Harga terbaru di formulir"}),k.jsx("span",{children:"Nominal pembayaran mengikuti harga saat kuota dikunci."})]}),k.jsxs("button",{className:"button gemini-cta",onClick:()=>{n(!0),setTimeout(()=>document.getElementById("gemini-form")?.scrollIntoView({behavior:"smooth",block:"start"}),0)},children:["Lanjut ke formulir ",k.jsx(Jt,{size:18})]})]}),k.jsxs("aside",{className:"gemini-account-card",children:[k.jsx(lt,{size:38}),k.jsx("h2",{children:"Pilihan akun"}),k.jsxs("div",{className:"gemini-account-row",children:[k.jsx("strong",{children:"Head"}),k.jsx("span",{className:"gemini-stock",children:"Tersedia"})]}),k.jsxs("div",{className:"gemini-account-row muted",children:[k.jsx("strong",{children:"Family"}),k.jsx("span",{className:"gemini-sold",children:"Habis"})]}),k.jsx("p",{children:"Saat ini pemesanan tersedia untuk akun Head."})]})]}),k.jsxs("section",{className:"panel gemini-order",id:"gemini-form",children:[k.jsxs("div",{className:"section-heading",children:[k.jsxs("div",{children:[k.jsx("h2",{children:"Formulir pemesanan"}),k.jsx("p",{children:"Memerlukan koneksi internet. Detail pesanan dan pembayaran diisi pada formulir berikut."})]}),k.jsxs("a",{className:"button secondary",href:Kk.formUrl,target:"_blank",rel:"noopener noreferrer",children:["Buka di tab baru ",k.jsx(Kj,{size:16})]})]}),i?k.jsxs(k.Fragment,{children:[k.jsx("p",{className:"muted",children:"Jika formulir tidak tampil, gunakan tombol Buka di tab baru."}),r&&k.jsx("p",{role:"status",children:"Memuat formulir pemesanan…"}),k.jsx("iframe",{className:"gemini-frame",src:Kk.formUrl,title:"Formulir pemesanan Gemini Pro",onLoad:()=>u(!1),allowFullScreen:!0})]}):k.jsxs("div",{className:"gemini-form-placeholder",children:[k.jsx(lt,{size:24}),k.jsx("p",{children:"Siap memesan akun Head?"}),k.jsx("button",{className:"button secondary",onClick:()=>n(!0),children:"Tampilkan formulir"})]})]})]})}const e0={levels:JSON.parse('{"PAUD":[{"number":1,"header":"1. Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa","items":[{"id":"PAUD-1-1","label":"Hubungan dengan Tuhan Yang Maha Esa","pages":[5],"text":"Hubungan dengan Tuhan Yang Maha Esa\\nBerkembang: Mengenal Tuhan beserta ciptaan- Nya.\\nCakap: Mencontoh dan membiasakan perilaku sesuai perintah Tuhan secara sederhana, seperti berdoa, mengucapkan salam, atau bersyukur, dengan bimbingan orang dewasa.\\nMahir: Membiasakan diri melakukan perilaku sesuai perintah Tuhan dalam keseharian secara konsisten, seperti berdoa, mengucapkan salam, atau bersyukur serta menjadi contoh sederhana bagi teman sebaya."},{"id":"PAUD-1-2","label":"Hubungan dengan sesama","pages":[5],"text":"Hubungan dengan sesama\\nBerkembang: Mengenal konsep perilaku baik dan buruk, seperti berbagi atau berbohong, dan mampu meniru perilaku yang diajarkan oleh orang dewasa dalam situasi tertentu dengan pengawasan dan bimbingan yang ketat untuk memastikan mereka konsisten dalam berperilaku positif.\\nCakap: Memahami konsep dasar akhlak mulia dalam kehidupan sehari-hari melalui sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam berinteraksi dengan teman sebaya atau keluarga.\\nMahir: Menunjukkan perilaku akhlak mulia dalam kehidupan sehari- hari melalui sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam berinteraksi dengan sesama dengan bimbingan orang dewasa."},{"id":"PAUD-1-3","label":"Hubungan dengan Lingkungan Alam","pages":[5],"text":"Hubungan dengan Lingkungan Alam\\nBerkembang: Menunjukkan kesadaran pentingnya menjaga lingkungan alam.\\nCakap: Menjaga lingkungan alam dalam kehidupan sehari-hari.\\nMahir: Menjaga lingkungan alam dalam kehidupan sehari-hari dan mengajak teman sebaya."}]},{"number":2,"header":"2. Kewargaan","items":[{"id":"PAUD-2-1","label":"Kewargaan Lokal","pages":[10],"text":"Kewargaan Lokal\\nBerkembang: Mengenal aturan yang berlaku di satuan pendidikan dan keluarga.\\nCakap: Mematuhi aturan yang berlaku di satuan pendidikan dan keluarga dengan bimbingan.\\nMahir: Mematuhi aturan yang berlaku di satuan pendidikan dan keluarga secara mandiri."},{"id":"PAUD-2-2","label":"Kewargaan Nasional","pages":[10],"text":"Kewargaan Nasional\\nBerkembang: Mengenal diri, keluarga, teman, dan aturan yang berlaku di masyarakat dalam kehidupan sehari- hari.\\nCakap: Menunjukkan pemahaman tentang diri, keluarga, teman, dan mematuhi aturan yang berlaku di masyarakat dalam kehidupan sehari- hari dengan bimbingan.\\nMahir: Menunjukkan pemahaman tentang diri, keluarga, teman, dan mematuhi aturan yang berlaku di masyarakat dalam kehidupan sehari- hari secara mandiri."},{"id":"PAUD-2-3","label":"Kewargaan Global","pages":[10],"text":"Kewargaan Global\\nBerkembang: Mengenali keberadaan negara lain.\\nCakap: Mengenali keberadaan negara lain di dunia dan simbol- simbolnya dengan bimbingan.\\nMahir: Mengenali keberadaan negara lain di dunia dan simbol-simbolnya secara mandiri."}]},{"number":3,"header":"3. Penalaran Kritis","items":[{"id":"PAUD-3-1","label":"Penyampaian Argumentasi","pages":[14],"text":"Penyampaian Argumentasi\\nBerkembang: Menyampaikan pendapat sederhana.\\nCakap: Menyampaikan pendapat singkat dengan alasan sederhana.\\nMahir: Menyampaikan pendapat singkat secara runtut dengan alasan sederhana."},{"id":"PAUD-3-2","label":"Pengambilan Keputusan","pages":[14],"text":"Pengambilan Keputusan\\nBerkembang: Menentukan pilihan dengan mengikuti pilihan teman sebaya.\\nCakap: Menentukan pilihan berdasarkan preferensi diri.\\nMahir: Menentukan pilihan berdasarkan preferensi diri dengan alasan yang relevan."},{"id":"PAUD-3-3","label":"Penyelesaian Masalah","pages":[14],"text":"Penyelesaian Masalah\\nBerkembang: Mencoba menyelesaikan tantangan yang dialami.\\nCakap: Menyelesaikan tantangan yang dialami.\\nMahir: Menyelesaikan tantangan yang dialami dengan tepat."}]},{"number":4,"header":"4. Kreativitas","items":[{"id":"PAUD-4-1","label":"Gagasan baru","pages":[17],"text":"Gagasan baru\\nBerkembang: Menyampaikan gagasan imajinatif secara verbal atau non verbal.\\nCakap: Menyampaikan gagasan imajinatif sederhana.\\nMahir: Mengembangkan gagasan imajinatif sederhana."},{"id":"PAUD-4-2","label":"Fleksibilitas berpikir","pages":[17],"text":"Fleksibilitas berpikir\\nBerkembang: Meniru pola berpikir orang lain dalam menyelesaikan masalah sederhana.\\nCakap: Menunjukan proses berpikir fleksibel dalam menyelesaikan masalah sederhana.\\nMahir: Menentukan solusi dalam menyelesaikan masalah sederhana."},{"id":"PAUD-4-3","label":"Karya","pages":[17],"text":"Karya\\nBerkembang: Menirukan bentuk karya dan/ atau tindakan sederhana berdasarkan pikiran dan/ atau perasaannya.\\nCakap: Mengeksplorasi bentuk karya dan / atau tindakan sederhana dengan berdasarkan pikiran dan/ atau perasaannya menggunakan keterampilan motorik halus dan kasar.\\nMahir: Mengekspresikan karya dan/ atau tindakan sederhana berdasarkan pikiran dan/ atau perasaannya menggunakan keterampilan motorik halus dan kasar."}]},{"number":5,"header":"5. Kolaborasi","items":[{"id":"PAUD-5-1","label":"Peduli","pages":[20],"text":"Peduli\\nBerkembang: Mulai mengenali perilaku peduli orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nCakap: Mengenali perilaku peduli orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nMahir: Menunjukkan kepedulian pada teman sebaya dan anggota keluarga dalam kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua."},{"id":"PAUD-5-2","label":"Berbagi","pages":[20,21],"text":"Berbagi\\nBerkembang: Mulai mengenali perilaku berbagi orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nCakap: Mengenali perilaku berbagi orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nMahir: Berbagi dengan teman sebaya dan anggota keluarga dalam kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua."},{"id":"PAUD-5-3","label":"Kerja sama","pages":[21],"text":"Kerja sama\\nBerkembang: Mulai mengenali perilaku kerja sama orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nCakap: Mengenali perilaku kerja sama orang lain pada kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua.\\nMahir: Bekerjasama dengan teman sebaya dan anggota keluarga dalam kegiatan bermain dan interaksi di lingkungan satuan pendidikan dan keluarga melalui bimbingan guru atau orang tua."}]},{"number":6,"header":"6. Kemandirian","items":[{"id":"PAUD-6-1","label":"Bertanggung Jawab","pages":[24],"text":"Bertanggung Jawab\\nBerkembang: Menyelesaikan tugas yang diberikan oleh guru dengan bimbingan penuh.\\nCakap: Menyelesaikan tugas yang diberikan oleh guru dengan bimbingan.\\nMahir: Menyelesaikan tugas yang diberikan oleh guru dengan bimbingan minimal."},{"id":"PAUD-6-2","label":"Kepemimpinan","pages":[24],"text":"Kepemimpinan\\nBerkembang: Menjalankan peran yang diberikan dalam konteks bermain bermakna sesuai arahan.\\nCakap: Menjalankan peran yang diberikan dalam konteks bermain bermakna dengan arahan minimal.\\nMahir: Berinisiatif untuk menjalankan peran yang diberikan dalam konteks bermain bermakna secara otonom."},{"id":"PAUD-6-3","label":"Pengembangan Diri","pages":[24,25],"text":"Pengembangan Diri\\nBerkembang: Mengikuti arahan atau mencontoh hal baru dari guru atau teman sebaya saat bermain bermakna.\\nCakap: Mengikuti arahan atau mencontoh hal baru dari guru atau teman sebaya saat bermain bermakna dan berani mencoba cara baru.\\nMahir: Mencoba cara baru dan mengulang untuk memperbaikinya secara mandiri."}]},{"number":7,"header":"7. Kesehatan","items":[{"id":"PAUD-7-1","label":"Hidup bersih dan sehat","pages":[27,28],"text":"Hidup bersih dan sehat\\nBerkembang: Mengenal kebiasaan hidup bersih dan sehat dengan mencuci tangan pakai sabun dengan air mengalir, menggosok gigi, mandi teratur, dan mengkonsumsi makanan sehat bergizi seimbang dengan bimbingan.\\nCakap: Membiasakan diri hidup bersih dan sehat dengan mencuci tangan pakai sabun dengan air mengalir, menggosok gigi, mandi teratur, dan mengkonsumsi makanan sehat bergizi seimbang dengan bimbingan.\\nMahir: Mengingatkan teman sebaya untuk membiasakan diri hidup bersih dan sehat dengan mencuci tangan pakai sabun dengan air mengalir, menggosok gigi, mandi teratur, mengkonsumsi makanan sehat bergizi seimbang."},{"id":"PAUD-7-2","label":"Kebugaran, kesehatan fisik, dan kesehatan mental","pages":[28],"text":"Kebugaran, kesehatan fisik, dan kesehatan mental\\nBerkembang: Mengenali pentingnya berperilaku sehat fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, tidur teratur, menerapkan pola makan sehat dan bergizi seimbang, dan mengendalikan emosi dengan bimbingan.\\nCakap: Membiasakan diri hidup sehat fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, tidur teratur, menerapkan pola makan sehat dan bergizi seimbang, dan mengendalikan emosi dengan bimbingan.\\nMahir: Mengajak teman sebaya agar membiasakan diri hidup sehat fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, tidur teratur, menerapkan pola makan sehat dan bergizi seimbang, dan mengendalikan emosi dengan bimbingan."},{"id":"PAUD-7-3","label":"Kesehatan Lingkungan","pages":[28],"text":"Kesehatan Lingkungan\\nBerkembang: Mengenal pentingnya peningkatan kebersihan lingkungan rumah dan sekolah dengan bimbingan penuh.\\nCakap: Ikut meningkatkan kebersihan lingkungan rumah dan sekolah dengan bimbingan.\\nMahir: Mengajak teman sebaya untuk meningkatkan kebersihan lingkungan rumah dan sekolah."}]},{"number":8,"header":"8. Komunikasi","items":[{"id":"PAUD-8-1","label":"Menyimak","pages":[32],"text":"Menyimak\\nBerkembang: Mendengarkan secara aktif sejumlah teks lisan yang singkat dan sangat sederhana yang dipilih untuk mendapatkan informasi eksplisit.\\nCakap: Mendengarkan secara aktif sejumlah teks lisan yang singkat dan sangat sederhana yang dipilih untuk mendapatkan informasi eksplisit dan memberikan tanggapan sederhana.\\nMahir: Mendengarkan secara aktif sejumlah teks lisan yang singkat dan sangat sederhana yang dipilih untuk mendapatkan informasi eksplisit dan memberikan tanggapan sederhana dan kritis."},{"id":"PAUD-8-2","label":"Berbicara","pages":[32],"text":"Berbicara\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan singkat dan sangat sederhana namun belum tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan singkat dan sangat sederhana secara cukup tepat, lancar, dan efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan singkat dan sangat sederhana secara benar, tepat, lancar, dan efektif."}]}],"SD":[{"number":1,"header":"1. Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa","items":[{"id":"SD-1-1","label":"Hubungan dengan Tuhan Yang Maha Esa","pages":[6],"text":"Hubungan dengan Tuhan Yang Maha Esa\\nBerkembang: Mengenal ajaran Tuhan Yang Maha Esa melalui cerita, doa, dan praktek ibadah sesuai agamanya serta mulai memahami nilai kebaikan dalam kehidupan nyata.\\nCakap: Membiasakan diri melaksanakan ajaran Tuhan Yang Maha Esa dalam kehidupan nyata secara konsisten dengan bimbingan orang tua dan guru serta mampu mensyukurinya.\\nMahir: Melaksanakan ibadah secara mandiri sesuai ajaran Tuhan Yang Maha Esa secara konsisten dalam kehidupan nyata serta menjadi contoh dalam beribadah dan sikap religius di sekolah dan keluarga."},{"id":"SD-1-2","label":"Hubungan dengan sesama Manusia","pages":[6],"text":"Hubungan dengan sesama Manusia\\nBerkembang: Mengenal dan mencoba bersikap jujur, peduli, dan tanggung jawab dengan bimbingan.\\nCakap: Membiasakan bersikap jujur, adil, peduli, dan bertanggung jawab dalam interaksi dalam kehidupan nyata.\\nMahir: Mampu mengajak teman sebaya untuk peduli terhadap lingkungan serta menunjukkan inisiatif dalam menjaga kebersihan lingkungan dan kelestarian alam sekitar."},{"id":"SD-1-3","label":"Hubungan dengan Lingkungan Alam","pages":[6],"text":"Hubungan dengan Lingkungan Alam\\nBerkembang: Menunjukkan pemahaman tentang pentingnya menjaga kebersihan lingkungan dan kelestarian alam dengan bimbingan.\\nCakap: Membiasakan menjaga kebersihan lingkungan dan kelestarian alam secara konsisten dan mandiri.\\nMahir: Menjadi contoh bagi teman dalam kepedulian lingkungan serta mampu menunjukkan inisiatif dalam menjaga kebersihan lingkungan dan kelestarian alam."}]},{"number":2,"header":"2. Kewargaan","items":[{"id":"SD-2-1","label":"Kewargaan Lokal","pages":[10],"text":"Kewargaan Lokal\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di keluarga, satuan pendidikan, dan masyarakat.\\nCakap: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di keluarga, satuan pendidikan, dan masyarakat dengan bimbingan.\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di keluarga, satuan pendidikan, dan masyarakat secara mandiri."},{"id":"SD-2-2","label":"Kewargaan Nasional","pages":[11],"text":"Kewargaan Nasional\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional.\\nCakap: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dengan bimbingan.\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional secara mandiri."},{"id":"SD-2-3","label":"Kewargaan Global","pages":[11],"text":"Kewargaan Global\\nBerkembang: Mengenali keberadaan negara lain di dunia dan simbol-simbolnya.\\nCakap: Mengenal aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global untuk menguatkan wawasan kebangsaan.\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional."}]},{"number":3,"header":"3. Penalaran Kritis","items":[{"id":"SD-3-1","label":"Penyampaian Argumentasi","pages":[14],"text":"Penyampaian Argumentasi\\nBerkembang: Menyampaikan argumen sederhana namun belum tepat.\\nCakap: Menyampaikan argumen sederhana secara runtut disertai alasan.\\nMahir: Menyampaikan argumen sederhana secara runtut disertai alasan secara mandiri."},{"id":"SD-3-2","label":"Pengambilan Keputusan","pages":[14],"text":"Pengambilan Keputusan\\nBerkembang: Mengambil keputusan namun belum logis dan belum berdasarkan informasi yang relevan.\\nCakap: Mengambil keputusan secara logis berdasarkan informasi yang relevan.\\nMahir: Mengambil keputusan secara logis berdasarkan informasi yang relevan secara mandiri."},{"id":"SD-3-3","label":"Penyelesaian Masalah","pages":[14,15],"text":"Penyelesaian Masalah\\nBerkembang: Menyelesaikan masalah sederhana dan menghasilkan solusi namun kurang tepat.\\nCakap: Menyelesaikan masalah sederhana dan menghasilkan solusi yang tepat sesuai dengan konteks.\\nMahir: Menyelesaikan masalah sederhana dan menghasilkan solusi yang tepat sesuai dengan konteks secara mandiri."}]},{"number":4,"header":"4. Kreativitas","items":[{"id":"SD-4-1","label":"Gagasan baru","pages":[17,18],"text":"Gagasan baru\\nBerkembang: Menyampaikan gagasan secara sederhana meskipun belum runtut.\\nCakap: Menyampaikan gagasan sederhana dengan runtut dan jelas.\\nMahir: Menyampaikan beberapa gagasan sederhana dengan jelas, logis, dan relevan."},{"id":"SD-4-2","label":"Fleksibilitas berpikir","pages":[18],"text":"Fleksibilitas berpikir\\nBerkembang: Menemukan solusi masalah sederhana yang ditemui di lingkungan kelas dengan bantuan orang dewasa.\\nCakap: Menemukan solusi alternatif dengan mengadaptasi berbagai gagasan.\\nMahir: Menemukan beberapa solusi alternatif dan memberikan umpan balik pada alternatif solusinya."},{"id":"SD-4-3","label":"Karya","pages":[18],"text":"Karya\\nBerkembang: Membuat tindakan dan/ atau karya sederhana yang kreatif sesuai minat dan kesukannya.\\nCakap: Membuat tindakan dan/ atau karya sederhana yang kreatif dengan berbagai ide yang sesuai minat dan kesukaannya.\\nMahir: Membuat tindakan dan/ atau karya sederhana yang kreatif dengan berbagai ide yang sesuai minat dan kesukaannya serta mengkritisi tindakan dan/ atau karya yang dihasilkan."}]},{"number":5,"header":"5. Kolaborasi","items":[{"id":"SD-5-1","label":"Peduli","pages":[21],"text":"Peduli\\nBerkembang: Mulai menunjukkan kepedulian pada teman sebaya dan anggota keluarga dengan bimbingan guru dan orang tua di lingkungan satuan pendidikan dan keluarga.\\nCakap: Menunjukkan kepedulian secara konsisten pada teman sebaya dan anggota keluarga dengan bimbingan guru dan orang tua di lingkungan satuan pendidikan dan keluarga.\\nMahir: Menunjukkan inisiatif kepedulian secara konsisten pada teman sebaya dan anggota keluarga di lingkungan satuan pendidikan dan keluarga."},{"id":"SD-5-2","label":"Berbagi","pages":[21],"text":"Berbagi\\nBerkembang: Mulai berbagi hal yang dianggap penting dan berharga kepada teman sebaya dan anggota keluarga dengan bimbingan guru dan orang tua.\\nCakap: Berbagi hal yang dianggap penting dan berharga kepada teman atau anggota keluarga dengan bimbingan guru dan orang tua.\\nMahir: Menunjukkan inisiatif untuk berbagi hal yang dianggap penting dan berharga kepada teman atau anggota keluarga."},{"id":"SD-5-3","label":"Kerja sama","pages":[21,22],"text":"Kerja sama\\nBerkembang: Mulai bekerjasama dengan teman sebaya dan anggota keluarga dengan bimbingan guru dan orang tua di lingkungan satuan pendidikan dan keluarga.\\nCakap: Bekerjasama dengan teman sebaya dan anggota keluarga dengan bimbingan guru dan orang tua di lingkungan satuan pendidikan dan keluarga.\\nMahir: Menunjukkan inisiatif untuk bekerjasama dengan teman sebaya dan anggota keluarga di lingkungan satuan pendidikan dan keluarga."}]},{"number":6,"header":"6. Kemandirian","items":[{"id":"SD-6-1","label":"Bertanggung Jawab","pages":[25],"text":"Bertanggung Jawab\\nBerkembang: Melakukan upaya mencapai tujuan pembelajaran sesuai arahan.\\nCakap: Berlatih menetapkan tujuan pembelajaran untuk dirinya.\\nMahir: Berlatih mencapai tujuan pembelajaran yang telah ditentukan sendiri secara tepat waktu."},{"id":"SD-6-2","label":"Kepemimpinan","pages":[25],"text":"Kepemimpinan\\nBerkembang: Menjalankan peran yang diberikan dalam konteks pembelajaran sesuai arahan.\\nCakap: Menj alankan peran yang diberikan dalam konteks pembelajaran dengan arahan minimal.\\nMahir: Berinisiatif untuk menjalankan peran dalam konteks pembelajaran secara otonom."},{"id":"SD-6-3","label":"Pengembangan Diri","pages":[25],"text":"Pengembangan Diri\\nBerkembang: Mengenal minat dan bakat sebagai potensi diri dengan bimbingan penuh.\\nCakap: Mengenal minat dan bakat sebagai potensi diri dan mengeksplorasi berbagai kegiatan pengembangan diri dengan bimbingan.\\nMahir: Mengenal minat dan bakat sebagai potensi diri dan mengeksplorasi berbagai kegiatan pengembangan diri dengan bimbingan minimal."}]},{"number":7,"header":"7. Kesehatan","items":[{"id":"SD-7-1","label":"Hidup bersih dan sehat","pages":[28],"text":"Hidup bersih dan sehat\\nBerkembang: Berperilaku hidup bersih dan sehat dengan memperhatikan dan menjaga kebersihan diri namun masih perlu bimbingan.\\nCakap: Berperilaku hidup bersih dan sehat dengan memperhatikan dan menjaga kebersihan diri dengan bimbingan minimal.\\nMahir: Mengajak orang lain untuk bersama-sama berperilaku hidup bersih dan sehat dengan memperhatikan dan menjaga kebersihan diri secara otonom dan teratur."},{"id":"SD-7-2","label":"Kebugaran, kesehatan fisik, dan kesehatan mental","pages":[28,29],"text":"Kebugaran, kesehatan fisik, dan kesehatan mental\\nBerkembang: Berperilaku sehat fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, serta mengendalikan emosi dengan bimbingan penuh.\\nCakap: Berperilaku sehat fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, serta mengendalikan emosi dengan bimbingan.\\nMahir: Mengajak teman sebaya agar berperilaku sehat secara fisik dan mental, menjaga kebugaran dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, serta mengendalikan emosi dengan bimbingan minimal."},{"id":"SD-7-3","label":"Kesehatan Lingkungan","pages":[29],"text":"Kesehatan Lingkungan\\nBerkembang: Berperan aktif meningkatkan kesehatan lingkungan rumah dan sekolah dengan bimbingan penuh.\\nCakap: Berperan aktif meningkatkan kesehatan lingkungan rumah dan sekolah.\\nMahir: Mengajak teman sebaya untuk meningkatkan kesehatan lingkungan rumah dan sekolah."}]},{"number":8,"header":"8. Komunikasi","items":[{"id":"SD-8-1","label":"Menyimak","pages":[32,33],"text":"Menyimak\\nBerkembang: Mendengarkan secara aktif sejumlah teks lisan sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Mendengarkan secara aktif sejumlah teks lisan sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan sederhana.\\nMahir: Mendengarkan secara aktif sejumlah teks lisan sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan sederhana dan kritis."},{"id":"SD-8-2","label":"Berbicara","pages":[33],"text":"Berbicara\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan sederhana namun belum tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan sederhana secara cukup tepat, lancar, dan efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks lisan sederhana secara benar, tepat, lancar, dan efektif."},{"id":"SD-8-3","label":"Membaca","pages":[33],"text":"Membaca\\nBerkembang: Membaca secara aktif sejumlah teks tertulis sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Membaca secara aktif sejumlah teks tertulis sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan sederhana.\\nMahir: Membaca secara aktif sejumlah teks tertulis sederhana yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan sederhana dan kritis."},{"id":"SD-8-4","label":"Menulis","pages":[33],"text":"Menulis\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks tertulis sederhana namun belum tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks tertulis sederhana secara cukup tepat, lancar, dan efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi melalui teks tertulis sederhana secara benar, tepat, lancar, dan efektif."}]}],"SMP":[{"number":1,"header":"1. Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa","items":[{"id":"SMP-1-1","label":"Hubungan dengan Tuhan Yang Maha Esa","pages":[7],"text":"Hubungan dengan Tuhan Yang Maha Esa\\nBerkembang: Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya belum berdasarkan kesadaran diri atau masih berdasarkan perintah orang lain.\\nCakap: Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya berdasarkan kesadaran dirinya secara konsisten.\\nMahir: Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa lebih mendalam berdasarkan kesadaran diri secara konsisten dan mampu mengajak orang lain dalam kehidupan sehari-hari."},{"id":"SMP-1-2","label":"Hubungan dengan sesama Manusia","pages":[7],"text":"Hubungan dengan sesama Manusia\\nBerkembang: Menunjukkan perilaku akhlak mulia dalam kehidupan sosial dengan saling menghormati dan berintegritas namun belum konsisten.\\nCakap: Menunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial.\\nMahir: Menunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial serta mampu mengajak orang lain."},{"id":"SMP-1-3","label":"Hubungan dengan Lingkungan Alam","pages":[7],"text":"Hubungan dengan Lingkungan Alam\\nBerkembang: Memiliki kesadaran untuk menjaga keseimbangan dan kelestarian lingkungan alam sesuai dengan menggunakan pengetahuan yang dimilikinya.\\nCakap: Menjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya.\\nMahir: Menjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya bersama-sama dengan orang lain."}]},{"number":2,"header":"2. Kewargaan","items":[{"id":"SMP-2-1","label":"Kewargaan Lokal","pages":[11],"text":"Kewargaan Lokal\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya.\\nCakap: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakat sekitarnya dengan bimbingan.\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya dan mampu mengajak orang lain untuk melakukan hal yang sama secara mandiri."},{"id":"SMP-2-2","label":"Kewargaan Nasional","pages":[11],"text":"Kewargaan Nasional\\nBerkembang: Memiliki ketertarikan dalam menghargai keragaman masyarakat, budaya nasional untuk menguatkan wawasan kebangsaan.\\nCakap: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan menghargai keberagaman budayanya, serta berinisiatif menjaga Negara Kesatuan Republik Indonesia (NKRI).\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan berinisiatif untuk menjaga NKRI, serta mampu mengajak orang lain melakukan hal yang sama."},{"id":"SMP-2-3","label":"Kewargaan Global","pages":[12],"text":"Kewargaan Global\\nBerkembang: Memiliki ketertarikan dalam menghargai keragaman masyarakat, budaya global untuk menguatkan wawasan kebangsaan.\\nCakap: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional.\\nMahir: Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional, serta mampu mengajak orang lain melakukan yang sama."}]},{"number":3,"header":"3. Penalaran Kritis","items":[{"id":"SMP-3-1","label":"Penyampaian Argumentasi","pages":[15],"text":"Penyampaian Argumentasi\\nBerkembang: Menyampaikan argumen logis secara runtut disertai alasan sederhana.\\nCakap: Menyampaikan argumen logis secara runtut disertai alasan yang kuat.\\nMahir: Menyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain."},{"id":"SMP-3-2","label":"Pengambilan Keputusan","pages":[15],"text":"Pengambilan Keputusan\\nBerkembang: Membuat keputusan secara logis dengan membandingkan beberapa pendapat/ sudut pandang serta beberapa informasi yang relevan dengan bimbingan\\nCakap: Membuat keputusan secara logis dengan membandingkan beberapa pendapat/ sudut pandang serta beberapa informasi yang relevan secara mandiri\\nMahir: Membuat keputusan secara logis dengan membandingkan beberapa pendapat/ sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan."},{"id":"SMP-3-3","label":"Penyelesaian Masalah","pages":[15],"text":"Penyelesaian Masalah\\nBerkembang: Menyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.\\nCakap: Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.\\nMahir: Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri."}]},{"number":4,"header":"4. Kreativitas","items":[{"id":"SMP-4-1","label":"Gagasan baru","pages":[18],"text":"Gagasan baru\\nBerkembang: Menyampaikan gagasan inovatif dari contoh atau referensi yang diberikan.\\nCakap: Mengembangkan gagasan inovatif untuk menyelesaikan masalah sekitar.\\nMahir: Mengembangkan beberapa gagasan inovatif untuk menyelesaikan masalah di lingkungan yang lebih luas."},{"id":"SMP-4-2","label":"Fleksibilitas berpikir","pages":[18],"text":"Fleksibilitas berpikir\\nBerkembang: Menemukan solusi masalah di lingkungan sekitar.\\nCakap: Menemukan beberapa alternatif solusi masalah di lingkungan sekitar dan memberikan umpan balik.\\nMahir: Menemukan beberapa alternatif solusi masalah di lingkungan sekitar dan mengevaluasi alternatif solusinya."},{"id":"SMP-4-3","label":"Karya","pages":[18,19],"text":"Karya\\nBerkembang: Menciptakan tindakan dan/ atau karya kreatif serta dapat mengidentifikasi dampaknya bagi dirinya.\\nCakap: Menciptakan tindakan dan/ atau karya kreatif yang kompleks serta dapat menganalisis dampaknya bagi dirinya dan orang lain.\\nMahir: Menciptakan tindakan dan/ atau katya kreatif yang kompleks serta dapat mengevaluasi dampaknya bagi orang lain dan lingkungan sekitarnya."}]},{"number":5,"header":"5. Kolaborasi","items":[{"id":"SMP-5-1","label":"Peduli","pages":[22],"text":"Peduli\\nBerkembang: Menunjukkan kepedulian untuk berkolaborasi namun belum konsisten.\\nCakap: Menunjukkan kepedulian secara konsisten untuk berkolaborasi.\\nMahir: Mengajak teman untuk peduli berkolaborasi."},{"id":"SMP-5-2","label":"Berbagi","pages":[22],"text":"Berbagi\\nBerkembang: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan namun belum konsisten.\\nCakap: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan.\\nMahir: Mengambil inisiatif untuk saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan."},{"id":"SMP-5-3","label":"Kerja sama","pages":[22],"text":"Kerja sama\\nBerkembang: Bekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama namun belum konsisten.\\nCakap: Bekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama secara konsisten.\\nMahir: Mengambil inisiatif untuk bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama."}]},{"number":6,"header":"6. Kemandirian","items":[{"id":"SMP-6-1","label":"Bertanggung Jawab","pages":[25],"text":"Bertanggung Jawab\\nBerkembang: Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan penuh.\\nCakap: Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan.\\nMahir: Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan minimal."},{"id":"SMP-6-2","label":"Kepemimpinan","pages":[25,26],"text":"Kepemimpinan\\nBerkembang: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan penuh.\\nCakap: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan.\\nMahir: Memotivasi dan mengorganisasi teman sebaya untuk mencapai target yang ditetapkan bersama secara tuntas dengan bimbingan minimal."},{"id":"SMP-6-3","label":"Pengembangan Diri","pages":[26],"text":"Pengembangan Diri\\nBerkembang: Mengidentifikasi potensi dan bakat diri, menyusun rencana pengembangan diri untuk mewujudkan cita- cita dengan bimbingan penuh.\\nCakap: Mengidentifikasi potensi dan bakat diri, menyusun dan mengaktualisasi rencana pengembangan diri untuk mewujudkan cita- cita dengan bimbingan.\\nMahir: Mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita serta mampu beradaptasi dengan perubahan dan menghadapi tantangan dengan bimbingan minimal."}]},{"number":7,"header":"7. Kesehatan","items":[{"id":"SMP-7-1","label":"Hidup bersih dan sehat","pages":[29],"text":"Hidup bersih dan sehat\\nBerkembang: Menjaga kebersihan diri dan keluarga untuk meraih kesehatan namun belum konsisten.\\nCakap: Menjaga kebersihan diri dan keluarga untuk meraih kesehatan secara konsisten.\\nMahir: Mengajak orang lain untuk bersama-sama menjaga kebersihan diri dan keluarga guna meraih kesehatan yang prima."},{"id":"SMP-7-2","label":"Kebugaran, kesehatan fisik, dan kesehatan mental","pages":[29,30],"text":"Kebugaran, kesehatan fisik, dan kesehatan mental\\nBerkembang: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan penuh.\\nCakap: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan.\\nMahir: Mengajak orang lain agar meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan minimal."},{"id":"SMP-7-3","label":"Kesehatan lingkungan","pages":[30],"text":"Kesehatan lingkungan\\nBerkembang: Berperan aktif meningkatkan kesehatan lingkungan rumah dan sekolah.\\nCakap: Berperan aktif meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas.\\nMahir: Mengajak orang lain untuk meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas."}]},{"number":8,"header":"8. Komunikasi","items":[{"id":"SMP-8-1","label":"Menyimak","pages":[33,34],"text":"Menyimak\\nBerkembang: Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.\\nMahir: Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis."},{"id":"SMP-8-2","label":"Berbicara","pages":[34],"text":"Berbicara\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif."},{"id":"SMP-8-3","label":"Membaca","pages":[34],"text":"Membaca\\nBerkembang: Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.\\nMahir: Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis."},{"id":"SMP-8-4","label":"Menulis","pages":[34],"text":"Menulis\\nBerkembang: Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa j enis teks terpilih namun belum tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif."}]}],"SMA":[{"number":1,"header":"1. Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa","items":[{"id":"SMA-1-1","label":"Hubungan dengan Tuhan Yang Maha Esa","pages":[7,8],"text":"Hubungan dengan Tuhan Yang Maha Esa\\nBerkembang: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa namun belum konsisten.\\nCakap: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa secara konsisten, serta mampu menegakkannya dalam kehidupan.\\nMahir: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa secara konsisten, serta mampu menegakkannya dalam kehidupan dan mampu mengajak serta menjadi teladan bagi orang lain."},{"id":"SMA-1-2","label":"Hubungan dengan sesama Manusia","pages":[8],"text":"Hubungan dengan sesama Manusia\\nBerkembang: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual serta pemahaman nilai saling menghormati dan berintegritas.\\nCakap: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual serta menginternalisasi nilai kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam kehidupan pribadi, sosial, dan akademik.\\nMahir: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual, menginternalisasi nilai kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam kehidupan pribadi, sosial, dan akademik serta memberikan kebermanfaatan kepada sesama."},{"id":"SMA-1-3","label":"Hubungan dengan Lingkungan Alam","pages":[8],"text":"Hubungan dengan Lingkungan Alam\\nBerkembang: Mewujudkan rasa tanggung jawab dengan mulai membangun kesadaran terhadap lingkungan alam dan mengidentifikasi solusi dari permasalahannya.\\nCakap: Mewujudkan rasa tanggung jawab secara konsisten dengan membangun kepedulian terhadap lingkungan alam, merumuskan solusi, dan mengimplementasi kannya.\\nMahir: Mewujudkan rasa tanggung jawab secara konsisten dengan aktif membangun kepedulian terhadap lingkungan alam sekitarnya, menciptakan serta mengimplementasik an solusi dari permasalahan lingkungan, dan melakukan evaluasi serta menjadi teladan bagi orang lain dalam menjaga kelestarian lingkungan."}]},{"number":2,"header":"2. Kewargaan","items":[{"id":"SMA-2-1","label":"Kewargaan Lokal","pages":[12],"text":"Kewargaan Lokal\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya.\\nCakap: Terbiasa berperilaku sesuai aturan, norma, dan nilai-sosial budaya yang berlaku di masyarakatnya.\\nMahir: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya dan mampu mengajak orang lain untuk melakukan hal yang sama."},{"id":"SMA-2-2","label":"Kewargaan Nasional","pages":[12],"text":"Kewargaan Nasional\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional.\\nCakap: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan menghargai keberagaman budayanya, serta berpartisipasi aktif menjaga NKRI.\\nMahir: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan berpartisipasi aktif untuk menjaga NKRI, serta mampu mengajak orang lain melakukan hal yang sama."},{"id":"SMA-2-3","label":"Kewargaan Global","pages":[12,13],"text":"Kewargaan Global\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global.\\nCakap: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional.\\nMahir: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional, serta mampu mengajak orang lain melakukan yang sama."}]},{"number":3,"header":"3. Penalaran Kritis","items":[{"id":"SMA-3-1","label":"Penyampaian Argumentasi","pages":[15,16],"text":"Penyampaian Argumentasi\\nBerkembang: Menyampaikan argumen logis secara runtut disertai alasan sederhana.\\nCakap: Menyampaikan argumen logis secara runtut disertai alasan dan bukti kuat, dan mampu menanggapi argumen orang lain.\\nMahir: Menyampaikan argumen yang logis secara runtut, didukung teori, data, dan bukti kuat yang relevan, dan mampu mempertahankan argumennya."},{"id":"SMA-3-2","label":"Pengambilan Keputusan","pages":[16],"text":"Pengambilan Keputusan\\nBerkembang: Membuat keputusan berdasarkan subjektivitas.\\nCakap: Mengambil keputusan berbasis bukti dengan data dan informasi dari berbagai sumber yang relevan yang saling terkait.\\nMahir: Membuat keputusan berbasis bukti dengan mempertimbangkan logika, etika, dan estetika, serta dampak yang ditimbulkan."},{"id":"SMA-3-3","label":"Penyelesaian Masalah","pages":[16],"text":"Penyelesaian Masalah\\nBerkembang: Menyelesaikan masalah kompleks dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual namun kurang tepat.\\nCakap: Menyelesaikan masalah kompleks dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.\\nMahir: Menyelesaikan masalah kompleks dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual secara mandiri."}]},{"number":4,"header":"4. Kreativitas","items":[{"id":"SMA-4-1","label":"Gagasan baru","pages":[19],"text":"Gagasan baru\\nBerkembang: Menganalisis beberapa gagasan inovatif yang logis dan efektif.\\nCakap: Menghubungkan beberapa gagasan inovatif yang logis dan efektif untuk menghasilkan kombinasi gagasan baru.\\nMahir: Menghasilkan beberapa gagasan inovatif yang logis dan efektif dengan memikirkan segala resikonya."},{"id":"SMA-4-2","label":"Fleksibilitas berpikir","pages":[19],"text":"Fleksibilitas berpikir\\nBerkembang: Menemukan beberapa alternatif solusi terhadap permasalahan di lingkungan sekitar.\\nCakap: Menemukan beberapa alternatif solusi dan membandingkan efektivitasnya terhadap permasalahan di lingkungan sekitar.\\nMahir: Menentukan alternatif solusi yang efektif terhadap permasalahan di lingkungan serta merefleksi hasil solusi."},{"id":"SMA-4-3","label":"Karya","pages":[19],"text":"Karya\\nBerkembang: Menghasilkan karya inovatif dengan menggunakan berbagai sudut pandang.\\nCakap: Menghasilkan karya inovatif dengan menggunakan berbagai sudut pandang dengan mempertimbangkan dampak dan resikonya.\\nMahir: Menghasilkan karya inovatif yang kompleks dengan menggunakan berbagai sudut pandang dan mengevaluasi dampak dan resikonya."}]},{"number":5,"header":"5. Kolaborasi","items":[{"id":"SMA-5-1","label":"Peduli","pages":[22],"text":"Peduli\\nBerkembang: Menunjukkan kepedulian terhadap kondisi di lingkungan satuan pendidikan dan masyarakat secara berkelompok.\\nCakap: Menunjukkan kepedulian secara konsisten terhadap kondisi di lingkungan satuan pendidikan dan masyarakat secara berkelompok.\\nMahir: Mengambil inisiatif untuk peduli terhadap kondisi di lingkungan satuan pendidikan dan masyarakat."},{"id":"SMA-5-2","label":"Berbagi","pages":[22,23],"text":"Berbagi\\nBerkembang: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan bagi satuan pendidikan atau masyarakat untuk tujuan saling memberdayakan namun belum konsisten.\\nCakap: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan secara aktif dan konsisten agar bermanfaat bagi satuan pendidikan dan masyarakat untuk tujuan saling memberdayakan.\\nMahir: Mengambil inisiatif untuk saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan secara konsisten bagi satuan pendidikan dan masyarakat untuk tujuan saling memberdayakan."},{"id":"SMA-5-3","label":"Kerja sama","pages":[23],"text":"Kerja sama\\nBerkembang: Bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama namun belum konsisten.\\nCakap: Bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama secara konsisten.\\nMahir: Mengambil inisiatif untuk bekerjasama dengan berbagai pihak baik dalam lingkup lokal, nasional, maupun global untuk peningkatan kualitas bersama."}]},{"number":6,"header":"6. Kemandirian","items":[{"id":"SMA-6-1","label":"Bertanggung Jawab","pages":[26],"text":"Bertanggung Jawab\\nBerkembang: Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan.\\nCakap: Menetapkan target pembelajaran dan melakukan upaya untuk mencapai secara tuntas.\\nMahir: Mencapai target pembelajaran yang telah ditentukan sendiri secara tuntas."},{"id":"SMA-6-2","label":"Kepemimpinan","pages":[26],"text":"Kepemimpinan\\nBerkembang: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan namun belum konsisten.\\nCakap: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan secara konsisten.\\nMahir: Memotivasi dan mengorganisasi teman sebaya untuk mencapai target yang ditetapkan bersama secara tuntas."},{"id":"SMA-6-3","label":"Pengembangan Diri","pages":[26],"text":"Pengembangan Diri\\nBerkembang: Mengidentifikasi potensi dan bakat diri, menyusun rencana pengembangan diri untuk mewujudkan cita- cita.\\nCakap: Mengidentifikasi potensi dan bakat diri, menyusun dan mengaktualisasi rencana pengembangan diri untuk mewujudkan cita- cita.\\nMahir: Mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita serta mampu beradaptasi dengan perubahan dan menghadapi tantangan."}]},{"number":7,"header":"7. Kesehatan","items":[{"id":"SMA-7-1","label":"Hidup bersih dan sehat","pages":[30],"text":"Hidup bersih dan sehat\\nBerkembang: Menjaga kebersihan diri, keluarga, dan masyarakat untuk meraih kesehatan namun belum konsisten.\\nCakap: Menjaga kebersihan diri, keluarga, dan masyarakat untuk meraih kesehatan secara konsisten.\\nMahir: Menggerakkan orang lain agar menjaga kebersihan diri, keluarga, dan masyarakat untuk meraih kesehatan yang prima."},{"id":"SMA-7-2","label":"Kebugaran, kesehatan fisik, dan kesehatan mental","pages":[30],"text":"Kebugaran, kesehatan fisik, dan kesehatan mental\\nBerkembang: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi namun belum konsisten.\\nCakap: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi secara konsisten.\\nMahir: Menggerakkan orang lain agar meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi secara konsisten."},{"id":"SMA-7-3","label":"Kesehatan lingkungan","pages":[30,31],"text":"Kesehatan lingkungan\\nBerkembang: Berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat yang lebih luas namun belum konsisten.\\nCakap: Berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat yang lebih luas secara konsisten.\\nMahir: Menggerakkan orang lain untuk berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat yang lebih luas secara konsisten."}]},{"number":8,"header":"8. Komunikasi","items":[{"id":"SMA-8-1","label":"Menyimak","pages":[34,35],"text":"Menyimak\\nBerkembang: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit dan memberikan tanggapan yang relevan.\\nMahir: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan, kritis dan terstruktur."},{"id":"SMA-8-2","label":"Berbicara","pages":[35],"text":"Berbicara\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang tepat, lancar, dan cukup efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan sangat efektif."},{"id":"SMA-8-3","label":"Membaca","pages":[35],"text":"Membaca\\nBerkembang: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit.\\nCakap: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit dan memberikan tanggapan yang relevan.\\nMahir: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan, kritis dan terstruktur."},{"id":"SMA-8-4","label":"Menulis","pages":[35],"text":"Menulis\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai jenis informasi melalui berbagai jenis teks dengan cara yang tepat dan lancar.\\nCakap: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai jenis informasi melalui berbagai jenis teks dengan cara yang tepat, lancar, dan cukup efektif.\\nMahir: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai jenis informasi melalui berbagai jenis teks dengan cara yang benar, tepat, lancar, dan sangat efektif."}]}],"SMK":[{"number":1,"header":"1. Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa","items":[{"id":"SMK-1-1","label":"Hubungan dengan Tuhan Yang Maha Esa","pages":[9],"text":"Hubungan dengan Tuhan Yang Maha Esa\\nBerkembang: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa namun belum konsisten.\\nCakap: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa secara konsisten, serta mampu menegakkannya dalam kehidupan.\\nMahir: Menghayati dan mengamalkan ajaran Tuhan Yang Maha Esa secara konsisten, serta mampu menegakkannya dalam kehidupan dan mampu mengajak serta menjadi teladan bagi orang lain"},{"id":"SMK-1-2","label":"Hubungan dengan sesama Manusia","pages":[9],"text":"Hubungan dengan sesama Manusia\\nBerkembang: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual serta pemahaman nilai saling menghormati dan berintegritas dalam kehidupan pribadi, sosial, dan dunia kerja.\\nCakap: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual serta menginternalisasi nilai kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam kehidupan pribadi, sosial, dan dunia kerja.\\nMahir: Menunjukkan perilaku akhlak mulia yang mencerminkan kedewasaan moral dan spiritual, menginternalisasi nilai kasih sayang, kejujuran, keadilan, dan tanggung jawab dalam kehidupan pribadi, sosial, dan dunia kerja serta memberikan kebermanfaatan kepada sesama."},{"id":"SMK-1-3","label":"Hubungan dengan Lingkungan Alam","pages":[9,10],"text":"Hubungan dengan Lingkungan Alam\\nBerkembang: Mewujudkan rasa tanggung jawab dengan mulai membangun kesadaran terhadap lingkungan alam dan mengidentifikasi solusi dari permasalahan lingkungan dan dunia kerja.\\nCakap: Mewujudkan rasa tanggung jawab secara konsisten dengan membangun kesadaran peduli terhadap lingkungan alam, merumuskan solusi, dan mengimplementas ikannya pada lingkungan dan dunia kerja.\\nMahir: Mewujudkan rasa tanggung jawab secara konsisten dengan aktif membangun kesadaran peduli terhadap lingkungan alam dan dunia kerja, menciptakan serta mengimplementasik an solusi dari permasalahan lingkungan, dan melakukan evaluasi serta menjadi teladan bagi orang lain dalam menjaga kelestarian lingkungan."}]},{"number":2,"header":"2. Kewargaan","items":[{"id":"SMK-2-1","label":"Kewargaan Lokal","pages":[13],"text":"Kewargaan Lokal\\nBerkembang: Menunjukkan kesadaran atas norma, aturan dan nilai sosial budaya yang berlaku di masyarakatnya dan lingkungan kerja.\\nCakap: Terbiasa berperilaku sesuai norma, aturan dan nilai sosial budaya yang berlaku di masyarakatnya dan lingkungan kerja.\\nMahir: Terbiasa berperilaku sesuai norma, aturan dan nilai sosial budaya yang berlaku di masyarakatnya dan lingkungan kerja, serta dan mampu mengajak orang lain untuk melakukan hal yang sama."},{"id":"SMK-2-2","label":"Kewargaan Nasional","pages":[13],"text":"Kewargaan Nasional\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional.\\nCakap: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan menghargai keberagaman budayanya, serta berpartisipasi aktif menjaga NKRI.\\nMahir: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan berpartisipasi aktif untuk menjaga NKRI, serta mampu mengajak orang lain melakukan hal yang sama."},{"id":"SMK-2-3","label":"Kewargaan Global","pages":[13,14],"text":"Kewargaan Global\\nBerkembang: Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global.\\nCakap: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional.\\nMahir: Terbiasa berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional, serta mampu mengajak orang lain melakukan yang sama."}]},{"number":3,"header":"3. Penalaran Kritis","items":[{"id":"SMK-3-1","label":"Penyampaian Argumentasi","pages":[16],"text":"Penyampaian Argumentasi\\nBerkembang: Menyampaikan argumen logis secara runtut disertai alasan sederhana.\\nCakap: Menyampaikan argumen logis secara runtut disertai alasan dan bukti kuat, dan mampu menanggapi argumen orang lain.\\nMahir: Menyampaikan argumen yang logis secara runtut, didukung teori, data, dan bukti kuat yang relevan, dan mampu mempertahankan argumennya."},{"id":"SMK-3-2","label":"Pengambilan Keputusan","pages":[16],"text":"Pengambilan Keputusan\\nBerkembang: Membuat keputusan berdasarkan subjektivitas.\\nCakap: Mengambil keputusan berbasis bukti dengan data dan informasi dari berbagai sumber relevan yang saling terkait untuk lingkungan kerja.\\nMahir: Membuat keputusan berbasis bukti dengan mempertimbangkan logika, etika, dan estetika, serta dampak yang ditimbulkan."},{"id":"SMK-3-3","label":"Penyelesaian Masalah","pages":[17],"text":"Penyelesaian Masalah\\nBerkembang: Menyelesaikan masalah dalam bidang kejuruannya dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual namun kurang tepat.\\nCakap: Menyelesaikan masalah dalam bidang kejuruannya dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.\\nMahir: Menyelesaikan masalah dalam bidang kejuruannya dengan menerapkan pendekatan ilmiah dan menghasilkan solusi logis dan kontekstual secara mandiri."}]},{"number":4,"header":"4. Kreativitas","items":[{"id":"SMK-4-1","label":"Gagasan baru","pages":[19],"text":"Gagasan baru\\nBerkembang: Menganalisis beberapa gagasan inovatif yang logis dan efektif sesuai dengan bidang keahliannya.\\nCakap: Menghubungkan beberapa gagasan inovatif yang logis dan efektif untuk menghasilkan kombinasi gagasan baru sesuai konteks bidang keahliannya.\\nMahir: Menghasilkan beberapa gagasan inovatif yang logis dan efektif dengan memikirkan segala resikonya sesuai konteks bidang keahliannya."},{"id":"SMK-4-2","label":"Fleksibilitas berpikir","pages":[20],"text":"Fleksibilitas berpikir\\nBerkembang: Menemukan beberapa alternatif solusi terhadap permasalahan di lingkungan sekitar sesuai dengan bidang keahliannya.\\nCakap: Menemukan beberapa alternatif solusi dan membandingkan efektivitasnya terhadap permasalahan di lingkungan sekitar sesuai bidang keahliannya.\\nMahir: Menentukan alternatif solusi yang efektif terhadap permasalahan di lingkungan serta merefleksi hasil solusi, sesuai dengan bidang keahliannya."},{"id":"SMK-4-3","label":"Karya","pages":[20],"text":"Karya\\nBerkembang: Menghasilkan karya inovatif dengan menggunakan berbagai sudut pandang sesuai dengan bidang keahliannya.\\nCakap: Menghasilkan karya inovatif dengan menggunakan berbagai sudut pandang dengan mempertimbangk an dampak dan resikonya sesuai bidang keahliannya.\\nMahir: Menghasilkan karya inovatif yang kompleks dengan menggunakan berbagai sudut pandang dan mengevaluasi dampak dan resikonya yang relevan dengan bidang keahliannya."}]},{"number":5,"header":"5. Kolaborasi","items":[{"id":"SMK-5-1","label":"Peduli","pages":[23],"text":"Peduli\\nBerkembang: Menunjukkan kepedulian terhadap kondisi di lingkungan satuan pendidikan, masyarakat, dunia kerja dan industri secara berkelompok.\\nCakap: Menunjukkan kepedulian secara konsisten terhadap kondisi di lingkungan satuan pendidikan, masyarakat, dan dunia kerja dan industri secara berkelompok.\\nMahir: Mengambil inisiatif untuk peduli terhadap kondisi di lingkungan satuan pendidikan, masyarakat masyarakat, dunia kerja dan industri."},{"id":"SMK-5-2","label":"Berbagi","pages":[24],"text":"Berbagi\\nBerkembang: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan bagi satuan pendidikan, masyarakat, dan dunia kerja untuk tujuan saling memberdayakan namun belum konsisten.\\nCakap: Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan secara aktif dan konsisten agar bermanfaat bagi satuan pendidikan, masyarakat, dan dunia kerja untuk tujuan saling memberdayakan.\\nMahir: Mengambil inisiatif untuk saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan secara konsisten bagi satuan pendidikan, masyarakat, dan dunia kerja untuk tujuan saling memberdayakan."},{"id":"SMK-5-3","label":"Kerja sama","pages":[24],"text":"Kerja sama\\nBerkembang: Bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan sesuai kebutuhan dunia kerja untuk peningkatan kualitas bersama namun belum konsisten.\\nCakap: Bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama secara konsisten.\\nMahir: Mengambil inisiatif untuk bekerjasama dengan berbagai pihak baik sesuai kebutuhan dunia kerja baik dalam lingkup lokal, nasional, maupun global untuk peningkatan kualitas bersama."}]},{"number":6,"header":"6. Kemandirian","items":[{"id":"SMK-6-1","label":"Bertanggung Jawab","pages":[27],"text":"Bertanggung Jawab\\nBerkembang: Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya sesuai standar operasional dengan bimbingan.\\nCakap: Menetapkan target pembelajaran dan melakukan upaya untuk mencapai secara tuntas sesuai standar operasional.\\nMahir: Mencapai target pembelajaran sesuai standar operasional yang telah ditentukan sendiri secara tuntas."},{"id":"SMK-6-2","label":"Kepemimpinan","pages":[27],"text":"Kepemimpinan\\nBerkembang: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan sesuai standar operasional namun belum konsisten.\\nCakap: Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan sesuai standar operasional secara konsisten.\\nMahir: Memotivasi dan mengorganisasi teman sebaya untuk mencapai target yang ditetapkan bersama sesuai standar operasional secara tuntas."},{"id":"SMK-6-3","label":"Pengembangan Diri","pages":[27],"text":"Pengembangan Diri\\nBerkembang: Mengidentifikasi potensi dan bakat diri, menyusun rencana pengembangan diri agar kompeten dengan kebutuhan dunia kerja.\\nCakap: Mengidentifikasi potensi dan bakat diri, menyusun dan mengaktualisasi rencana pengembangan diri agar kompeten dengan kebutuhan dunia kerja.\\nMahir: Mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita serta mampu beradaptasi dengan perubahan dan menghadapi tantangan dunia kerja."}]},{"number":7,"header":"7. Kesehatan","items":[{"id":"SMK-7-1","label":"Hidup bersih dan sehat","pages":[31],"text":"Hidup bersih dan sehat\\nBerkembang: Menjaga kebersihan diri, keluarga, dan masyarakat, serta lingkungan kerja untuk meraih kesehatan namun belum konsisten.\\nCakap: Menjaga kebersihan diri, keluarga, dan masyarakat serta lingkungan kerja untuk meraih kesehatan secara konsisten.\\nMahir: Menggerakkan orang lain agar menjaga kebersihan diri, keluarga, dan masyarakat serta lingkungan kerja untuk meraih kesehatan secara konsisten."},{"id":"SMK-7-2","label":"Kebugaran, kesehatan fisik, dan kesehatan mental","pages":[31],"text":"Kebugaran, kesehatan fisik, dan kesehatan mental\\nBerkembang: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi sesuai kebutuhan dunia kerja namun belum konsisten.\\nCakap: Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi sesuai kebutuhan dunia kerja secara konsisten.\\nMahir: Menggerakkan orang lain agar meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi sesuai kebutuhan dunia kerja secara konsisten."},{"id":"SMK-7-3","label":"Kesehatan lingkungan","pages":[31],"text":"Kesehatan lingkungan\\nBerkembang: Berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat serta dunia kerja namun belum konsisten.\\nCakap: Berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat serta dunia kerja secara konsisten.\\nMahir: Menggerakkan orang lain untuk berkontribusi dalam meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat serta lingkungan kerja secara konsisten."},{"id":"SMK-7-4","label":"Prinsip keselamatan dan kesehatan kerja (K3) di dunia kerja","pages":[32],"text":"Prinsip keselamatan dan kesehatan kerja (K3) di dunia kerja\\nBerkembang: Mampu menerapkan prinsip keselamatan dan kesehatan kerja (K3) di lingkungan sekolah dan dunia kerja, namun belum konsisten.\\nCakap: Mampu menerapkan prinsip keselamatan dan kesehatan kerja (K3) di lingkungan sekolah dan dunia kerja secara konsisten.\\nMahir: Mampu menjadi teladan, mengajak dan memotivasi orang lain dalam penerapan prinsip keselamatan dan kesehatan kerja (K3) di lingkungan sekolah dan dunia kerja."}]},{"number":8,"header":"8. Komunikasi","items":[{"id":"SMK-8-1","label":"Menyimak","pages":[35,36],"text":"Menyimak\\nBerkembang: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit sesuai kebutuhan dunia kerja.\\nCakap: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit dan memberikan tanggapan yang relevan sesuai kebutuhan dunia kerja.\\nMahir: Mendengarkan secara aktif berbagai teks lisan untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan, kritis dan terstruktur sesuai kebutuhan dunia kerja."},{"id":"SMK-8-2","label":"Berbicara","pages":[36],"text":"Berbicara\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang tepat dan lancar sesuai kebutuhan dunia kerja.\\nCakap: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang tepat, lancar, dan cukup efektif sesuai kebutuhan dunia kerja.\\nMahir: Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan sangat efektif sesuai kebutuhan dunia kerja."},{"id":"SMK-8-3","label":"Membaca","pages":[36],"text":"Membaca\\nBerkembang: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit sesuai kebutuhan dunia kerja.\\nCakap: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit dan memberikan tanggapan yang relevan sesuai kebutuhan dunia kerja.\\nMahir: Membaca secara aktif berbagai teks tertulis untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan, kritis dan terstruktur sesuai kebutuhan dunia kerja."},{"id":"SMK-8-4","label":"Menulis","pages":[37],"text":"Menulis\\nBerkembang: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai j enis informasi melalui berbagai jenis teks dengan cara yang tepat dan lancar sesuai kebutuhan dunia kerja.\\nCakap: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai j enis informasi melalui berbagai jenis teks dengan cara yang tepat, lancar, dan cukup efektif sesuai kebutuhan dunia kerja.\\nMahir: Menyampaikan, menggali, dan menanggapi secara tertulis berbagai jenis informasi melalui berbagai jenis teks dengan cara yang benar, tepat, lancar, dan sangat efektif sesuai kebutuhan dunia kerja."}]}]}')};function Br(i){return i.fase==="Fondasi"?"PAUD":["A","B","C"].includes(i.fase)?"SD":i.fase==="D"?"SMP":["E","F"].includes(i.fase)&&i.jenjang?/SMK|Kejuruan|MAK/i.test(String(i.jenjang))?"SMK":"SMA":""}function Or(i,n){return i.reference==="profil-058"?e0.levels[Br(n)]||[]:i.groups||[]}function Ti(i){const n={PAUD:["Fondasi"],"SD/MI":["A","B","C"],"SMP/MTs":["D"],"SMA/MA":["E","F"],"SMK/MAK":["E","F"]}[i.jenjang];return i.fase&&n&&!n.includes(i.fase)?`Fase ${i.fase} tidak sesuai jenjang ${i.jenjang}. Periksa profil; untuk pendidikan khusus/kesetaraan pilih jenjang tersebut.`:""}function Oo(i,n,r){const u={...i.profile,[n]:r};if(["fase","jenjang"].includes(n)&&i.profile[n]!==r){const o=Object.fromEntries(Object.entries(i.drafts).map(([m,c])=>[m,{...c,dimensions:[]}]));return{...i,profile:u,drafts:o}}return{...i,profile:u}}const Do="prompt-generator-guru:v1",Uo={Rendah:{lots:"60",mots:"35",hots:"5"},Sedang:{lots:"50",mots:"40",hots:"10"},Tinggi:{lots:"40",mots:"35",hots:"25"}};function n0(i,n){return{...i,cognitivePreset:n,...Uo[n]||{}}}function Dr(){return{version:1,profile:{},drafts:{},selected:"cp-bse",view:"menu"}}function Lk(i){try{const n=i.getItem(Do);if(!n)return{state:Dr()};const r=JSON.parse(n);if(r.version!==1||!r.profile||typeof r.profile!="object"||Array.isArray(r.profile)||!r.drafts||typeof r.drafts!="object"||Array.isArray(r.drafts))throw Error();return{state:{...Dr(),...r}}}catch{return{state:Dr(),warning:"Isian tersimpan tidak dapat dibaca. Anda tetap dapat menggunakan aplikasi; isian baru hanya tersimpan jika browser mengizinkannya."}}}function t0(i,n){try{return i.setItem(Do,JSON.stringify(n)),!0}catch{return!1}}function i0(i){try{return i.removeItem(Do),!0}catch{return!1}}function Ko(i,n){return!i.when||n[i.when.split(":")[0]]===i.when.split(":")[1]}function su(i,n){const r=n.drafts[i.id]||{},u={};for(const o of i.fields){const m=o.shared?n.profile[o.id]:r[o.id];u[o.id]=m??o.default??(["dimensions","multiselect"].includes(o.type)?[]:"")}u.mode=r.mode||"form",u.kendali=r.kendali||"";for(const o of i.fields.filter(m=>m.reference==="profil-058")){const m=Or(o,u).flatMap(c=>c.items.map(h=>h.id));u[o.id]=(Array.isArray(u[o.id])?u[o.id]:[]).filter(c=>m.includes(c))}return i.id==="blueprint"&&Uo[u.cognitivePreset]&&Object.assign(u,Uo[u.cognitivePreset]),u}function r0(i){const n=String(i).trim().split(/\s*(?:dan|\+)\s*/i);if(!n.length)return null;let r=0;for(const u of n){const o=u.match(/^(\d+)\s*[x×]\s*(\d+)\s*(?:JP)?$/i);if(!o||+o[1]<1||+o[2]<1)return null;r+=+o[1]*+o[2]}return r}function s0(i,n){if(i.id==="rpp"&&n.mode==="paste")return String(n.kendali).trim()?[]:[{id:"kendali",message:"Tempel data kendali modul terlebih dahulu."}];const r=[];i.fields.some(u=>u.reference==="profil-058")&&Ti(n)&&r.push({id:"fase",message:Ti(n)});for(const u of i.fields){if(!Ko(u,n))continue;const o=n[u.id]??"";if(Array.isArray(o)?o.length===0:String(o).trim()===""){(u.required||u.id==="jenisLain")&&r.push({id:u.id,message:`${u.label} perlu diisi.`});continue}if(u.type==="multiselect"&&(!Array.isArray(o)||o.some(c=>!Ur(u,n).includes(c)))&&r.push({id:u.id,message:"Pilih "+u.label+" dari pilihan yang tersedia."}),u.type==="number"){const c=Number(o);(!Number.isFinite(c)||!u.decimal&&!Number.isInteger(c)||c<(u.min??0)||u.max!==void 0&&c>u.max)&&r.push({id:u.id,message:`${u.label}: masukkan ${u.decimal?"angka":"bilangan bulat"} ${u.min??0}${u.max!==void 0?"–"+u.max:" atau lebih"}.`})}["select","preset"].includes(u.type)&&!Ur(u,n).includes(o)&&r.push({id:u.id,message:`Pilih ${u.label.toLowerCase()} yang tersedia.`}),u.type==="dimensions"&&(!Array.isArray(o)||o.some(c=>!Or(u,n).some(h=>h.items.some(g=>g.id===c))))&&r.push({id:u.id,message:"Pilih subdimensi dari daftar referensi."})}if(i.id==="waktu"&&n.pola){const u=r0(n.pola);u===null?r.push({id:"pola",message:"Gunakan pola seperti 1 × 3 JP dan 1 × 2 JP."}):n.jp&&u!==Number(n.jp)&&r.push({id:"pola",message:`Pola pertemuan berjumlah ${u} JP, tetapi JP per minggu diisi ${n.jp}.`})}if(i.id==="blueprint"){if(["jumlah","pg","isian","uraian"].every(m=>String(n[m]).trim()!=="")){const m=Number(n.pg)+Number(n.isian)+Number(n.uraian);m!==Number(n.jumlah)&&r.push({id:"jumlah",message:`Komposisi berjumlah ${m} soal; harus sama dengan jumlah soal (${n.jumlah}).`})}const u=["lots","mots","hots"],o=u.filter(m=>String(n[m]??"").trim()!=="");o.length&&o.length!==3?r.push({id:"lots",message:"Isi ketiga persentase kognitif, atau kosongkan semuanya."}):o.length&&Math.abs(u.reduce((m,c)=>m+Number(n[c]),0)-100)>1e-6&&r.push({id:"lots",message:"Jumlah LOTS, MOTS, dan HOTS harus 100%."})}return r}function u0(i,n){const r={...n};for(const u of i.fields){if(!Ko(u,n)){r[u.id]="";continue}if(u.instructionsBy&&(r[u.id+"Rules"]=u.instructionsBy[n[u.id]]||""),u.type==="multiselect")r[u.id]=Array.isArray(n[u.id])?n[u.id].join("; "):"";else if(u.type==="dimensions"){const o=Array.isArray(n[u.id])?n[u.id]:[];r[u.id]=Or(u,n).map(m=>{const c=m.items.filter(h=>o.includes(h.id));return c.length?m.header+`
`+c.map(h=>h.text+(h.pages?`
Sumber: KEPKA BSKAP 058/H/KR/2025, hlm. `+h.pages.join(", "):"")).join(`
`):""}).filter(Boolean).join(`

`),u.reference==="profil-058"&&r[u.id]&&(r[u.id]="Rujukan jenjang "+Br(n)+"; fase "+n.fase+`.

`+r[u.id])}else!String(r[u.id]??"").trim()&&!u.required&&(r[u.id]=u.fallback??"")}r.jenisOutput=n.jenis==="Lainnya"?n.jenisLain:n.jenis,r.komposisi=[["pg","pilihan ganda"],["isian","isian singkat"],["uraian","uraian"]].filter(([u])=>Number(n[u])>0).map(([u,o])=>`${n[u]} ${o}`).join(" + ");for(const u of["lots","mots","hots"])r[u+"Output"]=String(n[u]??"").trim()?n[u]+" %":"tidak ditentukan";return r}function Ur(i,n){return i.dependsOn?i.optionsBy?.[n[i.dependsOn]]||[]:i.options||[]}function Lo(i,n,r=""){const u=u0(i,n);if(i.format==="authored"){const h=r?i.stages?.find(g=>g.id===r)?.body:i.bodyBy?.[n[i.bodyField]]||i.body||i.stages?.map(g=>g.body).join(`

`);return String(h||"").replace(/\{\{(\w+)\}\}/g,(g,b)=>String(u[b]??"").trim()||(i.fields.find(y=>y.id===b)?.required?`⟦Isi ${i.fields.find(y=>y.id===b).label}⟧`:"Tidak ditentukan"))}const o=i.id==="rpp"&&n.mode==="paste"?[i.pasteRule]:i.rules;let m="",c=0;for(const h of o)m+=i.original.slice(c,h.start),m+=h.value.replace(/\{\{(\w+)\}\}/g,(g,b)=>String(u[b]??"").trim()||`⟦Isi ${i.fields.find(y=>y.id===b)?.label||b}⟧`),c=h.end;return m+i.original.slice(c)}const Ik=_.createContext({state:Dr(),setState:()=>{},warning:"",reset:()=>{}});function l0({children:i}){const[n]=_.useState(()=>{try{return Lk(localStorage)}catch{return Lk(void 0)}}),[r,u]=_.useState(n.state),[o,m]=_.useState(n.warning||"");_.useEffect(()=>{try{t0(localStorage,r)||m("Penyimpanan browser tidak tersedia. Isian tetap dapat digunakan selama halaman ini terbuka.")}catch{m("Penyimpanan browser tidak tersedia. Salin hasil sebelum menutup halaman.")}},[r]);function c(){try{i0(localStorage)}catch{}u(Dr())}return k.jsx(Ik.Provider,{value:{state:r,setState:u,warning:o,reset:c},children:i})}const Kr=()=>_.useContext(Ik);function o0(){const{state:i,setState:n}=Kr(),r=[{id:"sekolah",label:"Sekolah / satuan pendidikan"},{id:"jenjang",label:"Jenjang",options:["PAUD","SD/MI","SMP/MTs","SMA/MA","SMK/MAK","Pendidikan Khusus / Kesetaraan"]},{id:"mapel",label:"Mata pelajaran",placeholder:"Contoh: Bahasa Indonesia"},{id:"fase",label:"Fase",options:["Fondasi","A","B","C","D","E","F","Tidak berlaku"]},{id:"kelas",label:"Kelas",placeholder:"Contoh: VII"},{id:"tahun",label:"Tahun pelajaran",placeholder:"Contoh: 2026/2027"},{id:"semester",label:"Semester",options:["1","2"]},{id:"jp",label:"JP per minggu",type:"number"}];return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"PROFIL MENGAJAR"}),k.jsx("h1",{children:"Isi sekali, gunakan bersama."}),k.jsx("p",{className:"lead",children:"Identitas ini terisi otomatis pada setiap prompt yang membutuhkan data yang sama. Anda tetap dapat mengubahnya kapan saja."}),k.jsxs("section",{className:"panel teaching-profile",children:[k.jsxs("div",{className:"panel-heading",children:[k.jsxs("h2",{children:[k.jsx(ru,{size:20})," Identitas pembelajaran"]}),k.jsx("span",{className:"badge",children:"Tersimpan otomatis di browser"})]}),k.jsx("div",{className:"profile-fields",children:r.map(u=>k.jsxs("label",{className:"field",htmlFor:"profile-"+u.id,children:[u.label,u.options?k.jsxs("select",{id:"profile-"+u.id,value:String(i.profile[u.id]||""),onChange:o=>n(m=>Oo(m,u.id,o.target.value)),children:[k.jsx("option",{value:"",children:"Pilih…"}),u.options.map(o=>k.jsx("option",{children:o},o))]}):k.jsx("input",{id:"profile-"+u.id,type:u.type||"text",min:u.type==="number"?1:void 0,placeholder:u.placeholder,value:String(i.profile[u.id]||""),onChange:o=>n(m=>Oo(m,u.id,o.target.value))})]},u.id))}),k.jsxs("div",{className:"profile-explainer",children:[k.jsx(Ck,{size:19}),k.jsxs("p",{children:["Perubahan berlaku untuk isian berikutnya. Mengganti fase atau jenjang mengosongkan pilihan dimensi lama agar tidak tercampur."," ",Br(i.profile)&&k.jsxs(k.Fragment,{children:["Rujukan dimensi saat ini:"," ",k.jsx("strong",{children:Br(i.profile)}),"."]})]})]}),Ti(i.profile)&&k.jsx("p",{role:"status",className:"notice",children:Ti(i.profile)}),k.jsx("p",{className:"muted",children:"Profil mengajar ini berbeda dengan akun Google. Data berada di browser ini; member dapat menyertakannya dalam proyek melalui Simpan ke Akun. Membuka proyek lama memuat kembali identitas proyek tersebut."}),k.jsxs(Ra,{className:"button",to:"/prompt",children:["Lanjut memilih prompt ",k.jsx(iu,{size:17})]})]})]})}const $k=Object.values(Object.assign({"./game/game-tv/template.json":{id:"game-tv",title:"Game Format TV & Kompetisi",version:1,category:"game",group:"Game & Aktivitas",order:28,description:"Pilih format dan paket babak; mekanik, skor, dan soal dibuat sesuai pilihan.",source:"Rancangan MAHARATI berdasarkan arahan dan referensi pengguna, 3 Oktober 2026",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"format",label:"Format kompetisi",type:"select",required:!0,shared:!1,options:["Cerdas Cermat","Famili 100","Clash of Champions / Kompetisi Kampus","Who Wants to Be a Millionaire","Kuis Terbalik (Jeopardy)","Sang Pengejar (The Chase)","Deal or No Deal","1 vs 100"],instructionsBy:{"Cerdas Cermat":"Bedakan wajib (giliran), lemparan (pengalihan soal), dan rebutan (buzzer pertama). Tetapkan siapa boleh menjawab, skor benar/salah dan tie-break. Paket klasik memuat tiga babak lengkap.","Famili 100":"Gunakan papan beberapa jawaban, face-off, strike, kesempatan steal dan pengali skor sesuai babak. Jawaban dan bobot merupakan rancangan pembelajaran, jangan mengklaim berasal dari survei 100 orang jika tidak ada data survei.","Clash of Champions / Kompetisi Kampus":"Turnamen lengkap memuat empat babak dengan mekanik berbeda; bracket menyimpan peserta lolos, estafet berpindah anggota, marathon mempunyai jeda. Jelaskan tie-break dan transisi.","Who Wants to Be a Millionaire":"Tangga kesulitan, checkpoint dan lifeline sekali pakai. Paket lengkap tepat 15 soal dan 3 lifeline. 50:50 menyisakan jawaban benar dan satu pengecoh. Teman/penonton memakai respons nyata dipandu guru atau simulasi yang diberi label jelas.","Kuis Terbalik (Jeopardy)":"Papan kategori × nilai, sel hanya dimainkan sekali, penentu giliran dan skor sesuai babak. Daily Double/final memakai taruhan poin virtual yang dibatasi saldo; semua kategori dan soal lengkap.","Sang Pengejar (The Chase)":"Pisahkan cash-builder poin, pilihan tawaran poin, dan lintasan kejaran. Guru atau model permainan transparan menjadi pengejar, bukan AI yang diklaim nyata. Atur jarak awal, kemajuan dan kondisi tertangkap secara deterministik.","Deal or No Deal":"Kotak berisi poin virtual yang dialokasikan saat mulai dan tidak diubah diam-diam. Buka soal sebelum kotak; tawaran bankir dihitung dengan formula transparan. Peluang/keputusan didiskusikan sebagai materi, tanpa uang atau perjudian.","1 vs 100":"Satu pemain utama melawan kelompok peserta kelas dengan jumlah yang dapat disesuaikan. Setiap peserta yang salah dieliminasi sesuai aturan; tidak menampilkan 100 peserta daring palsu. Bantuan menghitung respons nyata atau data simulasi berlabel."}},{id:"babak",label:"Paket / babak",type:"select",required:!0,shared:!1,options:[],dependsOn:"format",optionsBy:{"Cerdas Cermat":["Paket 3 Babak Klasik","Babak Wajib","Babak Lemparan","Babak Rebutan","Babak Final Penentu Juara"],"Famili 100":["Turnamen Lengkap","Babak Face-Off","Babak Nilai Tunggal","Babak Nilai Ganda","Babak Head-to-Head","Babak Jackpot"],"Clash of Champions / Kompetisi Kampus":["Turnamen Lengkap 4 Babak","Buzzer Rebutan","Tebak Kata Estafet","Stamina Akademik (Marathon)","Sistem Gugur (Bracket)","Kolaborasi Tim","Grand Final"],"Who Wants to Be a Millionaire":["Sesi Lengkap Hot Seat (15 Soal + 3 Lifeline)","Babak Berjenjang","Lifeline 50:50","Lifeline Tanya Teman","Lifeline Tanya Penonton","Soal Sejuta"],"Kuis Terbalik (Jeopardy)":["Papan Lengkap","Babak Single Jeopardy","Babak Double Jeopardy","Kotak Harta (Daily Double)","Babak Final Jeopardy"],"Sang Pengejar (The Chase)":["Sesi Lengkap","Babak Kumpul Uang Solo","Babak Pilih Tawaran","Babak Kejaran Final","Babak Tim Gabungan"],"Deal or No Deal":["Sesi Lengkap Buka Kotak","Babak Buka Kotak Bertahap","Tawaran Bankir","Babak Kotak Kembar","Ronde Kilat"],"1 vs 100":["Sesi Lengkap (The One vs The Mob)","Babak Eliminasi Mob","Bantuan Poll the Mob","Bantuan Ask the Mob","Babak Push On"]}},{id:"tim",label:"Jumlah tim / pemain",type:"number",required:!0,shared:!1,min:1,max:100},{id:"soal",label:"Jumlah soal per babak (kecuali format menetapkan jumlah)",type:"number",required:!0,shared:!1,min:1,max:100},{id:"kendali",label:"Kendali",type:"combo",required:!0,shared:!1,options:["Guru sebagai host","Host + buzzer tim pada satu layar","Peserta mandiri"]},{id:"aturan",label:"Penyesuaian aturan",type:"textarea",required:!1,shared:!1}],format:"authored",original:"",rules:[],body:`Buat aplikasi kompetisi edukasi terinspirasi format {{format}}, pilihan {{babak}}.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Peserta/tim: {{tim}}. Target soal per babak: {{soal}} (jumlah khusus format seperti hot seat 15 soal lebih diutamakan). Kendali: {{kendali}}.
Penyesuaian: {{aturan}}
MEKANIK WAJIB FORMAT
{{formatRules}}
Paket lengkap harus memiliki seluruh babak, transisi, reset, skor kumulatif, seri, dan juara. Babak individual hanya membuat mekanik babak yang dipilih. Tampilkan aturan skor sebelum bermain dan simpan log perubahan. Buzzer hanya menerima pemicu sah saat terbuka; jangan membiarkan jawaban/skor terhitung dua kali.
Tema dan aset visual orisinal untuk MAHARATI. Sebut sebagai adaptasi edukatif, bukan produk resmi penyelenggara TV. Semua hadiah berupa poin virtual.
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",format:"Cerdas Cermat",babak:"Paket 3 Babak Klasik",tim:"3",soal:"10",kendali:"Guru sebagai host",aturan:"Tidak menggunakan pengurangan poin untuk siswa sekolah dasar."}},"./game/ifp-interaktif/template.json":{id:"ifp-interaktif",title:"Media IFP — 25 Pilihan",version:1,category:"game",group:"Game & Aktivitas",order:26,description:"Aktivitas untuk layar sentuh kelas: kuis, permainan, alat bantu, dan eksplorasi.",source:"Rancangan MAHARATI berdasarkan arahan dan referensi pengguna, 3 Oktober 2026",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"jenis",label:"Jenis media IFP",type:"select",required:!0,shared:!1,options:["Kuis Sentuh Interaktif","Kuis Berkelompok (Battle Kelas)","Adu Cepat / Buzzer Reaksi","Papan Skor / Leaderboard Kompetisi","Tarik Tambang Digital (Battle 2 Tim)","Balap Karung Digital","Panjat Pinang Digital","Drag & Drop Sentuh","Pencocokan Kartu Sentuh (Memory Game)","Teka-teki Kata Sentuh (Word Search)","Roda Undian / Pemilih Acak Siswa","Pembagi Kelompok Acak","Timer & Pengatur Waktu Kelas","Papan Tulis Digital","Papan Anotasi Kolaboratif","Polling / Voting Langsung (Grafik Real-Time)","Papan Word Cloud","Papan KWL / Diskusi Terstruktur","Peta Konsep Sentuh","Peta/Diagram Sentuh","Galeri/Museum Virtual Sentuh","Grafik/Bagan Data Interaktif","Video Interaktif (Jeda + Kuis)","Simulasi Sentuh","Presentasi Layar Penuh Sentuh"],instructionsBy:{"Kuis Sentuh Interaktif":"Pilihan jawaban berupa tombol besar; satu respons sah per soal, lalu pembahasan yang dikendalikan guru.","Kuis Berkelompok (Battle Kelas)":"Kelompok memiliki giliran, papan skor, serta kesempatan setara. Skor mengikuti ketepatan, bukan hanya kecepatan.","Adu Cepat / Buzzer Reaksi":"Catat hanya buzzer pertama setelah guru membuka soal, kunci buzzer lain, sediakan reset dan giliran bila jawaban salah.","Papan Skor / Leaderboard Kompetisi":"Guru dapat tambah/kurangi poin dengan riwayat koreksi, tie-break dan reset berkonfirmasi; jangan menyebut peringkat contoh sebagai data nyata.","Tarik Tambang Digital (Battle 2 Tim)":"Dua zona sentuh terpisah. Jawaban benar memindahkan tali, bukan spam sentuhan. Sediakan batas kemenangan dan seri.","Balap Karung Digital":"Avatar maju melalui jawaban/tugas yang benar; animasi tidak boleh menutupi soal. Tangani finis bersamaan.","Panjat Pinang Digital":"Tahap panjatan mengikuti tantangan bertingkat, dengan checkpoint. Hindari penalti yang mempermalukan peserta.","Drag & Drop Sentuh":"Pointer capture per objek; pointerId terpisah. Drop target jelas, validasi kecocokan, alternatif pilih objek lalu target.","Pencocokan Kartu Sentuh (Memory Game)":"Balik maksimal dua kartu per pasangan; kunci klik selama evaluasi; pasangan berisi konsep yang relevan.","Teka-teki Kata Sentuh (Word Search)":"Tarik jalur huruf dengan pointer; simpan grid dan posisi solusi, dukung arah yang dijelaskan dan alternatif klik awal–akhir.","Roda Undian / Pemilih Acak Siswa":"Daftar dapat diedit; pilihan tanpa pengulangan opsional; gunakan nama panggilan. Animasi mengikuti hasil undian yang sudah ditentukan secara acak.","Pembagi Kelompok Acak":"Bagi daftar nama panggilan tanpa duplikasi/kehilangan peserta; ukuran kelompok berbeda maksimal satu, sediakan ulangi dan ekspor.","Timer & Pengatur Waktu Kelas":"Timer berdasarkan selisih waktu aktual, bukan hitungan interval; jeda, lanjut, tambah waktu, dan indikator tanpa suara tersedia.","Papan Tulis Digital":"Goresan terpisah per pointerId, pena/penghapus, undo, clear berkonfirmasi dan ekspor; sentuhan bersamaan jangan tersambung menjadi satu garis.","Papan Anotasi Kolaboratif":"Latar materi/gambar di bawah lapisan anotasi; multi-pointer lokal. Kolaborasi antarperangkat hanya bila ada backend nyata.","Polling / Voting Langsung (Grafik Real-Time)":"Untuk satu layar gunakan giliran dan kontrol guru; untuk lintasperangkat butuh sesi backend dan pencegahan suara ganda. Jangan berpura-pura tersinkron.","Papan Word Cloud":"Terima kata, normalisasi variasi kapital, hitung frekuensi dan batasi kata kasar melalui moderasi guru; multiuser daring memerlukan backend.","Papan KWL / Diskusi Terstruktur":"Tiga kolom Know, Want to Know, Learned; kartu dapat dipindah dan disunting, guru dapat merangkum bukti perubahan pemahaman.","Peta Konsep Sentuh":"Node konsep dan hubungan berlabel dapat dipindah; jangan menjadikan garis tanpa hubungan bermakna sebagai bukti pemahaman.","Peta/Diagram Sentuh":"Hotspot besar mengungkap bagian dan penjelasan; area tak tumpang tindih; sediakan daftar aksesibel alternatif.","Galeri/Museum Virtual Sentuh":"Navigasi ruang/kartu koleksi per layar, sumber/keterangan aset dan tombol kembali jelas, tanpa scroll di sesi presentasi.","Grafik/Bagan Data Interaktif":"Data dan sumbu terlihat benar, manipulasi parameter memperbarui grafik, sediakan tabel data dan jangan mengarang data empiris.","Video Interaktif (Jeda + Kuis)":"Guru menentukan titik jeda. Gunakan media berizin/unggahan lokal, tangani kegagalan video, jeda muncul sekali per lintasan dan dapat diputar ulang.","Simulasi Sentuh":"Parameter terukur, hubungan model dijelaskan, reset kondisi awal, catat asumsi dan keterbatasan; jangan mengklaim eksperimen nyata.","Presentasi Layar Penuh Sentuh":"Slide paginasi, navigasi besar, kontrol guru, teks cukup besar dari jauh; fullscreen diminta setelah tindakan pengguna."}},{id:"tim",label:"Jumlah peserta / tim aktif",type:"number",required:!0,shared:!1,min:1,max:12},{id:"putaran",label:"Jumlah putaran / aktivitas",type:"number",required:!0,shared:!1,min:1,max:50},{id:"tema",label:"Tema tampilan",type:"combo",required:!0,shared:!1,options:["Modern edukatif","Petualangan pastel","Papan kelas digital"]},{id:"catatan",label:"Kebutuhan tambahan",type:"textarea",required:!1,shared:!1}],format:"authored",original:"",rules:[],body:`Buat aplikasi media untuk Interactive Flat Panel (IFP) dengan jenis {{jenis}}.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Peserta/tim aktif: {{tim}}. Putaran/aktivitas: {{putaran}}. Tema: {{tema}}.
Catatan guru: {{catatan}}
MEKANIK KHUSUS
{{jenisRules}}
LAYAR SENTUH KELAS
Rancang satu layar aktivitas 16:9 tanpa scroll saat bermain. Formulir pengaturan boleh scroll, tetapi permainan memakai paginasi/scene agar tidak memotong soal. Layout menyesuaikan ukuran layar; sediakan mode laptop/HP sebagai fallback. Target sentuh minimal 56px, tulisan terbaca dari jauh. Gunakan Pointer Events, pointerId, pointer capture dan touch-action yang sesuai hanya pada area interaksi. Dukung multi-touch bila perangkat/browser mampu, uji dengan dua pointer; jangan menjamin semua perangkat mendukung banyak sentuhan. Sediakan fallback mouse/keyboard/giliran.
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.
Hasilkan konfigurasi aktivitas serta soal yang relevan hanya jika jenis medianya memerlukan soal. Timer/pembagi kelompok bukan kuis; jangan menambahkan penilaian materi yang tidak diperlukan.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",jenis:"Tarik Tambang Digital (Battle 2 Tim)",tim:"2",putaran:"10",tema:"Modern edukatif",catatan:"Dipakai di IFP 65 inci dalam kelas."}},"./game/kamera-aksi/template.json":{id:"kamera-aksi",title:"Kamera Aksi — Gerak & Pelacakan Tangan",version:1,category:"game",group:"Game & Aktivitas",order:29,description:"11 pilihan interaksi kamera dengan teknik dan batas deteksi yang sesuai.",source:"Arahan Kamera Aksi dan contoh Word Clash AR kiriman pengguna (dua lampiran Word Clash identik).",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"Deteksi gerak, segmentasi warna, dan pelacakan tangan adalah teknik berbeda. Generator menyesuaikan instruksi dengan permainan yang dipilih.",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"permainan",label:"Permainan kamera",type:"select",required:!0,shared:!1,options:["Lampu Merah Lampu Hijau","Freeze Countdown","Tebak Zona Jawaban (4 kuadran)","Sapu Kiri-Kanan","Deteksi Warna","Kejar Target Cepat","Kejar Bayangan","Tepuk Tangan Terdeteksi","Hitung Gerak Berulang (Lompat)","Estafet Zona","Word Clash — Pelacakan Tangan"],instructionsBy:{"Lampu Merah Lampu Hijau":"Frame differencing pada ROI tubuh: gerak saat hijau diizinkan, saat merah melewati ambang selama durasi tertentu menjadi pelanggaran. Kalibrasi noise dan jeda pergantian warna.","Freeze Countdown":"Hitung kestabilan frame pada hitung mundur; toleransi gerak kecil dan pemulihan otomatis jika cahaya berubah.","Tebak Zona Jawaban (4 kuadran)":"Jumlahkan perubahan piksel tiap kuadran, gunakan dwell time dan cooldown. Gerak seluruh tubuh yang mengenai banyak zona tidak boleh langsung memberi banyak jawaban.","Sapu Kiri-Kanan":"Deteksi urutan aktivasi zona kiri lalu kanan atau sebaliknya. Ini estimasi gerak kasar, bukan pelacakan tangan presisi.","Deteksi Warna":"Gunakan segmentasi HSV kartu warna, bukan frame differencing saja. Kalibrasi contoh warna dan toleransi cahaya, hindari warna latar yang sama.","Kejar Target Cepat":"Target muncul di zona, diterima bila energi gerak cukup di zona target dalam jendela waktu; gunakan cooldown agar tidak terhitung berkali-kali.","Kejar Bayangan":"Overlay siluet/jejak perubahan frame dan target. Jelaskan bahwa bayangan adalah efek gerak, bukan identifikasi tubuh presisi.","Tepuk Tangan Terdeteksi":"Frame differencing saja tidak mengenali tepuk secara andal. Gunakan MediaPipe Hands untuk pendekatan jarak dua telapak dengan fase mendekat–menjauh, label sebagai estimasi visual, atau sediakan mode gerak kasar dan tombol manual. Jangan mengklaim kamera mengenali bunyi tepuk.","Hitung Gerak Berulang (Lompat)":"Frame differencing hanya menghitung siklus gerak kasar, bukan memastikan lompatan. Untuk lompatan gunakan pose tracking opsional; tawarkan gerak duduk/angkat tangan dan hitung manual. Kalibrasi fase aktif–diam serta cooldown.","Estafet Zona":"Hanya zona tim aktif yang menerima gerak; pindahkan giliran setelah jawaban dinilai, cegah gerak penonton dihitung.","Word Clash — Pelacakan Tangan":"Gunakan MediaPipe Hands seperti referensi Word Clash: ujung telunjuk landmark 8 sebagai kursor, hit-test target, dwell/pinch terkalibrasi, pembagian area pemain. Jangan tertukar saat tangan bersilangan; jika identitas ambigu, jeda dan kalibrasi ulang. Aset/soal terpisah dari renderer."}},{id:"pemain",label:"Pemain",type:"combo",required:!0,shared:!1,options:["Satu pemain","Dua pemain pada satu kamera","Tim bergiliran"]},{id:"jumlah",label:"Jumlah tantangan",type:"number",required:!0,shared:!1,min:1,max:50},{id:"sensitivitas",label:"Sensitivitas awal",type:"combo",required:!0,shared:!1,options:["Rendah — ruang ramai","Sedang — kondisi kelas","Tinggi — gerak kecil"]},{id:"akses",label:"Kebutuhan gerak / aksesibilitas",type:"textarea",required:!1,shared:!1}],format:"authored",original:"",rules:[],body:`Buat game pembelajaran browser berbasis kamera: {{permainan}}.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Mode: {{pemain}}; tantangan {{jumlah}}; sensitivitas awal {{sensitivitas}}; kebutuhan akses {{akses}}.
TEKNIK KHUSUS
{{permainanRules}}
Untuk gerak kasar, gunakan getUserMedia dan frame differencing canvas beresolusi rendah tanpa library berat. Jangan menyebut teknik ini AR spasial atau pengenalan pose. Untuk mode yang secara eksplisit memerlukan tangan/pose, gunakan library tracking yang diperlukan saja; jelaskan unduhan model, lisensi, ketergantungan jaringan dan fallback.
PERILAKU KAMERA
Minta izin setelah tombol Mulai Kamera. Jalankan pada HTTPS atau localhost. Proses frame lokal; tidak merekam, menyimpan, atau mengirim video/gambar ke server. Hentikan semua track saat selesai, keluar, atau komponen dilepas. Tangani izin ditolak, perangkat tak tersedia, kamera sedang dipakai, model gagal dimuat, dan tab tersembunyi. Berikan kontrol sentuh/mouse/keyboard agar permainan tetap dapat digunakan.
Sediakan preview bercermin, periksa transformasi koordinat agar kiri-kanan cocok, overlay zona, kalibrasi cahaya, slider sensitivitas, ambang minimum, dwell time, hysteresis dan cooldown. Reset baseline setelah perubahan besar kamera/cahaya. Jangan memberi skor dari satu frame noise; tampilkan indikator deteksi agar guru memahami batasnya.
Berikan jarak aman dan opsi gerak ringan/duduk. Ketepatan jawaban dan skor refleks dipisahkan, gunakan jeda guru untuk pembahasan.
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",permainan:"Tebak Zona Jawaban (4 kuadran)",pemain:"Satu pemain",jumlah:"10",sensitivitas:"Sedang — kondisi kelas",akses:"Sediakan pilihan gerak tangan sambil duduk."}},"./game/misi-petualangan/template.json":{id:"misi-petualangan",title:"Misi Seru — 36 Tema Petualangan",version:1,category:"game",group:"Game & Aktivitas",order:27,description:"Game edukasi dengan misi, tantangan belajar, dan progres yang jelas.",source:"Rancangan MAHARATI berdasarkan arahan dan referensi pengguna, 3 Oktober 2026",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"tema",label:"Tema petualangan",type:"select",required:!0,shared:!1,options:["Pemadam Kebakaran","Kurir Paket Misterius","Robot Sortir Sampah","Dapur Pesanan Kilat","Mengantar Makanan","Penjaga Kebun Binatang","Detektif Museum","Tangkap Pencuri","Membuka Brankas Rahasia","Rumah Hantu Lucu","Menjelajah Candi","Balap Perahu","Penjelajah Labirin","Lompat Awan","Menghindari Meteor","Menyeberangi Sungai Buaya","Pesawat Kertas","Menjinakkan Bom","Ekspedisi Pulau Harta","Gua Kristal","Menyelam Mutiara","Berburu Dinosaurus","Mancing Ikan","Berkemah di Hutan","Kebun Ajaib","Ramuan Ajaib","Menyelamatkan Telur Naga","Menyelamatkan Kastel","Bangun Jembatan","Menara Penyelamat","Selamatkan Hewan Hutan","Bersihkan Laut","Kota Mini","Panjat Pinang","Space War","Membangun Roket"]},{id:"mode",label:"Mode pemain",type:"combo",required:!0,shared:!1,options:["Solo","Dua tim bergantian","Kelompok kooperatif"]},{id:"misi",label:"Jumlah misi",type:"number",required:!0,shared:!1,min:1,max:20},{id:"kontrol",label:"Kontrol",type:"combo",required:!0,shared:!1,options:["Sentuh / mouse dan keyboard","IFP multi-touch dengan fallback giliran"]},{id:"kesulitan",label:"Kesulitan",type:"combo",required:!0,shared:!1,options:["Mudah bertahap","Sedang","Tantangan lanjut"]}],format:"authored",original:"",rules:[],body:`Buat game edukasi bertema {{tema}}.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Mode: {{mode}}; jumlah misi: {{misi}}; kontrol: {{kontrol}}; kesulitan: {{kesulitan}}.
Rancang cerita pendek ramah usia, tujuan akhir, peta progres, dan misi yang mekaniknya benar-benar mengikuti tema. Contoh: sortir sampah menggunakan klasifikasi; detektif memakai bukti dan inferensi; membangun jembatan memakai pilihan struktur; roket memakai urutan/simulasi konsep; balapan maju melalui tantangan belajar. Jangan hanya mengganti gambar latar pada kuis yang sama.
Setiap misi memuat tujuan, aturan interaksi, tantangan terkait TP, kriteria sukses, umpan balik dan kesempatan perbaikan. Berikan hint bertahap tanpa langsung membocorkan jawaban, checkpoint dan lanjutkan sesi. Semua misi terisi lengkap.
Tema bom, hantu, dinosaurus, perang antariksa, dan buaya disajikan sebagai fantasi kartun non-grafis dengan bahaya simulasi, bukan petunjuk aktivitas berbahaya. Reward adalah poin virtual, tidak melibatkan uang atau taruhan.
Skor ketepatan dan progres belajar dipisahkan dari waktu/refleks. Sediakan jeda dan mode tanpa batas waktu untuk kebutuhan aksesibilitas.
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",tema:"Robot Sortir Sampah",mode:"Kelompok kooperatif",misi:"5",kontrol:"Sentuh / mouse dan keyboard",kesulitan:"Mudah bertahap"}},"./interaktif/lumi-game-map/template.json":{id:"lumi-game-map",title:"Lumi — Game Map Pembelajaran",category:"interaktif",order:26,version:1,group:"Media interaktif",description:"Peta belajar dengan hotspot menu, materi, asesmen: storyboard, prompt gambar, dan panduan perakitan.",source:"Naskah MAHARATI sesuai permintaan pengembangan pengguna, 13 Oktober 2026.",needs:["Sumber materi yang sah dan relevan tersedia di percakapan AI."],fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F"]},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik / lingkup materi",type:"textarea",required:!0},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0},{id:"sumber",label:"Ringkasan materi / sumber pendukung",type:"textarea",required:!1},{id:"jumlahSlide",label:"Jumlah slide termasuk cover, menu, asesmen, penutup",type:"number",required:!0,min:8,max:50,default:"12"},{id:"jumlahSoal",label:"Jumlah soal asesmen",type:"number",required:!0,min:1,max:20,default:"5"},{id:"gaya",label:"Gaya visual",type:"combo",required:!0,options:["Ilustrasi pastel edukatif","3D clay","Flat vector","Komik edukatif","Minimalis"],default:"Ilustrasi pastel edukatif"},{id:"palet",label:"Palet warna",type:"combo",required:!0,options:["Biru–ungu lembut","Hijau–krem","Warna cerah anak","Monokrom kontras"],default:"Biru–ungu lembut"},{id:"karakter",label:"Karakter / maskot",type:"combo",required:!1,options:["Tanpa karakter","Guru perempuan berjilbab","Guru laki-laki","Maskot hewan ramah"]}],format:"authored",note:"MAHARATI menghasilkan prompt. Jalankan bertahap di AI untuk memperoleh storyboard dan prompt gambar setiap slide, lalu rakit interaktivitasnya di Lumi. Gambar saja tidak memiliki tombol yang berfungsi.",stages:[{id:"storyboard",title:"1. Prompt Storyboard",body:`Anda perancang pembelajaran interaktif. Buat storyboard lengkap.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Rancang halaman depan berupa peta petualangan dengan titik/menu Tujuan, Materi, Latihan, Asesmen, Refleksi, dan Selesai. Berikan ID node, prasyarat, urutan, jalur ulang, dan cara kembali ke peta. Pilih Game Map H5P hanya jika tersedia pada versi Lumi pengguna; jika tidak, gunakan Course Presentation dengan Go to slide sebagai alternatif dan jelaskan perbedaannya. Jangan menyamakan hotspot gambar dengan penilaian otomatis.
Keluaran: tabel slide 1 sampai {{jumlahSlide}} tanpa melompati nomor. Kolom: ID, judul, TP terkait, naskah layar ringkas, deskripsi visual, objek interaktif yang ditambahkan guru, area klik dalam persen x/y/lebar/tinggi, tujuan navigasi, jawaban/kunci, dan umpan balik. Bedakan background gambar dari overlay editor. Jangan membakar jawaban benar atau tombol semu ke latar. Sediakan Home, Kembali, Lanjut, dan petunjuk. Pisahkan kunci guru dari tampilan murid. Nyatakan perkiraan beban materi; bila tidak muat, minta persetujuan mengubah jumlah slide. Akhiri checklist konsistensi.`},{id:"gambar",title:"2. Prompt Gambar Semua Slide",body:`Gunakan storyboard final dalam percakapan ini. Jika belum tersedia, minta pengguna menempelkan storyboard terlebih dahulu.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Rancang halaman depan berupa peta petualangan dengan titik/menu Tujuan, Materi, Latihan, Asesmen, Refleksi, dan Selesai. Berikan ID node, prasyarat, urutan, jalur ulang, dan cara kembali ke peta. Pilih Game Map H5P hanya jika tersedia pada versi Lumi pengguna; jika tidak, gunakan Course Presentation dengan Go to slide sebagai alternatif dan jelaskan perbedaannya. Jangan menyamakan hotspot gambar dengan penilaian otomatis.
Susun satu prompt gambar yang siap disalin untuk SETIAP slide 1 sampai {{jumlahSlide}}. Bukan satu prompt umum dan bukan kode aplikasi. Awali panduan gaya tetap, lalu blok terpisah Prompt Gambar Slide 01, 02, dst. Tiap blok: tujuan visual, komposisi, elemen, karakter konsisten, palet, latar, 16:9 1920 × 1080, margin aman 8%, serta ruang kosong spesifik untuk judul, teks, soal, dan tombol yang akan dipasang di Lumi. Utamakan ilustrasi tanpa teks agar teks Indonesia dapat ditambahkan secara editable; jika teks harus ada, tulis persis dan minta pemeriksaan ejaan manual. Jangan menggambar kunci jawaban. Cantumkan nama berkas slide-01.png dst, teks overlay terpisah, serta alt text. Untuk peta buat ruang hotspot yang jelas, bukan mengklaim hotspot sudah aktif. Hindari dekorasi menutupi materi. Hasilkan semua prompt hingga slide terakhir.`},{id:"panduan",title:"3. Prompt Panduan Merakit di Lumi",body:`Buat panduan pemula untuk merakit storyboard dan gambar slide yang sudah disepakati.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Rancang halaman depan berupa peta petualangan dengan titik/menu Tujuan, Materi, Latihan, Asesmen, Refleksi, dan Selesai. Berikan ID node, prasyarat, urutan, jalur ulang, dan cara kembali ke peta. Pilih Game Map H5P hanya jika tersedia pada versi Lumi pengguna; jika tidak, gunakan Course Presentation dengan Go to slide sebagai alternatif dan jelaskan perbedaannya. Jangan menyamakan hotspot gambar dengan penilaian otomatis.
Jangan mengklaim file H5P atau interaksi telah dibuat. Minta versi Lumi dan content type yang tersedia jika perlu. Jelaskan membuat proyek, memasang tiap gambar sebagai latar, menambahkan teks editable, memberi judul dan alternatif teks, overlay navigasi, memasukkan soal beserta feedback, serta menguji Home/Kembali/Lanjut. Sertakan tabel tiap node/slide → target tautan → aturan selesai. Bedakan kunjungan slide, jawaban soal, skor, dan ketercapaian TP. Sediakan langkah preview, simpan .h5p, ekspor sesuai fitur yang benar-benar tersedia, dan uji pada perangkat guru. Jangan mengklaim tombol/gambar otomatis menjadi interaktif atau menyarankan memasang tipe H5P yang tidak tersedia tanpa pengecekan. Jelaskan navigasi keyboard dan alternatif akses bila peta visual sulit digunakan. Akhiri checklist pengujian guru.`}]},"./interaktif/lumi-presentasi/template.json":{id:"lumi-presentasi",title:"Lumi — Presentasi Interaktif",category:"interaktif",order:25,version:1,group:"Media interaktif",description:"Siapkan storyboard slide 16:9, prompt gambar per slide, dan panduan interaktivitas di Lumi.",source:"Naskah MAHARATI sesuai permintaan pengembangan pengguna, 13 Oktober 2026.",needs:["Sumber materi yang sah dan relevan tersedia di percakapan AI."],fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F"]},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik / lingkup materi",type:"textarea",required:!0},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0},{id:"sumber",label:"Ringkasan materi / sumber pendukung",type:"textarea",required:!1},{id:"jumlahSlide",label:"Jumlah slide termasuk cover, menu, asesmen, penutup",type:"number",required:!0,min:8,max:50,default:"12"},{id:"jumlahSoal",label:"Jumlah soal asesmen",type:"number",required:!0,min:1,max:20,default:"5"},{id:"gaya",label:"Gaya visual",type:"combo",required:!0,options:["Ilustrasi pastel edukatif","3D clay","Flat vector","Komik edukatif","Minimalis"],default:"Ilustrasi pastel edukatif"},{id:"palet",label:"Palet warna",type:"combo",required:!0,options:["Biru–ungu lembut","Hijau–krem","Warna cerah anak","Monokrom kontras"],default:"Biru–ungu lembut"},{id:"karakter",label:"Karakter / maskot",type:"combo",required:!1,options:["Tanpa karakter","Guru perempuan berjilbab","Guru laki-laki","Maskot hewan ramah"]}],format:"authored",note:"MAHARATI menghasilkan prompt. Jalankan bertahap di AI untuk memperoleh storyboard dan prompt gambar setiap slide, lalu rakit interaktivitasnya di Lumi. Gambar saja tidak memiliki tombol yang berfungsi.",stages:[{id:"storyboard",title:"1. Prompt Storyboard",body:`Anda perancang pembelajaran interaktif. Buat storyboard lengkap.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Gunakan konsep H5P Course Presentation di Lumi: gambar sebagai latar slide, lalu teks, tombol Go to slide, dan soal interaktif ditambahkan di editor.
Keluaran: tabel slide 1 sampai {{jumlahSlide}} tanpa melompati nomor. Kolom: ID, judul, TP terkait, naskah layar ringkas, deskripsi visual, objek interaktif yang ditambahkan guru, area klik dalam persen x/y/lebar/tinggi, tujuan navigasi, jawaban/kunci, dan umpan balik. Bedakan background gambar dari overlay editor. Jangan membakar jawaban benar atau tombol semu ke latar. Sediakan Home, Kembali, Lanjut, dan petunjuk. Pisahkan kunci guru dari tampilan murid. Nyatakan perkiraan beban materi; bila tidak muat, minta persetujuan mengubah jumlah slide. Akhiri checklist konsistensi.`},{id:"gambar",title:"2. Prompt Gambar Semua Slide",body:`Gunakan storyboard final dalam percakapan ini. Jika belum tersedia, minta pengguna menempelkan storyboard terlebih dahulu.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Gunakan konsep H5P Course Presentation di Lumi: gambar sebagai latar slide, lalu teks, tombol Go to slide, dan soal interaktif ditambahkan di editor.
Susun satu prompt gambar yang siap disalin untuk SETIAP slide 1 sampai {{jumlahSlide}}. Bukan satu prompt umum dan bukan kode aplikasi. Awali panduan gaya tetap, lalu blok terpisah Prompt Gambar Slide 01, 02, dst. Tiap blok: tujuan visual, komposisi, elemen, karakter konsisten, palet, latar, 16:9 1920 × 1080, margin aman 8%, serta ruang kosong spesifik untuk judul, teks, soal, dan tombol yang akan dipasang di Lumi. Utamakan ilustrasi tanpa teks agar teks Indonesia dapat ditambahkan secara editable; jika teks harus ada, tulis persis dan minta pemeriksaan ejaan manual. Jangan menggambar kunci jawaban. Cantumkan nama berkas slide-01.png dst, teks overlay terpisah, serta alt text. Untuk peta buat ruang hotspot yang jelas, bukan mengklaim hotspot sudah aktif. Hindari dekorasi menutupi materi. Hasilkan semua prompt hingga slide terakhir.`},{id:"panduan",title:"3. Prompt Panduan Merakit di Lumi",body:`Buat panduan pemula untuk merakit storyboard dan gambar slide yang sudah disepakati.
Mata pelajaran: {{mapel}}; fase {{fase}}; kelas {{kelas}}.
Materi: {{materi}}
TP: {{tp}}
Ringkasan/sumber: {{sumber}}
Tepat {{jumlahSlide}} slide 16:9 (1920 × 1080), termasuk cover, menu, tujuan, materi, aktivitas, asesmen dan penutup; tepat {{jumlahSoal}} soal.
Gaya {{gaya}}, palet {{palet}}, karakter {{karakter}}.
Gunakan sumber yang tersedia. Jika materi inti belum cukup, tanyakan dulu; jangan mengarang kutipan atau fakta. Cocokkan TP, materi, soal, kunci dan pembahasan.
Gunakan konsep H5P Course Presentation di Lumi: gambar sebagai latar slide, lalu teks, tombol Go to slide, dan soal interaktif ditambahkan di editor.
Jangan mengklaim file H5P atau interaksi telah dibuat. Minta versi Lumi dan content type yang tersedia jika perlu. Jelaskan membuat proyek, memasang tiap gambar sebagai latar, menambahkan teks editable, memberi judul dan alternatif teks, overlay navigasi, memasukkan soal beserta feedback, serta menguji Home/Kembali/Lanjut. Sertakan tabel tiap node/slide → target tautan → aturan selesai. Bedakan kunjungan slide, jawaban soal, skor, dan ketercapaian TP. Sediakan langkah preview, simpan .h5p, ekspor sesuai fitur yang benar-benar tersedia, dan uji pada perangkat guru. Jangan mengklaim tombol/gambar otomatis menjadi interaktif atau menyarankan memasang tipe H5P yang tidak tersedia tanpa pengecekan. Jelaskan navigasi keyboard dan alternatif akses bila peta visual sulit digunakan. Akhiri checklist pengujian guru.`}]},"./kuis/kuis-interaktif/template.json":{id:"kuis-interaktif",title:"Generator Kuis Pembelajaran",version:1,category:"kuis",group:"Asesmen Interaktif",order:25,description:"Soal, kunci, pembahasan, dan pengalaman kuis sesuai tujuan belajar.",source:"Rancangan MAHARATI berdasarkan arahan dan referensi pengguna, 3 Oktober 2026",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"bentuk",label:"Bentuk soal",type:"combo",required:!0,shared:!1,options:["Pilihan ganda 4 opsi","Benar-salah disertai alasan","Menjodohkan","Mengurutkan","Jawaban singkat dengan rubrik"]},{id:"jumlah",label:"Jumlah soal",type:"number",required:!0,shared:!1,min:1,max:100},{id:"level",label:"Tuntutan berpikir",type:"combo",required:!0,shared:!1,options:["Pemahaman dasar","Penerapan kontekstual","Analisis dan evaluasi","Campuran sesuai TP"]},{id:"modeKuis",label:"Mode penggunaan",type:"combo",required:!0,shared:!1,options:["Mandiri dengan umpan balik","Kuis kelas dipandu guru","Tim bergantian"]},{id:"keluaran",label:"Hasil yang diminta",type:"combo",required:!0,shared:!1,options:["Paket soal + kunci + pembahasan","Aplikasi kuis browser lengkap"]},{id:"waktu",label:"Waktu per soal",type:"combo",required:!0,shared:!1,options:["Tanpa batas waktu","30 detik","60 detik","90 detik"]}],format:"authored",original:"",rules:[],body:`KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Buat {{keluaran}} dengan tepat {{jumlah}} soal utama, bentuk {{bentuk}}, tuntutan {{level}}, mode {{modeKuis}}, waktu {{waktu}}.
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
Awali dengan kisi-kisi ringkas: nomor, TP, indikator, bentuk, tingkat kognitif dan alasannya. Distribusikan soal proporsional terhadap TP, gunakan stimulus bila membantu. Pengecoh harus masuk akal dan mewakili miskonsepsi. Hindari kunci berpola dan soal HOTS semu yang hanya panjang. Sediakan skor perbutir, jawaban/kunci atau rubrik, alasan, dan tindak lanjut belajar.
Dalam mode mandiri, berikan petunjuk setelah salah dan kesempatan mencoba sebelum pembahasan. Dalam mode kelas, guru mengendalikan pembukaan kunci. Tampilkan nomor soal, progres, petunjuk, serta hasil per TP; jangan membuka jawaban semua soal di layar peserta.
Jika hanya paket soal diminta, jangan membuat aplikasi. Jika aplikasi diminta: IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",bentuk:"Pilihan ganda 4 opsi",jumlah:"10",level:"Penerapan kontekstual",modeKuis:"Mandiri dengan umpan balik",keluaran:"Aplikasi kuis browser lengkap",waktu:"Tanpa batas waktu"}},"./media/media-interaktif/template.json":{id:"media-interaktif",title:"Media Interaktif — Canva / Gemini Web",version:2,category:"interaktif",group:"Media & Kreasi",order:24,description:"Rancang media Memahami–Mengaplikasi–Merefleksi dengan asesmen dan umpan balik.",source:"Adaptasi PromptLab v4 — Media Pembelajaran Bermakna kiriman pengguna; tanpa PIN guru yang tertanam di kode.",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"",fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"platform",label:"Platform sasaran",type:"combo",required:!0,shared:!1,options:["Canva Code","Gemini Canvas / Web","Website statis","Google Sites (embed)","Google Apps Script"]},{id:"database",label:"Penyimpanan hasil",type:"combo",required:!0,shared:!1,options:["Lokal di browser","Supabase dengan autentikasi dan RLS","Google Sheets melalui backend terautentikasi"]},{id:"modeBelajar",label:"Cara belajar",type:"select",required:!0,shared:!1,options:["Mandiri / PJJ","Didampingi guru"]},{id:"durasi",label:"Durasi belajar (menit)",type:"number",required:!0,shared:!1,min:10,max:240},{id:"modul",label:"Komponen pembelajaran",type:"multiselect",required:!0,shared:!1,options:["Pemantik","Materi bertahap","Contoh kontekstual","Cek pemahaman","Latihan interaktif","Studi kasus","Simulasi","LKPD","Game edukatif","Rangkuman","Asesmen akhir","Refleksi"]},{id:"mikro",label:"Soal cek per submateri",type:"number",required:!0,shared:!1,min:1,max:10},{id:"akhir",label:"Soal asesmen akhir",type:"number",required:!0,shared:!1,min:1,max:50},{id:"gaya",label:"Gaya visual",type:"combo",required:!0,shared:!1,options:["Modern edukatif","Pastel ilustratif","Minimalis kontras tinggi"]},{id:"konteks",label:"Konteks lokal / kemampuan awal",type:"textarea",required:!1,shared:!1}],format:"authored",original:"",rules:[],body:`Buat media pembelajaran interaktif lengkap berdasarkan kebutuhan berikut.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Platform: {{platform}}
Penyimpanan: {{database}}
Cara belajar: {{modeBelajar}}; durasi inti {{durasi}} menit.
Komponen dipilih: {{modul}}
Gaya: {{gaya}}
Konteks awal: {{konteks}}
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
RANCANGAN BELAJAR
Petakan setiap TP ke materi, aktivitas, dan bukti. Susun Memahami → Mengaplikasi → Merefleksi memakai komponen pilihan tanpa mengganti urutan pedagogis. Materi harus menjelaskan konsep dan hubungan sebab-akibat, contoh dan bukan-contoh; jangan hanya ringkasan slide. Beri prasyarat sederhana, petunjuk belajar, dan bantuan bertahap, terutama pada belajar mandiri.
Jika cek pemahaman dipilih, buat tepat {{mikro}} butir per submateri dan hitung totalnya. Jika asesmen akhir dipilih, buat tepat {{akhir}} butir utama. Jangan memaksakan komponen yang tidak dipilih. Tampilkan kriteria sebelum tugas; umpan balik salah memberi petunjuk spesifik, kesempatan revisi, lalu pembahasan. Jawaban benar juga mendapat alasan.
Interaksi sesuai bentuk: pasangan memeriksa semua pasangan, urutan memeriksa seluruh urutan, jawaban terbuka memakai rubrik/tinjauan. Pisahkan skor game dari bukti ketercapaian TP. Status dibuka, dikerjakan, direvisi, dan dinilai berbeda. Jangan menganggap klik/timer membuktikan tuntas.
Mode guru menyediakan peta TP, kunci, rubrik, dan pemeriksaan hasil. Akses data privat harus melalui autentikasi server, bukan PIN yang tertanam pada halaman. Bila lokal, jelaskan keterbatasan privasinya dan sediakan ekspor hasil.
Antarmuka dapat scroll agar materi tidak terpotong. Sediakan alternatif tombol/keyboard untuk drag-and-drop, tombol HOME, Kembali, Lanjut, dan pemulihan draf. Jangan memakai SDK platform yang tidak tersedia; siapkan fallback browser standar.
IMPLEMENTASI APLIKASI
Hasilkan kode lengkap yang benar-benar dapat dijalankan, bukan tombol demonstrasi atau TODO. Pisahkan data materi/soal, mesin permainan, dan tampilan agar mudah diubah. Gunakan teks Indonesia yang jelas, kontras terbaca, fokus keyboard, dan tombol sentuh besar. Sediakan mulai, jeda, ulangi, petunjuk, pengaturan suara, dan hasil. Audio hanya dimulai setelah interaksi pengguna. Tangani kondisi kosong, jaringan putus, dan penyimpanan browser ditolak dengan fallback yang jujur.
Jangan menanamkan password, token admin, atau service-role key di HTML/JavaScript. Pengunci lokal bukan keamanan akun. Jika diminta database, berikan skema dan aturan akses di server; jika layanan belum dikonfigurasi, tampilkan status lokal, bukan hasil sinkronisasi palsu. Gunakan identitas minimum dan jangan meminta data pribadi murid yang tidak diperlukan.
Uji aturan skor, jawaban, reset, pergantian pemain, resize, sentuh, dan keyboard. Nyatakan pengujian yang benar-benar dilakukan dan keterbatasan lingkungan. Tidak perlu memakai logo, musik, atau aset acara TV berlisensi.
Keluaran: struktur berkas, seluruh kode, model data konten terpisah, langkah menjalankan, serta skenario pengujian.`,example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",platform:"Website statis",database:"Lokal di browser",modeBelajar:"Didampingi guru",durasi:"70",modul:["Pemantik","Materi bertahap","Contoh kontekstual","Cek pemahaman","Latihan interaktif","Asesmen akhir","Refleksi"],mikro:"3",akhir:"10",gaya:"Modern edukatif",konteks:"Murid mengenal makhluk hidup di lingkungan sawah."}},"./media/notebook-buku/template.json":{id:"notebook-buku",title:"NotebookLM — Slide & Video dari Buku",version:2,category:"media",group:"Media & Kreasi",order:21,description:"Satu isian bab/subbab, dua prompt: slide buku dan naskah video NotebookLM.",source:"Contoh prompt slide sumber buku dari pengguna; contoh bab dan desain dijadikan isian.",needs:["Buku yang memuat bab/subbab pilihan sebagai sumber aktif di NotebookLM."],note:"",fields:[{id:"bab",label:"Bab dan subbab yang dipilih",type:"textarea",required:!0,shared:!1},{id:"tema",label:"Tema visual",type:"combo",required:!1,shared:!1,options:["3D Glass","Flat illustration","Minimalis","Kolase kertas","Isometrik"],default:"3D Glass"},{id:"warna",label:"Palet warna",type:"combo",required:!1,shared:!1,options:["Pastel lembut","Biru dan putih","Warna bumi","Kontras tinggi"],default:"Pastel lembut"},{id:"layout",label:"Gaya layout",type:"combo",required:!1,shared:!1,options:["Modern, clean, educational","Minimalis dengan ruang kosong","Infografis edukatif"],default:"Modern, clean, educational"},{id:"karakter",label:"Karakter guru",type:"combo",required:!1,shared:!1,options:["Guru perempuan 3D, seragam Pemda khaki, berjilbab, rok panjang, berkacamata","Guru laki-laki 3D, seragam khaki, berkacamata","Guru perempuan 2D dengan busana profesional","Tanpa karakter"],default:"Guru perempuan 3D, seragam Pemda khaki, berjilbab, rok panjang, berkacamata"},{id:"latar",label:"Latar belakang",type:"combo",required:!1,shared:!1,options:["Terang","Putih bersih","Pastel gradasi","Gelap berkontras tinggi"],default:"Terang"}],format:"authored",original:"",rules:[],example:{bab:`BAB 2 Belajar Berpantun
A. Menemukan Ciri-Ciri Pantun
B. Penggunaan Pantun dalam Kehidupan Sehari-hari`,tema:"3D Glass",warna:"Pastel lembut",layout:"Modern, clean, educational",karakter:"Guru perempuan 3D, seragam Pemda khaki, berjilbab, rok panjang, berkacamata",latar:"Terang"},stages:[{id:"slide",title:"Prompt Slide Buku",body:`Saya ingin membuat materi presentasi untuk {{bab}}.
Tolong ekstrak isinya dari buku dengan aturan:
Dilarang mengarang, menambah, atau mengubah redaksi asli buku (copy-paste apa adanya).
Susun dalam poin-poin yang mudah dipahami untuk slide.
Tampilkan materi secara sistematis.

Aturan Desain:
- Tema: {{tema}}
- Palet Warna: {{warna}}
- Gaya Layout: {{layout}}
- Latar: {{latar}}

Ketentuan Karakter: {{karakter}}. Jika memakai karakter, sertakan visual karakter guru sedang menjelaskan di setiap slide tanpa menutupi teks. Jika memilih tanpa karakter, jangan menambahkan karakter guru.`},{id:"video",title:"Prompt Video Buku",body:`Tolong buatkan naskah video untuk {{bab}}.
Aturan:
1. Gunakan data hanya dari sumber yang aktif.
2. Dilarang menambah/mengurangi redaksi: Gunakan kalimat dari buku secara utuh.`}]},"./media/notebook-rpp/template.json":{id:"notebook-rpp",title:"NotebookLM — Slide dari RPP",version:1,category:"media",group:"Media & Kreasi",order:20,description:"Bahan tayang sesuai alur pertemuan, dengan pilihan desain dan karakter.",source:"Contoh prompt slide sumber RPP dari pengguna; parameter desain dan karakter dibuat sebagai isian.",needs:["RPP yang memuat pertemuan pilihan, ditambahkan sebagai sumber aktif di NotebookLM.","Buku/BSE pendukung jika dibutuhkan."],note:"",fields:[{id:"pertemuan",label:"Pertemuan yang dibuat",type:"combo",required:!0,shared:!1,options:["Pertemuan 1","Pertemuan 2","Pertemuan 3","Pertemuan 4"]},{id:"tema",label:"Tema visual",type:"combo",required:!0,shared:!1,options:["3D Glass","Flat illustration","Minimalis","Kolase kertas","Isometrik"]},{id:"warna",label:"Palet warna",type:"combo",required:!0,shared:!1,options:["Pastel lembut","Biru dan putih","Warna bumi","Kontras tinggi"]},{id:"layout",label:"Gaya layout",type:"combo",required:!0,shared:!1,options:["Modern, clean, educational","Minimalis dengan ruang kosong","Infografis edukatif"]},{id:"karakter",label:"Karakter guru",type:"combo",required:!0,shared:!1,options:["Guru perempuan 3D, seragam Pemda khaki, berjilbab, rok panjang, berkacamata","Guru laki-laki 3D, seragam khaki, berkacamata","Guru perempuan 2D dengan busana profesional","Tanpa karakter"]},{id:"latar",label:"Latar belakang",type:"combo",required:!0,shared:!1,options:["Terang","Putih bersih","Pastel gradasi","Gelap berkontras tinggi"]}],format:"authored",original:"",rules:[],body:`Saya ingin membuat BAHAN TAYANG PEMBELAJARAN berdasarkan RPP yang tersedia pada sumber.

PERTEMUAN YANG DIBUAT: {{pertemuan}}

Gunakan RPP sebagai SUMBER UTAMA. Fokus HANYA pada pertemuan tersebut.
Jika tersedia buku/BSE atau sumber materi lain di NotebookLM, gunakan sebagai sumber materi pendukung sesuai kebutuhan aktivitas pada RPP.

JANGAN:
- mengubah atau membuat TP baru;
- membuat aktivitas baru di luar RPP;
- mengambil materi yang baru dipelajari pada pertemuan berikutnya;
- menjadikan slide seperti buku teks;
- mengarang informasi yang tidak didukung sumber.

Buat slide yang dapat LANGSUNG digunakan guru saat mengajar.
Slide harus mengikuti urutan kegiatan dalam RPP dan membantu:
- guru menjalankan pembelajaran;
- murid memahami tujuan;
- memunculkan pemantik/stimulus;
- memberikan penguatan konsep secukupnya;
- memberi instruksi aktivitas secara jelas;
- menampilkan pertanyaan/masalah yang perlu dikerjakan murid;
- mendukung pengalaman Memahami → Mengaplikasi → Merefleksi;
- melakukan checkpoint/asesmen formatif jika terdapat dalam RPP;
- melakukan refleksi dan penutup;
- menghubungkan hasil belajar dengan pertemuan berikutnya jika relevan.

Untuk aktivitas murid, tampilkan instruksi yang dapat langsung dibaca di layar, bukan penjelasan untuk guru.
Tentukan jumlah slide secara proporsional sesuai isi dan durasi pertemuan. Jangan memaksakan semua bagian jika tidak diperlukan.
Urutan slide dapat berupa:
Cover → Tujuan → Pemantik → Penguatan Konsep → Aktivitas sesuai RPP → Pengolahan/Analisis → Checkpoint → Kesimpulan → Refleksi → Pertemuan Berikutnya.
Jika satu aktivitas membutuhkan beberapa slide agar mudah dilakukan murid, pecah secara wajar.

DESAIN:
- 16:9 widescreen
- gaya {{layout}}
- tema {{tema}}
- warna {{warna}}
- background {{latar}}
- teks ringkas dan mudah dibaca dari jauh
- gunakan diagram, tabel, ilustrasi, gambar, atau visual jika benar-benar membantu pemahaman
- hindari slide penuh paragraf dan dekorasi berlebihan.

Ketentuan karakter: {{karakter}}. Jika memakai karakter, tampilkan sedang menjelaskan di setiap slide tanpa menutupi teks. Jika memilih tanpa karakter, jangan menambahkan karakter guru.
Pastikan hasil akhir terasa sebagai ALUR PEMBELAJARAN, bukan rangkuman materi.

Sebelum selesai, cek:
1. seluruh aktivitas penting pada pertemuan RPP yang dipilih sudah terwakili;
2. tidak ada aktivitas tambahan di luar RPP;
3. materi sesuai pertemuan ini;
4. instruksi murid jelas;
5. asesmen/checkpoint sesuai RPP;
6. slide terakhir mengandung refleksi/penutup yang sesuai.

Langsung buat bahan tayangnya.`,example:{pertemuan:"Pertemuan 1",tema:"3D Glass",warna:"Pastel lembut",layout:"Modern, clean, educational",karakter:"Guru perempuan 3D, seragam Pemda khaki, berjilbab, rok panjang, berkacamata",latar:"Terang"}},"./perencanaan/aktivitas.json":{id:"aktivitas",title:"Gambaran aktivitas pembelajaran",group:"Pembelajaran",source:"3 Gambaran Aktivitas Pembelajaran Mendalam - ADA ISIAN.docx",description:"Rancang pengalaman Memahami, Mengaplikasi, dan Merefleksi per modul.",needs:["Pemetaan modul dan waktu final.","Buku/BSE serta rujukan dimensi profil lulusan."],fields:[{id:"jenjang",label:"Jenjang",type:"select",required:!0,shared:!0,options:["PAUD","SD/MI","SMP/MTs","SMA/MA","SMK/MAK","Pendidikan Khusus / Kesetaraan"]},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F"]},{id:"dimensions",label:"Dimensi dan subdimensi pilihan",type:"dimensions",required:!0,help:"Pilih fase dan jenjang terlebih dahulu. Uraian Berkembang, Cakap, Mahir mengikuti jenjang pada KEPKA BSKAP 058/H/KR/2025.",reference:"profil-058"}],note:"",original:`Prompt ini merupakan lanjutan dari Prompt 2 — Pemetaan Modul dan Alokasi Waktu.
Gunakan seluruh file dan hasil kerja yang masih tersedia dalam percakapan sebelumnya.
Tugas Anda adalah membuat gambaran aktivitas Pembelajaran Mendalam untuk setiap modul yang telah ditetapkan pada Prompt 2.
Gambaran aktivitas ini merupakan blueprint pembelajaran, bukan Modul Ajar/RPP lengkap.

A. SUMBER UTAMA
1. Hasil Prompt 2
Gunakan apa adanya:
semester;
Bab;
kode modul;
judul modul;
TP yang masuk ke setiap modul;
kode TP;
rumusan TP;
jumlah pertemuan;
alokasi JP.
Data tersebut sudah final.
Jangan:
membuat modul baru;
menghapus modul;
menggabungkan atau memecah modul;
memindahkan TP;
membuat TP baru;
mengubah kode atau rumusan TP;
mengubah jumlah pertemuan;
mengubah alokasi JP.
Jika terdapat ketidaksesuaian, beri tanda:
[Perlu Verifikasi Guru]
dan jangan memperbaikinya secara diam-diam.
2. Buku/BSE/Panduan Guru sebelumnya
Gunakan sebagai referensi aktivitas dan konteks pembelajaran, seperti:
teks;
fenomena;
masalah;
materi;
aktivitas;
praktik;
observasi;
penyelidikan;
projek;
diskusi;
produk;
konteks kehidupan murid.
Aktivitas dari buku boleh diadaptasi, tetapi tidak boleh digunakan untuk mengubah TP atau pembagian modul.
3. Dokumen Alur Perkembangan Kompetensi Dimensi Profil Lulusan
Gunakan dokumen ini sebagai rujukan untuk memahami:
Dimensi Profil Lulusan;
Subdimensi;
perkembangan kompetensi pada setiap tingkat yang tercantum;
karakteristik kemampuan yang diharapkan.
Gunakan rumusan dalam dokumen sumber apa adanya sebagai rujukan.
Jangan membuat sendiri subdimensi atau deskripsi perkembangan kompetensi yang tidak terdapat dalam dokumen.

B. INPUT DARI GURU
Guru akan menentukan Dimensi Profil Lulusan dan Subdimensi yang ingin dikuatkan.
Format isian:
1. Dimensi Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa
No
Subdimensi
Berkembang
Cakap
Mahir
1
Hubungan dengan Tuhan Yang Maha Esa
Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya belum berdasarkan kesadaran diri atau masih berdasarkan perintah orang lain.
Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa lebih mendalam berdasarkan kesadaran diri secara konsisten dan mampu mengajak orang lain dalam kehidupan sehari-hari.
Memahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya berdasarkan kesadaran dirinya secara konsisten.
2
Hubungan dengan sesama Manusia
Menunjukkan perilaku akhlak mulia dalam kehidupan sosial dengan saling menghormati dan berintegritas namun belum konsisten.
Menunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial.
Menunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial serta mampu mengajak orang lain.
3
Hubungan dengan Lingkungan Alam
Memiliki kesadaran untuk menjaga keseimbangan dan kelestarian lingkungan alam sesuai dengan pengetahuan yang dimilikinya.
Menjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya.
Menjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya bersama-sama dengan orang lain.
2. Dimensi Kewargaan
No
Subdimensi
Berkembang
Cakap
Mahir
1
Kewargaan Lokal
Menunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya.
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakat sekitarnya dengan bimbingan.
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya dan mampu mengajak orang lain untuk melakukan hal yang sama secara mandiri.
2
Kewargaan Nasional
Memiliki ketertarikan dalam menghargai keragaman masyarakat, budaya nasional untuk menguatkan wawasan kebangsaan.
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan menghargai keberagaman budayanya, serta berinisiatif menjaga Negara Kesatuan Republik Indonesia (NKRI).
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan berinisiatif untuk menjaga NKRI, serta mampu mengajak orang lain melakukan hal yang sama.
3
Kewargaan Global
Memiliki ketertarikan dalam menghargai keragaman masyarakat, budaya global untuk menguatkan wawasan kebangsaan.
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional.
Berperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional, serta mampu mengajak orang lain melakukan yang sama.
3. Dimensi Penalaran Kritis
No
Subdimensi
Berkembang
Cakap
Mahir
1
Penyampaian Argumentasi
Menyampaikan argumen logis secara runtut disertai alasan sederhana.
Menyampaikan argumen logis secara runtut disertai alasan yang kuat.
Menyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain.
2
Pengambilan Keputusan
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan dengan bimbingan.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan.
3
Penyelesaian Masalah
Menyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri.
4. Dimensi Kreativitas
No
Subdimensi
Berkembang
Cakap
Mahir
1
Gagasan baru
Menyampaikan gagasan inovatif dari contoh atau referensi yang diberikan.
Mengembangkan gagasan inovatif untuk menyelesaikan masalah sekitar.
Mengembangkan beberapa gagasan inovatif untuk menyelesaikan masalah di lingkungan yang lebih luas.
2
Fleksibilitas berpikir
Menemukan solusi masalah di lingkungan sekitar.
Menemukan beberapa alternatif solusi masalah di lingkungan sekitar dan memberikan umpan balik.
Menemukan beberapa alternatif solusi masalah di lingkungan sekitar dan mengevaluasi alternatif solusinya.
3
Karya
Menciptakan tindakan dan/atau karya kreatif serta dapat mengidentifikasi dampaknya bagi dirinya.
Menciptakan tindakan dan/atau karya kreatif yang kompleks serta dapat menganalisis dampaknya bagi dirinya dan orang lain.
Menciptakan tindakan dan/atau karya kreatif yang kompleks serta dapat mengevaluasi dampaknya bagi orang lain dan lingkungan sekitarnya.
5. Dimensi Kolaborasi
No
Subdimensi
Berkembang
Cakap
Mahir
1
Peduli
Menunjukkan kepedulian untuk berkolaborasi namun belum konsisten.
Menunjukkan kepedulian secara konsisten untuk berkolaborasi.
Mengajak teman untuk peduli berkolaborasi.
2
Berbagi
Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan namun belum konsisten.
Saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan.
Mengambil inisiatif untuk saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan.
3
Kerja sama
Bekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama namun belum konsisten.
Bekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama secara konsisten.
Mengambil inisiatif untuk bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama.
6. Dimensi Kemandirian
No
Subdimensi
Berkembang
Cakap
Mahir
1
Bertanggung Jawab
Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan penuh.
Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan.
Menetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan minimal.
2
Kepemimpinan
Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan penuh.
Memotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan.
Memotivasi dan mengorganisasi teman sebaya untuk mencapai target yang ditetapkan bersama secara tuntas dengan bimbingan minimal.
3
Pengembangan Diri
Mengidentifikasi potensi dan bakat diri, menyusun rencana pengembangan diri untuk mewujudkan cita-cita dengan bimbingan penuh.
Mengidentifikasi potensi dan bakat diri, menyusun dan mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita dengan bimbingan.
Mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita serta mampu beradaptasi dengan perubahan dan menghadapi tantangan dengan bimbingan minimal.
7. Dimensi Kesehatan
No
Subdimensi
Berkembang
Cakap
Mahir
1
Hidup bersih dan sehat
Menjaga kebersihan diri dan keluarga untuk meraih kesehatan namun belum konsisten.
Menjaga kebersihan diri dan keluarga untuk meraih kesehatan secara konsisten.
Mengajak orang lain untuk bersama-sama menjaga kebersihan diri dan keluarga guna meraih kesehatan yang prima.
2
Kebugaran, kesehatan fisik, dan kesehatan mental
Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan penuh.
Meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan.
Mengajak orang lain agar meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan minimal.
3
Kesehatan lingkungan
Berperan aktif meningkatkan kesehatan lingkungan rumah dan sekolah.
Berperan aktif meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas.
Mengajak orang lain untuk meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas.
8. Dimensi Komunikasi
No
Subdimensi
Berkembang
Cakap
Mahir
1
Menyimak
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
2
Berbicara
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif.
3
Membaca
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
4
Menulis
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif.


Gunakan hanya Dimensi dan Subdimensi yang dipilih guru.
Jangan menambahkan Dimensi atau Subdimensi lain hanya agar terlihat lengkap.

C. ANALISIS DIMENSI DAN SUBDIMENSI
Untuk setiap Dimensi–Subdimensi yang dipilih guru:
temukan Subdimensi tersebut dalam dokumen Alur Perkembangan Kompetensi;
baca deskripsi perkembangan kompetensinya;
tentukan tuntutan perkembangan yang relevan dengan jenjang/kelas berdasarkan dokumen;
gunakan deskripsi tersebut sebagai arah pengembangan aktivitas;
jangan sekadar menempelkan nama Dimensi dan Subdimensi pada modul.
Aktivitas harus benar-benar memberikan kesempatan kepada murid untuk menunjukkan atau mengembangkan kompetensi pada Subdimensi tersebut.
Jika dokumen tidak memberikan informasi yang cukup untuk menentukan tingkat perkembangan yang sesuai, beri tanda:
[Perlu Verifikasi Guru]
Jangan mengarang deskripsi perkembangan.

D. PENEMPATAN DIMENSI–SUBDIMENSI PADA MODUL
Tidak semua Dimensi–Subdimensi harus dipaksakan masuk pada semua modul.
Analisis setiap modul berdasarkan:
TP;
materi;
aktivitas yang memungkinkan;
karakteristik Dimensi–Subdimensi yang dipilih.
Gunakan Dimensi–Subdimensi pada modul hanya jika memang dapat dikembangkan melalui aktivitas nyata.
Jika guru memilih beberapa Dimensi–Subdimensi, distribusikan secara proporsional pada modul yang paling relevan.
Satu modul dapat menguatkan lebih dari satu Subdimensi jika benar-benar relevan.
Jangan memasukkan seluruh pilihan ke setiap modul secara otomatis.

E. LANDASAN PEMBELAJARAN MENDALAM
Setiap modul harus dirancang berdasarkan prinsip:
Berkesadaran
Bermakna
Menggembirakan
melalui pengalaman belajar:
Memahami → Mengaplikasi → Merefleksi
Ketiganya harus membentuk alur belajar yang saling terhubung.
Jangan sekadar mencantumkan istilah tersebut.
Prinsip Pembelajaran Mendalam harus terlihat dari aktivitas nyata yang dialami murid.

F. PENGALAMAN BELAJAR
1. MEMAHAMI
Murid secara aktif membangun pemahaman yang diperlukan untuk mencapai TP.
Aktivitas dapat berupa:
mengamati;
membaca;
menyimak;
memirsa;
mengeksplorasi;
mengidentifikasi;
membandingkan;
mengajukan pertanyaan;
mengumpulkan informasi;
mengolah informasi;
menemukan pola;
menghubungkan pengetahuan awal dengan konsep baru;
membangun konsep.
Tahap Memahami harus menjadi bekal nyata untuk tahap Mengaplikasi.

2. MENGAPLIKASI
Murid menggunakan pemahaman yang telah dibangun untuk melakukan kemampuan yang dituntut TP.
Aktivitas dapat berupa:
menganalisis;
menyelidiki;
memecahkan masalah;
menerapkan konsep;
menginterpretasikan data;
mengambil keputusan;
membandingkan alternatif;
mempraktikkan;
merancang;
menulis;
membuat;
menghasilkan produk;
mempresentasikan;
menguji;
memperbaiki.
Tahap ini harus menjadi tempat utama kompetensi dalam TP muncul dan dapat diamati.

3. MEREFLEKSI
Murid mengevaluasi dan memaknai proses serta hasil yang telah dialaminya.
Aktivitas dapat berupa:
membandingkan hasil dengan tujuan atau kriteria;
mengevaluasi hasil;
menjelaskan alasan;
mengidentifikasi keberhasilan;
mengidentifikasi kesulitan;
menganalisis strategi belajar;
menggunakan umpan balik;
memperbaiki hasil;
menarik pembelajaran;
menentukan tindak lanjut;
mempertimbangkan penerapan pada konteks lain.
Refleksi jangan hanya berupa pertanyaan tentang perasaan.

G. ATURAN GAMBARAN AKTIVITAS
Gunakan alur:
TP → Aktivitas Murid → Pengalaman Belajar → Bukti Belajar → Pencapaian TP
Setiap aktivitas harus:
berangkat langsung dari TP;
menjelaskan apa yang dilakukan murid;
menunjukkan materi/informasi/masalah yang diolah;
mendukung Dimensi–Subdimensi yang dipilih;
menunjukkan hubungan dengan pencapaian TP;
mengikuti alur Memahami → Mengaplikasi → Merefleksi;
menghasilkan bukti belajar yang relevan;
realistis dalam jumlah pertemuan dan JP yang tersedia.
Jangan menulis hanya:
Diskusi, observasi, presentasi, dan refleksi.
Jangan menulis hanya:
Guru menjelaskan materi, kemudian siswa berdiskusi dan melakukan presentasi.
Gambaran aktivitas harus menunjukkan proses berpikir dan tindakan murid.

H. PRINSIP BERKESADARAN, BERMAKNA, DAN MENGGEMBIRAKAN
Berkesadaran
Aktivitas memungkinkan murid:
mengetahui tujuan belajar;
mengetahui kemampuan yang perlu dicapai;
menghubungkan pengetahuan awal;
mengembangkan rasa ingin tahu;
mengambil peran aktif;
memonitor perkembangan belajarnya.
Bermakna
Aktivitas:
menggunakan konteks yang relevan;
berhubungan dengan kehidupan atau pengalaman murid;
memungkinkan penerapan pengetahuan;
menggunakan masalah atau fenomena nyata jika relevan;
menghasilkan keputusan, solusi, produk, atau performa bermakna jika sesuai TP.
Menggembirakan
Aktivitas:
memberikan suasana aman dan positif;
menantang secara proporsional;
memberikan ruang eksplorasi;
memungkinkan interaksi produktif;
membuka ruang kreativitas atau pilihan jika relevan.
Menggembirakan tidak berarti setiap pembelajaran harus berupa permainan.

I. PRAKTIK PEDAGOGIS
Tentukan praktik pedagogis utama yang paling sesuai untuk setiap modul, misalnya:
pembelajaran kontekstual;
inkuiri;
problem solving;
pembelajaran berbasis projek;
pembelajaran kolaboratif;
pembelajaran berbasis teks;
pembelajaran reflektif;
diferensiasi;
atau pendekatan lain yang relevan.
Pilih yang benar-benar tercermin dalam aktivitas.
Jangan memasukkan terlalu banyak praktik pedagogis hanya untuk memenuhi daftar.

J. KEMITRAAN PEMBELAJARAN
Tentukan kemitraan pembelajaran hanya jika relevan.
Kemitraan dapat melibatkan:
antarmurid;
guru lain;
orang tua;
warga sekolah;
masyarakat;
komunitas;
narasumber.
Jika tidak diperlukan, tuliskan:
Tidak memerlukan kemitraan khusus.
Jangan mengarang mitra yang tidak diketahui tersedia.

K. LINGKUNGAN PEMBELAJARAN
Tentukan lingkungan pembelajaran yang realistis, misalnya:
ruang kelas;
perpustakaan;
lingkungan sekolah;
lingkungan sekitar;
laboratorium;
ruang praktik;
lingkungan virtual.
Jangan mengarang fasilitas yang tidak diketahui tersedia.

L. PEMANFAATAN DIGITAL
Gunakan teknologi digital hanya jika membantu pencapaian TP atau memperkaya pengalaman belajar.
Teknologi dapat dimanfaatkan untuk:
mengakses sumber;
mengamati media;
mengumpulkan data;
mengolah informasi;
membuat produk;
berkolaborasi;
mempresentasikan hasil;
mendokumentasikan proses.
Jangan mengarang perangkat, aplikasi, atau akses internet yang tidak diketahui tersedia.
Jika tidak diperlukan, tuliskan:
Tidak wajib menggunakan teknologi digital.

M. KESESUAIAN DENGAN WAKTU
Jumlah pertemuan dan JP harus mengikuti hasil Prompt 2.
Jangan mengubahnya.
Aktivitas yang dibuat harus realistis dilakukan dalam waktu yang tersedia.
Memahami, Mengaplikasi, dan Merefleksi tidak harus memperoleh jumlah waktu yang sama.
Ketiganya juga tidak harus masing-masing menjadi satu pertemuan.

OUTPUT — REKAP GAMBARAN AKTIVITAS PEMBELAJARAN MENDALAM PER MODUL
Buat hasil untuk setiap modul dengan struktur:
MODUL [Kode Modul] — [Judul Modul]
Bab:
[...]
Lingkup Materi:
[...]
Alokasi Waktu:
[...] pertemuan / [...] JP
Tujuan Pembelajaran
[Kode TP] — [rumusan TP lengkap]
[Kode TP] — [rumusan TP lengkap]
Dimensi Profil Lulusan yang Dikuatkan
Dimensi: [...]
*Tidak usah menuliskan Subdimensi.
Praktik Pedagogis
[...]
Kemitraan Pembelajaran
[...]
Lingkungan Pembelajaran
[...]
Pemanfaatan Digital
[...]
Gambaran Aktivitas Pembelajaran
1. Memahami
Tuliskan gambaran aktivitas murid untuk membangun pemahaman yang diperlukan untuk mencapai TP.
Sebutkan secara alami bukti belajar yang dihasilkan.
2. Mengaplikasi
Tuliskan bagaimana murid menggunakan pemahaman untuk melakukan kompetensi utama dalam TP.
Sebutkan bukti belajar utama yang menunjukkan kompetensi tersebut.
3. Merefleksi
Tuliskan bagaimana murid mengevaluasi proses/hasil, menggunakan umpan balik, menemukan kekuatan dan keterbatasan, serta menentukan perbaikan atau penerapan selanjutnya.

N. PEMERIKSAAN INTERNAL
Sebelum menghasilkan output, periksa:
Modul
seluruh modul dari Prompt 2 telah masuk;
kode modul tidak berubah;
judul modul tidak berubah;
jumlah pertemuan dan JP tidak berubah.
TP
semua TP tetap pada modul yang telah ditentukan;
kode TP tidak berubah;
rumusan TP tidak berubah;
tidak ada TP baru;
tidak ada TP yang hilang.
Dimensi Profil Lulusan
hanya menggunakan Dimensi–Subdimensi yang dipilih guru;
Subdimensi sesuai dokumen sumber;
aktivitas benar-benar memberikan kesempatan pengembangan kompetensi tersebut;
tidak semua Dimensi–Subdimensi dipaksakan pada semua modul.
Pembelajaran Mendalam
Memahami memberikan bekal untuk Mengaplikasi;
Mengaplikasi benar-benar menunjukkan kompetensi TP;
Merefleksi berasal dari pengalaman yang benar-benar dilakukan;
prinsip Berkesadaran, Bermakna, dan Menggembirakan tampak dalam aktivitas.
Realisme
aktivitas sesuai jumlah pertemuan dan JP;
kemitraan realistis;
lingkungan realistis;
pemanfaatan digital realistis.
Jika terdapat ketidaksesuaian, perbaiki desain aktivitas tanpa mengubah struktur modul dan TP hasil Prompt 2.
`,rules:JSON.parse('[{"start":1764,"end":12326,"old":"1. Dimensi Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nHubungan dengan Tuhan Yang Maha Esa\\nMemahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya belum berdasarkan kesadaran diri atau masih berdasarkan perintah orang lain.\\nMemahami dan mengamalkan ajaran Tuhan Yang Maha Esa lebih mendalam berdasarkan kesadaran diri secara konsisten dan mampu mengajak orang lain dalam kehidupan sehari-hari.\\nMemahami dan mengamalkan ajaran Tuhan Yang Maha Esa yang dianutnya berdasarkan kesadaran dirinya secara konsisten.\\n2\\nHubungan dengan sesama Manusia\\nMenunjukkan perilaku akhlak mulia dalam kehidupan sosial dengan saling menghormati dan berintegritas namun belum konsisten.\\nMenunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial.\\nMenunjukkan perilaku akhlak mulia dengan mengembangkan sikap kasih sayang, kejujuran, keadilan, dan tanggung jawab secara konsisten dalam kehidupan pribadi dan sosial serta mampu mengajak orang lain.\\n3\\nHubungan dengan Lingkungan Alam\\nMemiliki kesadaran untuk menjaga keseimbangan dan kelestarian lingkungan alam sesuai dengan pengetahuan yang dimilikinya.\\nMenjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya.\\nMenjaga keseimbangan dan kelestarian lingkungan alam dengan menggunakan pengetahuan yang dimilikinya bersama-sama dengan orang lain.\\n2. Dimensi Kewargaan\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nKewargaan Lokal\\nMenunjukkan kesadaran atas aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya.\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakat sekitarnya dengan bimbingan.\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di masyarakatnya dan mampu mengajak orang lain untuk melakukan hal yang sama secara mandiri.\\n2\\nKewargaan Nasional\\nMemiliki ketertarikan dalam menghargai keragaman masyarakat, budaya nasional untuk menguatkan wawasan kebangsaan.\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan menghargai keberagaman budayanya, serta berinisiatif menjaga Negara Kesatuan Republik Indonesia (NKRI).\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup nasional dan berinisiatif untuk menjaga NKRI, serta mampu mengajak orang lain melakukan hal yang sama.\\n3\\nKewargaan Global\\nMemiliki ketertarikan dalam menghargai keragaman masyarakat, budaya global untuk menguatkan wawasan kebangsaan.\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional.\\nBerperilaku sesuai aturan, norma, dan nilai sosial budaya yang berlaku di lingkup global dan menghargai keberagamannya dengan tetap menjaga identitas diri dan budaya nasional, serta mampu mengajak orang lain melakukan yang sama.\\n3. Dimensi Penalaran Kritis\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nPenyampaian Argumentasi\\nMenyampaikan argumen logis secara runtut disertai alasan sederhana.\\nMenyampaikan argumen logis secara runtut disertai alasan yang kuat.\\nMenyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain.\\n2\\nPengambilan Keputusan\\nMembuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan dengan bimbingan.\\nMembuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri.\\nMembuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan.\\n3\\nPenyelesaian Masalah\\nMenyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.\\nMenyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.\\nMenyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri.\\n4. Dimensi Kreativitas\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nGagasan baru\\nMenyampaikan gagasan inovatif dari contoh atau referensi yang diberikan.\\nMengembangkan gagasan inovatif untuk menyelesaikan masalah sekitar.\\nMengembangkan beberapa gagasan inovatif untuk menyelesaikan masalah di lingkungan yang lebih luas.\\n2\\nFleksibilitas berpikir\\nMenemukan solusi masalah di lingkungan sekitar.\\nMenemukan beberapa alternatif solusi masalah di lingkungan sekitar dan memberikan umpan balik.\\nMenemukan beberapa alternatif solusi masalah di lingkungan sekitar dan mengevaluasi alternatif solusinya.\\n3\\nKarya\\nMenciptakan tindakan dan/atau karya kreatif serta dapat mengidentifikasi dampaknya bagi dirinya.\\nMenciptakan tindakan dan/atau karya kreatif yang kompleks serta dapat menganalisis dampaknya bagi dirinya dan orang lain.\\nMenciptakan tindakan dan/atau karya kreatif yang kompleks serta dapat mengevaluasi dampaknya bagi orang lain dan lingkungan sekitarnya.\\n5. Dimensi Kolaborasi\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nPeduli\\nMenunjukkan kepedulian untuk berkolaborasi namun belum konsisten.\\nMenunjukkan kepedulian secara konsisten untuk berkolaborasi.\\nMengajak teman untuk peduli berkolaborasi.\\n2\\nBerbagi\\nSaling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan namun belum konsisten.\\nSaling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan.\\nMengambil inisiatif untuk saling berkontribusi dalam pemanfaatan bersama sumber daya, pengetahuan, dan gagasan untuk tujuan saling memberdayakan.\\n3\\nKerja sama\\nBekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama namun belum konsisten.\\nBekerjasama dengan berbagai pihak dari dalam satuan pendidikan untuk peningkatan kualitas bersama secara konsisten.\\nMengambil inisiatif untuk bekerjasama dengan berbagai pihak dari dalam dan luar satuan pendidikan untuk peningkatan kualitas bersama.\\n6. Dimensi Kemandirian\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nBertanggung Jawab\\nMenetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan penuh.\\nMenetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan.\\nMenetapkan target pembelajaran dan melakukan upaya untuk mencapainya dengan bimbingan minimal.\\n2\\nKepemimpinan\\nMemotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan penuh.\\nMemotivasi dan meregulasi diri sendiri dalam mencapai target yang ditetapkan dengan bimbingan.\\nMemotivasi dan mengorganisasi teman sebaya untuk mencapai target yang ditetapkan bersama secara tuntas dengan bimbingan minimal.\\n3\\nPengembangan Diri\\nMengidentifikasi potensi dan bakat diri, menyusun rencana pengembangan diri untuk mewujudkan cita-cita dengan bimbingan penuh.\\nMengidentifikasi potensi dan bakat diri, menyusun dan mengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita dengan bimbingan.\\nMengaktualisasi rencana pengembangan diri untuk mewujudkan cita-cita serta mampu beradaptasi dengan perubahan dan menghadapi tantangan dengan bimbingan minimal.\\n7. Dimensi Kesehatan\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nHidup bersih dan sehat\\nMenjaga kebersihan diri dan keluarga untuk meraih kesehatan namun belum konsisten.\\nMenjaga kebersihan diri dan keluarga untuk meraih kesehatan secara konsisten.\\nMengajak orang lain untuk bersama-sama menjaga kebersihan diri dan keluarga guna meraih kesehatan yang prima.\\n2\\nKebugaran, kesehatan fisik, dan kesehatan mental\\nMeningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan penuh.\\nMeningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan.\\nMengajak orang lain agar meningkatkan kebugaran, kesehatan fisik, dan kesehatan mental dengan berolahraga secara teratur, menerapkan pola makan sehat dan bergizi seimbang, mencegah dan mengatasi stress, serta mengendalikan emosi dengan bimbingan minimal.\\n3\\nKesehatan lingkungan\\nBerperan aktif meningkatkan kesehatan lingkungan rumah dan sekolah.\\nBerperan aktif meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas.\\nMengajak orang lain untuk meningkatkan kesehatan lingkungan rumah, sekolah, dan masyarakat luas.\\n8. Dimensi Komunikasi\\nNo\\nSubdimensi\\nBerkembang\\nCakap\\nMahir\\n1\\nMenyimak\\nMendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nMendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.\\nMendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.\\n2\\nBerbicara\\nMenyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.\\nMenyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.\\nMenyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif.\\n3\\nMembaca\\nMembaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.\\nMembaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.\\nMembaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.\\n4\\nMenulis\\nMenyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih namun belum tepat dan lancar.\\nMenyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.\\nMenyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif.\\n\\n\\nGunakan hanya Dimensi dan Subdimensi yang dipilih guru.\\nJangan menambahkan Dimensi atau Subdimensi lain hanya agar terlihat lengkap.","value":"{{dimensions}}"}]'),order:6,version:2,category:"perencanaan"},"./perencanaan/analisis.json":{id:"analisis",title:"Analisis hasil sumatif",group:"Sumatif",source:"10 Analisis Sumatif.docx",description:"Petakan bukti ketercapaian TP dan tindak lanjut berdasarkan hasil nyata.",needs:["Kisi-kisi, soal, kunci dan pedoman penskoran.","Jawaban atau skor murid per nomor, bukan hanya nilai akhir.","KKTP/kriteria ketercapaian jika tersedia; hasil analisis spreadsheet jika ada."],fields:[],note:"Lampirkan data hasil asesmen hanya di layanan AI yang Anda gunakan. Jika kriteria ketercapaian belum tersedia, naskah meminta AI tidak menentukan batas sendiri.",original:`Anda adalah Assessment Data Analyst dan Guru Praktisi yang memahami asesmen Kurikulum Merdeka, ketercapaian Tujuan Pembelajaran, analisis hasil belajar, remedial, penguatan, pengayaan, dan tindak lanjut pembelajaran.
Saya akan mengunggah:
Blueprint/kisi-kisi asesmen sumatif
Paket soal beserta kunci/pedoman penskoran
Hasil asesmen murid, sebaiknya berisi jawaban atau skor setiap murid untuk setiap nomor
Jika tersedia, hasil analisis ulangan dari aplikasi/Spreadsheet
Jika tersedia, KKTP/kriteria ketercapaian
Gunakan seluruh data tersebut untuk menjawab pertanyaan utama:
Kompetensi apa yang sudah dikuasai kelas, kompetensi apa yang masih perlu diperkuat, murid mana yang memerlukan dukungan, dan apa yang perlu dilakukan guru setelah asesmen?
Jangan hanya menganalisis nilai akhir.
Gunakan hubungan:
Nomor Soal → TP Rinci → TP Umum eRapor → Hasil Murid → Tindak Lanjut

A. PRIORITAS DATA
Gunakan urutan:
Hasil jawaban/skor per nomor
↓
Blueprint/kisi-kisi
↓
Soal dan kunci
↓
TP rinci
↓
TP Umum eRapor
↓
KKTP jika tersedia
Jangan:
membuat TP baru;
mengubah TP;
mengubah pemetaan soal ke TP;
mengubah kunci secara diam-diam;
membuat nilai atau jawaban murid;
membuat batas ketercapaian baru tanpa dasar.
Jika terdapat konflik data, beri tanda:
PERLU VERIFIKASI GURU

B. TP UMUM eRAPOR MENJADI UNIT UTAMA ANALISIS INDIVIDU
Gunakan TP Umum eRapor yang telah dibuat pada tahap blueprint.
TP Umum merupakan pengelompokan beberapa TP rinci.
Contoh:
ER1.1 — TP Umum Bab 1
mencakup:
TP1.1
TP1.2
TP1.3
Gunakan hasil soal dari TP rinci tersebut untuk memperoleh gambaran ketercapaian TP Umum eRapor.
Jangan membuat TP Umum baru jika sudah tersedia dalam blueprint.

C. STATUS KETERCAPAIAN
Untuk analisis individu gunakan hanya:
OPTIMAL
Bukti asesmen menunjukkan bahwa kompetensi dalam TP Umum telah tercapai sesuai kriteria yang digunakan.
TIDAK OPTIMAL
Bukti asesmen menunjukkan bahwa masih terdapat kompetensi penting dalam TP Umum yang memerlukan penguatan.
Jika bukti tidak mencukupi, gunakan:
BELUM CUKUP BUKTI
Jangan menggunakan istilah:
bodoh;
lemah;
gagal;
tidak mampu.

D. DASAR MENENTUKAN OPTIMAL / TIDAK OPTIMAL
Gunakan urutan berikut:
1. Jika KKTP/kriteria ketercapaian sudah tersedia
Gunakan KKTP tersebut.
2. Jika guru memberikan batas ketercapaian
Gunakan batas yang diberikan guru.
Contoh:
Kriteria Optimal TP Umum: minimal 75% bukti/soal pada TP tersebut tercapai.
3. Jika tidak ada KKTP atau batas ketercapaian
Jangan membuat batas sendiri.
Tuliskan:
KRITERIA OPTIMAL/TIDAK OPTIMAL BELUM DITETAPKAN — PERLU KONFIRMASI GURU
Analisis tetap boleh menampilkan persentase atau bukti per TP, tetapi jangan memaksakan status final.

E. JANGAN HANYA MENGGUNAKAN NILAI TOTAL
Nilai total asesmen tidak cukup untuk menentukan kebutuhan murid.
Dua murid dengan nilai sama dapat memiliki masalah yang berbeda.
Contoh:
Murid A
TP Umum 1 = Optimal
TP Umum 2 = Tidak Optimal
TP Umum 3 = Optimal
Murid B
TP Umum 1 = Tidak Optimal
TP Umum 2 = Optimal
TP Umum 3 = Optimal
Maka tindak lanjut keduanya tidak boleh disamakan hanya karena nilai total mereka sama.

OUTPUT 1 — RINGKASAN KETERCAPAIAN KELAS
Buat satu tabel ringkas:
TP Umum eRapor
TP Rinci yang Tercakup
No. Soal
Capaian Kelas
Jumlah Murid Optimal
Jumlah Murid Tidak Optimal
Prioritas
Gunakan prioritas:
Penguatan Kelas
Penguatan Terbatas
Relatif Optimal
Tujuan tabel ini adalah agar guru langsung mengetahui:
TP mana yang perlu diajarkan/diperkuat kembali kepada banyak murid.
Jangan membuat uraian statistik panjang.

OUTPUT 2 — PETA KETERCAPAIAN SETIAP MURID BERDASARKAN TP UMUM eRAPOR
Ini adalah output utama untuk guru.
Buat tabel:
No.
Nama Murid
TP Umum 1
TP Umum 2
TP Umum 3
TP Umum berikutnya
Prioritas Dukungan
Isi kolom TP hanya dengan:
Optimal
Tidak Optimal
Belum Cukup Bukti
Contoh:
Nama Murid
ER1.1
ER2.1
ER3.1
Prioritas Dukungan
Andi
Optimal
Tidak Optimal
Optimal
ER2.1
Budi
Tidak Optimal
Tidak Optimal
Optimal
ER1.1 dan ER2.1
Citra
Optimal
Optimal
Optimal
Pengayaan
Jika jumlah TP Umum banyak, tetap gunakan satu kolom untuk setiap TP Umum.
Di bagian atas atau bawah tabel tuliskan singkat:
ER1.1 = [rumusan TP Umum]
ER2.1 = [rumusan TP Umum]
dan seterusnya.
Dengan demikian tabel tetap ringkas tetapi guru mengetahui arti setiap kode.

F. ANALISIS DI BALIK STATUS INDIVIDU
Walaupun tabel menggunakan TP Umum, analisis internal tetap harus melihat:
TP Umum → TP Rinci → Nomor Soal → Jawaban Murid
Jangan menentukan satu TP Umum “Tidak Optimal” hanya karena murid salah satu soal jika masih tersedia banyak bukti lain yang menunjukkan ketercapaian.
Sebaliknya, jangan menyatakan “Optimal” hanya karena satu soal benar jika TP Umum mencakup beberapa kompetensi penting.
Gunakan keseluruhan bukti yang tersedia.

OUTPUT 3 — RENCANA TINDAK LANJUT GURU
Jangan membuat tindak lanjut per murid satu per satu jika masalahnya sama.
Kelompokkan murid berdasarkan kebutuhan yang sama agar realistis dilakukan guru.
Buat tabel:
Fokus TP Umum
Murid yang Memerlukan Dukungan
Masalah yang Terlihat dari Bukti
Tindakan Guru
Aktivitas Murid
Cara Memeriksa Perbaikan
Contoh pola:
Jika masalah terjadi pada banyak murid
Gunakan penguatan kelas.
Contoh:
Guru membahas kembali konsep menggunakan contoh yang berbeda, kemudian murid mengerjakan satu masalah paralel dan menjelaskan alasannya.
Jika hanya beberapa murid
Gunakan dukungan kelompok kecil.
Contoh:
Guru memberikan pertanyaan penuntun dan contoh sederhana kepada murid yang belum mampu menghubungkan informasi.
Jika hanya satu-dua murid
Gunakan dukungan individual ringan yang dapat dilakukan dalam pembelajaran berikutnya.
Jika sudah optimal
Berikan pengayaan, bukan sekadar soal lebih banyak.
Pengayaan dapat berupa:
konteks baru;
soal lebih kompleks;
membandingkan alternatif;
menjelaskan strategi;
argumentasi;
penerapan pada situasi berbeda.

G. TINDAK LANJUT HARUS MENYASAR KESULITAN
Jangan menulis:
Remedial materi Bab 2.
atau:
Mengerjakan soal tambahan.
Jelaskan bagian kemampuan yang diperbaiki.
Contoh:
Kurang tepat:
Murid mengulang materi teks.
Lebih tepat:
Murid mampu menemukan informasi tetapi belum mampu menghubungkan dua informasi untuk menarik kesimpulan. Guru memberikan teks lebih singkat dan tabel “Informasi 1 – Informasi 2 – Hubungannya”, kemudian murid memperbaiki kesimpulan.

H. CARA MEMERIKSA PERBAIKAN
Tindak lanjut harus menghasilkan bukti baru.
Tidak perlu selalu membuat ulangan ulang.
Gunakan cara sederhana seperti:
satu atau dua soal paralel;
revisi jawaban;
penjelasan lisan;
tugas singkat;
perbaikan tulisan;
praktik ulang;
analisis stimulus baru.
Pada kolom Cara Memeriksa Perbaikan, tuliskan bukti yang harus diperiksa guru.

I. ANALISIS SOAL HANYA JIKA DIPERLUKAN
Jangan membuat analisis butir panjang untuk semua soal.
Hanya tampilkan bagian:
CATATAN SOAL YANG PERLU DITINJAU
jika terdapat indikasi seperti:
hampir seluruh murid salah;
jawaban tersebar tidak wajar;
lebih dari satu opsi mungkin benar;
kunci berpotensi bermasalah;
stimulus membingungkan;
soal tampaknya tidak sesuai indikator.
Gunakan tabel singkat:
No. Soal
Temuan
Rekomendasi
Jika tidak ada indikasi masalah, cukup tuliskan:
Tidak ditemukan butir yang memerlukan peninjauan khusus berdasarkan data yang tersedia.

J. RINGKASAN AKHIR UNTUK GURU
Setelah tiga output, tuliskan maksimal 5 poin:
TP Umum yang paling optimal.
TP Umum yang paling membutuhkan penguatan.
Jumlah murid yang membutuhkan dukungan utama.
Bentuk tindak lanjut yang paling disarankan.
Hal yang perlu diperhatikan pada pembelajaran berikutnya.
Jangan membuat laporan naratif panjang.

K. QUALITY CHECK
Sebelum menghasilkan hasil akhir, periksa:
apakah status murid berasal dari jawaban/skor nyata;
apakah setiap TP Umum ditelusuri melalui TP rinci;
apakah TP rinci ditelusuri melalui nomor soal;
apakah tidak menggunakan nilai total sebagai satu-satunya dasar;
apakah status Optimal/Tidak Optimal mengikuti KKTP/kriteria guru;
apakah tindak lanjut sesuai kesulitan;
apakah guru dapat langsung melihat siapa membutuhkan dukungan apa;
apakah output tidak terlalu banyak;
apakah analisis soal hanya ditampilkan jika memang diperlukan.

L. HASIL AKHIR
Buat 2 file sederhana jika memungkinkan.
FILE 1 — LAPORAN TINDAK LANJ .docx
Hanya berisi:
1. Ringkasan Ketercapaian Kelas
Output 1.
2. Rencana Tindak Lanjut Guru
Output 3.
3. Catatan Soal yang Perlu Ditinjau
Hanya jika diperlukan.
4. Ringkasan 5 Poin
Ringkas dan praktis.
Nama file:
TINDAK_LANJUT_HASIL_SUMATIF_[Mapel]_[Kelas].docx

FILE 2 — PETA KETERCAPAIAN MURID .xlsx
Sheet utama cukup berisi:
No.
Nama Murid
TP Umum 1
TP Umum 2
TP Umum 3
dst.
Prioritas Dukungan
Isi:
Optimal / Tidak Optimal / Belum Cukup Bukti
Nama file:
PETA_KETERCAPAIAN_TP_ERAPOR_[Mapel]_[Kelas].xlsx
Jangan membuat banyak sheet kecuali diperlukan.
`,rules:[],order:13,version:1,category:"perencanaan"},"./perencanaan/asesmen-rpp.json":{id:"asesmen-rpp",title:"Perangkat asesmen RPP",group:"Pembelajaran",source:"6 Asesmen RPP.docx",description:"Kembangkan instrumen, rubrik, dan pedoman asesmen yang siap digunakan.",needs:["Modul Ajar/RPP final beserta TP, KKTP, dan asesmennya."],fields:[],note:"",original:`Anda adalah Assessment Designer dan Guru Praktisi yang memahami asesmen pembelajaran, Pembelajaran Mendalam, asesmen awal, asesmen formatif, asesmen sumatif, KKTP, diferensiasi, serta karakteristik mata pelajaran dan jenjang yang sedang dikembangkan.
Tugas Anda adalah mengembangkan PAKET ASESMEN LENGKAP, OPERASIONAL, DAN SIAP LANGSUNG DIGUNAKAN GURU berdasarkan Modul Ajar/RPP yang telah dihasilkan sebelumnya.
Dokumen ini bukan gambaran asesmen.
Dokumen ini harus berisi instrumen nyata yang dapat langsung:
dicetak;
dibagikan kepada murid;
digunakan guru untuk mengamati;
digunakan untuk memberikan skor jika diperlukan;
digunakan untuk memberikan umpan balik;
digunakan untuk menentukan tindak lanjut.
Gunakan hubungan:
TP → Aktivitas → Bukti Belajar → Asesmen → Instrumen Nyata → Hasil → Umpan Balik → Tindak Lanjut

A. SUMBER DATA
Gunakan sumber berikut dengan urutan prioritas:
Modul Ajar/RPP hasil Prompt 5.
Data Kendali Modul.
Tujuan Pembelajaran dan KKTP.
Gambaran Asesmen hasil Prompt 4.
Aktivitas pembelajaran setiap pertemuan.
Bukti belajar yang direncanakan.
Dimensi dan Subdimensi Profil Lulusan jika relevan.
Buku/BSE/Panduan Guru yang telah digunakan sebelumnya.
Dokumen pendukung lain yang tersedia.
Jangan meminta guru mengisi ulang data yang sudah tersedia.
Jika terdapat perbedaan antarsumber, gunakan Modul Ajar/RPP sebagai acuan utama.

B. PRINSIP WAJIB: JANGAN HANYA MENYEBUT JENIS ASESMEN
Jika Anda memilih suatu bentuk asesmen, WAJIB membuat instrumennya secara lengkap.
Contoh:
Jika memilih tes tertulis
Jangan hanya menulis:
Teknik: Tes tertulis.
WAJIB sertakan:
petunjuk;
stimulus jika diperlukan;
soal;
kunci jawaban;
pedoman penskoran;
TP yang diukur.
Jika memilih tes lisan
WAJIB sertakan:
daftar pertanyaan;
pertanyaan lanjutan jika diperlukan;
jawaban/kriteria respons yang diharapkan;
pedoman pencatatan;
pedoman penskoran atau kriteria ketercapaian.
Jika memilih observasi
WAJIB sertakan:
siapa yang mengobservasi;
apa yang diamati;
kapan diamati;
lembar observasi siap pakai;
kriteria;
ruang catatan bukti.
Jika memilih penilaian diri
WAJIB sertakan:
instruksi;
pernyataan/pertanyaan refleksi;
pilihan respons;
ruang bukti/alasan;
cara guru menggunakan hasilnya.
Jika memilih penilaian antarteman
WAJIB sertakan:
objek yang dinilai;
kriteria;
lembar penilaian;
aturan pemberian umpan balik;
cara guru memvalidasi hasilnya.
Jika memilih penugasan
WAJIB sertakan:
instruksi tugas lengkap;
hasil yang harus dikumpulkan;
kriteria keberhasilan;
format jawaban jika diperlukan;
pedoman penilaian.
Jika memilih praktik/kinerja
WAJIB sertakan:
instruksi pelaksanaan;
apa yang harus dilakukan murid;
aspek yang diamati;
lembar penilaian;
rubrik/pedoman penskoran.
Jika memilih projek
WAJIB sertakan:
konteks/tugas projek;
tujuan;
instruksi;
tahapan yang relevan dengan RPP;
hasil yang harus dibuat;
ketentuan pengumpulan;
bukti individu jika projek kelompok;
rubrik penilaian.
Jika memilih produk
WAJIB sertakan:
instruksi pembuatan;
spesifikasi yang memang berasal dari TP/RPP;
kriteria produk;
rubrik.
Jika memilih presentasi
WAJIB sertakan:
instruksi presentasi;
isi yang harus disampaikan;
ketentuan jika tersedia;
pertanyaan yang dapat diberikan guru;
rubrik presentasi.
Tidak boleh ada instrumen yang hanya disebutkan namanya tetapi tidak dibuat.

C. JANGAN MEMAKSAKAN SATU BENTUK ASESMEN
Pilih bentuk asesmen berdasarkan tuntutan TP.
Gunakan prinsip:
mengidentifikasi → tugas identifikasi, klasifikasi, respons singkat;
menjelaskan → uraian, penjelasan lisan, representasi;
membandingkan → tugas perbandingan disertai alasan;
menganalisis → analisis teks, data, kasus, fenomena, atau masalah;
menerapkan → penyelesaian masalah, tugas kontekstual, praktik;
menulis → tulisan;
berbicara/mempresentasikan → performa lisan;
mempraktikkan → unjuk kerja;
merancang/membuat → rancangan/produk;
mengevaluasi → keputusan atau penilaian berbasis kriteria dan alasan.
Jangan otomatis membuat:
projek;
presentasi;
tes tertulis;
kerja kelompok;
produk;
jika tidak sesuai TP.

D. ASESMEN AWAL — HARUS SIAP DIGUNAKAN
Kembangkan asesmen awal dari RPP menjadi instrumen nyata.
Asesmen awal digunakan untuk mengetahui kesiapan belajar yang relevan dengan modul.
WAJIB menghasilkan:
1. Identitas Asesmen Awal
Tujuan: [...]
Waktu: [...]
Bentuk: [...]
Dilaksanakan oleh: Guru / Murid / kombinasi sesuai kebutuhan.
2. Instruksi untuk Murid
Tuliskan instruksi yang benar-benar dapat dibacakan atau dibagikan kepada murid.
3. Instrumen
Jika menggunakan pertanyaan/soal, tuliskan seluruh pertanyaannya.
Contoh format:
Soal 1
[...]
Soal 2
[...]
Soal 3
[...]
Jumlah soal ditentukan berdasarkan kebutuhan, tidak perlu banyak.
Jika asesmen awal berupa tugas, tuliskan tugas lengkapnya.
4. Kunci/Pedoman Respons
Tuliskan:
jawaban benar;
pokok jawaban;
atau respons yang menunjukkan kesiapan tertentu.
5. Pemetaan Hasil
Gunakan kategori:
Berkembang
Ciri bukti: [...]
Cakap
Ciri bukti: [...]
Mahir
Ciri bukti: [...]
6. Keputusan Guru
Buat tabel:
Hasil Asesmen Awal
Interpretasi
Tindakan Guru
Berkembang
...
...
Cakap
...
...
Mahir
...
...
Tindak lanjut harus realistis dan dapat digunakan dalam pembelajaran modul.

E. ASESMEN FORMATIF — WAJIB DIPETAKAN PER PERTEMUAN
Untuk SETIAP PERTEMUAN dalam RPP, tentukan titik asesmen formatif yang paling berguna.
Tidak harus berupa tes.
Asesmen dapat sangat sederhana, tetapi harus jelas:
siapa yang melakukan penilaian;
apa yang diamati/diperiksa;
bukti apa yang dihasilkan;
instrumen apa yang digunakan;
apa yang dilakukan setelah hasil diperoleh.
Gunakan format:
PERTEMUAN 1 — ASESMEN FORMATIF
TP yang dipantau: [...]
Aktivitas tempat asesmen terjadi: [...]
Tujuan asesmen: [...]
Bukti belajar yang diperiksa: [...]
Penilai: Guru / Penilaian Diri / Antarteman / kombinasi
Teknik: [...]
Instrumen: [...]
Lalu buat instrumennya secara langsung.

F. CONTOH BENTUK INSTRUMEN FORMATIF
Jika guru mengobservasi
Buat:
Lembar Observasi Guru
Nama Murid
Bukti/Aspek yang Diamati
Sudah Terlihat
Perlu Dukungan
Catatan Bukti/Umpan Balik
Aspek yang diamati harus berasal dari TP dan aktivitas.

Jika menggunakan pertanyaan formatif
Tuliskan pertanyaannya:
[...]
[...]
[...]
Kemudian sertakan:
Respons yang diharapkan:
[...]
Kesalahan yang mungkin menunjukkan perlunya dukungan:
[...]
Umpan balik guru:
[...]

Jika menggunakan exit ticket
Buat langsung:
Exit Ticket
Nama: __________
Hal penting yang saya pahami hari ini adalah ...
Jelaskan ...
Bagian yang masih perlu saya perbaiki adalah ...
Sesuaikan isi dengan TP. Jangan gunakan pertanyaan generik jika dapat dibuat lebih spesifik.

Jika menggunakan penilaian diri
Buat:
Penilaian Diri
Pernyataan
Sudah
Masih Perlu Latihan
Bukti/Alasan Saya
Pernyataan harus spesifik pada kemampuan yang sedang dikembangkan.

Jika menggunakan penilaian antarteman
Buat:
Umpan Balik Teman
Kriteria
Sudah Terlihat
Saran Perbaikan
Jangan meminta murid memberi nilai angka kepada temannya kecuali memang diperlukan.
Fokuskan pada bukti dan perbaikan.

G. SETIAP PERTEMUAN HARUS JELAS
Lanjutkan dengan format yang sama:
PERTEMUAN 2 — ASESMEN FORMATIF
[...]
PERTEMUAN 3 — ASESMEN FORMATIF
[...]
dan seterusnya sesuai RPP.
Satu pertemuan dapat memiliki:
satu asesmen formatif utama;
atau beberapa teknik ringan yang terintegrasi,
tetapi jangan membuat asesmen berlebihan.
Jika bukti dari satu pertemuan baru diselesaikan pada pertemuan berikutnya, jelaskan keterhubungannya.

H. FORMAT WAJIB UNTUK SETIAP FORMATIF
Untuk setiap pertemuan, guru harus dapat mengetahui:
Apa yang diperiksa?
Siapa yang menilai?
Kapan dilakukan?
Instrumennya mana?
Bukti apa yang dicatat?
Bagaimana membaca hasilnya?
Umpan balik apa yang diberikan?
Apa yang murid lakukan setelah menerima umpan balik?
Jangan berhenti pada kalimat:
Guru mengobservasi proses belajar.
Harus dijelaskan:
mengobservasi apa + menggunakan lembar apa + indikator apa + bagaimana menindaklanjutinya.

I. ASESMEN SUMATIF — WAJIB BERUPA PERANGKAT LENGKAP
Gunakan asesmen akhir yang sudah ditetapkan dalam RPP.
Pertama tampilkan:
TP yang Diukur: [...]
Bentuk Asesmen: [...]
Bukti yang Diharapkan: [...]
Dilaksanakan: Individu/Kelompok/Kombinasi
Waktu: [...]
Kemudian buat perangkat sesuai bentuk asesmennya.

J. JIKA SUMATIF BERUPA TES TERTULIS
WAJIB buat:
1. Kisi-kisi
No.
Kode TP
Kemampuan yang Diukur
Materi/Konteks
Bentuk Soal
Nomor Soal
2. Soal Lengkap
Tuliskan semua soal.
Jika menggunakan stimulus:
tuliskan stimulusnya;
lalu soal yang terkait.
Jangan menulis:
Guru memberikan 10 soal pilihan ganda.
Tetapi tuliskan 10 soal tersebut jika memang 10 diperlukan.
3. Kunci Jawaban
Tuliskan untuk semua soal.
4. Pedoman Penskoran
Jika pilihan ganda:
benar = ...
salah = ...
Jika uraian:
buat pedoman per soal berdasarkan unsur jawaban.

K. JIKA SUMATIF BERUPA TES LISAN
WAJIB buat:
Daftar Pertanyaan
[...]
[...]
[...]
Pertanyaan Pendalaman jika Diperlukan
[...]
[...]
Respons yang Diharapkan
Untuk tiap pertanyaan, tuliskan pokok respons yang menunjukkan ketercapaian.
Lembar Penilaian
Nama Murid
Ketepatan Isi
Alasan/Bukti
Kejelasan Penjelasan
Catatan
Gunakan kriteria hanya jika relevan dengan TP.

L. JIKA SUMATIF BERUPA PENUGASAN
WAJIB buat:
Instruksi Tugas untuk Murid
Tuliskan langsung seperti lembar yang akan diterima murid.
Isi minimal:
apa yang harus dilakukan;
sumber/informasi yang digunakan;
hasil yang harus dikumpulkan;
kriteria keberhasilan;
ketentuan pengerjaan.
Format Jawaban
Jika diperlukan, sediakan.
Pedoman Penilaian
Buat kunci, checklist, atau rubrik sesuai kebutuhan.

M. JIKA SUMATIF BERUPA KINERJA/PRAKTIK
WAJIB buat:
Instruksi Praktik
[...]
Bukti yang Harus Ditunjukkan
[...]
Lembar Observasi/Penilaian
Aspek Kinerja
Bukti yang Diharapkan
Skor/Capaian
Catatan
Kemudian buat rubrik jika kualitas kinerja perlu dibedakan.

N. JIKA SUMATIF BERUPA PRODUK/PROJEK
Hanya gunakan jika memang terdapat dalam RPP.
WAJIB buat:
Instruksi Tugas
Tuliskan:
konteks;
tujuan;
tugas yang dilakukan;
hasil akhir;
tahapan jika relevan;
ketentuan pengumpulan;
bukti individu jika dilakukan kelompok.
Kriteria Keberhasilan
[...]
Rubrik
Buat rubrik yang benar-benar menilai tuntutan TP.
Jangan menilai desain/keindahan jika TP tidak menuntutnya.

O. JIKA SUMATIF BERUPA MENULIS
Misalnya Bahasa Indonesia.
WAJIB buat:
konteks menulis;
tujuan tulisan;
bentuk/jenis teks;
petunjuk;
stimulus jika ada;
kriteria isi;
rubrik penilaian.
Rubrik dapat memuat aspek seperti:
kesesuaian isi dengan tujuan;
organisasi/struktur;
penggunaan bukti/informasi;
kebahasaan,
hanya jika relevan dengan TP.

P. RUBRIK HARUS IMPLEMENTATIF
Gunakan rubrik hanya jika diperlukan.
Format:
Aspek
4 — Mahir
3 — Cakap
2 — Berkembang
1 — Baru Berkembang
Deskripsi harus menunjukkan bukti yang benar-benar berbeda.
Jangan:
Mahir = sangat baik
Cakap = baik
Berkembang = cukup
Baru Berkembang = kurang
Tetapi misalnya:
Mahir: Menentukan gagasan dan pesan secara tepat serta menjelaskan hubungan keduanya menggunakan bukti relevan dari teks.
Cakap: Menentukan gagasan dan pesan secara tepat serta memberikan sebagian bukti dari teks.
dan seterusnya.

Q. KKTP
Gunakan KKTP dari RPP sebagai dasar membaca hasil.
Untuk setiap TP, tampilkan:
Kode TP: [...]
KKTP: [...]
Kemudian jelaskan:
Bukti TP Tercapai
[...]
Bukti TP Belum Tercapai
[...]
Bukti yang Masih Memerlukan Konfirmasi
[...]
Jangan membuat batas nilai baru jika belum ditentukan.

R. TINDAK LANJUT HARUS SPESIFIK
Setelah setiap asesmen penting, jangan hanya menulis:
dilakukan remedial/pengayaan.
Buat keputusan yang operasional.
Gunakan tabel:
Bukti yang Ditemukan
Arti Bukti
Tindakan Guru
Tindakan Murid
Bukti Setelah Perbaikan
Contoh:
Jika murid dapat menemukan informasi tetapi belum dapat menjelaskan hubungan:
Guru: memberikan dua informasi yang lebih sederhana dan pertanyaan penuntun “Apa hubungan informasi A dan B?”
Murid: memperbaiki analisis sebelumnya.
Bukti baru: revisi jawaban yang menunjukkan hubungan antarinformasi.

S. ASESMEN ULANG
Jika TP belum tercapai, buat cara memperoleh bukti baru.
Tidak harus menggunakan tes ulang penuh.
Gunakan:
revisi;
penjelasan ulang;
soal paralel;
praktik ulang;
tugas lebih terarah;
analisis ulang;
perbaikan tulisan;
demonstrasi ulang;
sesuai kemampuan yang belum tercapai.
Jelaskan instrumen asesmen ulang jika memang diperlukan.

T. REKAP GURU
Buat format sederhana:
No.
Nama Murid
[Kode TP]
Bukti Utama
Status Ketercapaian
Umpan Balik
Tindak Lanjut
Jika modul memiliki beberapa TP, tambahkan kolom sesuai kebutuhan.
Jangan membuat rekap terlalu rumit.

U. EFISIENSI
Walaupun output harus lengkap dan implementatif, jangan membuat instrumen yang tidak diperlukan.
Gunakan prinsip:
Setiap asesmen yang direncanakan → instrumennya harus lengkap.
Tetapi:
Jangan menambah asesmen baru hanya agar dokumen terlihat lengkap.
Satu instrumen dapat digunakan untuk beberapa TP jika relevan.
Satu rubrik dapat digunakan pada beberapa titik jika memang menilai bukti yang sama.

V. OUTPUT DOKUMEN
Susun menjadi:
BAGIAN 1 — PETA ASESMEN MODUL
Tahap
Pertemuan
TP
Penilai
Teknik/Bentuk
Bukti
Instrumen
Kolom Penilai harus jelas:
Guru;
Penilaian Diri;
Antarteman;
Guru + Murid.

BAGIAN 2 — ASESMEN AWAL
Berisi instrumen lengkap, bukan deskripsi.

BAGIAN 3 — ASESMEN FORMATIF PER PERTEMUAN
Pertemuan 1
apa yang dinilai;
siapa yang menilai;
instrumen lengkap;
cara membaca hasil;
feedback;
tindak lanjut.
Pertemuan 2
dan seterusnya.

BAGIAN 4 — ASESMEN SUMATIF
Berisi perangkat lengkap sesuai bentuk asesmen:
soal;
tugas;
instruksi;
lembar observasi;
kunci;
pedoman penskoran;
rubrik;
sesuai kebutuhan.

BAGIAN 5 — PENGOLAHAN HASIL DAN TINDAK LANJUT
Berisi:
hubungan hasil dengan KKTP;
tindak lanjut;
asesmen ulang/bukti baru;
format umpan balik;
format rekap guru.

W. QUALITY CHECK PALING PENTING
Sebelum menghasilkan file, periksa:
Asesmen Awal
Jika disebut menggunakan soal:
APAKAH SOAL SUDAH BENAR-BENAR DITULIS?
Asesmen Formatif
Untuk setiap pertemuan:
apa yang diamati?
siapa yang menilai?
mana instrumennya?
bagaimana mencatat hasil?
bagaimana feedback diberikan?
bagaimana murid memperbaiki?
Asesmen Sumatif
Jika tes tertulis:
mana soal + kunci + penskorannya?
Jika tes lisan:
mana pertanyaan + respons yang diharapkan + lembar penilaian?
Jika praktik:
mana instruksi + lembar observasi + rubrik?
Jika produk:
mana instruksi tugas + kriteria + rubrik?
Jika projek:
mana tugas projek + tahapan + bukti + rubrik?
Jika menulis:
mana instruksi menulis + stimulus + rubrik?
Jika ada bagian yang belum lengkap, jangan hasilkan dokumen final sebelum dilengkapi.

X. FORMAT HASIL AKHIR
Buat 1 file Microsoft Word .docx untuk satu modul.
Nama file:
ASESMEN_[Kode Modul]_[Nama Modul].docx
Dokumen harus benar-benar dapat digunakan guru tanpa perlu bertanya lagi:
“Soalnya mana?”
“Yang diamati apa?”
“Instrumennya mana?”
“Siapa yang menilai?”
“Cara menilainya bagaimana?”
“Rubriknya mana?”
“Kalau belum tercapai, harus melakukan apa?”
Jika guru masih harus membuat sendiri bagian-bagian tersebut, berarti hasil belum memenuhi prompt.
Jangan tampilkan analisis internal. Langsung hasilkan dokumen final.

`,rules:[],order:9,version:1,category:"perencanaan"},"./perencanaan/blueprint.json":{id:"blueprint",title:"Blueprint / kisi-kisi sumatif",group:"Sumatif",source:"8 Blueprint Sumatif.docx",description:"Susun kisi-kisi, distribusi soal, dan TP umum untuk eRapor.",needs:["Analisis CP–TP yang sudah dibatasi sesuai bab dan periode asesmen."],fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: Matematika"},{id:"jenjang",label:"Jenjang",type:"select",required:!0,shared:!0,options:["PAUD","SD/MI","SMP/MTs","SMA/MA","SMK/MAK","SLB","Pendidikan Kesetaraan","Lainnya"]},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F","Tidak berlaku"]},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0,placeholder:"Contoh: VII"},{id:"semester",label:"Semester",type:"select",required:!0,shared:!0,options:["1","2"]},{id:"jenis",label:"Jenis asesmen",type:"select",required:!0,options:["Sumatif Tengah Semester","Sumatif Akhir Semester","Sumatif Akhir Tahun","Sumatif Lingkup Materi","Lainnya"]},{id:"jenisLain",label:"Nama asesmen lainnya",type:"text",required:!1,when:"jenis:Lainnya"},{id:"jumlah",label:"Jumlah soal",type:"number",required:!0,min:1},{id:"pg",label:"Pilihan ganda",type:"number",required:!0,min:0},{id:"isian",label:"Isian singkat",type:"number",required:!0,min:0},{id:"uraian",label:"Uraian",type:"number",required:!0,min:0},{id:"durasi",label:"Waktu (menit)",type:"number",required:!0,min:1},{id:"konteks",label:"Konteks lokal",type:"textarea",required:!1,fallback:"tidak perlu"},{id:"cognitivePreset",label:"Komposisi kognitif",type:"preset",required:!0,default:"Custom",options:["Rendah","Sedang","Tinggi","Custom"],help:"Urutan persentase: LOTS · MOTS · HOTS. Pilih Custom untuk mengatur sendiri."},{id:"lots",label:"LOTS (%)",type:"number",required:!1,min:0,max:100,decimal:!0},{id:"mots",label:"MOTS (%)",type:"number",required:!1,min:0,max:100,decimal:!0},{id:"hots",label:"HOTS (%)",type:"number",required:!1,min:0,max:100,decimal:!0},{id:"batas",label:"Batas karakter eRapor",type:"number",required:!1,min:1,fallback:"tidak diberikan"}],note:"Dokumen asli memuat dua versi prompt dan sisa percakapan. Keduanya dipertahankan, dengan isian yang disamakan. Distribusi kognitif boleh dikosongkan seluruhnya agar AI menyusunnya sesuai TP. Batas minimal 3 TP umum per semester pada naskah awal dapat berbenturan dengan batas 1–2 TP per bab jika hanya ada satu bab; periksa hasilnya.",original:`Anda adalah ahli asesmen pendidikan dan perancang evaluasi pembelajaran Kurikulum Merdeka.
Saya akan mengunggah dokumen Analisis CP–TP yang sebelumnya telah disusun.
Dokumen tersebut sudah saya sesuaikan sehingga hanya memuat Bab dan TP pada semester/periode yang akan dibuat asesmen sumatifnya.
Gunakan dokumen tersebut sebagai SUMBER UTAMA.
Tugas Anda adalah:
menyusun blueprint/kisi-kisi asesmen sumatif berdasarkan TP rinci; 
memastikan distribusi soal proporsional; 
membuat rekap distribusi soal; 
setelah blueprint selesai, menyusun TP Umum untuk kebutuhan eRapor berdasarkan TP rinci pada setiap Bab. 
JANGAN membuat soal pada tahap ini.
Hasil akhir berupa blueprint/kisi-kisi, bukan perangkat soal.

A. INPUT ASESMEN
Gunakan data berikut.
Mata Pelajaran: BAHASA INDONESIA
Jenjang: SMP
Fase/Kelas: D/IX
Semester: I (SATU)
Jenis Asesmen: Sumatif Akhir Semester 
Jumlah Soal: 40
Komposisi Bentuk Soal: 35 pilihan ganda + 5 isian singkat
Waktu: 120 menit
Konteks Lokal jika Diperlukan: -
Distribusi Kognitif yang Diinginkan
LOTS: 50 %
MOTS: 30 %
HOTS: 20 %]
Jika guru tidak menentukan distribusi, buat distribusi yang proporsional sesuai TP dan karakteristik mata pelajaran.
Batas TP Umum eRapor
Target utama: 1 Bab = 1-2 TP Umum tapi 1 semesteri akan ada minimal 3 TP umum
Jika satu Bab memiliki dua kelompok kompetensi yang sangat berbeda dan tidak dapat dirangkum secara wajar dalam satu rumusan, diperbolehkan:
1 Bab = maksimal 2 TP Umum.
Batas karakter eRapor: [ISI jika diketahui]
Jika batas karakter tidak diberikan, buat rumusan sesingkat mungkin tetapi tetap bermakna dan mewakili kompetensi utama.

Iya, ini lebih rapi. Blueprint asesmen tidak perlu mengulang hasil Analisis CP–TP. Kalau pada tahap sebelumnya guru sudah tahu TP tertentu berasal dari CP/elemen mana, menampilkannya lagi hanya membuat tabel melebar dan tidak dipakai saat menyusun soal.
Jadi saya ubah logikanya menjadi:
Analisis CP–TP sudah selesai → pada tahap asesmen kita mulai dari TP rinci.
Alurnya cukup:
TP Rinci → Indikator Soal → Nomor Soal → Soal
Sedangkan TP Umum eRapor dikerjakan paling akhir, karena fungsinya untuk pelaporan, bukan untuk merancang soal.
Berikut versi revisinya.

PROMPT — BLUEPRINT/KISI-KISI ASESMEN SUMATIF + TP UMUM eRAPOR
Anda adalah ahli asesmen pendidikan dan perancang evaluasi pembelajaran Kurikulum Merdeka.
Saya akan mengunggah dokumen Analisis CP–TP yang sebelumnya telah disusun.
Dokumen tersebut sudah saya sesuaikan sehingga hanya memuat Bab dan TP pada semester/periode yang akan dibuat asesmen sumatifnya.
Gunakan dokumen tersebut sebagai SUMBER UTAMA.
Tugas Anda adalah:
menyusun blueprint/kisi-kisi asesmen sumatif berdasarkan TP rinci;
memastikan distribusi soal proporsional;
membuat rekap distribusi soal;
setelah blueprint selesai, menyusun TP Umum untuk kebutuhan eRapor berdasarkan TP rinci pada setiap Bab.
JANGAN membuat soal pada tahap ini.

A. IDENTITAS ASESMEN
Mata Pelajaran: [ISI]
Jenjang: [ISI]
Fase/Kelas: [ISI]
Semester: [ISI]
Jenis Asesmen: [Sumatif Tengah Semester / Sumatif Akhir Semester / lainnya]
Jumlah Soal: [ISI]
Komposisi Bentuk Soal: [contoh: 25 Pilihan Ganda + 5 Isian Singkat]
Waktu: [ISI]
Konteks Lokal: [ISI / tidak perlu]
Distribusi Kognitif
LOTS: [ISI %]
MOTS: [ISI %]
HOTS: [ISI %]
Jika distribusi tidak diberikan, susun secara proporsional sesuai tuntutan TP dan karakteristik mata pelajaran.

B. SUMBER DATA
Gunakan dokumen Analisis CP–TP yang saya unggah.
Ambil dari dokumen:
Bab;
lingkup materi;
kode TP;
rumusan TP;
urutan TP.
CP dan elemen CP tidak perlu ditampilkan kembali dalam output, karena hubungan CP–TP telah selesai dianalisis pada tahap sebelumnya.
Jika CP tersedia dalam dokumen, gunakan hanya sebagai referensi internal untuk menjaga keselarasan, bukan sebagai kolom blueprint.
Jangan:
membuat TP baru;
mengubah kode TP;
mengubah redaksi TP;
memindahkan TP ke Bab lain;
menambahkan materi yang tidak didukung sumber.

C. PRINSIP BLUEPRINT
Blueprint harus menunjukkan hubungan:
TP Rinci → Indikator Soal → Materi/Konteks → Bentuk Soal → Nomor Soal
Setiap nomor soal harus dapat ditelusuri kepada TP rinci yang diukur.
Jangan membuat soal pada tahap ini.
Jangan menggunakan TP Umum eRapor sebagai dasar indikator soal.
TP Umum eRapor baru dibuat setelah blueprint selesai.

D. DISTRIBUSI SOAL
Jangan membagi jumlah soal secara rata hanya karena terdapat sejumlah TP.
Pertimbangkan:
keluasan TP;
kompleksitas kompetensi;
lingkup materi;
pentingnya kompetensi dalam Bab;
kedalaman kemampuan yang dituntut;
bentuk soal yang digunakan.
TP yang lebih luas atau kompleks dapat memiliki lebih banyak soal.
Namun pastikan seluruh TP yang relevan memperoleh bukti asesmen secara proporsional.
Jika terdapat TP yang tidak tepat diukur melalui bentuk asesmen yang dipilih, jangan memaksakan.
Beri catatan:
PERLU BUKTI ASESMEN NON-TES
jika diperlukan.

E. INDIKATOR SOAL
Indikator harus benar-benar diturunkan dari TP rinci.
Gunakan pola jika sesuai:
Disajikan [stimulus/konteks], peserta didik dapat [kemampuan yang diukur] [objek/materi] dengan tepat.
Indikator harus:
spesifik;
dapat diwujudkan menjadi soal;
sesuai tuntutan TP;
tidak lebih rendah atau lebih tinggi secara tidak wajar;
menunjukkan kemampuan yang dapat diamati;
menyebut konteks/stimulus jika memang diperlukan.
Jangan membuat indikator hanya berdasarkan materi.
Contoh yang kurang tepat:
Peserta didik mengetahui perubahan wujud benda.
Lebih tepat:
Disajikan ilustrasi perubahan wujud pada kehidupan sehari-hari, peserta didik dapat menentukan jenis perubahan wujud dan menjelaskan penyebabnya.

F. LEVEL KOGNITIF
Gunakan Taksonomi Bloom secara proporsional.
LOTS
Umumnya C1–C2.
MOTS
Umumnya C3–C4.
HOTS
Umumnya C4–C6 sesuai kompleksitas.
Jangan menentukan level hanya berdasarkan kata kerja.
Pertimbangkan proses berpikir yang benar-benar harus dilakukan murid.
C4 dapat termasuk MOTS atau HOTS tergantung kompleksitas stimulus dan tuntutan berpikir.
Jangan memaksakan C5/C6 jika tidak sesuai TP.

G. DEPTH OF KNOWLEDGE (DoK)
Gunakan DoK sebagai pelengkap untuk melihat kompleksitas tugas.
DoK 1
Recall/reproduksi sederhana.
DoK 2
Menggunakan konsep atau keterampilan.
DoK 3
Penalaran strategis, analisis, penggunaan bukti, atau keputusan.
DoK 4
Pemikiran/investigasi luas yang membutuhkan integrasi berbagai informasi dan waktu lebih panjang.
Jangan memaksakan DoK 4 pada tes tertulis singkat jika tidak sesuai.
Bloom dan DoK tidak perlu dibuat sama secara mekanis.

H. BENTUK SOAL
Ikuti komposisi yang diberikan guru.
Contoh:
Pilihan Ganda;
Isian Singkat;
Uraian;
bentuk lain jika diberikan.
Tentukan bentuk soal berdasarkan kemampuan yang perlu dibuktikan.
Jangan menentukan bentuk soal hanya untuk memenuhi pembagian jumlah.

I. STIMULUS
Stimulus digunakan jika memang membantu mengukur indikator.
Dapat berupa:
teks;
kasus;
gambar;
tabel;
grafik;
data;
diagram;
infografis;
situasi kontekstual.
Stimulus harus:
relevan;
benar-benar digunakan untuk menjawab;
mendukung penalaran;
bukan hiasan;
sesuai jenjang peserta didik.
Satu stimulus dapat digunakan untuk beberapa soal jika memang efektif.

J. LITERASI DAN NUMERASI
Integrasikan literasi dan numerasi jika relevan dengan TP.
Literasi
Soal harus meminta murid:
menemukan;
menginterpretasikan;
menghubungkan;
mengevaluasi;
atau menggunakan informasi.
Bukan sekadar membaca teks panjang.
Numerasi
Soal harus meminta murid menggunakan:
angka;
data;
tabel;
grafik;
ukuran;
hubungan kuantitatif;
atau penalaran matematis.
Jangan memaksakan numerasi pada TP yang tidak relevan.

K. KONTEKS
Jika guru memberikan konteks lokal, gunakan secara natural.
Konteks dapat berasal dari:
kehidupan sehari-hari;
lingkungan;
sosial;
budaya;
ekonomi;
geografi;
makanan lokal;
kebiasaan masyarakat;
fenomena daerah.
Jangan memaksakan konteks lokal pada semua soal.
Konteks harus membantu mengukur kemampuan, bukan sekadar menempelkan nama daerah.

OUTPUT 1 — BLUEPRINT/KISI-KISI ASESMEN SUMATIF
Langsung buat blueprint sebagai output pertama.
Gunakan tabel:
No. Soal
Bab
Kode TP
Indikator Soal
Materi/Lingkup
Bentuk Soal
Bloom/DoK
Stimulus
Keterangan
No. Soal
Nomor soal final.
Bab
Bab tempat TP berada.
Kode TP
Gunakan kode TP asli dari Analisis CP–TP.
Indikator Soal
Rumusan spesifik kemampuan yang harus ditunjukkan murid.
Materi/Lingkup
Materi atau konteks yang digunakan untuk memperoleh bukti kemampuan.
Bentuk Soal
PG / Isian Singkat / Uraian / bentuk lain sesuai input.
Bloom/DoK
Contoh:
C2/DoK1
C3/DoK2
C4/DoK3
Stimulus
Gunakan kode seperti:
Teks (Lit)
Kasus
Gambar
Tabel (Num)
Data (Num)
Grafik (Num)
Diagram
Infografis
—
Jika satu stimulus digunakan bersama, tuliskan:
Teks (Lit) — No. 6–8

OUTPUT 2 — REKAP DISTRIBUSI SOAL
Setelah blueprint selesai, buat rekap berikut.
A. Distribusi Level Kognitif
Kategori
Target
Aktual
Nomor Soal
Status
LOTS
...
...
...
✓/✗
MOTS
...
...
...
✓/✗
HOTS
...
...
...
✓/✗

B. Distribusi Bentuk Soal
Bentuk Soal
Target
Aktual
Nomor Soal
Status
Pilihan Ganda
...
...
...
✓/✗
Isian Singkat
...
...
...
✓/✗
Uraian
...
...
...
✓/✗
Sesuaikan dengan komposisi yang diberikan.

C. Distribusi Stimulus
Jenis
Jumlah
Nomor Soal
Tanpa stimulus khusus
...
...
Teks/Literasi
...
...
Kasus
...
...
Gambar/Diagram
...
...
Tabel/Data/Grafik
...
...
Lainnya
...
...
Jangan memaksakan semua jenis stimulus harus muncul.

D. Distribusi Soal per TP
Kode TP
Bab
Jumlah Soal
Nomor Soal
Bentuk Soal
Tabel ini harus memudahkan guru melihat:
TP mana mendapat berapa bukti asesmen.

E. Distribusi Soal per Bab
Bab
TP yang Diukur
Jumlah Soal
Nomor Soal
Gunakan untuk memeriksa proporsionalitas cakupan materi.

OUTPUT 3 — TP UMUM UNTUK eRAPOR
Baru setelah blueprint dan rekap selesai, buat TP Umum eRapor.
TP Umum eRapor bukan dasar penyusunan soal.
TP Umum hanya digunakan untuk:
pelaporan;
meringkas TP rinci;
membantu pembacaan hasil belajar pada eRapor.

L. PRINSIP TP UMUM eRAPOR
Gunakan TP rinci yang terdapat dalam setiap Bab.
Prinsip utama:
Sebisa mungkin 1 Bab = 1 TP Umum eRapor.
Hanya jika dalam satu Bab terdapat dua kompetensi utama yang benar-benar berbeda dan tidak dapat dirangkum dengan baik, diperbolehkan:
1 Bab = maksimal 2 TP Umum.
TP Umum harus:
ringkas;
tetap mewakili kompetensi utama;
tidak menjadi daftar panjang TP;
tidak menambahkan kompetensi baru;
tidak mengubah tingkat tuntutan TP;
mudah dipahami dalam konteks pelaporan;
menggunakan bahasa yang efektif.
Jika batas karakter eRapor diberikan guru, patuhi batas tersebut.
Jika tidak diberikan, buat sesingkat mungkin tanpa kehilangan makna.

M. CARA MERUMUSKAN TP UMUM
Jangan sekadar menggabungkan seluruh TP menggunakan kata “dan”.
Cari kompetensi payung.
Contoh:
TP rinci:
TP1.1 mengidentifikasi informasi dalam teks;
TP1.2 menentukan gagasan utama;
TP1.3 menganalisis pesan dalam teks.
TP Umum jangan menjadi:
Mengidentifikasi informasi, menentukan gagasan utama, dan menganalisis pesan dalam teks.
Jika dapat diringkas lebih efektif, misalnya:
Menganalisis informasi, gagasan, dan pesan dalam teks.
Namun rumusan harus tetap benar-benar mewakili TP sumber.

N. KODE TP UMUM eRAPOR
Gunakan kode:
ER1.1, ER2.1, ER3.1, dan seterusnya.
Contoh:
ER1.1 = TP Umum Bab 1.
Jika Bab 1 memerlukan dua TP Umum:
ER1.1
ER1.2

OUTPUT 3 — TABEL TP UMUM eRAPOR
Buat hanya tabel berikut:
Bab
Kode TP Umum eRapor
Rumusan TP Umum eRapor
TP Rinci yang Diwadahi
Pada kolom TP Rinci yang Diwadahi, tuliskan:
TP1.1 — [rumusan TP]
TP1.2 — [rumusan TP]
TP1.3 — [rumusan TP]
dan seterusnya.
Pastikan seluruh TP rinci dalam Bab terwadahi.
Jangan memasukkan TP dari Bab berbeda dalam satu TP Umum.

O. VALIDASI INTERNAL BLUEPRINT
Sebelum final, periksa:
Blueprint
apakah jumlah soal sudah tepat;
apakah setiap soal memiliki TP;
apakah indikator benar-benar turun dari TP;
apakah distribusi soal proporsional;
apakah bentuk soal sesuai kemampuan;
apakah Bloom/DoK sesuai tuntutan;
apakah stimulus benar-benar diperlukan dan relevan.
Distribusi
apakah jumlah LOTS/MOTS/HOTS sesuai;
apakah komposisi bentuk soal sesuai;
apakah semua TP penting terwakili;
apakah distribusi per Bab masuk akal.
TP Umum eRapor
apakah sebisa mungkin 1 Bab hanya 1 TP Umum;
apakah seluruh TP rinci sudah terwadahi;
apakah TP Umum cukup ringkas;
apakah tidak ada kompetensi baru;
apakah tidak ada TP lintas Bab yang digabungkan.
Jika belum sesuai, revisi sebelum menghasilkan dokumen final.

P. FORMAT DOKUMEN
Buat 1 file Microsoft Word .docx.
Urutan dokumen wajib:
1. IDENTITAS ASESMEN
2. BLUEPRINT/KISI-KISI ASESMEN SUMATIF
3. REKAP DISTRIBUSI SOAL
4. TP UMUM eRAPOR
Jangan menambahkan tabel CP–TP karena sudah tersedia pada dokumen Analisis CP–TP.
Gunakan:
ukuran A4;
orientasi landscape;
tabel Word yang sebenarnya;
header tabel berulang jika lebih dari satu halaman;
format bersih dan mudah dibaca.
Nama file:
BLUEPRINT_ASESMEN_SUMATIF_[Mata Pelajaran][Kelas][Semester].docx
JANGAN membuat soal.
JANGAN menampilkan proses analisis internal.
Langsung hasilkan file Word final.
`,rules:[{start:748,end:992,old:`Mata Pelajaran: BAHASA INDONESIA
Jenjang: SMP
Fase/Kelas: D/IX
Semester: I (SATU)
Jenis Asesmen: Sumatif Akhir Semester 
Jumlah Soal: 40
Komposisi Bentuk Soal: 35 pilihan ganda + 5 isian singkat
Waktu: 120 menit
Konteks Lokal jika Diperlukan: -`,value:`Mata Pelajaran: {{mapel}}
Jenjang: {{jenjang}}
Fase/Kelas: {{fase}}/{{kelas}}
Semester: {{semester}}
Jenis Asesmen: {{jenisOutput}} 
Jumlah Soal: {{jumlah}}
Komposisi Bentuk Soal: {{komposisi}}
Waktu: {{durasi}} menit
Konteks Lokal jika Diperlukan: {{konteks}}`},{start:1029,end:1062,old:`LOTS: 50 %
MOTS: 30 %
HOTS: 20 %]`,value:`LOTS: {{lotsOutput}}
MOTS: {{motsOutput}}
HOTS: {{hotsOutput}}]`},{start:1471,end:1491,old:"[ISI jika diketahui]",value:"{{batas}}"},{start:2903,end:3184,old:`Mata Pelajaran: [ISI]
Jenjang: [ISI]
Fase/Kelas: [ISI]
Semester: [ISI]
Jenis Asesmen: [Sumatif Tengah Semester / Sumatif Akhir Semester / lainnya]
Jumlah Soal: [ISI]
Komposisi Bentuk Soal: [contoh: 25 Pilihan Ganda + 5 Isian Singkat]
Waktu: [ISI]
Konteks Lokal: [ISI / tidak perlu]`,value:`Mata Pelajaran: {{mapel}}
Jenjang: {{jenjang}}
Fase/Kelas: {{fase}}/{{kelas}}
Semester: {{semester}}
Jenis Asesmen: {{jenisOutput}}
Jumlah Soal: {{jumlah}}
Komposisi Bentuk Soal: {{komposisi}}
Waktu: {{durasi}} menit
Konteks Lokal: {{konteks}}`},{start:3205,end:3246,old:`LOTS: [ISI %]
MOTS: [ISI %]
HOTS: [ISI %]`,value:`LOTS: {{lotsOutput}}
MOTS: {{motsOutput}}
HOTS: {{hotsOutput}}`}],order:11,version:1,category:"perencanaan"},"./perencanaan/cp-ai.json":{id:"cp-ai",title:"Alternatif TP dengan AI",group:"Perencanaan",source:"1.2. Analisis CP dan TP AI Revisi.docx",description:"Rumuskan alternatif TP berdasarkan CP resmi dan lingkup materi buku.",needs:["Sumber asli yang digunakan pada analisis BSE.","Hasil analisis CP–TP dari BSE."],fields:[],note:"Langkah pilihan setelah analisis BSE. Tentukan TP final sebelum melanjutkan ke pemetaan modul.",original:`Prompt ini merupakan lanjutan dari Prompt 1.1.
Gunakan file sumber yang sebelumnya telah saya unggah dan dianalisis pada Prompt 1.1. Jangan meminta saya mengunggah ulang file selama sumber tersebut masih tersedia dalam percakapan.
Gunakan juga hasil analisis Prompt 1.1 sebagai referensi untuk memahami:
mata pelajaran;
kelas/fase;
struktur Bab;
lingkup materi/Subbab;
CP per elemen;
TP yang terdapat dalam buku.
Namun, pada Prompt 1.2 ini jangan sekadar menyalin TP yang sudah terdapat dalam buku.
Tugas Anda adalah membuat alternatif Tujuan Pembelajaran baru dengan bantuan AI, dengan prinsip:
CP resmi → menentukan kompetensi
Buku/BSE → menentukan lingkup materi
AI → membantu merumuskan TP
Jika terdapat perbedaan antara hasil Prompt 1.1 dan file sumber asli, utamakan file sumber asli.

A. SUMBER YANG DIGUNAKAN
1. Capaian Pembelajaran
Gunakan CP resmi yang terdapat dalam file sumber sebelumnya sebagai dasar utama menentukan kompetensi.
CP harus:
digunakan apa adanya;
tidak diringkas;
tidak diparafrase;
tidak diperbaiki redaksinya;
tidak ditambah;
tidak dikurangi.
Jika tersedia CP per elemen, gunakan CP per elemen.
2. Buku/BSE/Panduan Guru
Gunakan buku sumber sebelumnya untuk menentukan:
Bab;
Subbab;
lingkup materi;
topik;
konsep;
konteks pembelajaran;
urutan materi.
TP yang terdapat dalam buku boleh digunakan sebagai referensi atau inspirasi, tetapi tidak wajib disalin.

B. PRINSIP UTAMA PENYUSUNAN TP
Gunakan pola:
CP → Kompetensi yang Dituntut → Lingkup Materi dari Buku → Tujuan Pembelajaran
Rumus utama:
TP = Kompetensi yang dapat diamati dan diukur + Lingkup materi atau konten
Struktur yang disarankan:
Peserta didik mampu + kata kerja operasional + lingkup materi atau konten.
Setiap TP harus dapat ditelusuri kembali ke CP.

C. ANALISIS CP
Sebelum membuat TP:
identifikasi setiap elemen CP;
analisis kompetensi yang dituntut;
identifikasi kedalaman kemampuan yang harus dicapai;
bedakan kompetensi utama dan kompetensi pendukung;
perhatikan keterkaitan antarelemen jika ada;
gunakan seluruh CP sebagai acuan agar TP tidak hanya mencakup sebagian kecil tuntutan CP.
Jangan membuat TP hanya berdasarkan judul Bab atau Subbab.

D. ANALISIS LINGKUP MATERI
Baca struktur buku dan identifikasi:
Bab;
Subbab;
topik;
konsep utama;
materi esensial;
konteks yang digunakan.
Gunakan lingkup materi tersebut sebagai konteks untuk mencapai kompetensi dalam CP.
Jangan otomatis membuat satu TP untuk setiap Subbab.
Satu TP dapat mencakup beberapa Subbab jika masih berada dalam satu kesatuan kompetensi.
Sebaliknya, satu Subbab dapat mendukung beberapa TP jika tuntutan kompetensinya berbeda.

E. PRINSIP PENURUNAN TUJUAN PEMBELAJARAN
TP harus:
berasal dari CP resmi;
berorientasi pada kemampuan peserta didik;
dapat diamati dan diukur;
sesuai dengan fase;
memiliki lingkup materi yang jelas;
menggunakan lingkup materi dari buku;
cukup bermakna untuk menjadi tujuan pembelajaran;
cukup spesifik untuk dinilai;
dapat ditelusuri ke CP.
TP tidak boleh:
dibuat hanya berdasarkan judul Bab atau Subbab;
berupa indikator soal;
memuat kegiatan pembelajaran;
memuat metode;
memuat media;
memuat bentuk asesmen;
mengulang TP lain;
memuat beberapa kompetensi utama yang tidak berkaitan;
menambahkan materi yang tidak terdapat dalam buku tanpa dasar yang jelas.

F. MENENTUKAN JUMLAH TP
Jumlah TP ditentukan berdasarkan:
kompleksitas kompetensi;
keluasan lingkup materi;
tahapan kemampuan;
hubungan prasyarat;
perbedaan produk atau performa;
keterukuran tujuan.
Gunakan beberapa TP jika satu tuntutan CP terlalu kompleks atau membutuhkan tahapan kompetensi yang berbeda.
Gunakan satu TP jika kompetensi dan materinya masih menjadi satu kesatuan yang dapat dibuktikan melalui satu kemampuan utama.
Jangan:
membuat satu TP untuk setiap Subbab secara otomatis;
menyamakan jumlah TP setiap Bab;
memecah TP menjadi indikator kecil;
menggabungkan terlalu banyak kemampuan hanya agar jumlah TP sedikit.
TP terlalu kecil jika:
hanya mengukur fakta atau bagian kecil;
menyerupai indikator soal;
tidak bermakna sebagai kemampuan mandiri.
Jika terlalu kecil, gabungkan dengan TP yang berkaitan.
TP terlalu luas jika:
memuat beberapa kompetensi utama;
mencakup terlalu banyak materi;
membutuhkan beberapa bentuk bukti kemampuan yang berbeda.
Jika terlalu luas, pecah menjadi beberapa TP.

G. KATA KERJA OPERASIONAL
Gunakan kata kerja yang dapat diamati dan diukur, misalnya:
mengidentifikasi;
menjelaskan;
mengklasifikasikan;
membedakan;
membandingkan;
menerapkan;
mempraktikkan;
menginterpretasikan;
menganalisis;
mengevaluasi;
merancang;
menyajikan;
menghasilkan.
Hindari kata kerja yang terlalu umum atau sulit diukur, seperti:
mengetahui;
mengerti;
mempelajari;
mengenal.
Kata memahami tidak otomatis salah, tetapi jika digunakan pastikan TP memiliki bukti kemampuan yang dapat diamati.
Gunakan Bloom sebagai alat bantu menentukan proses kognitif dan memilih kata kerja.
Gunakan SOLO secara internal untuk memeriksa perkembangan kedalaman pemahaman.
Ketentuan:
CP tetap menjadi dasar utama;
jangan menaikkan level kompetensi melebihi tuntutan CP tanpa dasar;
jangan menggunakan Bloom atau SOLO secara kaku;
jangan mencantumkan level Bloom atau SOLO dalam rumusan TP;
jangan membuat TP hanya agar seluruh level taksonomi terwakili.

H. TP LINTAS ELEMEN
TP dapat berasal dari dua atau lebih elemen CP jika kompetensinya secara alami saling berkaitan.
Jika membuat TP lintas elemen:
pastikan keterkaitannya nyata;
jangan menggabungkan elemen secara paksa;
pastikan setiap kompetensi dapat ditelusuri ke CP;
TP tersebut boleh dicantumkan pada lebih dari satu elemen di Output B.

I. PENYUSUNAN ATP
Setelah seluruh TP dirumuskan, susun menjadi Alur Tujuan Pembelajaran.
Urutkan berdasarkan kombinasi yang paling sesuai, seperti:
hubungan prasyarat;
sederhana menuju kompleks;
konkret menuju abstrak;
bagian menuju keseluruhan;
pemahaman menuju penerapan;
reseptif menuju produktif;
berbantuan menuju mandiri;
konteks familiar menuju konteks lebih kompleks;
hubungan prosedural;
kronologis;
sebab-akibat.
Ketentuan:
jangan mengurutkan hanya berdasarkan level Bloom;
tidak semua Bab harus dimulai dari kompetensi tingkat rendah;
TP pendukung dapat berada pada tingkat yang lebih sederhana;
TP puncak harus mencapai kompetensi yang dituntut CP;
pertahankan urutan Bab dari buku;
jangan memindahkan materi antar-Bab tanpa alasan;
jika urutan Bab menimbulkan lompatan kompetensi, beri tanda [Perlu Verifikasi Guru];
ATP harus membentuk jalur perkembangan kompetensi yang jelas dan tidak bercabang.

J. KODE TP
Gunakan kode:
TP1.1, TP1.2, TP1.3, ...
Ketentuan:
angka pertama = nomor Bab;
angka kedua = urutan TP dalam Bab.
Contoh:
TP1.1 = TP pertama Bab I;
TP1.2 = TP kedua Bab I;
TP2.1 = TP pertama Bab II.
Kode harus konsisten pada seluruh output.

OUTPUT A — ALUR TUJUAN PEMBELAJARAN
Buat tabel dengan format:
No. Urut | Bab | Lingkup Materi/Subbab | Kode TP | Tujuan Pembelajaran
Ketentuan:
urutkan mulai Bab I sampai Bab terakhir;
Bab diambil dari buku;
Lingkup Materi/Subbab diambil dari buku;
TP dirumuskan oleh AI berdasarkan CP + lingkup materi buku;
jangan membuat jumlah TP seragam untuk setiap Bab;
jangan otomatis membuat satu TP untuk setiap Subbab;
satu TP dapat mencakup beberapa Subbab jika kompetensinya masih satu kesatuan;
pastikan urutan TP membentuk ATP yang logis.

OUTPUT B — ANALISIS KETERCAPAIAN CP
Buat tabel dengan format:
No. | CP Per Elemen | Kode TP dan Deskripsi
Ketentuan:
Buat satu baris untuk setiap elemen CP.
Tuliskan nama elemen dan rumusan CP lengkap apa adanya dari sumber.
Pada kolom Kode TP dan Deskripsi, cantumkan seluruh TP yang berkontribusi terhadap ketercapaian CP elemen tersebut.
Format:
TP1.1 — [rumusan TP lengkap]
TP1.2 — [rumusan TP lengkap]
TP2.1 — [rumusan TP lengkap]
Analisis keterkaitan berdasarkan:
kompetensi;
konten;
performa;
tuntutan CP.
Satu TP dapat muncul pada lebih dari satu elemen jika merupakan TP lintas elemen.
Pastikan semua TP pada Output A dapat ditelusuri ke minimal satu CP.
Periksa apakah seluruh tuntutan utama CP telah terwadahi oleh kumpulan TP.
Jika ada bagian CP yang belum terwadahi, beri tanda:
[Belum Tercakup]
Jika hubungan TP dengan CP masih meragukan, beri tanda:
[Perlu Verifikasi Guru]

K. VALIDASI AKHIR
Sebelum membuat dokumen final, periksa kembali bahwa:
seluruh CP telah dianalisis;
seluruh Bab dan lingkup materi relevan telah diperiksa;
lingkup materi setiap TP berasal dari buku;
setiap TP memiliki dasar CP;
tidak ada TP yang hanya dibuat dari judul Bab/Subbab;
tidak ada TP yang terlalu kecil;
tidak ada TP yang terlalu luas;
tidak ada TP yang berulang;
tidak ada kompetensi yang melebihi tuntutan CP tanpa dasar;
urutan ATP logis;
seluruh kode TP konsisten;
setiap TP pada Output A muncul dalam Output B;
seluruh tuntutan utama CP telah diperiksa ketercakupannya;
TP lintas elemen dipetakan ke semua elemen yang relevan.
Lakukan perbaikan internal sebelum membuat dokumen akhir.

L. FORMAT DOKUMEN AKHIR
Buat hasil akhir dalam satu file Microsoft Word .docx dengan ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya;
tabel menyesuaikan lebar halaman;
baris judul tabel diulang pada halaman berikutnya;
menggunakan bahasa Indonesia formal, jelas, sistematis, dan ringkas;
jangan menambahkan uraian panjang di luar kedua output.
Urutan dokumen:
Judul
Identitas Mata Pelajaran/Buku
OUTPUT A — ALUR TUJUAN PEMBELAJARAN
OUTPUT B — ANALISIS KETERCAPAIAN CP
Gunakan nama file:
ANALISIS_CP_TP_[Mata Pelajaran]_[Kelas].docx
`,rules:[],order:2,version:1,category:"perencanaan"},"./perencanaan/cp-bse.json":{id:"cp-bse",title:"Analisis CP–TP dari BSE",group:"Perencanaan",source:"1.1 Analisis CP dan TP BSE.docx",description:"Ekstrak CP dan TP dari buku sebagai dasar perencanaan.",needs:["Buku siswa, panduan guru, BSE, atau dokumen pembelajaran resmi yang memuat CP/TP."],fields:[],note:"",original:`Saya akan mengunggah satu file Buku Siswa, Buku Panduan Guru, BSE, atau dokumen pembelajaran resmi.
Tugas Anda adalah membaca seluruh file terlebih dahulu, kemudian mengekstrak Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP)/Alur Tujuan Pembelajaran (ATP) yang terdapat di dalam file.
Hasil akhir digunakan sebagai dasar perencanaan pembelajaran.
A. PRINSIP UTAMA
Gunakan hanya informasi yang terdapat dalam file yang saya unggah.
1. Untuk Capaian Pembelajaran (CP)
CP harus:
diambil dari file;
disalin apa adanya;
tidak diringkas;
tidak diparafrase;
tidak diperbaiki redaksinya;
tidak ditambah;
tidak dikurangi;
tidak dibuat sendiri.
Gunakan CP per elemen jika tersedia dalam file.
2. Untuk Tujuan Pembelajaran (TP)
TP harus:
diambil dari file;
disalin apa adanya;
tidak diringkas;
tidak diparafrase;
tidak diperbaiki redaksinya;
tidak diganti kata kerjanya;
tidak ditambah;
tidak dikurangi;
tidak dipecah menjadi TP baru;
tidak digabungkan dengan TP lain;
tidak dibuat sendiri.
Jika buku menggunakan istilah Alur Tujuan Pembelajaran, gunakan rumusan yang terdapat pada bagian tersebut sebagai TP.
Jika buku tidak memiliki tabel khusus ATP, cari TP pada bagian seperti:
Tujuan Pembelajaran;
Alur Tujuan Pembelajaran;
Tujuan Pembelajaran per Bab;
Panduan Pembelajaran;
Kegiatan Pembelajaran;
atau bagian lain yang secara jelas menyatakan tujuan pembelajaran.
Jangan mengambil indikator pencapaian tujuan pembelajaran sebagai TP apabila TP sudah tersedia secara terpisah.

B. IDENTIFIKASI STRUKTUR BUKU
Sebelum menyusun hasil akhir, periksa terlebih dahulu struktur file.
Identifikasi:
mata pelajaran;
kelas/fase;
jumlah bab;
judul setiap bab;
subbab/lingkup materi;
lokasi CP;
lokasi TP/ATP;
apakah terdapat pemetaan CP–TP;
apakah terdapat indikator pencapaian tujuan pembelajaran.
Struktur setiap BSE dapat berbeda. Oleh karena itu, jangan mengasumsikan format buku harus sama dengan buku lain.

C. KODE TP
Jika TP dalam sumber sudah memiliki kode, gunakan kode tersebut apa adanya.
Jika TP tidak memiliki kode, buat kode teknis untuk memudahkan pemetaan dengan pola:
TP1.1, TP1.2, TP1.3, ...
Keterangan:
angka pertama = nomor bab;
angka kedua = urutan TP dalam bab.
Contoh:
TP1.1 = TP pertama Bab I;
TP1.2 = TP kedua Bab I;
TP2.1 = TP pertama Bab II.
Kode hanya sebagai penanda teknis dan tidak boleh mengubah rumusan TP.

D. LINGKUP MATERI/SUBBAB
Untuk kolom Lingkup Materi/Subbab, gunakan nama yang terdapat dalam file, misalnya:
nama subbab;
topik;
kegiatan pembelajaran;
materi pembelajaran;
atau struktur lain yang paling dekat dengan TP.
Gunakan redaksi sumber apa adanya sejauh memungkinkan.
Jangan membuat lingkup materi baru berdasarkan pengetahuan di luar file.

E. PEMETAAN TP TERHADAP CP PER ELEMEN
Setelah semua TP berhasil diekstrak, petakan setiap TP terhadap CP per elemen.
Gunakan dua kondisi berikut.
Kondisi 1 — Buku sudah menyediakan pemetaan CP–TP
Jika buku sudah menyediakan tabel atau informasi yang menunjukkan hubungan:
CP → Elemen → TP/ATP
gunakan pemetaan tersebut sebagai dasar utama.
Jangan membuat pemetaan baru jika sumber sudah memberikan hubungan secara jelas.
Kondisi 2 — Buku tidak menyediakan pemetaan CP–TP
Jika buku hanya menyediakan CP dan TP tetapi tidak menunjukkan hubungan TP dengan elemen CP, lakukan analisis keterkaitan.
Analisis setiap TP berdasarkan:
kompetensi/kata kerja yang dituntut;
konten atau objek yang dipelajari;
bentuk performa yang harus dilakukan murid;
jenis teks, data, konsep, keterampilan, atau produk yang digunakan;
kesesuaian dengan rumusan CP pada setiap elemen.
Gunakan pola analisis:
TP → Kompetensi → Konten/Performa → Cocokkan dengan CP per Elemen
Pilih elemen CP yang mempunyai hubungan paling langsung dan paling kuat dengan TP.
Ketentuan pemetaan
Satu TP dapat dipetakan ke satu elemen jika keterkaitannya jelas.
Satu TP boleh dipetakan ke lebih dari satu elemen jika TP tersebut benar-benar mengintegrasikan kompetensi dari beberapa elemen.
Jangan memaksakan satu TP hanya masuk ke satu elemen jika tuntutannya memang lintas elemen.
Jangan menentukan elemen hanya berdasarkan nama bab atau materi.
Analisis harus melihat apa yang dilakukan murid dalam TP tersebut.
Jangan membuat TP baru untuk melengkapi CP.
Jangan mengubah rumusan CP maupun TP.
Jika hubungan TP dengan elemen CP tidak dapat ditentukan secara meyakinkan, beri tanda:
[Perlu Verifikasi Guru]
Pemetaan yang dibuat AI hanya merupakan hasil analisis keterkaitan, bukan perubahan terhadap CP atau TP sumber.

OUTPUT A — ALUR TUJUAN PEMBELAJARAN
Buat tabel Word dengan format:
No. Urut | Bab | Lingkup Materi/Subbab | Kode TP | Tujuan Pembelajaran
Ketentuan:
Satu baris untuk satu TP.
Urutkan mulai Bab I sampai bab terakhir.
Pertahankan urutan TP sesuai urutan dalam buku.
Bab ditulis sesuai sumber.
Lingkup Materi/Subbab diambil dari sumber.
TP ditulis lengkap dan apa adanya dari sumber.
Jangan memasukkan indikator pencapaian tujuan pembelajaran sebagai TP jika TP sudah tersedia secara terpisah.
Jangan mengubah urutan hanya karena dianggap lebih logis.
Jangan membuat TP tambahan.

OUTPUT B — ANALISIS KETERCAPAIAN CP
Buat tabel Word dengan format:
No. | CP Per Elemen | Kode TP dan Deskripsi
Ketentuan:
Buat satu baris untuk setiap CP per elemen.
Tuliskan nama elemen dan rumusan CP lengkap dan apa adanya dari sumber.
Pada kolom Kode TP dan Deskripsi, cantumkan seluruh TP yang mendukung ketercapaian CP elemen tersebut.
Tuliskan dengan format:
TP1.1 — [rumusan TP lengkap]
TP1.2 — [rumusan TP lengkap]
TP2.1 — [rumusan TP lengkap]
Jika satu TP terkait dengan lebih dari satu elemen, TP tersebut boleh dicantumkan pada lebih dari satu baris CP.
Jika buku sudah menyediakan pemetaan CP–TP, gunakan pemetaan sumber.
Jika buku tidak menyediakan pemetaan, lakukan analisis berdasarkan kompetensi, konten, dan performa TP.
Jangan mengubah rumusan CP maupun TP.
Jika pemetaan meragukan, tambahkan:
[Perlu Verifikasi Guru]
setelah kode TP.

F. JIKA DATA TIDAK DITEMUKAN
Jangan mengarang informasi yang tidak terdapat dalam file.
Jika:
CP per elemen tidak ditemukan;
TP tidak ditemukan;
bagian buku tidak terbaca;
atau struktur sumber tidak cukup jelas,
tuliskan:
Tidak ditemukan secara eksplisit dalam sumber.
Jangan menggunakan CP atau TP dari internet, kurikulum lain, buku lain, atau pengetahuan umum untuk melengkapinya.

G. VALIDASI AKHIR
Sebelum membuat dokumen final, lakukan pemeriksaan ulang.
Pastikan:
seluruh halaman/bab yang relevan telah diperiksa;
seluruh bab telah masuk;
seluruh TP telah diekstrak;
tidak ada TP yang terlewat;
tidak ada TP yang dibuat sendiri;
tidak ada TP yang diparafrase;
tidak ada TP yang dipersingkat;
tidak ada indikator yang salah dianggap sebagai TP;
tidak ada TP yang muncul dua kali tanpa alasan;
seluruh CP per elemen telah diperiksa;
rumusan CP tetap sama dengan sumber;
rumusan TP tetap sama dengan sumber;
kode TP konsisten antara Output A dan Output B;
setiap TP pada Output A telah dianalisis keterkaitannya dengan CP pada Output B;
TP lintas elemen boleh muncul pada lebih dari satu CP jika memang relevan;
pemetaan yang meragukan telah diberi tanda [Perlu Verifikasi Guru].

H. FORMAT DOKUMEN AKHIR
Buat hasil akhir dalam satu file Microsoft Word .docx.
Ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya;
tabel menyesuaikan lebar halaman;
baris judul tabel diulang pada halaman berikutnya;
teks di dalam tabel dibuat rapi dan mudah dibaca;
menggunakan bahasa Indonesia formal, jelas, sistematis, dan ringkas;
jangan menambahkan penjelasan panjang di luar Output A dan Output B.
Urutan dokumen:
Judul
Identitas Buku
OUTPUT A — ALUR TUJUAN PEMBELAJARAN
OUTPUT B — ANALISIS KETERCAPAIAN CP
Gunakan nama file:
ATP_DAN_ANALISIS_KETERCAPAIAN_CP_[Mata Pelajaran]_[Kelas].docx
`,rules:[],order:1,version:1,category:"perencanaan"},"./perencanaan/gambaran-asesmen.json":{id:"gambaran-asesmen",title:"Gambaran asesmen",group:"Pembelajaran",source:"4 Gambaran Asesmen.docx",description:"Petakan asesmen awal, proses, dan akhir yang selaras dengan aktivitas.",needs:["Pemetaan modul dan waktu final.","Gambaran aktivitas pembelajaran.","Buku/BSE sebagai referensi tambahan."],fields:[],note:"",original:`Prompt ini merupakan lanjutan dari Prompt 3 — Gambaran Aktivitas Pembelajaran Mendalam per Modul.
Gunakan seluruh file dan hasil kerja yang masih tersedia dalam percakapan sebelumnya.
Tugas Anda adalah menyusun gambaran asesmen untuk setiap modul yang telah ditetapkan sebelumnya, meliputi:
Asesmen Awal Pembelajaran
Asesmen pada Proses Pembelajaran
Asesmen Akhir Pembelajaran
Hasil ini akan digunakan sebagai input untuk penyusunan Modul Ajar pada prompt berikutnya.
Gambaran asesmen belum berupa instrumen lengkap, soal lengkap, atau rubrik lengkap.

A. SUMBER UTAMA
Gunakan sumber berikut secara berurutan.
1. Hasil Prompt 2 — Pemetaan Modul dan Alokasi Waktu
Gunakan apa adanya:
semester;
Bab;
kode modul;
judul modul;
kode TP;
rumusan TP;
jumlah pertemuan;
alokasi JP.
Data tersebut sudah final.
Jangan:
membuat modul baru;
menghapus modul;
menggabungkan atau memecah modul;
memindahkan TP;
membuat TP baru;
mengubah kode atau rumusan TP;
mengubah jumlah pertemuan atau JP.

2. Hasil Prompt 3 — Gambaran Aktivitas Pembelajaran Mendalam
Gunakan sebagai sumber utama untuk mengetahui:
aktivitas Memahami;
aktivitas Mengaplikasi;
aktivitas Merefleksi;
bukti belajar yang sudah direncanakan;
praktik pedagogis;
produk/kinerja jika ada;
aktivitas individu atau kelompok.
Asesmen harus selaras dengan aktivitas yang benar-benar telah direncanakan.
Jangan membuat asesmen untuk aktivitas yang tidak ada.

3. Buku/BSE/Panduan Guru sebelumnya
Boleh digunakan sebagai referensi tambahan, terutama jika buku menyediakan:
contoh asesmen;
tugas;
latihan;
bentuk unjuk kerja;
rubrik;
atau bentuk bukti belajar yang relevan.
Gunakan sebagai inspirasi.
Jangan menggunakan buku untuk mengubah TP, modul, atau aktivitas final dari prompt sebelumnya.

B. PRINSIP UTAMA
Gunakan alur:
TP → Aktivitas Pembelajaran → Bukti Belajar → Asesmen → Umpan Balik/Tindak Lanjut
Setiap asesmen harus mempunyai fungsi yang jelas.
Jangan menilai semua aktivitas.
Pilih hanya bukti yang benar-benar berguna untuk mengetahui perkembangan dan ketercapaian TP.
Asesmen harus:
sesuai dengan TP;
sesuai dengan aktivitas;
menghasilkan bukti yang dapat diamati;
realistis dilakukan guru;
tidak berlebihan;
memberi informasi yang berguna untuk tindak lanjut.

C. ASESMEN AWAL PEMBELAJARAN
Asesmen awal digunakan untuk mengetahui kesiapan murid sebelum memulai pembelajaran dalam modul.
Asesmen awal dapat menggali:
pengetahuan awal;
pengalaman sebelumnya;
kemampuan prasyarat;
pemahaman awal terhadap konsep atau fenomena;
miskonsepsi yang tampak dari jawaban;
kesiapan melakukan kemampuan yang diperlukan dalam modul.
Tidak harus menggunakan tes tertulis.
Bentuknya dapat berupa:
pertanyaan pemantik;
respons singkat;
tugas sederhana;
kuis singkat;
pengamatan;
diskusi awal;
analisis contoh;
demonstrasi kemampuan awal;
atau teknik lain yang relevan.
Ketentuan
Asesmen awal harus menghasilkan informasi yang dapat digunakan guru untuk:
menentukan kebutuhan bantuan;
menentukan scaffolding;
memberikan pengayaan;
menyesuaikan kedalaman penjelasan;
menyesuaikan aktivitas berikutnya.
Jangan membuat diagnosis psikologis atau memberi label kemampuan murid secara berlebihan.
Jika asesmen awal tidak diperlukan secara khusus, jangan memaksakan asesmen yang kompleks. Gunakan asesmen sederhana yang sesuai kebutuhan modul.

D. ASESMEN PADA PROSES PEMBELAJARAN
Asesmen proses berfungsi sebagai asesmen formatif.
Gunakan untuk melihat perkembangan murid ketika mengalami aktivitas:
Memahami → Mengaplikasi → Merefleksi
Tidak semua aktivitas perlu dinilai.
Pilih titik-titik penting yang memberi informasi tentang:
perkembangan menuju TP;
pemahaman yang belum tepat;
kualitas penerapan;
kesulitan;
strategi yang digunakan;
kebutuhan umpan balik;
kebutuhan perbaikan.
Bukti dapat berasal dari:
jawaban;
catatan;
hasil identifikasi;
hasil pengamatan;
hasil analisis;
penyelesaian masalah;
argumentasi;
rancangan;
tulisan;
data;
produk sementara;
praktik;
presentasi;
diskusi;
revisi;
refleksi.
Asesmen proses harus memberi kesempatan untuk:
bukti → umpan balik → perbaikan.
Jangan menjadikan seluruh asesmen proses sebagai nilai akhir.

E. ASESMEN AKHIR PEMBELAJARAN
Asesmen akhir digunakan untuk memperoleh bukti ketercapaian TP setelah rangkaian pembelajaran dalam modul selesai.
Pilih bentuk asesmen berdasarkan kemampuan yang dituntut TP.
Tidak harus selalu berupa tes tertulis.
Bentuk asesmen dapat berupa:
tes tertulis;
tes lisan;
praktik;
unjuk kerja;
produk;
laporan;
tulisan;
pemecahan masalah;
presentasi;
projek sederhana;
portofolio;
atau kombinasi yang relevan.
Gunakan prinsip:
Jika TP menuntut melakukan → asesmen harus memberi kesempatan murid melakukan.
Jika TP menuntut menganalisis → harus tersedia bukti analisis.
Jika TP menuntut menghasilkan → harus tersedia produk/karya yang relevan.
Jika TP menuntut komunikasi → harus tersedia bukti komunikasi.
Jangan menggunakan produk akhir sebagai satu-satunya bukti apabila TP juga menuntut kemampuan berpikir atau performa tertentu yang tidak terlihat dari produk.

F. INDIVIDU DAN KELOMPOK
Bukti belajar dapat berasal dari individu atau kelompok.
Namun:
TP yang menuntut kemampuan individu harus mempunyai bukti individu.
Jika aktivitas utama dilakukan secara kelompok, tetapi guru perlu memastikan kemampuan setiap murid, gunakan bukti individual sederhana seperti:
penjelasan;
jawaban;
catatan;
bagian tugas individu;
refleksi;
respons lisan;
atau performa individu.
Jangan memberikan nilai individu hanya berdasarkan produk kelompok tanpa bukti kemampuan individu yang memadai.

G. KESELARASAN DENGAN PEMBELAJARAN MENDALAM
Asesmen harus sesuai dengan pengalaman belajar yang sudah dirancang.
Memahami
Bukti dapat menunjukkan kemampuan murid:
mengidentifikasi;
menjelaskan;
menghubungkan;
membandingkan;
menginterpretasikan;
atau membangun pemahaman awal.
Mengaplikasi
Bukti harus memperlihatkan murid menggunakan pemahamannya untuk:
menerapkan;
menganalisis;
memecahkan masalah;
menyelidiki;
mengambil keputusan;
menghasilkan;
merancang;
atau melakukan performa lain sesuai TP.
Merefleksi
Bukti dapat menunjukkan kemampuan murid:
mengevaluasi hasil;
menjelaskan kekuatan dan keterbatasan;
menggunakan umpan balik;
memperbaiki hasil;
menilai strategi belajarnya;
menentukan tindak lanjut.
Jangan membuat asesmen terpisah hanya agar ketiga tahap memiliki asesmen.
Gunakan asesmen hanya ketika benar-benar diperlukan sebagai bukti perkembangan atau ketercapaian TP.

H. BUKTI KETERCAPAIAN
Untuk setiap TP, pastikan terdapat bukti yang cukup untuk menjawab:
“Apa yang harus terlihat dari murid agar guru dapat menyatakan bahwa TP ini tercapai?”
Bukti harus berasal dari aktivitas yang telah dirancang pada Prompt 3.
Jangan membuat indikator kecil seperti indikator soal.
Cukup nyatakan bukti utama yang menunjukkan kemampuan dalam TP.
Contoh:
TP:
Peserta didik mampu menganalisis gagasan dan pesan dalam teks.
Bukti ketercapaian:
Hasil analisis yang menunjukkan gagasan dan pesan teks disertai alasan atau bukti dari teks.
Bukan sekadar:
Murid mengerjakan LKPD.
LKPD adalah wadah/instrumen, bukan bukti kompetensi itu sendiri.

I. TEKNIK DAN INSTRUMEN
Tentukan teknik asesmen secara sederhana dan sesuai kebutuhan, misalnya:
observasi;
tes tertulis;
tes lisan;
penugasan;
praktik;
produk;
projek;
portofolio;
presentasi.
Untuk instrumen, cukup tuliskan jenis instrumen yang nantinya perlu disiapkan, misalnya:
pertanyaan diagnostik;
lembar observasi;
lembar tugas;
checklist;
rubrik kinerja;
rubrik produk;
rubrik presentasi;
pedoman penskoran;
soal tertulis;
lembar refleksi.
Jangan membuat instrumen lengkap pada prompt ini.
Instrumen lengkap akan dikembangkan pada tahap berikutnya jika diperlukan.

J. EFISIENSI ASESMEN
Utamakan asesmen yang:
memberikan bukti kuat;
sederhana dilakukan;
sesuai dengan aktivitas;
dapat digunakan untuk beberapa TP yang berkaitan jika memungkinkan;
menghasilkan informasi yang berguna bagi guru dan murid.
Hindari:
terlalu banyak asesmen;
terlalu banyak instrumen;
menilai setiap aktivitas;
mengulang asesmen dengan fungsi yang sama;
membuat satu asesmen untuk setiap TP secara otomatis;
asesmen yang tidak menghasilkan informasi baru.
Satu asesmen boleh mengukur beberapa TP jika bukti yang dihasilkan benar-benar relevan.

K. ATURAN NILAI DAN BOBOT
Pada tahap ini jangan menentukan bobot nilai, kecuali guru sudah memberikan ketentuan sebelumnya.
Jangan menentukan:
persentase nilai;
bobot formatif;
bobot sumatif;
KKM/KKTP numerik;
skor rubrik lengkap.
Tahap ini hanya menentukan gambaran asesmen dan bukti yang diperlukan.

OUTPUT — GAMBARAN ASESMEN PER MODUL
Buat hasil untuk setiap modul secara berurutan.
Gunakan struktur berikut:
MODUL [Kode Modul] — [Judul Modul]
Alokasi Waktu: [...] pertemuan / [...] JP
Tujuan Pembelajaran
[Kode TP] — [rumusan TP lengkap]
[Kode TP] — [rumusan TP lengkap]

1. Asesmen Awal
Tujuan:
Tuliskan secara singkat informasi awal apa yang perlu diketahui guru sebelum pembelajaran.
Bentuk/teknik:
[...]
Gambaran asesmen:
Jelaskan secara ringkas apa yang dilakukan murid dan guru.
Informasi yang diperoleh dan tindak lanjut:
Jelaskan bagaimana hasil asesmen digunakan untuk menyesuaikan pembelajaran.

2. Asesmen pada Proses Pembelajaran
Tuliskan hanya asesmen formatif utama yang benar-benar diperlukan.
Untuk setiap asesmen proses gunakan format:
TP yang dipantau: [...]
Bukti belajar: [...]
Teknik: [...]
Gambaran asesmen:
Jelaskan secara ringkas apa yang dilakukan murid dan guru.

Instrumen yang diperlukan: [...]
Umpan balik/tindak lanjut: [...]
Jika satu asesmen dapat memantau beberapa TP, gabungkan.

3. Asesmen Akhir Pembelajaran
TP yang diukur: [...]
Bukti ketercapaian utama:
[...]
Bentuk/teknik asesmen:
[...]
Gambaran asesmen:
[...]
Jelaskan secara ringkas apa yang dilakukan murid dan guru.
Instrumen yang diperlukan:
[...]
Individu/Kelompok:
[...]
Jika menggunakan tugas kelompok tetapi terdapat TP individual, jelaskan secara singkat bukti individu yang digunakan.

L. REKAP RINGKAS
Setelah seluruh modul selesai, buat satu tabel ringkas:
Kode Modul
TP
Asesmen Awal
Asesmen Proses Utama
Asesmen Akhir
Bukti Ketercapaian Utama
Ketentuan:
satu baris untuk setiap modul;
isi singkat;
jangan mengulang uraian panjang;
tabel ini digunakan sebagai data kendali asesmen saat menyusun Modul Ajar.

M. PEMERIKSAAN AKHIR
Sebelum menghasilkan output, periksa:
Struktur
semua modul dari Prompt 2 tercakup;
kode modul tetap;
TP tetap;
jumlah pertemuan dan JP tetap.
Keselarasan
asesmen berasal dari TP;
bukti berasal dari aktivitas Prompt 3;
tidak ada asesmen yang mengukur kemampuan di luar TP;
tidak ada produk atau aktivitas baru yang dibuat tanpa dasar.
Asesmen Awal
benar-benar berfungsi mengetahui kesiapan;
hasilnya dapat digunakan untuk penyesuaian pembelajaran.
Asesmen Proses
hanya titik penting yang dinilai;
menghasilkan umpan balik;
memungkinkan perbaikan.
Asesmen Akhir
benar-benar mengukur ketercapaian TP;
bentuk asesmen sesuai kompetensi;
terdapat bukti individu jika TP menuntut kemampuan individu.
Efisiensi
tidak terlalu banyak asesmen;
tidak terlalu banyak instrumen;
tidak ada asesmen yang tumpang tindih tanpa fungsi jelas.
Jika ditemukan masalah, perbaiki rancangan asesmen tanpa mengubah TP, modul, waktu, atau gambaran aktivitas utama.

N. FORMAT DOKUMEN
Buat hasil akhir dalam satu file Microsoft Word .docx dengan ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya untuk bagian rekap;
tabel menyesuaikan lebar halaman;
baris judul tabel diulang pada halaman berikutnya;
bahasa Indonesia formal, jelas, sistematis, dan ringkas.
Jangan membuat:
soal lengkap;
rubrik lengkap;
kisi-kisi lengkap;
pedoman penskoran lengkap;
Modul Ajar;
RPP;
kegiatan pembelajaran baru.
Gunakan nama file:
GAMBARAN_ASESMEN_PER_MODUL_[Mata Pelajaran]_[Kelas].docx
`,rules:[],order:7,version:1,category:"perencanaan"},"./perencanaan/lkpd-baru.json":{id:"lkpd-baru",title:"LKPD — Buat Baru",category:"perencanaan",order:10.1,version:1,group:"Pembelajaran",description:"Buat LKPD dari tujuan pembelajaran dan aktivitas, tanpa harus memiliki RPP.",source:"Naskah MAHARATI sesuai permintaan pengembangan pengguna, 13 Oktober 2026.",needs:["Sumber materi yang sah dan relevan tersedia di percakapan AI."],fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F"]},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0},{id:"materi",label:"Materi / konteks",type:"textarea",required:!0},{id:"aktivitas",label:"Aktivitas yang dilakukan murid",type:"textarea",required:!0},{id:"durasi",label:"Durasi (menit)",type:"number",required:!0,min:5,max:240,default:"40"},{id:"cara",label:"Cara kerja",type:"select",required:!0,options:["Individu","Berpasangan","Kelompok"],default:"Individu"},{id:"sumber",label:"Sumber / ringkasan pendukung",type:"textarea",required:!1}],format:"authored",body:`Susun LKPD siap digunakan murid.
Mata pelajaran {{mapel}}, fase {{fase}}, kelas {{kelas}}.
TP: {{tp}}
Materi: {{materi}}
Aktivitas: {{aktivitas}}
Durasi: {{durasi}} menit; kerja {{cara}}. Sumber: {{sumber}}.
Jika informasi inti belum cukup, tanyakan; jangan mengarang fakta atau sumber. Turunkan tugas dari TP dan aktivitas yang diberikan. Susun identitas kosong (tanpa meminta data pribadi nyata murid), tujuan berbahasa murid, alat/bahan, petunjuk, stimulus singkat, langkah bernomor, tabel/ruang jawaban yang cukup, pertanyaan penalaran, refleksi, dan kriteria keberhasilan. Sesuaikan beban dan bahasa dengan kelas. Hindari aktivitas berbahaya; beri alternatif alat sederhana. Sertakan kunci/rubrik dan panduan guru secara TERPISAH, tidak tercetak pada lembar murid. Periksa keselarasan TP–aktivitas–bukti belajar serta kelayakan durasi. Hasil berupa teks LKPD terstruktur yang dapat diedit dan dicetak.`},"./perencanaan/lkpd-gambar.json":{id:"lkpd-gambar",title:"LKPD — Gambar Satu Halaman",category:"perencanaan",order:10.2,version:1,group:"Pembelajaran",description:"Ubah LKPD yang sudah ada atau rancangan baru menjadi prompt gambar satu halaman.",source:"Naskah MAHARATI sesuai permintaan pengembangan pengguna, 13 Oktober 2026.",needs:["Jika memilih Sudah ada LKPD, unggah LKPD ke AI tujuan, bukan ke MAHARATI."],fields:[{id:"asal",label:"Apakah sudah memiliki LKPD?",type:"select",required:!0,options:["Sudah ada LKPD","Belum ada LKPD"],default:"Sudah ada LKPD"},{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0,when:"asal:Belum ada LKPD"},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F"],when:"asal:Belum ada LKPD"},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0,when:"asal:Belum ada LKPD"},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,when:"asal:Belum ada LKPD"},{id:"materi",label:"Materi / konteks",type:"textarea",required:!0,when:"asal:Belum ada LKPD"},{id:"aktivitas",label:"Aktivitas yang dilakukan murid",type:"textarea",required:!0,when:"asal:Belum ada LKPD"},{id:"warna",label:"Warna lembar",type:"select",required:!0,options:["Hitam putih hemat tinta","Warna-warni lembut","Dua warna"],default:"Hitam putih hemat tinta"},{id:"gaya",label:"Gaya ilustrasi",type:"combo",required:!0,options:["Minimalis rapi","Doodle edukatif","Komik anak","Flat vector","3D clay"],default:"Minimalis rapi"},{id:"ukuran",label:"Ukuran dan orientasi",type:"select",required:!0,options:["A4 potret","A4 lanskap"],default:"A4 potret"},{id:"catatan",label:"Penekanan / bagian yang harus dipertahankan",type:"textarea",required:!1}],format:"authored",bodyField:"asal",bodyBy:{"Sudah ada LKPD":`Saya akan mengunggah LKPD di percakapan AI ini. Baca seluruh LKPD yang diunggah. Jika lampiran belum tersedia atau tidak terbaca, minta lampiran; jangan membuat isi pengganti.
Susun PROMPT GAMBAR siap salin untuk menghasilkan satu halaman LKPD {{ukuran}}, gaya {{gaya}}, warna {{warna}}. Catatan: {{catatan}}.
Jaga tujuan, makna instruksi, angka, soal, dan urutan kegiatan; jangan menambahkan kunci di lembar murid. Beri area identitas kosong, petunjuk, stimulus, nomor soal, ruang jawaban cukup, dan refleksi. Prioritaskan keterbacaan cetak dan kontras; untuk hitam putih gunakan garis jelas tanpa latar abu-abu boros tinta. Ukuran A4 potret 2480×3508 px atau lanskap 3508×2480 px pada 300 dpi. Jangan mengecilkan tulisan agar materi panjang dipaksa muat: jika tidak layak satu halaman, jelaskan dan minta pilihan bagian prioritas sebelum menyusun versi final. Pisahkan: (1) rencana tata letak, (2) satu prompt gambar lengkap, (3) naskah teks persis, (4) checklist pengecekan guru. Ingatkan bahwa AI gambar dapat salah mengeja; cek huruf, angka, isi, dan ruang tulis sebelum dicetak. Jika teks tidak akurat, gunakan gambar latar tanpa teks dan tambahkan teks editable di Canva. Jangan mengklaim gambar sudah dibuat.`,"Belum ada LKPD":`Rancang dahulu isi LKPD ringkas berdasarkan data: mata pelajaran {{mapel}}, fase {{fase}}, kelas {{kelas}}. TP {{tp}}. Materi {{materi}}. Aktivitas {{aktivitas}}. Bila materi inti belum cukup, minta informasi tambahan. Setelah isi disetujui, lanjutkan ke prompt gambar.
Susun PROMPT GAMBAR siap salin untuk menghasilkan satu halaman LKPD {{ukuran}}, gaya {{gaya}}, warna {{warna}}. Catatan: {{catatan}}.
Jaga tujuan, makna instruksi, angka, soal, dan urutan kegiatan; jangan menambahkan kunci di lembar murid. Beri area identitas kosong, petunjuk, stimulus, nomor soal, ruang jawaban cukup, dan refleksi. Prioritaskan keterbacaan cetak dan kontras; untuk hitam putih gunakan garis jelas tanpa latar abu-abu boros tinta. Ukuran A4 potret 2480×3508 px atau lanskap 3508×2480 px pada 300 dpi. Jangan mengecilkan tulisan agar materi panjang dipaksa muat: jika tidak layak satu halaman, jelaskan dan minta pilihan bagian prioritas sebelum menyusun versi final. Pisahkan: (1) rencana tata letak, (2) satu prompt gambar lengkap, (3) naskah teks persis, (4) checklist pengecekan guru. Ingatkan bahwa AI gambar dapat salah mengeja; cek huruf, angka, isi, dan ruang tulis sebelum dicetak. Jika teks tidak akurat, gunakan gambar latar tanpa teks dan tambahkan teks editable di Canva. Jangan mengklaim gambar sudah dibuat.`}},"./perencanaan/lkpd.json":{id:"lkpd",title:"LKPD",group:"Pembelajaran",source:"7 LKPD RPP.docx",description:"Turunkan aktivitas RPP menjadi lembar kerja peserta didik.",needs:["Modul Ajar/RPP final.","Perangkat asesmen RPP.","Buku/BSE, serta template LKPD jika tersedia."],fields:[],note:"",original:`Kamu adalah Learning Worksheet Designer dan Guru Praktisi yang memahami desain pembelajaran, Pembelajaran Mendalam, asesmen pembelajaran, diferensiasi, serta karakteristik mata pelajaran dan jenjang yang sedang dikembangkan.
Tugasmu adalah membuat LKPD (Lembar Kerja Peserta Didik) yang siap digunakan, sebagai turunan langsung dari:
Modul Ajar/RPP hasil Prompt 5;
perangkat asesmen hasil Prompt 6;
Tujuan Pembelajaran;
aktivitas pembelajaran;
bukti belajar yang telah ditetapkan.
LKPD harus membantu murid:
mengetahui apa yang harus dilakukan;
melakukan aktivitas belajar;
mencatat atau menghasilkan bukti belajar;
menggunakan informasi/data/sumber;
berpikir dan mengambil keputusan;
menerima umpan balik jika direncanakan;
memperbaiki hasil;
melakukan refleksi.
LKPD bukan RPP.
LKPD bukan ringkasan materi.
LKPD bukan buku teks.
LKPD bukan kumpulan soal yang terpisah dari pembelajaran.
LKPD tidak boleh merancang ulang aktivitas pembelajaran.
Gunakan prinsip:
RPP → Aktivitas Murid → Tugas Murid → LKPD → Bukti Belajar → Asesmen → Umpan Balik → Perbaikan

A. SUMBER DATA
Gunakan sumber berikut dengan urutan prioritas:
Modul Ajar/RPP hasil Prompt 5
Perangkat Asesmen hasil Prompt 6
Data Kendali Modul
Tujuan Pembelajaran dan KKTP
Aktivitas setiap pertemuan
Gambaran Memahami–Mengaplikasi–Merefleksi
Bukti belajar yang direncanakan
Instrumen/rubrik yang relevan
Diferensiasi yang direncanakan
Buku/BSE/Panduan Guru yang sebelumnya digunakan
Template LKPD jika saya lampirkan
Jangan meminta guru mengisi ulang data yang sudah tersedia dalam percakapan.
Jika terdapat perbedaan data, gunakan urutan prioritas di atas.
Jika konflik tidak dapat diselesaikan tanpa mengubah data utama, tuliskan:
PERLU VERIFIKASI GURU
Jangan menyelesaikan konflik dengan asumsi.

B. PRINSIP UTAMA — LKPD HARUS TURUNAN RPP
Setiap aktivitas utama dalam LKPD harus mempunyai dasar yang jelas dalam Modul Ajar/RPP.
Gunakan pola:
Aktivitas dalam RPP
↓
Apa yang harus dilakukan murid
↓
Bagian LKPD yang diperlukan
↓
Bukti belajar yang dihasilkan
Contoh:
Jika RPP menyatakan:
Murid membaca dua teks dan membandingkan informasi yang disampaikan.
Maka LKPD dapat menyediakan:
ruang mencatat informasi dari Teks A;
ruang mencatat informasi dari Teks B;
tabel perbandingan;
pertanyaan untuk menjelaskan persamaan/perbedaan;
ruang menyusun kesimpulan.
Jangan menambahkan aktivitas lain yang tidak terdapat dalam RPP.

C. TIDAK SEMUA AKTIVITAS RPP HARUS MASUK LKPD
Masukkan ke LKPD hanya aktivitas yang memang membutuhkan murid:
menulis;
mencatat;
mengidentifikasi;
mengklasifikasikan;
membandingkan;
menghitung;
mengolah informasi;
menganalisis;
memberikan alasan;
menyelesaikan masalah;
membuat keputusan;
merancang;
menghasilkan karya;
mencatat hasil praktik;
memberikan umpan balik;
memperbaiki;
atau merefleksi.
Tidak perlu memasukkan aktivitas seperti:
salam;
presensi;
guru menyampaikan tujuan;
guru menjelaskan;
guru memberikan motivasi;
kecuali murid memang harus memberikan respons atau menghasilkan bukti dari aktivitas tersebut.
Prinsip:
RPP = keseluruhan skenario pembelajaran.
LKPD = alat kerja murid di dalam skenario tersebut.

D. HUBUNGAN DENGAN TUJUAN PEMBELAJARAN
Gunakan TP yang sudah ditetapkan pada Modul Ajar/RPP.
Jangan:
membuat TP baru;
mengubah kode TP;
mengubah redaksi TP;
mengurangi tuntutan TP;
menambah tuntutan di luar TP.
Setiap bagian penting LKPD harus dapat ditelusuri melalui:
TP → Aktivitas RPP → Tugas LKPD → Bukti Belajar → Asesmen
Jangan membuat pertanyaan atau tugas hanya karena terlihat menarik.

E. HUBUNGAN DENGAN ASESMEN PROMPT 6
Gunakan perangkat asesmen Prompt 6 untuk memastikan bahwa LKPD menyediakan tempat bagi murid menghasilkan bukti yang benar-benar akan dinilai.
Contoh:
Jika asesmen menilai:
kemampuan membandingkan dua informasi dan menjelaskan perbedaannya,
maka LKPD harus menyediakan:
informasi yang akan dibandingkan;
ruang mencatat persamaan;
ruang mencatat perbedaan;
ruang memberikan alasan/kesimpulan.
Jika asesmen menilai:
penyelesaian masalah matematika disertai strategi,
maka LKPD harus menyediakan ruang untuk:
informasi yang diketahui;
apa yang ditanyakan;
strategi/cara;
proses penyelesaian;
jawaban;
pemeriksaan atau alasan.
Jika asesmen menilai:
kualitas tulisan,
maka LKPD harus menyediakan:
perencanaan tulisan jika terdapat dalam RPP;
ruang draf;
checklist/kriteria yang memang digunakan;
umpan balik;
ruang revisi jika revisi terdapat dalam pembelajaran.
Jangan membuat bagian LKPD yang menghasilkan bukti yang tidak pernah digunakan dalam pembelajaran atau asesmen.

F. PEMBELAJARAN MENDALAM
LKPD harus mendukung pengalaman belajar:
Memahami → Mengaplikasi → Merefleksi
sesuai RPP.
Tidak harus setiap LKPD memiliki tiga bagian dengan ukuran yang sama.
Memahami
LKPD dapat membantu murid:
mengamati;
membaca;
menyimak;
memirsa;
mengidentifikasi;
mengelompokkan;
menemukan informasi;
menghubungkan informasi;
membandingkan;
membangun pemahaman.
Mengaplikasi
LKPD dapat membantu murid:
menggunakan konsep;
menyelesaikan masalah;
menganalisis;
menginterpretasikan;
membuat keputusan;
menulis;
mempraktikkan;
merancang;
menghasilkan karya;
mengomunikasikan hasil.
Merefleksi
LKPD dapat membantu murid:
memeriksa hasil;
membandingkan hasil dengan kriteria;
menilai strategi;
menggunakan umpan balik;
memperbaiki;
menjelaskan perkembangan;
menentukan langkah berikutnya.
Jangan sekadar menuliskan label Memahami, Mengaplikasi, Merefleksi tanpa tugas nyata.

G. PRINSIP BERKESADARAN, BERMAKNA, DAN MENGGEMBIRAKAN
LKPD harus mendukung tiga prinsip Pembelajaran Mendalam melalui desain tugas.
Berkesadaran
Murid mengetahui:
TP yang sedang dicapai;
apa yang harus dilakukan;
bukti apa yang perlu dihasilkan;
bagaimana memeriksa pekerjaannya.
Bermakna
Jika sesuai RPP, gunakan:
teks;
masalah;
kasus;
situasi;
fenomena;
data;
pengalaman;
konteks kehidupan;
yang relevan dengan materi.
Menggembirakan
Desain LKPD:
jelas;
tidak terlalu padat;
memberi ruang berpikir;
memungkinkan eksplorasi;
memberi pilihan jika memang direncanakan;
memberi kesempatan melihat perkembangan hasil.
Menggembirakan tidak harus berarti permainan atau dekorasi berlebihan.

H. STRUKTUR LKPD
Jangan menggunakan struktur baku yang sama untuk semua mata pelajaran.
Pilih bagian sesuai aktivitas RPP.
LKPD dapat memuat jika relevan:
Identitas
Judul kegiatan
Tujuan Pembelajaran
Petunjuk
Stimulus/konteks
Pertanyaan awal
Informasi/sumber yang digunakan
Ruang identifikasi
Tabel pengamatan
Tabel perbandingan
Ruang perhitungan
Analisis
Penyelesaian masalah
Penyusunan alasan
Pengambilan keputusan
Perencanaan karya/tulisan
Draf/hasil kerja
Umpan balik
Revisi
Kesimpulan
Refleksi
Tidak semua bagian harus digunakan.
Gunakan hanya bagian yang dibutuhkan untuk aktivitas nyata dalam RPP.

I. PENYESUAIAN DENGAN KARAKTERISTIK MATA PELAJARAN
Jangan membuat semua LKPD bernuansa projek atau penyelidikan.
Sesuaikan bentuk LKPD dengan mata pelajaran.
Bahasa Indonesia
LKPD dapat memfasilitasi:
membaca/memirsa;
menemukan informasi;
mengidentifikasi struktur;
menganalisis teks;
membandingkan teks;
menyusun gagasan;
menulis;
memberi tanggapan;
revisi tulisan.
Matematika
LKPD dapat memfasilitasi:
mengamati pola;
menggunakan representasi;
membuat tabel;
menghitung;
membandingkan strategi;
menyelesaikan masalah;
menjelaskan alasan;
memeriksa kewajaran hasil;
refleksi strategi.
IPA
Jika sesuai RPP:
observasi;
klasifikasi;
data;
pengukuran;
interpretasi;
penyelidikan;
hubungan konsep dengan fenomena.
Jangan otomatis membuat eksperimen.
IPS
LKPD dapat memfasilitasi:
membaca sumber;
mengolah informasi;
membandingkan data;
menganalisis fenomena sosial;
hubungan sebab-akibat;
interpretasi;
argumentasi.
Pendidikan Pancasila
Dapat memfasilitasi:
analisis kasus;
pertimbangan nilai;
argumentasi;
pengambilan keputusan;
refleksi.
Mata pelajaran lain
Sesuaikan sepenuhnya dengan TP, aktivitas, dan bentuk bukti dalam RPP.

J. PETUNJUK UNTUK MURID
Gunakan petunjuk yang:
singkat;
langsung;
berurutan;
mudah dipahami;
sesuai usia/jenjang;
menggunakan kata kerja operasional.
Contoh:
Bacalah kedua teks berikut.
Catat informasi utama dari masing-masing teks pada tabel.
Bandingkan kedua informasi tersebut.
Jelaskan alasanmu berdasarkan bukti dari teks.
Hindari petunjuk panjang yang mencampurkan banyak tugas sekaligus.

K. PERTANYAAN DAN TUGAS LKPD
Pertanyaan harus membantu murid melakukan proses berpikir yang dibutuhkan TP.
Pertanyaan dapat mendorong murid:
mengidentifikasi;
menjelaskan;
mengklasifikasikan;
membandingkan;
menghubungkan;
menerapkan;
menganalisis;
memberikan alasan;
menggunakan bukti;
mengambil keputusan;
mengevaluasi;
merefleksi.
Jangan membuat banyak pertanyaan yang mengulang kemampuan yang sama.
Utamakan sedikit pertanyaan tetapi bermakna.

L. DATA, TEKS, GAMBAR, DAN STIMULUS
Jika stimulus sudah terdapat dalam RPP, buku, atau sumber yang diberikan:
gunakan stimulus tersebut.
Jangan mengganti data/sumber tanpa alasan.
Jika RPP meminta murid memperoleh informasi sendiri, jangan mengisi hasilnya.
Sediakan ruang untuk diisi murid.
Jangan mengarang:
hasil pengamatan;
hasil pengukuran;
jawaban murid;
hasil diskusi;
data lapangan;
kesimpulan;
hasil karya.
Jika informasi memang harus dihasilkan murid, biarkan bagian tersebut kosong untuk dikerjakan.

M. NUMERASI
Jika aktivitas membutuhkan numerasi, berikan ruang yang sesuai untuk:
angka;
satuan;
operasi/perhitungan;
tabel;
representasi;
grafik;
interpretasi,
hanya jika dibutuhkan oleh RPP dan TP.
Jangan menambahkan perhitungan hanya agar LKPD terlihat kompleks.

N. LITERASI
Jika aktivitas membutuhkan membaca, menyimak, atau memirsa:
gunakan teks/sumber sesuai RPP;
beri tugas membaca yang jelas;
arahkan murid mencari informasi yang memang diperlukan;
sediakan ruang mencatat dan mengolah informasi.
Jangan menjadikan LKPD sebagai tempat menyalin materi panjang dari buku.

O. UMPAN BALIK DAN PERBAIKAN
Jika RPP dan asesmen menyediakan proses umpan balik dan revisi, LKPD harus menyediakan ruangnya.
Gunakan jika relevan:
Hasil/Draf Awal
[ruang kerja]
Umpan Balik
[ruang catatan guru/teman sesuai RPP]
Perbaikan/Revisi
[ruang kerja]
Apa yang Saya Perbaiki?
[ruang singkat]
Jangan membuat bagian revisi jika RPP tidak merencanakannya.

P. BEBERAPA PERTEMUAN
Jika satu modul terdiri atas beberapa pertemuan, struktur LKPD harus mengikuti alur pembelajaran.
Contoh:
Pertemuan 1
Membangun pemahaman/pekerjaan awal.
Pertemuan 2
Menggunakan hasil Pertemuan 1 untuk analisis atau penerapan.
Pertemuan 3
Mengembangkan, menyelesaikan, mengomunikasikan, memperbaiki, atau merefleksi sesuai RPP.
Gunakan transisi yang jelas:
Gunakan hasil kerja Pertemuan 1 untuk menyelesaikan bagian berikut.
Jangan membuat setiap pertemuan seperti tugas yang tidak saling berhubungan jika RPP menunjukkan kesinambungan.

Q. TIDAK SETIAP PERTEMUAN HARUS MEMILIKI LKPD
Ini penting.
Jika pada suatu pertemuan tidak ada aktivitas yang membutuhkan lembar kerja murid, jangan memaksakan membuat LKPD hanya agar setiap pertemuan memiliki lembar.
Satu LKPD dapat digunakan:
dalam satu pertemuan;
untuk beberapa pertemuan;
atau hanya pada tahap tertentu,
sesuai kebutuhan RPP.

R. INDIVIDU DAN KELOMPOK
Jika RPP menetapkan kerja kelompok, LKPD dapat menyediakan:
identitas kelompok;
pembagian tugas jika memang direncanakan;
hasil diskusi;
keputusan kelompok.
Jika asesmen membutuhkan bukti individu, sediakan bagian individual, misalnya:
jawaban pribadi;
alasan;
penyelesaian;
refleksi;
penjelasan singkat.
Jangan menganggap hasil kelompok sebagai bukti capaian semua individu.

S. DIFERENSIASI
Jika RPP menggunakan kategori:
Berkembang;
Cakap;
Mahir;
utamakan satu LKPD yang sama, lalu sediakan bantuan atau tantangan secara proporsional.
Contoh:
Bantuan
Pertanyaan penuntun atau contoh awal untuk murid yang memerlukannya.
Tantangan
Tugas pengembangan untuk murid yang siap, seperti:
membandingkan strategi;
memberikan alasan lebih mendalam;
menggunakan konteks baru;
mengevaluasi alternatif.
Jangan otomatis membuat tiga LKPD berbeda.

T. REFLEKSI
Jika RPP memuat refleksi, sediakan ruang singkat.
Pertanyaan harus terkait pengalaman nyata murid.
Contoh:
Apa pemahaman penting yang saya peroleh?
Bukti apa yang menunjukkan bahwa saya sudah memahami/mampu melakukan hal tersebut?
Bagian apa yang masih sulit?
Umpan balik apa yang saya gunakan?
Apa yang perlu saya lakukan selanjutnya?
Gunakan hanya pertanyaan yang relevan.
Jangan membuat refleksi terlalu panjang.

U. HUBUNGAN DENGAN DIMENSI PROFIL LULUSAN
Dimensi dan Subdimensi Profil Lulusan telah ditetapkan dalam RPP.
LKPD tidak perlu menambahkan tugas khusus untuk Dimensi Profil Lulusan jika tidak diperlukan.
Penguatan dimensi harus muncul secara alami melalui tugas yang memang dirancang.
Misalnya, jika aktivitas membutuhkan:
analisis alasan → dapat mendukung Penalaran Kritis;
pertukaran gagasan → dapat mendukung Komunikasi;
kerja bersama → dapat mendukung Kolaborasi.
Jangan menambahkan pertanyaan hanya untuk “membuktikan” semua dimensi.

V. BAHASA DAN TAMPILAN
Gunakan bahasa:
formal tetapi komunikatif;
sederhana;
jelas;
sesuai jenjang murid;
tidak terlalu akademis;
tidak kekanak-kanakan.
Utamakan:
instruksi singkat;
tabel yang jelas;
ruang kerja cukup;
hierarki bagian yang mudah dipahami.
Jangan memenuhi LKPD dengan paragraf teori.
Jika murid membutuhkan materi singkat untuk menyelesaikan tugas, gunakan informasi esensial secukupnya, bukan menyalin satu bab materi.

W. BEBAN KERJA MURID
Sesuaikan LKPD dengan:
jumlah pertemuan;
JP;
tingkat kompleksitas TP;
aktivitas RPP;
usia/jenjang;
bukti yang benar-benar diperlukan.
Jangan membuat terlalu banyak:
pertanyaan;
tabel;
tulisan panjang;
tugas pengulangan;
perhitungan;
refleksi.
Prioritaskan pekerjaan yang benar-benar menghasilkan bukti belajar.

X. ANTI-HALUSINASI
Dilarang:
membuat TP baru;
mengubah TP;
mengubah KKTP;
membuat aktivitas pembelajaran baru;
mengubah model pembelajaran;
mengubah sintaks;
mengubah jumlah pertemuan;
mengubah JP;
membuat asesmen baru yang bertentangan dengan Prompt 6;
membuat data seolah-olah hasil kerja murid;
membuat jawaban murid;
membuat hasil pengamatan;
membuat hasil pengukuran;
membuat fasilitas sekolah;
membuat aplikasi/perangkat seolah-olah tersedia;
membuat kondisi sekolah sebagai fakta;
membuat hasil asesmen;
menambah tugas hanya agar LKPD terlihat lengkap.
Jika informasi harus dihasilkan oleh murid:
SEDIAKAN RUANG UNTUK DIISI.
Jika data belum tersedia dan memang diperlukan, tuliskan:
DATA DIISI BERDASARKAN HASIL KEGIATAN MURID.

Y. QUALITY CHECK
Sebelum membuat dokumen final, lakukan pemeriksaan internal.
1. TP
Apakah setiap bagian penting LKPD mendukung TP?
2. RPP
Apakah seluruh aktivitas LKPD berasal dari Modul Ajar/RPP?
3. Bukti
Apakah tugas menghasilkan bukti yang dapat diamati?
4. Asesmen
Apakah bukti tersebut sesuai dengan perangkat asesmen Prompt 6?
5. Keterlacakan
Apakah:
TP → Aktivitas RPP → LKPD → Bukti → Asesmen
dapat ditelusuri?
6. Waktu
Apakah jumlah tugas realistis terhadap JP?
7. Keterbacaan
Apakah murid dapat memahami apa yang harus dilakukan tanpa penjelasan yang berlebihan?
8. Ruang Kerja
Apakah ruang jawaban/tabel cukup?
9. Diferensiasi
Apakah bantuan/tantangan realistis jika memang digunakan?
10. Feedback
Jika RPP memuat revisi, apakah LKPD menyediakan ruang perbaikan?
11. Beban
Apakah LKPD tidak terlalu berat?
12. Anti-halusinasi
Apakah tidak ada data, hasil, fasilitas, atau aktivitas yang dibuat-buat?
Jika ditemukan masalah, perbaiki sebelum menghasilkan dokumen.

Z. STRUKTUR DOKUMEN
Gunakan struktur sesuai kebutuhan aktivitas.
Secara umum dapat menggunakan:
IDENTITAS LKPD
Mata Pelajaran: [...]
Fase/Kelas: [...]
Modul: [...]
Pertemuan: [...] jika relevan
Nama: [...]
Kelompok: [...] jika relevan
TUJUAN PEMBELAJARAN
[TP yang relevan]
PETUNJUK
[petunjuk ringkas]
KEGIATAN
Susun aktivitas sesuai alur RPP.
Jika relevan:
Memahami
[...]
Mengaplikasi
[...]
Merefleksi
[...]
Namun jangan memaksakan heading tersebut jika struktur RPP lebih baik diterjemahkan dengan judul aktivitas yang lebih alami.
UMPAN BALIK DAN PERBAIKAN
[Jika terdapat dalam RPP]
REFLEKSI
[Jika relevan]

AA. FORMAT DOKUMEN
Jika saya melampirkan template LKPD:
gunakan template tersebut sebagai MASTER FORMAT.
Pertahankan:
ukuran halaman;
orientasi;
margin;
heading;
tabel;
gaya dasar;
urutan bagian utama.
Jangan mendesain ulang tanpa kebutuhan.
Jika tidak ada template, buat desain yang:
sederhana;
bersih;
mudah dicetak;
memiliki ruang jawaban cukup;
menggunakan tabel Word yang sebenarnya;
tidak terlalu padat.

AB. HASIL AKHIR
Buat 1 file Microsoft Word .docx untuk satu modul.
Jika satu modul membutuhkan beberapa lembar kerja untuk beberapa pertemuan, satukan dalam satu dokumen LKPD Modul, dengan pembagian pertemuan yang jelas.
Jika hanya beberapa pertemuan yang membutuhkan LKPD, buat hanya bagian yang diperlukan.
Nama file:
LKPD_[Kode Modul]_[Nama Modul].docx
Dokumen harus:
siap dicetak;
siap dibagikan kepada murid;
mempunyai instruksi yang jelas;
menyediakan ruang kerja yang cukup;
selaras dengan RPP Prompt 5;
selaras dengan asesmen Prompt 6;
menghasilkan bukti belajar yang memang dibutuhkan.
Jangan tampilkan proses analisis.
Langsung hasilkan dokumen LKPD final.
`,rules:[],order:10,version:1,category:"perencanaan"},"./perencanaan/promes.json":{id:"promes",title:"Program Semester (Prosem)",group:"Perencanaan",source:"5. PROMES.docx",description:"Tempatkan alokasi modul pada bulan dan minggu efektif.",needs:["Program Tahunan final.","Kalender pendidikan yang sesuai tahun pelajaran dan daerah."],fields:[{id:"tahun",label:"Tahun pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: 2026/2027"},{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: Matematika"},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0,placeholder:"Contoh: VII"},{id:"semester",label:"Semester",type:"select",required:!0,shared:!0,options:["1","2"]},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F","Tidak berlaku"]},{id:"jp",label:"JP per minggu",type:"number",required:!0,shared:!0,min:1}],note:"Tabel tahun 2026–2027 dan materi IPA tetap dipertahankan sebagai contoh dalam naskah asli, bukan data kelas Anda. Gunakan Prota dan kalender pendidikan sebagai sumber.",original:`Selanjutnya buatkan Program Semester.
Buat hasil akhir dalam satu file Microsoft Word .docx dengan ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya;
tabel menyesuaikan lebar halaman;
gunakan bahasa Indonesia formal, jelas, dan ringkas.
Dalam prompt ini, tanda | digunakan sebagai pemisah kolom tabel.
Contoh:
Bulan | Minggu 1 | Minggu 2 | Minggu 3 | Minggu 4
Dalam file Word, ubah format tersebut menjadi tabel Word yang sebenarnya.
==================================================
A. PERAN DAN TUGAS
==================================================
Kamu adalah Curriculum Planning Architect yang bertugas menyusun Program Semester berdasarkan Program Tahunan dan kalender pendidikan.
Tugas kamu adalah:
menempatkan setiap modul ke bulan dan minggu efektif;
membagikan JP modul ke minggu yang tersedia;
memastikan total JP setiap modul sesuai Prota;
menghitung jam efektif, jam cadangan, dan total JP semester;
membuat tabel Promes yang siap digunakan.
Jangan:
mengubah kode modul;
mengubah judul modul;
mengubah kode atau rumusan TP;
mengubah alokasi JP modul;
membuat atau menghapus modul;
memindahkan modul ke semester lain;
menulis kegiatan pembelajaran;
membuat asesmen.
==================================================
B. INPUT dari hasil percakapan dan file sebelumnya ditambah dengan file kalender pendidikan yang saya kirim
==================================================
C. ATURAN PENYUSUNAN
==================================================
Gunakan seluruh modul dari Prota.
Urutkan modul sesuai urutan Prota.
Distribusikan JP modul ke minggu efektif secara berurutan.
Isi setiap minggu sesuai jumlah JP per minggu.
Contoh:
Jika alokasi waktu 4 JP per minggu, isi minggu efektif dengan angka 4.
Jika satu modul memiliki 12 JP dan alokasi per minggu 4 JP, tempatkan modul tersebut pada tiga minggu efektif.
Jangan menempatkan JP pada minggu libur atau tidak efektif.
Jangan mengubah total JP modul.
Jika satu modul selesai di tengah minggu dan pola pertemuan memungkinkan, modul berikutnya dapat dimulai pada sisa JP minggu tersebut.
Jam cadangan dihitung dengan rumus:
Jam Cadangan = Total JP Tersedia − Total JP Modul
Jika seluruh modul tidak tertampung, beri catatan bahwa alokasi perlu ditinjau kembali.
==================================================
E. STRUKTUR OUTPUT
==================================================
Tuliskan judul:
PROGRAM SEMESTER
Tampilkan identitas:
Tahun Pelajaran:
Mata Pelajaran:
Kelas/Semester:
Fase:
Alokasi Waktu: ... JP/Minggu
Tabel Program Semester
Gunakan format matriks.
Kolom awal:

|Bab (Materi Pokok)| Jumlah JP | Kemudian tambahkan kolom bulan dan minggu sesuai semester.
Contoh Semester 1:
MATERI POKOK
A. WAKTU
JULI 2026
AGUST 2026
SEPT 2026
OKT 2026
NOV 2026
DES 2026
KET


1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5

Hakikat Ilmu Sains dan Metode Ilmiah
20
 
 
4
4
 
4
4
4
 
 

 
 
ASTS 1
 
 
 
 
 
 
 
 
 
 
 
ASAS 1 2026 - 2027
 
 
 
 
 
Zat dan Perubahannya
20
 
 
 
 
 
 
 
 
4
4
4
4
4

 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
Suhu, Kalor dan Pemuaian
16
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4
4
4
4
 
 
 
 
 
 

 
 
 
 
 
Gerak dan Gaya
12
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4
4
4
 
 
 

 
 
 
 
 
Cadangan
2
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
 
 

 
 
 
 
 
JUMLAH JAM PELAJARAN
70
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

Contoh Semester 2:
MATERI POKOK
A. WAKTU
Januari 2027
Februari 2027
Maret 2027
April 2027
Mei 2027
Juni 2027
KET


1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5
1
2
3
4
5

Hakikat Ilmu Sains dan Metode Ilmiah
20
 
 
4
4
 
4
4
4
 
 

 
 
ASTS 1
 
 
 
 
 
 
 
 
 
 
 
ASAS 1 2026 - 2027
 
 
 
 
 
Zat dan Perubahannya
20
 
 
 
 
 
 
 
 
4
4
4
4
4

 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
Suhu, Kalor dan Pemuaian
16
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4
4
4
4
 
 
 
 
 
 

 
 
 
 
 
Gerak dan Gaya
12
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4
4
4
 
 
 

 
 
 
 
 
Cadangan
2
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
 
 

 
 
 
 
 
JUMLAH JAM PELAJARAN
70
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

Ketentuan:
Buat satu baris untuk setiap modul.
Isi kolom minggu dengan jumlah JP.
Kosongkan minggu yang tidak digunakan.
Tandai minggu tidak efektif jika diperlukan.
Jangan menulis kegiatan pembelajaran rinci.
Tambahkan di bagian bawah:
Jumlah Jam Efektif
Jumlah Jam Cadangan
Jumlah Jam Total Semester
Format:
Komponen | Jumlah JP
Jumlah Jam Efektif | ... JP
Jumlah Jam Cadangan | ... JP
Jumlah Jam Total Semester | ... JP
Pastikan:
Jumlah Jam Efektif + Jumlah Jam Cadangan = Jumlah Jam Total Semester
==================================================
F. PEMERIKSAAN AKHIR
==================================================
Pastikan:
seluruh modul telah dimasukkan;
urutan modul sesuai Prota;
kode modul dan kode TP tidak berubah;
alokasi JP setiap modul sesuai Prota;
tidak ada JP pada minggu tidak efektif;
total JP mingguan tidak melebihi JP per minggu;
jumlah jam efektif sama dengan total JP seluruh modul;
jam efektif dan jam cadangan sama dengan total JP semester;
hasil hanya berisi identitas dan tabel Promes.
Gunakan nama file:
PROMES_[Mata Pelajaran][Kelas][Semester]_[Tahun Pelajaran].docx
`,rules:[{start:2444,end:2527,old:`Tahun Pelajaran:
Mata Pelajaran:
Kelas/Semester:
Fase:
Alokasi Waktu: ... JP/Minggu`,value:`Tahun Pelajaran: {{tahun}}
Mata Pelajaran: {{mapel}}
Kelas/Semester: {{kelas}}/{{semester}}
Fase: {{fase}}
Alokasi Waktu: {{jp}} JP/Minggu`}],order:5,version:1,category:"perencanaan"},"./perencanaan/prota.json":{id:"prota",title:"Program Tahunan",group:"Perencanaan",source:"4. PROTA.docx",description:"Susun seluruh modul dan rekap alokasi waktu selama satu tahun.",needs:["Pemetaan modul dan alokasi waktu final, termasuk pembagian semester."],fields:[{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: Matematika"},{id:"sekolah",label:"Satuan pendidikan",type:"text",required:!0,shared:!0,placeholder:"Nama sekolah"},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0,placeholder:"Contoh: VII"},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F","Tidak berlaku"]},{id:"tahun",label:"Tahun pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: 2026/2027"},{id:"jp",label:"JP per minggu",type:"number",required:!0,shared:!0,min:1}],note:"Naskah sumber memuat arahan membagi semester sekaligus larangan memindahkan modul. Siapkan pembagian semester final pada sumber.",original:`Selanjutnya buatkan Program Tahunan.
Buat hasil akhir dalam satu file Microsoft Word .docx dengan ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya;
tabel menyesuaikan lebar halaman;
gunakan bahasa Indonesia formal, jelas, dan ringkas.
Dalam prompt ini, tanda | digunakan sebagai pemisah kolom tabel.
Contoh:
Semester | Kode Modul | Judul Modul | Kode TP | Alokasi Waktu
Dalam file Word, ubah format tersebut menjadi tabel Word yang sebenarnya.
==================================================
A. PERAN DAN TUGAS
==================================================
Kamu adalah Curriculum Planning Architect yang bertugas menyusun Program Tahunan berdasarkan hasil Pemetaan Modul dan Alokasi Waktu yang telah disahkan.
Tugas kamu adalah:
menampilkan seluruh modul selama satu tahun;
membagi modul ke Semester 1 dan Semester 2;
menampilkan Bab dan Lingkup Materi/Subbab;
menampilkan TP yang dicakup setiap modul;
menampilkan alokasi JP setiap modul;
menghitung total JP setiap semester dan satu tahun.
Jangan:
mengubah kode modul;
mengubah judul modul;
mengubah kode atau rumusan TP;
mengubah alokasi JP;
membuat modul baru;
menghapus atau menggabungkan modul;
memindahkan modul ke semester lain;
membagi modul ke bulan atau minggu;
menulis kegiatan pembelajaran;
membuat asesmen.
==================================================
B. ATURAN PENYUSUNAN
==================================================
Gunakan seluruh modul yang telah disahkan.
Pisahkan modul berdasarkan Semester 1 dan Semester 2.
Urutkan modul sesuai urutan ATP.
Gunakan satu baris untuk setiap modul.
Jika satu modul mencakup beberapa TP, tuliskan seluruh kode TP secara berurutan.
Alokasi waktu ditulis dalam satuan JP.
Hitung total JP Semester 1.
Hitung total JP Semester 2.
Hitung total JP satu tahun.
Jangan membagi JP ke bulan atau minggu karena pembagian tersebut dilakukan dalam Promes.
==================================================
E. STRUKTUR OUTPUT
==================================================
Tuliskan judul:
PROGRAM TAHUNAN
Kemudian tampilkan identitas:
Mata Pelajaran:
Satuan Pendidikan:
Kelas/Fase:
Tahun Pelajaran:
Alokasi Waktu: ... JP/Minggu
Tabel Program Tahunan
Format:
Semester 1
No. | Kode Modul | Lingkup Materi/Subbab | Kode TP yang Dicakup | Alokasi Waktu

Semester 2
No. | Kode Modul | Lingkup Materi/Subbab | Kode TP yang Dicakup | Alokasi Waktu

Ketentuan:
Buat satu baris untuk setiap modul.
Gunakan kode modul dan kode TP persis seperti data sumber.
Jangan menuliskan uraian kegiatan pembelajaran.
Jangan menambahkan bulan, minggu, atau tanggal.

Rekapitulasi
Format:
Komponen | Semester 1 | Semester 2 | Total Satu Tahun
Komponen yang ditampilkan:
Jumlah Bab
Jumlah Modul
Jumlah TP
Total Alokasi JP
Pastikan:
Total JP Satu Tahun = Total JP Semester 1 + Total JP Semester 2
==================================================
F. PEMERIKSAAN AKHIR
==================================================
Pastikan:
seluruh modul telah dimasukkan;
tidak ada modul baru;
tidak ada modul yang dihapus;
kode modul tidak berubah;
judul modul tidak berubah;
kode TP tidak berubah;
alokasi JP sesuai dokumen sebelumnya;
pembagian semester tidak berubah;
total JP dihitung dengan benar;
output hanya memuat identitas, tabel Prota, dan rekapitulasi.
Gunakan nama file:
PROTA_[Mata Pelajaran][Kelas][Satuan Pendidikan]_[Tahun Pelajaran].docx
Berikan file Word hasil akhir setelah selesai.
Format ini sudah menyesuaikan contoh lama: bagian Kompetensi Dasar diganti menjadi Modul, Bab, Subbab, dan TP, sedangkan fungsi utamanya tetap sama, yaitu menampilkan distribusi program dan alokasi waktu Semester 1 serta Semester 2 selama satu tahun.
`,rules:[{start:2088,end:2180,old:`Mata Pelajaran:
Satuan Pendidikan:
Kelas/Fase:
Tahun Pelajaran:
Alokasi Waktu: ... JP/Minggu`,value:`Mata Pelajaran: {{mapel}}
Satuan Pendidikan: {{sekolah}}
Kelas/Fase: {{kelas}}/{{fase}}
Tahun Pelajaran: {{tahun}}
Alokasi Waktu: {{jp}} JP/Minggu`}],order:4,version:1,category:"perencanaan"},"./perencanaan/rpp.json":{id:"rpp",title:"Modul Ajar / RPP",group:"Pembelajaran",source:"5 MODUL AJAR-ADA ISIAN.docx",description:"Susun satu modul operasional berdasarkan data kendali yang sudah dipilih.",needs:["Template RPP (unduh di bawah).","Data kendali modul, gambaran aktivitas dan gambaran asesmen final.","Buku/BSE sumber."],fields:[{id:"jenjang",label:"Jenjang",type:"select",required:!0,shared:!0,options:["PAUD","SD/MI","SMP/MTs","SMA/MA","SMK/MAK","Pendidikan Khusus / Kesetaraan"]},{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0,placeholder:"Contoh: Matematika"},{id:"fase",label:"Fase",type:"select",required:!0,shared:!0,options:["Fondasi","A","B","C","D","E","F","Tidak berlaku"]},{id:"kelas",label:"Kelas",type:"text",required:!0,shared:!0,placeholder:"Contoh: VII"},{id:"modul",label:"Nama modul",type:"text",required:!0},{id:"bab",label:"Nama bab",type:"text",required:!0},{id:"lingkup",label:"Lingkup materi / subbab",type:"textarea",required:!0,help:""},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,help:"Tempel kode dan rumusan TP final secara lengkap."},{id:"alokasi",label:"Alokasi waktu modul (JP)",type:"number",required:!0,min:1},{id:"pertemuan",label:"Jumlah pertemuan",type:"number",required:!0,min:1},{id:"jpsesi",label:"JP per pertemuan",type:"text",required:!0,placeholder:"Contoh: 2 JP atau 3 JP"},{id:"dimensions",label:"Dimensi dan subdimensi pilihan",type:"dimensions",required:!0,help:"Pilih fase dan jenjang terlebih dahulu. Uraian Berkembang, Cakap, Mahir mengikuti jenjang pada KEPKA BSKAP 058/H/KR/2025.",reference:"profil-058"},{id:"pedagogis",label:"Praktik pedagogis",type:"textarea",required:!0,help:""},{id:"mitra",label:"Kemitraan pembelajaran",type:"textarea",required:!0,help:"Jika tidak diperlukan, tuliskan “Tidak memerlukan kemitraan khusus”."},{id:"lingkungan",label:"Lingkungan pembelajaran",type:"textarea",required:!0,help:""},{id:"digital",label:"Pemanfaatan digital",type:"textarea",required:!0,help:"Jika tidak diperlukan, tuliskan “Tidak diperlukan”."},{id:"aktivitas",label:"Gambaran aktivitas",type:"textarea",required:!0,help:"Tempel bagian Memahami, Mengaplikasi, dan Merefleksi dari hasil sebelumnya."},{id:"asesmen",label:"Gambaran asesmen",type:"textarea",required:!0,help:"Tempel asesmen awal, proses, dan akhir dari hasil sebelumnya."}],note:"Template RPP asli memuat fase D dan contoh durasi 40 menit. Periksa penyesuaiannya untuk jenjang Anda pada hasil AI; berkas sumber tetap dipertahankan.",original:`

Kamu adalah Learning Design Architect dan Guru Praktisi yang memahami perencanaan pembelajaran, Pembelajaran Mendalam, asesmen pembelajaran, diferensiasi, serta karakteristik mata pelajaran dan jenjang yang sedang dikembangkan.
Tugasmu adalah menyusun 1 Modul Ajar/RPP yang siap digunakan guru untuk melaksanakan pembelajaran, bukan sekadar memenuhi administrasi.
Modul harus:
operasional;
realistis;
kontekstual;
berpusat pada murid;
selaras dengan Tujuan Pembelajaran;
sesuai karakteristik mata pelajaran;
menerapkan Pembelajaran Mendalam;
memiliki alur antarpertemuan yang jelas;
menggunakan asesmen yang telah direncanakan;
menunjukkan apa yang dilakukan murid dan guru;
menunjukkan bukti belajar, umpan balik, scaffolding, dan tindak lanjut.
Prinsip utama:
Murid adalah pelaku utama pembelajaran. Guru berperan sebagai perancang, fasilitator, pemberi scaffolding, pengarah, pengamat, dan pemberi umpan balik.
Langkah pembelajaran harus menggambarkan interaksi guru–murid secara konkret, bukan hanya daftar aktivitas.

A. TEMPLATE
Saya melampirkan template Modul Ajar/RPP.
Gunakan template tersebut sebagai MASTER FORMAT DOKUMEN.
Wajib:
mempertahankan struktur template;
mempertahankan urutan bagian;
mempertahankan heading;
mempertahankan tabel;
mempertahankan format dasar;
mengisi bagian yang tersedia sesuai kebutuhan modul.
Jangan:
mendesain ulang template;
membuat template baru;
menghapus bagian template;
mengubah urutan utama;
menambahkan banyak bagian baru yang tidak diperlukan.
Template menentukan bentuk dokumen. Prompt ini menentukan kualitas isinya.

B. DATA KENDALI MODUL
Gunakan data berikut sebagai DATA KENDALI UTAMA.
Komponen
Data Kendali
Mata Pelajaran
Bahasa Indonesia
Fase/Kelas
D/IX
Nama Modul
Pemahaman Puisi Rakyat (Pantun)
Nama Bab
Bab II Belajar Berpantun
Lingkup Materi
Menemukan Ciri-Ciri Pantun
Penggunaan Pantun dalam Kehidupan Sehari-hari
Tujuan Pembelajaran (TP)
TP2.1 — Peserta didik mampu menganalisis unsur intrinsik dan ciri-ciri teks puisi rakyat (pantun) yang didengarkan.

TP2.2 — Peserta didik mampu menganalisis makna tersurat dan tersirat serta menginterpretasi ungkapan kepedulian dari teks pantun, syair, dan gurindam yang dibaca.
Alokasi Waktu Modul
20 JP
Jumlah Pertemuan
8 Pertemuan
Jumlah JP per Pertemuan
2 JP atau 3 JP
Dimensi Profil Lulusan Pilihan
3. Dimensi Penalaran Kritis
No
Subdimensi
Berkembang
Cakap
Mahir
1
Penyampaian Argumentasi
Menyampaikan argumen logis secara runtut disertai alasan sederhana.
Menyampaikan argumen logis secara runtut disertai alasan yang kuat.
Menyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain.
2
Pengambilan Keputusan
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan dengan bimbingan.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan.
3
Penyelesaian Masalah
Menyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri.

8. Dimensi Komunikasi
No
Subdimensi
Berkembang
Cakap
Mahir
1
Menyimak
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
2
Berbicara
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif.
3
Membaca
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
4
Menulis
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif.

Praktik Pedagogis
Pembelajaran Berbasis Teks, Pembelajaran Kontekstual.

Kemitraan Pembelajaran
Tidak memerlukan kemitraan khusus (antarmurid dalam diskusi kelompok).

Lingkungan Pembelajaran
Ruang kelas 

Pemanfaatan Digital
Pemutar audio untuk memperdengarkan contoh pantun lisan (opsional).

Gambaran Aktivitas
1. Memahami
Murid menyimak pembacaan pantun oleh guru atau dari media audio, kemudian mengidentifikasi ciri-ciri fisik (jumlah baris, suku kata, rima) dan unsur intrinsik (sampiran dan isi). Murid berlatih membedakan bentuk pantun dengan puisi rakyat lainnya. Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
2. Mengaplikasi
Murid membaca teks kumpulan pantun, syair, dan gurindam. Murid secara berkelompok menganalisis dan menginterpretasi makna tersurat dan pesan moral (tersirat) berupa ungkapan kepedulian yang terkandung dalam karya-karya tersebut. Bukti belajar: Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
3. Merefleksi
Murid mengidentifikasi kesulitan dalam menafsirkan kata-kata kiasan kuno khas puisi rakyat. Murid menyimpulkan daya tarik dan relevansi pesan moral (syair, pantun, gurindam) jika diterapkan pada komunikasi anak muda di era saat ini.

Gambaran Asesmen
1. Asesmen Awal
Tujuan:
Mengetahui ingatan dan pemahaman prasyarat murid mengenai pola rima dan persajakan dasar.
Bentuk/teknik:
Kuis lisan (melengkapi baris).
Gambaran asesmen:
Guru membacakan 2 baris sampiran, murid diminta secara acak menebak atau menyahut dengan baris isi yang rimanya sesuai.
Informasi yang diperoleh dan tindak lanjut:
Murid yang sudah terbiasa dengan rima a-b-a-b dapat diarahkan untuk langsung mengeksplorasi syair dan gurindam, sementara yang belum akan dibimbing lebih lanjut tentang suku kata dan rima pantun.
2. Asesmen pada Proses Pembelajaran
TP yang dipantau: TP2.1
Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
Teknik: Penugasan (lembar kerja analisis).
Instrumen yang diperlukan: Kunci jawaban / Lembar tugas.
Umpan balik/tindak lanjut: Memastikan pemahaman konseptual (mana sampiran, mana isi) sudah tuntas sebelum berpindah ke analisis makna yang lebih dalam.
3. Asesmen Akhir Pembelajaran
TP yang diukur: TP2.2
Bukti ketercapaian utama:
Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
Bentuk/teknik asesmen:
Penugasan tertulis (Tabel Analisis).
Instrumen yang diperlukan:
Pedoman penskoran kesesuaian interpretasi.
Individu/Kelompok:
Kelompok, disertai konfirmasi lisan dari guru secara acak untuk membuktikan pemahaman individu tiap anggota.




Model Pembelajaran Utama/Praktik Pedagogis
Jika guru sudah menentukan model pembelajaran, gunakan model tersebut dan jangan menggantinya.
Jika ditulis AI SESUAIKAN, pilih satu model pembelajaran utama yang paling sesuai dengan:
TP;
Gambaran Aktivitas;
karakteristik materi;
jumlah pertemuan;
praktik pedagogis yang telah ditentukan.
Jangan memilih model hanya karena populer.
Model harus benar-benar membantu mewujudkan aktivitas yang sudah dirancang.

C. ATURAN DATA
Data Kendali Modul adalah sumber kebenaran utama.
Jangan:
mengubah kode atau rumusan TP;
membuat TP baru;
menghapus TP;
mengubah pembagian modul;
mengubah jumlah pertemuan;
mengubah JP;
mengubah Gambaran Aktivitas menjadi kegiatan yang berbeda;
mengubah Gambaran Asesmen;
mengarang fasilitas;
mengarang alat atau bahan khusus;
mengarang aplikasi;
mengarang kondisi sekolah;
mengarang mitra atau lokasi.
Gunakan file sumber/BSE sebelumnya jika masih tersedia sebagai referensi materi, contoh, teks, konteks, dan aktivitas, tetapi jangan menggunakannya untuk mengubah Data Kendali.
Jika terdapat pertentangan data, Data Kendali Modul menjadi acuan utama.
Jika informasi tidak tersedia, gunakan keputusan pedagogis yang sederhana, netral, dan realistis.

D. IDENTIFIKASI KESIAPAN MURID
Isi bagian Identifikasi Kesiapan Murid pada template menggunakan kategori:
Berkembang;
Cakap;
Mahir.
Jangan mengarang kondisi nyata murid.
Karena data asesmen awal belum dilaksanakan, kategori tersebut harus ditulis sebagai kemungkinan profil kesiapan yang dapat ditemukan berdasarkan asesmen awal, bukan fakta tentang kelas.
Contoh prinsip:
Berkembang
Murid masih membutuhkan bantuan untuk kemampuan prasyarat tertentu.
Strategi dapat berupa:
contoh;
pertanyaan penuntun;
scaffolding;
sumber yang lebih terstruktur;
pendampingan lebih intensif.
Cakap
Murid telah memiliki kemampuan prasyarat utama dan dapat melakukan tugas dengan bantuan minimal.
Mahir
Murid menunjukkan kesiapan lebih tinggi dan dapat memperoleh:
tantangan lebih kompleks;
tingkat kemandirian lebih tinggi;
kesempatan membandingkan alternatif;
argumentasi lebih mendalam;
penerapan pada konteks berbeda.
Jangan membuat diferensiasi sekadar:
mudah – sedang – sulit.

E. TUJUAN PEMBELAJARAN DAN KKTP
Masukkan seluruh TP dalam Data Kendali ke tabel Tujuan Pembelajaran – KKTP pada template.
Rumusan TP harus dipertahankan apa adanya.
Untuk setiap TP, rumuskan KKTP secara ringkas berdasarkan kemampuan yang harus terlihat dari murid.
KKTP harus:
diturunkan langsung dari TP;
menggambarkan bukti kemampuan;
dapat diamati;
dapat digunakan untuk menilai ketercapaian;
selaras dengan Gambaran Asesmen.
Jangan membuat KKTP menjadi daftar indikator kecil.
Jangan menentukan skor, persentase, atau batas nilai jika belum diberikan guru.
Gunakan prinsip:
TP → kemampuan yang harus muncul → bukti ketercapaian → KKTP

F. DIMENSI PROFIL LULUSAN
Gunakan Dimensi dan Subdimensi yang sudah ditentukan pada Prompt 3.
Pada template:
tandai/centang Dimensi Profil Lulusan yang digunakan;
gunakan Subdimensi sebagai acuan dalam merancang aktivitas.
Jika template tidak menyediakan kolom khusus Subdimensi, jangan mengubah struktur template hanya untuk menambahkannya.
Dimensi–Subdimensi harus terlihat dari aktivitas nyata.
Jangan hanya mencantumkan nama dimensi.

G. PRAKTIK PEDAGOGIS, KEMITRAAN, LINGKUNGAN, DAN DIGITAL
Isi bagian tersebut berdasarkan Data Kendali.
Jangan memperluasnya tanpa kebutuhan.
Praktik Pedagogis
Gunakan yang sudah ditetapkan dan wujudkan dalam kegiatan pembelajaran.
Kemitraan Pembelajaran
Gunakan hanya jika sudah direncanakan.
Lingkungan Pembelajaran
Bedakan jika relevan:
lingkungan fisik/virtual;
budaya belajar yang perlu dibangun.
Budaya belajar dapat mencakup:
aman menyampaikan pendapat;
menghargai perbedaan;
menggunakan alasan/bukti;
saling memberi umpan balik;
bertanggung jawab terhadap proses belajar.
Sesuaikan dengan modul.
Pemanfaatan Digital
Gunakan sesuai Data Kendali.
Jangan menggunakan teknologi hanya sebagai hiasan.

H. MODEL PEMBELAJARAN DAN SINTAKS
Gunakan prinsip:
1 Modul = 1 Model Pembelajaran Utama = 1 Alur Sintaks Utuh
Model dapat berupa, jika sesuai:
Problem Based Learning;
Project Based Learning;
Inquiry/Discovery;
pembelajaran berbasis teks;
pembelajaran langsung;
pembelajaran kooperatif;
atau model lain yang sesuai karakteristik mata pelajaran.
Tidak semua modul harus menggunakan PBL/PjBL.
Pilih berdasarkan kebutuhan TP.
Jika modul terdiri atas beberapa pertemuan, sintaks model berlangsung melintasi pertemuan.
Contoh:
Pertemuan 1 → Sintaks 1–2
Pertemuan 2 → Sintaks 3–4
Pertemuan 3 → Sintaks 5
Jangan mengulang seluruh sintaks dari awal pada setiap pertemuan.
Jika model yang digunakan memang tidak memiliki sintaks kaku, gunakan tahapan logis model tersebut dan jangan memaksakan sintaks buatan.

I. PEMBELAJARAN MENDALAM
Integrasikan secara nyata tiga prinsip:
Berkesadaran
Murid:
mengetahui tujuan belajar;
memahami alasan melakukan aktivitas;
menghubungkan pengetahuan awal;
menyadari strategi belajarnya;
memonitor perkembangan;
mengenali kesulitan;
menggunakan umpan balik.
Bermakna
Murid:
menghubungkan konsep dengan konteks;
menggunakan pengetahuan;
menganalisis masalah/informasi;
mengambil keputusan;
menghasilkan penjelasan, solusi, karya, atau performa sesuai mata pelajaran;
memahami manfaat pembelajaran.
Menggembirakan
Murid memperoleh:
rasa aman;
tantangan yang sesuai;
kesempatan mengeksplorasi;
kesempatan berdiskusi;
pilihan atau ruang kreativitas jika relevan;
pengalaman melihat perkembangan belajarnya.
Menggembirakan tidak harus berupa permainan.
Jangan sekadar menempelkan label Berkesadaran, Bermakna, dan Menggembirakan.
Prinsip tersebut harus terlihat dari aktivitas.

J. PENGALAMAN BELAJAR
Gunakan:
Memahami → Mengaplikasi → Merefleksi
berdasarkan Gambaran Aktivitas Prompt 3.
Memahami
Harus terlihat bagaimana murid:
mengaktifkan pengetahuan awal;
mengamati/membaca/menyimak/memirsa;
mengeksplorasi;
mengidentifikasi;
mengolah informasi;
membangun konsep atau pemahaman.
Mengaplikasi
Harus terlihat bagaimana murid menggunakan pemahamannya untuk kemampuan yang dituntut TP, misalnya:
menerapkan;
menganalisis;
menyelesaikan masalah;
menginterpretasikan;
menulis;
mempraktikkan;
merancang;
membuat;
mempresentasikan;
mengambil keputusan.
Merefleksi
Harus terlihat bagaimana murid:
memeriksa proses atau hasil;
membandingkan dengan tujuan/kriteria;
menggunakan umpan balik;
mengidentifikasi keberhasilan;
mengenali bagian yang perlu diperbaiki;
memperbaiki hasil jika relevan;
menentukan pembelajaran atau penerapan berikutnya.
Tidak harus satu pertemuan hanya memiliki satu pengalaman belajar.

K. PENYUSUNAN SETIAP PERTEMUAN
Setiap pertemuan harus mengikuti struktur pada template.
Isi:
Pertemuan ke-: [...]
Pengalaman Belajar: Memahami/Mengaplikasi/Merefleksi atau kombinasi
Model Pembelajaran: [...]
Sintaks: [...]
Alokasi Waktu: [...]
Tujuan Pembelajaran yang menjadi fokus: [...]
Kemudian susun:
Pendahuluan
Kegiatan Inti
Penutup
Total waktu harus sesuai jumlah menit yang tersedia.

L. PENDAHULUAN
Pendahuluan harus operasional dan ringkas.
Dapat mencakup:
membangun kesiapan;
menghubungkan pembelajaran sebelumnya;
memanfaatkan hasil asesmen awal;
menghadirkan konteks/fenomena/stimulus;
pertanyaan pemantik;
menyampaikan TP;
membantu murid memahami manfaat pembelajaran.
Gunakan alur:
Guru memantik → murid merespons → guru menggali/mengklarifikasi → murid memahami arah belajar.
Hindari pendahuluan yang hanya:
salam → presensi → menyampaikan materi.

M. KEGIATAN INTI — BAGIAN TERPENTING
Kembangkan Gambaran Aktivitas Prompt 3 menjadi skenario pembelajaran operasional.
Jangan membuat aktivitas baru yang mengubah arah modul.
Gunakan hubungan:
TP → Aktivitas Murid → Peran Guru → Interaksi → Bukti Belajar → Umpan Balik/Scaffolding → Perbaikan
Untuk setiap aktivitas penting, harus terlihat:
1. Aktivitas murid
Jelaskan secara konkret apa yang dilakukan murid terhadap materi/informasi/masalah.
2. Peran guru
Jelaskan apa yang dilakukan guru untuk:
memantik;
memfasilitasi;
mengklarifikasi;
memberikan sumber;
memberi pertanyaan;
mengamati;
memberikan scaffolding;
memberikan umpan balik.
3. Interaksi
Jika relevan, tampilkan:
pertanyaan pemantik;
pertanyaan penuntun;
perbedaan jawaban;
alasan;
penggunaan bukti;
diskusi;
klarifikasi;
pemeriksaan kembali.
Jangan menulis dialog panjang seperti naskah drama.
4. Bukti belajar
Jelaskan apa yang muncul dari aktivitas, misalnya:
jawaban;
catatan;
hasil identifikasi;
tabel;
analisis;
penyelesaian masalah;
tulisan;
argumentasi;
praktik;
rancangan;
produk;
presentasi;
refleksi.
5. Scaffolding
Jika murid mengalami kesulitan, jelaskan bantuan yang konkret.
Jangan hanya menulis:
Guru memberikan scaffolding.
Contoh yang lebih tepat:
Guru memberikan dua pertanyaan penuntun untuk membantu murid membedakan informasi utama dan informasi pendukung.
6. Umpan balik dan tindak lanjut
Gunakan siklus:
Bukti → Umpan Balik → Perbaikan → Pemeriksaan Kembali
Jangan hanya menulis:
Guru memberikan umpan balik.
Jelaskan apa yang diperbaiki murid setelah mendapat umpan balik.

N. JANGAN MEMBUAT KEGIATAN TERLALU GENERIK
Hindari langkah seperti:
Guru menjelaskan materi.
Murid berdiskusi.
Murid mengerjakan tugas.
Murid mempresentasikan hasil.
Jika pola tersebut diperlukan, jelaskan:
materi/informasi apa yang diolah;
pertanyaan apa yang dijawab;
apa yang dicari murid;
apa yang dibandingkan;
alasan apa yang dibangun;
bukti apa yang dihasilkan;
apa respons guru;
bagaimana hasil digunakan untuk kegiatan berikutnya.
Gunakan prinsip:
detail secara operasional, bukan panjang secara naratif.

O. KETERHUBUNGAN ANTARPERTEMUAN
Seluruh pertemuan harus membentuk satu perjalanan belajar yang utuh.
Setiap pertemuan harus:
menggunakan hasil pertemuan sebelumnya jika relevan;
menghasilkan bekal untuk pertemuan berikutnya;
menunjukkan perkembangan kemampuan;
bergerak menuju ketercapaian TP.
Gunakan transisi alami seperti:
Berdasarkan hasil analisis pada pertemuan sebelumnya...
Hasil latihan sebelumnya digunakan untuk...
Setelah memperoleh pemahaman tersebut, murid selanjutnya...
Umpan balik pada hasil awal digunakan untuk memperbaiki...
Jangan membuat setiap pertemuan terasa sebagai pembelajaran yang terpisah.

P. PENUTUP
Penutup harus membantu murid menyadari perkembangan belajar.
Dapat mencakup:
menyimpulkan pemahaman;
menunjukkan bukti belajar;
mengidentifikasi kesulitan;
merefleksi strategi;
menggunakan umpan balik;
menentukan perbaikan;
melihat hubungan dengan pertemuan berikutnya;
memberikan apresiasi.
Refleksi dapat membantu murid menjawab:
Apa yang saya pahami?
Apa yang sudah dapat saya lakukan?
Bukti apa yang menunjukkan perkembangan saya?
Apa yang masih perlu saya perbaiki?
Apa yang akan saya lakukan selanjutnya?
Jangan menjadikan penutup hanya:
guru menyimpulkan → memberikan tugas → salam.

Q. ASESMEN PEMBELAJARAN
Isi bagian asesmen pada template berdasarkan Gambaran Asesmen Prompt 4.
Gunakan tiga bagian:
A. Asesmen Awal Pembelajaran
Cantumkan secara ringkas:
tujuan;
waktu pelaksanaan;
teknik/bentuk;
bukti/informasi yang dicari;
bagaimana hasil digunakan.
B. Asesmen Formatif
Cantumkan asesmen proses utama sesuai kegiatan.
Untuk setiap asesmen formatif, jelaskan singkat:
TP yang dipantau;
waktu/titik pelaksanaan;
teknik;
bukti belajar;
umpan balik/tindak lanjut.
C. Asesmen Sumatif/Akhir
Cantumkan:
TP yang diukur;
bentuk/teknik;
bukti ketercapaian utama.
Jangan membuat:
soal lengkap;
kisi-kisi lengkap;
rubrik lengkap;
instrumen asesmen lengkap.
Perangkat tersebut dikembangkan pada prompt asesmen tersendiri.

R. KESESUAIAN DENGAN ASESMEN
Kegiatan pembelajaran dan asesmen tidak boleh berdiri sendiri.
Pastikan:
TP → Aktivitas → Bukti Belajar → Asesmen
Bukti yang disebut dalam Gambaran Asesmen harus benar-benar muncul dalam aktivitas pembelajaran.
Jangan menambahkan asesmen yang tidak mungkin menghasilkan bukti dari aktivitas yang dilakukan.

S. ALOKASI WAKTU
Gunakan jumlah pertemuan dan JP persis sesuai Data Kendali.
Hitung:
1 JP = sesuai ketentuan jenjang pada template/data guru
Kemudian distribusikan waktu secara realistis antara:
pendahuluan;
kegiatan inti;
penutup.
Jangan membagi waktu secara mekanis sama rata.
Berikan waktu terbesar pada aktivitas yang menjadi inti pencapaian TP.
Pastikan total menit setiap pertemuan tepat.

T. KARAKTERISTIK MATA PELAJARAN
Sesuaikan pembelajaran dengan karakteristik mata pelajaran.
Jangan menggunakan pola yang sama untuk semua mapel.
Contoh:
Bahasa → menyimak, membaca/memirsa, berbicara, menulis;
Matematika → penalaran, representasi, strategi, pemecahan masalah;
IPA → pengamatan, konsep, data, penyelidikan jika relevan;
IPS → sumber, fenomena sosial, analisis hubungan dan konteks;
Pendidikan Pancasila → kasus, alasan, nilai, pengambilan keputusan;
Seni → eksplorasi, proses kreatif, karya/performa jika relevan;
PJOK → praktik gerak dan performa;
mata pelajaran lain → sesuaikan tuntutan TP.
Jangan memaksakan:
projek;
eksperimen;
produk;
presentasi;
kerja kelompok;
jika tidak dibutuhkan oleh TP.

U. PRAKTIS UNTUK GURU
RPP harus membuat guru dapat langsung memahami:
Apa tujuan pertemuan ini?
Apa yang dilakukan murid?
Apa yang dilakukan guru?
Interaksi penting apa yang harus terjadi?
Apa yang harus diamati guru?
Bukti belajar apa yang seharusnya muncul?
Kesulitan apa yang mungkin muncul?
Scaffolding apa yang dapat diberikan?
Umpan balik apa yang diperlukan?
Apa yang dilakukan murid setelah menerima umpan balik?
Bagaimana hasil pertemuan ini digunakan pada pertemuan berikutnya?
Jangan membuat RPP seperti buku teks atau dokumen teori.

V. QUALITY CHECK
Sebelum membuat dokumen final, lakukan pemeriksaan internal.
1. Data Kendali
Pastikan:
kode modul benar;
TP tidak berubah;
jumlah pertemuan benar;
JP benar;
Dimensi Profil Lulusan sesuai;
Gambaran Aktivitas tidak berubah arah;
Gambaran Asesmen tetap menjadi acuan.
2. Kesesuaian
Pastikan:
TP → Aktivitas → Bukti Belajar → Asesmen
terhubung dengan jelas.
3. Pembelajaran Mendalam
Pastikan prinsip:
Berkesadaran – Bermakna – Menggembirakan
terlihat dalam aktivitas nyata.
4. Pengalaman Belajar
Pastikan:
Memahami → Mengaplikasi → Merefleksi
membentuk perkembangan belajar, bukan sekadar label.
5. Keterhubungan
Pastikan:
Pertemuan 1 → Pertemuan 2 → ... → Penyelesaian Modul
merupakan satu alur.
6. Keterlibatan Murid
Pastikan murid benar-benar:
berpikir;
melakukan;
menghasilkan bukti;
memperoleh umpan balik;
melakukan perbaikan.
7. Keterlaksanaan
Pastikan kegiatan realistis dalam:
waktu;
konteks;
lingkungan;
sarana yang diketahui.
8. Scaffolding dan Umpan Balik
Pastikan tidak hanya tertulis sebagai istilah, tetapi dijelaskan secara operasional.
9. Asesmen
Pastikan asesmen sesuai Gambaran Asesmen Prompt 4 dan bukti yang benar-benar muncul dalam pembelajaran.
Jika ada ketidaksesuaian, perbaiki sebelum membuat dokumen final tanpa mengubah Data Kendali utama.

W. HASIL AKHIR
Buat 1 file Microsoft Word .docx menggunakan template yang saya lampirkan.
Template merupakan MASTER LAYOUT.
Pertahankan format dan struktur template.
Isi seluruh bagian yang relevan sehingga menghasilkan Modul Ajar/RPP yang siap digunakan guru.
Nama file:
RPP_[Kode Modul]_[Nama Modul].docx
Hasil akhir harus:
lengkap tetapi tidak bertele-tele;
rinci secara operasional;
mudah dibaca;
praktis digunakan saat mengajar;
menunjukkan Pembelajaran Mendalam secara nyata;
konsisten dengan seluruh perencanaan sebelumnya.
Jangan tampilkan proses analisis. Langsung hasilkan file Word final.
`,rules:[{start:1680,end:1696,old:"Bahasa Indonesia",value:"{{mapel}}"},{start:1708,end:1712,old:"D/IX",value:"{{fase}}/{{kelas}}"},{start:1724,end:1755,old:"Pemahaman Puisi Rakyat (Pantun)",value:"{{modul}}"},{start:1765,end:1789,old:"Bab II Belajar Berpantun",value:"{{bab}}"},{start:1805,end:1877,old:`Menemukan Ciri-Ciri Pantun
Penggunaan Pantun dalam Kehidupan Sehari-hari`,value:"{{lingkup}}"},{start:1903,end:2182,old:`TP2.1 — Peserta didik mampu menganalisis unsur intrinsik dan ciri-ciri teks puisi rakyat (pantun) yang didengarkan.

TP2.2 — Peserta didik mampu menganalisis makna tersurat dan tersirat serta menginterpretasi ungkapan kepedulian dari teks pantun, syair, dan gurindam yang dibaca.`,value:"{{tp}}"},{start:2203,end:2208,old:"20 JP",value:"{{alokasi}} JP"},{start:2226,end:2237,old:"8 Pertemuan",value:"{{pertemuan}} Pertemuan"},{start:2262,end:2276,old:"2 JP atau 3 JP",value:"{{jpsesi}}"},{start:2308,end:5227,old:`3. Dimensi Penalaran Kritis
No
Subdimensi
Berkembang
Cakap
Mahir
1
Penyampaian Argumentasi
Menyampaikan argumen logis secara runtut disertai alasan sederhana.
Menyampaikan argumen logis secara runtut disertai alasan yang kuat.
Menyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain.
2
Pengambilan Keputusan
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan dengan bimbingan.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan.
3
Penyelesaian Masalah
Menyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri.

8. Dimensi Komunikasi
No
Subdimensi
Berkembang
Cakap
Mahir
1
Menyimak
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
2
Berbicara
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif.
3
Membaca
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
4
Menulis
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif.`,value:"{{dimensions}}"},{start:5247,end:5300,old:"Pembelajaran Berbasis Teks, Pembelajaran Kontekstual.",value:"{{pedagogis}}"},{start:5325,end:5395,old:"Tidak memerlukan kemitraan khusus (antarmurid dalam diskusi kelompok).",value:"{{mitra}}"},{start:5421,end:5433,old:"Ruang kelas ",value:"{{lingkungan}}"},{start:5455,end:5522,old:"Pemutar audio untuk memperdengarkan contoh pantun lisan (opsional).",value:"{{digital}}"},{start:5543,end:6474,old:`1. Memahami
Murid menyimak pembacaan pantun oleh guru atau dari media audio, kemudian mengidentifikasi ciri-ciri fisik (jumlah baris, suku kata, rima) dan unsur intrinsik (sampiran dan isi). Murid berlatih membedakan bentuk pantun dengan puisi rakyat lainnya. Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
2. Mengaplikasi
Murid membaca teks kumpulan pantun, syair, dan gurindam. Murid secara berkelompok menganalisis dan menginterpretasi makna tersurat dan pesan moral (tersirat) berupa ungkapan kepedulian yang terkandung dalam karya-karya tersebut. Bukti belajar: Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
3. Merefleksi
Murid mengidentifikasi kesulitan dalam menafsirkan kata-kata kiasan kuno khas puisi rakyat. Murid menyimpulkan daya tarik dan relevansi pesan moral (syair, pantun, gurindam) jika diterapkan pada komunikasi anak muda di era saat ini.`,value:"{{aktivitas}}"},{start:6493,end:7843,old:`1. Asesmen Awal
Tujuan:
Mengetahui ingatan dan pemahaman prasyarat murid mengenai pola rima dan persajakan dasar.
Bentuk/teknik:
Kuis lisan (melengkapi baris).
Gambaran asesmen:
Guru membacakan 2 baris sampiran, murid diminta secara acak menebak atau menyahut dengan baris isi yang rimanya sesuai.
Informasi yang diperoleh dan tindak lanjut:
Murid yang sudah terbiasa dengan rima a-b-a-b dapat diarahkan untuk langsung mengeksplorasi syair dan gurindam, sementara yang belum akan dibimbing lebih lanjut tentang suku kata dan rima pantun.
2. Asesmen pada Proses Pembelajaran
TP yang dipantau: TP2.1
Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
Teknik: Penugasan (lembar kerja analisis).
Instrumen yang diperlukan: Kunci jawaban / Lembar tugas.
Umpan balik/tindak lanjut: Memastikan pemahaman konseptual (mana sampiran, mana isi) sudah tuntas sebelum berpindah ke analisis makna yang lebih dalam.
3. Asesmen Akhir Pembelajaran
TP yang diukur: TP2.2
Bukti ketercapaian utama:
Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
Bentuk/teknik asesmen:
Penugasan tertulis (Tabel Analisis).
Instrumen yang diperlukan:
Pedoman penskoran kesesuaian interpretasi.
Individu/Kelompok:
Kelompok, disertai konfirmasi lisan dari guru secara acak untuk membuktikan pemahaman individu tiap anggota.`,value:"{{asesmen}}"}],pasteRule:{start:1665,end:7843,old:`Mata Pelajaran
Bahasa Indonesia
Fase/Kelas
D/IX
Nama Modul
Pemahaman Puisi Rakyat (Pantun)
Nama Bab
Bab II Belajar Berpantun
Lingkup Materi
Menemukan Ciri-Ciri Pantun
Penggunaan Pantun dalam Kehidupan Sehari-hari
Tujuan Pembelajaran (TP)
TP2.1 — Peserta didik mampu menganalisis unsur intrinsik dan ciri-ciri teks puisi rakyat (pantun) yang didengarkan.

TP2.2 — Peserta didik mampu menganalisis makna tersurat dan tersirat serta menginterpretasi ungkapan kepedulian dari teks pantun, syair, dan gurindam yang dibaca.
Alokasi Waktu Modul
20 JP
Jumlah Pertemuan
8 Pertemuan
Jumlah JP per Pertemuan
2 JP atau 3 JP
Dimensi Profil Lulusan Pilihan
3. Dimensi Penalaran Kritis
No
Subdimensi
Berkembang
Cakap
Mahir
1
Penyampaian Argumentasi
Menyampaikan argumen logis secara runtut disertai alasan sederhana.
Menyampaikan argumen logis secara runtut disertai alasan yang kuat.
Menyampaikan argumen yang logis secara runtut, didukung data dan bukti kuat yang relevan, dan mampu menghargai dan menanggapi argumen orang lain.
2
Pengambilan Keputusan
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan dengan bimbingan.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri.
Membuat keputusan secara logis dengan membandingkan beberapa pendapat/sudut pandang serta beberapa informasi yang relevan secara mandiri serta mempertimbangkan dampak yang ditimbulkan.
3
Penyelesaian Masalah
Menyelesaikan masalah sederhana menghasilkan solusi logis dan kontekstual namun kurang tepat.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat dengan bimbingan.
Menyelesaikan masalah sederhana dan menghasilkan solusi logis dan kontekstual yang tepat secara mandiri.

8. Dimensi Komunikasi
No
Subdimensi
Berkembang
Cakap
Mahir
1
Menyimak
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Mendengarkan secara aktif sejumlah teks lisan yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
2
Berbicara
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi secara lisan berbagai jenis informasi dengan cara yang benar, tepat, lancar, dan efektif.
3
Membaca
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan yang relevan.
Membaca secara aktif sejumlah teks tertulis yang dipilih untuk mendapatkan informasi eksplisit dan implisit, dan memberikan tanggapan relevan dan kritis.
4
Menulis
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih namun belum tepat dan lancar.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang cukup tepat, lancar, dan efektif.
Menyampaikan, menggali, dan menanggapi informasi secara tertulis dengan beberapa jenis teks terpilih dengan cara yang benar, tepat, lancar, dan efektif.

Praktik Pedagogis
Pembelajaran Berbasis Teks, Pembelajaran Kontekstual.

Kemitraan Pembelajaran
Tidak memerlukan kemitraan khusus (antarmurid dalam diskusi kelompok).

Lingkungan Pembelajaran
Ruang kelas 

Pemanfaatan Digital
Pemutar audio untuk memperdengarkan contoh pantun lisan (opsional).

Gambaran Aktivitas
1. Memahami
Murid menyimak pembacaan pantun oleh guru atau dari media audio, kemudian mengidentifikasi ciri-ciri fisik (jumlah baris, suku kata, rima) dan unsur intrinsik (sampiran dan isi). Murid berlatih membedakan bentuk pantun dengan puisi rakyat lainnya. Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
2. Mengaplikasi
Murid membaca teks kumpulan pantun, syair, dan gurindam. Murid secara berkelompok menganalisis dan menginterpretasi makna tersurat dan pesan moral (tersirat) berupa ungkapan kepedulian yang terkandung dalam karya-karya tersebut. Bukti belajar: Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
3. Merefleksi
Murid mengidentifikasi kesulitan dalam menafsirkan kata-kata kiasan kuno khas puisi rakyat. Murid menyimpulkan daya tarik dan relevansi pesan moral (syair, pantun, gurindam) jika diterapkan pada komunikasi anak muda di era saat ini.

Gambaran Asesmen
1. Asesmen Awal
Tujuan:
Mengetahui ingatan dan pemahaman prasyarat murid mengenai pola rima dan persajakan dasar.
Bentuk/teknik:
Kuis lisan (melengkapi baris).
Gambaran asesmen:
Guru membacakan 2 baris sampiran, murid diminta secara acak menebak atau menyahut dengan baris isi yang rimanya sesuai.
Informasi yang diperoleh dan tindak lanjut:
Murid yang sudah terbiasa dengan rima a-b-a-b dapat diarahkan untuk langsung mengeksplorasi syair dan gurindam, sementara yang belum akan dibimbing lebih lanjut tentang suku kata dan rima pantun.
2. Asesmen pada Proses Pembelajaran
TP yang dipantau: TP2.1
Bukti belajar: Catatan identifikasi ciri dan unsur intrinsik pantun.
Teknik: Penugasan (lembar kerja analisis).
Instrumen yang diperlukan: Kunci jawaban / Lembar tugas.
Umpan balik/tindak lanjut: Memastikan pemahaman konseptual (mana sampiran, mana isi) sudah tuntas sebelum berpindah ke analisis makna yang lebih dalam.
3. Asesmen Akhir Pembelajaran
TP yang diukur: TP2.2
Bukti ketercapaian utama:
Tabel perbandingan ciri dan makna (pesan/ungkapan kepedulian) dari pantun, syair, dan gurindam.
Bentuk/teknik asesmen:
Penugasan tertulis (Tabel Analisis).
Instrumen yang diperlukan:
Pedoman penskoran kesesuaian interpretasi.
Individu/Kelompok:
Kelompok, disertai konfirmasi lisan dari guru secara acak untuk membuktikan pemahaman individu tiap anggota.`,value:"{{kendali}}"},order:8,version:2,category:"perencanaan"},"./perencanaan/soal.json":{id:"soal",title:"Soal dan kunci sumatif",group:"Sumatif",source:"9 Soal Sumatif.docx",description:"Kembangkan kisi-kisi menjadi soal, kunci, pembahasan, dan tindak lanjut.",needs:["Blueprint/kisi-kisi final.","Buku/BSE sumber."],fields:[],note:"Naskah soal menyebut CP di dalam blueprint, sedangkan naskah blueprint tidak menampilkannya. Sertakan analisis CP–TP asli sebagai rujukan tambahan.",original:`Dari  blueprint/kisi-kisi asesmen sumatif yang telah disusun sebelumnya.
Gunakan blueprint tersebut sebagai DATA KENDALI UTAMA.
Tugas Anda adalah mengembangkan blueprint menjadi paket soal lengkap yang siap digunakan, beserta kunci jawaban, pembahasan, analisis ketercapaian TP, dan tindak lanjut.
Kerjakan dalam 2 dokumen terpisah:
FILE A — SOAL ASESMEN
FILE B — KUNCI, PEMBAHASAN, DAN TINDAK LANJUT
Jangan berhenti sebelum kedua file selesai.

A. SUMBER DATA
Gunakan:
blueprint/kisi-kisi asesmen sumatif yang telah dibuat sebelumnya;
CP dan TP rinci yang terdapat dalam blueprint;
TP Umum eRapor jika terdapat dalam blueprint;
Bab dan lingkup materi;
indikator soal;
bentuk soal;
Bloom/DoK;
jenis stimulus;
sumber/BSE yang sebelumnya digunakan jika masih tersedia.
Jika terdapat perbedaan antara sumber lain dan blueprint, utamakan blueprint final.
Jangan:
membuat CP baru;
membuat TP baru;
mengubah kode CP;
mengubah kode TP;
mengubah nomor soal;
mengubah bentuk soal;
mengubah indikator;
mengubah Bloom/DoK;
mengubah distribusi soal;
memindahkan soal ke TP lain tanpa alasan.
Jika terdapat indikator yang tidak mungkin diwujudkan menjadi soal yang valid, tandai:
PERLU VERIFIKASI KISI-KISI
Jangan memperbaiki blueprint secara diam-diam.

B. PRINSIP UTAMA
Untuk setiap nomor gunakan rantai:
CP → TP Rinci → Indikator → Stimulus → Pertanyaan → Jawaban
Setiap soal harus benar-benar mengukur indikator yang tercantum pada nomor tersebut.
Jangan membuat soal berdasarkan materi saja.
Sebelum menyelesaikan setiap butir, periksa secara internal:
“Jika murid menjawab soal ini dengan benar, apakah jawaban tersebut benar-benar memberikan bukti terhadap kemampuan yang dituntut indikator?”
Jika tidak, revisi soal.

C. KESESUAIAN DENGAN JENJANG
Jumlah opsi pilihan ganda:
SD kelas 1–3: A–C
SD kelas 4–6: A–D
SMP: A–D
SMA/SMK: A–E
Gunakan bahasa sesuai jenjang.
Untuk SMP:
kalimat jelas dan natural;
tidak kekanak-kanakan;
tidak menggunakan istilah terlalu akademis jika tidak diperlukan;
panjang teks sesuai kemampuan baca peserta didik;
hindari kalimat berbelit.

D. ATURAN PILIHAN GANDA
Setiap pilihan ganda harus:
hanya memiliki satu jawaban paling benar;
pokok soal jelas;
tidak memberikan petunjuk ke jawaban;
pilihan jawaban homogen;
struktur gramatikal antarpilihan konsisten;
panjang opsi relatif seimbang;
tidak menempatkan jawaban benar secara berpola;
tidak menggunakan opsi absurd;
tidak menggunakan distraktor yang jelas salah hanya agar jumlah opsi terpenuhi.
Hindari jika memungkinkan:
“semua jawaban benar”;
“semua jawaban salah”;
opsi yang saling tumpang tindih;
dua pilihan yang sama-sama dapat dibenarkan.

E. DISTRAKTOR
Distraktor harus:
logis;
relevan dengan pertanyaan;
masih berada dalam domain materi;
mencerminkan kemungkinan kesalahan berpikir atau miskonsepsi;
cukup masuk akal bagi murid yang belum memahami konsep;
tidak lebih panjang atau lebih rinci hanya karena merupakan jawaban benar.
Setelah soal selesai, lakukan pemeriksaan internal terhadap semua distraktor.
Jika suatu distraktor terlalu mudah dieliminasi, perbaiki.

F. STIMULUS
Ikuti jenis stimulus yang telah ditentukan pada blueprint untuk setiap nomor.
Jangan mengganti:
teks menjadi tabel;
tabel menjadi kasus;
gambar menjadi teks;
hanya karena lebih mudah dibuat.
Stimulus harus menjadi alat berpikir, bukan dekorasi.
Prinsip wajib:
Murid perlu menggunakan informasi dalam stimulus untuk menjawab soal.
Jika soal tetap dapat dijawab dengan mudah tanpa membaca stimulus, perbaiki soal atau stimulus.
Stimulus tidak boleh memberikan jawaban secara eksplisit.

G. FAKTA, DATA, DAN SUMBER
Jangan membuat fakta buatan seolah-olah merupakan fakta nyata.
Dilarang mengarang:
berita;
statistik;
hasil survei;
hasil penelitian;
data pemerintah;
kutipan tokoh;
data BPS;
data lembaga;
data ekonomi;
data kependudukan;
lalu menyajikannya seolah-olah nyata.
Jika menggunakan informasi nyata dari sumber yang tersedia:
pertahankan maknanya;
boleh diparafrase;
cantumkan sumber secara singkat.
Contoh:
Sumber: BPS, diparafrase.
Jika sumber nyata tidak tersedia, gunakan data atau situasi buatan dengan label jelas:
[KASUS HIPOTETIK]
[DATA CONTOH]
[TABEL SIMULASI]
[GRAFIK SIMULASI]
[ILUSTRASI]
Jangan menyamarkan simulasi sebagai fakta.

H. STIMULUS TEKS
Jika blueprint menetapkan Teks/Literasi, buat teks yang:
informatif;
relevan dengan indikator;
memiliki informasi yang perlu diolah;
sesuai jenjang;
tidak hanya berisi definisi;
memungkinkan murid menemukan, menghubungkan, menginterpretasikan, membandingkan, atau mengevaluasi informasi.
Satu teks boleh digunakan untuk beberapa soal jika blueprint memang menunjukkan stimulus bersama.
Jika digunakan bersama, tuliskan:
Bacalah teks berikut untuk menjawab soal nomor 6–8.

I. TABEL DAN DATA
Jika blueprint menetapkan stimulus tabel/data:
buat tabel yang benar-benar digunakan untuk menjawab soal.
Jika berupa simulasi, beri label:
[TABEL SIMULASI]
atau:
[DATA CONTOH]
Pastikan:
angka realistis;
konsisten;
tidak kontradiktif;
satuan jelas;
tidak menghasilkan dua jawaban benar.
Jangan membuat data lebih rumit daripada yang diperlukan indikator.

J. GRAFIK/DIAGRAM
Jika blueprint menetapkan grafik:
buat grafik di dokumen jika memungkinkan.
Jika tidak dapat dibuat secara visual, berikan spesifikasi lengkap:
[GRAFIK SIMULASI]
Judul: [...]
Sumbu X: [...]
Sumbu Y: [...]
Data: [...]
Grafik harus digunakan untuk:
membaca nilai;
membandingkan;
menemukan tren;
menginterpretasikan hubungan;
atau menarik kesimpulan,
sesuai indikator.

K. GAMBAR
Jika blueprint menetapkan gambar dan gambar belum tersedia, jangan mengarang seolah-olah gambar sudah ada.
Tuliskan placeholder spesifik, misalnya:
[ILUSTRASI: dua wadah dengan kondisi berbeda; wadah A ..., wadah B .... Murid diminta membandingkan ....]
Deskripsi harus cukup jelas agar guru dapat membuat, mencari, atau mengganti visual tersebut.
Jika gambar dapat dibuat langsung di dokumen secara sederhana, gunakan gambar tersebut.

L. HOTS
Jangan menentukan HOTS hanya berdasarkan kata kerja.
Soal HOTS harus membutuhkan murid untuk menggunakan informasi, konsep, atau bukti untuk:
menganalisis;
menghubungkan;
membandingkan;
mengevaluasi;
mengambil keputusan;
menyimpulkan;
memprediksi;
memilih solusi;
atau menilai argumentasi.
Untuk soal HOTS yang pada blueprint menggunakan stimulus, murid tidak boleh dapat menjawab dengan benar hanya berdasarkan hafalan tanpa menggunakan stimulus.
Jangan membuat soal menjadi panjang hanya agar terlihat HOTS.

M. LOTS DAN MOTS
Jangan menghindari LOTS jika memang terdapat dalam blueprint.
LOTS dapat digunakan untuk mengukur pengetahuan atau pemahaman yang memang diperlukan.
Namun hindari pertanyaan hafalan trivial yang tidak berkaitan dengan TP.
MOTS harus menuntut penggunaan atau pengolahan konsep, bukan sekadar mengulang definisi.

N. SOAL ISIAN SINGKAT
Jika blueprint menggunakan isian singkat:
pertanyaan harus menghasilkan jawaban pendek dan jelas;
jangan membuat jawaban terlalu terbuka;
hindari lebih dari satu kemungkinan jawaban benar kecuali seluruh variasi dicantumkan dalam pedoman jawaban;
jangan mengubah isian singkat menjadi uraian panjang.
Sediakan kunci dan alternatif jawaban yang dapat diterima.

O. SOAL URAIAN
Jika blueprint menggunakan uraian:
pertanyaan harus sesuai indikator;
jelaskan apa yang perlu dilakukan murid;
jika perlu, tentukan unsur jawaban;
jangan menentukan “minimal sekian kalimat” kecuali panjang respons memang penting.
Lebih baik gunakan instruksi seperti:
Jelaskan alasanmu menggunakan minimal dua informasi dari stimulus.
daripada sekadar:
Jawab minimal 5 kalimat.

P. TP UMUM eRAPOR
Jika blueprint memiliki TP Umum eRapor, gunakan kode tersebut hanya untuk membantu pengelompokan hasil.
Soal tetap disusun berdasarkan:
TP Rinci + Indikator
Jangan membuat soal langsung dari TP Umum eRapor jika indikator rinci sudah tersedia.
Pada bagian analisis hasil, tampilkan keterkaitan:
TP Umum eRapor → TP Rinci → Nomor soal

FILE A — SOAL ASESMEN
Buat file Microsoft Word terpisah yang hanya berisi soal untuk murid.
Jangan tampilkan:
kunci;
pembahasan;
level Bloom;
DoK;
kode TP;
indikator;
komentar guru.
Struktur
IDENTITAS
Satuan Pendidikan: [...]
Mata Pelajaran: [...]
Kelas/Semester: [...]
Jenis Asesmen: [...]
Waktu: [...]
Jumlah Soal: [...]
Nama Murid: ____________________
Kelas: _________________________
Tanggal: _______________________
PETUNJUK UMUM
Tuliskan petunjuk singkat sesuai bentuk soal.
SOAL
Susun seluruh soal sesuai nomor blueprint.
Jika satu stimulus digunakan untuk beberapa nomor, tampilkan stimulus satu kali saja sebelum kelompok soal tersebut.
Jangan mengulang stimulus yang sama.

FILE B — KUNCI, PEMBAHASAN, DAN TINDAK LANJUT
Buat file terpisah untuk guru.
BAGIAN 1 — TABEL KUNCI CEPAT
Untuk pilihan ganda/isian singkat, buat tabel ringkas.
Contoh:
No.
1
2
3
4
5
6
7
8
9
10
Jawaban










Lanjutkan sesuai jumlah soal.

BAGIAN 2 — PEMBAHASAN PER SOAL
Untuk setiap nomor tampilkan:
Nomor [X]
Kunci: [...]
Kode TP: [...]
Indikator yang Diukur: [...]
Pembahasan:
Jelaskan mengapa jawaban tersebut benar dengan bahasa yang ringkas dan substantif.
Miskonsepsi Umum:
Jelaskan kemungkinan pola pikir yang menyebabkan murid memilih distraktor.
Jika soal HOTS, tambahkan:
Catatan Pedagogis:
Jelaskan kemampuan penalaran yang diperlukan dan satu tindak lanjut singkat jika murid gagal pada soal tersebut.
Tidak perlu menyalin ulang seluruh pertanyaan dan opsi.

Q. PANJANG PEMBAHASAN
Gunakan pembahasan secukupnya.
Sebagai panduan:
LOTS: sekitar 1–2 kalimat substantif;
MOTS: sekitar 2–3 kalimat;
HOTS: sekitar 3–5 kalimat.
Jangan memanjangkan pembahasan hanya untuk memenuhi jumlah kalimat.
Yang utama adalah kejelasan konsep dan alasan jawaban.

R. ANALISIS KETERCAPAIAN TP
Buat tabel:
Kode TP Rinci
TP
Nomor Soal
Jumlah Soal
Bukti yang Diperoleh
Jangan langsung menyatakan:
TP tercapai jika benar sekian soal
kecuali guru sudah menentukan aturan tersebut.
Cukup tunjukkan bukti asesmen yang tersedia untuk setiap TP.

S. ANALISIS TP UMUM eRAPOR
Jika blueprint menyediakan TP Umum eRapor, buat tabel:
Kode TP Umum
Rumusan TP Umum eRapor
TP Rinci yang Dicakup
Nomor Soal
Ini membantu guru membaca hasil sumatif dalam kelompok TP yang lebih ringkas untuk kebutuhan eRapor.

T. TINDAK LANJUT
Berikan rekomendasi yang dapat digunakan setelah guru memperoleh hasil nyata.
Remedial
Jangan sekadar menulis:
Murid mengulang materi.
Hubungkan dengan jenis kesalahan.
Contoh pola:
Temuan dari Jawaban
Area yang Perlu Diperkuat
Tindak Lanjut
...
...
...
Tindak lanjut dapat berupa:
membaca kembali stimulus dengan pertanyaan penuntun;
membandingkan dua contoh;
menggunakan representasi berbeda;
mengerjakan soal paralel;
menjelaskan alasan secara lisan;
memperbaiki jawaban.
Pengayaan
Untuk murid yang telah menunjukkan penguasaan:
berikan konteks baru;
masalah yang lebih kompleks;
perbandingan alternatif;
tugas argumentasi;
penerapan pada situasi berbeda,
sesuai mata pelajaran dan TP.

U. SOAL PARALEL UNTUK TINDAK LANJUT
Jangan otomatis membuat paket remedial lengkap.
Namun jika diperlukan untuk tindak lanjut, boleh buat beberapa contoh soal paralel hanya untuk TP yang diperkirakan memerlukan penguatan.
Beri label:
CONTOH SOAL TINDAK LANJ — bukan bagian asesmen utama.
Soal paralel harus mengukur kemampuan yang sama tetapi menggunakan konteks berbeda.

V. PEMERIKSAAN KUALITAS PER NOMOR
Sebelum finalisasi, periksa setiap butir secara internal:
Kesesuaian blueprint
nomor sesuai;
CP/TP sesuai;
indikator sesuai;
bentuk soal sesuai;
Bloom/DoK sesuai;
stimulus sesuai.
Kualitas soal
hanya satu jawaban benar;
stem jelas;
tidak ambigu;
tidak memberikan petunjuk;
opsi homogen;
panjang opsi seimbang;
distraktor logis.
Stimulus
digunakan untuk berpikir;
relevan;
tidak mengandung jawaban;
fakta tidak dikarang;
simulasi sudah diberi label.
Jenjang
bahasa sesuai;
beban membaca masuk akal;
kompleksitas sesuai kelas.
Jika satu butir gagal salah satu pemeriksaan penting, revisi sebelum menghasilkan file.

W. VALIDASI DISTRIBUSI
Setelah seluruh soal selesai, lakukan pemeriksaan internal terhadap:
jumlah soal;
nomor soal;
bentuk soal;
distribusi TP;
distribusi CP;
Bloom;
DoK;
stimulus;
literasi;
numerasi;
dan cocokkan dengan blueprint.
Aktual harus mengikuti blueprint final.
Jangan mengubah blueprint untuk menyesuaikan soal yang sudah terlanjur dibuat.
Jika tidak cocok, perbaiki soalnya.

X. FORMAT FILE
Buat dua file:
FILE A
SOAL_[Mata Pelajaran][Kelas][Jenis Asesmen].docx
Berisi hanya:
identitas;
petunjuk;
stimulus;
seluruh soal.
FILE B
KUNCI_PEMBAHASAN_[Mata Pelajaran][Kelas][Jenis Asesmen].docx
Berisi:
tabel kunci cepat;
kunci dan pembahasan;
miskonsepsi umum;
catatan pedagogis untuk HOTS;
analisis TP rinci;
analisis TP Umum eRapor jika tersedia;
remedial;
pengayaan.
Gunakan tabel Word yang sebenarnya.
Pastikan dokumen siap dicetak.

Y. ATURAN FINAL
Jangan tampilkan proses berpikir internal.
Jangan menampilkan draft parsial.
Kerjakan FILE A sampai seluruh soal selesai terlebih dahulu, kemudian kerjakan FILE B.
Jangan berhenti setelah FILE A.
Sebelum menyerahkan hasil, pastikan guru tidak perlu bertanya:
“Soal untuk indikator ini mana?”
“Kunci jawabannya mana?”
“Kenapa jawabannya benar?”
“TP mana yang diukur?”
“Kalau banyak murid salah di bagian ini, saya harus melakukan apa?”
Jika pertanyaan-pertanyaan tersebut belum terjawab, hasil belum selesai.
`,rules:[],order:12,version:1,category:"perencanaan"},"./perencanaan/waktu.json":{id:"waktu",title:"Pemetaan modul dan waktu",group:"Perencanaan",source:"2 Analisis Modul dan Waktu - ADA ISIAN.docx",description:"Kelompokkan TP final menjadi modul dengan alokasi waktu yang realistis.",needs:["ATP dan TP final beserta pembagian semester.","Buku/BSE sumber."],fields:[{id:"jp",label:"JP per minggu",type:"number",required:!0,shared:!0,min:1},{id:"pola",label:"Pola pertemuan per minggu",type:"text",required:!0,placeholder:"Contoh: 1 × 3 JP dan 1 × 2 JP",help:"Gunakan pola jumlah pertemuan × JP, dipisahkan dengan “dan” atau “+”."},{id:"minggu1",label:"Minggu efektif semester 1",type:"number",required:!0,min:1,max:53,default:"18"},{id:"minggu2",label:"Minggu efektif semester 2",type:"number",required:!0,min:1,max:53,default:"18"},{id:"buffer",label:"Buffer waktu (%)",type:"number",required:!0,min:0,max:100,default:"10"}],note:"",original:`Prompt ini merupakan lanjutan dari Analisis CP–TP.
Gunakan file sumber, CP, ATP, dan daftar Tujuan Pembelajaran final yang telah tersedia pada percakapan sebelumnya.
Jangan meminta saya mengunggah ulang file selama sumber tersebut masih tersedia dalam percakapan.
Tugas Anda adalah:
mengelompokkan TP final menjadi beberapa modul pembelajaran;
menentukan berapa modul yang diperlukan pada setiap Bab;
menentukan TP yang masuk ke setiap modul;
menentukan jumlah pertemuan setiap modul;
menentukan alokasi JP setiap modul;
memastikan seluruh TP terwadahi dan total waktu sesuai dengan waktu efektif yang tersedia.

A. INPUT WAKTU
Saya akan mengisi data berikut:
Jumlah JP per Minggu : 5 JP
Pola Pertemuan per Minggu : 1 × 3 JP dan 1 x 2 JP
Minggu Efektif Semester 1 : 17 minggu
Minggu Efektif Semester 2 : 18 minggu
Persentase Buffer : 10%
Gunakan data tersebut sebagai dasar perhitungan.

B. SUMBER TP
Gunakan ATP dan TP final dari hasil sebelumnya
Pertahankan:
semester;
urutan Bab;
Lingkup Materi/Subbab;
kode TP;
rumusan TP;
urutan TP dalam ATP.
Jangan:
mengubah TP;
memperbaiki rumusan TP;
membuat TP baru;
menghapus TP;
menggabungkan beberapa TP menjadi TP baru;
memindahkan TP ke semester lain;
mengubah urutan Bab.

C. PRINSIP PENGELOMPOKAN MODUL
Satu Bab tidak otomatis sama dengan satu modul.
Analisis setiap Bab dan tentukan apakah lebih tepat menjadi:
satu modul;
dua modul;
tiga modul;
atau lebih,
berdasarkan hubungan antartujuan pembelajaran.
Beberapa TP dapat digabungkan dalam satu modul jika:
kompetensinya saling berkaitan;
lingkup materinya berhubungan;
memiliki hubungan prasyarat atau perkembangan kemampuan;
membentuk satu kesatuan pembelajaran yang logis;
dapat dicapai dalam rangkaian beberapa pertemuan yang saling berhubungan.
Pisahkan menjadi modul berbeda jika:
fokus kompetensinya berbeda secara nyata;
lingkup materinya berbeda secara mendasar;
TP berikutnya membutuhkan penguasaan TP sebelumnya;
membutuhkan produk atau performa utama yang berbeda;
jika digabungkan modul menjadi terlalu luas;
membutuhkan jumlah pertemuan yang terlalu banyak untuk satu unit pembelajaran.
Batas utama
Gunakan Bab sebagai batas utama modul.
Jangan menggabungkan TP dari Bab yang berbeda.
Pertahankan urutan TP sesuai ATP.

D. PENENTUAN JUMLAH MODUL
Jangan menggunakan aturan:
1 TP = 1 Modul
Jumlah modul harus ditentukan berdasarkan kesatuan kompetensi dan lingkup materi.
Contoh:
Jika Bab I memiliki 5 TP:
TP1.1 → TP1.2 → TP1.3 → TP1.4 → TP1.5
setelah dianalisis mungkin lebih logis menjadi:
Modul 1: TP1.1, TP1.2
Modul 2: TP1.3, TP1.4, TP1.5
Dengan demikian:
Bab I = 2 Modul
Tidak perlu menyamakan jumlah modul setiap Bab.

E. KODE MODUL
Gunakan kode modul secara berurutan selama satu tahun:
M1, M2, M3, M4, dan seterusnya.
Ketentuan:
dimulai dari M1 pada Semester 1;
terus berlanjut sampai Semester 2;
jangan mengulang M1 pada Bab berikutnya;
jangan memulai kembali dari M1 pada Semester 2.
Buat judul modul yang:
singkat;
menggambarkan kompetensi atau materi utamanya;
sesuai dengan TP yang dicakup.

F. ANALISIS WAKTU
Hitung terlebih dahulu:
Total JP Tersedia = Minggu Efektif × JP per Minggu
Kemudian hitung waktu buffer:
JP Buffer = Persentase Buffer × Total JP Tersedia
Waktu yang dapat digunakan untuk modul:
JP Inti = Total JP Tersedia − JP Buffer
Jika pola pertemuan sudah ditentukan, sesuaikan pembulatan JP dengan satuan pertemuan.
Contoh:
Jika:
1 pertemuan = 3 JP
maka alokasi modul sebaiknya berupa kelipatan 3 JP apabila memungkinkan.
Buffer juga sebaiknya dibulatkan ke jumlah pertemuan yang realistis.
Buffer digunakan untuk kemungkinan:
kegiatan sekolah;
asesmen;
remedial/pengayaan;
keterlambatan pembelajaran;
hari efektif yang tidak dapat digunakan;
kebutuhan penyesuaian lainnya.
Buffer jangan dimasukkan ke salah satu modul.

G. PENENTUAN JUMLAH PERTEMUAN
Tentukan jumlah pertemuan setiap modul berdasarkan:
jumlah TP;
kompleksitas kompetensi;
keluasan lingkup materi;
tingkat kesulitan materi;
kebutuhan latihan;
praktik;
pengamatan atau penyelidikan;
diskusi/presentasi;
penyusunan produk;
kebutuhan mencapai kompetensi secara realistis.
Jangan membagi waktu secara rata untuk semua modul.
Modul sederhana boleh memiliki pertemuan lebih sedikit.
Modul yang lebih kompleks dapat memiliki pertemuan lebih banyak.
Gunakan rumus:
Alokasi JP Modul = Jumlah Pertemuan × JP per Pertemuan
Contoh jika pola pembelajaran:
1 × 3 JP per minggu
maka:
2 pertemuan = 6 JP;
3 pertemuan = 9 JP;
4 pertemuan = 12 JP;
5 pertemuan = 15 JP.

H. KESEIMBANGAN WAKTU
Pastikan:
Total JP seluruh modul ≤ JP Inti semester
dan:
JP Inti + Buffer = Total JP Tersedia
Jika kebutuhan seluruh modul melebihi waktu yang tersedia:
evaluasi kembali jumlah pertemuan;
periksa kemungkinan pengelompokan TP yang lebih efisien;
jangan menghapus TP;
jangan mengurangi tuntutan TP;
jangan memaksakan pembelajaran yang tidak realistis.
Jika setelah dianalisis waktu masih tidak mencukupi, beri tanda:
[Perlu Penyesuaian Guru]

OUTPUT A — PEMETAAN MODUL DAN ALOKASI WAKTU
Buat satu tabel utama:
Semester | Bab | Kode Modul | Judul Modul |Lingkup Materi| Tujuan Pembelajaran (Tulis Kode dan Deskripsi)| Jumlah Pertemuan | Alokasi JP
Ketentuan:
satu baris = satu modul;
tuliskan semua TP yang masuk dalam modul tersebut;
pertahankan kode dan rumusan TP;
urutkan TP sesuai ATP;
jangan membuat satu baris untuk setiap TP;
jumlah pertemuan merupakan total pertemuan modul;
alokasi JP merupakan total JP modul.
Contoh struktur:
Semester
Bab
Kode Modul
Judul Modul
Lingkup Materi
Kode TP dan Tujuan Pembelajaran yang Dicakup
Pertemuan
JP
1
Bab I
M1
...
…
TP1.1 — ...; TP1.2 — ...
3
9
1
Bab I
M2
...
…
TP1.3 — ...; TP1.4 — ...
4
12
1
Bab II
M3
...
…
TP2.1 — ...; TP2.2 — ...
3
9
Dengan tabel ini guru langsung dapat melihat:
Bab I → 2 modul → M1 dan M2 → TP apa saja → berapa pertemuan → berapa JP.

OUTPUT B — REKAPITULASI PER BAB DAN SEMESTER
Buat tabel ringkas:
Semester | Bab | Jumlah TP | Jumlah Modul | Total Pertemuan | Total JP
Setelah setiap semester, tambahkan ringkasan:
Minggu Efektif : ...
Total JP Tersedia : ...
JP untuk Modul : ...
Buffer : ... JP / ... Pertemuan
Jumlah Modul : ...
Jumlah Pertemuan Modul : ...
Pada akhir tabel tambahkan:
TOTAL SATU TAHUN
yang memuat:
jumlah Bab;
jumlah TP;
jumlah modul;
jumlah pertemuan;
total JP modul;
total buffer.

I. VALIDASI AKHIR
Sebelum membuat dokumen, pastikan:
seluruh TP final telah masuk ke modul;
tidak ada TP yang hilang;
tidak ada TP baru;
kode TP tidak berubah;
rumusan TP tidak berubah;
urutan Bab tetap;
urutan TP tetap sesuai ATP;
satu TP tidak dimasukkan ke dua modul tanpa alasan yang jelas;
tidak otomatis satu TP menjadi satu modul;
jumlah modul setiap Bab berdasarkan kebutuhan;
seluruh modul berada dalam Bab yang benar;
jumlah pertemuan realistis;
JP setiap modul sesuai pola pertemuan;
total JP modul tidak melebihi JP inti;
buffer tetap tersedia;
perhitungan Output A dan Output B konsisten.
Lakukan koreksi internal jika ditemukan ketidaksesuaian.

J. FORMAT DOKUMEN
Buat hasil akhir dalam satu file Microsoft Word .docx dengan ketentuan:
ukuran halaman A4;
orientasi landscape;
menggunakan tabel Word yang sebenarnya;
tabel menyesuaikan lebar halaman;
baris judul tabel diulang pada halaman berikutnya;
menggunakan bahasa Indonesia formal, jelas, sistematis, dan ringkas.
Urutan dokumen:
Judul
Data Alokasi Waktu
OUTPUT A — PEMETAAN MODUL DAN ALOKASI WAKTU
OUTPUT B — REKAPITULASI PER BAB DAN SEMESTER
Jangan membuat:
Prota;
Promes;
Modul Ajar lengkap;
langkah kegiatan pembelajaran;
asesmen;
soal;
instrumen penilaian.
Gunakan nama file:
PEMETAAN_MODUL_DAN_ALOKASI_WAKTU_[Mata Pelajaran]_[Kelas].docx
`,rules:[{start:660,end:837,old:`Jumlah JP per Minggu : 5 JP
Pola Pertemuan per Minggu : 1 × 3 JP dan 1 x 2 JP
Minggu Efektif Semester 1 : 17 minggu
Minggu Efektif Semester 2 : 18 minggu
Persentase Buffer : 10%`,value:`Jumlah JP per Minggu : {{jp}} JP
Pola Pertemuan per Minggu : {{pola}}
Minggu Efektif Semester 1 : {{minggu1}} minggu
Minggu Efektif Semester 2 : {{minggu2}} minggu
Persentase Buffer : {{buffer}}%`}],order:3,version:2,category:"perencanaan"},"./video/notebook-video/template.json":{id:"notebook-video",title:"NotebookLM — Naskah Video",version:1,category:"video",group:"Produksi Video",order:22,description:"Naskah video yang mengikuti kalimat pada sumber aktif.",source:"Contoh prompt video NotebookLM dari pengguna.",needs:["Buku/bagian materi yang dipilih sebagai sumber aktif di NotebookLM."],note:"",fields:[{id:"bab",label:"Bab dan subbab yang dipilih",type:"textarea",required:!0,shared:!1}],format:"authored",original:"",rules:[],body:`Tolong buatkan naskah video untuk {{bab}}.
Aturan:
1. Gunakan data hanya dari sumber yang aktif.
2. Dilarang menambah/mengurangi redaksi: Gunakan kalimat dari buku secara utuh.`,example:{bab:`BAB 2 Belajar Berpantun
A. Menemukan Ciri-Ciri Pantun
B. Penggunaan Pantun dalam Kehidupan Sehari-hari`}},"./video/video-pembelajaran/template.json":{id:"video-pembelajaran",title:"Video Pembelajaran — 4 Tahap",version:1,category:"video",group:"Produksi Video",order:23,description:"Satu formulir untuk storyboard, grid referensi, gambar scene, dan animasi.",source:"Adaptasi Generator Prompt Video Pembelajaran (Chain of Prompting) kiriman pengguna.",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"Gunakan tahap secara berurutan di percakapan AI yang sama. Pilihan bahasa, audio, dan karakter diterapkan konsisten pada semua tahap.",fields:[{id:"judul",label:"Judul video",type:"text",required:!0,shared:!1},{id:"mapel",label:"Mata pelajaran",type:"text",required:!0,shared:!0},{id:"kelas",label:"Kelas / jenjang",type:"text",required:!0,shared:!0},{id:"materi",label:"Topik dan lingkup materi",type:"textarea",required:!0,shared:!1},{id:"tp",label:"Tujuan pembelajaran",type:"textarea",required:!0,shared:!1},{id:"jenisVideo",label:"Jenis video",type:"select",required:!0,shared:!1,options:["Video Konsep","Video Eksperimen","Video Demonstrasi","Video Storytelling","Video Prosedur / Tutorial","Video Studi Kasus","Video Problem-Based Learning","Video Motivasi / Pengantar","Video Review / Rangkuman"],instructionsBy:{"Video Konsep":"Hook → Pertanyaan → Analogi → Eksplorasi konsep → Contoh → Kesimpulan","Video Eksperimen":"Alat/bahan → Hipotesis → Prosedur aman → Pengamatan → Hasil → Penjelasan ilmiah","Video Demonstrasi":"Tujuan → Pengenalan alat → Demonstrasi bertahap → Poin kritis/keselamatan → Hasil → Evaluasi","Video Storytelling":"Hook → Konflik → Eksplorasi → Resolusi konsep → Refleksi","Video Prosedur / Tutorial":"Tujuan → Langkah berurutan → Kesalahan umum → Hasil → Pemeriksaan","Video Studi Kasus":"Fenomena → Masalah → Bukti → Analisis → Solusi → Pelajaran","Video Problem-Based Learning":"Masalah nyata → Investigasi fakta → Pengujian konsep → Pemecahan → Sintesis","Video Motivasi / Pengantar":"Hook → Relevansi → Kilasan materi → Ajakan belajar","Video Review / Rangkuman":"Kilas balik → Peta konsep → Contoh penghubung → Refleksi"}},{id:"durasi",label:"Durasi total",type:"combo",required:!0,shared:!1,options:["60 detik","90 detik","2 menit","3 menit","5 menit"]},{id:"bahasa",label:"Bahasa narasi",type:"combo",required:!0,shared:!1,options:["Bahasa Indonesia","Bahasa Inggris","Bahasa Indonesia sederhana"]},{id:"gaya",label:"Gaya visual",type:"combo",required:!0,shared:!1,options:["Animasi 3D edukatif","Animasi 2D","Realistis sinematik","Infografis bergerak","Stop motion"]},{id:"animasi",label:"Jenis animasi",type:"combo",required:!0,shared:!1,options:["Gerak natural halus","Motion graphics","Whiteboard animation","Stop motion"]},{id:"rasio",label:"Rasio layar",type:"combo",required:!0,shared:!1,options:["16:9","9:16","1:1"]},{id:"resolusi",label:"Resolusi",type:"combo",required:!0,shared:!1,options:["1080p","720p","4K"]},{id:"lokasi",label:"Lokasi",type:"combo",required:!0,shared:!1,options:["Ruang kelas","Lingkungan sekolah","Laboratorium","Sawah"]},{id:"suasana",label:"Suasana dan emosi",type:"combo",required:!0,shared:!1,options:["Hangat dan ingin tahu","Ceria dan bersemangat","Tenang dan reflektif","Misterius namun ramah anak"]},{id:"karakter",label:"Karakter",type:"combo",required:!0,shared:!1,options:["Guru perempuan 3D","Guru laki-laki 3D","Murid dan guru","Tanpa karakter"]},{id:"audio",label:"Audio",type:"combo",required:!0,shared:!1,options:["Narasi AI + musik latar lembut","Dubbing manual guru + musik latar","Narasi AI tanpa musik","Tanpa audio"]},{id:"popup",label:"Teks / pop-up",type:"combo",required:!0,shared:!1,options:["Kata kunci singkat dan panah","Diagram bertahap","Tanpa teks pop-up"]}],format:"authored",original:"",rules:[],body:"",example:{mapel:"IPAS",kelas:"V SD",materi:"Rantai makanan di ekosistem sawah",tp:"Murid menjelaskan hubungan antarmakhluk hidup dan memprediksi dampak perubahan populasi.",judul:"Siapa Makan Siapa di Sawah?",jenisVideo:"Video Konsep",durasi:"2 menit",bahasa:"Bahasa Indonesia",gaya:"Animasi 3D edukatif",animasi:"Gerak natural halus",rasio:"16:9",resolusi:"1080p",lokasi:"Sawah",suasana:"Hangat dan ingin tahu",karakter:"Guru perempuan 3D",audio:"Narasi AI + musik latar lembut",popup:"Kata kunci singkat dan panah"},stages:[{id:"storyboard",title:"Tahap 1 — Storyboard Master",body:`# TAHAP 1 — STORYBOARD MASTER DAN NASKAH
Bertindak sebagai perancang pembelajaran dan sutradara video.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Judul: {{judul}}
Jenis: {{jenisVideo}}
Durasi total: {{durasi}}
Bahasa: {{bahasa}}
Gaya: {{gaya}} / {{animasi}}
Layar: {{rasio}} / {{resolusi}}
Lokasi: {{lokasi}}
Suasana: {{suasana}}
Karakter: {{karakter}}
Audio: {{audio}}
Pop-up: {{popup}}
ALUR PEDAGOGIS
{{jenisVideoRules}}
KEAKURATAN DAN KELENGKAPAN
Utamakan tujuan pembelajaran dan sumber yang dilampirkan. Bila sumber belum terbaca, minta sumber sebelum menyusun materi final; jangan mengarang kutipan, halaman, atau data faktual. Bedakan contoh rekaan dari fakta. Sertakan kunci/rubrik dan pembahasan yang konsisten. Jangan menyatakan jawaban terbuka benar hanya karena terisi atau banyak katanya. Sediakan tinjauan guru bila penilaian otomatis tidak memadai.
Susun adegan adaptif agar total durasi sama dengan target. Jangan mengunci semua adegan 8 detik. Gunakan visual hook, penjelasan, demonstrasi, dan refleksi sesuai jenis video. Narasi jelas sekitar 120–135 kata/menit, sesuaikan panjangnya dengan detik setiap adegan dan waktu jeda; jangan memaksa penjelasan panjang dalam klip singkat.
Keluaran tabel: Scene | Durasi | Latar | Visual/aksi | Narasi dalam {{bahasa}} | Transisi | Tujuan adegan.
Jika audio dipilih tanpa narasi, jangan menambahkan dialog. Jika dubbing manual, siapkan naskah untuk guru, bukan instruksi menghasilkan suara AI. Berhenti setelah tabel dan tunggu Tahap 2.`},{id:"grid",title:"Tahap 2 — Grid / Lembar Referensi",body:`# TAHAP 2 — ADAPTIVE STORYBOARD GRID
Gunakan storyboard Tahap 1 dari percakapan ini; minta storyboard jika belum tersedia.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Judul: {{judul}}
Jenis: {{jenisVideo}}
Durasi total: {{durasi}}
Bahasa: {{bahasa}}
Gaya: {{gaya}} / {{animasi}}
Layar: {{rasio}} / {{resolusi}}
Lokasi: {{lokasi}}
Suasana: {{suasana}}
Karakter: {{karakter}}
Audio: {{audio}}
Pop-up: {{popup}}
Buat satu prompt gambar Bahasa Inggris untuk lembar referensi karakter, latar, dan panel storyboard. Sesuaikan grid dengan jumlah scene: 4 = 2×2, 6 = 2×3, 9 = 3×3; untuk lebih dari 10 scene pisahkan lembar karakter, latar, dan panel inti agar tidak terlalu padat. Pertahankan konsistensi pakaian, proporsi, palet, dan pencahayaan. Jika tanpa karakter, fokus pada objek dan lingkungan.
Keluaran: rekomendasi grid → Master Image Prompt → Negative Prompt. Negative prompt: no text, no typography, no subtitles, no watermark, no distorted anatomy. Jangan menggambar teks materi pada aset mentah. Tunggu Tahap 3.`},{id:"gambar",title:"Tahap 3 — Gambar per Scene",body:`# TAHAP 3 — GAMBAR DETAIL PER SCENE
Gunakan scene Tahap 1 dan lembar referensi Tahap 2, jangan mengubah urutan maupun TP.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Judul: {{judul}}
Jenis: {{jenisVideo}}
Durasi total: {{durasi}}
Bahasa: {{bahasa}}
Gaya: {{gaya}} / {{animasi}}
Layar: {{rasio}} / {{resolusi}}
Lokasi: {{lokasi}}
Suasana: {{suasana}}
Karakter: {{karakter}}
Audio: {{audio}}
Pop-up: {{popup}}
Untuk setiap scene, buat blok: Nomor | Purpose | Durasi | Prompt Gambar Bahasa Inggris | Negative Prompt.
Komposisi menyisakan ruang untuk grafis saat editing. Gambar tidak memuat tulisan, rumus, label, atau watermark. Konsistenkan karakter, pencahayaan dan lingkungan antarscene; tanpa karakter berarti fokus objek/latar. Deskripsikan sudut kamera, aksi, lokasi dan kesinambungan dengan frame akhir scene sebelumnya. Negative prompt: no text, no letters, no watermarks, no extra limbs, no blurry details. Kerjakan seluruh scene kemudian tunggu Tahap 4.`},{id:"animasi",title:"Tahap 4 — Animasi Video",body:`# TAHAP 4 — PROMPT ANIMASI VIDEO PER SCENE
Gunakan gambar Tahap 3 sebagai opening frame, serta narasi/durasi dari storyboard Tahap 1.
KONTEKS
Mata pelajaran: {{mapel}}
Kelas/jenjang: {{kelas}}
Materi: {{materi}}
TP: {{tp}}
Judul: {{judul}}
Jenis: {{jenisVideo}}
Durasi total: {{durasi}}
Bahasa: {{bahasa}}
Gaya: {{gaya}} / {{animasi}}
Layar: {{rasio}} / {{resolusi}}
Lokasi: {{lokasi}}
Suasana: {{suasana}}
Karakter: {{karakter}}
Audio: {{audio}}
Pop-up: {{popup}}
Buat blok per scene: Opening Frame | Learning Goal | Main Action | Pop-up | Voice/Audio | Hold Frame | Spesifikasi.
Gerakan memiliki awal stabil, aksi utama halus, dan akhir yang melambat agar dapat disambung. Sesuaikan durasi diam dengan panjang klip; jangan menghabiskan klip pendek hanya untuk diam.
Pop-up mengikuti {{popup}}, dalam {{bahasa}}. Jika tanpa pop-up, jangan menambahkan teks. Jika generator tidak mendukung teks presisi, minta overlay dilakukan di editor video. Audio mengikuti pilihan {{audio}}: dubbing manual tidak memakai suara AI; tanpa audio tidak memakai narasi, musik, atau efek. Narasi AI memakai bahasa pilihan, bukan selalu bahasa Indonesia.
Cantumkan rasio {{rasio}}, resolusi target {{resolusi}}, gaya {{animasi}}. Sesuaikan pembagian klip dengan batas layanan yang benar-benar dipakai; jangan menjanjikan durasi/resolusi yang tidak didukung. Jangan mengklaim video sudah dirender; keluaran tahap ini adalah prompt siap pakai.`}]},"./website/aplikasi-website/template.json":{id:"aplikasi-website",title:"Generator Aplikasi / Website",version:1,category:"website",group:"Media & Kreasi",order:30,description:"Susun spesifikasi aplikasi, lalu gunakan di Gemini Gem pilihan Bapak.",source:"Rancangan MAHARATI berdasarkan arahan dan referensi pengguna, 3 Oktober 2026",needs:["Materi atau sumber yang relevan tersedia di percakapan AI tujuan."],note:"Salin prompt, lalu buka Gem. Gem mungkin memerlukan akun Google atau izin akses. Isi Gem tidak dibaca atau disalin otomatis oleh MAHARATI.",fields:[{id:"nama",label:"Nama aplikasi",type:"text",required:!0,shared:!1},{id:"tujuan",label:"Tujuan dan masalah yang diselesaikan",type:"textarea",required:!0,shared:!1},{id:"pengguna",label:"Pengguna dan hak akses",type:"textarea",required:!0,shared:!1},{id:"fitur",label:"Fitur utama",type:"textarea",required:!0,shared:!1},{id:"platform",label:"Target platform",type:"combo",required:!0,shared:!1,options:["Website responsif","Aplikasi kelas pada IFP","Dashboard sekolah"]},{id:"data",label:"Penyimpanan",type:"combo",required:!0,shared:!1,options:["Tanpa akun, data lokal","Supabase Auth + PostgreSQL + RLS","Supabase untuk data, Drive untuk lampiran"]},{id:"gaya",label:"Arah desain",type:"combo",required:!0,shared:!1,options:["Modern profesional","Minimalis edukatif","Dashboard biru dan ungu"]},{id:"batasan",label:"Batasan / kebutuhan khusus",type:"textarea",required:!1,shared:!1}],format:"authored",original:"",rules:[],body:`Bantu saya membangun aplikasi {{nama}}.
Tujuan: {{tujuan}}
Pengguna dan hak akses: {{pengguna}}
Fitur: {{fitur}}
Platform: {{platform}}
Penyimpanan: {{data}}
Desain: {{gaya}}
Batasan: {{batasan}}
Mulai dengan alur pengguna dan pembagian modul. Setiap fitur besar mempunyai folder sendiri; pisahkan komponen bersama, konfigurasi publik, layanan data, dan migrasi database. Jelaskan berkas yang perlu diubah saat satu halaman diperbaiki. Jangan menyalin seluruh aplikasi menjadi satu file besar bila memakai banyak modul.
Jika memakai akun, autentikasi dikelola layanan resmi dan otorisasi diperiksa server/RLS. Tidak ada password hardcoded, kunci rahasia, atau status admin yang dipercaya dari localStorage. Jangan mengklaim kode browser tidak bisa dilihat; lindungi data privat dan fitur layanan di backend. Tautan lampiran tidak boleh menjadi tautan publik jika isinya privat.
Buat empty state, loading, error, retry, validasi, konfirmasi hapus, pemulihan draf, dan tata letak HP/laptop. Sediakan skema database, policy per pemilik/peran, serta tes lintas akun jika memakai backend. Jangan mengarang bahwa layanan sudah aktif ketika kredensial belum diatur.
Keluaran: struktur folder, implementasi lengkap per modul, konfigurasi contoh tanpa rahasia, langkah menjalankan dan deploy, serta pengujian. Tanyakan hanya kebutuhan penting yang belum dapat disimpulkan.`,example:{nama:"Ruang Proyek Kelas",tujuan:"Membantu guru mengelola proyek kelompok dan umpan balik.",pengguna:"Guru mengelola kelas; siswa melihat proyek kelompoknya sendiri.",fitur:"Daftar proyek, progres, rubrik, komentar guru, dan riwayat revisi.",platform:"Website responsif",data:"Supabase Auth + PostgreSQL + RLS",gaya:"Modern profesional",batasan:"Nyaman dibuka di HP dan tidak menggunakan API AI berbayar."},externalLink:{label:"Buka Gemini Gem — Pembuat Aplikasi",url:"https://gemini.google.com/gem/1PkRd4F1inLLcsyHaEXNcWCwecTcLRAx-?usp=sharing"}}})).map(i=>i).sort((i,n)=>i.order-n.order),Gt=[{id:"perencanaan",name:"Perencanaan Pembelajaran",short:"Perencanaan",description:"Dari analisis CP hingga asesmen. Susun perangkat pembelajaran secara terarah.",icon:"book",ready:!0},{id:"media",name:"Bahan Tayang",short:"Bahan Tayang",description:"Wujudkan materi menjadi media pembelajaran yang menarik.",icon:"image",ready:!0},{id:"interaktif",name:"Media Pembelajaran Interaktif",short:"Media Interaktif",description:"Canva, Gemini Web, presentasi Lumi, dan peta belajar interaktif.",icon:"image",ready:!0},{id:"game",name:"Prompt Game",short:"Game",description:"Bawa pengalaman bermain yang bermakna ke ruang kelas.",icon:"game",ready:!0},{id:"website",name:"Aplikasi / Website — Gems",short:"Aplikasi / Website",description:"Ubah ide menjadi alat bantu digital untuk pembelajaran.",icon:"code",ready:!0},{id:"video",name:"Prompt Video",short:"Video",description:"Bangun cerita dan visual untuk menjelaskan materi.",icon:"video",ready:!0}];Gt.push({id:"kuis",name:"Prompt Kuis",short:"Kuis",description:"Soal, pembahasan, dan aplikasi kuis yang sesuai tujuan belajar.",icon:"book",ready:!0});const uu=$k.filter(i=>!["promes","notebook-video"].includes(i.id)).map(i=>i.id==="prota"?{...i,title:"Prota & Prosem",description:"Satu isian bersama untuk program tahunan dan semester."}:i),Io=i=>$k.find(n=>n.id===i);function d0({children:i}){const{id:n=""}=vk(),r=Qs(),o=Io(n)?.category||"perencanaan",m=uu.filter(g=>g.category===o),c=m.findIndex(g=>g.id===n),h=Gt.find(g=>g.id===o)?.short;return k.jsxs("div",{className:"prompt-workspace",children:[k.jsxs("aside",{className:"prompt-rail","aria-label":"Jenis prompt",children:[k.jsxs("div",{className:"rail-heading",children:[k.jsx(zj,{size:18}),k.jsx("strong",{children:h})]}),k.jsx("p",{children:"Pilih langsung sesuai kebutuhan."}),k.jsx("nav",{children:m.map((g,b)=>k.jsxs(tu,{to:"/prompt/"+g.id,children:[k.jsx("span",{children:String(b+1).padStart(2,"0")}),g.title]},g.id))}),k.jsx(Ra,{className:"rail-profile",to:"/profil",children:"Atur profil mengajar →"})]}),k.jsxs("div",{className:"prompt-content",children:[k.jsxs("label",{className:"prompt-switch",children:["Pindah jenis prompt",k.jsx("select",{"aria-label":"Pindah jenis prompt",value:n,onChange:g=>r("/prompt/"+g.target.value),children:m.map(g=>k.jsx("option",{value:g.id,children:g.title},g.id))})]}),i,k.jsxs("nav",{className:"prompt-pager","aria-label":"Prompt sebelumnya dan berikutnya",children:[c>0?k.jsxs(Ra,{to:"/prompt/"+m[c-1].id,children:[k.jsx(Nk,{size:17}),k.jsxs("span",{children:[k.jsx("small",{children:"Sebelumnya"}),m[c-1].title]})]}):k.jsx("span",{}),c>=0&&c<m.length-1&&k.jsxs(Ra,{to:"/prompt/"+m[c+1].id,children:[k.jsxs("span",{children:[k.jsx("small",{children:"Berikutnya"}),m[c+1].title]}),k.jsx(iu,{size:17})]})]})]})]})}const Jk="https://gemini.google.com/gem/1PkRd4F1inLLcsyHaEXNcWCwecTcLRAx-?usp=sharing";function m0(){return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"APLIKASI / WEBSITE"}),k.jsx("h1",{children:"Buat aplikasi bersama Gems."}),k.jsx("p",{className:"lead",children:"Langsung gunakan Gems milik Gufron. Tidak perlu mengisi atau menyalin prompt tambahan dari MAHARATI."}),k.jsx("a",{className:"button",href:Jk,target:"_blank",rel:"noopener noreferrer",children:"Buka Gems Gemini ↗"}),k.jsx("p",{className:"muted",children:"Memerlukan internet dan mungkin login Google. Gemini dapat membatasi tampilan di dalam website lain. Jika bingkai kosong atau meminta login, gunakan tombol Buka Gems Gemini."}),k.jsx("iframe",{className:"gems-frame",src:Jk,title:"Gems Gemini — Generator Aplikasi",referrerPolicy:"no-referrer"})]})}const $o=window.location.protocol==="file:",Gk=()=>new URL(".",window.location.href).href,Hk=i=>Gk()+"#/"+i.replace(/^\//,""),zk=i=>new URL(i,new URL(".",window.location.href)).href;var Jo={exports:{}},Lr={},Go={exports:{}},Ho={};var qk;function c0(){return qk||(qk=1,(function(i){function n(R,G){var Q=R.length;R.push(G);a:for(;0<Q;){var X=Q-1>>>1,ma=R[X];if(0<o(ma,G))R[X]=G,R[Q]=ma,Q=X;else break a}}function r(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var G=R[0],Q=R.pop();if(Q!==G){R[0]=Q;a:for(var X=0,ma=R.length,Va=ma>>>1;X<Va;){var Ue=2*(X+1)-1,V=R[Ue],w=Ue+1,H=R[w];if(0>o(V,Q))w<ma&&0>o(H,V)?(R[X]=H,R[w]=Q,X=w):(R[X]=V,R[Ue]=Q,X=Ue);else if(w<ma&&0>o(H,Q))R[X]=H,R[w]=Q,X=w;else break a}}return G}function o(R,G){var Q=R.sortIndex-G.sortIndex;return Q!==0?Q:R.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var g=[],b=[],y=1,f=null,j=3,T=!1,P=!1,E=!1,S=!1,L=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function z(R){for(var G=r(b);G!==null;){if(G.callback===null)u(b);else if(G.startTime<=R)u(b),G.sortIndex=G.expirationTime,n(g,G);else break;G=r(b)}}function ea(R){if(E=!1,z(R),!P)if(r(g)!==null)P=!0,W||(W=!0,Ma());else{var G=r(b);G!==null&&pa(ea,G.startTime-R)}}var W=!1,q=-1,ia=5,ya=-1;function Pa(){return S?!0:!(i.unstable_now()-ya<ia)}function wa(){if(S=!1,W){var R=i.unstable_now();ya=R;var G=!0;try{a:{P=!1,E&&(E=!1,U(q),q=-1),T=!0;var Q=j;try{e:{for(z(R),f=r(g);f!==null&&!(f.expirationTime>R&&Pa());){var X=f.callback;if(typeof X=="function"){f.callback=null,j=f.priorityLevel;var ma=X(f.expirationTime<=R);if(R=i.unstable_now(),typeof ma=="function"){f.callback=ma,z(R),G=!0;break e}f===r(g)&&u(g),z(R)}else u(g);f=r(g)}if(f!==null)G=!0;else{var Va=r(b);Va!==null&&pa(ea,Va.startTime-R),G=!1}}break a}finally{f=null,j=Q,T=!1}G=void 0}}finally{G?Ma():W=!1}}}var Ma;if(typeof O=="function")Ma=function(){O(wa)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,oa=I.port2;I.port1.onmessage=wa,Ma=function(){oa.postMessage(null)}}else Ma=function(){L(wa,0)};function pa(R,G){q=L(function(){R(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ia=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_next=function(R){switch(j){case 1:case 2:case 3:var G=3;break;default:G=j}var Q=j;j=G;try{return R()}finally{j=Q}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Q=j;j=R;try{return G()}finally{j=Q}},i.unstable_scheduleCallback=function(R,G,Q){var X=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?X+Q:X):Q=X,R){case 1:var ma=-1;break;case 2:ma=250;break;case 5:ma=1073741823;break;case 4:ma=1e4;break;default:ma=5e3}return ma=Q+ma,R={id:y++,callback:G,priorityLevel:R,startTime:Q,expirationTime:ma,sortIndex:-1},Q>X?(R.sortIndex=Q,n(b,R),r(g)===null&&R===r(b)&&(E?(U(q),q=-1):E=!0,pa(ea,Q-X))):(R.sortIndex=ma,n(g,R),P||T||(P=!0,W||(W=!0,Ma()))),R},i.unstable_shouldYield=Pa,i.unstable_wrapCallback=function(R){var G=j;return function(){var Q=j;j=G;try{return R.apply(this,arguments)}finally{j=Q}}}})(Ho)),Ho}var Vk;function k0(){return Vk||(Vk=1,Go.exports=c0()),Go.exports}var Fk;function h0(){if(Fk)return Lr;Fk=1;var i=k0(),n=ko(),r=Nj();function u(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function m(a){for(var e=a,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?a:null}function c(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function h(a){if(a.tag===31){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function g(a){if(m(a)!==a)throw Error(u(188))}function b(a){var e=a.alternate;if(!e){if(e=m(a),e===null)throw Error(u(188));return e!==a?null:a}for(var t=a,s=e;;){var l=t.return;if(l===null)break;var d=l.alternate;if(d===null){if(s=l.return,s!==null){t=s;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===t)return g(l),a;if(d===s)return g(l),e;d=d.sibling}throw Error(u(188))}if(t.return!==s.return)t=l,s=d;else{for(var p=!1,v=l.child;v;){if(v===t){p=!0,t=l,s=d;break}if(v===s){p=!0,s=l,t=d;break}v=v.sibling}if(!p){for(v=d.child;v;){if(v===t){p=!0,t=d,s=l;break}if(v===s){p=!0,s=d,t=l;break}v=v.sibling}if(!p)throw Error(u(189))}}if(t.alternate!==s)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?a:e}function y(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=y(a),e!==null)return e;a=a.sibling}return null}function f(a,e,t,s,l,d){for(;a!==null;){if((a.tag===5||a.tag===27||a.tag===6)&&t(a,s,l,d)||(a.tag!==22||a.memoizedState===null)&&(e||a.tag!==5&&a.tag!==27)&&f(a.child,e,t,s,l,d))return!0;a=a.sibling}return!1}function j(a){for(a=a.return;a!==null;){if(a.tag===3||a.tag===5||a.tag===27)return a;a=a.return}return null}function T(a){var e=!1;for(a=a.return;a!==null&&(a.tag===4&&(e=!0),!(a.tag===3||a.tag===5||a.tag===27));)a=a.return;return e}function P(a){var e=[null,null],t=j(a);return t===null||E(e,a,t.child,{foundSelf:!1}),e}function E(a,e,t,s){for(;t!==null;){if(t===e)s.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(s.foundSelf)return a[1]=t,!0;a[0]=t}else if((t.tag!==22||t.memoizedState===null)&&E(a,e,t.child,s))return!0;t=t.sibling}return!1}function S(a){switch(a.tag){case 5:case 27:case 6:return a.stateNode;case 3:return a.stateNode.containerInfo;default:throw Error(u(559))}}var L=null,U=null;function O(a,e,t){return a===t?!0:a===e?(L=a,!0):!1}function z(a,e,t){return a===t?(U=a,!1):a===e?(U!==null&&(L=a),!0):!1}function ea(a){if(a===null)return null;do a=a===null?null:a.return;while(a&&a.tag!==5&&a.tag!==27&&a.tag!==3);return a||null}function W(a,e,t){for(var s=0,l=a;l;l=t(l))s++;l=0;for(var d=e;d;d=t(d))l++;for(;0<s-l;)a=t(a),s--;for(;0<l-s;)e=t(e),l--;for(;s--;){if(a===e||e!==null&&a===e.alternate)return a;a=t(a),e=t(e)}return null}var q=Object.assign,ia=Symbol.for("react.element"),ya=Symbol.for("react.transitional.element"),Pa=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),oa=Symbol.for("react.consumer"),pa=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ma=Symbol.for("react.lazy"),Va=Symbol.for("react.activity"),Ue=Symbol.for("react.legacy_hidden"),V=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),H=Symbol.for("react.recoverable"),ra=Symbol.iterator;function ua(a){return a===null||typeof a!="object"?null:(a=ra&&a[ra]||a["@@iterator"],typeof a=="function"?a:null)}var Ea=Symbol.for("react.client.reference");function Na(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Ea?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case wa:return"Fragment";case I:return"Profiler";case Ma:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList";case Va:return"Activity";case w:return"ViewTransition"}if(typeof a=="object")switch(a.$$typeof){case Pa:return"Portal";case pa:return a.displayName||"Context";case oa:return(a._context.displayName||"Context")+".Consumer";case R:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case X:return e=a.displayName||null,e!==null?e:Na(a.type)||"Memo";case ma:e=a._payload,a=a._init;try{return Na(a(e))}catch{}}return null}var Ca=Array.isArray,ta=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qn={pending:!1,data:null,method:null,action:null},dd=[],Ki=-1;function _n(a){return{current:a}}function ke(a){0>Ki||(a.current=dd[Ki],dd[Ki]=null,Ki--)}function Ja(a,e){Ki++,dd[Ki]=a.current,a.current=e}var Pn=_n(null),as=_n(null),ct=_n(null),Bu=_n(null);function Ou(a,e){switch(Ja(ct,e),Ja(as,a),Ja(Pn,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?Wf(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=Wf(e),a=Zf(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}ke(Pn),Ja(Pn,a)}function Li(){ke(Pn),ke(as),ke(ct)}function md(a){var e=a.memoizedState;e!==null&&(Pr._currentValue=e.memoizedState,Ja(Bu,a)),e=Pn.current;var t=Zf(e,a.type);e!==t&&(Ja(as,a),Ja(Pn,t))}function Du(a){as.current===a&&(ke(Pn),ke(as)),Bu.current===a&&(ke(Bu),Pr._currentValue=qn)}var cd,fg;function kt(a){if(cd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||"",fg=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cd+a+fg}var kd=!1;function hd(a,e){if(!a||kd)return"";kd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var N=Y}Reflect.construct(a,[],J)}else{try{J.call()}catch(Y){N=Y}J=!1;try{var D=Object.getOwnPropertyDescriptor(a.prototype,"props");Object.defineProperty(a.prototype,"props",{configurable:!0,set:function(){throw Error()}}),J=!0,new a}finally{J&&(D!==void 0?Object.defineProperty(a.prototype,"props",D):delete a.prototype.props)}}}else{try{throw Error()}catch(Y){N=Y}(J=a())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&N&&typeof Y.stack=="string")return[Y.stack,N.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),p=d[0],v=d[1];if(p&&v){var A=p.split(`
`),C=v.split(`
`);for(l=s=0;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(s===A.length||l===C.length)for(s=A.length-1,l=C.length-1;1<=s&&0<=l&&A[s]!==C[l];)l--;for(;1<=s&&0<=l;s--,l--)if(A[s]!==C[l]){if(s!==1||l!==1)do if(s--,l--,0>l||A[s]!==C[l]){var K=`
`+A[s].replace(" at new "," at ");return a.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",a.displayName)),K}while(1<=s&&0<=l);break}}}finally{kd=!1,Error.prepareStackTrace=t}return(t=a?a.displayName||a.name:"")?kt(t):""}function IA(a,e){switch(a.tag){case 26:case 27:case 5:return kt(a.type);case 16:return kt("Lazy");case 13:return a.child!==e&&e!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return hd(a.type,!1);case 11:return hd(a.type.render,!1);case 1:return hd(a.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function yg(a){try{var e="",t=null;do e+=IA(a,t),t=a,a=a.return;while(a);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var gd=Object.prototype.hasOwnProperty,pd=i.unstable_scheduleCallback,bd=i.unstable_cancelCallback,$A=i.unstable_shouldYield,JA=i.unstable_requestPaint,Ke=i.unstable_now,GA=i.unstable_getCurrentPriorityLevel,vg=i.unstable_ImmediatePriority,jg=i.unstable_UserBlockingPriority,Uu=i.unstable_NormalPriority,HA=i.unstable_LowPriority,Sg=i.unstable_IdlePriority,zA=i.log,qA=i.unstable_setDisableYieldValue,es=null,Le=null;function ht(a){if(typeof zA=="function"&&qA(a),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(es,a)}catch{}}var Ie=Math.clz32?Math.clz32:YA,VA=Math.log,FA=Math.LN2;function YA(a){return a>>>=0,a===0?32:31-(VA(a)/FA|0)|0}var Ku=256,Lu=262144,Iu=4194304;function Qt(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&-a;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function $u(a,e,t){var s=a.pendingLanes;if(s===0)return 0;var l=0,d=a.suspendedLanes,p=a.pingedLanes;a=a.warmLanes;var v=s&134217727;return v!==0?(s=v&~d,s!==0?l=Qt(s):(p&=v,p!==0?l=Qt(p):t||(t=v&~a,t!==0&&(l=Qt(t))))):(v=s&~d,v!==0?l=Qt(v):p!==0?l=Qt(p):t||(t=s&~a,t!==0&&(l=Qt(t)))),l===0?0:e!==0&&e!==l&&(e&d)===0&&(d=l&-l,t=e&-e,d>=t||d===32&&(t&4194048)!==0)?e:l}function ns(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function Tg(a,e){(e&8)!==0&&(e|=e&32);var t=a.entangledLanes;if(t!==0)for(a=a.entanglements,t&=e;0<t;){var s=31-Ie(t),l=1<<s;e|=a[s],t&=~l}return e}function XA(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ag(){var a=Iu;return Iu<<=1,(Iu&62914560)===0&&(Iu=4194304),a}function fd(a){for(var e=[],t=0;31>t;t++)e.push(a);return e}function ts(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function QA(a,e,t,s,l,d){var p=a.pendingLanes;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=t,a.entangledLanes&=t,a.errorRecoveryDisabledLanes&=t,a.shellSuspendCounter=0;var v=a.entanglements,A=a.expirationTimes,C=a.hiddenUpdates;for(t=p&~t;0<t;){var K=31-Ie(t),J=1<<K;v[K]=0,A[K]=-1;var N=C[K];if(N!==null)for(C[K]=null,K=0;K<N.length;K++){var D=N[K];D!==null&&(D.lane&=-536870913)}t&=~J}s!==0&&_g(a,s,0),d!==0&&l===0&&a.tag!==0&&(a.suspendedLanes|=d&~(p&~e))}function _g(a,e,t){a.pendingLanes|=e,a.suspendedLanes&=~e;var s=31-Ie(e);a.entangledLanes|=e,a.entanglements[s]=a.entanglements[s]|1073741824|t&261930}function Pg(a,e){var t=a.entangledLanes|=e;for(a=a.entanglements;t;){var s=31-Ie(t),l=1<<s;l&e|a[s]&e&&(a[s]|=e),t&=~l}}function wg(a,e){var t=e&-e;return t=(t&42)!==0?1:yd(t),(t&(a.suspendedLanes|e))!==0?0:t}function yd(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function vd(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Mg(){var a=ka.p;return a!==0?a:(a=window.event,a===void 0?32:Dy(a.type))}function Eg(a,e){var t=ka.p;try{return ka.p=a,e()}finally{ka.p=t}}var Vn=Math.random().toString(36).slice(2),he="__reactFiber$"+Vn,Ee="__reactProps$"+Vn,Ii="__reactContainer$"+Vn,Rg="__reactEvents$"+Vn,WA="__reactListeners$"+Vn,ZA="__reactHandles$"+Vn,Ng="__reactResources$"+Vn,is="__reactMarker$"+Vn,Ju="__reactLoad$"+Vn;function Gu(a){delete a[he],delete a[Ee],delete a[WA],delete a[ZA]}function Wt(a){var e;if(e=a[he])return e;for(var t=a.parentNode;t;){if(e=t[Ii]||t[he]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(a=py(a);a!==null;){if(t=a[he])return t;a=py(a)}return e}a=t,t=a.parentNode}return null}function $i(a){if(a=a[he]||a[Ii]){var e=a.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return a}return null}function rs(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(u(33))}function Ji(a){var e=a[Ng];return e||(e=a[Ng]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(a){a[is]=!0}function xg(a){a[Ju]=void 0}var Cg=new Set,Bg={};function Zt(a,e){Gi(a,e),Gi(a+"Capture",e)}function Gi(a,e){for(Bg[a]=e,a=0;a<e.length;a++)Cg.add(e[a])}var a_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Og={},Dg={};function e_(a){return gd.call(Dg,a)?!0:gd.call(Og,a)?!1:a_.test(a)?Dg[a]=!0:(Og[a]=!0,!1)}var xa=!1;function Ug(){var a=xa;return xa=!1,a}function Hu(a,e,t){if(e_(e))if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,t)}}function zu(a,e,t){if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,t)}}function Fn(a,e,t,s){if(s===null)a.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttributeNS(e,t,s)}}function $e(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Kg(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n_(a,e,t){var s=Object.getOwnPropertyDescriptor(a.constructor.prototype,e);if(!a.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,d=s.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){t=""+p,d.call(this,p)}}),Object.defineProperty(a,e,{enumerable:s.enumerable}),{getValue:function(){return t},setValue:function(p){t=""+p},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function jd(a){if(!a._valueTracker){var e=Kg(a)?"checked":"value";a._valueTracker=n_(a,e,""+a[e])}}function Lg(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var t=e.getValue(),s="";return a&&(s=Kg(a)?a.checked?"true":"false":a.value),a=s,a!==t?(e.setValue(a),!0):!1}var t_=/[\n"\\]/g;function We(a){return a.replace(t_,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Sd(a,e,t,s,l,d,p,v){a.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?a.type=p:a.removeAttribute("type"),e!=null?p==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+$e(e)):a.value!==""+$e(e)&&(a.value=""+$e(e)):p!=="submit"&&p!=="reset"||a.removeAttribute("value"),e!=null?p==="number"&&a.value==e?Td(a,$e(a.value)):Td(a,$e(e)):t!=null?Td(a,$e(t)):s!=null&&a.removeAttribute("value"),l==null&&d!=null&&(a.defaultChecked=!!d),l!=null&&(a.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?a.name=""+$e(v):a.removeAttribute("name")}function Ig(a,e,t,s,l,d,p,v){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(a.type=d),e!=null||t!=null){if(!(d!=="submit"&&d!=="reset"||e!=null)){jd(a);return}t=t!=null?""+$e(t):"",e=e!=null?""+$e(e):t,v||e===a.value||(a.value=e),a.defaultValue=e}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,a.checked=v?a.checked:!!s,a.defaultChecked=!!s,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(a.name=p),jd(a)}function Td(a,e){a.defaultValue!==""+e&&(a.defaultValue=""+e)}function Hi(a,e,t,s){if(a=a.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<a.length;t++)l=e.hasOwnProperty("$"+a[t].value),a[t].selected!==l&&(a[t].selected=l),l&&s&&(a[t].defaultSelected=!0)}else{for(t=""+$e(t),e=null,l=0;l<a.length;l++){if(a[l].value===t){a[l].selected=!0,s&&(a[l].defaultSelected=!0);return}e!==null||a[l].disabled||(e=a[l])}e!==null&&(e.selected=!0)}}function $g(a,e,t){if(e!=null&&(e=""+$e(e),e!==a.value&&(a.value=e),t==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=t!=null?""+$e(t):""}function Jg(a,e,t,s){if(e==null){if(s!=null){if(t!=null)throw Error(u(92));if(Ca(s)){if(1<s.length)throw Error(u(93));s=s[0]}t=s}t==null&&(t=""),e=t}t=$e(e),a.defaultValue=t,s=a.textContent,s===t&&s!==""&&s!==null&&(a.value=s),jd(a)}function zi(a,e){if(e){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=e;return}}a.textContent=e}var i_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gg(a,e,t){var s=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?s?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":s?a.setProperty(e,t):typeof t!="number"||t===0||i_.has(e)?e==="float"?a.cssFloat=t:a[e]=(""+t).trim():a[e]=t+"px"}function Hg(a,e,t){if(e!=null&&typeof e!="object")throw Error(u(62));if(a=a.style,t!=null){for(var s in t)!t.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?a.setProperty(s,""):s==="float"?a.cssFloat="":a[s]="",xa=!0);for(var l in e)s=e[l],e.hasOwnProperty(l)&&t[l]!==s&&(Gg(a,l,s),xa=!0)}else for(var d in e)e.hasOwnProperty(d)&&Gg(a,d,e[d])}function Ad(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qu(a){return s_.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function wn(){}var _d=null;function Pd(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var qi=null,Vi=null;function zg(a){var e=$i(a);if(e&&(a=e.stateNode)){var t=a[Ee]||null;a:switch(a=e.stateNode,e.type){case"input":if(Sd(a,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+We(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var s=t[e];if(s!==a&&s.form===a.form){var l=s[Ee]||null;if(!l)throw Error(u(90));Sd(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)s=t[e],s.form===a.form&&Lg(s)}break a;case"textarea":$g(a,t.value,t.defaultValue);break a;case"select":e=t.value,e!=null&&Hi(a,!!t.multiple,e,!1)}}}var wd=!1;function qg(a,e,t){if(wd)return a(e,t);wd=!0;try{var s=a(e);return s}finally{if(wd=!1,(qi!==null||Vi!==null)&&(ql(),qi&&(e=qi,a=Vi,Vi=qi=null,zg(e),a)))for(e=0;e<a.length;e++)zg(a[e])}}function ss(a,e){var t=a.stateNode;if(t===null)return null;var s=t[Ee]||null;if(s===null)return null;t=s[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(a=a.type,s=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!s;break a;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(u(231,e,typeof t));return t}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=!1;if(Yn)try{var us={};Object.defineProperty(us,"passive",{get:function(){Md=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Md=!1}var gt=null,Ed=null,Vu=null;function Vg(){if(Vu)return Vu;var a,e=Ed,t=e.length,s,l="value"in gt?gt.value:gt.textContent,d=l.length;for(a=0;a<t&&e[a]===l[a];a++);var p=t-a;for(s=1;s<=p&&e[t-s]===l[d-s];s++);return Vu=l.slice(a,1<s?1-s:void 0)}function Fu(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function Yu(){return!0}function Fg(){return!1}function Se(a){function e(t,s,l,d,p){this._reactName=t,this._targetInst=l,this.type=s,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var v in a)a.hasOwnProperty(v)&&(t=a[v],this[v]=t?t(d):d[v]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Yu:Fg,this.isPropagationStopped=Fg,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yu)},persist:function(){},isPersistent:Yu}),e}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=Se(pt),ls=q({},pt,{view:0,detail:0}),u_=Se(ls),Rd,Nd,os,Qu=q({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==os&&(os&&a.type==="mousemove"?(Rd=a.screenX-os.screenX,Nd=a.screenY-os.screenY):Nd=Rd=0,os=a),Rd)},movementY:function(a){return"movementY"in a?a.movementY:Nd}}),Yg=Se(Qu),l_=q({},Qu,{dataTransfer:0}),o_=Se(l_),d_=q({},ls,{relatedTarget:0}),xd=Se(d_),m_=q({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),c_=Se(m_),k_=q({},pt,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),h_=Se(k_),g_=q({},pt,{data:0}),Xg=Se(g_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=f_[a])?!!e[a]:!1}function Cd(){return y_}var v_=q({},ls,{key:function(a){if(a.key){var e=p_[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=Fu(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?b_[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(a){return a.type==="keypress"?Fu(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Fu(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),j_=Se(v_),S_=q({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qg=Se(S_),T_=q({},pt,{submitter:0}),A_=Se(T_),__=q({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),P_=Se(__),w_=q({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),M_=Se(w_),E_=q({},Qu,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=Se(E_),N_=q({},pt,{newState:0,oldState:0,source:0}),x_=Se(N_),C_=[9,13,27,32],Bd=Yn&&"CompositionEvent"in window,ds=null;Yn&&"documentMode"in document&&(ds=document.documentMode);var B_=Yn&&"TextEvent"in window&&!ds,Wg=Yn&&(!Bd||ds&&8<ds&&11>=ds),Zg=" ",ap=!1;function ep(a,e){switch(a){case"keyup":return C_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Fi=!1;function O_(a,e){switch(a){case"compositionend":return np(e);case"keypress":return e.which!==32?null:(ap=!0,Zg);case"textInput":return a=e.data,a===Zg&&ap?null:a;default:return null}}function D_(a,e){if(Fi)return a==="compositionend"||!Bd&&ep(a,e)?(a=Vg(),Vu=Ed=gt=null,Fi=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!U_[a.type]:e==="textarea"}function ip(a,e,t,s){qi?Vi?Vi.push(s):Vi=[s]:qi=s,e=Wl(e,"onChange"),0<e.length&&(t=new Xu("onChange","change",null,t,s),a.push({event:t,listeners:e}))}var ms=null,cs=null;function K_(a){qf(a,0)}function Wu(a){var e=rs(a);if(Lg(e))return a}function rp(a,e){if(a==="change")return e}var sp=!1;if(Yn){var Od;if(Yn){var Dd="oninput"in document;if(!Dd){var up=document.createElement("div");up.setAttribute("oninput","return;"),Dd=typeof up.oninput=="function"}Od=Dd}else Od=!1;sp=Od&&(!document.documentMode||9<document.documentMode)}function lp(){ms&&(ms.detachEvent("onpropertychange",op),cs=ms=null)}function op(a){if(a.propertyName==="value"&&Wu(cs)){var e=[];ip(e,cs,a,Pd(a)),qg(K_,e)}}function L_(a,e,t){a==="focusin"?(lp(),ms=e,cs=t,ms.attachEvent("onpropertychange",op)):a==="focusout"&&lp()}function I_(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Wu(cs)}function $_(a,e){if(a==="click")return Wu(e)}function J_(a,e){if(a==="input"||a==="change")return Wu(e)}function G_(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var Je=typeof Object.is=="function"?Object.is:G_;function ks(a,e){if(Je(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var t=Object.keys(a),s=Object.keys(e);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var l=t[s];if(!gd.call(e,l)||!Je(a[l],e[l]))return!1}return!0}function Ud(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function dp(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function mp(a,e){var t=dp(a);a=0;for(var s;t;){if(t.nodeType===3){if(s=a+t.textContent.length,a<=e&&s>=e)return{node:t,offset:e-a};a=s}a:{for(;t;){if(t.nextSibling){t=t.nextSibling;break a}t=t.parentNode}t=void 0}t=dp(t)}}function cp(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?cp(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function kp(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=Ud(a.document);e instanceof a.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)a=e.contentWindow;else break;e=Ud(a.document)}return e}function Kd(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var H_=Yn&&"documentMode"in document&&11>=document.documentMode,Yi=null,Ld=null,hs=null,Id=!1;function hp(a,e,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Id||Yi==null||Yi!==Ud(s)||(s=Yi,"selectionStart"in s&&Kd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),hs&&ks(hs,s)||(hs=s,s=Wl(Ld,"onSelect"),0<s.length&&(e=new Xu("onSelect","select",null,e,t),a.push({event:e,listeners:s}),e.target=Yi)))}function ai(a,e){var t={};return t[a.toLowerCase()]=e.toLowerCase(),t["Webkit"+a]="webkit"+e,t["Moz"+a]="moz"+e,t}var Xi={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionrun:ai("Transition","TransitionRun"),transitionstart:ai("Transition","TransitionStart"),transitioncancel:ai("Transition","TransitionCancel"),transitionend:ai("Transition","TransitionEnd")},$d={},gp={};Yn&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function ei(a){if($d[a])return $d[a];if(!Xi[a])return a;var e=Xi[a],t;for(t in e)if(e.hasOwnProperty(t)&&t in gp)return $d[a]=e[t];return a}var pp=ei("animationend"),bp=ei("animationiteration"),fp=ei("animationstart"),z_=ei("transitionrun"),q_=ei("transitionstart"),V_=ei("transitioncancel"),yp=ei("transitionend"),vp=new Map,Jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jd.push("scrollEnd");function pn(a,e){vp.set(a,e),Zt(e,[a])}var F_=0;function Xn(a,e){if(a.name!=null&&a.name!=="auto")return a.name;if(e.autoName!==null)return e.autoName;a=vn.identifierPrefix;var t=F_++;return a="_"+a+"t_"+t.toString(32)+"_",e.autoName=a}function jp(a){if(a==null||typeof a=="string")return a;var e=null,t=pr;if(t!==null)for(var s=0;s<t.length;s++){var l=a[t[s]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??a.default}function Qn(a,e){return a=jp(a),e=jp(e),e==null?a==="auto"?null:a:e==="auto"?null:e}var Zu=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Ze=[],Qi=0,Gd=0;function al(){for(var a=Qi,e=Gd=Qi=0;e<a;){var t=Ze[e];Ze[e++]=null;var s=Ze[e];Ze[e++]=null;var l=Ze[e];Ze[e++]=null;var d=Ze[e];if(Ze[e++]=null,s!==null&&l!==null){var p=s.pending;p===null?l.next=l:(l.next=p.next,p.next=l),s.pending=l}d!==0&&Sp(t,l,d)}}function el(a,e,t,s){Ze[Qi++]=a,Ze[Qi++]=e,Ze[Qi++]=t,Ze[Qi++]=s,Gd|=s,a.lanes|=s,a=a.alternate,a!==null&&(a.lanes|=s)}function Hd(a,e,t,s){return el(a,e,t,s),nl(a)}function ni(a,e){return el(a,null,null,e),nl(a)}function Sp(a,e,t){a.lanes|=t;var s=a.alternate;s!==null&&(s.lanes|=t);for(var l=!1,d=a.return;d!==null;)d.childLanes|=t,s=d.alternate,s!==null&&(s.childLanes|=t),d.tag===22&&(a=d.stateNode,a===null||a._visibility&1||(l=!0)),a=d,d=d.return;return a.tag===3?(d=a.stateNode,l&&e!==null&&(l=31-Ie(t),a=d.hiddenUpdates,s=a[l],s===null?a[l]=[e]:s.push(e),e.lane=t|536870912),d):null}function nl(a){if(50<Ds)throw Ds=0,zl=null,Error(u(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var Wi={};function Y_(a,e,t,s){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(a,e,t,s){return new Y_(a,e,t,s)}function zd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Wn(a,e){var t=a.alternate;return t===null?(t=Re(a.tag,e,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=e,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&1206910976,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t.refCleanup=a.refCleanup,t}function Tp(a,e){a.flags&=1206910978;var t=a.alternate;return t===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,a.type=t.type,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function tl(a,e,t,s,l,d){var p=0;if(s=a,typeof s=="function")zd(s)&&(p=1);else if(typeof s=="string")p=Tw(a,t,Pn.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(s){case Va:return a=Re(31,t,e,l),a.elementType=Va,a.lanes=d,a;case wa:return ti(t.children,l,d,e);case Ma:p=8,l|=24;break;case I:return a=Re(12,t,e,l|2),a.elementType=I,a.lanes=d,a;case G:return a=Re(13,t,e,l),a.elementType=G,a.lanes=d,a;case Q:return a=Re(19,t,e,l),a.elementType=Q,a.lanes=d,a;case Ue:case w:return a=l|32,a=Re(30,t,e,a),a.elementType=w,a.lanes=d,a.stateNode={autoName:null,paired:null,clones:null,ref:null},a;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case pa:p=10;break a;case oa:p=9;break a;case R:p=11;break a;case X:p=14;break a;case ma:p=16,s=null;break a}p=29,t=Error(u(130,a===null?"null":typeof a,"")),s=null}return e=Re(p,t,e,l),e.elementType=a,e.type=s,e.lanes=d,e}function ti(a,e,t,s){return a=Re(7,a,s,e),a.lanes=t,a}function qd(a,e,t){return a=Re(6,a,null,e),a.lanes=t,a}function Ap(a){var e=Re(18,null,null,0);return e.stateNode=a,e}function Vd(a,e,t){return e=Re(4,a.children!==null?a.children:[],a.key,e),e.lanes=t,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var _p=new WeakMap;function an(a,e){if(typeof a=="object"&&a!==null){var t=_p.get(a);return t!==void 0?t:(e={value:a,source:e,stack:yg(e)},_p.set(a,e),e)}return{value:a,source:e,stack:yg(e)}}var Zi=[],ar=0,il=null,gs=0,en=[],nn=0,bt=null,Mn=1,En="";function Zn(a,e){Zi[ar++]=gs,Zi[ar++]=il,il=a,gs=e}function Pp(a,e,t){en[nn++]=Mn,en[nn++]=En,en[nn++]=bt,bt=a;var s=Mn;a=En;var l=32-Ie(s)-1;s&=~(1<<l),t+=1;var d=32-Ie(e)+l;if(30<d){var p=l-l%5;d=(s&(1<<p)-1).toString(32),s>>=p,l-=p,Mn=1<<32-Ie(e)+l|t<<l|s,En=d+a}else Mn=1<<d|t<<l|s,En=a}function rl(a){a.return!==null&&(Zn(a,1),Pp(a,1,0))}function Fd(a){for(;a===il;)il=Zi[--ar],Zi[ar]=null,gs=Zi[--ar],Zi[ar]=null;for(;a===bt;)bt=en[--nn],en[nn]=null,En=en[--nn],en[nn]=null,Mn=en[--nn],en[nn]=null}function wp(a,e){en[nn++]=Mn,en[nn++]=En,en[nn++]=bt,Mn=e.id,En=e.overflow,bt=a}var le=null,Ga=null,ba=!1,ft=null,tn=!1,Yd=Error(u(519));function yt(a){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ps(an(e,a)),Yd}function Mp(a){var e=a.stateNode,t=a.type,s=a.memoizedProps;switch(e[he]=a,e[Ee]=s,t){case"dialog":ja("cancel",e),ja("close",e);break;case"iframe":case"object":case"embed":ja("load",e);break;case"video":case"audio":for(t=0;t<Ks.length;t++)ja(Ks[t],e);break;case"source":ja("error",e);break;case"img":case"image":case"link":ja("error",e),ja("load",e);break;case"details":ja("toggle",e);break;case"input":ja("invalid",e),Ig(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ja("invalid",e);break;case"textarea":ja("invalid",e),Jg(e,s.value,s.defaultValue,s.children)}t=s.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||s.suppressHydrationWarning===!0||Xf(e.textContent,t)?(s.popover!=null&&(ja("beforetoggle",e),ja("toggle",e)),s.onScroll!=null&&ja("scroll",e),s.onScrollEnd!=null&&ja("scrollend",e),s.onClick!=null&&(e.onclick=wn),e=!0):e=!1,e||yt(a,!0)}function sl(a){for(le=a.return;le;)switch(le.tag){case 5:case 31:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:le=le.return}}function er(a){if(a!==le)return!1;if(!ba)return sl(a),ba=!0,!1;var e=a.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=a.type,t=!(t!=="form"&&t!=="button")||_c(a.type,a.memoizedProps)),t=!t),t&&Ga&&yt(a),sl(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));Ga=gy(a)}else if(e===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));Ga=gy(a)}else e===27?(e=Ga,Ot(a.type)?(a=Bc,Bc=null,Ga=a):Ga=e):Ga=le?sn(a.stateNode.nextSibling):null;return!0}function ii(){Ga=le=null,ba=!1}function Xd(){var a=ft;return a!==null&&(Ce===null?Ce=a:Ce.push.apply(Ce,a),ft=null),a}function ps(a){ft===null?ft=[a]:ft.push(a)}var Qd=_n(null),ri=null,at=null;function vt(a,e,t){Ja(Qd,e._currentValue),e._currentValue=t}function et(a){a._currentValue=Qd.current,ke(Qd)}function ul(a,e,t){for(;a!==null;){var s=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),a===t)break;a=a.return}}function Wd(a,e,t,s){var l=a.child;for(l!==null&&(l.return=a);l!==null;){var d=l.dependencies;if(d!==null){var p=l.child;d=d.firstContext;a:for(;d!==null;){var v=d;d=l;for(var A=0;A<e.length;A++)if(v.context===e[A]){d.lanes|=t,v=d.alternate,v!==null&&(v.lanes|=t),ul(d.return,t,a),s||(p=null);break a}d=v.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(u(341));p.lanes|=t,d=p.alternate,d!==null&&(d.lanes|=t),ul(p,t,a),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,p=l.alternate,p!==null&&(p.lanes|=t),ul(l.return,t,a),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===a){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function si(a,e,t,s){a=null;for(var l=e,d=!1;l!==null;){if(!d){if((l.flags&524288)!==0)d=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(u(387));if(p=p.memoizedProps,p!==null){var v=l.type;Je(l.pendingProps.value,p.value)||(a!==null?a.push(v):a=[v])}}else if(l===Bu.current){if(p=l.alternate,p===null)throw Error(u(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(a!==null?a.push(Pr):a=[Pr])}l=l.return}return a!==null&&Wd(e,a,t,s),e.flags|=262144,a!==null}function ll(a){for(a=a.firstContext;a!==null;){if(!Je(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function ui(a){ri=a,at=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function ge(a){return Ep(ri,a)}function ol(a,e){return ri===null&&ui(a),Ep(a,e)}function Ep(a,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},at===null){if(a===null)throw Error(u(308));at=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else at=at.next=e;return t}var X_=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(t,s){a.push(s)}};this.abort=function(){e.aborted=!0,a.forEach(function(t){return t()})}},Q_=i.unstable_scheduleCallback,W_=i.unstable_NormalPriority,ae={$$typeof:pa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zd(){return{controller:new X_,data:new Map,refCount:0}}function bs(a){a.refCount--,a.refCount===0&&Q_(W_,function(){a.controller.abort()})}function Rp(a,e){if((a.pendingLanes&4194048)!==0){var t=a.transitionTypes;for(t===null&&(t=a.transitionTypes=[]),a=0;a<e.length;a++){var s=e[a];t.indexOf(s)===-1&&t.push(s)}}}var fs=null;function Z_(a){var e=a.transitionTypes;return a.transitionTypes=null,e}var ys=null,am=0,li=0,nr=null;function aP(a,e){if(ys===null){var t=ys=[];am=0,li=pc(),nr={status:"pending",value:void 0,then:function(s){t.push(s)}}}return am++,e.then(Np,Np),e}function Np(){if(--am===0&&(fs=null,ys!==null)){nr!==null&&(nr.status="fulfilled");var a=ys;ys=null,li=0,nr=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function eP(a,e){var t=[],s={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return a.then(function(){s.status="fulfilled",s.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(s.status="rejected",s.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),s}var xp=ta.S;ta.S=function(a,e){if(_f=Ke(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&aP(a,e),fs!==null)for(var t=vr;t!==null;)Rp(t,fs),t=t.next;if(t=a.types,t!==null){for(var s=vr;s!==null;)Rp(s,t),s=s.next;if(li!==0){s=fs,s===null&&(s=fs=[]);for(var l=0;l<t.length;l++){var d=t[l];s.indexOf(d)===-1&&s.push(d)}}}xp!==null&&xp(a,e)};var oi=_n(null);function em(){var a=oi.current;return a!==null?a:Ia.pooledCache}function dl(a,e){e===null?Ja(oi,oi.current):Ja(oi,e.pool)}function Cp(){var a=em();return a===null?null:{parent:ae._currentValue,pool:a}}var tr=Error(u(460)),nm=Error(u(474)),ml=Error(u(542)),cl={then:function(){}};function Bp(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Op(a,e,t){switch(t=a[t],t===void 0?a.push(e):t!==e&&(e.then(wn,wn),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Up(a),a===void 0&&!("reason"in e)?Error(u(600)):a;default:if(typeof e.status=="string")e.then(wn,wn);else{if(a=Ia,a!==null&&100<a.shellSuspendCounter)throw Error(u(482));a=e,a.status="pending",a.then(function(s){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=s}},function(s){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Up(a),a}throw mi=e,tr}}function di(a){try{var e=a._init;return e(a._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(mi=t,tr):t}}var mi=null;function Dp(){if(mi===null)throw Error(u(459));var a=mi;return mi=null,a}function Up(a){if(a===tr||a===ml)throw Error(u(483))}var ir=null,vs=0;function kl(a){var e=vs;return vs+=1,ir===null&&(ir=[]),Op(ir,a,e)}function jt(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function hl(a,e){throw e.$$typeof===ia?Error(u(525)):(a=Object.prototype.toString.call(e),Error(u(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function Kp(a){function e(x,M){if(a){var B=x.deletions;B===null?(x.deletions=[M],x.flags|=16):B.push(M)}}function t(x,M){if(!a)return null;for(;M!==null;)e(x,M),M=M.sibling;return null}function s(x){for(var M=new Map;x!==null;)x.key===null?M.set(x.index,x):M.set(x.key,x),x=x.sibling;return M}function l(x,M){return x=Wn(x,M),x.index=0,x.sibling=null,x}function d(x,M,B){return x.index=B,a?(B=x.alternate,B!==null?(B=B.index,B<M?(x.flags|=2,M):B):(x.flags|=134217730,M)):(x.flags|=1048576,M)}function p(x){return a&&x.alternate===null&&(x.flags|=134217730),x}function v(x,M,B,$){return M===null||M.tag!==6?(M=qd(B,x.mode,$),M.return=x,M):(M=l(M,B),M.return=x,M)}function A(x,M,B,$){var aa=B.type;return aa===wa?(x=K(x,M,B.props.children,$,B.key),jt(x,B),x):M!==null&&(M.elementType===aa||typeof aa=="object"&&aa!==null&&aa.$$typeof===ma&&di(aa)===M.type)?(M=l(M,B.props),jt(M,B),M.return=x,M):(M=tl(B.type,B.key,B.props,null,x.mode,$),jt(M,B),M.return=x,M)}function C(x,M,B,$){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Vd(B,x.mode,$),M.return=x,M):(M=l(M,B.children||[]),M.return=x,M)}function K(x,M,B,$,aa){return M===null||M.tag!==7?(M=ti(B,x.mode,$,aa),M.return=x,M):(M=l(M,B),M.return=x,M)}function J(x,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=qd(""+M,x.mode,B),M.return=x,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ya:return B=tl(M.type,M.key,M.props,null,x.mode,B),jt(B,M),B.return=x,B;case Pa:return M=Vd(M,x.mode,B),M.return=x,M;case ma:return M=di(M),J(x,M,B)}if(Ca(M)||ua(M))return M=ti(M,x.mode,B,null),M.return=x,M;if(typeof M.then=="function")return J(x,kl(M),B);if(M.$$typeof===pa)return J(x,ol(x,M),B);hl(x,M)}return null}function N(x,M,B,$){var aa=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return aa!==null?null:v(x,M,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ya:return B.key===aa?A(x,M,B,$):null;case Pa:return B.key===aa?C(x,M,B,$):null;case ma:return B=di(B),N(x,M,B,$)}if(Ca(B)||ua(B))return aa!==null?null:K(x,M,B,$,null);if(typeof B.then=="function")return N(x,M,kl(B),$);if(B.$$typeof===pa)return N(x,M,ol(x,B),$);hl(x,B)}return null}function D(x,M,B,$,aa){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return x=x.get(B)||null,v(M,x,""+$,aa);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ya:return x=x.get($.key===null?B:$.key)||null,A(M,x,$,aa);case Pa:return x=x.get($.key===null?B:$.key)||null,C(M,x,$,aa);case ma:return $=di($),D(x,M,B,$,aa)}if(Ca($)||ua($))return x=x.get(B)||null,K(M,x,$,aa,null);if(typeof $.then=="function")return D(x,M,B,kl($),aa);if($.$$typeof===pa)return D(x,M,B,ol(M,$),aa);hl(M,$)}return null}function Y(x,M,B,$){for(var aa=null,Ta=null,sa=M,da=M=0,te=null;sa!==null&&da<B.length;da++){sa.index>da?(te=sa,sa=null):te=sa.sibling;var Aa=N(x,sa,B[da],$);if(Aa===null){sa===null&&(sa=te);break}a&&sa&&Aa.alternate===null&&e(x,sa),M=d(Aa,M,da),Ta===null?aa=Aa:Ta.sibling=Aa,Ta=Aa,sa=te}if(da===B.length)return t(x,sa),ba&&Zn(x,da),aa;if(sa===null){for(;da<B.length;da++)sa=J(x,B[da],$),sa!==null&&(M=d(sa,M,da),Ta===null?aa=sa:Ta.sibling=sa,Ta=sa);return ba&&Zn(x,da),aa}for(sa=s(sa);da<B.length;da++)te=D(sa,x,da,B[da],$),te!==null&&(a&&(Aa=te.alternate,Aa!==null&&sa.delete(Aa.key===null?da:Aa.key)),M=d(te,M,da),Ta===null?aa=te:Ta.sibling=te,Ta=te);return a&&sa.forEach(function(It){return e(x,It)}),ba&&Zn(x,da),aa}function na(x,M,B,$){if(B==null)throw Error(u(151));for(var aa=null,Ta=null,sa=M,da=M=0,te=null,Aa=B.next();sa!==null&&!Aa.done;da++,Aa=B.next()){sa.index>da?(te=sa,sa=null):te=sa.sibling;var It=N(x,sa,Aa.value,$);if(It===null){sa===null&&(sa=te);break}a&&sa&&It.alternate===null&&e(x,sa),M=d(It,M,da),Ta===null?aa=It:Ta.sibling=It,Ta=It,sa=te}if(Aa.done)return t(x,sa),ba&&Zn(x,da),aa;if(sa===null){for(;!Aa.done;da++,Aa=B.next())Aa=J(x,Aa.value,$),Aa!==null&&(M=d(Aa,M,da),Ta===null?aa=Aa:Ta.sibling=Aa,Ta=Aa);return ba&&Zn(x,da),aa}for(sa=s(sa);!Aa.done;da++,Aa=B.next())Aa=D(sa,x,da,Aa.value,$),Aa!==null&&(a&&(te=Aa.alternate,te!==null&&sa.delete(te.key===null?da:te.key)),M=d(Aa,M,da),Ta===null?aa=Aa:Ta.sibling=Aa,Ta=Aa);return a&&sa.forEach(function(Ow){return e(x,Ow)}),ba&&Zn(x,da),aa}function ga(x,M,B,$){if(typeof B=="object"&&B!==null&&B.type===wa&&B.key===null&&B.props.ref===void 0&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ya:a:{for(var aa=B.key;M!==null;){if(M.key===aa){if(aa=B.type,aa===wa){if(M.tag===7){t(x,M.sibling),$=l(M,B.props.children),jt($,B),$.return=x,x=$;break a}}else if(M.elementType===aa||typeof aa=="object"&&aa!==null&&aa.$$typeof===ma&&di(aa)===M.type){t(x,M.sibling),$=l(M,B.props),jt($,B),$.return=x,x=$;break a}t(x,M);break}else e(x,M);M=M.sibling}B.type===wa?($=ti(B.props.children,x.mode,$,B.key),jt($,B),$.return=x,x=$):($=tl(B.type,B.key,B.props,null,x.mode,$),jt($,B),$.return=x,x=$)}return p(x);case Pa:a:{for(aa=B.key;M!==null;){if(M.key===aa)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){t(x,M.sibling),$=l(M,B.children||[]),$.return=x,x=$;break a}else{t(x,M);break}else e(x,M);M=M.sibling}$=Vd(B,x.mode,$),$.return=x,x=$}return p(x);case ma:return B=di(B),ga(x,M,B,$)}if(Ca(B))return Y(x,M,B,$);if(ua(B)){if(aa=ua(B),typeof aa!="function")throw Error(u(150));return B=aa.call(B),na(x,M,B,$)}if(typeof B.then=="function")return ga(x,M,kl(B),$);if(B.$$typeof===pa)return ga(x,M,ol(x,B),$);hl(x,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(t(x,M.sibling),$=l(M,B),$.return=x,x=$):(t(x,M),$=qd(B,x.mode,$),$.return=x,x=$),p(x)):t(x,M)}return function(x,M,B,$){try{vs=0;var aa=ga(x,M,B,$);return ir=null,aa}catch(sa){if(sa===tr||sa===ml)throw sa;var Ta=Re(29,sa,null,x.mode);return Ta.lanes=$,Ta.return=x,Ta}}}var ci=Kp(!0),Lp=Kp(!1),St=!1;function tm(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function im(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Tt(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function At(a,e,t){var s=a.updateQueue;if(s===null)return null;if(s=s.shared,(Ba&2)!==0){var l=s.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),s.pending=e,e=nl(a),Sp(a,null,t),e}return el(a,s,e,t),nl(a)}function js(a,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var s=e.lanes;s&=a.pendingLanes,t|=s,e.lanes=t,Pg(a,t)}}function rm(a,e){var t=a.updateQueue,s=a.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var l=null,d=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};d===null?l=d=p:d=d.next=p,t=t.next}while(t!==null);d===null?l=d=e:d=d.next=e}else l=d=e;t={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=e:a.next=e,t.lastBaseUpdate=e}var sm=!1;function Ss(){if(sm){var a=nr;if(a!==null)throw a}}function Ts(a,e,t,s){sm=!1;var l=a.updateQueue;St=!1;var d=l.firstBaseUpdate,p=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var A=v,C=A.next;A.next=null,p===null?d=C:p.next=C,p=A;var K=a.alternate;K!==null&&(K=K.updateQueue,v=K.lastBaseUpdate,v!==p&&(v===null?K.firstBaseUpdate=C:v.next=C,K.lastBaseUpdate=A))}if(d!==null){var J=l.baseState;p=0,K=C=A=null,v=d;do{var N=v.lane&-536870913,D=N!==v.lane;if(D?(Sa&N)===N:(s&N)===N){N!==0&&N===li&&(sm=!0),K!==null&&(K=K.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});a:{var Y=a,na=v;N=e;var ga=t;switch(na.tag){case 1:if(Y=na.payload,typeof Y=="function"){J=Y.call(ga,J,N);break a}J=Y;break a;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=na.payload,N=typeof Y=="function"?Y.call(ga,J,N):Y,N==null)break a;J=q({},J,N);break a;case 2:St=!0}}N=v.callback,N!==null&&(a.flags|=64,D&&(a.flags|=8192),D=l.callbacks,D===null?l.callbacks=[N]:D.push(N))}else D={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},K===null?(C=K=D,A=J):K=K.next=D,p|=N;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;D=v,v=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);K===null&&(A=J),l.baseState=A,l.firstBaseUpdate=C,l.lastBaseUpdate=K,d===null&&(l.shared.lanes=0),Nt|=p,a.lanes=p,a.memoizedState=J}}function Ip(a,e){if(typeof a!="function")throw Error(u(191,a));a.call(e)}function $p(a,e){var t=a.callbacks;if(t!==null)for(a.callbacks=null,a=0;a<t.length;a++)Ip(t[a],e)}var _t=_n(null),gl=_n(0);function Jp(a,e){a=st,Ja(gl,a),Ja(_t,e),st=a|e.baseLanes}function um(){Ja(gl,st),Ja(_t,_t.current)}function lm(){st=gl.current,ke(_t),ke(gl)}var pe=_n(null),je=null;function Pt(a){var e=a.alternate;Ja(be,be.current&1),Ja(pe,a),je===null&&(e===null||_t.current!==null||e.memoizedState!==null)&&(je=a)}function om(a){Ja(be,be.current),Ja(pe,a),je===null&&(je=a)}function Gp(a){a.tag===22?(Ja(be,be.current),Ja(pe,a),je===null&&(je=a)):wt()}function wt(){Ja(be,be.current),Ja(pe,pe.current)}function Ge(a){ke(pe),je===a&&(je=null),ke(be)}var be=_n(0);function As(a,e){Ja(pe,pe.current),Ja(be,e)}function dm(a){ke(be),ke(pe),je===a&&(je=null)}function pl(a){for(var e=a;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||xc(t)||Cc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nt=0,ha=null,La=null,ee=null,bl=!1,rr=!1,ki=!1,fl=0,_s=0,sr=null,nP=0;function Xa(){throw Error(u(321))}function mm(a,e){if(e===null)return!1;for(var t=0;t<e.length&&t<a.length;t++)if(!Je(a[t],e[t]))return!1;return!0}function cm(a,e,t,s,l,d){return nt=d,ha=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.H=a===null||a.memoizedState===null?Pb:wb,ki=!1,d=t(s,l),ki=!1,rr&&(d=zp(e,t,s,l)),Hp(a),d}function Hp(a){ta.H=_l;var e=La!==null&&La.next!==null;if(nt=0,ee=La=ha=null,bl=!1,_s=0,sr=null,e)throw Error(u(300));a===null||ne||(a=a.dependencies,a!==null&&ll(a)&&(ne=!0))}function zp(a,e,t,s){ha=a;var l=0;do{if(rr&&(sr=null),_s=0,rr=!1,25<=l)throw Error(u(301));if(l+=1,ee=La=null,a.updateQueue!=null){var d=a.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}ta.H=dP,d=e(t,s)}while(rr);return d}function tP(){var a=ta.H,e=a.useState()[0];return e=typeof e.then=="function"?Ps(e):e,a=a.useState()[0],(La!==null?La.memoizedState:null)!==a&&(ha.flags|=1024),e}function km(){var a=fl!==0;return fl=0,a}function hm(a,e,t){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~t}function gm(a){if(bl){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}bl=!1}nt=0,ee=La=ha=null,rr=!1,_s=fl=0,sr=null}function Te(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?ha.memoizedState=ee=a:ee=ee.next=a,ee}function Wa(){if(La===null){var a=ha.alternate;a=a!==null?a.memoizedState:null}else a=La.next;var e=ee===null?ha.memoizedState:ee.next;if(e!==null)ee=e,La=a;else{if(a===null)throw ha.alternate===null?Error(u(467)):Error(u(310));La=a,a={memoizedState:La.memoizedState,baseState:La.baseState,baseQueue:La.baseQueue,queue:La.queue,next:null},ee===null?ha.memoizedState=ee=a:ee=ee.next=a}return ee}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ps(a){var e=_s;return _s+=1,sr===null&&(sr=[]),a=Op(sr,a,e),e=ha,(ee===null?e.memoizedState:ee.next)===null&&(e=e.alternate,ta.H=e===null||e.memoizedState===null?Pb:wb),a}function vl(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return Ps(a);if(a.$$typeof===H)return;if(a.$$typeof===pa)return ge(a)}throw Error(u(438,String(a)))}function pm(a){var e=null,t=ha.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var s=ha.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=yl(),ha.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(a),s=0;s<a;s++)t[s]=V;return e.index++,t}function tt(a,e){return typeof e=="function"?e(a):e}function jl(a){var e=Wa();return bm(e,La,a)}function bm(a,e,t){var s=a.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=t;var l=a.baseQueue,d=s.pending;if(d!==null){if(l!==null){var p=l.next;l.next=d.next,d.next=p}e.baseQueue=l=d,s.pending=null}if(d=a.baseState,l===null)a.memoizedState=d;else{e=l.next;var v=p=null,A=null,C=e,K=!1;do{var J=C.lane&-536870913;if(J!==C.lane?(Sa&J)===J:(nt&J)===J){var N=C.revertLane;if(N===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),J===li&&(K=!0);else if((nt&N)===N){C=C.next,N===li&&(K=!0);continue}else J={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(v=A=J,p=d):A=A.next=J,ha.lanes|=N,Nt|=N;J=C.action,ki&&t(d,J),d=C.hasEagerState?C.eagerState:t(d,J)}else N={lane:J,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(v=A=N,p=d):A=A.next=N,ha.lanes|=J,Nt|=J;C=C.next}while(C!==null&&C!==e);if(A===null?p=d:A.next=v,!Je(d,a.memoizedState)&&(ne=!0,K&&(t=nr,t!==null)))throw t;a.memoizedState=d,a.baseState=p,a.baseQueue=A,s.lastRenderedState=d}return l===null&&(s.lanes=0),[a.memoizedState,s.dispatch]}function fm(a){var e=Wa(),t=e.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=a;var s=t.dispatch,l=t.pending,d=e.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do d=a(d,p.action),p=p.next;while(p!==l);Je(d,e.memoizedState)||(ne=!0),e.memoizedState=d,e.baseQueue===null&&(e.baseState=d),t.lastRenderedState=d}return[d,s]}function qp(a,e,t){var s=ha,l=Wa(),d=ba;if(d){if(t===void 0)throw Error(u(407));t=t()}else t=e();var p=!Je((La||l).memoizedState,t);if(p&&(l.memoizedState=t,ne=!0),l=l.queue,jm(Yp.bind(null,s,l,a),[a]),a=l.getSnapshot!==e||p||ee!==null&&(ee.memoizedState.tag&1)!==0,ur(a?9:8,{destroy:void 0},Fp.bind(null,s,l,t,e),null),a){if(s.flags|=2048,Ia===null)throw Error(u(349));d||(nt&127)!==0||Vp(s,e,t)}return t}function Vp(a,e,t){a.flags|=16384,a={getSnapshot:e,value:t},e=ha.updateQueue,e===null?(e=yl(),ha.updateQueue=e,e.stores=[a]):(t=e.stores,t===null?e.stores=[a]:t.push(a))}function Fp(a,e,t,s){e.value=t,e.getSnapshot=s,Xp(e)&&Qp(a)}function Yp(a,e,t){return t(function(){Xp(e)&&Qp(a)})}function Xp(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!Je(a,t)}catch{return!0}}function Qp(a){var e=ni(a,2);e!==null&&Be(e,a,2)}function ym(a){var e=Te();if(typeof a=="function"){var t=a;if(a=t(),ki){ht(!0);try{t()}finally{ht(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:a},e}function Wp(a,e,t,s){return a.baseState=t,bm(a,La,typeof s=="function"?s:tt)}function iP(a,e,t,s,l){if(Al(a))throw Error(u(485));if(a=e.action,a!==null){var d={payload:l,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};ta.T!==null?t(!0):d.isTransition=!1,s(d),t=e.pending,t===null?(d.next=e.pending=d,Zp(e,d)):(d.next=t.next,e.pending=t.next=d)}}function Zp(a,e){var t=e.action,s=e.payload,l=a.state;if(e.isTransition){var d=ta.T,p={};p.types=d!==null?d.types:null,ta.T=p;try{var v=t(l,s),A=ta.S;A!==null&&A(p,v),ab(a,e,v)}catch(C){vm(a,e,C)}finally{d!==null&&p.types!==null&&(d.types=p.types),ta.T=d}}else try{d=t(l,s),ab(a,e,d)}catch(C){vm(a,e,C)}}function ab(a,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(s){eb(a,e,s)},function(s){return vm(a,e,s)}):eb(a,e,t)}function eb(a,e,t){e.status="fulfilled",e.value=t,nb(e),a.state=t,e=a.pending,e!==null&&(t=e.next,t===e?a.pending=null:(t=t.next,e.next=t,Zp(a,t)))}function vm(a,e,t){var s=a.pending;if(a.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=t,nb(e),e=e.next;while(e!==s)}a.action=null}function nb(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function tb(a,e){return e}function ib(a,e){if(ba){var t=Ia.formState;if(t!==null){a:{var s=ha;if(ba){if(Ga){e:{for(var l=Ga,d=tn;l.nodeType!==8;){if(!d){l=null;break e}if(l=sn(l.nextSibling),l===null){l=null;break e}}d=l.data,l=d==="F!"||d==="F"?l:null}if(l){Ga=sn(l.nextSibling),s=l.data==="F!";break a}}yt(s)}s=!1}s&&(e=t[0])}}return t=Te(),t.memoizedState=t.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tb,lastRenderedState:e},t.queue=s,t=Tb.bind(null,ha,s),s.dispatch=t,s=ym(!1),d=Pm.bind(null,ha,!1,s.queue),s=Te(),l={state:e,dispatch:null,action:a,pending:null},s.queue=l,t=iP.bind(null,ha,l,d,t),l.dispatch=t,s.memoizedState=a,[e,t,!1]}function rb(a){var e=Wa();return sb(e,La,a)}function sb(a,e,t){if(e=bm(a,e,tb)[0],a=jl(tt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=Ps(e)}catch(p){throw p===tr?ml:p}else s=e;e=Wa();var l=e.queue,d=l.dispatch;return t!==e.memoizedState&&(ha.flags|=2048,ur(9,{destroy:void 0},rP.bind(null,l,t),null)),[s,d,a]}function rP(a,e){a.action=e}function ub(a){var e=Wa(),t=La;if(t!==null)return sb(e,t,a);Wa(),e=e.memoizedState,t=Wa();var s=t.queue.dispatch;return t.memoizedState=a,[e,s,!1]}function ur(a,e,t,s){return a={tag:a,create:t,deps:s,inst:e,next:null},e=ha.updateQueue,e===null&&(e=yl(),ha.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=a.next=a:(s=t.next,t.next=a,a.next=s,e.lastEffect=a),a}function lb(){return Wa().memoizedState}function Sl(a,e,t,s){var l=Te();ha.flags|=a,l.memoizedState=ur(1|e,{destroy:void 0},t,s===void 0?null:s)}function Tl(a,e,t,s){var l=Wa();s=s===void 0?null:s;var d=l.memoizedState.inst;La!==null&&s!==null&&mm(s,La.memoizedState.deps)?l.memoizedState=ur(e,d,t,s):(ha.flags|=a,l.memoizedState=ur(1|e,d,t,s))}function ob(a,e){Sl(8390656,8,a,e)}function jm(a,e){Tl(2048,8,a,e)}function sP(a){ha.flags|=4;var e=ha.updateQueue;if(e===null)e=yl(),ha.updateQueue=e,e.events=[a];else{var t=e.events;t===null?e.events=[a]:t.push(a)}}function db(a){var e=Wa().memoizedState;return sP({ref:e,nextImpl:a}),function(){if((Ba&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function mb(a,e){return Tl(4,2,a,e)}function cb(a,e){return Tl(4,4,a,e)}function kb(a,e){if(typeof e=="function"){a=a();var t=e(a);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function hb(a,e,t){t=t!=null?t.concat([a]):null,Tl(4,4,kb.bind(null,e,a),t)}function Sm(){}function gb(a,e){var t=Wa();e=e===void 0?null:e;var s=t.memoizedState;return e!==null&&mm(e,s[1])?s[0]:(t.memoizedState=[a,e],a)}function pb(a,e){var t=Wa();e=e===void 0?null:e;var s=t.memoizedState;if(e!==null&&mm(e,s[1]))return s[0];if(s=a(),ki){ht(!0);try{a()}finally{ht(!1)}}return t.memoizedState=[s,e],s}function Tm(a,e,t){return t===void 0||(nt&1073741824)!==0&&(Sa&261930)===0?a.memoizedState=e:(a.memoizedState=t,a=wf(),ha.lanes|=a,Nt|=a,t)}function bb(a,e,t,s){return Je(t,e)?t:_t.current!==null?(a=Tm(a,t,s),Je(a,e)||(ne=!0),a):(nt&106)===0||(nt&1073741824)!==0&&(Sa&261930)===0?(ne=!0,a.memoizedState=t):(a=wf(),ha.lanes|=a,Nt|=a,e)}function fb(a,e,t,s,l){var d=ka.p;ka.p=d!==0&&8>d?d:8;var p=ta.T,v={};v.types=p!==null?p.types:null,ta.T=v,Pm(a,!1,e,t);try{var A=l(),C=ta.S;if(C!==null&&C(v,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var K=eP(A,s);ws(a,e,K,Ve(a))}else ws(a,e,s,Ve(a))}catch(J){ws(a,e,{then:function(){},status:"rejected",reason:J},Ve())}finally{ka.p=d,p!==null&&v.types!==null&&(p.types=v.types),ta.T=p}}function uP(){}function Am(a,e,t,s){if(a.tag!==5)throw Error(u(476));var l=yb(a).queue;fb(a,l,e,qn,t===null?uP:function(){return vb(a),t(s)})}function yb(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:qn,baseState:qn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:qn},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:t},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function vb(a){var e=yb(a);e.next===null&&(e=a.alternate.memoizedState),ws(a,e.next.queue,{},Ve())}function _m(){return ge(Pr)}function jb(){return Wa().memoizedState}function Sb(){return Wa().memoizedState}function lP(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var t=Ve();a=Tt(t);var s=At(e,a,t);s!==null&&(Be(s,e,t),js(s,e,t)),e={cache:Zd()},a.payload=e;return}e=e.return}}function oP(a,e,t){var s=Ve();t={lane:s,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Al(a)?Ab(e,t):(t=Hd(a,e,t,s),t!==null&&(Be(t,a,s),_b(t,e,s)))}function Tb(a,e,t){var s=Ve();ws(a,e,t,s)}function ws(a,e,t,s){var l={lane:s,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Al(a))Ab(e,l);else{var d=a.alternate;if(a.lanes===0&&(d===null||d.lanes===0)&&(d=e.lastRenderedReducer,d!==null))try{var p=e.lastRenderedState,v=d(p,t);if(l.hasEagerState=!0,l.eagerState=v,Je(v,p))return el(a,e,l,0),Ia===null&&al(),!1}catch{}if(t=Hd(a,e,l,s),t!==null)return Be(t,a,s),_b(t,e,s),!0}return!1}function Pm(a,e,t,s){if(s={lane:2,revertLane:pc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(a)){if(e)throw Error(u(479))}else e=Hd(a,t,s,2),e!==null&&Be(e,a,2)}function Al(a){var e=a.alternate;return a===ha||e!==null&&e===ha}function Ab(a,e){rr=bl=!0;var t=a.pending;t===null?e.next=e:(e.next=t.next,t.next=e),a.pending=e}function _b(a,e,t){if((t&4194048)!==0){var s=e.lanes;s&=a.pendingLanes,t|=s,e.lanes=t,Pg(a,t)}}var _l={readContext:ge,use:vl,useCallback:Xa,useContext:Xa,useEffect:Xa,useImperativeHandle:Xa,useLayoutEffect:Xa,useInsertionEffect:Xa,useMemo:Xa,useReducer:Xa,useRef:Xa,useState:Xa,useDebugValue:Xa,useDeferredValue:Xa,useTransition:Xa,useSyncExternalStore:Xa,useId:Xa,useHostTransitionStatus:Xa,useFormState:Xa,useActionState:Xa,useOptimistic:Xa,useMemoCache:Xa,useCacheRefresh:Xa,useEffectEvent:Xa},Pb={readContext:ge,use:vl,useCallback:function(a,e){return Te().memoizedState=[a,e===void 0?null:e],a},useContext:ge,useEffect:ob,useImperativeHandle:function(a,e,t){t=t!=null?t.concat([a]):null,Sl(4194308,4,kb.bind(null,e,a),t)},useLayoutEffect:function(a,e){return Sl(4194308,4,a,e)},useInsertionEffect:function(a,e){Sl(4,2,a,e)},useMemo:function(a,e){var t=Te();e=e===void 0?null:e;var s=a();if(ki){ht(!0);try{a()}finally{ht(!1)}}return t.memoizedState=[s,e],s},useReducer:function(a,e,t){var s=Te();if(t!==void 0){var l=t(e);if(ki){ht(!0);try{t(e)}finally{ht(!1)}}}else l=e;return s.memoizedState=s.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},s.queue=a,a=a.dispatch=oP.bind(null,ha,a),[s.memoizedState,a]},useRef:function(a){var e=Te();return a={current:a},e.memoizedState=a},useState:function(a){a=ym(a);var e=a.queue,t=Tb.bind(null,ha,e);return e.dispatch=t,[a.memoizedState,t]},useDebugValue:Sm,useDeferredValue:function(a,e){var t=Te();return Tm(t,a,e)},useTransition:function(){var a=ym(!1);return a=fb.bind(null,ha,a.queue,!0,!1),Te().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,t){var s=ha,l=Te();if(ba){if(t===void 0)throw Error(u(407));t=t()}else{if(t=e(),Ia===null)throw Error(u(349));(Sa&127)!==0||Vp(s,e,t)}l.memoizedState=t;var d={value:t,getSnapshot:e};return l.queue=d,ob(Yp.bind(null,s,d,a),[a]),s.flags|=2048,ur(9,{destroy:void 0},Fp.bind(null,s,d,t,e),null),t},useId:function(){var a=Te(),e=Ia.identifierPrefix;if(ba){var t=En,s=Mn;t=(s&~(1<<32-Ie(s)-1)).toString(32)+t,e="_"+e+"R_"+t,t=fl++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=nP++,e="_"+e+"r_"+t.toString(32)+"_";return a.memoizedState=e},useHostTransitionStatus:_m,useFormState:ib,useActionState:ib,useOptimistic:function(a){var e=Te();e.memoizedState=e.baseState=a;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Pm.bind(null,ha,!0,t),t.dispatch=e,[a,e]},useMemoCache:pm,useCacheRefresh:function(){return Te().memoizedState=lP.bind(null,ha)},useEffectEvent:function(a){var e=Te(),t={impl:a};return e.memoizedState=t,function(){if((Ba&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},wb={readContext:ge,use:vl,useCallback:gb,useContext:ge,useEffect:jm,useImperativeHandle:hb,useInsertionEffect:mb,useLayoutEffect:cb,useMemo:pb,useReducer:jl,useRef:lb,useState:function(){return jl(tt)},useDebugValue:Sm,useDeferredValue:function(a,e){var t=Wa();return bb(t,La.memoizedState,a,e)},useTransition:function(){var a=jl(tt)[0],e=Wa().memoizedState;return[typeof a=="boolean"?a:Ps(a),e]},useSyncExternalStore:qp,useId:jb,useHostTransitionStatus:_m,useFormState:rb,useActionState:rb,useOptimistic:function(a,e){var t=Wa();return Wp(t,La,a,e)},useMemoCache:pm,useCacheRefresh:Sb,useEffectEvent:db},dP={readContext:ge,use:vl,useCallback:gb,useContext:ge,useEffect:jm,useImperativeHandle:hb,useInsertionEffect:mb,useLayoutEffect:cb,useMemo:pb,useReducer:fm,useRef:lb,useState:function(){return fm(tt)},useDebugValue:Sm,useDeferredValue:function(a,e){var t=Wa();return La===null?Tm(t,a,e):bb(t,La.memoizedState,a,e)},useTransition:function(){var a=fm(tt)[0],e=Wa().memoizedState;return[typeof a=="boolean"?a:Ps(a),e]},useSyncExternalStore:qp,useId:jb,useHostTransitionStatus:_m,useFormState:ub,useActionState:ub,useOptimistic:function(a,e){var t=Wa();return La!==null?Wp(t,La,a,e):(t.baseState=a,[a,t.queue.dispatch])},useMemoCache:pm,useCacheRefresh:Sb,useEffectEvent:db};function wm(a,e,t,s){e=a.memoizedState,t=t(s,e),t=t==null?e:q({},e,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var Mm={enqueueSetState:function(a,e,t){a=a._reactInternals;var s=Ve(),l=Tt(s);l.payload=e,t!=null&&(l.callback=t),e=At(a,l,s),e!==null&&(Be(e,a,s),js(e,a,s))},enqueueReplaceState:function(a,e,t){a=a._reactInternals;var s=Ve(),l=Tt(s);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=At(a,l,s),e!==null&&(Be(e,a,s),js(e,a,s))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var t=Ve(),s=Tt(t);s.tag=2,e!=null&&(s.callback=e),e=At(a,s,t),e!==null&&(Be(e,a,t),js(e,a,t))}};function Mb(a,e,t,s,l,d,p){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(s,d,p):e.prototype&&e.prototype.isPureReactComponent?!ks(t,s)||!ks(l,d):!0}function Eb(a,e,t,s){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,s),e.state!==a&&Mm.enqueueReplaceState(e,e.state,null)}function hi(a,e){var t=e;if("ref"in e){t={};for(var s in e)s!=="ref"&&(t[s]=e[s])}if(a=a.defaultProps){t===e&&(t=q({},t));for(var l in a)t[l]===void 0&&(t[l]=a[l])}return t}function Rb(a){Zu(a)}function Nb(a){console.error(a)}function xb(a){Zu(a)}function Pl(a,e){try{var t=a.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function Cb(a,e,t){try{var s=a.onCaughtError;s(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Em(a,e,t){return t=Tt(t),t.tag=3,t.payload={element:null},t.callback=function(){Pl(a,e)},t}function Bb(a){return a=Tt(a),a.tag=3,a}function Ob(a,e,t,s){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=s.value;a.payload=function(){return l(d)},a.callback=function(){Cb(e,t,s)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Cb(e,t,s),typeof l!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function mP(a,e,t,s,l){if(t.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=t.alternate,e!==null&&si(e,t,l,!0),t=pe.current,t!==null){switch(t.tag){case 31:case 13:case 19:return je===null?Vl():t.alternate===null&&Qa===0&&(Qa=3),t.flags&=-257,t.flags|=65536,t.lanes=l,s===cl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([s]):e.add(s),kc(a,s,l)),!1;case 22:return t.flags|=65536,s===cl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([s]):t.add(s)),kc(a,s,l)),!1}throw Error(u(435,t.tag))}return kc(a,s,l),Vl(),!1}if(ba)return e=pe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,s!==Yd&&(a=Error(u(422),{cause:s}),ps(an(a,t)))):(s!==Yd&&(e=Error(u(423),{cause:s}),ps(an(e,t))),a=a.current.alternate,a.flags|=65536,l&=-l,a.lanes|=l,s=an(s,t),l=Em(a.stateNode,s,l),rm(a,l),Qa!==4&&(Qa=2)),!1;var d=Error(u(520),{cause:s});if(d=an(d,t),Os===null?Os=[d]:Os.push(d),Qa!==4&&(Qa=2),e===null)return!0;s=an(s,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,a=l&-l,t.lanes|=a,a=Em(t.stateNode,s,a),rm(t,a),!1;case 1:if(e=t.type,d=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xt===null||!xt.has(d))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Bb(l),Ob(l,a,t,s),rm(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Rm=Error(u(461)),ne=!1;function ie(a,e,t,s){e.child=a===null?Lp(e,null,t,s):ci(e,a.child,t,s)}function Db(a,e,t,s,l){t=t.render;var d=e.ref;if("ref"in s){var p={};for(var v in s)v!=="ref"&&(p[v]=s[v])}else p=s;return ui(e),s=cm(a,e,t,p,d,l),v=km(),a!==null&&!ne?(hm(a,e,l),it(a,e,l)):(ba&&v&&rl(e),e.flags|=1,ie(a,e,s,l),e.child)}function Ub(a,e,t,s,l){if(a===null){var d=t.type;return typeof d=="function"&&!zd(d)&&d.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=d,Kb(a,e,d,s,l)):(a=tl(t.type,null,s,e,e.mode,l),a.ref=e.ref,a.return=e,e.child=a)}if(d=a.child,!Km(a,l)){var p=d.memoizedProps;if(t=t.compare,t=t!==null?t:ks,t(p,s)&&a.ref===e.ref)return it(a,e,l)}return e.flags|=1,a=Wn(d,s),a.ref=e.ref,a.return=e,e.child=a}function Kb(a,e,t,s,l){if(a!==null){var d=a.memoizedProps;if(ks(d,s)&&a.ref===e.ref)if(ne=!1,e.pendingProps=s=d,Km(a,l))(a.flags&131072)!==0&&(ne=!0);else return e.lanes=a.lanes,it(a,e,l)}return Nm(a,e,t,s,l)}function Lb(a,e,t,s){var l=s.children,d=a!==null?a.memoizedState:null;if(a===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((e.flags&128)!==0){if(d=d!==null?d.baseLanes|t:t,a!==null){for(s=e.child=a.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~d}else s=0,e.child=null;return Ib(a,e,d,t,s)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&dl(e,d!==null?d.cachePool:null),d!==null?Jp(e,d):um(),Gp(e);else return s=e.lanes=536870912,Ib(a,e,d!==null?d.baseLanes|t:t,t,s)}else d!==null?(dl(e,d.cachePool),Jp(e,d),wt(),e.memoizedState=null):(a!==null&&dl(e,null),um(),wt());return ie(a,e,l,t),e.child}function Ms(a,e){return a!==null&&a.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ib(a,e,t,s,l){var d=em();return d=d===null?null:{parent:ae._currentValue,pool:d},e.memoizedState={baseLanes:t,cachePool:d},a!==null&&dl(e,null),um(),Gp(e),a!==null&&si(a,e,s,!0),e.childLanes=l,null}function wl(a,e){return e=Ml({mode:e.mode,children:e.children},a.mode),e.ref=a.ref,a.child=e,e.return=a,e}function $b(a,e,t){return ci(e,a.child,null,t),a=wl(e,e.pendingProps),a.flags|=2,Ge(e),e.memoizedState=null,a}function cP(a,e,t){var s=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,a===null){if(ba){if(s.mode==="hidden")return a=wl(e,s),e.lanes=536870912,a.memoizedState={baseLanes:0,cachePool:null},Ms(null,a);if(om(e),(a=Ga)?(a=hy(a,tn),a=a!==null&&a.data==="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:bt!==null?{id:Mn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},t=Ap(a),t.return=e,e.child=t,le=e,Ga=null)):a=null,a===null)throw yt(e);return e.lanes=536870912,null}return wl(e,s)}var d=a.memoizedState;if(d!==null){var p=d.dehydrated;if(om(e),l)if(e.flags&256)e.flags&=-257,e=$b(a,e,t);else if(e.memoizedState!==null)e.child=a.child,e.flags|=128,e=null;else throw Error(u(558));else if(ne||si(a,e,t,!1),l=(t&a.childLanes)!==0,ne||l){if(_t.current===null){if(s=Ia,s!==null&&(p=wg(s,t),p!==0&&p!==d.retryLane))throw d.retryLane=p,ni(a,p),Be(s,a,p),Rm;Vl()}e=$b(a,e,t)}else a=d.treeContext,Ga=sn(p.nextSibling),le=e,ba=!0,ft=null,tn=!1,a!==null&&wp(e,a),e=wl(e,s),e.flags|=134221824;return e}return a=Wn(a.child,{mode:s.mode,children:s.children}),a.ref=e.ref,e.child=a,a.return=e,a}function lr(a,e){var t=e.ref;if(t===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(a===null||a.ref!==t)&&(e.flags|=4194816)}}function Nm(a,e,t,s,l){return ui(e),t=cm(a,e,t,s,void 0,l),s=km(),a!==null&&!ne?(hm(a,e,l),it(a,e,l)):(ba&&s&&rl(e),e.flags|=1,ie(a,e,t,l),e.child)}function Jb(a,e,t,s,l,d){return ui(e),e.updateQueue=null,t=zp(e,s,t,l),Hp(a),s=km(),a!==null&&!ne?(hm(a,e,d),it(a,e,d)):(ba&&s&&rl(e),e.flags|=1,ie(a,e,t,d),e.child)}function Gb(a,e,t,s,l){if(ui(e),e.stateNode===null){var d=Wi,p=t.contextType;typeof p=="object"&&p!==null&&(d=ge(p)),d=new t(s,d),e.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mm,e.stateNode=d,d._reactInternals=e,d=e.stateNode,d.props=s,d.state=e.memoizedState,d.refs={},tm(e),p=t.contextType,d.context=typeof p=="object"&&p!==null?ge(p):Wi,d.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(wm(e,t,p,s),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&Mm.enqueueReplaceState(d,d.state,null),Ts(e,s,d,l),Ss(),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(a===null){d=e.stateNode;var v=e.memoizedProps,A=hi(t,v);d.props=A;var C=d.context,K=t.contextType;p=Wi,typeof K=="object"&&K!==null&&(p=ge(K));var J=t.getDerivedStateFromProps;K=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v||C!==p)&&Eb(e,d,s,p),St=!1;var N=e.memoizedState;d.state=N,Ts(e,s,d,l),Ss(),C=e.memoizedState,v||N!==C||St?(typeof J=="function"&&(wm(e,t,J,s),C=e.memoizedState),(A=St||Mb(e,t,A,s,N,C,p))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(e.flags|=4194308)):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=C),d.props=s,d.state=C,d.context=p,s=A):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{d=e.stateNode,im(a,e),p=e.memoizedProps,K=hi(t,p),d.props=K,J=e.pendingProps,N=d.context,C=t.contextType,A=Wi,typeof C=="object"&&C!==null&&(A=ge(C)),v=t.getDerivedStateFromProps,(C=typeof v=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==J||N!==A)&&Eb(e,d,s,A),St=!1,N=e.memoizedState,d.state=N,Ts(e,s,d,l),Ss();var D=e.memoizedState;p!==J||N!==D||St||a!==null&&a.dependencies!==null&&ll(a.dependencies)?(typeof v=="function"&&(wm(e,t,v,s),D=e.memoizedState),(K=St||Mb(e,t,K,s,N,D,A)||a!==null&&a.dependencies!==null&&ll(a.dependencies))?(C||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,D,A),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,D,A)),typeof d.componentDidUpdate=="function"&&(e.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===a.memoizedProps&&N===a.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===a.memoizedProps&&N===a.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=D),d.props=s,d.state=D,d.context=A,s=K):(typeof d.componentDidUpdate!="function"||p===a.memoizedProps&&N===a.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===a.memoizedProps&&N===a.memoizedState||(e.flags|=1024),s=!1)}return d=s,lr(a,e),s=(e.flags&128)!==0,d||s?(d=e.stateNode,t=s&&typeof t.getDerivedStateFromError!="function"?null:d.render(),e.flags|=1,a!==null&&s?(e.child=ci(e,a.child,null,l),e.child=ci(e,null,t,l)):ie(a,e,t,l),e.memoizedState=d.state,a=e.child):a=it(a,e,l),a}function Hb(a,e,t,s){return ii(),e.flags|=256,ie(a,e,t,s),e.child}var xm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cm(a){return{baseLanes:a,cachePool:Cp()}}function Bm(a,e,t){return a=a!==null?a.childLanes&~t:0,e&&(a|=qe),a}function zb(a,e,t){var s=e.pendingProps,l=!1,d=(e.flags&128)!==0,p;if((p=d)||(p=a!==null&&a.memoizedState===null?!1:(be.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,a===null){if(ba){if(l?Pt(e):wt(),(a=Ga)?(a=hy(a,tn),a=a!==null&&a.data!=="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:bt!==null?{id:Mn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},t=Ap(a),t.return=e,e.child=t,le=e,Ga=null)):a=null,a===null)throw yt(e);return Cc(a)?e.lanes=32:e.lanes=536870912,null}return d=s.children,s=s.fallback,l?(wt(),l=e.mode,d=Ml({mode:"hidden",children:d},l),s=ti(s,l,t,null),d.return=e,s.return=e,d.sibling=s,e.child=d,s=e.child,s.memoizedState=Cm(t),s.childLanes=Bm(a,p,t),e.memoizedState=xm,Ms(null,s)):(Pt(e),Om(e,d))}var v=a.memoizedState;if(v!==null){var A=v.dehydrated;if(A!==null)return kP(a,e,d,p,s,A,v,t)}return l?(wt(),l=s.fallback,d=e.mode,v=a.child,A=v.sibling,s=Wn(v,{mode:"hidden",children:s.children}),s.subtreeFlags=v.subtreeFlags&1206910976,A!==null?l=Wn(A,l):(l=ti(l,d,t,null),l.flags|=2),l.return=e,s.return=e,s.sibling=l,e.child=s,Ms(null,s),s=e.child,l=a.child.memoizedState,l===null?l=Cm(t):(d=l.cachePool,d!==null?(v=ae._currentValue,d=d.parent!==v?{parent:v,pool:v}:d):d=Cp(),l={baseLanes:l.baseLanes|t,cachePool:d}),s.memoizedState=l,s.childLanes=Bm(a,p,t),e.memoizedState=xm,Ms(a.child,s)):(Pt(e),t=a.child,a=t.sibling,t=Wn(t,{mode:"visible",children:s.children}),t.return=e,t.sibling=null,a!==null&&(p=e.deletions,p===null?(e.deletions=[a],e.flags|=16):p.push(a)),e.child=t,e.memoizedState=null,t)}function Om(a,e){return e=Ml({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function Ml(a,e){return a=Re(22,a,null,e),a.lanes=0,a}function El(a,e,t){return ci(e,a.child,null,t),a=Om(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function kP(a,e,t,s,l,d,p,v){if(t)return e.flags&256?(Pt(e),e.flags&=-257,El(a,e,v)):e.memoizedState!==null?(wt(),e.child=a.child,e.flags|=128,null):(wt(),d=l.fallback,p=e.mode,l=Ml({mode:"visible",children:l.children},p),d=ti(d,p,v,null),d.flags|=2,l.return=e,d.return=e,l.sibling=d,e.child=l,ci(e,a.child,null,v),l=e.child,l.memoizedState=Cm(v),l.childLanes=Bm(a,s,v),e.memoizedState=xm,Ms(null,l));if(Pt(e),Cc(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var A=s.dgst;return s=A,s!==""&&(l=Error(u(419)),l.stack="",l.digest=s,ps({value:l,source:null,stack:null})),El(a,e,v)}if(ne||si(a,e,v,!1),s=(v&a.childLanes)!==0,ne||s){if(_t.current!==null)return El(a,e,v);if(s=Ia,s!==null&&(l=wg(s,v),l!==0&&l!==p.retryLane))throw p.retryLane=l,ni(a,l),Be(s,a,l),Rm;return xc(d)||Vl(),El(a,e,v)}return xc(d)?(e.flags|=192,e.child=a.child,null):(a=p.treeContext,Ga=sn(d.nextSibling),le=e,ba=!0,ft=null,tn=!1,a!==null&&wp(e,a),e=Om(e,l.children),e.flags|=134221824,e)}function qb(a,e,t){a.lanes|=e;var s=a.alternate;s!==null&&(s.lanes|=e),ul(a.return,e,t)}function Vb(a){for(var e=null;a!==null;){var t=a.alternate;t!==null&&pl(t)===null&&(e=a),a=a.sibling}return e}function Rl(a,e,t,s,l,d){var p=a.memoizedState;p===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:l,treeForkCount:d}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=s,p.tail=t,p.tailMode=l,p.treeForkCount=d)}function Dm(a){var e=a.child;for(a.child=null;e!==null;){var t=e.sibling;e.sibling=a.child,a.child=e,e=t}}function Um(a,e,t){var s=e.pendingProps,l=s.revealOrder,d=s.tail;s=s.children;var p=be.current;if(e.flags&128)return As(e,p),null;var v=(p&2)!==0;if(v?(p=p&1|2,e.flags|=128):p&=1,As(e,p),l==="backwards"&&a!==null?(Dm(a),ie(a,e,s,t),Dm(a)):ie(a,e,s,t),s=ba?gs:0,!v&&a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&qb(a,t,e);else if(a.tag===19)qb(a,t,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(l){case"backwards":t=Vb(e.child),t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null,Dm(e)),Rl(e,!0,l,null,d,s);break;case"unstable_legacy-backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(a=l.alternate,a!==null&&pl(a)===null){e.child=l;break}a=l.sibling,l.sibling=t,t=l,l=a}Rl(e,!0,t,null,d,s);break;case"together":Rl(e,!1,null,null,void 0,s);break;case"independent":e.memoizedState=null;break;default:t=Vb(e.child),t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Rl(e,!1,l,t,d,s)}return e.child}function Fb(a,e,t){var s=e.pendingProps;return vt(e,e.type,s.value),ie(a,e,s.children,t),e.child}function it(a,e,t){if(a!==null&&(e.dependencies=a.dependencies),Nt|=e.lanes,(t&e.childLanes)===0)if(a!==null){if(si(a,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(u(153));if(e.child!==null){for(a=e.child,t=Wn(a,a.pendingProps),e.child=t,t.return=e;a.sibling!==null;)a=a.sibling,t=t.sibling=Wn(a,a.pendingProps),t.return=e;t.sibling=null}return e.child}function Km(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&ll(a)))}function hP(a,e,t){switch(e.tag){case 3:Ou(e,e.stateNode.containerInfo),vt(e,ae,a.memoizedState.cache),ii();break;case 27:case 5:md(e);break;case 4:Ou(e,e.stateNode.containerInfo);break;case 10:vt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,om(e),null;break;case 13:var s=e.memoizedState;if(s!==null){if(s.dehydrated!==null)return Pt(e),e.flags|=128,null;s=si(a,e,t,!1);var l=e.child.childLanes;return s||(t&l)!==0?zb(a,e,t):(Pt(e),a=it(a,e,t),a!==null?a.sibling:null)}Pt(e);break;case 19:if(e.flags&128)return Um(a,e,t);if(l=(a.flags&128)!==0,s=(t&e.childLanes)!==0,s||(si(a,e,t,!1),s=(t&e.childLanes)!==0),l){if(s)return Um(a,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),As(e,be.current),s)break;return null;case 22:return e.lanes=0,Lb(a,e,t,e.pendingProps);case 24:vt(e,ae,a.memoizedState.cache)}return it(a,e,t)}function Yb(a,e,t){if(a!==null)if(a.memoizedProps!==e.pendingProps)ne=!0;else{if(!Km(a,t)&&(e.flags&128)===0)return ne=!1,hP(a,e,t);ne=(a.flags&131072)!==0}else ne=!1,ba&&(e.flags&1048576)!==0&&Pp(e,gs,e.index);switch(e.lanes=0,e.tag){case 16:a:{var s=e.pendingProps;if(a=di(e.elementType),e.type=a,typeof a=="function")zd(a)?(s=hi(a,s),e.tag=1,e=Gb(null,e,a,s,t)):(e.tag=0,e=Nm(null,e,a,s,t));else{if(a!=null){var l=a.$$typeof;if(l===R){e.tag=11,e=Db(null,e,a,s,t);break a}else if(l===X){e.tag=14,e=Ub(null,e,a,s,t);break a}else if(l===pa){e.tag=10,e.type=a,e=Fb(null,e,t);break a}}throw e=Na(a)||a,Error(u(306,e,""))}}return e;case 0:return Nm(a,e,e.type,e.pendingProps,t);case 1:return s=e.type,l=hi(s,e.pendingProps),Gb(a,e,s,l,t);case 3:a:{if(Ou(e,e.stateNode.containerInfo),a===null)throw Error(u(387));s=e.pendingProps;var d=e.memoizedState;l=d.element,im(a,e),Ts(e,s,null,t);var p=e.memoizedState;if(s=p.cache,vt(e,ae,s),s!==d.cache&&Wd(e,[ae],t,!0),Ss(),s=p.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=d,e.memoizedState=d,e.flags&256){e=Hb(a,e,s,t);break a}else if(s!==l){l=an(Error(u(424)),e),ps(l),e=Hb(a,e,s,t);break a}else for(a=e.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,Ga=sn(a.firstChild),le=e,ba=!0,ft=null,tn=!0,t=Lp(e,null,s,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ii(),s===l){e=it(a,e,t);break a}ie(a,e,s,t)}e=e.child}return e;case 26:return lr(a,e),a===null?(t=jy(e.type,null,e.pendingProps,null))?e.memoizedState=t:ba||(e.stateNode=ay(e.type,e.pendingProps,ct.current,e)):e.memoizedState=jy(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return md(e),a===null&&ba&&(s=e.stateNode=by(e.type,e.pendingProps,ct.current),le=e,tn=!0,l=Ga,Ot(e.type)?(Bc=l,Ga=sn(s.firstChild)):Ga=l),ie(a,e,e.pendingProps.children,t),lr(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&ba&&((l=s=Ga)&&(s=lw(s,e.type,e.pendingProps,tn),s!==null?(e.stateNode=s,le=e,Ga=sn(s.firstChild),tn=!1,l=!0):l=!1),l||yt(e)),md(e),l=e.type,d=e.pendingProps,p=a!==null?a.memoizedProps:null,s=d.children,_c(l,d)?s=null:p!==null&&_c(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=cm(a,e,tP,null,null,t),Pr._currentValue=l),lr(a,e),ie(a,e,s,t),e.child;case 6:return a===null&&ba&&((a=t=Ga)&&(t=ow(t,e.pendingProps,tn),t!==null?(e.stateNode=t,le=e,Ga=null,a=!0):a=!1),a||yt(e)),null;case 13:return zb(a,e,t);case 4:return Ou(e,e.stateNode.containerInfo),s=e.pendingProps,a===null?e.child=ci(e,null,s,t):ie(a,e,s,t),e.child;case 11:return Db(a,e,e.type,e.pendingProps,t);case 7:return s=e.pendingProps,lr(a,e),ie(a,e,s,t),e.child;case 8:return ie(a,e,e.pendingProps.children,t),e.child;case 12:return ie(a,e,e.pendingProps.children,t),e.child;case 10:return Fb(a,e,t);case 9:return l=e.type._context,s=e.pendingProps.children,ui(e),l=ge(l),s=s(l),e.flags|=1,ie(a,e,s,t),e.child;case 14:return Ub(a,e,e.type,e.pendingProps,t);case 15:return Kb(a,e,e.type,e.pendingProps,t);case 19:return Um(a,e,t);case 31:return cP(a,e,t);case 22:return Lb(a,e,t,e.pendingProps);case 24:return ui(e),s=ge(ae),a===null?(l=em(),l===null&&(l=Ia,d=Zd(),l.pooledCache=d,d.refCount++,d!==null&&(l.pooledCacheLanes|=t),l=d),e.memoizedState={parent:s,cache:l},tm(e),vt(e,ae,l)):((a.lanes&t)!==0&&(im(a,e),Ts(e,null,null,t),Ss()),l=a.memoizedState,d=e.memoizedState,l.parent!==s?(l={parent:s,cache:s},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),vt(e,ae,s)):(s=d.cache,vt(e,ae,s),s!==l.cache&&Wd(e,[ae],t,!0))),ie(a,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=e.pendingProps,s.name!=null&&s.name!=="auto"?e.flags|=a===null?18882560:18874368:ba&&rl(e),a!==null&&a.memoizedProps.name!==s.name?e.flags|=4194816:lr(a,e),ie(a,e,s.children,t),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function rt(a){a.flags|=4}function Lm(a,e,t,s,l){var d;if((d=(a.mode&32)!==0)&&(d=t===null?_y(e,s):_y(e,s)&&(s.src!==t.src||s.srcSet!==t.srcSet)),d){if(a.flags|=16777216,(l&335544128)===l)if(a.stateNode.complete)a.flags|=8192;else if(Nf())a.flags|=8192;else throw mi=cl,nm}else a.flags&=-16777217}function Xb(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!Py(e))if(Nf())a.flags|=8192;else throw mi=cl,nm}function Nl(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?Ag():536870912,a.lanes|=e,kr|=e)}function Es(a,e){if(!ba)switch(a.tailMode){case"visible":break;case"collapsed":for(var t=a.tail,s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:s.sibling=null;break;default:for(e=a.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a.tail=null:t.sibling=null}}function Ha(a){var e=a.alternate!==null&&a.alternate.child===a.child,t=0,s=0;if(e)for(var l=a.child;l!==null;)t|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=a,l=l.sibling;else for(l=a.child;l!==null;)t|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=a,l=l.sibling;return a.subtreeFlags|=s,a.childLanes=t,e}function gP(a,e,t){var s=e.pendingProps;switch(Fd(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ha(e),null;case 1:return Ha(e),null;case 3:return t=e.stateNode,s=null,a!==null&&(s=a.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),et(ae),Li(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(a===null||a.child===null)&&(er(e)?rt(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xd())),Ha(e),null;case 26:var l=e.type,d=e.memoizedState;return a===null?(rt(e),d!==null?(Ha(e),Xb(e,d)):(Ha(e),Lm(e,l,null,s,t))):d?d!==a.memoizedState?(rt(e),Ha(e),Xb(e,d)):(Ha(e),e.flags&=-16777217):(a=a.memoizedProps,a!==s&&rt(e),Ha(e),Lm(e,l,a,s,t)),null;case 27:if(Du(e),t=ct.current,l=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==s&&rt(e);else{if(!s){if(e.stateNode===null)throw Error(u(166));return Ha(e),e.subtreeFlags&=-33554433,null}a=Pn.current,er(e)?Mp(e):(a=by(l,s,t),e.stateNode=a,rt(e))}return Ha(e),e.subtreeFlags&=-33554433,null;case 5:if(Du(e),l=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==s&&rt(e);else{if(!s){if(e.stateNode===null)throw Error(u(166));return Ha(e),e.subtreeFlags&=-33554433,null}if(d=Pn.current,er(e))Mp(e);else{var p=Is(ct.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof s.is=="string"?p.createElement("select",{is:s.is}):p.createElement("select"),s.multiple?d.multiple=!0:s.size&&(d.size=s.size);break;default:d=typeof s.is=="string"?p.createElement(l,{is:s.is}):p.createElement(l)}}d[he]=e,d[Ee]=s;a:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break a;for(;p.sibling===null;){if(p.return===null||p.return===e)break a;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=d;a:switch(ye(d,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break a;case"img":s=!0;break a;default:s=!1}s&&rt(e)}}return Ha(e),e.subtreeFlags&=-33554433,Lm(e,e.type,a===null?null:a.memoizedProps,e.pendingProps,t),null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==s&&rt(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(u(166));if(a=ct.current,er(e)){if(a=e.stateNode,t=e.memoizedProps,s=null,l=le,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}a[he]=e,a=!!(a.nodeValue===t||s!==null&&s.suppressHydrationWarning===!0||Xf(a.nodeValue,t)),a||yt(e,!0)}else a=Is(a).createTextNode(s),a[he]=e,e.stateNode=a}return Ha(e),null;case 31:if(t=e.memoizedState,a===null||a.memoizedState!==null){if(s=er(e),t!==null){if(a===null){if(!s)throw Error(u(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(557));a[he]=e}else ii(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ha(e),a=!1}else t=Xd(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=t),a=!0;if(!a)return e.flags&256?(Ge(e),e):(Ge(e),null);if((e.flags&128)!==0)throw Error(u(558))}return Ha(e),null;case 13:if(s=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(l=er(e),s!==null&&s.dehydrated!==null){if(a===null){if(!l)throw Error(u(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[he]=e}else ii(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ha(e),l=!1}else l=Xd(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Ge(e),e):(Ge(e),null)}return Ge(e),(e.flags&128)!==0?(e.lanes=t,e):(t=s!==null,a=a!==null&&a.memoizedState!==null,t&&(s=e.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),d=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==l&&(s.flags|=2048)),t!==a&&t&&(e.child.flags|=8192),Nl(e,e.updateQueue),Ha(e),null);case 4:return Li(),a===null&&vc(e.stateNode.containerInfo),e.flags|=67108864,Ha(e),null;case 10:return et(e.type),Ha(e),null;case 19:if(dm(e),s=e.memoizedState,s===null)return Ha(e),null;if(l=(e.flags&128)!==0,d=s.rendering,d===null)if(l)Es(s,!1);else{if(Qa!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(d=pl(a),d!==null){for(e.flags|=128,Es(s,!1),a=d.updateQueue,e.updateQueue=a,Nl(e,a),e.subtreeFlags=0,a=t,t=e.child;t!==null;)Tp(t,a),t=t.sibling;return As(e,be.current&1|2),ba&&Zn(e,s.treeForkCount),e.child}a=a.sibling}s.tail!==null&&Ke()>Gl&&(e.flags|=128,l=!0,Es(s,!1),e.lanes=4194304)}else{if(!l)if(a=pl(d),a!==null){if(e.flags|=128,l=!0,a=a.updateQueue,e.updateQueue=a,Nl(e,a),Es(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!d.alternate&&!ba)return Ha(e),null}else 2*Ke()-s.renderingStartTime>Gl&&t!==536870912&&(e.flags|=128,l=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(d.sibling=e.child,e.child=d):(a=s.last,a!==null?a.sibling=d:e.child=d,s.last=d)}if(s.tail!==null){a=s.tail;a:{for(t=a;t!==null;){if(t.alternate!==null){t=!1;break a}t=t.sibling}t=!0}return s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Ke(),a.sibling=null,d=be.current,d=l?d&1|2:d&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!t||ba?As(e,d):(t=d,Ja(pe,e),Ja(be,t),je===null&&(je=e)),ba&&Zn(e,s.treeForkCount),a}return Ha(e),null;case 22:case 23:return Ge(e),lm(),s=e.memoizedState!==null,a!==null?a.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(t&536870912)!==0&&(e.flags&128)===0&&(Ha(e),e.subtreeFlags&6&&(e.flags|=8192)):Ha(e),t=e.updateQueue,t!==null&&Nl(e,t.retryQueue),t=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==t&&(e.flags|=2048),a!==null&&ke(oi),null;case 24:return t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),et(ae),Ha(e),null;case 25:return null;case 30:return e.flags|=33554432,Ha(e),null}throw Error(u(156,e.tag))}function pP(a,e){switch(Fd(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return et(ae),Li(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return Du(e),null;case 31:if(e.memoizedState!==null){if(Ge(e),e.alternate===null)throw Error(u(340));ii()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 13:if(Ge(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(u(340));ii()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return dm(e),a=e.flags,a&65536?(e.flags=a&-65537|128,a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null),e.flags|=4,e):null;case 4:return Li(),null;case 10:return et(e.type),null;case 22:case 23:return Ge(e),lm(),a!==null&&ke(oi),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return et(ae),null;case 25:return null;default:return null}}function Qb(a,e){switch(Fd(e),e.tag){case 3:et(ae),Li();break;case 26:case 27:case 5:Du(e);break;case 4:Li();break;case 31:e.memoizedState!==null&&Ge(e);break;case 13:Ge(e);break;case 19:dm(e);break;case 10:et(e.type);break;case 22:case 23:Ge(e),lm(),a!==null&&ke(oi);break;case 24:et(ae)}}function Rs(a,e){try{var t=e.updateQueue,s=t!==null?t.lastEffect:null;if(s!==null){var l=s.next;t=l;do{if((t.tag&a)===a){s=void 0;var d=t.create,p=t.inst;s=d(),p.destroy=s}t=t.next}while(t!==l)}}catch(v){Ua(e,e.return,v)}}function Mt(a,e,t){try{var s=e.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&a)===a){var p=s.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,l=e;var A=t,C=v;try{C()}catch(K){Ua(l,A,K)}}}s=s.next}while(s!==d)}}catch(K){Ua(e,e.return,K)}}function Wb(a){var e=a.updateQueue;if(e!==null){var t=a.stateNode;try{$p(e,t)}catch(s){Ua(a,a.return,s)}}}function Zb(a,e,t){t.props=hi(a.type,a.memoizedProps),t.state=a.memoizedState;try{t.componentWillUnmount()}catch(s){Ua(a,e,s)}}function Rn(a,e){try{var t=a.ref;if(t!==null){switch(a.tag){case 26:case 27:case 5:var s=a.stateNode;break;case 30:var l=a.stateNode,d=Xn(a.memoizedProps,l);(l.ref===null||l.ref.name!==d)&&(l.ref=uy(d)),s=l.ref;break;case 7:if(a.stateNode===null){var p=new Fe(a);f(a.child,!1,sw,p,void 0,void 0),a.stateNode=p}s=a.stateNode;break;default:s=a.stateNode}typeof t=="function"?a.refCleanup=t(s):t.current=s}}catch(v){Ua(a,e,v)}}function fe(a,e){var t=a.ref,s=a.refCleanup;if(t!==null)if(typeof s=="function")try{s()}catch(l){Ua(a,e,l)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ua(a,e,l)}else t.current=null}function xl(a,e){if((a.tag===5||a.tag===27||a.tag===6)&&a.alternate===null&&e!==null)for(var t=0;t<e.length;t++)ky(a.stateNode,e[t])}function af(a){for(var e=a.return;e!==null&&($m(e)&&ky(a.stateNode,e.stateNode),!Im(e));)e=e.return}function Ns(a){for(var e=a.return;e!==null&&($m(e)&&uw(a.stateNode,e.stateNode),!Im(e));)e=e.return}function Im(a){return a.tag===5||a.tag===3||a.tag===27}function $m(a){return a&&a.tag===7&&a.stateNode!==null}function Jm(a){var e=a.type,t=a.memoizedProps,s=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&s.focus();break a;case"img":t.src?s.src=t.src:t.srcSet&&(s.srcset=t.srcSet)}}catch(l){Ua(a,a.return,l)}}function Gm(a,e,t){try{var s=a.stateNode;JP(s,a.type,t,e),s[Ee]=e}catch(l){Ua(a,a.return,l)}}function ef(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Ot(a.type)||a.tag===4}function Hm(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||ef(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Ot(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function zm(a,e,t,s){var l=a.tag;if(l===5||l===6)l=a.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(l),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wn)),xl(a,s),xa=!0;else if(l!==4&&(l===27&&(xl(a,s),s=null,Ot(a.type)&&(t=a.stateNode,e=null)),a=a.child,a!==null))for(zm(a,e,t,s),a=a.sibling;a!==null;)zm(a,e,t,s),a=a.sibling}function Cl(a,e,t,s){var l=a.tag;if(l===5||l===6)l=a.stateNode,e?t.insertBefore(l,e):t.appendChild(l),xl(a,s),xa=!0;else if(l!==4&&(l===27&&(xl(a,s),s=null,Ot(a.type)&&(t=a.stateNode)),a=a.child,a!==null))for(Cl(a,e,t,s),a=a.sibling;a!==null;)Cl(a,e,t,s),a=a.sibling}function nf(a){var e=a.stateNode,t=a.memoizedProps;try{for(var s=a.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ye(e,s,t),e[he]=a,e[Ee]=t}catch(d){Ua(a,a.return,d)}}var Bl=!1,He=null;function tf(a){(a.tag===30||(a.subtreeFlags&33554432)!==0)&&(Bl=!0)}var Nn=null;function rf(){var a=Nn;return Nn=null,a}var Ne=0;function or(a,e,t,s,l){return Ne=0,sf(a.child,e,t,s,l)}function sf(a,e,t,s,l){for(var d=!1;a!==null;){if(a.tag===5){var p=a.stateNode;if(s!==null){var v=Mc(p);s.push(v),v.view&&(d=!0)}else d||Mc(p).view&&(d=!0);Bl=!0,ry(p,Ne===0?e:e+"_"+Ne,t),Ne++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&l||sf(a.child,e,t,s,l)&&(d=!0));a=a.sibling}return d}function xn(a,e){for(;a!==null;)a.tag===5?sy(a.stateNode,a.memoizedProps):(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&e||xn(a.child,e)),a=a.sibling}function Ol(a){if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if((a.tag!==22||a.memoizedState===null)&&(Ol(a),a.tag===30&&(a.flags&18874368)!==0&&a.stateNode.paired)){var e=a.memoizedProps;if(e.name==null||e.name==="auto")throw Error(u(544));var t=e.name;e=Qn(e.default,e.share),e!=="none"&&(or(a,t,e,null,!1)||xn(a.child,!1))}a=a.sibling}}function qm(a,e){if(a.tag===30){var t=a.stateNode,s=a.memoizedProps,l=Xn(s,t),d=Qn(s.default,t.paired?s.share:s.enter);d!=="none"?or(a,l,d,null,!1)?(Ol(a),t.paired||e||br(a,s.onEnter)):xn(a.child,!1):Ol(a)}else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)qm(a,e),a=a.sibling;else Ol(a)}function Vm(a){if(He!==null&&He.size!==0){var e=He;if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if(a.tag!==22||a.memoizedState===null){if(a.tag===30&&(a.flags&18874368)!==0){var t=a.memoizedProps,s=t.name;if(s!=null&&s!=="auto"){var l=e.get(s);if(l!==void 0){var d=Qn(t.default,t.share);if(d!=="none"&&(or(a,s,d,null,!1)?(d=a.stateNode,l.paired=d,d.paired=l,br(a,t.onShare)):xn(a.child,!1)),e.delete(s),e.size===0)break}}}Vm(a)}a=a.sibling}}}function Fm(a){if(a.tag===30){var e=a.memoizedProps,t=Xn(e,a.stateNode),s=He!==null?He.get(t):void 0,l=Qn(e.default,s!==void 0?e.share:e.exit);l!=="none"&&(or(a,t,l,null,!1)?s!==void 0?(l=a.stateNode,s.paired=l,l.paired=s,He.delete(t),br(a,e.onShare)):br(a,e.onExit):xn(a.child,!1)),He!==null&&Vm(a)}else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)Fm(a),a=a.sibling;else He!==null&&Vm(a)}function uf(a){for(a=a.child;a!==null;){if(a.tag===30){var e=a.memoizedProps,t=Xn(e,a.stateNode);e=Qn(e.default,e.update),a.flags&=-5,e!=="none"&&or(a,t,e,a.memoizedState=[],!1)}else(a.subtreeFlags&33554432)!==0&&uf(a);a=a.sibling}}function Ym(a){if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if(a.tag!==22||a.memoizedState===null){if(a.tag===30&&(a.flags&18874368)!==0){var e=a.stateNode;e.paired!==null&&(e.paired=null,xn(a.child,!1))}Ym(a)}a=a.sibling}}function Dl(a){if(a.tag===30)a.stateNode.paired=null,xn(a.child,!1),Ym(a);else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)Dl(a),a=a.sibling;else Ym(a)}function lf(a){for(a=a.child;a!==null;)a.tag===30?xn(a.child,!1):(a.subtreeFlags&33554432)!==0&&lf(a),a=a.sibling}function Xm(a,e,t,s,l,d,p){for(var v=!1;e!==null;){if(e.tag===5){var A=e.stateNode;if(d!==null&&Ne<d.length){var C=d[Ne],K=Mc(A);(C.view||K.view)&&(v=!0);var J;if(J=(a.flags&4)===0)if(K.clip)J=!0;else{J=C.rect;var N=K.rect;J=J.y!==N.y||J.x!==N.x||J.height!==N.height||J.width!==N.width}J&&(a.flags|=4),K.abs?K=!C.abs:(C=C.rect,K=K.rect,K=C.height!==K.height||C.width!==K.width),K&&(a.flags|=32)}else a.flags|=32;(a.flags&4)!==0&&ry(A,Ne===0?t:t+"_"+Ne,l),v&&(a.flags&4)!==0||(Nn===null&&(Nn=[]),Nn.push(A,Ne===0?s:s+"_"+Ne,e.memoizedProps)),Ne++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&p?a.flags|=e.flags&32:Xm(a,e.child,t,s,l,d,p)&&(v=!0));e=e.sibling}return v}function of(a,e){for(a=a.child;a!==null;){if(a.tag===30){var t=a.memoizedProps,s=a.stateNode,l=Xn(t,s),d=Qn(t.default,t.update),p;p=a.memoizedState,a.memoizedState=null,s=a;var v=a.child;Ne=0,l=Xm(s,v,l,l,d,p,!1),(a.flags&4)!==0&&l&&br(a,t.onUpdate)}else(a.subtreeFlags&33554432)!==0&&of(a);a=a.sibling}}var oe=!1,Oa=!1,Cn=!1,Qm=!1,df=typeof WeakSet=="function"?WeakSet:Set,de=null,Bn=!1,xs=!1,Ul=!1,Wm=!1;function bP(a,e,t){if(a=a.containerInfo,Tc=wr,a=kp(a),Kd(a)){if("selectionStart"in a)var s={start:a.selectionStart,end:a.selectionEnd};else a:{s=(s=a.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break a}var v=0,A=-1,C=-1,K=0,J=0,N=a,D=null;e:for(;;){for(var Y;N!==s||d!==0&&N.nodeType!==3||(A=v+d),N!==p||l!==0&&N.nodeType!==3||(C=v+l),N.nodeType===3&&(v+=N.nodeValue.length),(Y=N.firstChild)!==null;)D=N,N=Y;for(;;){if(N===a)break e;if(D===s&&++K===d&&(A=v),D===p&&++J===l&&(C=v),(Y=N.nextSibling)!==null)break;N=D,D=N.parentNode}N=Y}s=A===-1||C===-1?null:{start:A,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ac={focusedElem:a,selectionRange:s},wr=!1,t=(t&335544064)===t,de=e,e=t?9270:1024;de!==null;){if(a=de,t&&(s=a.deletions,s!==null))for(d=0;d<s.length;d++)t&&Fm(s[d]);if(a.alternate===null&&(a.flags&2)!==0)t&&tf(a),Kl(t);else{if(a.tag===22){if(s=a.alternate,a.memoizedState!==null){s!==null&&s.memoizedState===null&&t&&Fm(s),Kl(t);continue}else if(s!==null&&s.memoizedState!==null){t&&tf(a),Kl(t);continue}}s=a.child,(a.subtreeFlags&e)!==0&&s!==null?(s.return=a,de=s):(t&&uf(a),Kl(t))}}He=null}function Kl(a){for(;de!==null;){var e=de,t=a,s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){t=void 0,l=s.memoizedProps,s=s.memoizedState;var d=e.stateNode;try{var p=hi(e.type,l);t=d.getSnapshotBeforeUpdate(p,s),d.__reactInternalSnapshotBeforeUpdate=t}catch(v){Ua(e,e.return,v)}}break;case 3:if((l&1024)!==0){if(s=e.stateNode.containerInfo,t=s.nodeType,t===9)Nc(s);else if(t===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Nc(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&s!==null&&(t=Xn(s.memoizedProps,s.stateNode),l=e.memoizedProps,l=Qn(l.default,l.update),l!=="none"&&or(s,t,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(u(163))}if(s=e.sibling,s!==null){s.return=e.return,de=s;break}de=e.return}}function mf(a,e,t){var s=t.flags;switch(t.tag){case 0:case 11:case 15:On(a,t),s&4&&Rs(5,t);break;case 1:if(On(a,t),s&4)if(a=t.stateNode,e===null)try{a.componentDidMount()}catch(p){Ua(t,t.return,p)}else{var l=hi(t.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(l,e,a.__reactInternalSnapshotBeforeUpdate)}catch(p){Ua(t,t.return,p)}}s&64&&Wb(t),s&512&&Rn(t,t.return);break;case 3:if(On(a,t),s&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{$p(a,e)}catch(p){Ua(t,t.return,p)}}break;case 27:e===null&&s&4&&nf(t);case 26:case 5:On(a,t),e===null&&s&4&&Jm(t),s&512&&Rn(t,t.return);break;case 12:On(a,t);break;case 31:On(a,t),s&4&&gf(a,t);break;case 13:On(a,t),s&4&&pf(a,t),s&64&&(a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(t=EP.bind(null,t),dw(a,t))));break;case 22:if(s=t.memoizedState!==null||oe,!s){var d=e!==null&&e.memoizedState!==null||Oa;e=oe,l=Oa,oe=s,(Oa=d)&&!l?(s=2,(t.subtreeFlags&8772)!==0&&(s|=1),yn(a,t,s)):On(a,t),oe=e,Oa=l}break;case 30:On(a,t),s&512&&Rn(t,t.return);break;case 7:s&512&&Rn(t,t.return);default:On(a,t)}}function Zm(a,e){for(a=a.child;a!==null;)cf(a,e),a=a.sibling}function cf(a,e){switch(a.tag){case 5:case 26:try{var t=a.stateNode;if(e){var s=t.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=a.stateNode,d=a.memoizedProps.style,p=d!=null&&d.hasOwnProperty("display")?d.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(A){Ua(a,a.return,A)}ac(a,e);break;case 6:try{a.stateNode.nodeValue=e?"":a.memoizedProps,xa=!0}catch(A){Ua(a,a.return,A)}break;case 18:try{var v=a.stateNode;e?iy(v,!0):iy(a.stateNode,!1)}catch(A){Ua(a,a.return,A)}break;case 22:case 23:a.memoizedState===null&&Zm(a,e);break;default:Zm(a,e)}}function ac(a,e){if(a.subtreeFlags&67108864)for(a=a.child;a!==null;){a:{var t=a,s=e;switch(t.tag){case 4:cf(t,s);break a;case 22:t.memoizedState===null&&ac(t,s);break a;default:ac(t,s)}}a=a.sibling}}function kf(a){var e=a.alternate;e!==null&&(a.alternate=null,kf(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&Gu(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var za=null,xe=!1;function bn(a,e,t){for(t=t.child;t!==null;)hf(a,e,t),t=t.sibling}function hf(a,e,t){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(es,t)}catch{}switch(t.tag){case 26:Oa||fe(t,e),bn(a,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Oa&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Oa||fe(t,e),Ns(t);var s=za,l=xe;Ot(t.type)&&(za=t.stateNode,xe=!1),bn(a,e,t),fy(t.stateNode,t.type,t.memoizedProps),za=s,xe=l;break;case 5:Oa||fe(t,e),Ns(t);case 6:if(t.tag===6&&Ns(t),s=za,l=xe,za=null,bn(a,e,t),za=s,xe=l,za!==null)if(xe)try{(za.nodeType===9?za.body:za.nodeName==="HTML"?za.ownerDocument.body:za).removeChild(t.stateNode),xa=!0}catch(d){Ua(t,e,d)}else try{za.removeChild(t.stateNode),xa=!0}catch(d){Ua(t,e,d)}break;case 18:za!==null&&(xe?(a=za,ty(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.stateNode),Mr(a)):ty(za,t.stateNode));break;case 4:s=za,l=xe,za=t.stateNode.containerInfo,xe=!0,bn(a,e,t),za=s,xe=l;break;case 0:case 11:case 14:case 15:Mt(2,t,e),Oa||Mt(4,t,e),bn(a,e,t);break;case 1:Oa||(fe(t,e),s=t.stateNode,typeof s.componentWillUnmount=="function"&&Zb(t,e,s)),bn(a,e,t);break;case 21:bn(a,e,t);break;case 22:Oa=(s=Oa)||t.memoizedState!==null,bn(a,e,t),Oa=s;break;case 30:fe(t,e),bn(a,e,t);break;case 7:Oa||fe(t,e),bn(a,e,t);break;default:bn(a,e,t)}}function gf(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Mr(a)}catch(t){Ua(e,e.return,t)}}}function pf(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Mr(a)}catch(t){Ua(e,e.return,t)}}function fP(a){switch(a.tag){case 31:case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new df),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new df),e;default:throw Error(u(435,a.tag))}}function Ll(a,e){var t=fP(a);e.forEach(function(s){if(!t.has(s)){t.add(s);var l=RP.bind(null,a,s);s.then(l,l)}})}function Ae(a,e,t){var s=e.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],p=a,v=e,A=v;a:for(;A!==null;){switch(A.tag){case 27:if(Ot(A.type)){za=A.stateNode,xe=!1;break a}break;case 5:za=A.stateNode,xe=!1;break a;case 3:case 4:za=A.stateNode.containerInfo,xe=!0;break a}A=A.return}if(za===null)throw Error(u(160));hf(p,v,d),za=null,xe=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)bf(e,a,t),e=e.sibling}var fn=null;function bf(a,e,t){var s=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=a.updateQueue,s=s!==null?s.events:null,s!==null))for(var d=0;d<s.length;d++){var p=s[d];p.ref.impl=p.nextImpl}Ae(e,a,t),_e(a),l&4&&(Mt(3,a,a.return),Rs(3,a),Mt(5,a,a.return));break;case 1:Ae(e,a,t),_e(a),l&512&&(Oa||s===null||fe(s,s.return)),l&64&&oe&&(a=a.updateQueue,a!==null&&(e=a.callbacks,e!==null&&(t=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(d=fn,Ae(e,a,t),_e(a),l&512&&(Oa||s===null||fe(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,t=a.memoizedState,s===null)if(t===null)if(a.stateNode===null)if(oe)a.stateNode=ay(a.type,a.memoizedProps,e.containerInfo,a);else{a:{e=a.type,t=a.memoizedProps,l=d.ownerDocument||d;e:switch(e){case"title":s=l.getElementsByTagName("title")[0],(!s||s[is]||s[he]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(e),l.head.insertBefore(s,l.querySelector("head > title"))),ye(s,e,t),s[he]=a,ue(s),e=s;break a;case"link":if(d=Ay("link","href",l).get(e+(t.href||""))){for(p=0;p<d.length;p++)if(s=d[p],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){d.splice(p,1);break e}}s=l.createElement(e),ye(s,e,t),l.head.appendChild(s);break;case"meta":if(d=Ay("meta","content",l).get(e+(t.content||""))){for(p=0;p<d.length;p++)if(s=d[p],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){d.splice(p,1);break e}}s=l.createElement(e),ye(s,e,t),l.head.appendChild(s);break;default:throw Error(u(468,e))}s[he]=a,ue(s),e=s}a.stateNode=e}else oe||Kc(d,a.type,a.stateNode);else a.stateNode=Ty(d,t,a.memoizedProps);else l!==t?(l===null?(e=s.stateNode,e===null||Oa||e.parentNode.removeChild(e)):l.count--,t===null?oe||Kc(d,a.type,a.stateNode):Ty(d,t,a.memoizedProps)):t===null&&a.stateNode!==null&&Gm(a,a.memoizedProps,s.memoizedProps);break;case 27:Ae(e,a,t),_e(a),l&512&&(Oa||s===null||fe(s,s.return)),s!==null&&l&4&&Gm(a,a.memoizedProps,s.memoizedProps);break;case 5:if(d=Cn,Cn=!1,Ae(e,a,t),Cn=d,_e(a),l&512&&(Oa||s===null||fe(s,s.return)),a.flags&32){e=a.stateNode;try{zi(e,""),xa=!0}catch(K){Ua(a,a.return,K)}}l&4&&a.stateNode!=null&&(e=a.memoizedProps,Gm(a,e,s!==null?s.memoizedProps:e)),l&1024&&(Qm=!0);break;case 6:if(Ae(e,a,t),_e(a),l&4){if(a.stateNode===null)throw Error(u(162));e=a.memoizedProps,t=a.stateNode;try{t.nodeValue=e,xa=!0}catch(K){Ua(a,a.return,K)}}break;case 3:if(xa=!1,ao=null,d=fn,fn=$s(e.containerInfo),Ae(e,a,t),fn=d,_e(a),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Mr(e.containerInfo)}catch(K){Ua(a,a.return,K)}Qm&&(Qm=!1,ff(a)),xa=!1;break;case 4:l=Cn,Cn=oe,s=Ug(),d=fn,fn=$s(a.stateNode.containerInfo),Ae(e,a,t),_e(a),fn=d,xa&&xs&&(Ul=!0),xa=s,Cn=l;break;case 12:Ae(e,a,t),_e(a);break;case 31:Ae(e,a,t),_e(a),l&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,Ll(a,e)));break;case 13:Ae(e,a,t),_e(a),a.child.flags&8192&&a.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Jl=Ke()),l&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,Ll(a,e)));break;case 22:d=a.memoizedState!==null,p=s!==null&&s.memoizedState!==null;var v=oe,A=Oa,C=Cn;oe=v||d,Cn=C||d,Oa=A||p,Ae(e,a,t),Oa=A,Cn=C,oe=v,_e(a),l&8192&&(e=a.stateNode,e._visibility=d?e._visibility&-2:e._visibility|1,!d||s===null||p||oe||Oa||(e=p||Oa,t=oe,s=Oa,oe=d||oe,Oa=e,Et(a,2),oe=t,Oa=s),!d&&Cn||Zm(a,d)),l&4&&(e=a.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Ll(a,t))));break;case 19:Ae(e,a,t),_e(a),l&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,Ll(a,e)));break;case 30:l&512&&(Oa||s===null||fe(s,s.return)),l=Ug(),d=xs,p=(t&335544064)===t,v=a.memoizedProps,xs=p&&Qn(v.default,v.update)!=="none",Ae(e,a,t),_e(a),p&&s!==null&&xa&&(a.flags|=4),xs=d,xa=l;break;case 21:break;case 7:l&512&&(Oa||s===null||fe(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=a);default:Ae(e,a,t),_e(a)}}function _e(a){var e=a.flags;if(e&2){try{for(var t,s=a.return;s!==null;){if(ef(s)){t=s;break}s=s.return}s=null;for(var l=a.return;l!==null;){if($m(l)){var d=l.stateNode;s===null?s=[d]:s.push(d)}if(Im(l))break;l=l.return}var p=s;if(t==null)throw Error(u(160));switch(t.tag){case 27:var v=t.stateNode,A=Hm(a);Cl(a,A,v,p);break;case 5:var C=t.stateNode;t.flags&32&&(zi(C,""),t.flags&=-33);var K=Hm(a);Cl(a,K,C,p);break;case 3:case 4:var J=t.stateNode.containerInfo,N=Hm(a);zm(a,N,J,p);break;default:throw Error(u(161))}}catch(D){Ua(a,a.return,D)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function ff(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;ff(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,wr=!0,e.reset(),wr=!1),a=a.sibling}}function dr(a,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)yf(e,a),e=e.sibling;else of(e)}function yf(a,e){var t=a.alternate;if(t===null)qm(a,!1);else switch(a.tag){case 3:if(Wm=Bn=!1,rf(),dr(e,a),!Bn&&!Ul){if(a=Nn,a!==null)for(var s=0;s<a.length;s+=3){t=a[s];var l=a[s+1];sy(t,a[s+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}a=e.containerInfo,a=a.nodeType===9?a.documentElement:a.ownerDocument.documentElement,a!==null&&a.style.viewTransitionName===""&&(a.style.viewTransitionName="none",a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),a.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Wm=!0}Nn=null;break;case 5:dr(e,a);break;case 4:s=Bn,Bn=!1,dr(e,a),Bn&&(Ul=!0),Bn=s;break;case 22:a.memoizedState===null&&(t.memoizedState!==null?qm(a,!1):dr(e,a));break;case 30:s=Bn,l=rf(),Bn=!1,dr(e,a),Bn&&(a.flags|=4);var d=a.memoizedProps,p=a.stateNode;e=Xn(d,p),p=Xn(t.memoizedProps,p);var v=Qn(d.default,d.update);v==="none"?e=!1:(d=t.memoizedState,t.memoizedState=null,t=a.child,Ne=0,e=Xm(a,t,e,p,v,d,!0),Ne!==(d===null?0:d.length)&&(a.flags|=32)),(a.flags&4)!==0&&e?(br(a,a.memoizedProps.onUpdate),Nn=l):l!==null&&(l.push.apply(l,Nn),Nn=l),Bn=(a.flags&32)!==0?!0:s;break;default:dr(e,a)}}function On(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)mf(a,e.alternate,e),e=e.sibling}function Et(a,e){for(a=a.child;a!==null;){var t=a,s=e;switch(t.tag){case 0:case 11:case 14:case 15:Mt(4,t,t.return),Et(t,s);break;case 1:fe(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Zb(t,t.return,l),Et(t,s);break;case 27:(s&2)!==0&&fy(t.stateNode,t.type,t.memoizedProps);case 5:fe(t,t.return),t.tag!==5&&t.tag!==27||Ns(t),Et(t,s);break;case 6:Ns(t);break;case 26:fe(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||Oa||l.parentNode.removeChild(l),Et(t,s);break;case 22:t.memoizedState===null&&Et(t,s);break;case 30:fe(t,t.return),Et(t,s);break;case 7:fe(t,t.return);default:Et(t,s)}a=a.sibling}}function yn(a,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var s=e.alternate,l=a,d=e,p=d.flags,v=(t&1)!==0;switch(d.tag){case 0:case 11:case 15:yn(l,d,t),Rs(4,d);break;case 1:if(yn(l,d,t),s=d,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(K){Ua(s,s.return,K)}if(s=d,l=s.updateQueue,l!==null){var A=s.stateNode;try{var C=l.shared.hiddenCallbacks;if(C!==null)for(l.shared.hiddenCallbacks=null,l=0;l<C.length;l++)Ip(C[l],A)}catch(K){Ua(s,s.return,K)}}v&&p&64&&Wb(d),Rn(d,d.return);break;case 27:(t&2)!==0&&nf(d);case 5:d.tag!==5&&d.tag!==27||af(d),yn(l,d,t),v&&s===null&&p&4&&Jm(d),Rn(d,d.return);break;case 6:af(d);break;case 26:A=d.stateNode,d.memoizedState!==null||A===null||oe||Kc($s(A.ownerDocument),d.type,A),yn(l,d,t),v&&s===null&&p&4&&Jm(d),Rn(d,d.return);break;case 12:yn(l,d,t);break;case 31:yn(l,d,t),v&&p&4&&gf(l,d);break;case 13:yn(l,d,t),v&&p&4&&pf(l,d);break;case 22:d.memoizedState===null&&yn(l,d,t),Rn(d,d.return);break;case 30:yn(l,d,t),Rn(d,d.return);break;case 7:Rn(d,d.return);default:yn(l,d,t)}e=e.sibling}}function ec(a,e){var t=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(a!=null&&a.refCount++,t!=null&&bs(t))}function nc(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&bs(a))}function rn(a,e,t,s){var l=(t&335544064)===t;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)vf(a,e,t,s),e=e.sibling;else l&&lf(e)}function vf(a,e,t,s){var l=(t&335544064)===t;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Dl(e);var d=e.flags;switch(e.tag){case 0:case 11:case 15:rn(a,e,t,s),d&2048&&Rs(9,e);break;case 1:rn(a,e,t,s);break;case 3:rn(a,e,t,s),l&&Wm&&(a=a.containerInfo,a=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,a.style.viewTransitionName==="root"&&(a.style.viewTransitionName=""),a=a.ownerDocument.documentElement,a!==null&&a.style.viewTransitionName==="none"&&(a.style.viewTransitionName="")),d&2048&&(d=null,e.alternate!==null&&(d=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==d&&(e.refCount++,d!=null&&bs(d)));break;case 12:if(d&2048){rn(a,e,t,s),d=e.stateNode;try{var p=e.memoizedProps,v=p.id,A=p.onPostCommit;typeof A=="function"&&A(v,e.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(C){Ua(e,e.return,C)}}else rn(a,e,t,s);break;case 31:rn(a,e,t,s);break;case 13:rn(a,e,t,s);break;case 23:break;case 22:p=e.stateNode,v=e.alternate,e.memoizedState!==null?(l&&v!==null&&v.memoizedState===null&&Dl(v),p._visibility&2?rn(a,e,t,s):Cs(a,e)):(l&&v!==null&&v.memoizedState!==null&&Dl(e),p._visibility&2?rn(a,e,t,s):(p._visibility|=2,mr(a,e,t,s,(e.subtreeFlags&10256)!==0||!1))),d&2048&&ec(v,e);break;case 24:rn(a,e,t,s),d&2048&&nc(e.alternate,e);break;case 30:l&&(d=e.alternate,d!==null&&(xn(d.child,!0),xn(e.child,!0))),rn(a,e,t,s);break;default:rn(a,e,t,s)}}function mr(a,e,t,s,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var d=a,p=e,v=t,A=s,C=p.flags;switch(p.tag){case 0:case 11:case 15:mr(d,p,v,A,l),Rs(8,p);break;case 23:break;case 22:var K=p.stateNode;p.memoizedState!==null?K._visibility&2?mr(d,p,v,A,l):Cs(d,p):(K._visibility|=2,mr(d,p,v,A,l)),l&&C&2048&&ec(p.alternate,p);break;case 24:mr(d,p,v,A,l),l&&C&2048&&nc(p.alternate,p);break;default:mr(d,p,v,A,l)}e=e.sibling}}function Cs(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=a,s=e,l=s.flags;switch(s.tag){case 22:Cs(t,s),l&2048&&ec(s.alternate,s);break;case 24:Cs(t,s),l&2048&&nc(s.alternate,s);break;default:Cs(t,s)}e=e.sibling}}var gi=8192;function pi(a,e,t){if(a.subtreeFlags&gi)for(a=a.child;a!==null;)jf(a,e,t),a=a.sibling}function jf(a,e,t){switch(a.tag){case 26:pi(a,e,t),a.flags&gi&&(a.memoizedState!==null?Aw(t,fn,a.memoizedState,a.memoizedProps):(a=a.stateNode,(e&335544128)===e&&My(t,a)));break;case 5:pi(a,e,t),a.flags&gi&&(a=a.stateNode,(e&335544128)===e&&My(t,a));break;case 3:case 4:var s=fn;fn=$s(a.stateNode.containerInfo),pi(a,e,t),fn=s;break;case 22:a.memoizedState===null&&(s=a.alternate,s!==null&&s.memoizedState!==null?(s=gi,gi=16777216,pi(a,e,t),gi=s):pi(a,e,t));break;case 30:if((a.flags&gi)!==0&&(s=a.memoizedProps.name,s!=null&&s!=="auto")){var l=a.stateNode;l.paired=null,He===null&&(He=new Map),He.set(s,l)}pi(a,e,t);break;default:pi(a,e,t)}}function Sf(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function Bs(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var s=e[t];de=s,Af(s,a)}Sf(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Tf(a),a=a.sibling}function Tf(a){switch(a.tag){case 0:case 11:case 15:Bs(a),a.flags&2048&&Mt(9,a,a.return);break;case 3:Bs(a);break;case 12:Bs(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,Il(a)):Bs(a);break;default:Bs(a)}}function Il(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var s=e[t];de=s,Af(s,a)}Sf(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:Mt(8,e,e.return),Il(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Il(e));break;default:Il(e)}a=a.sibling}}function Af(a,e){for(;de!==null;){var t=de;switch(t.tag){case 0:case 11:case 15:Mt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var s=t.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:bs(t.memoizedState.cache)}if(s=t.child,s!==null)s.return=t,de=s;else a:for(t=a;de!==null;){s=de;var l=s.sibling,d=s.return;if(kf(s),s===t){de=null;break a}if(l!==null){l.return=d,de=l;break a}de=d}}}var yP={getCacheForType:function(a){var e=ge(ae),t=e.data.get(a);return t===void 0&&(t=a(),e.data.set(a,t)),t},cacheSignal:function(){return ge(ae).controller.signal}},vP=typeof WeakMap=="function"?WeakMap:Map,Ba=0,Ia=null,va=null,Sa=0,Da=0,ze=null,Rt=!1,cr=!1,tc=!1,st=0,Qa=0,Nt=0,bi=0,$l=0,qe=0,kr=0,Os=null,Ce=null,ic=!1,Jl=0,_f=0,Gl=1/0,Hl=null,xt=null,Fa=0,vn=null,fi=null,Dn=0,rc=0,sc=null,Pf=null,hr=null,gr=null,pr=null,Ds=0,zl=null;function Ve(){return(Ba&2)!==0&&Sa!==0?Sa&-Sa:ta.T!==null?pc():Mg()}function wf(){if(qe===0)if((Sa&536870912)===0||ba){var a=Lu;Lu<<=1,(Lu&3932160)===0&&(Lu=262144),qe=a}else qe=536870912;return a=pe.current,a!==null&&(a.flags|=32),qe}function br(a,e){if(e!=null){var t=a.stateNode,s=t.ref;s===null&&(s=t.ref=uy(Xn(a.memoizedProps,t))),gr===null&&(gr=[]),gr.push(e.bind(null,s))}}function Be(a,e,t){(a===Ia&&(Da===2||Da===9)||a.cancelPendingCommit!==null)&&(fr(a,0),Ct(a,Sa,qe,!1)),ts(a,t),((Ba&2)===0||a!==Ia)&&(a===Ia&&((Ba&2)===0&&(bi|=t),Qa===4&&Ct(a,Sa,qe,!1)),Un(a))}function Mf(a,e,t){if((Ba&6)!==0)throw Error(u(327));var s=!t&&(e&127)===0&&(e&a.expiredLanes)===0||ns(a,e),l=s?TP(a,e):lc(a,e,!0),d=s;do{if(l===0){cr&&!s&&Ct(a,e,0,!1);break}else{if(t=a.current.alternate,d&&!jP(t)){l=lc(a,e,!1),d=!1;continue}if(l===2){if(d=e,a.errorRecoveryDisabledLanes&d)var p=0;else p=a.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;a:{var v=a;l=Os;var A=v.current.memoizedState.isDehydrated;if(A&&(fr(v,p).flags|=256),p=lc(v,p,!1),p!==2&&p!==6){if(tc&&!A){v.errorRecoveryDisabledLanes|=d,bi|=d,l=4;break a}d=Ce,Ce=l,d!==null&&(Ce===null?Ce=d:Ce.push.apply(Ce,d))}l=p}if(d=!1,l!==2)continue}}if(l===1){fr(a,0),Ct(a,e,0,!0);break}a:{switch(s=a,d=l,d){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ct(s,e,qe,!Rt);break a;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(l=Jl+300-Ke(),10<l)){if(Ct(s,e,qe,!Rt),$u(s,0,!0)!==0)break a;Dn=e,s.timeoutHandle=wc(Ef.bind(null,s,t,Ce,Hl,ic,e,qe,bi,kr,Rt,d,"Throttled",-0,0),l);break a}Ef(s,t,Ce,Hl,ic,e,qe,bi,kr,Rt,d,null,-0,0)}}break}while(!0);Un(a)}function Ef(a,e,t,s,l,d,p,v,A,C,K,J,N,D){a.timeoutHandle=-1;var Y=e.subtreeFlags,na=(d&335544064)===d;if(J=null,(na||Y&8192||(Y&16785408)===16785408)&&(J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},He=null,jf(e,d,J),na&&(Y=J,na=a.containerInfo,na=(na.nodeType===9?na:na.ownerDocument).__reactViewTransition,na!=null&&(Y.count++,Y.waitingForViewTransition=!0,Y=Hs.bind(Y),na.finished.then(Y,Y))),Y=(d&62914560)===d?Jl-Ke():(d&4194048)===d?_f-Ke():0,Y=_w(J,Y),Y!==null)){Dn=d,a.cancelPendingCommit=Y(Uf.bind(null,a,e,d,t,s,l,p,v,A,C,K,J,null,N,D)),Ct(a,d,p,!C);return}Uf(a,e,d,t,s,l,p,v,A,C,K,J)}function jP(a){for(var e=a;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var s=0;s<t.length;s++){var l=t[s],d=l.getSnapshot;l=l.value;try{if(!Je(d(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ct(a,e,t,s){e=Tg(a,e),e&=~$l,e&=~bi,a.suspendedLanes|=e,a.pingedLanes&=~e,s&&(a.warmLanes|=e),s=a.expirationTimes;for(var l=e;0<l;){var d=31-Ie(l),p=1<<d;s[d]=-1,l&=~p}t!==0&&_g(a,t,e)}function ql(){return(Ba&6)===0?(Us(0),!1):!0}function uc(){if(va!==null){if(Da===0)var a=va.return;else a=va,at=ri=null,gm(a),ir=null,vs=0,a=va;for(;a!==null;)Qb(a.alternate,a),a=a.return;va=null}}function fr(a,e){var t=a.timeoutHandle;return t!==-1&&(a.timeoutHandle=-1,zP(t)),t=a.cancelPendingCommit,t!==null&&(a.cancelPendingCommit=null,t()),Dn=0,uc(),Ia=a,va=t=Wn(a.current,null),Sa=e,Da=0,ze=null,Rt=!1,cr=ns(a,e),tc=!1,kr=qe=$l=bi=Nt=Qa=0,Ce=Os=null,ic=!1,st=Tg(a,e),al(),t}function Rf(a,e){ha=null,ta.H=_l,e===tr||e===ml?(e=Dp(),Da=3):e===nm?(e=Dp(),Da=4):Da=e===Rm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,va===null&&(Qa=1,Pl(a,an(e,a.current)))}function Nf(){var a=pe.current;return a===null?!0:(Sa&4194048)===Sa?je===null:(Sa&62914560)===Sa||(Sa&536870912)!==0?a===je:!1}function xf(){var a=ta.H;return ta.H=_l,a===null?_l:a}function Cf(){var a=ta.A;return ta.A=yP,a}function Vl(){Qa=4,Rt||(Sa&4194048)!==Sa&&pe.current!==null||(cr=!0),(Nt&134217727)===0&&(bi&134217727)===0||Ia===null||Ct(Ia,Sa,qe,!1)}function lc(a,e,t){var s=Ba;Ba|=2;var l=xf(),d=Cf();(Ia!==a||Sa!==e)&&(Hl=null,fr(a,e)),e=!1;var p=Qa;a:do try{if(Da!==0&&va!==null){var v=va,A=ze;switch(Da){case 8:uc(),p=6;break a;case 3:case 2:case 9:case 6:pe.current===null&&(e=!0);var C=Da;if(Da=0,ze=null,yr(a,v,A,C),t&&cr){p=0;break a}break;default:C=Da,Da=0,ze=null,yr(a,v,A,C)}}SP(),p=Qa;break}catch(K){Rf(a,K)}while(!0);return e&&a.shellSuspendCounter++,at=ri=null,Ba=s,ta.H=l,ta.A=d,va===null&&(Ia=null,Sa=0,al()),p}function SP(){for(;va!==null;)Bf(va)}function TP(a,e){var t=Ba;Ba|=2;var s=xf(),l=Cf();Ia!==a||Sa!==e?(Hl=null,Gl=Ke()+500,fr(a,e)):cr=ns(a,e);a:do try{if(Da!==0&&va!==null){e=va;var d=ze;e:switch(Da){case 1:Da=0,ze=null,yr(a,e,d,1);break;case 2:case 9:if(Bp(d)){Da=0,ze=null,Of(e);break}e=function(){Da!==2&&Da!==9||Ia!==a||(Da=7),Un(a)},d.then(e,e);break a;case 3:Da=7;break a;case 4:Da=5;break a;case 7:Bp(d)?(Da=0,ze=null,Of(e)):(Da=0,ze=null,yr(a,e,d,7));break;case 5:var p=null;switch(va.tag){case 26:p=va.memoizedState;case 5:case 27:var v=va;if(p?Py(p):v.stateNode.complete){Da=0,ze=null;var A=v.sibling;if(A!==null)va=A;else{var C=v.return;C!==null?(va=C,Fl(C)):va=null}break e}}Da=0,ze=null,yr(a,e,d,5);break;case 6:Da=0,ze=null,yr(a,e,d,6);break;case 8:uc(),Qa=6;break a;default:throw Error(u(462))}}AP();break}catch(K){Rf(a,K)}while(!0);return at=ri=null,ta.H=s,ta.A=l,Ba=t,va!==null?0:(Ia=null,Sa=0,al(),Qa)}function AP(){for(;va!==null&&!$A();)Bf(va)}function Bf(a){var e=Yb(a.alternate,a,st);a.memoizedProps=a.pendingProps,e===null?Fl(a):va=e}function Of(a){var e=a,t=e.alternate;switch(e.tag){case 15:case 0:e=Jb(t,e,e.pendingProps,e.type,void 0,Sa);break;case 11:e=Jb(t,e,e.pendingProps,e.type.render,e.ref,Sa);break;case 5:gm(e);var s=e;s===le&&(ba?(sl(s),s.tag===5&&s.stateNode!=null&&(Ga=s.stateNode)):(sl(s),ba=!0));default:Qb(t,e),e=va=Tp(e,st),e=Yb(t,e,st)}a.memoizedProps=a.pendingProps,e===null?Fl(a):va=e}function yr(a,e,t,s){at=ri=null,gm(e),ir=null,vs=0;var l=e.return;try{if(mP(a,l,e,t,Sa)){Qa=1,Pl(a,an(t,a.current)),va=null;return}}catch(d){if(l!==null)throw va=l,d;Qa=1,Pl(a,an(t,a.current)),va=null;return}e.flags&32768?(ba||s===1?a=!0:cr||(Sa&536870912)!==0?a=!1:(Rt=a=!0,(s===2||s===9||s===3||s===6)&&(s=pe.current,s!==null&&s.tag===13&&(s.flags|=16384))),Df(e,a)):Fl(e)}function Fl(a){var e=a;do{if((e.flags&32768)!==0){Df(e,Rt);return}a=e.return;var t=gP(e.alternate,e,st);if(t!==null){va=t;return}if(e=e.sibling,e!==null){va=e;return}va=e=a}while(e!==null);Qa===0&&(Qa=5)}function Df(a,e){do{var t=pP(a.alternate,a);if(t!==null){t.flags&=32767,va=t;return}if(t=a.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(a=a.sibling,a!==null)){va=a;return}va=a=t}while(a!==null);Qa=6,va=null}function Uf(a,e,t,s,l,d,p,v,A,C,K,J){a.cancelPendingCommit=null;do Yl();while(Fa!==0);if((Ba&6)!==0)throw Error(u(327));if(e!==null){if(e===a.current)throw Error(u(177));a===Ia&&(va=Ia=null,Sa=0),fi=e,vn=a,Dn=t,sc=l,Pf=s,_P(a,e,t,p,v,A,J)}}function _P(a,e,t,s,l,d,p){var v=e.lanes|e.childLanes;if(rc=v,v|=Gd,QA(a,t,v,s,l,d),gr=null,(t&335544064)===t?(pr=Z_(a),s=10262):(pr=null,s=10256),(e.subtreeFlags&s)!==0||(e.flags&s)!==0?(a.callbackNode=null,a.callbackPriority=0,NP(Uu,function(){return cc(),null})):(a.callbackNode=null,a.callbackPriority=0),Bl=!1,s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=ta.T,ta.T=null,l=ka.p,ka.p=2,d=Ba,Ba|=4;try{bP(a,e,t)}finally{Ba=d,ka.p=l,ta.T=s}}Fa=1,Bl?hr=QP(p,a.containerInfo,pr,oc,dc,wP,mc,cc,PP):(oc(),dc(),mc())}function PP(a){if(Fa!==0){var e=vn.onRecoverableError;e(a,{componentStack:null})}}function wP(){Fa===3&&(Fa=0,yf(fi,vn),Fa=4)}function oc(){if(Fa===1){Fa=0;var a=vn,e=fi,t=Dn,s=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||s){s=ta.T,ta.T=null;var l=ka.p;ka.p=2;var d=Ba;Ba|=4;try{xs=Ul=!1,bf(e,a,t),t=Ac;var p=kp(a.containerInfo),v=t.focusedElem,A=t.selectionRange;if(p!==v&&v&&v.ownerDocument&&cp(v.ownerDocument.documentElement,v)){if(A!==null&&Kd(v)){var C=A.start,K=A.end;if(K===void 0&&(K=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(K,v.value.length);else{var J=v.ownerDocument||document,N=J&&J.defaultView||window;if(N.getSelection){var D=N.getSelection(),Y=v.textContent.length,na=Math.min(A.start,Y),ga=A.end===void 0?na:Math.min(A.end,Y);!D.extend&&na>ga&&(p=ga,ga=na,na=p);var x=mp(v,na),M=mp(v,ga);if(x&&M&&(D.rangeCount!==1||D.anchorNode!==x.node||D.anchorOffset!==x.offset||D.focusNode!==M.node||D.focusOffset!==M.offset)){var B=J.createRange();B.setStart(x.node,x.offset),D.removeAllRanges(),na>ga?(D.addRange(B),D.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),D.addRange(B))}}}}for(J=[],D=v;D=D.parentNode;)D.nodeType===1&&J.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<J.length;v++){var $=J[v];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}wr=!!Tc,Ac=Tc=null}finally{Ba=d,ka.p=l,ta.T=s}}a.current=e,Fa=2}}function dc(){if(Fa===2){Fa=0;var a=vn,e=fi,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=ta.T,ta.T=null;var s=ka.p;ka.p=2;var l=Ba;Ba|=4;try{mf(a,e.alternate,e)}finally{Ba=l,ka.p=s,ta.T=t}}Fa=3}}function mc(){if(Fa===4||Fa===3){Fa=0;var a=hr;hr=null,JA();var e=vn,t=fi,s=Dn,l=Pf,d=(s&335544064)===s?10262:10256;if((t.subtreeFlags&d)!==0||(t.flags&d)!==0?Fa=5:(Fa=0,fi=vn=null,Kf(e,e.pendingLanes)),d=e.pendingLanes,d===0&&(xt=null),vd(s),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(es,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=ta.T,d=ka.p,ka.p=2,ta.T=null;try{for(var p=e.onRecoverableError,v=0;v<l.length;v++){var A=l[v];p(A.value,{componentStack:A.stack})}}finally{ta.T=t,ka.p=d}}if(l=gr,p=pr,pr=null,l!==null&&(gr=null,p===null&&(p=[]),a!==null))for(A=0;A<l.length;A++)t=(0,l[A])(p),t!==void 0&&a.finished.finally(t);(Dn&3)!==0&&Yl(),Un(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===zl?Ds++:(Ds=0,zl=e):(Ds=0,zl=null),Us(0)}}function Kf(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,bs(e)))}function Yl(){return hr!==null&&(hr.skipTransition(),hr=null),oc(),dc(),mc(),cc()}function cc(){if(Fa!==5)return!1;var a=vn,e=rc;rc=0;var t=vd(Dn),s=ta.T,l=ka.p;try{ka.p=32>t?32:t,ta.T=null,t=sc,sc=null;var d=vn,p=Dn;if(Fa=0,fi=vn=null,Dn=0,(Ba&6)!==0)throw Error(u(331));var v=Ba;if(Ba|=4,Tf(d.current),vf(d,d.current,p,t),Ba=v,Us(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(es,d)}catch{}return!0}finally{ka.p=l,ta.T=s,Kf(a,e)}}function Lf(a,e,t){e=an(t,e),e=Em(a.stateNode,e,2),a=At(a,e,2),a!==null&&(ts(a,2),Un(a))}function Ua(a,e,t){if(a.tag===3)Lf(a,a,t);else for(;e!==null;){if(e.tag===3){Lf(e,a,t);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xt===null||!xt.has(s))){a=an(t,a),t=Bb(2),s=At(e,t,2),s!==null&&(Ob(t,s,e,a),ts(s,2),Un(s));break}}e=e.return}}function kc(a,e,t){var s=a.pingCache;if(s===null){s=a.pingCache=new vP;var l=new Set;s.set(e,l)}else l=s.get(e),l===void 0&&(l=new Set,s.set(e,l));l.has(t)||(tc=!0,l.add(t),a=MP.bind(null,a,e,t),e.then(a,a))}function MP(a,e,t){var s=a.pingCache;s!==null&&s.delete(e),a.pingedLanes|=a.suspendedLanes&t,a.warmLanes&=~t,Ia===a&&(Sa&t)===t&&((Qa===4||Qa===3&&(Sa&62914560)===Sa&&300>Ke()-Jl)&&(Ba&2)===0?fr(a,0):$l|=t,kr===Sa&&(kr=0)),Un(a)}function If(a,e){e===0&&(e=Ag()),a=ni(a,e),a!==null&&(ts(a,e),Un(a))}function EP(a){var e=a.memoizedState,t=0;e!==null&&(t=e.retryLane),If(a,t)}function RP(a,e){var t=0;switch(a.tag){case 31:case 13:var s=a.stateNode,l=a.memoizedState;l!==null&&(t=l.retryLane);break;case 19:s=a.stateNode;break;case 22:s=a.stateNode._retryCache;break;default:throw Error(u(314))}s!==null&&s.delete(e),If(a,t)}function NP(a,e){return pd(a,e)}var vr=null,jr=null,hc=!1,Xl=!1,gc=!1,Bt=0;function Un(a){a!==jr&&a.next===null&&(jr===null?vr=jr=a:jr=jr.next=a),Xl=!0,hc||(hc=!0,CP())}function Us(a,e){if(!gc&&Xl){gc=!0;do for(var t=!1,s=vr;s!==null;){if(a!==0){var l=s.pendingLanes;if(l===0)var d=0;else{var p=s.suspendedLanes,v=s.pingedLanes;d=(1<<31-Ie(42|a)+1)-1,d&=l&~(p&~v),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(t=!0,Hf(s,d))}else d=Sa,d=$u(s,s===Ia?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||ns(s,d)||(t=!0,Hf(s,d));s=s.next}while(t);gc=!1}}function xP(){$f()}function $f(){Xl=hc=!1;var a=0;Bt!==0&&HP()&&(a=Bt);for(var e=Ke(),t=null,s=vr;s!==null;){var l=s.next,d=Jf(s,e);d===0?(s.next=null,t===null?vr=l:t.next=l,l===null&&(jr=t)):(t=s,(a!==0||(d&3)!==0)&&(Xl=!0)),s=l}Fa!==0&&Fa!==5||Us(a),Bt!==0&&(Bt=0)}function Jf(a,e){for(var t=a.suspendedLanes,s=a.pingedLanes,l=a.expirationTimes,d=a.pendingLanes&-62914561;0<d;){var p=31-Ie(d),v=1<<p,A=l[p];A===-1?((v&t)===0||(v&s)!==0)&&(l[p]=XA(v,e)):A<=e&&(a.expiredLanes|=v),d&=~v}if(e=Ia,t=Sa,t=$u(a,a===e?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),s=a.callbackNode,t===0||a===e&&(Da===2||Da===9)||a.cancelPendingCommit!==null)return s!==null&&s!==null&&bd(s),a.callbackNode=null,a.callbackPriority=0;if((t&3)===0||ns(a,t)){if(e=t&-t,e===a.callbackPriority)return e;switch(s!==null&&bd(s),vd(t)){case 2:case 8:t=jg;break;case 32:t=Uu;break;case 268435456:t=Sg;break;default:t=Uu}return s=Gf.bind(null,a),t=pd(t,s),a.callbackPriority=e,a.callbackNode=t,e}return s!==null&&s!==null&&bd(s),a.callbackPriority=2,a.callbackNode=null,2}function Gf(a,e){if(Fa!==0&&Fa!==5)return a.callbackNode=null,a.callbackPriority=0,null;var t=a.callbackNode;if(Yl()&&a.callbackNode!==t)return null;var s=Sa;return s=$u(a,a===Ia?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),s===0?null:(Mf(a,s,e),Jf(a,Ke()),a.callbackNode!=null&&a.callbackNode===t?Gf.bind(null,a):null)}function Hf(a,e){if(Yl())return null;Mf(a,e,!0)}function CP(){qP(function(){(Ba&6)!==0?pd(vg,xP):$f()})}function pc(){if(Bt===0){var a=li;a===0&&(a=Ku,Ku<<=1,(Ku&261888)===0&&(Ku=256)),Bt=a}return Bt}function zf(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:qu(a)}function BP(a,e,t,s,l){if(e==="submit"&&t&&t.stateNode===l){var d=zf((l[Ee]||null).action),p=s.submitter;p&&(e=(e=p[Ee]||null)?zf(e.formAction):p.getAttribute("formAction"),e!==null&&(d=e,p=null));var v=new Xu("action","action",null,s,l);a.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Bt!==0){var A=new FormData(l,p);Am(t,{pending:!0,data:A,method:l.method,action:d},null,A)}}else typeof d=="function"&&(v.preventDefault(),A=new FormData(l,p),Am(t,{pending:!0,data:A,method:l.method,action:d},d,A))},currentTarget:l}]})}}for(var bc=0;bc<Jd.length;bc++){var fc=Jd[bc],OP=fc.toLowerCase(),DP=fc[0].toUpperCase()+fc.slice(1);pn(OP,"on"+DP)}pn(pp,"onAnimationEnd"),pn(bp,"onAnimationIteration"),pn(fp,"onAnimationStart"),pn("dblclick","onDoubleClick"),pn("focusin","onFocus"),pn("focusout","onBlur"),pn(z_,"onTransitionRun"),pn(q_,"onTransitionStart"),pn(V_,"onTransitionCancel"),pn(yp,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ks));function qf(a,e){e=(e&4)!==0;for(var t=0;t<a.length;t++){var s=a[t],l=s.event;s=s.listeners;a:{var d=void 0;if(e)for(var p=s.length-1;0<=p;p--){var v=s[p],A=v.instance,C=v.currentTarget;if(v=v.listener,A!==d&&l.isPropagationStopped())break a;d=v,l.currentTarget=C;try{d(l)}catch(K){Zu(K)}l.currentTarget=null,d=A}else for(p=0;p<s.length;p++){if(v=s[p],A=v.instance,C=v.currentTarget,v=v.listener,A!==d&&l.isPropagationStopped())break a;d=v,l.currentTarget=C;try{d(l)}catch(K){Zu(K)}l.currentTarget=null,d=A}}}}function ja(a,e){var t=e[Rg];t===void 0&&(t=e[Rg]=new Set);var s=a+"__bubble";t.has(s)||(Vf(e,a,2,!1),t.add(s))}function yc(a,e,t){var s=0;e&&(s|=4),Vf(t,a,s,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function vc(a){if(!a[Ql]){a[Ql]=!0,Cg.forEach(function(t){t!=="selectionchange"&&(UP.has(t)||yc(t,!1,a),yc(t,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,yc("selectionchange",!1,e))}}function Vf(a,e,t,s){switch(Dy(e)){case 2:var l=Ew;break;case 8:l=Rw;break;default:l=Ic}t=l.bind(null,e,t,a),l=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),s?l!==void 0?a.addEventListener(e,t,{capture:!0,passive:l}):a.addEventListener(e,t,!0):l!==void 0?a.addEventListener(e,t,{passive:l}):a.addEventListener(e,t,!1)}function jc(a,e,t,s,l){var d=s;if((e&1)===0&&(e&2)===0&&s!==null)a:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var v=s.stateNode.containerInfo;if(v===l)break;if(p===4)for(p=s.return;p!==null;){var A=p.tag;if((A===3||A===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;v!==null;){if(p=Wt(v),p===null)return;if(A=p.tag,A===5||A===6||A===26||A===27){s=d=p;continue a}v=v.parentNode}}s=s.return}qg(function(){var C=d,K=Pd(t),J=[];a:{var N=vp.get(a);if(N!==void 0){var D=Xu,Y=a;switch(a){case"keypress":if(Fu(t)===0)break a;case"keydown":case"keyup":D=j_;break;case"focusin":Y="focus",D=xd;break;case"focusout":Y="blur",D=xd;break;case"beforeblur":case"afterblur":D=xd;break;case"click":if(t.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=P_;break;case pp:case bp:case fp:D=c_;break;case yp:D=M_;break;case"scroll":case"scrollend":D=u_;break;case"wheel":D=R_;break;case"copy":case"cut":case"paste":D=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Qg;break;case"submit":D=A_;break;case"toggle":case"beforetoggle":D=x_}var na=(e&4)!==0,ga=!na&&(a==="scroll"||a==="scrollend"),x=na?N!==null?N+"Capture":null:N;na=[];for(var M=C,B;M!==null;){var $=M;if(B=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||B===null||x===null||($=ss(M,x),$!=null&&na.push(Ls(M,$,B))),ga)break;M=M.return}0<na.length&&(N=new D(N,Y,null,t,K),J.push({event:N,listeners:na}))}}if((e&7)===0){a:{if(D=a==="mouseover"||a==="pointerover",N=a==="mouseout"||a==="pointerout",D&&t!==_d&&(Y=t.relatedTarget||t.fromElement)&&(Wt(Y)||Y[Ii]))break a;(N||D)&&(Y=K.window===K?K:(D=K.ownerDocument)?D.defaultView||D.parentWindow:window,N?(D=t.relatedTarget||t.toElement,N=C,D=D?Wt(D):null,D!==null&&(ga=m(D),na=D.tag,D!==ga||na!==5&&na!==27&&na!==6)&&(D=null)):(N=null,D=C),N!==D&&(na=Yg,$="onMouseLeave",x="onMouseEnter",M="mouse",(a==="pointerout"||a==="pointerover")&&(na=Qg,$="onPointerLeave",x="onPointerEnter",M="pointer"),ga=N==null?Y:rs(N),B=D==null?Y:rs(D),Y=new na($,M+"leave",N,t,K),Y.target=ga,Y.relatedTarget=B,$=null,Wt(K)===C&&(na=new na(x,M+"enter",D,t,K),na.target=B,na.relatedTarget=ga,$=na),ga=$,na=N&&D?W(N,D,KP):null,N!==null&&Ff(J,Y,N,na,!1),D!==null&&ga!==null&&Ff(J,ga,D,na,!0)))}a:{if(N=C?rs(C):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var aa=rp;else if(tp(N))if(sp)aa=J_;else{aa=I_;var Ta=L_}else D=N.nodeName,!D||D.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?C&&Ad(C.elementType)&&(aa=rp):aa=$_;if(aa&&(aa=aa(a,C))){ip(J,aa,t,K);break a}Ta&&Ta(a,N,C)}switch(Ta=C?rs(C):window,a){case"focusin":(tp(Ta)||Ta.contentEditable==="true")&&(Yi=Ta,Ld=C,hs=null);break;case"focusout":hs=Ld=Yi=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,hp(J,t,K);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":hp(J,t,K)}var sa;if(Bd)a:{switch(a){case"compositionstart":var da="onCompositionStart";break a;case"compositionend":da="onCompositionEnd";break a;case"compositionupdate":da="onCompositionUpdate";break a}da=void 0}else Fi?ep(a,t)&&(da="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(da="onCompositionStart");da&&(Wg&&t.locale!=="ko"&&(Fi||da!=="onCompositionStart"?da==="onCompositionEnd"&&Fi&&(sa=Vg()):(gt=K,Ed="value"in gt?gt.value:gt.textContent,Fi=!0)),Ta=Wl(C,da),0<Ta.length&&(da=new Xg(da,a,null,t,K),J.push({event:da,listeners:Ta}),sa?da.data=sa:(sa=np(t),sa!==null&&(da.data=sa)))),(sa=B_?O_(a,t):D_(a,t))&&(da=Wl(C,"onBeforeInput"),0<da.length&&(Ta=new Xg("onBeforeInput","beforeinput",null,t,K),J.push({event:Ta,listeners:da}),Ta.data=sa)),BP(J,a,C,t,K)}qf(J,e)})}function Ls(a,e,t){return{instance:a,listener:e,currentTarget:t}}function Wl(a,e){for(var t=e+"Capture",s=[];a!==null;){var l=a,d=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||d===null||(l=ss(a,t),l!=null&&s.unshift(Ls(a,l,d)),l=ss(a,e),l!=null&&s.push(Ls(a,l,d))),a.tag===3)return s;a=a.return}return[]}function KP(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Ff(a,e,t,s,l){for(var d=e._reactName,p=[];t!==null&&t!==s;){var v=t,A=v.alternate,C=v.stateNode;if(v=v.tag,A!==null&&A===s)break;v!==5&&v!==26&&v!==27||C===null||(A=C,l?(C=ss(t,d),C!=null&&p.unshift(Ls(t,C,A))):l||(C=ss(t,d),C!=null&&p.push(Ls(t,C,A)))),t=t.return}p.length!==0&&a.push({event:e,listeners:p})}var LP=/\r\n?/g,IP=/\u0000|\uFFFD/g;function Yf(a){return(typeof a=="string"?a:""+a).replace(LP,`
`).replace(IP,"")}function Xf(a,e){return e=Yf(e),Yf(a)===e}function Ka(a,e,t,s,l,d){switch(t){case"children":if(typeof s=="string")e==="body"||e==="textarea"&&s===""||zi(a,s);else if(typeof s=="number"||typeof s=="bigint")e!=="body"&&zi(a,""+s);else return;break;case"className":zu(a,"class",s);break;case"tabIndex":zu(a,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zu(a,t,s);break;case"style":Hg(a,s,d);return;case"data":if(e!=="object"){zu(a,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||t!=="href")){a.removeAttribute(t);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){a.removeAttribute(t);break}s=qu(s),a.setAttribute(t,s);break;case"action":case"formAction":if(typeof s=="function"){a.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(t==="formAction"?(e!=="input"&&Ka(a,e,"name",l.name,l,null),Ka(a,e,"formEncType",l.formEncType,l,null),Ka(a,e,"formMethod",l.formMethod,l,null),Ka(a,e,"formTarget",l.formTarget,l,null)):(Ka(a,e,"encType",l.encType,l,null),Ka(a,e,"method",l.method,l,null),Ka(a,e,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){a.removeAttribute(t);break}s=qu(s),a.setAttribute(t,s);break;case"onClick":s!=null&&(a.onclick=wn);return;case"onScroll":s!=null&&ja("scroll",a);return;case"onScrollEnd":s!=null&&ja("scrollend",a);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(u(61));if(t=s.__html,t!=null){if(l.children!=null)throw Error(u(60));d?.__html!==t&&(a.innerHTML=t)}}break;case"multiple":a.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":a.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){a.removeAttribute("xlink:href");break}t=qu(s),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(t,s):a.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(t,""):a.removeAttribute(t);break;case"capture":case"download":s===!0?a.setAttribute(t,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(t,s):a.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?a.setAttribute(t,s):a.removeAttribute(t);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?a.removeAttribute(t):a.setAttribute(t,s);break;case"popover":ja("beforetoggle",a),ja("toggle",a),Hu(a,"popover",s);break;case"xlinkActuate":Fn(a,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Fn(a,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Fn(a,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Fn(a,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Fn(a,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Fn(a,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Fn(a,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Fn(a,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Fn(a,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Hu(a,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=r_.get(t)||t,Hu(a,t,s);else return}xa=!0}function Sc(a,e,t,s,l,d){switch(t){case"style":Hg(a,s,d);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(u(61));if(t=s.__html,t!=null){if(l.children!=null)throw Error(u(60));d?.__html!==t&&(a.innerHTML=t)}}break;case"children":if(typeof s=="string")zi(a,s);else if(typeof s=="number"||typeof s=="bigint")zi(a,""+s);else return;break;case"onScroll":s!=null&&ja("scroll",a);return;case"onScrollEnd":s!=null&&ja("scrollend",a);return;case"onClick":s!=null&&(a.onclick=wn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bg.hasOwnProperty(t))a:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),d=t.slice(2,l?t.length-7:void 0),e=a[Ee]||null,e=e!=null?e[t]:null,typeof e=="function"&&a.removeEventListener(d,e,l),typeof s=="function")){typeof e!="function"&&e!==null&&(t in a?a[t]=null:a.hasAttribute(t)&&a.removeAttribute(t)),a.addEventListener(d,s,l);break a}xa=!0,t in a?a[t]=s:s===!0?a.setAttribute(t,""):Hu(a,t,s)}return}xa=!0}function ye(a,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ja("error",a),ja("load",a);var s=!1,l=!1,d;for(d in t)if(t.hasOwnProperty(d)){var p=t[d];if(p!=null)switch(d){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Ka(a,e,d,p,t,null)}}l&&Ka(a,e,"srcSet",t.srcSet,t,null),s&&Ka(a,e,"src",t.src,t,null);return;case"input":ja("invalid",a);var v=d=p=l=null,A=null,C=null;for(s in t)if(t.hasOwnProperty(s)){var K=t[s];if(K!=null)switch(s){case"name":l=K;break;case"type":p=K;break;case"checked":A=K;break;case"defaultChecked":C=K;break;case"value":d=K;break;case"defaultValue":v=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(u(137,e));break;default:Ka(a,e,s,K,t,null)}}Ig(a,d,v,A,C,p,l,!1);return;case"select":ja("invalid",a),s=p=d=null;for(l in t)if(t.hasOwnProperty(l)&&(v=t[l],v!=null))switch(l){case"value":d=v;break;case"defaultValue":p=v;break;case"multiple":s=v;default:Ka(a,e,l,v,t,null)}e=d,t=p,a.multiple=!!s,e!=null?Hi(a,!!s,e,!1):t!=null&&Hi(a,!!s,t,!0);return;case"textarea":ja("invalid",a),d=l=s=null;for(p in t)if(t.hasOwnProperty(p)&&(v=t[p],v!=null))switch(p){case"value":s=v;break;case"defaultValue":l=v;break;case"children":d=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ka(a,e,p,v,t,null)}Jg(a,s,l,d);return;case"option":for(A in t)t.hasOwnProperty(A)&&(s=t[A],s!=null)&&(A==="selected"?a.selected=s&&typeof s!="function"&&typeof s!="symbol":Ka(a,e,A,s,t,null));return;case"dialog":ja("beforetoggle",a),ja("toggle",a),ja("cancel",a),ja("close",a);break;case"iframe":case"object":ja("load",a);break;case"video":case"audio":for(s=0;s<Ks.length;s++)ja(Ks[s],a);break;case"image":ja("error",a),ja("load",a);break;case"details":ja("toggle",a);break;case"embed":case"source":case"link":ja("error",a),ja("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(s=t[C],s!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Ka(a,e,C,s,t,null)}return;default:if(Ad(e)){for(K in t)t.hasOwnProperty(K)&&(s=t[K],s!==void 0&&Sc(a,e,K,s,t,void 0));return}}for(v in t)t.hasOwnProperty(v)&&(s=t[v],s!=null&&Ka(a,e,v,s,t,null))}var $P={};function JP(a,e,t,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,d=null,p=null,v=null,A=null,C=null,K=null;for(D in t){var J=t[D];if(t.hasOwnProperty(D)&&J!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":A=J;default:s.hasOwnProperty(D)||Ka(a,e,D,null,s,J)}}for(var N in s){var D=s[N];if(J=t[N],s.hasOwnProperty(N)&&(D!=null||J!=null))switch(N){case"type":D!==J&&(xa=!0),d=D;break;case"name":D!==J&&(xa=!0),l=D;break;case"checked":D!==J&&(xa=!0),C=D;break;case"defaultChecked":D!==J&&(xa=!0),K=D;break;case"value":D!==J&&(xa=!0),p=D;break;case"defaultValue":D!==J&&(xa=!0),v=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,e));break;default:D!==J&&Ka(a,e,N,D,s,J)}}Sd(a,p,v,A,C,K,d,l);return;case"select":D=p=v=N=null;for(d in t)if(A=t[d],t.hasOwnProperty(d)&&A!=null)switch(d){case"value":break;case"multiple":D=A;default:s.hasOwnProperty(d)||Ka(a,e,d,null,s,A)}for(l in s)if(d=s[l],A=t[l],s.hasOwnProperty(l)&&(d!=null||A!=null))switch(l){case"value":d!==A&&(xa=!0),N=d;break;case"defaultValue":d!==A&&(xa=!0),v=d;break;case"multiple":d!==A&&(xa=!0),p=d;default:d!==A&&Ka(a,e,l,d,s,A)}e=v,t=p,s=D,N!=null?Hi(a,!!t,N,!1):!!s!=!!t&&(e!=null?Hi(a,!!t,e,!0):Hi(a,!!t,t?[]:"",!1));return;case"textarea":D=N=null;for(v in t)if(l=t[v],t.hasOwnProperty(v)&&l!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ka(a,e,v,null,s,l)}for(p in s)if(l=s[p],d=t[p],s.hasOwnProperty(p)&&(l!=null||d!=null))switch(p){case"value":l!==d&&(xa=!0),N=l;break;case"defaultValue":l!==d&&(xa=!0),D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==d&&Ka(a,e,p,l,s,d)}$g(a,N,D);return;case"option":for(var Y in t)N=t[Y],t.hasOwnProperty(Y)&&N!=null&&!s.hasOwnProperty(Y)&&(Y==="selected"?a.selected=!1:Ka(a,e,Y,null,s,N));for(A in s)N=s[A],D=t[A],s.hasOwnProperty(A)&&N!==D&&(N!=null||D!=null)&&(A==="selected"?(N!==D&&(xa=!0),a.selected=N&&typeof N!="function"&&typeof N!="symbol"):Ka(a,e,A,N,s,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var na in t)N=t[na],t.hasOwnProperty(na)&&N!=null&&!s.hasOwnProperty(na)&&Ka(a,e,na,null,s,N);for(C in s)if(N=s[C],D=t[C],s.hasOwnProperty(C)&&N!==D&&(N!=null||D!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,e));break;default:Ka(a,e,C,N,s,D)}return;default:if(Ad(e)){for(var ga in t)N=t[ga],t.hasOwnProperty(ga)&&N!==void 0&&!s.hasOwnProperty(ga)&&Sc(a,e,ga,void 0,s,N);for(K in s)N=s[K],D=t[K],!s.hasOwnProperty(K)||N===D||N===void 0&&D===void 0||Sc(a,e,K,N,s,D);return}}for(var x in t)N=t[x],t.hasOwnProperty(x)&&N!=null&&!s.hasOwnProperty(x)&&Ka(a,e,x,null,s,N);for(J in s)N=s[J],D=t[J],!s.hasOwnProperty(J)||N===D||N==null&&D==null||Ka(a,e,J,N,s,D)}function Qf(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GP(){if(typeof performance.getEntriesByType=="function"){for(var a=0,e=0,t=performance.getEntriesByType("resource"),s=0;s<t.length;s++){var l=t[s],d=l.transferSize,p=l.initiatorType,v=l.duration;if(d&&v&&Qf(p)){for(p=0,v=l.responseEnd,s+=1;s<t.length;s++){var A=t[s],C=A.startTime;if(C>v)break;var K=A.transferSize,J=A.initiatorType;K&&Qf(J)&&(A=A.responseEnd,p+=K*(A<v?1:(v-C)/(A-C)))}if(--s,e+=8*(d+p)/(l.duration/1e3),a++,10<a)break}}if(0<a)return e/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var Tc=null,Ac=null;function Is(a){return a.nodeType===9?a:a.ownerDocument}function Wf(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function ay(a,e,t,s){return t=Is(t).createElement(a),t[he]=s,t[Ee]=e,ye(t,a,e),ue(t),t}function _c(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=null;function HP(){var a=window.event;return a&&a.type==="popstate"?a===Pc?!1:(Pc=a,!0):(Pc=null,!1)}var wc=typeof setTimeout=="function"?setTimeout:void 0,zP=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,ny=typeof requestAnimationFrame=="function"?requestAnimationFrame:wc,qP=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(a){return ey.resolve(null).then(a).catch(VP)}:wc;function VP(a){setTimeout(function(){throw a})}function Ot(a){return a==="head"}function ty(a,e){var t=e,s=0;do{var l=t.nextSibling;if(a.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(s===0){a.removeChild(l),Mr(e);return}s--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")s++;else if(t==="html")Oc(a.ownerDocument.documentElement);else if(t==="head"){t=a.ownerDocument.head,Oc(t);for(var d=t.firstChild;d;){var p=d.nextSibling,v=d.nodeName;d[is]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||t.removeChild(d),d=p}}else t==="body"&&Oc(a.ownerDocument.body);t=l}while(t);Mr(e)}function iy(a,e){var t=a;a=0;do{var s=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(a===0)break;a--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||a++;t=s}while(t)}function ry(a,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,a.style.viewTransitionName=e,t!=null&&(a.style.viewTransitionClass=t),t=getComputedStyle(a),t.display==="inline"){if(e=a.getClientRects(),e.length===1)var s=1;else for(var l=s=0;l<e.length;l++){var d=e[l];0<d.width&&0<d.height&&s++}s===1&&(a=a.style,a.display=e.length===1?"inline-block":"block",a.marginTop="-"+t.paddingTop,a.marginBottom="-"+t.paddingBottom)}}function sy(a,e){a=a.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;a.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,a.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),a.display==="inline-block"&&(e==null?a.display=a.margin="":(t=e.display,a.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?a.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],a.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],a.marginBottom=e==null||typeof e=="boolean"?"":e)))}function FP(a,e,t){return t=t.ownerDocument.defaultView,{rect:a,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=a.bottom&&0<=a.right&&a.top<=t.innerHeight&&a.left<=t.innerWidth}}function Mc(a){var e=a.getBoundingClientRect(),t=getComputedStyle(a);return FP(e,t,a)}function YP(a){return a.documentElement.clientHeight}function XP(a){this.addEventListener("load",a),this.addEventListener("error",a)}function QP(a,e,t,s,l,d,p,v,A){var C=e.nodeType===9?e:e.ownerDocument;try{var K=C.startViewTransition({update:function(){var N=C.defaultView,D=N.navigation&&N.navigation.transition,Y=C.fonts.status;s();var na=[];if(Y==="loaded"&&(YP(C),C.fonts.status==="loading"&&na.push(C.fonts.ready)),Y=na.length,a!==null)for(var ga=a.suspenseyImages,x=0,M=0;M<ga.length;M++){var B=ga[M];if(!B.complete){var $=B.getBoundingClientRect();if(0<$.bottom&&0<$.right&&$.top<N.innerHeight&&$.left<N.innerWidth){if(x+=wy(B),x>eo){na.length=Y;break}B=new Promise(XP.bind(B)),na.push(B)}}}if(0<na.length)return N=Promise.race([Promise.all(na),new Promise(function(aa){return setTimeout(aa,500)})]).then(l,l),(D?Promise.allSettled([D.finished,N]):N).then(d,d);if(l(),D)return D.finished.then(d,d);d()},types:t});C.__reactViewTransition=K;var J=[];return K.ready.then(function(){for(var N=C.documentElement.getAnimations({subtree:!0}),D=0;D<N.length;D++){var Y=N[D],na=Y.effect,ga=na.pseudoElement;if(ga!=null&&ga.startsWith("::view-transition")){J.push(Y),Y=na.getKeyframes();for(var x=ga=void 0,M=!0,B=0;B<Y.length;B++){var $=Y[B],aa=$.width;if(ga===void 0)ga=aa;else if(ga!==aa){M=!1;break}if(aa=$.height,x===void 0)x=aa;else if(x!==aa){M=!1;break}delete $.width,delete $.height,$.transform==="none"&&delete $.transform}M&&ga!==void 0&&x!==void 0&&(na.setKeyframes(Y),M=getComputedStyle(na.target,na.pseudoElement),M.width!==ga||M.height!==x)&&(M=Y[0],M.width=ga,M.height=x,M=Y[Y.length-1],M.width=ga,M.height=x,na.setKeyframes(Y))}}p()},function(N){C.__reactViewTransition===K&&(C.__reactViewTransition=null);try{typeof N=="object"&&N!==null&&N.name==="InvalidStateError"&&(N.message==="View transition was skipped because document visibility state is hidden."||N.message==="Skipping view transition because document visibility state has become hidden."||N.message==="Skipping view transition because viewport size changed."||N.message==="Transition was aborted because of invalid state")&&(N=null),N!==null&&A(N)}finally{s(),l(),p()}}),K.finished.finally(function(){for(var N=0;N<J.length;N++)J[N].cancel();C.__reactViewTransition===K&&(C.__reactViewTransition=null),v()}),K}catch{return s(),l(),p(),null}}function yi(a,e){this._scope=document.documentElement,this._selector="::view-transition-"+a+"("+e+")"}yi.prototype.animate=function(a,e){return e=typeof e=="number"?{duration:e}:q({},e),e.pseudoElement=this._selector,this._scope.animate(a,e)},yi.prototype.getAnimations=function(){for(var a=this._scope,e=this._selector,t=a.getAnimations({subtree:!0}),s=[],l=0;l<t.length;l++){var d=t[l].effect;d!==null&&d.target===a&&d.pseudoElement===e&&s.push(t[l])}return s},yi.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uy(a){return{name:a,group:new yi("group",a),imagePair:new yi("image-pair",a),old:new yi("old",a),new:new yi("new",a)}}function Fe(a){this._fragmentFiber=a,this._observers=this._eventListeners=null}Fe.prototype.addEventListener=function(a,e,t){var s=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(s=t.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var d=this._eventListeners;if(oy(d,a,e,t)===-1){var p=this,v=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(v=function(A){p.removeEventListener(a,e,t),typeof e=="function"?e.call(this,A):e.handleEvent(A)}),s!==null&&(l=p.removeEventListener.bind(p,a,e,t),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Sr(t),d.push({type:a,listener:e,optionsOrUseCapture:t,attachedListener:v,cleanup:l}),f(this._fragmentFiber.child,!1,WP,a,v,s)}this._eventListeners=d}};function WP(a,e,t,s){return S(a).addEventListener(e,t,s),!1}Fe.prototype.removeEventListener=function(a,e,t){var s=this._eventListeners;if(s!==null&&(e=oy(s,a,e,t),e!==-1)){var l=s[e];t=l.attachedListener;var d=l.cleanup;l=Sr(l.optionsOrUseCapture),f(this._fragmentFiber.child,!1,ZP,a,t,l),s.splice(e,1),d!==null&&d()}};function ZP(a,e,t,s){return S(a).removeEventListener(e,t,s),!1}function Sr(a){return a!=null&&typeof a!="boolean"&&(a.once===!0||a.signal instanceof AbortSignal)?{capture:a.capture,passive:a.passive}:a}function ly(a){return a==null?"c=0":typeof a=="boolean"?"c="+(a?"1":"0"):"c="+(a.capture?"1":"0")}function oy(a,e,t,s){if(a.length===0)return-1;s=ly(s);for(var l=0;l<a.length;l++){var d=a[l];if(d.type===e&&d.listener===t&&ly(d.optionsOrUseCapture)===s)return l}return-1}Fe.prototype.dispatchEvent=function(a){var e=j(this._fragmentFiber);if(e===null)return!0;e=S(e);var t=this._eventListeners;if(t!==null&&0<t.length||!a.bubbles){var s=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var d=t[l];s.addEventListener(d.type,d.attachedListener,Sr(d.optionsOrUseCapture))}if(e.appendChild(s),a=s.dispatchEvent(a),t)for(l=0;l<t.length;l++)d=t[l],s.removeEventListener(d.type,d.attachedListener,Sr(d.optionsOrUseCapture));return e.removeChild(s),a}return e.dispatchEvent(a)},Fe.prototype.focus=function(a){f(this._fragmentFiber.child,!0,dy,a,void 0,void 0)};function dy(a,e){return a.tag===6?!1:(a=S(a),mw(a,e))}Fe.prototype.focusLast=function(a){var e=[];f(this._fragmentFiber.child,!0,Ec,e,void 0,void 0);for(var t=e.length-1;0<=t&&!dy(e[t],a);t--);};function Ec(a,e){return e.push(a),!1}Fe.prototype.blur=function(){var a=j(this._fragmentFiber);a!==null&&(a=S(a),a=Is(a).activeElement,a!==null&&f(this._fragmentFiber.child,!1,aw,a,void 0,void 0))};function aw(a,e){return a.tag===6?!1:(a=S(a),a===e||a.contains(e)?(e.blur(),!0):!1)}Fe.prototype.observeUsing=function(a){this._observers===null&&(this._observers=new Set),this._observers.add(a),f(this._fragmentFiber.child,!1,ew,a,void 0,void 0)};function ew(a,e){return a.tag===6||(a=S(a),e.observe(a)),!1}Fe.prototype.unobserveUsing=function(a){var e=this._observers;if(e!==null&&e.has(a)){e.delete(a),f(this._fragmentFiber.child,!1,nw,a,void 0,void 0);for(var t=e=0;t<jn.length;t++){var s=jn[t];s.fragmentInstance===this&&s.observer===a?a.unobserve(s.instance):jn[e++]=s}jn.length=e}};function nw(a,e){return a.tag===6||(a=S(a),e.unobserve(a)),!1}var jn=[],Rc=!1;function tw(a,e,t){jn.push({fragmentInstance:a,observer:e,instance:t}),Rc||(Rc=!0,cw(function(){Rc=!1;var s=jn;jn=[];for(var l=0;l<s.length;l++){var d=s[l];d.observer.unobserve(d.instance)}}))}Fe.prototype.getClientRects=function(){var a=[];return f(this._fragmentFiber.child,!1,iw,a,void 0,void 0),a};function iw(a,e){if(a.tag===6){a=a.stateNode;var t=a.ownerDocument.createRange();t.selectNodeContents(a),e.push.apply(e,t.getClientRects())}else a=S(a),e.push.apply(e,a.getClientRects());return!1}Fe.prototype.getRootNode=function(a){var e=j(this._fragmentFiber);return e===null?this:S(e).getRootNode(a)},Fe.prototype.compareDocumentPosition=function(a){var e=j(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];f(this._fragmentFiber.child,!1,Ec,t,void 0,void 0);var s=S(e);if(t.length===0){if(t=s,T(this._fragmentFiber)){a:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break a}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var l=s=t.compareDocumentPosition(a);return t===a?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=P(e)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(a=S(t).compareDocumentPosition(a),l=a===0||a&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=S(t[0]),l=S(t[t.length-1]);var d=T(this._fragmentFiber)?e.parentElement:s;if(d==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=d.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,d=d.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=e.compareDocumentPosition(a),v=l.compareDocumentPosition(a),A=p&Node.DOCUMENT_POSITION_CONTAINED_BY||v&Node.DOCUMENT_POSITION_CONTAINED_BY;return v=s&&d&&p&Node.DOCUMENT_POSITION_FOLLOWING&&v&Node.DOCUMENT_POSITION_PRECEDING,e=s&&e===a||d&&l===a||A||v?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&e===a||!d&&l===a?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rw(e,this._fragmentFiber,t[0],t[t.length-1],a)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rw(a,e,t,s,l){var d=Wt(l);if(a&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!d)a:{for(;d!==null;){if(d.tag===7&&(d===e||d.alternate===e)){t=!0;break a}d=d.return}t=!1}return t}if(a&Node.DOCUMENT_POSITION_CONTAINS){if(d===null)return d=l.ownerDocument,l===d||l===d.documentElement||l===d.body;a:{for(d=e,e=j(e);d!==null;){if(!(d.tag!==5&&d.tag!==3&&d.tag!==27||d!==e&&d.alternate!==e)){d=!0;break a}d=d.return}d=!1}return d}return a&Node.DOCUMENT_POSITION_PRECEDING?((e=!!d)&&!(e=d===t)&&(e=W(t,d,ea),e===null?e=!1:(f(e,!0,O,d,t),d=L,L=null,e=d!==null)),e):a&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!d)&&!(e=d===s)&&(e=W(s,d,ea),e===null?e=!1:(f(e,!0,z,d,s),d=L,U=L=null,e=d!==null)),e):!1}function my(a,e){var t=a.ownerDocument.createRange();t.selectNodeContents(a),a=t.getBoundingClientRect(),window.scrollTo(window.scrollX+a.left,e?window.scrollY+a.top:window.scrollY+a.bottom-window.innerHeight)}Fe.prototype.scrollIntoView=function(a){if(typeof a=="object")throw Error(u(566));var e=[];f(this._fragmentFiber.child,!1,Ec,e,void 0,void 0);var t=a!==!1;if(e.length===0){var s=P(this._fragmentFiber);if(s=t?s[1]||s[0]||j(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){a=S(s),my(a,t);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){t="host"in s?s.host:null,t!==null&&t.scrollIntoView(a);return}s.scrollIntoView(a)}}for(s=t?e.length-1:0;s!==(t?-1:e.length);){var l=e[s];l.tag===6?(l=S(l),my(l,t)):S(l).scrollIntoView(a),s+=t?-1:1}};function sw(a,e){return a=S(a),cy(a,e),!1}function cy(a,e){a.reactFragments==null&&(a.reactFragments=new Set),a.reactFragments.add(e)}function ky(a,e){var t=e._eventListeners;if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];a.addEventListener(l.type,l.attachedListener,Sr(l.optionsOrUseCapture))}a.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(d){for(var p=0,v=0;v<jn.length;v++){var A=jn[v];(A.fragmentInstance!==e||A.observer!==d||A.instance!==a)&&(jn[p++]=A)}jn.length=p,d.observe(a)}),cy(a,e))}function uw(a,e){var t=e._eventListeners;if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];a.removeEventListener(l.type,l.attachedListener,Sr(l.optionsOrUseCapture))}a.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(d){typeof d.rootMargin=="string"?tw(e,d,a):d.unobserve(a)}),a.reactFragments!=null&&a.reactFragments.delete(e))}function Nc(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Nc(t),Gu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}a.removeChild(t)}}function lw(a,e,t,s){for(;a.nodeType===1;){var l=t;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(s){if(!a[is])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(d=a.getAttribute("rel"),d==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(d!==l.rel||a.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||a.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||a.getAttribute("title")!==(l.title==null?null:l.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(d=a.getAttribute("src"),(d!==(l.src==null?null:l.src)||a.getAttribute("type")!==(l.type==null?null:l.type)||a.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&d&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var d=l.name==null?null:""+l.name;if(l.type==="hidden"&&a.getAttribute("name")===d)return a}else return a;if(a=sn(a.nextSibling),a===null)break}return null}function ow(a,e,t){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=sn(a.nextSibling),a===null))return null;return a}function hy(a,e){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=sn(a.nextSibling),a===null))return null;return a}function xc(a){return a.data==="$?"||a.data==="$~"}function Cc(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function dw(a,e){var t=a.ownerDocument;if(a.data==="$~")a._reactRetry=e;else if(a.data!=="$?"||t.readyState!=="loading")e();else{var s=function(){e(),t.removeEventListener("DOMContentLoaded",s)};t.addEventListener("DOMContentLoaded",s),a._reactRetry=s}}function sn(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return a}var Bc=null;function gy(a){a=a.nextSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"||t==="/&"){if(e===0)return sn(a.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}a=a.nextSibling}return null}function py(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return a;e--}else t!=="/$"&&t!=="/&"||e++}a=a.previousSibling}return null}function mw(a,e){function t(){s=!0}if(a.ownerDocument.activeElement===a)return!0;var s=!1;try{a.ownerDocument.addEventListener("focus",t,!0),(a.focus||HTMLElement.prototype.focus).call(a,e)}finally{a.ownerDocument.removeEventListener("focus",t,!0)}return s}function cw(a){ny(function(){ny(function(e){return a(e)})})}function by(a,e,t){switch(e=Is(t),a){case"html":if(a=e.documentElement,!a)throw Error(u(452));return a;case"head":if(a=e.head,!a)throw Error(u(453));return a;case"body":if(a=e.body,!a)throw Error(u(454));return a;default:throw Error(u(451))}}function fy(a,e,t){for(var s in t){var l=t[s];t.hasOwnProperty(s)&&l!=null&&Ka(a,e,s,null,$P,l)}t.dangerouslySetInnerHTML!=null&&(a.textContent=""),a.onclick===wn&&(a.onclick=null),Gu(a)}function Oc(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Gu(a)}var un=new Map,yy=new Set;function $s(a){if(typeof a.getRootNode=="function"){var e=a.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return a.nodeType===9?a:a.ownerDocument}var ut=ka.d;ka.d={f:kw,r:hw,D:gw,C:pw,L:bw,m:fw,X:vw,S:yw,M:jw};function kw(){var a=ut.f(),e=ql();return a||e}function hw(a){var e=$i(a);e!==null&&e.tag===5&&e.type==="form"?vb(e):ut.r(a)}var Tr=typeof document>"u"?null:document;function vy(a,e,t){var s=Tr;if(s&&typeof e=="string"&&e){var l=We(e);l='link[rel="'+a+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),yy.has(l)||(yy.add(l),a={rel:a,crossOrigin:t,href:e},s.querySelector(l)===null&&(e=s.createElement("link"),ye(e,"link",a),ue(e),s.head.appendChild(e)))}}function gw(a){ut.D(a),vy("dns-prefetch",a,null)}function pw(a,e){ut.C(a,e),vy("preconnect",a,e)}function bw(a,e,t){ut.L(a,e,t);var s=Tr;if(s&&a&&e){var l='link[rel="preload"][as="'+We(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+We(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+We(t.imageSizes)+'"]')):l+='[href="'+We(a)+'"]';var d=l;switch(e){case"style":d=Ar(a);break;case"script":d=_r(a)}if(!(un.has(d)||(a=q({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:a,as:e},t),un.set(d,a),s.querySelector(l)!==null||e==="style"&&s.querySelector(Js(d))||e==="script"&&s.querySelector(Gs(d))))){var p=s.createElement("link");ye(p,"link",a),e==="style"&&(p[Ju]=!0,p.onload=p.onerror=function(){xg(p)}),ue(p),s.head.appendChild(p)}}}function fw(a,e){ut.m(a,e);var t=Tr;if(t&&a){var s=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+We(s)+'"][href="'+We(a)+'"]',d=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_r(a)}if(!un.has(d)&&(a=q({rel:"modulepreload",href:a},e),un.set(d,a),t.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Gs(d)))return}s=t.createElement("link"),ye(s,"link",a),ue(s),t.head.appendChild(s)}}}function yw(a,e,t){ut.S(a,e,t);var s=Tr;if(s&&a){var l=Ji(s).hoistableStyles,d=Ar(a);e=e||"default";var p=l.get(d);if(!p){var v={loading:0,preload:null};if(p=s.querySelector(Js(d)))v.loading=5;else{a=q({rel:"stylesheet",href:a,"data-precedence":e},t),(t=un.get(d))&&Dc(a,t);var A=p=s.createElement("link");ue(A),ye(A,"link",a),A._p=new Promise(function(C,K){A.onload=C,A.onerror=K}),A.addEventListener("load",function(){v.loading|=1}),A.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Zl(p,e,s)}p={type:"stylesheet",instance:p,count:1,state:v},l.set(d,p)}}}function vw(a,e){ut.X(a,e);var t=Tr;if(t&&a){var s=Ji(t).hoistableScripts,l=_r(a),d=s.get(l);d||(d=t.querySelector(Gs(l)),d||(a=q({src:a,async:!0},e),(e=un.get(l))&&Uc(a,e),d=t.createElement("script"),ue(d),ye(d,"link",a),t.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(l,d))}}function jw(a,e){ut.M(a,e);var t=Tr;if(t&&a){var s=Ji(t).hoistableScripts,l=_r(a),d=s.get(l);d||(d=t.querySelector(Gs(l)),d||(a=q({src:a,async:!0,type:"module"},e),(e=un.get(l))&&Uc(a,e),d=t.createElement("script"),ue(d),ye(d,"link",a),t.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(l,d))}}function jy(a,e,t,s){var l=(l=ct.current)?$s(l):null;if(!l)throw Error(u(446));switch(a){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Ar(t.href),e=Ji(l).hoistableStyles,s=e.get(t),s||(s={type:"style",instance:null,count:0,state:null},e.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){a=Ar(t.href);var d=Ji(l).hoistableStyles,p=d.get(a);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(a,p),(d=l.querySelector(Js(a)))?d._p||(p.instance=d,p.state.loading=5):(d=un.get(a),d||(d={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},un.set(a,d)),Sw(l,a,d,p.state))),e&&s===null)throw Error(u(528,""));return p}if(e&&s!==null)throw Error(u(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=_r(t),e=Ji(l).hoistableScripts,s=e.get(t),s||(s={type:"script",instance:null,count:0,state:null},e.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,a))}}function Ar(a){return'href="'+We(a)+'"'}function Js(a){return'link[rel="stylesheet"]['+a+"]"}function Sy(a){return q({},a,{"data-precedence":a.precedence,precedence:null})}function Sw(a,e,t,s){if(e=a.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ju]!==!0){s.loading=1;return}}else e=a.createElement("link"),e[Ju]=!0,e.onload=e.onerror=xg.bind(null,e),ye(e,"link",t),ue(e),a.head.appendChild(e);s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2})}function _r(a){return'[src="'+We(a)+'"]'}function Gs(a){return"script[async]"+a}function Ty(a,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var s=a.querySelector('style[data-href~="'+We(t.href)+'"]');if(s)return e.instance=s,ue(s),s;var l=q({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return s=(a.ownerDocument||a).createElement("style"),ue(s),ye(s,"style",l),Zl(s,t.precedence,a),e.instance=s;case"stylesheet":l=Ar(t.href);var d=a.querySelector(Js(l));if(d)return e.state.loading|=4,e.instance=d,ue(d),d;s=Sy(t),(l=un.get(l))&&Dc(s,l),d=(a.ownerDocument||a).createElement("link"),ue(d);var p=d;return p._p=new Promise(function(v,A){p.onload=v,p.onerror=A}),ye(d,"link",s),e.state.loading|=4,Zl(d,t.precedence,a),e.instance=d;case"script":return d=_r(t.src),(l=a.querySelector(Gs(d)))?(e.instance=l,ue(l),l):(s=t,(l=un.get(d))&&(s=q({},t),Uc(s,l)),a=a.ownerDocument||a,l=a.createElement("script"),ue(l),ye(l,"link",s),a.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,Zl(s,t.precedence,a));return e.instance}function Zl(a,e,t){for(var s=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,d=l,p=0;p<s.length;p++){var v=s[p];if(v.dataset.precedence===e)d=v;else if(d!==l)break}d?d.parentNode.insertBefore(a,d.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(a,e.firstChild))}function Dc(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function Uc(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var ao=null;function Ay(a,e,t){if(ao===null){var s=new Map,l=ao=new Map;l.set(t,s)}else l=ao,s=l.get(t),s||(s=new Map,l.set(t,s));if(s.has(a))return s;for(s.set(a,null),t=t.getElementsByTagName(a),l=0;l<t.length;l++){var d=t[l];if(!(d[is]||d[he]||a==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(e)||"";p=a+p;var v=s.get(p);v?v.push(d):s.set(p,[d])}}return s}function Kc(a,e,t){a=a.ownerDocument||a,a.head.insertBefore(t,e==="title"?a.querySelector("head > title"):null)}function Tw(a,e,t){if(t===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(a=e.disabled,typeof e.precedence=="string"&&a==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function _y(a,e){return a==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Py(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function wy(a){return(a.width||100)*(a.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function My(a,e){typeof e.decode=="function"&&(a.imgCount++,e.complete||(a.imgBytes+=wy(e),a.suspenseyImages.push(e)),a=Pw.bind(a),e.decode().then(a,a))}function Aw(a,e,t,s){if(t.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ar(s.href),d=e.querySelector(Js(l));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Hs.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=d,ue(d);return}d=e.ownerDocument||e,s=Sy(s),(l=un.get(l))&&Dc(s,l),d=d.createElement("link"),ue(d);var p=d;p._p=new Promise(function(v,A){p.onload=v,p.onerror=A}),ye(d,"link",s),t.instance=d}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Hs.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}var eo=0;function _w(a,e){return a.stylesheets&&a.count===0&&to(a,a.stylesheets),0<a.count||0<a.imgCount?function(t){var s=setTimeout(function(){if(a.stylesheets&&to(a,a.stylesheets),a.unsuspend){var d=a.unsuspend;a.unsuspend=null,d()}},6e4+e);0<a.imgBytes&&eo===0&&(eo=62500*GP());var l=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&to(a,a.stylesheets),a.unsuspend)){var d=a.unsuspend;a.unsuspend=null,d()}},(a.imgBytes>eo?50:800)+e);return a.unsuspend=t,function(){a.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Ey(a){if(a.count===0&&(a.imgCount===0||!a.waitingForImages)){if(a.stylesheets)to(a,a.stylesheets);else if(a.unsuspend){var e=a.unsuspend;a.unsuspend=null,e()}}}function Hs(){this.count--,Ey(this)}function Pw(){this.imgCount--,Ey(this)}var no=null;function to(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,no=new Map,e.forEach(ww,a),no=null,Hs.call(a))}function ww(a,e){if(!(e.state.loading&4)){var t=no.get(a);if(t)var s=t.get(null);else{t=new Map,no.set(a,t);for(var l=a.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<l.length;d++){var p=l[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),s=p)}s&&t.set(null,s)}l=e.instance,p=l.getAttribute("data-precedence"),d=t.get(p)||s,d===s&&t.set(null,l),t.set(p,l),this.count++,s=Hs.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),d?d.parentNode.insertBefore(l,d.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(l,a.firstChild)),e.state.loading|=4}}var Pr={$$typeof:pa,Provider:null,Consumer:null,_currentValue:qn,_currentValue2:qn,_threadCount:0};function Mw(a,e,t,s,l,d,p,v,A){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.hiddenUpdates=fd(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ry(a,e,t,s,l,d,p,v,A,C,K,J){return a=new Mw(a,e,t,p,A,C,K,J,v),e=1,d===!0&&(e|=24),d=Re(3,null,null,e),a.current=d,d.stateNode=a,e=Zd(),e.refCount++,a.pooledCache=e,e.refCount++,d.memoizedState={element:s,isDehydrated:t,cache:e},tm(d),a}function Ny(a){return a?(a=Wi,a):Wi}function xy(a,e,t,s,l,d){l=Ny(l),s.context===null?s.context=l:s.pendingContext=l,s=Tt(e),s.payload={element:t},d=d===void 0?null:d,d!==null&&(s.callback=d),t=At(a,s,e),t!==null&&(Be(t,a,e),js(t,a,e))}function Cy(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<e?t:e}}function Lc(a,e){Cy(a,e),(a=a.alternate)&&Cy(a,e)}function By(a){if(a.tag===13||a.tag===31){var e=ni(a,67108864);e!==null&&Be(e,a,67108864),Lc(a,67108864)}}function Oy(a){if(a.tag===13||a.tag===31){var e=Ve();e=yd(e);var t=ni(a,e);t!==null&&Be(t,a,e),Lc(a,e)}}var wr=!0;function Ew(a,e,t,s){var l=ta.T;ta.T=null;var d=ka.p;try{ka.p=2,Ic(a,e,t,s)}finally{ka.p=d,ta.T=l}}function Rw(a,e,t,s){var l=ta.T;ta.T=null;var d=ka.p;try{ka.p=8,Ic(a,e,t,s)}finally{ka.p=d,ta.T=l}}function Ic(a,e,t,s){if(wr){var l=$c(s);if(l===null)jc(a,e,s,io,t),Uy(a,s);else if(xw(l,a,e,t,s))s.stopPropagation();else if(Uy(a,s),e&4&&-1<Nw.indexOf(a)){for(;l!==null;){var d=$i(l);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=Qt(d.pendingLanes);if(p!==0){var v=d;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var A=1<<31-Ie(p);v.entanglements[1]|=A,p&=~A}Un(d),(Ba&6)===0&&(Gl=Ke()+500,Us(0))}}break;case 31:case 13:v=ni(d,2),v!==null&&Be(v,d,2),ql(),Lc(d,2)}if(d=$c(s),d===null&&jc(a,e,s,io,t),d===l)break;l=d}l!==null&&s.stopPropagation()}else jc(a,e,s,null,t)}}function $c(a){return a=Pd(a),Jc(a)}var io=null;function Jc(a){if(io=null,a=Wt(a),a!==null){var e=m(a);if(e===null)a=null;else{var t=e.tag;if(t===13){if(a=c(e),a!==null)return a;a=null}else if(t===31){if(a=h(e),a!==null)return a;a=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return io=a,null}function Dy(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(GA()){case vg:return 2;case jg:return 8;case Uu:case HA:return 32;case Sg:return 268435456;default:return 32}default:return 32}}var Gc=!1,Dt=null,Ut=null,Kt=null,zs=new Map,qs=new Map,Lt=[],Nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uy(a,e){switch(a){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function Vs(a,e,t,s,l,d){return a===null||a.nativeEvent!==d?(a={blockedOn:e,domEventName:t,eventSystemFlags:s,nativeEvent:d,targetContainers:[l]},e!==null&&(e=$i(e),e!==null&&By(e)),a):(a.eventSystemFlags|=s,e=a.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),a)}function xw(a,e,t,s,l){switch(e){case"focusin":return Dt=Vs(Dt,a,e,t,s,l),!0;case"dragenter":return Ut=Vs(Ut,a,e,t,s,l),!0;case"mouseover":return Kt=Vs(Kt,a,e,t,s,l),!0;case"pointerover":var d=l.pointerId;return zs.set(d,Vs(zs.get(d)||null,a,e,t,s,l)),!0;case"gotpointercapture":return d=l.pointerId,qs.set(d,Vs(qs.get(d)||null,a,e,t,s,l)),!0}return!1}function Ky(a){var e=Wt(a.target);if(e!==null){var t=m(e);if(t!==null){if(e=t.tag,e===13){if(e=c(t),e!==null){a.blockedOn=e,Eg(a.priority,function(){Oy(t)});return}}else if(e===31){if(e=h(t),e!==null){a.blockedOn=e,Eg(a.priority,function(){Oy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function ro(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var t=$c(a.nativeEvent);if(t===null){t=a.nativeEvent;var s=new t.constructor(t.type,t);_d=s,t.target.dispatchEvent(s),_d=null}else return e=$i(t),e!==null&&By(e),a.blockedOn=t,!1;e.shift()}return!0}function Ly(a,e,t){ro(a)&&t.delete(e)}function Cw(){Gc=!1,Dt!==null&&ro(Dt)&&(Dt=null),Ut!==null&&ro(Ut)&&(Ut=null),Kt!==null&&ro(Kt)&&(Kt=null),zs.forEach(Ly),qs.forEach(Ly)}function so(a,e){a.blockedOn===e&&(a.blockedOn=null,Gc||(Gc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Cw)))}var uo=null;function Iy(a){uo!==a&&(uo=a,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){uo===a&&(uo=null);for(var e=0;e<a.length;e+=3){var t=a[e],s=a[e+1],l=a[e+2];if(typeof s!="function"){if(Jc(s||t)===null)continue;break}var d=$i(t);d!==null&&(a.splice(e,3),e-=3,Am(d,{pending:!0,data:l,method:t.method,action:s},s,l))}}))}function Mr(a){function e(A){return so(A,a)}Dt!==null&&so(Dt,a),Ut!==null&&so(Ut,a),Kt!==null&&so(Kt,a),zs.forEach(e),qs.forEach(e);for(var t=0;t<Lt.length;t++){var s=Lt[t];s.blockedOn===a&&(s.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)Ky(t),t.blockedOn===null&&Lt.shift();if(t=(a.ownerDocument||a).$$reactFormReplay,t!=null)for(s=0;s<t.length;s+=3){var l=t[s],d=t[s+1],p=l[Ee]||null;if(typeof d=="function")p||Iy(t);else if(p){var v=null;if(d&&d.hasAttribute("formAction")){if(l=d,p=d[Ee]||null)v=p.formAction;else if(Jc(l)!==null)continue}else v=p.action;typeof v=="function"?t[s+1]=v:(t.splice(s,3),s-=3),Iy(t)}}}function $y(){function a(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),s||setTimeout(t,20)}function t(){if(!s&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){s=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Hc(a){this._internalRoot=a}lo.prototype.render=Hc.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(u(409));var t=e.current,s=Ve();xy(t,s,a,e,null,null)},lo.prototype.unmount=Hc.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;xy(a.current,2,null,a,null,null),ql(),e[Ii]=null}};function lo(a){this._internalRoot=a}lo.prototype.unstable_scheduleHydration=function(a){if(a){var e=Mg();a={blockedOn:null,target:a,priority:e};for(var t=0;t<Lt.length&&e!==0&&e<Lt[t].priority;t++);Lt.splice(t,0,a),t===0&&Ky(a)}};var Jy=n.version;if(Jy!=="19.3.0")throw Error(u(527,Jy,"19.3.0"));ka.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(u(188)):(a=Object.keys(a).join(","),Error(u(268,a)));return a=b(e),a=a!==null?y(a):null,a=a===null?null:a.stateNode,a};var Bw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ta,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{es=oo.inject(Bw),Le=oo}catch{}}return Lr.createRoot=function(a,e){if(!o(a))throw Error(u(299));var t=!1,s="",l=Rb,d=Nb,p=xb;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(d=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=Ry(a,1,!1,null,null,t,s,null,l,d,p,$y),a[Ii]=e.current,vc(a),new Hc(e)},Lr.hydrateRoot=function(a,e,t){if(!o(a))throw Error(u(299));var s=!1,l="",d=Rb,p=Nb,v=xb,A=null;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.formState!==void 0&&(A=t.formState)),e=Ry(a,1,!0,e,t??null,s,l,A,d,p,v,$y),e.context=Ny(null),t=e.current,s=Ve(),s=yd(s),l=Tt(s),l.callback=null,At(t,l,s),t=s,e.current.lanes=t,ts(e,t),Un(e),a[Ii]=e.current,vc(a),new lo(e)},Lr.version="19.3.0",Lr}var Yk;function g0(){if(Yk)return Jo.exports;Yk=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Jo.exports=h0(),Jo.exports}var p0=g0();const b0=zc(p0),f0=Symbol.for("@supabase/supabase-js.traceContextExtractor");function y0(){return globalThis[f0]}function lu(i,n){var r={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&n.indexOf(u)<0&&(r[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,u=Object.getOwnPropertySymbols(i);o<u.length;o++)n.indexOf(u[o])<0&&Object.prototype.propertyIsEnumerable.call(i,u[o])&&(r[u[o]]=i[u[o]]);return r}function v0(i,n,r,u){function o(m){return m instanceof r?m:new r(function(c){c(m)})}return new(r||(r=Promise))(function(m,c){function h(y){try{b(u.next(y))}catch(f){c(f)}}function g(y){try{b(u.throw(y))}catch(f){c(f)}}function b(y){y.done?m(y.value):o(y.value).then(h,g)}b((u=u.apply(i,n||[])).next())})}typeof SuppressedError=="function"&&SuppressedError;const j0=i=>i?(...n)=>i(...n):(...n)=>fetch(...n);class zo extends Error{constructor(n,r="FunctionsError",u){super(n),this.name=r,this.context=u}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class S0 extends zo{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class Xk extends zo{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class Qk extends zo{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var qo;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(qo||(qo={}));class T0{constructor(n,{headers:r={},customFetch:u,region:o=qo.Any}={}){this.url=n,this.headers=r,this.region=o,this.fetch=j0(u)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n){return v0(this,arguments,void 0,function*(r,u={}){var o,m;let c,h,g;try{const{headers:b,method:y,body:f,signal:j,timeout:T}=u;let P={},{region:E}=u;E||(E=this.region);const S=new URL(`${this.url}/${r}`);E&&E!=="any"&&(P["x-region"]=E,S.searchParams.set("forceFunctionRegion",E));let L;const U=!!b&&Object.keys(b).some(ia=>ia.toLowerCase()==="content-type");f&&!U?typeof Blob<"u"&&f instanceof Blob||f instanceof ArrayBuffer?(P["Content-Type"]="application/octet-stream",L=f):typeof f=="string"?(P["Content-Type"]="text/plain",L=f):typeof FormData<"u"&&f instanceof FormData?L=f:(P["Content-Type"]="application/json",L=JSON.stringify(f)):f&&typeof f!="string"&&!(typeof Blob<"u"&&f instanceof Blob)&&!(f instanceof ArrayBuffer)&&!(typeof FormData<"u"&&f instanceof FormData)?L=JSON.stringify(f):L=f;let O=j;T&&(h=new AbortController,c=setTimeout(()=>h.abort(),T),j?(O=h.signal,g=()=>h.abort(),j.addEventListener("abort",g)):O=h.signal);const z=yield this.fetch(S.toString(),{method:y||"POST",headers:Object.assign(Object.assign(Object.assign({},P),this.headers),b),body:L,signal:O}).catch(ia=>{throw new S0(ia)}),ea=z.headers.get("x-relay-error");if(ea&&ea==="true")throw new Xk(z);if(!z.ok)throw new Qk(z);let W=((o=z.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim().toLowerCase(),q;return W==="application/json"?q=yield z.json():W==="application/octet-stream"||W==="application/pdf"?q=yield z.blob():W==="text/event-stream"?q=z:W==="multipart/form-data"?q=yield z.formData():q=yield z.text(),{data:q,error:null,response:z}}catch(b){return{data:null,error:b,response:b instanceof Qk||b instanceof Xk?b.context:void 0}}finally{c&&clearTimeout(c),g&&((m=u.signal)===null||m===void 0||m.removeEventListener("abort",g))}})}}var Ai=class extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};const Wk=3,Zk=i=>Math.min(1e3*2**i,3e4),A0=[520,503],ah=["GET","HEAD","OPTIONS"];function Ir(i){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ir(i)}function _0(i,n){if(Ir(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var u=r.call(i,n);if(Ir(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function P0(i){var n=_0(i,"string");return Ir(n)=="symbol"?n:n+""}function w0(i,n,r){return(n=P0(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function eh(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);n&&(u=u.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),r.push.apply(r,u)}return r}function Ht(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?eh(Object(r),!0).forEach(function(u){w0(i,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):eh(Object(r)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(r,u))})}return i}function nh(i,n){return new Promise(r=>{if(n?.aborted){r();return}const u=setTimeout(()=>{n?.removeEventListener("abort",o),r()},i);function o(){clearTimeout(u),r()}n?.addEventListener("abort",o)})}function M0(i,n,r,u){return!(!u||r>=Wk||!ah.includes(i)||!A0.includes(n))}async function th(i,n,r,u){let o=0;for(;;){const h=Ht({},r.headers);o>0&&(h["X-Retry-Count"]=String(o));let g;try{g=await i(n,{method:r.method,headers:h,body:r.body,signal:r.signal})}catch(b){if(b?.name==="AbortError"||b?.code==="ABORT_ERR"||!ah.includes(r.method))throw b;if(u&&o<Wk){const y=Zk(o);o++,await nh(y,r.signal);continue}throw b}if(M0(r.method,g.status,o,u)){var m,c;const b=(m=(c=g.headers)===null||c===void 0?void 0:c.get("Retry-After"))!==null&&m!==void 0?m:null,y=b!==null?Math.max(0,parseInt(b,10)||0)*1e3:Zk(o);await g.text(),o++,await nh(y,r.signal);continue}return g}}var E0=class{constructor(i){var n,r,u,o,m;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=i.method,this.url=i.url,this.headers=new Headers(i.headers),this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=(n=i.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=i.signal,this.isMaybeSingle=(r=i.isMaybeSingle)!==null&&r!==void 0?r:!1,this.shouldStripNulls=(u=i.shouldStripNulls)!==null&&u!==void 0?u:!1,this.urlLengthLimit=(o=i.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(m=i.retry)!==null&&m!==void 0?m:!0,i.fetch?this.fetch=i.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(i,n){return this.headers=new Headers(this.headers),this.headers.set(i,n),this}retry(i){return this.retryEnabled=i,this}then(i,n){var r=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const c=this.headers.get("Accept");c==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!c||c==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const u=this.fetch;let m=(async()=>{const c={};r.headers.forEach((g,b)=>{c[b]=g});const h=await th(u,r.url.toString(),{method:r.method,headers:c,body:JSON.stringify(r.body,(g,b)=>typeof b=="bigint"?b.toString():b),signal:r.signal},r.retryEnabled);return await r.processResponse(h)})();return this.shouldThrowOnError||(m=m.catch(c=>{var h;let g="",b="",y="";const f=c?.cause;if(f){var j,T,P,E;const U=(j=f?.message)!==null&&j!==void 0?j:"",O=(T=f?.code)!==null&&T!==void 0?T:"";g=`${(P=c?.name)!==null&&P!==void 0?P:"FetchError"}: ${c?.message}`,g+=`

Caused by: ${(E=f?.name)!==null&&E!==void 0?E:"Error"}: ${U}`,O&&(g+=` (${O})`),f?.stack&&(g+=`
${f.stack}`)}else{var S;g=(S=c?.stack)!==null&&S!==void 0?S:""}const L=this.url.toString().length;return c?.name==="AbortError"||c?.code==="ABORT_ERR"?(y="",b="Request was aborted (timeout or manual cancellation)",L>this.urlLengthLimit&&(b+=`. Note: Your request URL is ${L} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(f?.name==="HeadersOverflowError"||f?.code==="UND_ERR_HEADERS_OVERFLOW")&&(y="",b="HTTP headers exceeded server limits (typically 16KB)",L>this.urlLengthLimit&&(b+=`. Your request URL is ${L} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(h=c?.name)!==null&&h!==void 0?h:"FetchError"}: ${c?.message}`,details:g,hint:b,code:y},data:null,count:null,status:0,statusText:""}})),m.then(i,n)}async processResponse(i){var n=this;let r=null,u=null,o=null,m=i.status,c=i.statusText;if(i.ok){var h,g;if(n.method!=="HEAD"){var b;const T=await i.text();if(T!=="")if(n.headers.get("Accept")==="text/csv")u=T;else if(n.headers.get("Accept")&&(!((b=n.headers.get("Accept"))===null||b===void 0)&&b.includes("application/vnd.pgrst.plan+text")))u=T;else try{u=JSON.parse(T)}catch{if(r={message:T},u=null,n.shouldThrowOnError)throw new Ai({message:T,details:"",hint:"",code:""})}}const f=(h=n.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),j=(g=i.headers.get("content-range"))===null||g===void 0?void 0:g.split("/");if(f&&j&&j.length>1&&(o=parseInt(j[1])),n.isMaybeSingle&&Array.isArray(u))if(u.length>1){if(r={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,o=null,m=406,c="Not Acceptable",n.shouldThrowOnError){var y;throw new Ai(Ht(Ht({},r),{},{hint:(y=r.hint)!==null&&y!==void 0?y:""}))}}else u.length===1?u=u[0]:u=null}else{const f=await i.text();try{r=JSON.parse(f),Array.isArray(r)&&i.status===404&&(u=[],r=null,m=200,c="OK")}catch{i.status===404&&f===""?(m=204,c="No Content"):r={message:f}}if(r&&n.shouldThrowOnError)throw new Ai(r)}return{success:r===null,error:r,data:u,count:o,status:m,statusText:c}}returns(){return this}overrideTypes(){return this}},R0=class extends E0{throwOnError(){return super.throwOnError()}select(i){let n=!1;const r=(i??"*").split("").map(u=>/\s/.test(u)&&!n?"":(u==='"'&&(n=!n),u)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(i,{ascending:n=!0,nullsFirst:r,foreignTable:u,referencedTable:o=u}={}){const m=o?`${o}.order`:"order",c=this.url.searchParams.get(m);return this.url.searchParams.set(m,`${c?`${c},`:""}${i}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:n,referencedTable:r=n}={}){const u=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(u,`${i}`),this}range(i,n,{foreignTable:r,referencedTable:u=r}={}){const o=typeof u>"u"?"offset":`${u}.offset`,m=typeof u>"u"?"limit":`${u}.limit`;return this.url.searchParams.set(o,`${i}`),this.url.searchParams.set(m,`${n-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:i=!1,verbose:n=!1,settings:r=!1,buffers:u=!1,wal:o=!1,format:m="text"}={}){var c;const h=[i?"analyze":null,n?"verbose":null,r?"settings":null,u?"buffers":null,o?"wal":null].filter(Boolean).join("|"),g=(c=this.headers.get("Accept"))!==null&&c!==void 0?c:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${m}; for="${g}"; options=${h};`),m==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(i){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${i}`),this}};const ih=new RegExp("[,()]");var _i=class extends R0{throwOnError(){return super.throwOnError()}eq(i,n){return this.url.searchParams.append(i,`eq.${n}`),this}neq(i,n){return this.url.searchParams.append(i,`neq.${n}`),this}gt(i,n){return this.url.searchParams.append(i,`gt.${n}`),this}gte(i,n){return this.url.searchParams.append(i,`gte.${n}`),this}lt(i,n){return this.url.searchParams.append(i,`lt.${n}`),this}lte(i,n){return this.url.searchParams.append(i,`lte.${n}`),this}like(i,n){return this.url.searchParams.append(i,`like.${n}`),this}likeAllOf(i,n){return this.url.searchParams.append(i,`like(all).{${n.join(",")}}`),this}likeAnyOf(i,n){return this.url.searchParams.append(i,`like(any).{${n.join(",")}}`),this}ilike(i,n){return this.url.searchParams.append(i,`ilike.${n}`),this}ilikeAllOf(i,n){return this.url.searchParams.append(i,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(i,n){return this.url.searchParams.append(i,`ilike(any).{${n.join(",")}}`),this}regexMatch(i,n){return this.url.searchParams.append(i,`match.${n}`),this}regexIMatch(i,n){return this.url.searchParams.append(i,`imatch.${n}`),this}is(i,n){return this.url.searchParams.append(i,`is.${n}`),this}isDistinct(i,n){return this.url.searchParams.append(i,`isdistinct.${n}`),this}in(i,n){const r=Array.from(new Set(n)).map(u=>typeof u=="string"&&ih.test(u)?`"${u}"`:`${u}`).join(",");return this.url.searchParams.append(i,`in.(${r})`),this}notIn(i,n){const r=Array.from(new Set(n)).map(u=>typeof u=="string"&&ih.test(u)?`"${u}"`:`${u}`).join(",");return this.url.searchParams.append(i,`not.in.(${r})`),this}contains(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cs.{${n.join(",")}}`):this.url.searchParams.append(i,`cs.${JSON.stringify(n)}`),this}containedBy(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cd.{${n.join(",")}}`):this.url.searchParams.append(i,`cd.${JSON.stringify(n)}`),this}rangeGt(i,n){return this.url.searchParams.append(i,`sr.${n}`),this}rangeGte(i,n){return this.url.searchParams.append(i,`nxl.${n}`),this}rangeLt(i,n){return this.url.searchParams.append(i,`sl.${n}`),this}rangeLte(i,n){return this.url.searchParams.append(i,`nxr.${n}`),this}rangeAdjacent(i,n){return this.url.searchParams.append(i,`adj.${n}`),this}overlaps(i,n){return typeof n=="string"?this.url.searchParams.append(i,`ov.${n}`):this.url.searchParams.append(i,`ov.{${n.join(",")}}`),this}textSearch(i,n,{config:r,type:u}={}){let o="";u==="plain"?o="pl":u==="phrase"?o="ph":u==="websearch"&&(o="w");const m=r===void 0?"":`(${r})`;return this.url.searchParams.append(i,`${o}fts${m}.${n}`),this}match(i){return Object.entries(i).filter(([n,r])=>r!==void 0).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(i,n,r){return this.url.searchParams.append(i,`not.${n}.${r}`),this}or(i,{foreignTable:n,referencedTable:r=n}={}){const u=r?`${r}.or`:"or";return this.url.searchParams.append(u,`(${i})`),this}filter(i,n,r){return this.url.searchParams.append(i,`${n}.${r}`),this}},N0=class{constructor(i,{headers:n={},schema:r,fetch:u,urlLengthLimit:o=8e3,retry:m}){this.url=i,this.headers=new Headers(n),this.schema=r,this.fetch=u,this.urlLengthLimit=o,this.retry=m}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(i,n){const{head:r=!1,count:u}=n??{},o=r?"HEAD":"GET";let m=!1;const c=(i??"*").split("").map(b=>/\s/.test(b)&&!m?"":(b==='"'&&(m=!m),b)).join(""),{url:h,headers:g}=this.cloneRequestState();return h.searchParams.set("select",c),u&&g.append("Prefer",`count=${u}`),new _i({method:o,url:h,headers:g,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(i,{count:n,defaultToNull:r=!0}={}){var u;const o="POST",{url:m,headers:c}=this.cloneRequestState();if(n&&c.append("Prefer",`count=${n}`),r||c.append("Prefer","missing=default"),Array.isArray(i)){const h=i.reduce((g,b)=>g.concat(Object.keys(b)),[]);if(h.length>0){const g=[...new Set(h)].map(b=>`"${b}"`);m.searchParams.set("columns",g.join(","))}}return new _i({method:o,url:m,headers:c,schema:this.schema,body:i,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(i,{onConflict:n,ignoreDuplicates:r=!1,count:u,defaultToNull:o=!0}={}){var m;const c="POST",{url:h,headers:g}=this.cloneRequestState();if(g.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),n!==void 0&&h.searchParams.set("on_conflict",n),u&&g.append("Prefer",`count=${u}`),o||g.append("Prefer","missing=default"),Array.isArray(i)){const b=i.reduce((y,f)=>y.concat(Object.keys(f)),[]);if(b.length>0){const y=[...new Set(b)].map(f=>`"${f}"`);h.searchParams.set("columns",y.join(","))}}return new _i({method:c,url:h,headers:g,schema:this.schema,body:i,fetch:(m=this.fetch)!==null&&m!==void 0?m:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(i,{count:n}={}){var r;const u="PATCH",{url:o,headers:m}=this.cloneRequestState();return n&&m.append("Prefer",`count=${n}`),new _i({method:u,url:o,headers:m,schema:this.schema,body:i,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:i}={}){var n;const r="DELETE",{url:u,headers:o}=this.cloneRequestState();return i&&o.append("Prefer",`count=${i}`),new _i({method:r,url:u,headers:o,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function x0(i,n){try{const c=JSON.parse(i);if(c&&typeof c=="object"&&!Array.isArray(c)){var r,u,o,m;return new Ai({message:String((r=c.message)!==null&&r!==void 0?r:i),details:(u=c.details)!==null&&u!==void 0?u:"",hint:(o=c.hint)!==null&&o!==void 0?o:"",code:(m=c.code)!==null&&m!==void 0?m:""})}}catch{}return new Ai({message:i||n,details:"",hint:"",code:""})}function rh(i,n,r){var u;const o=i;return{success:!1,error:new Ai({message:`${(u=o?.name)!==null&&u!==void 0?u:"FetchError"}: ${o?.message}`,details:"",hint:"",code:""}),data:null,count:null,status:n,statusText:r}}var C0=class Gy{constructor(n,{headers:r={},schema:u,fetch:o,timeout:m,urlLengthLimit:c=8e3,retry:h}={}){this.url=n,this.headers=new Headers(r),this.schemaName=u,this.urlLengthLimit=c;const g=o??globalThis.fetch;m!==void 0&&m>0?this.fetch=(b,y)=>{const f=new AbortController,j=setTimeout(()=>f.abort(),m),T=y?.signal;if(T){if(T.aborted)return clearTimeout(j),g(b,y);const P=()=>{clearTimeout(j),f.abort()};return T.addEventListener("abort",P,{once:!0}),g(b,Ht(Ht({},y),{},{signal:f.signal})).finally(()=>{clearTimeout(j),T.removeEventListener("abort",P)})}return g(b,Ht(Ht({},y),{},{signal:f.signal})).finally(()=>clearTimeout(j))}:this.fetch=g,this.retry=h}from(n){if(!n||typeof n!="string"||n.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new N0(new URL(`${this.url}/${n}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(n){return new Gy(this.url,{headers:this.headers,schema:n,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}async getOpenApiSpec(){var n=this,r;const u=new Headers(n.headers);u.set("Accept","application/openapi+json"),n.schemaName&&u.set("Accept-Profile",n.schemaName);const o={};u.forEach((b,y)=>{o[y]=b});const m=(r=n.fetch)!==null&&r!==void 0?r:globalThis.fetch;let c;try{var h;c=await th(m,`${n.url}/`,{method:"GET",headers:o},(h=n.retry)!==null&&h!==void 0?h:!0)}catch(b){return rh(b,0,"")}let g;try{g=await c.text()}catch(b){return rh(b,c.status,c.statusText)}if(c.ok)try{return{success:!0,error:null,data:JSON.parse(g),count:null,status:c.status,statusText:c.statusText}}catch{}return{success:!1,error:x0(g,c.statusText),data:null,count:null,status:c.status,statusText:c.statusText}}rpc(n,r={},{head:u=!1,get:o=!1,count:m}={}){var c;let h;const g=new URL(`${this.url}/rpc/${n}`);let b;const y=T=>T!==null&&typeof T=="object"&&(!Array.isArray(T)||T.some(y)),f=u&&Object.values(r).some(y);f?(h="POST",b=r):u||o?(h=u?"HEAD":"GET",Object.entries(r).filter(([T,P])=>P!==void 0).map(([T,P])=>[T,Array.isArray(P)?`{${P.join(",")}}`:`${P}`]).forEach(([T,P])=>{g.searchParams.append(T,P)})):(h="POST",b=r);const j=new Headers(this.headers);return f?j.set("Prefer",m?`count=${m},return=minimal`:"return=minimal"):m&&j.set("Prefer",`count=${m}`),new _i({method:h,url:g,headers:j,schema:this.schemaName,body:b,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class B0{constructor(){}static detectEnvironment(){var n;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const r=globalThis;if(typeof globalThis<"u"&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};const u=typeof global<"u"?global:void 0;if(u&&typeof u.WebSocket<"u")return{type:"native",wsConstructor:u.WebSocket};if(typeof globalThis<"u"&&typeof r.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&r.EdgeRuntime||typeof navigator<"u"&&(!((n=navigator.userAgent)===null||n===void 0)&&n.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const m=o.versions;if(m&&m.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const n=this.detectEnvironment();if(n.wsConstructor)return n.wsConstructor;let r=n.error||"WebSocket not supported in this environment.";throw n.workaround&&(r+=`

Suggested solution: ${n.workaround}`),new Error(r)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const O0="realtime-js/2.117.2",D0="1.0.0",sh="2.0.0",U0=sh,K0=1e4,L0=15e3,I0=1e4,$0=100,ot={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},uh={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Vo={connecting:"connecting",closing:"closing",closed:"closed"};class J0{constructor(n){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=n??[]}encode(n,r){if(n.event===this.BROADCAST_EVENT&&!(n.payload instanceof ArrayBuffer)&&typeof n.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(n));let u=[n.join_ref,n.ref,n.topic,n.event,n.payload];return r(JSON.stringify(u))}_binaryEncodeUserBroadcastPush(n){var r;return this._isArrayBuffer((r=n.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(n):this._encodeJsonUserBroadcastPush(n)}_encodeBinaryUserBroadcastPush(n){var r,u;const o=(u=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&u!==void 0?u:new ArrayBuffer(0);return this._encodeUserBroadcastPush(n,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(n){var r,u;const o=(u=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&u!==void 0?u:{},c=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(n,this.JSON_ENCODING,c)}_encodeUserBroadcastPush(n,r,u){var o,m;const c=new TextEncoder,h=c.encode(n.topic),g=c.encode((o=n.ref)!==null&&o!==void 0?o:""),b=c.encode((m=n.join_ref)!==null&&m!==void 0?m:""),y=c.encode(n.payload.event),f=this.allowedMetadataKeys?this._pick(n.payload,this.allowedMetadataKeys):{},j=c.encode(Object.keys(f).length===0?"":JSON.stringify(f));if(b.length>255)throw new Error(`joinRef length ${b.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`ref length ${g.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`topic length ${h.length} exceeds maximum of 255`);if(y.length>255)throw new Error(`userEvent length ${y.length} exceeds maximum of 255`);if(j.length>255)throw new Error(`metadata length ${j.length} exceeds maximum of 255`);const T=this.USER_BROADCAST_PUSH_META_LENGTH+b.length+g.length+h.length+y.length+j.length,P=new ArrayBuffer(this.HEADER_LENGTH+T),E=new DataView(P),S=new Uint8Array(P);let L=0;E.setUint8(L++,this.KINDS.userBroadcastPush),E.setUint8(L++,b.length),E.setUint8(L++,g.length),E.setUint8(L++,h.length),E.setUint8(L++,y.length),E.setUint8(L++,j.length),E.setUint8(L++,r),S.set(b,L),L+=b.length,S.set(g,L),L+=g.length,S.set(h,L),L+=h.length,S.set(y,L),L+=y.length,S.set(j,L),L+=j.length;var U=new Uint8Array(P.byteLength+u.byteLength);return U.set(new Uint8Array(P),0),U.set(new Uint8Array(u),P.byteLength),U.buffer}decode(n,r){if(this._isArrayBuffer(n)){let u=this._binaryDecode(n);return r(u)}if(typeof n=="string"){const u=JSON.parse(n),[o,m,c,h,g]=u;return r({join_ref:o,ref:m,topic:c,event:h,payload:g})}return r({})}_binaryDecode(n){const r=new DataView(n),u=r.getUint8(0),o=new TextDecoder;if(u===this.KINDS.userBroadcast)return this._decodeUserBroadcast(n,r,o)}_decodeUserBroadcast(n,r,u){const o=r.getUint8(1),m=r.getUint8(2),c=r.getUint8(3),h=r.getUint8(4);let g=this.HEADER_LENGTH+4;const b=u.decode(n.slice(g,g+o));g=g+o;const y=u.decode(n.slice(g,g+m));g=g+m;const f=u.decode(n.slice(g,g+c));g=g+c;const j=n.slice(g,n.byteLength),T=h===this.JSON_ENCODING?JSON.parse(u.decode(j)):j,P={type:this.BROADCAST_EVENT,event:y,payload:T};return c>0&&(P.meta=JSON.parse(f)),{join_ref:null,ref:null,topic:b,event:this.BROADCAST_EVENT,payload:P}}_isArrayBuffer(n){var r;return n instanceof ArrayBuffer||((r=n?.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(n,r){return!n||typeof n!="object"?{}:Object.fromEntries(Object.entries(n).filter(([u])=>r.includes(u)))}}var $a;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})($a||($a={}));const lh=(i,n,r={})=>{var u;const o=(u=r.skipTypes)!==null&&u!==void 0?u:[];return n?Object.keys(n).reduce((m,c)=>(m[c]=G0(c,i,n,o),m),{}):{}},G0=(i,n,r,u)=>{const o=n.find(h=>h.name===i),m=o?.type,c=r[i];return m&&!u.includes(m)?oh(m,c):Fo(c)},oh=(i,n)=>{if(i.charAt(0)==="_"){const r=i.slice(1,i.length);return V0(n,r)}switch(i){case $a.bool:return H0(n);case $a.float4:case $a.float8:case $a.int2:case $a.int4:case $a.int8:case $a.numeric:case $a.oid:return z0(n);case $a.json:case $a.jsonb:return q0(n);case $a.timestamp:return F0(n);case $a.abstime:case $a.date:case $a.daterange:case $a.int4range:case $a.int8range:case $a.money:case $a.reltime:case $a.text:case $a.time:case $a.timestamptz:case $a.timetz:case $a.tsrange:case $a.tstzrange:return Fo(n);default:return Fo(n)}},Fo=i=>i,H0=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},z0=i=>{if(typeof i=="string"){const n=parseFloat(i);if(!Number.isNaN(n))return n}return i},q0=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch{return i}return i},V0=(i,n)=>{if(typeof i!="string")return i;const r=i.length-1,u=i[r];if(i[0]==="{"&&u==="}"){let m;const c=i.slice(1,r);try{m=JSON.parse("["+c+"]")}catch{m=c?c.split(","):[]}return m.map(h=>oh(n,h))}return i},F0=i=>typeof i=="string"?i.replace(" ","T"):i,dh=i=>{const n=new URL(i);return n.protocol=n.protocol.replace(/^ws/i,"http"),n.pathname=n.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),n.pathname===""||n.pathname==="/"?n.pathname="/api/broadcast":n.pathname=n.pathname+"/api/broadcast",n.href};var Pi=i=>typeof i=="function"?i:function(){return i},Y0=typeof self<"u"?self:null,wi=typeof window<"u"?window:null,Sn=Y0||wi||globalThis,X0="2.0.0",Q0=1e4,W0=1e3,Z0=100,Tn={connecting:0,open:1,closing:2,closed:3},we={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Ln={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Yo={longpoll:"longpoll",websocket:"websocket"},aS={complete:4},Xo="base64url.bearer.phx.",ou=class{constructor(i,n,r,u){this.channel=i,this.event=n,this.payload=r||function(){return{}},this.receivedResp=null,this.timeout=u,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(i){this.timeout=i,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(i,n){return this.hasReceived(i)&&n(this.receivedResp.response),this.recHooks.push({status:i,callback:n}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:i,response:n,_ref:r}){this.recHooks.filter(u=>u.status===i).forEach(u=>u.callback(n))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,i=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=i,this.matchReceive(i)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(i){return this.receivedResp&&this.receivedResp.status===i}trigger(i,n){this.channel.trigger(this.refEvent,{status:i,response:n})}},mh=class{constructor(i,n){this.callback=i,this.timerCalc=n,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},eS=class{constructor(i,n,r){this.state=we.closed,this.topic=i,this.params=Pi(n||{}),this.socket=r,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new ou(this,Ln.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new mh(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=we.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(u=>u.send()),this.pushBuffer=[]}),this.joinPush.receive("error",u=>{this.state=we.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,u),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=we.closed,this.socket.remove(this)}),this.onError(u=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,u),this.isJoining()&&this.joinPush.reset(),this.state=we.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new ou(this,Ln.leave,Pi({}),this.timeout).send(),this.state=we.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Ln.reply,(u,o)=>{this.trigger(this.replyEventName(o),u)})}join(i=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=i,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(i=>i.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=we.closed,this.bindings=[]}onClose(i){this.on(Ln.close,i)}onError(i){return this.on(Ln.error,n=>i(n))}on(i,n){let r=this.bindingRef++;return this.bindings.push({event:i,ref:r,callback:n}),r}off(i,n){this.bindings=this.bindings.filter(r=>!(r.event===i&&(typeof n>"u"||n===r.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(i,n,r=this.timeout){if(n=n||{},!this.joinedOnce)throw new Error(`tried to push '${i}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let u=new ou(this,i,function(){return n},r);return this.canPush()?u.send():(u.startTimeout(),this.pushBuffer.push(u)),u}leave(i=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=we.leaving;let n=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Ln.close,"leave")},r=new ou(this,Ln.leave,Pi({}),i);return r.receive("ok",()=>n()).receive("timeout",()=>n()),r.send(),this.canPush()||r.trigger("ok",{}),r}onMessage(i,n,r){return n}filterBindings(i,n,r){return!0}isMember(i,n,r,u){return this.topic!==i?!1:u&&u!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:i,event:n,payload:r,joinRef:u}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(i=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=we.joining,this.joinPush.resend(i))}trigger(i,n,r,u){let o=this.onMessage(i,n,r,u);if(n&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let m=this.bindings.filter(c=>c.event===i&&this.filterBindings(c,n,r));for(let c=0;c<m.length;c++)m[c].callback(o,r,u||this.joinRef())}replyEventName(i){return`chan_reply_${i}`}isClosed(){return this.state===we.closed}isErrored(){return this.state===we.errored}isJoined(){return this.state===we.joined}isJoining(){return this.state===we.joining}isLeaving(){return this.state===we.leaving}},du=class{static request(i,n,r,u,o,m,c){if(Sn.XDomainRequest){let h=new Sn.XDomainRequest;return this.xdomainRequest(h,i,n,u,o,m,c)}else if(Sn.XMLHttpRequest){let h=new Sn.XMLHttpRequest;return this.xhrRequest(h,i,n,r,u,o,m,c)}else{if(Sn.fetch&&Sn.AbortController)return this.fetchRequest(i,n,r,u,o,m,c);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(i,n,r,u,o,m,c){let h={method:i,headers:r,body:u},g=null;return o&&(g=new AbortController,setTimeout(()=>g.abort(),o),h.signal=g.signal),Sn.fetch(n,h).then(b=>b.text()).then(b=>this.parseJSON(b)).then(b=>c&&c(b)).catch(b=>{b.name==="AbortError"&&m?m():c&&c(null)}),g}static xdomainRequest(i,n,r,u,o,m,c){return i.timeout=o,i.open(n,r),i.onload=()=>{let h=this.parseJSON(i.responseText);c&&c(h)},m&&(i.ontimeout=m),i.onprogress=()=>{},i.send(u),i}static xhrRequest(i,n,r,u,o,m,c,h){i.open(n,r,!0),i.timeout=m;for(let[g,b]of Object.entries(u))i.setRequestHeader(g,b);return i.onerror=()=>h&&h(null),i.onreadystatechange=()=>{if(i.readyState===aS.complete&&h){let g=this.parseJSON(i.responseText);h(g)}},c&&(i.ontimeout=c),i.send(o),i}static parseJSON(i){if(!i||i==="")return null;try{return JSON.parse(i)}catch{return console&&console.log("failed to parse JSON response",i),null}}static serialize(i,n){let r=[];for(var u in i){if(!Object.prototype.hasOwnProperty.call(i,u))continue;let o=n?`${n}[${u}]`:u,m=i[u];typeof m=="object"?r.push(this.serialize(m,o)):r.push(encodeURIComponent(o)+"="+encodeURIComponent(m))}return r.join("&")}static appendParams(i,n){if(Object.keys(n).length===0)return i;let r=i.match(/\?/)?"&":"?";return`${i}${r}${this.serialize(n)}`}},nS=i=>{let n="",r=new Uint8Array(i),u=r.byteLength;for(let o=0;o<u;o++)n+=String.fromCharCode(r[o]);return btoa(n)},Mi=class{constructor(i,n){n&&n.length===2&&n[1].startsWith(Xo)&&(this.authToken=atob(n[1].slice(Xo.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(i),this.readyState=Tn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(i){return i.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Yo.websocket),"$1/"+Yo.longpoll)}endpointURL(){return du.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(i,n,r){this.close(i,n,r),this.readyState=Tn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Tn.open||this.readyState===Tn.connecting}poll(){const i={Accept:"application/json"};this.authToken&&(i["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",i,null,()=>this.ontimeout(),n=>{if(n){var{status:r,token:u,messages:o}=n;if(r===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=u}else r=0;switch(r){case 200:o.forEach(m=>{setTimeout(()=>this.onmessage({data:m}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Tn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${r}`)}})}send(i){typeof i!="string"&&(i=nS(i)),this.currentBatch?this.currentBatch.push(i):this.awaitingBatchAck?this.batchBuffer.push(i):(this.currentBatch=[i],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(i,n=0){this.awaitingBatchAck=!0;const r=n+Z0,u=i.slice(n,r);this.ajax("POST",{"Content-Type":"application/x-ndjson"},u.join(`
`),()=>this.onerror("timeout"),o=>{!o||o.status!==200?(this.awaitingBatchAck=!1,this.onerror(o&&o.status),this.closeAndRetry(1011,"internal server error",!1)):r<i.length?this.batchSend(i,r):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(i,n,r){for(let o of this.reqs)o.abort();this.readyState=Tn.closed;let u=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:i,reason:n,wasClean:r});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",u)):this.onclose(u)}ajax(i,n,r,u,o){let m,c=()=>{this.reqs.delete(m),u()};m=du.request(i,this.endpointURL(),n,r,this.timeout,c,h=>{this.reqs.delete(m),this.isActive()&&o(h)}),this.reqs.add(m)}},tS=class Fs{constructor(n,r={}){let u=r.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=n,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(u.state,o=>{let{onJoin:m,onLeave:c,onSync:h}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Fs.syncState(this.state,o,m,c),this.pendingDiffs.forEach(g=>{this.state=Fs.syncDiff(this.state,g,m,c)}),this.pendingDiffs=[],h()}),this.channel.on(u.diff,o=>{let{onJoin:m,onLeave:c,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Fs.syncDiff(this.state,o,m,c),h())})}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}list(n){return Fs.list(this.state,n)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(n,r,u,o){let m=this.toNullProtoObj(this.clone(n));r=this.toNullProtoObj(r);let c=Object.create(null),h=Object.create(null);return this.map(m,(g,b)=>{r[g]||(h[g]=b)}),this.map(r,(g,b)=>{let y=m[g];if(y){let f=b.metas.map(E=>E.phx_ref),j=y.metas.map(E=>E.phx_ref),T=b.metas.filter(E=>j.indexOf(E.phx_ref)<0),P=y.metas.filter(E=>f.indexOf(E.phx_ref)<0);T.length>0&&(c[g]=b,c[g].metas=T),P.length>0&&(h[g]=this.clone(y),h[g].metas=P)}else c[g]=b}),this.syncDiff(m,{joins:c,leaves:h},u,o)}static syncDiff(n,r,u,o){n=this.toNullProtoObj(n);let{joins:m,leaves:c}=this.clone(r);return u||(u=function(){}),o||(o=function(){}),this.map(m,(h,g)=>{let b=n[h];if(n[h]=this.clone(g),b){let y=n[h].metas.map(j=>j.phx_ref),f=b.metas.filter(j=>y.indexOf(j.phx_ref)<0);n[h].metas.unshift(...f)}u(h,b,g)}),this.map(c,(h,g)=>{let b=n[h];if(!b)return;let y=g.metas.map(f=>f.phx_ref);b.metas=b.metas.filter(f=>y.indexOf(f.phx_ref)<0),o(h,b,g),b.metas.length===0&&delete n[h]}),n}static list(n,r){return r||(r=function(u,o){return o}),this.map(n,(u,o)=>r(u,o))}static map(n,r){return Object.getOwnPropertyNames(n).map(u=>r(u,n[u]))}static toNullProtoObj(n){if(Object.getPrototypeOf(n)===null)return n;let r=Object.create(null);return Object.getOwnPropertyNames(n).forEach(u=>{r[u]=n[u]}),r}static clone(n){return JSON.parse(JSON.stringify(n))}},mu={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(i,n){if(i.payload.constructor===ArrayBuffer)return n(this.binaryEncode(i));{let r=[i.join_ref,i.ref,i.topic,i.event,i.payload];return n(JSON.stringify(r))}},decode(i,n){if(i.constructor===ArrayBuffer)return n(this.binaryDecode(i));{let[r,u,o,m,c]=JSON.parse(i);return n({join_ref:r,ref:u,topic:o,event:m,payload:c})}},binaryEncode(i){let{join_ref:n,ref:r,event:u,topic:o,payload:m}=i,c=new TextEncoder,h=c.encode(n),g=c.encode(r),b=c.encode(o),y=c.encode(u);this.assertFieldSize(h.byteLength,"join_ref"),this.assertFieldSize(g.byteLength,"ref"),this.assertFieldSize(b.byteLength,"topic"),this.assertFieldSize(y.byteLength,"event");let f=this.META_LENGTH+h.byteLength+g.byteLength+b.byteLength+y.byteLength,j=new ArrayBuffer(this.HEADER_LENGTH+f),T=new Uint8Array(j),P=new DataView(j),E=0;P.setUint8(E++,this.KINDS.push),P.setUint8(E++,h.byteLength),P.setUint8(E++,g.byteLength),P.setUint8(E++,b.byteLength),P.setUint8(E++,y.byteLength),T.set(h,E),E+=h.byteLength,T.set(g,E),E+=g.byteLength,T.set(b,E),E+=b.byteLength,T.set(y,E),E+=y.byteLength;var S=new Uint8Array(j.byteLength+m.byteLength);return S.set(T,0),S.set(new Uint8Array(m),j.byteLength),S.buffer},assertFieldSize(i,n){if(i>255)throw new Error(`unable to convert ${n} to binary: must be less than or equal to 255 bytes, but is ${i} bytes`)},binaryDecode(i){let n=new DataView(i),r=n.getUint8(0),u=new TextDecoder;switch(r){case this.KINDS.push:return this.decodePush(i,n,u);case this.KINDS.reply:return this.decodeReply(i,n,u);case this.KINDS.broadcast:return this.decodeBroadcast(i,n,u)}},decodePush(i,n,r){let u=n.getUint8(1),o=n.getUint8(2),m=n.getUint8(3),c=this.HEADER_LENGTH+this.META_LENGTH-1,h=r.decode(i.slice(c,c+u));c=c+u;let g=r.decode(i.slice(c,c+o));c=c+o;let b=r.decode(i.slice(c,c+m));c=c+m;let y=i.slice(c,i.byteLength);return{join_ref:h,ref:null,topic:g,event:b,payload:y}},decodeReply(i,n,r){let u=n.getUint8(1),o=n.getUint8(2),m=n.getUint8(3),c=n.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,g=r.decode(i.slice(h,h+u));h=h+u;let b=r.decode(i.slice(h,h+o));h=h+o;let y=r.decode(i.slice(h,h+m));h=h+m;let f=r.decode(i.slice(h,h+c));h=h+c;let j=i.slice(h,i.byteLength),T={status:f,response:j};return{join_ref:g,ref:b,topic:y,event:Ln.reply,payload:T}},decodeBroadcast(i,n,r){let u=n.getUint8(1),o=n.getUint8(2),m=this.HEADER_LENGTH+2,c=r.decode(i.slice(m,m+u));m=m+u;let h=r.decode(i.slice(m,m+o));m=m+o;let g=i.slice(m,i.byteLength);return{join_ref:null,ref:null,topic:c,event:h,payload:g}}},iS=class{constructor(i,n={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=n.timeout||Q0,this.transport=n.transport||Sn.WebSocket||Mi,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=n.longPollFallbackMs,this.fallbackTimer=null;let r=null;try{r=Sn&&Sn.sessionStorage}catch{}this.sessionStore=n.sessionStorage||r,this.establishedConnections=0,this.defaultEncoder=mu.encode.bind(mu),this.defaultDecoder=mu.decode.bind(mu),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=n.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Mi?(this.encode=n.encode||this.defaultEncoder,this.decode=n.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let u=null;wi&&wi.addEventListener&&(wi.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),u=this.connectClock)}),wi.addEventListener("pageshow",o=>{u===this.connectClock&&(u=null,this.connect())}),wi.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=n.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=n.autoSendHeartbeat??!0,this.heartbeatCallback=n.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>n.rejoinAfterMs?n.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>n.reconnectAfterMs?n.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=n.logger||null,!this.logger&&n.debug&&(this.logger=(o,m,c)=>{console.log(`${o}: ${m}`,c)}),this.longpollerTimeout=n.longpollerTimeout||2e4,this.params=Pi(n.params||{}),this.endPoint=`${i}/${Yo.websocket}`,this.vsn=n.vsn||X0,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new mh(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{n.beforeReconnect&&await n.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=n.authToken&&Pi(n.authToken)}getLongPollTransport(){return Mi}replaceTransport(i){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=i}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let i=du.appendParams(du.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return i.charAt(0)!=="/"?i:i.charAt(1)==="/"?`${this.protocol()}:${i}`:`${this.protocol()}://${location.host}${i}`}disconnect(i,n,r){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,i&&i()},n,r)}connect(i){i&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Pi(i)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Mi?this.connectWithFallback(Mi,this.longPollFallbackMs):this.transportConnect())}log(i,n,r){this.logger&&this.logger(i,n,r)}hasLogger(){return this.logger!==null}onOpen(i){let n=this.makeRef();return this.stateChangeCallbacks.open.push([n,i]),n}onClose(i){let n=this.makeRef();return this.stateChangeCallbacks.close.push([n,i]),n}onError(i){let n=this.makeRef();return this.stateChangeCallbacks.error.push([n,i]),n}onMessage(i){let n=this.makeRef();return this.stateChangeCallbacks.message.push([n,i]),n}onHeartbeat(i){this.heartbeatCallback=i}ping(i){if(!this.isConnected())return!1;let n=this.makeRef(),r=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:n});let u=this.onMessage(o=>{o.ref===n&&(this.off([u]),i(Date.now()-r))});return!0}transportName(i){return i===Mi?"LongPoll":i.name}transportConnect(){this.connectClock++,this.closeWasClean=!1;let i;this.authToken&&(i=["phoenix",`${Xo}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),i),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=n=>this.onConnError(n),this.conn.onmessage=n=>this.onConnMessage(n),this.conn.onclose=n=>this.onConnClose(n)}getSession(i){return this.sessionStore&&this.sessionStore.getItem(i)}storeSession(i,n){this.sessionStore&&this.sessionStore.setItem(i,n)}connectWithFallback(i,n=2500){clearTimeout(this.fallbackTimer);let r=!1,u=!0,o,m,c=this.transportName(i),h=g=>{this.log("transport",`falling back to ${c}...`,g),this.off([o,m]),u=!1,this.replaceTransport(i),this.transportConnect()};if(this.getSession(`phx:fallback:${c}`))return h("memorized");this.fallbackTimer=setTimeout(h,n),m=this.onError(g=>{this.log("transport","error",g),u&&!r&&(clearTimeout(this.fallbackTimer),h(g))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(r=!0,!u){let g=this.transportName(i);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${g}`,"true"),this.log("transport",`established ${g} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(h,n),this.ping(g=>{this.log("transport","connected to primary after",g),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(i){this.log("error","error in heartbeat callback",i)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),W0,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(i,n,r){if(!this.conn)return i&&i();const u=this.conn;this.waitForBufferDone(u,()=>{n?u.close(n,r||""):u.close(),this.waitForSocketClosed(u,()=>{this.conn===u&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),i&&i()})})}waitForBufferDone(i,n,r=1){if(r===5||!i.bufferedAmount){n();return}setTimeout(()=>{this.waitForBufferDone(i,n,r+1)},150*r)}waitForSocketClosed(i,n,r=1){if(r===5||i.readyState===Tn.closed){n();return}setTimeout(()=>{this.waitForSocketClosed(i,n,r+1)},150*r)}onConnClose(i){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",i),this.triggerChanError(i),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",i)}onConnError(i){this.hasLogger()&&this.log("transport","error",i);let n=this.transport,r=this.establishedConnections;this.triggerStateCallbacks("error",i,n,r),(n===this.transport||r>0)&&this.triggerChanError(i)}triggerChanError(i){this.channels.forEach(n=>{n.isErrored()||n.isLeaving()||n.isClosed()||n.trigger(Ln.error,i)})}connectionState(){switch(this.conn&&this.conn.readyState){case Tn.connecting:return"connecting";case Tn.open:return"open";case Tn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(i){this.off(i.stateChangeRefs),this.channels=this.channels.filter(n=>n!==i)}off(i){for(let n in this.stateChangeCallbacks)this.stateChangeCallbacks[n]=this.stateChangeCallbacks[n].filter(([r])=>i.indexOf(r)===-1)}channel(i,n={}){let r=new eS(i,n,this);return this.channels.push(r),r}push(i){if(this.hasLogger()){let{topic:n,event:r,payload:u,ref:o,join_ref:m}=i;this.log("push",`${n} ${r} (${m}, ${o})`,u)}this.isConnected()?this.encode(i,n=>this.conn.send(n)):this.sendBuffer.push(()=>this.encode(i,n=>this.conn.send(n)))}makeRef(){let i=this.ref+1;return i===this.ref?this.ref=0:this.ref=i,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(i){this.log("error","error in heartbeat callback",i)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(i){this.log("error","error in heartbeat callback",i)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(i=>i()),this.sendBuffer=[])}onConnMessage(i){this.decode(i.data,n=>{let{topic:r,event:u,payload:o,ref:m,join_ref:c}=n;if(m&&m===this.pendingHeartbeatRef){const h=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",h)}catch(g){this.log("error","error in heartbeat callback",g)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${r} ${u} ${m&&"("+m+")"||""}`.trim(),o);for(let h=0;h<this.channels.length;h++){const g=this.channels[h];g.isMember(r,u,o,c)&&g.trigger(u,o,m,c)}this.triggerStateCallbacks("message",n)})}triggerStateCallbacks(i,...n){try{this.stateChangeCallbacks[i].forEach(([r,u])=>{try{u(...n)}catch(o){this.log("error",`error in ${i} callback`,o)}})}catch(r){this.log("error",`error triggering ${i} callbacks`,r)}}leaveOpenTopic(i){let n=this.channels.find(r=>r.topic===i&&(r.isJoined()||r.isJoining()));n&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${i}"`),n.leave())}};class $r{constructor(n,r){const u=sS(r);this.presence=new tS(n.getChannel(),u),this.presence.onJoin((o,m,c)=>{const h=$r.onJoinPayload(o,m,c);n.getChannel().trigger("presence",h)}),this.presence.onLeave((o,m,c)=>{const h=$r.onLeavePayload(o,m,c);n.getChannel().trigger("presence",h)}),this.presence.onSync(()=>{n.getChannel().trigger("presence",{event:"sync"})})}get state(){return $r.transformState(this.presence.state)}static transformState(n){return n=rS(n),Object.getOwnPropertyNames(n).reduce((r,u)=>{const o=n[u];return r[u]=cu(o),r},{})}static onJoinPayload(n,r,u){const o=ch(r),m=cu(u);return{event:"join",key:n,currentPresences:o,newPresences:m}}static onLeavePayload(n,r,u){const o=ch(r),m=cu(u);return{event:"leave",key:n,currentPresences:o,leftPresences:m}}}function cu(i){return i.metas.map(n=>{const r=Object.getOwnPropertyDescriptors(n),u=Object.defineProperties({},r);return u.presence_ref=u.phx_ref,delete u.phx_ref,delete u.phx_ref_prev,u})}function rS(i){return JSON.parse(JSON.stringify(i))}function sS(i){return i?.events&&{events:i.events}}function ch(i){return i?.metas?cu(i):[]}var kh;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(kh||(kh={}));class uS{get state(){return this.presenceAdapter.state}constructor(n,r){this.channel=n,this.presenceAdapter=new $r(this.channel.channelAdapter,r)}}function lS(i){if(i instanceof Error)return i;if(typeof i=="string")return new Error(i);if(i&&typeof i=="object"){const n=i;if(typeof n.code=="number"){const r=typeof n.reason=="string"&&n.reason?` (${n.reason})`:"";return new Error(`socket closed: ${n.code}${r}`,{cause:i})}return new Error("channel error: transport failure",{cause:i})}return new Error("channel error: connection lost")}class oS{constructor(n,r,u){const o=dS(u);this.channel=n.getSocket().channel(r,o),this.socket=n}get state(){return this.channel.state}set state(n){this.channel.state=n}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(n,r){return this.channel.on(n,r)}off(n,r){this.channel.off(n,r)}subscribe(n){return this.channel.join(n)}unsubscribe(n){return this.channel.leave(n)}teardown(){this.channel.teardown()}onClose(n){this.channel.onClose(n)}onError(n){return this.channel.onError(n)}push(n,r,u){let o;try{o=this.channel.push(n,r,u)}catch{throw new Error(`tried to push '${n}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>$0){const m=this.channel.pushBuffer.shift();m.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${m.event}`,m.payload())}return o}updateJoinPayload(n){const r=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},r),n)}canPush(){return this.socket.isConnected()&&this.state===ot.joined}isJoined(){return this.state===ot.joined}isJoining(){return this.state===ot.joining}isClosed(){return this.state===ot.closed}isLeaving(){return this.state===ot.leaving}updateFilterBindings(n){this.channel.filterBindings=n}updatePayloadTransform(n){this.channel.onMessage=n}getChannel(){return this.channel}}function dS(i){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},i.config)}}const mS=/[,()"\\]/,cS=i=>mS.test(i)||i!==i.trim(),kS=i=>`"${i.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,hh=i=>{const n=i===null?"null":String(i);return cS(n)?kS(n):n},hS=i=>i===null?"null":String(i),gS=(i,n)=>{if(i==="in"){const r=Array.isArray(n)?n:[n];if(r.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(r)).map(o=>hh(o)).join(",")})`}return i==="is"?`is.${hS(n)}`:`${i}.${hh(n)}`};class pS{constructor(){this.filters=[]}add(n,r,u,o=!1){const m=o?"not.":"";return this.filters.push(`${n}=${m}${gS(r,u)}`),this}eq(n,r){return this.add(n,"eq",r)}neq(n,r){return this.add(n,"neq",r)}gt(n,r){return this.add(n,"gt",r)}gte(n,r){return this.add(n,"gte",r)}lt(n,r){return this.add(n,"lt",r)}lte(n,r){return this.add(n,"lte",r)}in(n,r){return this.add(n,"in",r)}like(n,r){return this.add(n,"like",r)}ilike(n,r){return this.add(n,"ilike",r)}match(n,r){return this.add(n,"match",r)}imatch(n,r){return this.add(n,"imatch",r)}is(n,r){return this.add(n,"is",r)}isDistinct(n,r){return this.add(n,"isdistinct",r)}not(n,r,u){return this.add(n,r,u,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var gh;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(gh||(gh={}));var zt;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(zt||(zt={}));var In;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(In||(In={}));class $n{get state(){return this.channelAdapter.state}set state(n){this.channelAdapter.state=n}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(n,r={config:{}},u){var o,m;if(this.topic=n,this.params=r,this.socket=u,this.bindings={},this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.channelAdapter=new oS(this.socket.socketAdapter,n,this.params),this.presence=new uS(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=dh(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((m=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||m===void 0)&&m.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(n,r=this.timeout){var u,o,m,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:h,presence:g,private:b,postgres_changes_options:y}}=this.params,f=(o=(u=this.bindings.postgres_changes)===null||u===void 0?void 0:u.map(S=>S.filter))!==null&&o!==void 0?o:[],j=!!this.bindings[zt.PRESENCE]&&this.bindings[zt.PRESENCE].length>0||((m=this.params.config.presence)===null||m===void 0?void 0:m.enabled)===!0,T={},P=Object.assign({broadcast:h,presence:Object.assign(Object.assign({},g),{enabled:j}),postgres_changes:f,private:b},y?{postgres_changes_options:y}:{});this.socket.accessTokenValue&&(T.access_token=this.socket.accessTokenValue),this._onError(S=>{n?.(In.CHANNEL_ERROR,lS(S))}),this._onClose(()=>n?.(In.CLOSED)),this.updateJoinPayload(Object.assign({config:P},T)),this._updateFilterMessage();const E=y?.wait&&f.length>0?Math.max(r,((c=y.timeout)!==null&&c!==void 0?c:L0)+I0):r;this.channelAdapter.subscribe(E).receive("ok",async({postgres_changes:S})=>{if(this.socket._isManualToken()||this.socket.setAuth(),S===void 0){n?.(In.SUBSCRIBED);return}this._updatePostgresBindings(S,n)}).receive("error",S=>{this.state=ot.errored;const L=Object.values(S).join(", ")||"error";n?.(In.CHANNEL_ERROR,new Error(L,{cause:S}))}).receive("timeout",()=>{n?.(In.TIMED_OUT)})}return this}_updatePostgresBindings(n,r){var u;const o=this.bindings.postgres_changes,m=(u=o?.length)!==null&&u!==void 0?u:0,c=[];for(let h=0;h<m;h++){const g=o[h],{filter:{event:b,schema:y,table:f,filter:j}}=g,T=n&&n[h];if(T&&T.event===b&&$n.isFilterValueEqual(T.schema,y)&&$n.isFilterValueEqual(T.table,f)&&$n.isFilterValueEqual(T.filter,j))c.push(Object.assign(Object.assign({},g),{id:T.id}));else{this.unsubscribe(),this.state=ot.errored,r?.(In.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=c,this.state!=ot.errored&&r&&r(In.SUBSCRIBED)}presenceState(){return this.presence.state}async track(n,r={}){return await this.send({type:"presence",event:"track",payload:n},r)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,r,u){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),m=n===zt.PRESENCE||n===zt.POSTGRES_CHANGES;if(o&&m)throw this.socket.log("channel",`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(n,r,u)}async httpSend(n,r,u={}){var o;if(r==null)return Promise.reject(new Error("Payload is required for httpSend()"));const m=r instanceof ArrayBuffer||ArrayBuffer.isView(r),c={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":m?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(c.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h=new URL(this.broadcastEndpointURL);h.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(n)}`,this.private&&h.searchParams.set("private","true");const g={method:"POST",headers:c,body:m?r:JSON.stringify(r)},b=await this._fetchWithTimeout(h.toString(),g,(o=u.timeout)!==null&&o!==void 0?o:this.timeout);if(b.status===202)return{success:!0};if(b.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=b.statusText;try{const f=await b.json();y=f.error||f.message||y}catch{}return Promise.reject(new Error(y))}async send(n,r={}){var u,o;if(!this.channelAdapter.canPush()&&n.type==="broadcast"){const m="Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.";this.socket.hasLogger()?this.socket.log("channel",m):console.warn(m);const{event:c,payload:h}=n,g={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(g.Authorization=`Bearer ${this.socket.accessTokenValue}`);const b={method:"POST",headers:g,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:h,private:this.private}]})};try{const y=await this._fetchWithTimeout(this.broadcastEndpointURL,b,(u=r.timeout)!==null&&u!==void 0?u:this.timeout);return await((o=y.body)===null||o===void 0?void 0:o.cancel()),y.ok?"ok":"error"}catch(y){return y instanceof Error&&y.name==="AbortError"?"timed out":"error"}}else return new Promise(m=>{var c,h,g;const b=this.channelAdapter.push(n.type,n,r.timeout||this.timeout);n.type==="broadcast"&&!(!((g=(h=(c=this.params)===null||c===void 0?void 0:c.config)===null||h===void 0?void 0:h.broadcast)===null||g===void 0)&&g.ack)&&m("ok"),b.receive("ok",()=>m("ok")),b.receive("error",()=>m("error")),b.receive("timeout",()=>m("timed out"))})}updateJoinPayload(n){this.channelAdapter.updateJoinPayload(n)}async unsubscribe(n=this.timeout){return new Promise(r=>{this.channelAdapter.unsubscribe(n).receive("ok",()=>r("ok")).receive("timeout",()=>r("timed out")).receive("error",()=>r("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(n,r,u){const o=new AbortController,m=setTimeout(()=>o.abort(),u),c=await this.socket.fetch(n,Object.assign(Object.assign({},r),{signal:o.signal}));return clearTimeout(m),c}_on(n,r,u){var o;const m=n.toLocaleLowerCase(),c=r?.filter;if((c instanceof pS||typeof c=="object"&&c!==null&&typeof c.build=="function")&&(r=Object.assign(Object.assign({},r),{filter:c.build()})),m===zt.POSTGRES_CHANGES&&((o=this.bindings[m])===null||o===void 0?void 0:o.find(y=>$n.isSamePostgresFilter(y.filter,r))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,r),this;const h=this.channelAdapter.on(n,u),g={type:m,filter:r,callback:u,ref:h};return this.bindings[m]?this.bindings[m].push(g):this.bindings[m]=[g],this._updateFilterMessage(),this}_onClose(n){this.channelAdapter.onClose(n)}_onError(n){this.channelAdapter.onError(n)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((n,r,u)=>{var o,m,c,h,g,b,y;const f=n.event.toLocaleLowerCase();if(this._notThisChannelEvent(f,u))return!1;const j=(o=this.bindings[f])===null||o===void 0?void 0:o.find(T=>T.ref===n.ref);if(!j)return!0;if(["broadcast","presence","postgres_changes"].includes(f))if("id"in j){const T=j.id,P=(m=j.filter)===null||m===void 0?void 0:m.event;return T&&((c=r.ids)===null||c===void 0?void 0:c.includes(T))&&(P==="*"||P?.toLocaleLowerCase()===((h=r.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const T=(b=(g=j?.filter)===null||g===void 0?void 0:g.event)===null||b===void 0?void 0:b.toLocaleLowerCase();return T==="*"||T===((y=r?.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return j.type.toLocaleLowerCase()===f})}_notThisChannelEvent(n,r){const{close:u,error:o,leave:m,join:c}=uh;return r&&[u,o,m,c].includes(n)&&r!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((n,r,u)=>{if(typeof r=="object"&&"ids"in r){const o=r.data,{schema:m,table:c,commit_timestamp:h,type:g,errors:b}=o;return Object.assign(Object.assign({},{schema:m,table:c,commit_timestamp:h,eventType:g,new:{},old:{},errors:b}),this._getPayloadRecords(o))}return r})}copyBindings(n){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const r in n.bindings)for(const u of n.bindings[r])this._on(u.type,u.filter,u.callback)}static isFilterValueEqual(n,r){return(n??void 0)===(r??void 0)}static isSamePostgresFilter(n,r){var u,o,m,c;const h=(o=(u=n?.select)===null||u===void 0?void 0:u.join())!==null&&o!==void 0?o:void 0,g=(c=(m=r?.select)===null||m===void 0?void 0:m.join())!==null&&c!==void 0?c:void 0;return n?.event===r?.event&&$n.isFilterValueEqual(n?.schema,r?.schema)&&$n.isFilterValueEqual(n?.table,r?.table)&&$n.isFilterValueEqual(n?.filter,r?.filter)&&h===g}_getPayloadRecords(n){const r={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(r.new=lh(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(r.old=lh(n.columns,n.old_record)),r}}class bS{constructor(n,r){this.socket=new iS(n,r)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(n){this.socket.heartbeatCallback=n}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(n,r,u,o=1e4){return new Promise(m=>{setTimeout(()=>m("timeout"),o),this.socket.disconnect(()=>{n(),m("ok")},r,u)})}push(n){this.socket.push(n)}log(n,r,u){this.socket.log(n,r,u)}hasLogger(){return this.socket.hasLogger()}makeRef(){return this.socket.makeRef()}onOpen(n){this.socket.onOpen(n)}onClose(n){this.socket.onClose(n)}onError(n){this.socket.onError(n)}onMessage(n){this.socket.onMessage(n)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Vo.connecting}isDisconnecting(){return this.socket.connectionState()==Vo.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const ph={HEARTBEAT_INTERVAL:25e3},fS=[1e3,2e3,5e3,1e4],yS=1e4;function vS(){const i=new Map;return{get length(){return i.size},clear(){i.clear()},getItem(n){return i.has(n)?i.get(n):null},key(n){var r;return(r=Array.from(i.keys())[n])!==null&&r!==void 0?r:null},removeItem(n){i.delete(n)},setItem(n,r){i.set(n,String(r))}}}function jS(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return vS()}const SS=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class TS{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(n,r){var u;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new J0,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=m=>m?(...c)=>m(...c):(...c)=>fetch(...c),!(!((u=r?.params)===null||u===void 0)&&u.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey;const o=this._initializeOptions(r);this.socketAdapter=new bS(n,o),this.httpEndpoint=dh(n),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(n){const r=n.message;throw new Error(`WebSocket not available: ${r}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(n,r){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},n,r)}getChannels(){return this.channels}async removeChannel(n){const r=await n.unsubscribe();return r==="ok"&&n.teardown(),r}async removeAllChannels(){const n=this.channels.map(async u=>{const o=await u.unsubscribe();return u.teardown(),o}),r=await Promise.all(n);return await this.disconnect(),r}log(n,r,u){this.socketAdapter.log(n,r,u)}hasLogger(){return this.socketAdapter.hasLogger()}connectionState(){return this.socketAdapter.connectionState()||Vo.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(n,r={config:{}}){const u=`realtime:${n}`,o=this.getChannels().find(m=>m.topic===u);if(o)return o;{const m=new $n(`realtime:${n}`,r,this);return this._cancelPendingDisconnect(),this.channels.push(m),m}}push(n){this.socketAdapter.push(n)}async setAuth(n=null){const r=++this._authGeneration,u=this._performAuth(n,r);r===this._authGeneration&&(this._authPromise=u);try{await u}finally{this._authPromise===u&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(n){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(n)}_makeRef(){return this.socketAdapter.makeRef()}_remove(n){this.channels=this.channels.filter(r=>r.topic!==n.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(n,r){let u,o=!1;if(n)u=n,o=!0;else if(this.accessToken)try{u=await this.accessToken()}catch(m){this.log("error","Error fetching access token from callback",m),u=this.accessTokenValue}else u=this.accessTokenValue;r===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:o&&(this._manuallySetToken=!0),this.accessTokenValue!=u&&(this.accessTokenValue=u,this.channels.forEach(m=>{const c={access_token:u,version:O0};m.updateJoinPayload(c),m.joinedOnce&&m.channelAdapter.isJoined()&&m.channelAdapter.push(uh.access_token,{access_token:u})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(n="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${n}`,r)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(r=>{this.log("error","error waiting for auth on connect",r)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(n=>{n.ref&&n.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(n){return(r,u)=>{r!=="disconnected"&&(r=="sent"&&this._setAuthSafely(),n&&n(r,u))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const n=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(n),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(n){let r;if(n)r=n;else{const u=new Blob([SS],{type:"application/javascript"});r=URL.createObjectURL(u)}return r}_initializeOptions(n){var r,u,o,m,c,h,g,b,y,f,j,T;this.worker=(r=n?.worker)!==null&&r!==void 0?r:!1,this.accessToken=(u=n?.accessToken)!==null&&u!==void 0?u:null;const P={};P.timeout=(o=n?.timeout)!==null&&o!==void 0?o:K0,P.heartbeatIntervalMs=(m=n?.heartbeatIntervalMs)!==null&&m!==void 0?m:ph.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(c=n?.disconnectOnEmptyChannelsAfterMs)!==null&&c!==void 0?c:2*((h=n?.heartbeatIntervalMs)!==null&&h!==void 0?h:ph.HEARTBEAT_INTERVAL),P.transport=(g=n?.transport)!==null&&g!==void 0?g:B0.getWebSocketConstructor(),P.params=n?.params,P.logger=n?.logger,P.heartbeatCallback=this._wrapHeartbeatCallback(n?.heartbeatCallback),P.sessionStorage=(b=n?.sessionStorage)!==null&&b!==void 0?b:jS(),P.reconnectAfterMs=(y=n?.reconnectAfterMs)!==null&&y!==void 0?y:(U=>fS[U-1]||yS);let E,S;const L=(f=n?.vsn)!==null&&f!==void 0?f:U0;switch(L){case D0:E=(U,O)=>O(JSON.stringify(U)),S=(U,O)=>O(JSON.parse(U));break;case sh:E=this.serializer.encode.bind(this.serializer),S=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${P.vsn}`)}if(P.vsn=L,P.encode=(j=n?.encode)!==null&&j!==void 0?j:E,P.decode=(T=n?.decode)!==null&&T!==void 0?T:S,P.beforeReconnect=this._reconnectAuth.bind(this),(n?.logLevel||n?.log_level)&&(this.logLevel=n.logLevel||n.log_level,P.params=Object.assign(Object.assign({},P.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=n?.workerUrl,P.autoSendHeartbeat=!this.worker}return P}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Jr=class extends Error{constructor(i,n){super(i),this.name="IcebergError",this.status=n.status,this.icebergType=n.icebergType,this.icebergCode=n.icebergCode,this.details=n.details,this.isCommitStateUnknown=n.icebergType==="CommitStateUnknownException"||[500,502,504].includes(n.status)&&n.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function AS(i,n,r){const u=new URL(n,i);if(r)for(const[o,m]of Object.entries(r))m!==void 0&&u.searchParams.set(o,m);return u.toString()}async function _S(i){return!i||i.type==="none"?{}:i.type==="bearer"?{Authorization:`Bearer ${i.token}`}:i.type==="header"?{[i.name]:i.value}:i.type==="custom"?await i.getHeaders():{}}function PS(i){const n=i.fetchImpl??globalThis.fetch;return{async request({method:r,path:u,query:o,body:m,headers:c}){const h=AS(i.baseUrl,u,o),g=await _S(i.auth),b=await n(h,{method:r,headers:{...m?{"Content-Type":"application/json"}:{},...g,...c},body:m?JSON.stringify(m):void 0}),y=await b.text(),f=(b.headers.get("content-type")||"").includes("application/json"),j=f&&y?JSON.parse(y):y;if(!b.ok){const T=f?j:void 0,P=T?.error;throw new Jr(P?.message??`Request failed with status ${b.status}`,{status:b.status,icebergType:P?.type,icebergCode:P?.code,details:T})}return{status:b.status,headers:b.headers,data:j}}}}function ku(i){return i.join("")}var wS=class{constructor(i,n=""){this.client=i,this.prefix=n}async listNamespaces(i){const n=i?{parent:ku(i.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:n})).data.namespaces.map(u=>({namespace:u}))}async createNamespace(i,n){const r={namespace:i.namespace,properties:n?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(i){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ku(i.namespace)}`})}async loadNamespaceMetadata(i){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ku(i.namespace)}`})).data.properties}}async namespaceExists(i){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ku(i.namespace)}`}),!0}catch(n){if(n instanceof Jr&&n.status===404)return!1;throw n}}async createNamespaceIfNotExists(i,n){try{return await this.createNamespace(i,n)}catch(r){if(r instanceof Jr&&r.status===409)return;throw r}}};function Ei(i){return i.join("")}var MS=class{constructor(i,n="",r){this.client=i,this.prefix=n,this.accessDelegation=r}async listTables(i){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables`})).data.identifiers}async createTable(i,n){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables`,body:n,headers:r})).data.metadata}async updateTable(i,n){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables/${i.name}`,body:n});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(i,n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables/${i.name}`,query:{purgeRequested:String(n?.purge??!1)}})}async loadTable(i){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables/${i.name}`,headers:n})).data.metadata}async tableExists(i){const n={};this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ei(i.namespace)}/tables/${i.name}`,headers:n}),!0}catch(r){if(r instanceof Jr&&r.status===404)return!1;throw r}}async createTableIfNotExists(i,n){try{return await this.createTable(i,n)}catch(r){if(r instanceof Jr&&r.status===409)return await this.loadTable({namespace:i.namespace,name:n.name});throw r}}},ES=class{constructor(i){let n="v1";i.catalogName&&(n+=`/${i.catalogName}`);const r=i.baseUrl.endsWith("/")?i.baseUrl:`${i.baseUrl}/`;this.client=PS({baseUrl:r,auth:i.auth,fetchImpl:i.fetch}),this.accessDelegation=i.accessDelegation?.join(","),this.namespaceOps=new wS(this.client,n),this.tableOps=new MS(this.client,n,this.accessDelegation)}async listNamespaces(i){return this.namespaceOps.listNamespaces(i)}async createNamespace(i,n){return this.namespaceOps.createNamespace(i,n)}async dropNamespace(i){await this.namespaceOps.dropNamespace(i)}async loadNamespaceMetadata(i){return this.namespaceOps.loadNamespaceMetadata(i)}async listTables(i){return this.tableOps.listTables(i)}async createTable(i,n){return this.tableOps.createTable(i,n)}async updateTable(i,n){return this.tableOps.updateTable(i,n)}async dropTable(i,n){await this.tableOps.dropTable(i,n)}async loadTable(i){return this.tableOps.loadTable(i)}async namespaceExists(i){return this.namespaceOps.namespaceExists(i)}async tableExists(i){return this.tableOps.tableExists(i)}async createNamespaceIfNotExists(i,n){return this.namespaceOps.createNamespaceIfNotExists(i,n)}async createTableIfNotExists(i,n){return this.tableOps.createTableIfNotExists(i,n)}};function Gr(i){"@babel/helpers - typeof";return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gr(i)}function RS(i,n){if(Gr(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var u=r.call(i,n);if(Gr(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function NS(i){var n=RS(i,"string");return Gr(n)=="symbol"?n:n+""}function xS(i,n,r){return(n=NS(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function bh(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);n&&(u=u.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),r.push.apply(r,u)}return r}function la(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?bh(Object(r),!0).forEach(function(u){xS(i,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):bh(Object(r)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(r,u))})}return i}var hu=class extends Error{constructor(i,n="storage",r,u){super(i),this.__isStorageError=!0,this.namespace=n,this.name=n==="vectors"?"StorageVectorsError":"StorageError",this.status=r,this.statusCode=u}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function gu(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}var Qo=class extends hu{constructor(i,n,r,u="storage",o){super(i,u,n,r),this.name=u==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=n,this.statusCode=r,this.code=o}toJSON(){return la(la({},super.toJSON()),{},{code:this.code})}},fh=class extends hu{constructor(i,n,r="storage"){super(i,r),this.name=r==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=n}};function pu(i,n,r){const u=la({},i),o=n.toLowerCase();for(const m of Object.keys(u))m.toLowerCase()===o&&delete u[m];return u[o]=r,u}function CS(i){const n={};for(const[r,u]of Object.entries(i))n[r.toLowerCase()]=u;return n}const BS=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),OS=i=>{if(typeof i!="object"||i===null)return!1;const n=Object.getPrototypeOf(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},Wo=i=>{if(Array.isArray(i))return i.map(r=>Wo(r));if(typeof i=="function"||i!==Object(i))return i;const n={};return Object.entries(i).forEach(([r,u])=>{const o=r.replace(/([-_][a-z])/gi,m=>m.toUpperCase().replace(/[-_]/g,""));n[o]=Wo(u)}),n},DS=i=>!i||typeof i!="string"||i.length===0||i.length>100||i.trim()!==i||i.includes("/")||i.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(i),Zo=i=>i.split("/").map(encodeURIComponent).join("/"),yh=i=>{if(typeof i=="object"&&i!==null){const n=i;if(typeof n.msg=="string")return n.msg;if(typeof n.message=="string")return n.message;if(typeof n.error_description=="string")return n.error_description;if(typeof n.error=="string")return n.error;if(typeof n.error=="object"&&n.error!==null){const r=n.error;if(typeof r.message=="string")return r.message}}return JSON.stringify(i)},US=async(i,n,r,u)=>{if(i!==null&&typeof i=="object"&&"json"in i&&typeof i.json=="function"){const o=i;let m=parseInt(String(o.status),10);Number.isFinite(m)||(m=500),o.json().then(c=>{const h=c?.statusCode||c?.code||m+"";n(new Qo(yh(c),m,h,u,c?.code))}).catch(()=>{const c=m+"";n(new Qo(o.statusText||`HTTP ${m} error`,m,c,u))})}else n(new fh(yh(i),i,u))},KS=(i,n,r,u)=>{const o={method:i,headers:n?.headers||{}};if(i==="GET"||i==="HEAD"||!u)return la(la({},o),r);if(OS(u)){var m;const c=n?.headers||{};let h;for(const[g,b]of Object.entries(c))g.toLowerCase()==="content-type"&&(h=b);o.headers=pu(c,"Content-Type",(m=h)!==null&&m!==void 0?m:"application/json"),o.body=JSON.stringify(u)}else o.body=u;return n?.duplex&&(o.duplex=n.duplex),la(la({},o),r)};async function Hr(i,n,r,u,o,m,c){return new Promise((h,g)=>{i(r,KS(n,u,o,m)).then(b=>{if(!b.ok)throw b;if(u?.noResolveJson)return b;if(c==="vectors"){const y=b.headers.get("content-type");if(b.headers.get("content-length")==="0"||b.status===204)return{};if(!y||!y.includes("application/json"))return{}}return b.json()}).then(b=>h(b)).catch(b=>US(b,g,u,c))})}function vh(i="storage"){return{get:async(n,r,u,o)=>Hr(n,"GET",r,u,o,void 0,i),post:async(n,r,u,o,m)=>Hr(n,"POST",r,o,m,u,i),put:async(n,r,u,o,m)=>Hr(n,"PUT",r,o,m,u,i),head:async(n,r,u,o)=>Hr(n,"HEAD",r,la(la({},u),{},{noResolveJson:!0}),o,void 0,i),remove:async(n,r,u,o,m)=>Hr(n,"DELETE",r,o,m,u,i)}}const LS=vh("storage"),{get:Ri,post:mn,put:bu,head:IS,remove:Ni}=LS,Oe=vh("vectors");var xi=class{constructor(i,n={},r,u="storage"){this.shouldThrowOnError=!1,this.url=i,this.headers=CS(n),this.fetch=BS(r),this.namespace=u}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,n){return this.headers=pu(this.headers,i,n),this}async handleOperation(i){var n=this;try{return{data:await i(),error:null}}catch(r){if(n.shouldThrowOnError)throw r;if(gu(r))return{data:null,error:r};throw r}}};let jh;jh=Symbol.toStringTag;var $S=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n,this[jh]="StreamDownloadBuilder",this.promise=null}then(i,n){return this.getPromise().then(i,n)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:(await i.downloadFn()).body,error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(gu(n))return{data:null,error:n};throw n}}};let Sh;Sh=Symbol.toStringTag;var JS=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n,this[Sh]="BlobDownloadBuilder",this.promise=null}asStream(){return new $S(this.downloadFn,this.shouldThrowOnError)}then(i,n){return this.getPromise().then(i,n)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:await(await i.downloadFn()).blob(),error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(gu(n))return{data:null,error:n};throw n}}};const ad={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Th={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var GS=class extends xi{constructor(i,n={},r,u){super(i,n,u,"storage"),this.bucketId=r}async uploadOrUpdate(i,n,r,u){var o=this;return o.handleOperation(async()=>{let m;const c=la(la({},Th),u);let h=la(la({},o.headers),i==="POST"&&{"x-upsert":String(c.upsert)});const g=c.metadata;if(typeof Blob<"u"&&r instanceof Blob?(m=new FormData,m.append("cacheControl",c.cacheControl),g&&m.append("metadata",o.encodeMetadata(g)),m.append("",r)):typeof FormData<"u"&&r instanceof FormData?(m=r,m.has("cacheControl")||m.append("cacheControl",c.cacheControl),g&&!m.has("metadata")&&m.append("metadata",o.encodeMetadata(g))):(m=r,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,g&&(h["x-metadata"]=o.toBase64(o.encodeMetadata(g))),(typeof ReadableStream<"u"&&m instanceof ReadableStream||m&&typeof m=="object"&&"pipe"in m&&typeof m.pipe=="function")&&!c.duplex&&(c.duplex="half")),u?.headers)for(const[j,T]of Object.entries(u.headers))h=pu(h,j,T);const b=o._removeEmptyFolders(n),y=o._getFinalPath(b),f=await(i=="PUT"?bu:mn)(o.fetch,`${o.url}/object/${y}`,m,la({headers:h},c?.duplex?{duplex:c.duplex}:{}));return{path:b,id:f.Id,fullPath:f.Key}})}async upload(i,n,r){return this.uploadOrUpdate("POST",i,n,r)}async uploadToSignedUrl(i,n,r,u){var o=this;const m=o._removeEmptyFolders(i),c=o._getFinalPath(m),h=new URL(o.url+`/object/upload/sign/${c}`);return h.searchParams.set("token",n),o.handleOperation(async()=>{let g;const b=la(la({},Th),u);let y=la(la({},o.headers),{"x-upsert":String(b.upsert)});const f=b.metadata;if(typeof Blob<"u"&&r instanceof Blob?(g=new FormData,g.append("cacheControl",b.cacheControl),f&&g.append("metadata",o.encodeMetadata(f)),g.append("",r)):typeof FormData<"u"&&r instanceof FormData?(g=r,g.has("cacheControl")||g.append("cacheControl",b.cacheControl),f&&!g.has("metadata")&&g.append("metadata",o.encodeMetadata(f))):(g=r,y["cache-control"]=`max-age=${b.cacheControl}`,y["content-type"]=b.contentType,f&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(f))),(typeof ReadableStream<"u"&&g instanceof ReadableStream||g&&typeof g=="object"&&"pipe"in g&&typeof g.pipe=="function")&&!b.duplex&&(b.duplex="half")),u?.headers)for(const[j,T]of Object.entries(u.headers))y=pu(y,j,T);return{path:m,fullPath:(await bu(o.fetch,h.toString(),g,la({headers:y},b?.duplex?{duplex:b.duplex}:{}))).Key}})}async createSignedUploadUrl(i,n){var r=this;return r.handleOperation(async()=>{let u=r._getFinalPath(i);const o=la({},r.headers);n?.upsert&&(o["x-upsert"]="true");const m=await mn(r.fetch,`${r.url}/object/upload/sign/${u}`,{},{headers:o}),c=new URL(r.url+m.url),h=c.searchParams.get("token");if(!h)throw new hu("No token returned by API");return{signedUrl:c.toString(),path:i,token:h}})}async update(i,n,r){return this.uploadOrUpdate("PUT",i,n,r)}async move(i,n,r){var u=this;return u.handleOperation(async()=>await mn(u.fetch,`${u.url}/object/move`,{bucketId:u.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r?.destinationBucket,sourceVersionId:r?.sourceVersionId},{headers:u.headers}))}async copy(i,n,r){var u=this;return u.handleOperation(async()=>({path:(await mn(u.fetch,`${u.url}/object/copy`,{bucketId:u.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r?.destinationBucket,sourceVersionId:r?.sourceVersionId},{headers:u.headers})).Key}))}async createSignedUrl(i,n,r){var u=this;return u.handleOperation(async()=>{let o=u._getFinalPath(i);const m=typeof r?.transform=="object"&&r.transform!==null&&Object.keys(r.transform).length>0;let c=await mn(u.fetch,`${u.url}/object/sign/${o}`,la(la({expiresIn:n},m?{transform:r.transform}:{}),r?.versionId!=null?{versionId:r.versionId}:{}),{headers:u.headers});const h=new URLSearchParams;r?.download&&h.set("download",r.download===!0?"":r.download),r?.cacheNonce!=null&&h.set("cacheNonce",String(r.cacheNonce));const g=h.toString();return{signedUrl:encodeURI(`${u.url}${c.signedURL}${g?`&${g}`:""}`)}})}async createSignedUrls(i,n,r){var u=this;return u.handleOperation(async()=>{const o=await mn(u.fetch,`${u.url}/object/sign/${u.bucketId}`,{expiresIn:n,paths:i},{headers:u.headers}),m=new URLSearchParams;r?.download&&m.set("download",r.download===!0?"":r.download),r?.cacheNonce!=null&&m.set("cacheNonce",String(r.cacheNonce));const c=m.toString();return o.map(h=>la(la({},h),{},{signedUrl:h.signedURL?encodeURI(`${u.url}${h.signedURL}${c?`&${c}`:""}`):null}))})}download(i,n,r){const u=typeof n?.transform=="object"&&n.transform!==null&&Object.keys(n.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;n?.transform&&this.applyTransformOptsToQuery(o,n.transform),n?.cacheNonce!=null&&o.set("cacheNonce",String(n.cacheNonce)),n?.versionId!=null&&o.set("versionId",String(n.versionId));const m=o.toString(),c=this._getFinalPath(i),h=()=>Ri(this.fetch,`${this.url}/${u}/${c}${m?`?${m}`:""}`,{headers:this.headers,noResolveJson:!0},r);return new JS(h,this.shouldThrowOnError)}async info(i,n){var r=this;const u=r._getFinalPath(i),o=new URLSearchParams;n?.versionId!=null&&o.set("versionId",String(n.versionId));const m=o.toString();return r.handleOperation(async()=>Wo(await Ri(r.fetch,`${r.url}/object/info/${u}${m?`?${m}`:""}`,{headers:r.headers})))}async exists(i){var n=this;const r=n._getFinalPath(i);try{return await IS(n.fetch,`${n.url}/object/${r}`,{headers:n.headers}),{data:!0,error:null}}catch(o){if(n.shouldThrowOnError)throw o;if(gu(o)){var u;const m=o instanceof Qo?o.status:o instanceof fh?(u=o.originalError)===null||u===void 0?void 0:u.status:void 0;if(m!==void 0&&[400,404].includes(m))return{data:!1,error:o}}throw o}}getPublicUrl(i,n){const r=this._getFinalPath(i),u=new URLSearchParams;n?.download&&u.set("download",n.download===!0?"":n.download),n?.transform&&this.applyTransformOptsToQuery(u,n.transform),n?.cacheNonce!=null&&u.set("cacheNonce",String(n.cacheNonce)),n?.versionId!=null&&u.set("versionId",String(n.versionId));const o=u.toString(),m=typeof n?.transform=="object"&&n.transform!==null&&Object.keys(n.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${m}/public/${r}`)+(o?`?${o}`:"")}}}async remove(i){var n=this;return n.handleOperation(async()=>await Ni(n.fetch,`${n.url}/object/${n.bucketId}`,{prefixes:i},{headers:n.headers}))}async purgeCache(i,n,r){var u=this;return u.handleOperation(async()=>{const o=Zo(u._getFinalPath(i)),m=new URLSearchParams;n?.transformations&&m.set("transformations","true");const c=m.toString();return await Ni(u.fetch,`${u.url}/cdn/${o}${c?`?${c}`:""}`,{},{headers:u.headers},r)})}async list(i,n,r){var u=this;return u.handleOperation(async()=>{const o=n?.sortBy?la(la({},ad.sortBy),n.sortBy):ad.sortBy,m=la(la(la({},ad),n),{},{sortBy:o,prefix:i||""});return await mn(u.fetch,`${u.url}/object/list/${u.bucketId}`,m,{headers:u.headers},r)})}async listV2(i,n){var r=this;return r.handleOperation(async()=>{const u=la({},i);return await mn(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,u,{headers:r.headers},n)})}encodeMetadata(i){return JSON.stringify(i)}toBase64(i){return typeof Buffer<"u"?Buffer.from(i).toString("base64"):btoa(i)}_getFinalPath(i){return`${this.bucketId}/${i.replace(/^\/+/,"")}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(i,n){return n.width&&i.set("width",n.width.toString()),n.height&&i.set("height",n.height.toString()),n.resize&&i.set("resize",n.resize),n.format&&i.set("format",n.format),n.quality&&i.set("quality",n.quality.toString()),i}};const zr={"X-Client-Info":"storage-js/2.117.2"};var HS=class extends xi{constructor(i,n={},r,u){const o=new URL(i);u?.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const m=o.href.replace(/\/$/,""),c=la(la({},zr),n);super(m,c,r,"storage")}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=n.listBucketOptionsToQueryString(i);return await Ri(n.fetch,`${n.url}/bucket${r}`,{headers:n.headers})})}async getBucket(i){var n=this;return n.handleOperation(async()=>await Ri(n.fetch,`${n.url}/bucket/${i}`,{headers:n.headers}))}async createBucket(i,n={public:!1}){var r=this;return r.handleOperation(async()=>await mn(r.fetch,`${r.url}/bucket`,{id:i,name:i,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes,versioning_status:n.versioningStatus},{headers:r.headers}))}async updateBucket(i,n){var r=this;return r.handleOperation(async()=>await bu(r.fetch,`${r.url}/bucket/${i}`,{id:i,name:i,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes,versioning_status:n.versioningStatus},{headers:r.headers}))}async emptyBucket(i){var n=this;return n.handleOperation(async()=>await mn(n.fetch,`${n.url}/bucket/${i}/empty`,{},{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Ni(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}async getBucketLifecycle(i){var n=this;return n.handleOperation(async()=>await Ri(n.fetch,n.bucketLifecycleUrl(i),{headers:n.headers}))}async updateBucketLifecycle(i,n){var r=this;return r.handleOperation(async()=>await bu(r.fetch,r.bucketLifecycleUrl(i),n,{headers:r.headers}))}async deleteBucketLifecycle(i){var n=this;return n.handleOperation(async()=>await Ni(n.fetch,n.bucketLifecycleUrl(i),{},{headers:n.headers}))}async purgeBucketCache(i,n,r){var u=this;return u.handleOperation(async()=>{const o=new URLSearchParams;n?.transformations&&o.set("transformations","true");const m=o.toString();return await Ni(u.fetch,`${u.url}/cdn/${Zo(i)}${m?`?${m}`:""}`,{},{headers:u.headers},r)})}bucketLifecycleUrl(i){return`${this.url}/bucket/${Zo(i)}/lifecycle`}listBucketOptionsToQueryString(i){const n={};return i&&("limit"in i&&(n.limit=String(i.limit)),"offset"in i&&(n.offset=String(i.offset)),i.search&&(n.search=i.search),i.sortColumn&&(n.sortColumn=i.sortColumn),i.sortOrder&&(n.sortOrder=i.sortOrder)),Object.keys(n).length>0?"?"+new URLSearchParams(n).toString():""}},zS=class extends xi{constructor(i,n={},r){const u=i.replace(/\/$/,""),o=la(la({},zr),n);super(u,o,r,"storage")}async createBucket(i){var n=this;return n.handleOperation(async()=>await mn(n.fetch,`${n.url}/bucket`,{name:i},{headers:n.headers}))}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=new URLSearchParams;i?.limit!==void 0&&r.set("limit",i.limit.toString()),i?.offset!==void 0&&r.set("offset",i.offset.toString()),i?.sortColumn&&r.set("sortColumn",i.sortColumn),i?.sortOrder&&r.set("sortOrder",i.sortOrder),i?.search&&r.set("search",i.search);const u=r.toString(),o=u?`${n.url}/bucket?${u}`:`${n.url}/bucket`;return await Ri(n.fetch,o,{headers:n.headers})})}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Ni(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}from(i){var n=this;if(!DS(i))throw new hu("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new ES({baseUrl:this.url,catalogName:i,auth:{type:"custom",getHeaders:async()=>n.headers},fetch:this.fetch}),u=this.shouldThrowOnError;return new Proxy(r,{get(o,m){const c=o[m];return typeof c!="function"?c:async(...h)=>{try{return{data:await c.apply(o,h),error:null}}catch(g){if(u)throw g;return{data:null,error:g}}}}})}},qS=class extends xi{constructor(i,n={},r){const u=i.replace(/\/$/,""),o=la(la({},zr),{},{"Content-Type":"application/json"},n);super(u,o,r,"vectors")}async createIndex(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/CreateIndex`,i,{headers:n.headers})||{})}async getIndex(i,n){var r=this;return r.handleOperation(async()=>await Oe.post(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers}))}async listIndexes(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/ListIndexes`,i,{headers:n.headers}))}async deleteIndex(i,n){var r=this;return r.handleOperation(async()=>await Oe.post(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers})||{})}},VS=class extends xi{constructor(i,n={},r){const u=i.replace(/\/$/,""),o=la(la({},zr),{},{"Content-Type":"application/json"},n);super(u,o,r,"vectors")}async putVectors(i){var n=this;if(i.vectors.length<1||i.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/PutVectors`,i,{headers:n.headers})||{})}async getVectors(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/GetVectors`,i,{headers:n.headers}))}async listVectors(i){var n=this;if(i.segmentCount!==void 0){if(i.segmentCount<1||i.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(i.segmentIndex!==void 0&&(i.segmentIndex<0||i.segmentIndex>=i.segmentCount))throw new Error(`segmentIndex must be between 0 and ${i.segmentCount-1}`)}return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/ListVectors`,i,{headers:n.headers}))}async queryVectors(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/QueryVectors`,i,{headers:n.headers}))}async deleteVectors(i){var n=this;if(i.keys.length<1||i.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/DeleteVectors`,i,{headers:n.headers})||{})}},FS=class extends xi{constructor(i,n={},r){const u=i.replace(/\/$/,""),o=la(la({},zr),{},{"Content-Type":"application/json"},n);super(u,o,r,"vectors")}async createBucket(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/CreateVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}async getBucket(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/GetVectorBucket`,{vectorBucketName:i},{headers:n.headers}))}async listBuckets(i={}){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/ListVectorBuckets`,i,{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Oe.post(n.fetch,`${n.url}/DeleteVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}},YS=class extends FS{constructor(i,n={}){super(i,n.headers||{},n.fetch)}from(i){return new XS(this.url,this.headers,i,this.fetch)}async createBucket(i){var n=()=>super.createBucket,r=this;return n().call(r,i)}async getBucket(i){var n=()=>super.getBucket,r=this;return n().call(r,i)}async listBuckets(i={}){var n=()=>super.listBuckets,r=this;return n().call(r,i)}async deleteBucket(i){var n=()=>super.deleteBucket,r=this;return n().call(r,i)}},XS=class extends qS{constructor(i,n,r,u){super(i,n,u),this.vectorBucketName=r}async createIndex(i){var n=()=>super.createIndex,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(i={}){var n=()=>super.listIndexes,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(i){var n=()=>super.getIndex,r=this;return n().call(r,r.vectorBucketName,i)}async deleteIndex(i){var n=()=>super.deleteIndex,r=this;return n().call(r,r.vectorBucketName,i)}index(i){return new QS(this.url,this.headers,this.vectorBucketName,i,this.fetch)}},QS=class extends VS{constructor(i,n,r,u,o){super(i,n,o),this.vectorBucketName=r,this.indexName=u}async putVectors(i){var n=()=>super.putVectors,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(i){var n=()=>super.getVectors,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(i={}){var n=()=>super.listVectors,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(i){var n=()=>super.queryVectors,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(i){var n=()=>super.deleteVectors,r=this;return n().call(r,la(la({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},WS=class extends HS{constructor(i,n={},r,u){super(i,n,r,u)}from(i){return new GS(this.url,this.headers,i,this.fetch)}get vectors(){return new YS(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new zS(this.url+"/iceberg",this.headers,this.fetch)}};const Ah="2.117.2",Jn=30*1e3,qr=3,ed=qr*Jn,ZS=2*Jn,aT="http://localhost:9999",eT="supabase.auth.token",nT={"X-Client-Info":`gotrue-js/${Ah}`},nd="X-Supabase-Api-Version",_h={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},tT=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,qt="sb_flow_id",iT=5,rT=600*1e3;class Vr extends Error{constructor(n,r,u){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=u}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function F(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class sT extends Vr{constructor(n,r,u){super(n,r,u),this.name="AuthApiError",this.status=r,this.code=u}}function Ph(i){return F(i)&&i.name==="AuthApiError"}class cn extends Vr{constructor(n,r){super(n),this.name="AuthUnknownError",this.originalError=r}}class An extends Vr{constructor(n,r,u,o){super(n,u,o),this.name=r,this.status=u}}class re extends An{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function fu(i){return F(i)&&i.name==="AuthSessionMissingError"}class Ci extends An{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class yu extends An{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class vu extends An{constructor(n,r=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function uT(i){return F(i)&&i.name==="AuthImplicitGrantRedirectError"}class wh extends An{constructor(n,r=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class lT extends An{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class ju extends An{constructor(n,r){super(n,"AuthRetryableFetchError",r,void 0)}}function Su(i){return F(i)&&i.name==="AuthRetryableFetchError"}class Mh extends An{constructor(n="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(n,"AuthRefreshDiscardedError",409,void 0)}}function Eh(i){return F(i)&&i.name==="AuthRefreshDiscardedError"}class Rh extends An{constructor(n,r,u){super(n,"AuthWeakPasswordError",r,"weak_password"),this.reasons=u}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Tu extends An{constructor(n){super(n,"AuthInvalidJwtError",400,"invalid_jwt")}}const Au="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Nh=` 	
\r=`.split(""),oT=(()=>{const i=new Array(128);for(let n=0;n<i.length;n+=1)i[n]=-1;for(let n=0;n<Nh.length;n+=1)i[Nh[n].charCodeAt(0)]=-2;for(let n=0;n<Au.length;n+=1)i[Au[n].charCodeAt(0)]=n;return i})();function xh(i,n,r){if(i!==null)for(n.queue=n.queue<<8|i,n.queuedBits+=8;n.queuedBits>=6;){const u=n.queue>>n.queuedBits-6&63;r(Au[u]),n.queuedBits-=6}else if(n.queuedBits>0)for(n.queue=n.queue<<6-n.queuedBits,n.queuedBits=6;n.queuedBits>=6;){const u=n.queue>>n.queuedBits-6&63;r(Au[u]),n.queuedBits-=6}}function Ch(i,n,r){const u=oT[i];if(u>-1)for(n.queue=n.queue<<6|u,n.queuedBits+=6;n.queuedBits>=8;)r(n.queue>>n.queuedBits-8&255),n.queuedBits-=8;else{if(u===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function Bh(i){const n=[],r=c=>{n.push(String.fromCodePoint(c))},u={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},m=c=>{cT(c,u,r)};for(let c=0;c<i.length;c+=1)Ch(i.charCodeAt(c),o,m);return n.join("")}function dT(i,n){if(i<=127){n(i);return}else if(i<=2047){n(192|i>>6),n(128|i&63);return}else if(i<=65535){n(224|i>>12),n(128|i>>6&63),n(128|i&63);return}else if(i<=1114111){n(240|i>>18),n(128|i>>12&63),n(128|i>>6&63),n(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function mT(i,n){for(let r=0;r<i.length;r+=1){let u=i.charCodeAt(r);if(u>55295&&u<=56319){const o=(u-55296)*1024&65535;u=(i.charCodeAt(r+1)-56320&65535|o)+65536,r+=1}dT(u,n)}}function cT(i,n,r){if(n.utf8seq===0){if(i<=127){r(i);return}for(let u=1;u<6;u+=1)if((i>>7-u&1)===0){n.utf8seq=u;break}if(n.utf8seq===2)n.codepoint=i&31;else if(n.utf8seq===3)n.codepoint=i&15;else if(n.utf8seq===4)n.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|i&63,n.utf8seq-=1,n.utf8seq===0&&r(n.codepoint)}}function Bi(i){const n=[],r={queue:0,queuedBits:0},u=o=>{n.push(o)};for(let o=0;o<i.length;o+=1)Ch(i.charCodeAt(o),r,u);return new Uint8Array(n)}function kT(i){const n=[];return mT(i,r=>n.push(r)),new Uint8Array(n)}function Vt(i){const n=[],r={queue:0,queuedBits:0},u=o=>{n.push(o)};return i.forEach(o=>xh(o,r,u)),xh(null,r,u),n.join("")}function Oh(i){return Math.round(Date.now()/1e3)+i}function hT(){return Symbol("auth-callback")}const ce=()=>typeof window<"u"&&typeof document<"u",Ft={tested:!1,writable:!1},Dh=()=>{if(!ce())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ft.tested)return Ft.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),Ft.tested=!0,Ft.writable=!0}catch{Ft.tested=!0,Ft.writable=!1}return Ft.writable};function Uh(i){const n={},r=new URL(i);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((o,m)=>{n[m]=o})}catch{}return r.searchParams.forEach((u,o)=>{n[o]=u}),n}const Kh=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),gT=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",Gn=async(i,n,r)=>{await i.setItem(n,JSON.stringify(r))},ve=async(i,n)=>{const r=await i.getItem(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}},Me=async(i,n)=>{await i.removeItem(n)};class _u{constructor(){this.promise=new _u.promiseConstructor((n,r)=>{this.resolve=n,this.reject=r})}}_u.promiseConstructor=Promise;function Pu(i){const n=i.split(".");if(n.length!==3)throw new Tu("Invalid JWT structure");for(let u=0;u<n.length;u++)if(!tT.test(n[u]))throw new Tu("JWT not in base64url format");return{header:JSON.parse(Bh(n[0])),payload:JSON.parse(Bh(n[1])),signature:Bi(n[2]),raw:{header:n[0],payload:n[1]}}}async function pT(i){return await new Promise(n=>{setTimeout(()=>n(null),i)})}function bT(i,n){return new Promise((u,o)=>{(async()=>{for(let m=0;m<1/0;m++)try{const c=await i(m);if(!n(m,null,c)){u(c);return}}catch(c){if(!n(m,c)){o(c);return}}})()})}function Lh(i){return("0"+i.toString(16)).substr(-2)}function fT(){const n=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",u=r.length;let o="";for(let m=0;m<56;m++)o+=r.charAt(Math.floor(Math.random()*u));return o}return crypto.getRandomValues(n),Array.from(n,Lh).join("")}async function yT(i){const r=new TextEncoder().encode(i),u=await crypto.subtle.digest("SHA-256",r),o=new Uint8Array(u);return Array.from(o).map(m=>String.fromCharCode(m)).join("")}async function vT(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const r=await yT(i);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const jT=/^[a-zA-Z0-9_-]{8,64}$/;function wu(i){return typeof i=="string"&&jT.test(i)?i:null}function ST(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const n=new Uint8Array(16);return crypto.getRandomValues(n),Array.from(n,Lh).join("")}let i="";for(let n=0;n<32;n++)i+=Math.floor(Math.random()*16).toString(16);return i}const Oi=(i,n)=>`${i}-flow-${n}-code-verifier`,Fr=i=>`${i}-flows-code-verifier`;async function td(i,n){const r=await ve(i,Fr(n));return Array.isArray(r)?r.filter(u=>wu(u)!==null):[]}async function TT(i,n,r,u,o){await Gn(i,Oi(n,r),u);const m=(await td(i,n)).filter(c=>c!==r);for(m.push(r);m.length>iT;){const c=m.shift();await Me(i,Oi(n,c)),o?.(c)}await Gn(i,Fr(n),m),await Gn(i,`${n}-code-verifier`,u)}async function AT(i,n,r){if(r){const o=await ve(i,Oi(n,r));return{verifier:typeof o=="string"?o:null,flowId:r}}const u=await ve(i,`${n}-code-verifier`);return{verifier:typeof u=="string"?u:null,flowId:null}}async function kn(i,n,r){const u=`${n}-code-verifier`;if(!r){await Me(i,u);return}const o=Oi(n,r),m=await ve(i,o);await Me(i,o);const c=await td(i,n),h=c.filter(g=>g!==r);h.length!==c.length&&(h.length>0?await Gn(i,Fr(n),h):await Me(i,Fr(n))),m!=null&&m===await ve(i,u)&&await Me(i,u)}async function _T(i,n){const r=await td(i,n);for(const u of r)await Me(i,Oi(n,u));await Me(i,Fr(n)),await Me(i,`${n}-code-verifier`)}function PT(i,n){const r=i.indexOf("#");let u=r===-1?i:i.slice(0,r);const o=r===-1?"":i.slice(r),m=u.indexOf("?");if(m!==-1){const h=u.slice(0,m),g=u.slice(m+1).split("&").filter(b=>b!==""&&b!==qt&&!b.startsWith(`${qt}=`));u=g.length>0?`${h}?${g.join("&")}`:h}const c=u.includes("?")?"&":"?";return`${u}${c}${qt}=${encodeURIComponent(n)}${o}`}async function wT(i,n,r=!1,u){const o=fT();let m=o;r&&(m+="/recovery");const c=ST();await TT(i,n,c,m,u);const h=await vT(o);return[h,o===h?"plain":"s256",c]}const MT=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function ET(i){const n=i.headers.get(nd);if(!n||!n.match(MT))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}function RT(i){if(!i)throw new Error("Missing exp claim");const n=Math.floor(Date.now()/1e3);if(i<=n)throw new Error("JWT has expired")}function NT(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const xT=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Hn(i){if(!xT.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Yr(i){if(!i.recoveryCodes)throw new Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).")}function id(){const i={};return new Proxy(i,{get:(n,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const u=r.toString();if(u==="Symbol(Symbol.toPrimitive)"||u==="Symbol(Symbol.toStringTag)"||u==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function CT(i,n){return new Proxy(i,{get:(r,u,o)=>{if(u==="__isInsecureUserWarningProxy")return!0;if(typeof u=="symbol"){const m=u.toString();if(m==="Symbol(Symbol.toPrimitive)"||m==="Symbol(Symbol.toStringTag)"||m==="Symbol(util.inspect.custom)"||m==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,u,o)}return!n.value&&typeof u=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),n.value=!0),Reflect.get(r,u,o)}})}function Ih(i){return JSON.parse(JSON.stringify(i))}const Yt=i=>{if(typeof i=="object"&&i!==null){const n=i;if(typeof n.msg=="string")return n.msg;if(typeof n.message=="string")return n.message;if(typeof n.error_description=="string")return n.error_description;if(typeof n.error=="string")return n.error}return JSON.stringify(i)},$h=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Jh(i){var n;if(!gT(i))throw new ju(Yt(i),0);let r;try{r=await i.json()}catch(m){throw $h.includes(i.status)?new ju(i.statusText||`HTTP ${i.status}`,i.status):new cn(Yt(m),m)}if($h.includes(i.status))throw new ju(Yt(r),i.status);let u;const o=ET(i);if(o&&o.getTime()>=_h["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?u=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(u=r.error_code),u){if(u==="weak_password")throw new Rh(Yt(r),i.status,((n=r.weak_password)===null||n===void 0?void 0:n.reasons)||[]);if(u==="session_not_found")throw new re}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((m,c)=>m&&typeof c=="string",!0))throw new Rh(Yt(r),i.status,r.weak_password.reasons);throw new sT(Yt(r),i.status||500,u)}const BT=(i,n,r,u)=>{const o={method:i,headers:n?.headers||{}};return i==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n?.headers),o.body=JSON.stringify(u),Object.assign(Object.assign({},o),r))};async function Z(i,n,r,u){var o;const m=Object.assign({},u?.headers);m[nd]||(m[nd]=_h["2024-01-01"].name),u?.jwt&&(m.Authorization=`Bearer ${u.jwt}`);const c=(o=u?.query)!==null&&o!==void 0?o:{};u?.redirectTo&&(c.redirect_to=u.redirectTo);const h=Object.keys(c).length?"?"+new URLSearchParams(c).toString():"",g=await OT(i,n,r+h,{headers:m,noResolveJson:u?.noResolveJson},{},u?.body);return u?.xform?u?.xform(g):{data:Object.assign({},g),error:null}}async function OT(i,n,r,u,o,m){const c=BT(n,u,o,m);let h;try{h=await i(r,Object.assign({},c))}catch(g){throw new ju(Yt(g),0)}if(h.ok||await Jh(h),u?.noResolveJson)return h;try{return await h.json()}catch(g){await Jh(g)}}function Qe(i){var n;let r=null;KT(i)&&(r=Object.assign({},i),i.expires_at||(r.expires_at=Oh(i.expires_in)));const u=(n=i.user)!==null&&n!==void 0?n:typeof i?.id=="string"?i:null;return{data:{session:r,user:u},error:null}}function Gh(i){const n=Qe(i);return!n.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((r,u)=>r&&typeof u=="string",!0)&&(n.data.weak_password=i.weak_password),n}function dt(i){var n;return{data:{user:(n=i.user)!==null&&n!==void 0?n:i},error:null}}function DT(i){return{data:i,error:null}}function UT(i){const{action_link:n,email_otp:r,hashed_token:u,redirect_to:o,verification_type:m}=i,c=lu(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:n,email_otp:r,hashed_token:u,redirect_to:o,verification_type:m},g=Object.assign({},c);return{data:{properties:h,user:g},error:null}}function Hh(i){return i}function KT(i){return!!i.access_token&&!!i.refresh_token&&!!i.expires_in}const rd=["global","local","others"];class LT{constructor({url:n="",headers:r={},fetch:u,experimental:o}){this.url=n,this.headers=r,this.fetch=Kh(u),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(n,r=rd[0]){if(rd.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${rd.join(", ")}`);try{return await Z(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(u){if(F(u))return{data:null,error:u};throw u}}async inviteUserByEmail(n,r={}){try{return await Z(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:dt})}catch(u){if(F(u))return{data:{user:null},error:u};throw u}}async generateLink(n){try{const{options:r}=n,u=lu(n,["options"]),o=Object.assign(Object.assign({},u),r);return"newEmail"in u&&(o.new_email=u?.newEmail,delete o.newEmail),await Z(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:UT,redirectTo:r?.redirectTo})}catch(r){if(F(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(n){try{return await Z(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:dt})}catch(r){if(F(r))return{data:{user:null},error:r};throw r}}async listUsers(n){var r,u,o,m,c,h,g;try{const b={nextPage:null,lastPage:0,total:0},y=await Z(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(u=(r=n?.page)===null||r===void 0?void 0:r.toString())!==null&&u!==void 0?u:"",per_page:(m=(o=n?.perPage)===null||o===void 0?void 0:o.toString())!==null&&m!==void 0?m:""},xform:Hh});if(y.error)throw y.error;const f=await y.json(),j=(c=y.headers.get("x-total-count"))!==null&&c!==void 0?c:0,T=(g=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&g!==void 0?g:[];return T.length>0&&(T.forEach(P=>{const E=parseInt(P.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(P.split(";")[1].split("=")[1]);b[`${S}Page`]=E}),b.total=parseInt(j)),{data:Object.assign(Object.assign({},f),b),error:null}}catch(b){if(F(b))return{data:{users:[]},error:b};throw b}}async getUserById(n){Hn(n);try{return await Z(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:dt})}catch(r){if(F(r))return{data:{user:null},error:r};throw r}}async updateUserById(n,r){Hn(n);try{return await Z(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:r,headers:this.headers,xform:dt})}catch(u){if(F(u))return{data:{user:null},error:u};throw u}}async deleteUser(n,r=!1){Hn(n);try{return await Z(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:r},xform:dt})}catch(u){if(F(u))return{data:{user:null},error:u};throw u}}async _listFactors(n){Hn(n.userId);try{const{data:r,error:u}=await Z(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:r,error:u}}catch(r){if(F(r))return{data:null,error:r};throw r}}async _deleteFactor(n){Hn(n.userId),Hn(n.id);try{return{data:await Z(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}async _listOAuthClients(n){var r,u,o,m,c,h,g;try{const b={nextPage:null,lastPage:0,total:0},y=await Z(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(u=(r=n?.page)===null||r===void 0?void 0:r.toString())!==null&&u!==void 0?u:"",per_page:(m=(o=n?.perPage)===null||o===void 0?void 0:o.toString())!==null&&m!==void 0?m:""},xform:Hh});if(y.error)throw y.error;const f=await y.json(),j=(c=y.headers.get("x-total-count"))!==null&&c!==void 0?c:0,T=(g=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&g!==void 0?g:[];return T.length>0&&(T.forEach(P=>{const E=parseInt(P.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(P.split(";")[1].split("=")[1]);b[`${S}Page`]=E}),b.total=parseInt(j)),{data:Object.assign(Object.assign({},f),b),error:null}}catch(b){if(F(b))return{data:{clients:[]},error:b};throw b}}async _createOAuthClient(n){try{return await Z(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:n,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _getOAuthClient(n){try{return await Z(this.fetch,"GET",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _updateOAuthClient(n,r){try{return await Z(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${n}`,{body:r,headers:this.headers,xform:u=>({data:u,error:null})})}catch(u){if(F(u))return{data:null,error:u};throw u}}async _deleteOAuthClient(n){try{return await Z(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(n){try{return await Z(this.fetch,"POST",`${this.url}/admin/oauth/clients/${n}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _listCustomProviders(n){try{const r={};return n?.type&&(r.type=n.type),await Z(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:r,xform:u=>{var o;return{data:{providers:(o=u?.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(r){if(F(r))return{data:{providers:[]},error:r};throw r}}async _createCustomProvider(n){try{return await Z(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:n,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _getCustomProvider(n){try{return await Z(this.fetch,"GET",`${this.url}/admin/custom-providers/${n}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _updateCustomProvider(n,r){try{return await Z(this.fetch,"PUT",`${this.url}/admin/custom-providers/${n}`,{body:r,headers:this.headers,xform:u=>({data:u,error:null})})}catch(u){if(F(u))return{data:null,error:u};throw u}}async _deleteCustomProvider(n){try{return await Z(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}async _adminListPasskeys(n){Hn(n.userId);try{return await Z(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/passkeys`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _adminDeletePasskey(n){Hn(n.userId),Hn(n.passkeyId);try{return await Z(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/passkeys/${n.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}}function zh(i={}){return{getItem:n=>i[n]||null,setItem:(n,r)=>{i[n]=r},removeItem:n=>{delete i[n]}}}globalThis&&Dh()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class IT extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}function $T(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function qh(i){if(!/^0x[a-fA-F0-9]{40}$/.test(i))throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);return i.toLowerCase()}function JT(i){return parseInt(i,16)}function GT(i){const n=new TextEncoder().encode(i);return"0x"+Array.from(n,u=>u.toString(16).padStart(2,"0")).join("")}function HT(i){var n;const{chainId:r,domain:u,expirationTime:o,issuedAt:m=new Date,nonce:c,notBefore:h,requestId:g,resources:b,scheme:y,uri:f,version:j}=i;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(c&&c.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${c}`);if(!f)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(j!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${j}`);if(!((n=i.statement)===null||n===void 0)&&n.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`)}const T=qh(i.address),P=y?`${y}://${u}`:u,E=i.statement?`${i.statement}
`:"",S=`${P} wants you to sign in with your Ethereum account:
${T}

${E}`;let L=`URI: ${f}
Version: ${j}
Chain ID: ${r}${c?`
Nonce: ${c}`:""}
Issued At: ${m.toISOString()}`;if(o&&(L+=`
Expiration Time: ${o.toISOString()}`),h&&(L+=`
Not Before: ${h.toISOString()}`),g&&(L+=`
Request ID: ${g}`),b){let U=`
Resources:`;for(const O of b){if(!O||typeof O!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${O}`);U+=`
- ${O}`}L+=U}return`${S}
${L}`}class Za extends Error{constructor({message:n,code:r,cause:u,name:o}){var m;super(n,{cause:u}),this.__isWebAuthnError=!0,this.name=(m=o??(u instanceof Error?u.name:void 0))!==null&&m!==void 0?m:"Unknown Error",this.code=r}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Mu extends Za{constructor(n,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:n}),this.name="WebAuthnUnknownError",this.originalError=r}}function zT({error:i,options:n}){var r,u,o;const{publicKey:m}=n;if(!m)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Za({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else if(i.name==="ConstraintError"){if(((r=m.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new Za({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:i});if(n.mediation==="conditional"&&((u=m.authenticatorSelection)===null||u===void 0?void 0:u.userVerification)==="required")return new Za({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:i});if(((o=m.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new Za({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:i})}else{if(i.name==="InvalidStateError")return new Za({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:i});if(i.name==="NotAllowedError")return new Za({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="NotSupportedError")return m.pubKeyCredParams.filter(h=>h.type==="public-key").length===0?new Za({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:i}):new Za({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:i});if(i.name==="SecurityError"){const c=window.location.hostname;if(Qh(c)){if(m.rp.id!==c)return new Za({message:`The RP ID "${m.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new Za({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="TypeError"){if(m.user.id.byteLength<1||m.user.id.byteLength>64)return new Za({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:i})}else if(i.name==="UnknownError")return new Za({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new Za({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}function qT({error:i,options:n}){const{publicKey:r}=n;if(!r)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Za({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else{if(i.name==="NotAllowedError")return new Za({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="SecurityError"){const u=window.location.hostname;if(Qh(u)){if(r.rpId!==u)return new Za({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new Za({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="UnknownError")return new Za({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new Za({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}class VT{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const n=new AbortController;return this.controller=n,n.signal}cancelCeremony(){if(this.controller){const n=new Error("Manually cancelling existing WebAuthn API call");n.name="AbortError",this.controller.abort(n),this.controller=void 0}}}const sd=new VT;function Vh(i){if(!i)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(i);const{challenge:n,user:r,excludeCredentials:u}=i,o=lu(i,["challenge","user","excludeCredentials"]),m=Bi(n).buffer,c=Object.assign(Object.assign({},r),{id:Bi(r.id).buffer}),h=Object.assign(Object.assign({},o),{challenge:m,user:c});if(u&&u.length>0){h.excludeCredentials=new Array(u.length);for(let g=0;g<u.length;g++){const b=u[g];h.excludeCredentials[g]=Object.assign(Object.assign({},b),{id:Bi(b.id).buffer,type:b.type||"public-key",transports:b.transports})}}return h}function Fh(i){if(!i)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(i);const{challenge:n,allowCredentials:r}=i,u=lu(i,["challenge","allowCredentials"]),o=Bi(n).buffer,m=Object.assign(Object.assign({},u),{challenge:o});if(r&&r.length>0){m.allowCredentials=new Array(r.length);for(let c=0;c<r.length;c++){const h=r[c];m.allowCredentials[c]=Object.assign(Object.assign({},h),{id:Bi(h.id).buffer,type:h.type||"public-key",transports:h.transports})}}return m}function Yh(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i;return{id:i.id,rawId:i.id,response:{attestationObject:Vt(new Uint8Array(i.response.attestationObject)),clientDataJSON:Vt(new Uint8Array(i.response.clientDataJSON))},type:"public-key",clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function Xh(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i,u=i.getClientExtensionResults(),o=i.response;return{id:i.id,rawId:i.id,response:{authenticatorData:Vt(new Uint8Array(o.authenticatorData)),clientDataJSON:Vt(new Uint8Array(o.clientDataJSON)),signature:Vt(new Uint8Array(o.signature)),userHandle:o.userHandle?Vt(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:u,authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function Qh(i){return i==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i)}function Eu(){var i,n;return!!(ce()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((i=navigator?.credentials)===null||i===void 0?void 0:i.create)=="function"&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.get)=="function")}async function Wh(i){try{const n=await navigator.credentials.create(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Mu("Browser returned unexpected credential type",n)}:{data:null,error:new Mu("Empty credential response",n)}}catch(n){return{data:null,error:zT({error:n,options:i})}}}async function Zh(i){try{const n=await navigator.credentials.get(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Mu("Browser returned unexpected credential type",n)}:{data:null,error:new Mu("Empty credential response",n)}}catch(n){return{data:null,error:qT({error:n,options:i})}}}const FT={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},YT={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Ru(...i){const n=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),r=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),u={};for(const o of i)if(o)for(const m in o){const c=o[m];if(c!==void 0)if(Array.isArray(c))u[m]=c;else if(r(c))u[m]=c;else if(n(c)){const h=u[m];n(h)?u[m]=Ru(h,c):u[m]=Ru(c)}else u[m]=c}return u}function XT(i,n){return Ru(FT,i,n||{})}function QT(i,n){return Ru(YT,i,n||{})}class WT{constructor(n){this.client=n,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(n){return this.client.mfa.enroll(Object.assign(Object.assign({},n),{factorType:"webauthn"}))}async _challenge({factorId:n,webauthn:r,friendlyName:u,signal:o},m){var c;try{const{data:h,error:g}=await this.client.mfa.challenge({factorId:n,webauthn:r});if(!h)return{data:null,error:g};const b=o??sd.createNewAbortSignal();if(h.webauthn.type==="create"){const{user:y}=h.webauthn.credential_options.publicKey;if(!y.name){const f=u;if(f)y.name=`${y.id}:${f}`;else{const T=(await this.client.getUser()).data.user,P=((c=T?.user_metadata)===null||c===void 0?void 0:c.name)||T?.email||T?.id||"User";y.name=`${y.id}:${P}`}}y.displayName||(y.displayName=y.name)}switch(h.webauthn.type){case"create":{const y=XT(h.webauthn.credential_options.publicKey,m?.create),{data:f,error:j}=await Wh({publicKey:y,signal:b});return f?{data:{factorId:n,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:f}},error:null}:{data:null,error:j}}case"request":{const y=QT(h.webauthn.credential_options.publicKey,m?.request),{data:f,error:j}=await Zh(Object.assign(Object.assign({},h.webauthn.credential_options),{publicKey:y,signal:b}));return f?{data:{factorId:n,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:f}},error:null}:{data:null,error:j}}}}catch(h){return F(h)?{data:null,error:h}:{data:null,error:new cn("Unexpected error in challenge",h)}}}async _verify({challengeId:n,factorId:r,webauthn:u}){return this.client.mfa.verify({factorId:r,challengeId:n,webauthn:u})}async _authenticate({factorId:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:u=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},m){if(!r)return{data:null,error:new Vr("rpId is required for WebAuthn authentication")};try{if(!Eu())return{data:null,error:new cn("Browser does not support WebAuthn",null)};const{data:c,error:h}=await this.challenge({factorId:n,webauthn:{rpId:r,rpOrigins:u},signal:o},{request:m});if(!c)return{data:null,error:h};const{webauthn:g}=c;return this._verify({factorId:n,challengeId:c.challengeId,webauthn:{type:g.type,rpId:r,rpOrigins:u,credential_response:g.credential_response}})}catch(c){return F(c)?{data:null,error:c}:{data:null,error:new cn("Unexpected error in authenticate",c)}}}async _register({friendlyName:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:u=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},m){if(!r)return{data:null,error:new Vr("rpId is required for WebAuthn registration")};try{if(!Eu())return{data:null,error:new cn("Browser does not support WebAuthn",null)};const{data:c,error:h}=await this._enroll({friendlyName:n});if(!c)return await this.client.mfa.listFactors().then(y=>{var f;return(f=y.data)===null||f===void 0?void 0:f.all.find(j=>j.factor_type==="webauthn"&&j.friendly_name===n&&j.status==="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y?.id}):void 0),{data:null,error:h};const{data:g,error:b}=await this._challenge({factorId:c.id,friendlyName:c.friendly_name,webauthn:{rpId:r,rpOrigins:u},signal:o},{create:m});return g?this._verify({factorId:c.id,challengeId:g.challengeId,webauthn:{rpId:r,rpOrigins:u,type:g.webauthn.type,credential_response:g.webauthn.credential_response}}):{data:null,error:b}}catch(c){return F(c)?{data:null,error:c}:{data:null,error:new cn("Unexpected error in register",c)}}}}$T();const ZT={url:aT,storageKey:eT,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:nT,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Di={};let ag=!1;class Xr{get jwks(){var n,r;return(r=(n=Di[this.storageKey])===null||n===void 0?void 0:n.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(n){Di[this.storageKey]=Object.assign(Object.assign({},Di[this.storageKey]),{jwks:n})}get jwks_cached_at(){var n,r;return(r=(n=Di[this.storageKey])===null||n===void 0?void 0:n.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(n){Di[this.storageKey]=Object.assign(Object.assign({},Di[this.storageKey]),{cachedAt:n})}constructor(n){var r,u,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const m=Object.assign(Object.assign({},ZT),n);if(this.storageKey=m.storageKey,this.instanceID=(r=Xr.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,Xr.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!m.debug,typeof m.debug=="function"&&(this.logger=m.debug),this.instanceID>0&&ce()){const c=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(c),this.logDebugMessages&&console.trace(c)}if(this.persistSession=m.persistSession,this.autoRefreshToken=m.autoRefreshToken,this.experimental=(u=m.experimental)!==null&&u!==void 0?u:{},this.admin=new LT({url:m.url,headers:m.headers,fetch:m.fetch,experimental:this.experimental}),this.url=m.url,this.headers=m.headers,this.fetch=Kh(m.fetch),this.detectSessionInUrl=m.detectSessionInUrl,this.flowType=m.flowType,this.hasCustomAuthorizationHeader=m.hasCustomAuthorizationHeader,this.throwOnError=m.throwOnError,this.lockAcquireTimeout=m.lockAcquireTimeout,m.lock!=null&&(this.lock=m.lock,ag||(ag=!0,console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new WT(this),recoveryCodes:{getStatus:this._getRecoveryCodesStatus.bind(this),generate:this._generateRecoveryCodes.bind(this),verify:this._verifyRecoveryCode.bind(this),regenerate:this._regenerateRecoveryCodes.bind(this),unenroll:this._unenrollRecoveryCodes.bind(this)}},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(m.storage?this.storage=m.storage:Dh()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=zh(this.memoryStorage)),m.userStorage&&(this.userStorage=m.userStorage)):(this.memoryStorage={},this.storage=zh(this.memoryStorage)),ce()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),(c.data.event==="TOKEN_REFRESHED"||c.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(c.data.event,c.data.session,!1)}catch(h){this._debug("#broadcastChannel","error",h)}})}m.skipAutoInitialize||this.initialize().catch(c=>{this._debug("#initialize()","error",c)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(n){if(this.throwOnError&&n&&n.error)throw n.error;return n}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Ah}) ${new Date().toISOString()}`}_debug(...n){return this.logDebugMessages&&this.logger(this._logPrefix(),...n),this}async initialize(){var n;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const r=await this.initializePromise,u=(n=this._pendingInitNotifications)!==null&&n!==void 0?n:[];this._pendingInitNotifications=null;for(const o of u)await this._notifyAllSubscribers(o.event,o.session,o.broadcast);return r}async _initialize(){var n;try{let r={},u="none";if(ce()&&(r=Uh(window.location.href),this._isImplicitGrantCallback(r)?u="implicit":await this._isPKCECallback(r)&&(u="pkce")),ce()&&this.detectSessionInUrl&&u!=="none"){const{data:o,error:m}=await this._getSessionFromURL(r,u);if(m){if(this._debug("#_initialize()","error detecting session from URL",m),uT(m)){const g=(n=m.details)===null||n===void 0?void 0:n.code;if(g==="identity_already_exists"||g==="identity_not_found"||g==="single_identity_not_deletable")return{error:m}}return{error:m}}const{session:c,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",c,"redirect type",h),await this._saveSession(c),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",c):await this._notifyAllSubscribers("SIGNED_IN",c)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return F(r)?this._returnResult({error:r}):this._returnResult({error:new cn("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var r,u,o;try{const m=await Z(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(u=(r=n?.options)===null||r===void 0?void 0:r.data)!==null&&u!==void 0?u:{},gotrue_meta_security:{captcha_token:(o=n?.options)===null||o===void 0?void 0:o.captchaToken}},xform:Qe}),{data:c,error:h}=m;if(h||!c)return this._returnResult({data:{user:null,session:null},error:h});const g=c.session,b=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:b,session:g},error:null})}catch(m){if(F(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async signUp(n){var r,u,o;let m=null;try{let c;if("email"in n){const{email:f,password:j,options:T}=n;let P=null,E=null;this.flowType==="pkce"&&([P,E,m]=await this._getCodeChallengeAndMethod()),c=await Z(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(T?.emailRedirectTo,m),body:{email:f,password:j,data:(r=T?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:T?.captchaToken},code_challenge:P,code_challenge_method:E},xform:Qe})}else if("phone"in n){const{phone:f,password:j,options:T}=n;c=await Z(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:f,password:j,data:(u=T?.data)!==null&&u!==void 0?u:{},channel:(o=T?.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:T?.captchaToken}},xform:Qe})}else throw new yu("You must provide either an email or phone number and a password");const{data:h,error:g}=c;if(g||!h)return await kn(this.storage,this.storageKey,m),this._returnResult({data:{user:null,session:null},error:g});const b=h.session,y=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",b)),this._returnResult({data:{user:y,session:b},error:null})}catch(c){if(await kn(this.storage,this.storageKey,m),F(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(n){try{let r;if("email"in n){const{email:m,password:c,options:h}=n;r=await Z(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:m,password:c,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Gh})}else if("phone"in n){const{phone:m,password:c,options:h}=n;r=await Z(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:m,password:c,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Gh})}else throw new yu("You must provide either an email or phone number and a password");const{data:u,error:o}=r;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!u||!u.session||!u.user){const m=new Ci;return this._returnResult({data:{user:null,session:null},error:m})}return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",u.session)),this._returnResult({data:Object.assign({user:u.user,session:u.session},u.weak_password?{weakPassword:u.weak_password}:null),error:o})}catch(r){if(F(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(n){var r,u,o,m;return await this._handleProviderSignIn(n.provider,{redirectTo:(r=n.options)===null||r===void 0?void 0:r.redirectTo,scopes:(u=n.options)===null||u===void 0?void 0:u.scopes,queryParams:(o=n.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(m=n.options)===null||m===void 0?void 0:m.skipBrowserRedirect})}async exchangeCodeForSession(n,r){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(n,r)):this._exchangeCodeForSession(n,r)}async signInWithWeb3(n){const{chain:r}=n;switch(r){case"ethereum":return await this.signInWithEthereum(n);case"solana":return await this.signInWithSolana(n);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(n){var r,u,o,m,c,h,g,b,y,f,j;let T,P;if("message"in n)T=n.message,P=n.signature;else{const{chain:E,wallet:S,statement:L,options:U}=n;let O;if(ce())if(typeof S=="object")O=S;else{const ya=window;if("ethereum"in ya&&typeof ya.ethereum=="object"&&"request"in ya.ethereum&&typeof ya.ethereum.request=="function")O=ya.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof S!="object"||!U?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");O=S}const z=new URL((r=U?.url)!==null&&r!==void 0?r:window.location.href),ea=await O.request({method:"eth_requestAccounts"}).then(ya=>ya).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!ea||ea.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const W=qh(ea[0]);let q=(u=U?.signInWithEthereum)===null||u===void 0?void 0:u.chainId;if(!q){const ya=await O.request({method:"eth_chainId"});q=JT(ya)}const ia={domain:z.host,address:W,statement:L,uri:z.href,version:"1",chainId:q,nonce:(o=U?.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(c=(m=U?.signInWithEthereum)===null||m===void 0?void 0:m.issuedAt)!==null&&c!==void 0?c:new Date,expirationTime:(h=U?.signInWithEthereum)===null||h===void 0?void 0:h.expirationTime,notBefore:(g=U?.signInWithEthereum)===null||g===void 0?void 0:g.notBefore,requestId:(b=U?.signInWithEthereum)===null||b===void 0?void 0:b.requestId,resources:(y=U?.signInWithEthereum)===null||y===void 0?void 0:y.resources};T=HT(ia),P=await O.request({method:"personal_sign",params:[GT(T),W]})}try{const{data:E,error:S}=await Z(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:T,signature:P},!((f=n.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(j=n.options)===null||j===void 0?void 0:j.captchaToken}}:null),xform:Qe});if(S)throw S;if(!E||!E.session||!E.user){const L=new Ci;return this._returnResult({data:{user:null,session:null},error:L})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:S})}catch(E){if(F(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async signInWithSolana(n){var r,u,o,m,c,h,g,b,y,f,j,T;let P,E;if("message"in n)P=n.message,E=n.signature;else{const{chain:S,wallet:L,statement:U,options:O}=n;let z;if(ce())if(typeof L=="object")z=L;else{const W=window;if("solana"in W&&typeof W.solana=="object"&&("signIn"in W.solana&&typeof W.solana.signIn=="function"||"signMessage"in W.solana&&typeof W.solana.signMessage=="function"))z=W.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof L!="object"||!O?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");z=L}const ea=new URL((r=O?.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in z&&z.signIn){const W=await z.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},O?.signInWithSolana),{version:"1",domain:ea.host,uri:ea.href}),U?{statement:U}:null));let q;if(Array.isArray(W)&&W[0]&&typeof W[0]=="object")q=W[0];else if(W&&typeof W=="object"&&"signedMessage"in W&&"signature"in W)q=W;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in q&&"signature"in q&&(typeof q.signedMessage=="string"||q.signedMessage instanceof Uint8Array)&&q.signature instanceof Uint8Array)P=typeof q.signedMessage=="string"?q.signedMessage:new TextDecoder().decode(q.signedMessage),E=q.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in z)||typeof z.signMessage!="function"||!("publicKey"in z)||typeof z!="object"||!z.publicKey||!("toBase58"in z.publicKey)||typeof z.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");P=[`${ea.host} wants you to sign in with your Solana account:`,z.publicKey.toBase58(),...U?["",U,""]:[""],"Version: 1",`URI: ${ea.href}`,`Issued At: ${(o=(u=O?.signInWithSolana)===null||u===void 0?void 0:u.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((m=O?.signInWithSolana)===null||m===void 0)&&m.notBefore?[`Not Before: ${O.signInWithSolana.notBefore}`]:[],...!((c=O?.signInWithSolana)===null||c===void 0)&&c.expirationTime?[`Expiration Time: ${O.signInWithSolana.expirationTime}`]:[],...!((h=O?.signInWithSolana)===null||h===void 0)&&h.chainId?[`Chain ID: ${O.signInWithSolana.chainId}`]:[],...!((g=O?.signInWithSolana)===null||g===void 0)&&g.nonce?[`Nonce: ${O.signInWithSolana.nonce}`]:[],...!((b=O?.signInWithSolana)===null||b===void 0)&&b.requestId?[`Request ID: ${O.signInWithSolana.requestId}`]:[],...!((f=(y=O?.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||f===void 0)&&f.length?["Resources",...O.signInWithSolana.resources.map(q=>`- ${q}`)]:[]].join(`
`);const W=await z.signMessage(new TextEncoder().encode(P),"utf8");if(!W||!(W instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");E=W}}try{const{data:S,error:L}=await Z(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:P,signature:Vt(E)},!((j=n.options)===null||j===void 0)&&j.captchaToken?{gotrue_meta_security:{captcha_token:(T=n.options)===null||T===void 0?void 0:T.captchaToken}}:null),xform:Qe});if(L)throw L;if(!S||!S.session||!S.user){const U=new Ci;return this._returnResult({data:{user:null,session:null},error:U})}return S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("SIGNED_IN",S.session)),this._returnResult({data:Object.assign({},S),error:L})}catch(S){if(F(S))return this._returnResult({data:{user:null,session:null},error:S});throw S}}async _exchangeCodeForSession(n,r){const u=r?.flowId!=null,o=u?wu(r?.flowId):ce()?wu(Uh(window.location.href)[qt]):null;u&&!o&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",r?.flowId);const{verifier:m,flowId:c}=u&&!o?{verifier:null,flowId:null}:await AT(this.storage,this.storageKey,o),[h,g]=(m??"").split("/");try{if(!h&&this.flowType==="pkce")throw new lT;const{data:b,error:y}=await Z(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:h},xform:Qe});if(await kn(this.storage,this.storageKey,c),y)throw y;if(!b||!b.session||!b.user){const f=new Ci;return this._returnResult({data:{user:null,session:null,redirectType:null},error:f})}return b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers(g==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",b.session)),this._returnResult({data:Object.assign(Object.assign({},b),{redirectType:g??null}),error:y})}catch(b){if(await kn(this.storage,this.storageKey,c),F(b))return this._returnResult({data:{user:null,session:null,redirectType:null},error:b});throw b}}async signInWithIdToken(n){try{const{options:r,provider:u,token:o,access_token:m,nonce:c}=n,h=await Z(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:u,id_token:o,access_token:m,nonce:c,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:Qe}),{data:g,error:b}=h;if(b)return this._returnResult({data:{user:null,session:null},error:b});if(!g||!g.session||!g.user){const y=new Ci;return this._returnResult({data:{user:null,session:null},error:y})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:g,error:b})}catch(r){if(F(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(n){var r,u,o,m,c;let h=null;try{if("email"in n){const{email:g,options:b}=n;let y=null,f=null;this.flowType==="pkce"&&([y,f,h]=await this._getCodeChallengeAndMethod());const{error:j}=await Z(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:g,data:(r=b?.data)!==null&&r!==void 0?r:{},create_user:(u=b?.shouldCreateUser)!==null&&u!==void 0?u:!0,gotrue_meta_security:{captcha_token:b?.captchaToken},code_challenge:y,code_challenge_method:f},redirectTo:this._maybeAppendFlowIdToRedirect(b?.emailRedirectTo,h)});return this._returnResult({data:{user:null,session:null},error:j})}if("phone"in n){const{phone:g,options:b}=n,{data:y,error:f}=await Z(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:g,data:(o=b?.data)!==null&&o!==void 0?o:{},create_user:(m=b?.shouldCreateUser)!==null&&m!==void 0?m:!0,gotrue_meta_security:{captcha_token:b?.captchaToken},channel:(c=b?.channel)!==null&&c!==void 0?c:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:y?.message_id},error:f})}throw new yu("You must provide either an email or phone number.")}catch(g){if(await kn(this.storage,this.storageKey,h),F(g))return this._returnResult({data:{user:null,session:null},error:g});throw g}}async verifyOtp(n){var r,u;try{let o,m;"options"in n&&(o=(r=n.options)===null||r===void 0?void 0:r.redirectTo,m=(u=n.options)===null||u===void 0?void 0:u.captchaToken);const{data:c,error:h}=await Z(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:m}}),redirectTo:o,xform:Qe});if(h)throw h;if(!c)throw new Error("An error occurred on token verification.");const g=c.session,b=c.user;return g?.access_token&&(await this._saveSession(g),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",g)),this._returnResult({data:{user:b,session:g},error:null})}catch(o){if(F(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(n){var r,u,o,m;let c=null;try{let h=null,g=null;this.flowType==="pkce"&&([h,g,c]=await this._getCodeChallengeAndMethod());const b=await Z(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((r=n.options)===null||r===void 0?void 0:r.redirectTo,c)}),!((u=n?.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:g}),headers:this.headers,xform:DT});return!((o=b.data)===null||o===void 0)&&o.url&&ce()&&!(!((m=n.options)===null||m===void 0)&&m.skipBrowserRedirect)&&window.location.assign(b.data.url),this._returnResult(b)}catch(h){if(await kn(this.storage,this.storageKey,c),F(h))return this._returnResult({data:null,error:h});throw h}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:r},error:u}=n;if(u)throw u;if(!r)throw new re;const{error:o}=await Z(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(n){if(F(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async resend(n){let r=null;try{const u=`${this.url}/resend`;if("email"in n){const{email:o,type:m,options:c}=n;let h=null,g=null;this.flowType==="pkce"&&([h,g,r]=await this._getCodeChallengeAndMethod());const{error:b}=await Z(this.fetch,"POST",u,{headers:this.headers,body:{email:o,type:m,gotrue_meta_security:{captcha_token:c?.captchaToken},code_challenge:h,code_challenge_method:g},redirectTo:this._maybeAppendFlowIdToRedirect(c?.emailRedirectTo,r)});return b&&await kn(this.storage,this.storageKey,r),this._returnResult({data:{user:null,session:null},error:b})}else if("phone"in n){const{phone:o,type:m,options:c}=n,{data:h,error:g}=await Z(this.fetch,"POST",u,{headers:this.headers,body:{phone:o,type:m,gotrue_meta_security:{captcha_token:c?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:h?.message_id},error:g})}throw new yu("You must provide either an email or phone number and a type")}catch(u){if(await kn(this.storage,this.storageKey,r),F(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async n=>n)):await this._useSession(async n=>n)}async _acquireLock(n,r){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const u=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await u,await r()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const u=r();for(this.pendingInLock.push((async()=>{try{await u}catch{}})()),await u;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await u}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await n(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const r=await ve(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?n=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const u=n.expires_at?n.expires_at*1e3-Date.now()<ed:!1;if(this._debug("#__loadSession()",`session has${u?"":" not"} expired`,"expires_at",n.expires_at),!u)return{data:{session:await this._hydrateSessionUser(n)},error:null};const{data:o,error:m}=await this._callRefreshToken(n.refresh_token);if(m){const c=await ve(this.storage,this.storageKey);return c&&this._isValidSession(c)&&c.expires_at&&c.expires_at*1e3>Date.now()?this._returnResult({data:{session:await this._hydrateSessionUser(c)},error:null}):this._returnResult({data:{session:null},error:m})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async _hydrateSessionUser(n){if(this.userStorage){const r=await ve(this.userStorage,this.storageKey+"-user");n.user=r?.user?r.user:id()}if(this.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy){const r={value:this.suppressGetSessionWarning};n.user=CT(n.user,r),r.value&&(this.suppressGetSessionWarning=!0)}return n}async getUser(n){if(n)return await this._getUser(n);await this.initializePromise;let r;return this.lock!=null?r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):r=await this._getUser(),r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(n){try{return n?await Z(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:dt}):await this._useSession(async r=>{var u,o,m;const{data:c,error:h}=r;if(h)throw h;return!(!((u=c.session)===null||u===void 0)&&u.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new re}:await Z(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(m=(o=c.session)===null||o===void 0?void 0:o.access_token)!==null&&m!==void 0?m:void 0,xform:dt})})}catch(r){if(F(r))return fu(r)&&await this._removeSession(),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(n,r={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(n,r)):await this._updateUser(n,r)}async _updateUser(n,r={}){let u=null;try{return await this._useSession(async o=>{const{data:m,error:c}=o;if(c)throw c;if(!m.session)throw new re;const h=m.session;let g=null,b=null;this.flowType==="pkce"&&n.email!=null&&([g,b,u]=await this._getCodeChallengeAndMethod());const{data:y,error:f}=await Z(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo,u),body:Object.assign(Object.assign({},n),{code_challenge:g,code_challenge_method:b}),jwt:h.access_token,xform:dt});if(f)throw f;return h.user=y.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),this._returnResult({data:{user:h.user},error:null})})}catch(o){if(await kn(this.storage,this.storageKey,u),F(o))return this._returnResult({data:{user:null},error:o});throw o}}async setSession(n){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(n)):await this._setSession(n)}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new re;const r=Date.now()/1e3;let u=r,o=!0,m=null;const{payload:c}=Pu(n.access_token);if(c.exp&&(u=c.exp,o=u<=r),o){const{data:h,error:g}=await this._callRefreshToken(n.refresh_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!h)return{data:{user:null,session:null},error:null};m=h}else{const{data:h,error:g}=await this._getUser(n.access_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});m={access_token:n.access_token,refresh_token:n.refresh_token,user:h.user,token_type:"bearer",expires_in:u-r,expires_at:u},await this._saveSession(m),await this._notifyAllSubscribers("SIGNED_IN",m)}return this._returnResult({data:{user:m.user,session:m},error:null})}catch(r){if(F(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(n){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(n)):await this._refreshSession(n)}async _refreshSession(n){try{return await this._useSession(async r=>{var u;if(!n){const{data:c,error:h}=r;if(h)throw h;n=(u=c.session)!==null&&u!==void 0?u:void 0}if(!n?.refresh_token)throw new re;const{data:o,error:m}=await this._callRefreshToken(n.refresh_token);return m?this._returnResult({data:{user:null,session:null},error:m}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(F(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(n,r){var u;try{if(!ce())throw new vu("No browser detected.");if(n.error||n.error_description||n.error_code)throw new vu(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new wh("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new vu("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!n.code)throw new wh("No code detected.");const{data:O,error:z}=await this._exchangeCodeForSession(n.code,{flowId:n[qt]});if(z)throw z;const ea=new URL(window.location.href);return ea.searchParams.delete("code"),ea.searchParams.delete(qt),window.history.replaceState(window.history.state,"",ea.toString()),{data:{session:O.session,redirectType:(u=O.redirectType)!==null&&u!==void 0?u:null},error:null}}const{provider_token:o,provider_refresh_token:m,access_token:c,refresh_token:h,expires_in:g,expires_at:b,token_type:y}=n;if(!c||!g||!h||!y)throw new vu("No session defined in URL");const f=Math.round(Date.now()/1e3),j=parseInt(g);let T=f+j;b&&(T=parseInt(b));const P=T-f;P*1e3<=Jn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${P}s, should have been closer to ${j}s`);const E=T-j;f-E>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",E,T,f):f-E<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",E,T,f);const{data:S,error:L}=await this._getUser(c);if(L)throw L;const U={provider_token:o,provider_refresh_token:m,access_token:c,expires_in:j,expires_at:T,refresh_token:h,token_type:y,user:S.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:U,redirectType:n.type},error:null})}catch(o){if(F(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(n){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),n):!!(n.access_token||n.error||n.error_description||n.error_code)}async _isPKCECallback(n){if(!n.code)return!1;const r=wu(n[qt]);return r&&await ve(this.storage,Oi(this.storageKey,r))?!0:!!await ve(this.storage,`${this.storageKey}-code-verifier`)}async signOut(n={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(n)):await this._signOut(n)}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async r=>{var u;const o=async()=>{await this._removeSession()},{data:m,error:c}=r;if(c&&!fu(c))return this._returnResult({error:c});const h=(u=m.session)===null||u===void 0?void 0:u.access_token;if(h){const{error:g}=await this.admin.signOut(h,n);if(g&&!(Ph(g)&&(g.status===404||g.status===401||g.status===403)||fu(g)))return n!=="others"&&await o(),this._returnResult({error:g})}return n!=="others"&&await o(),this._returnResult({error:null})})}onAuthStateChange(n){const r=hT(),u={id:r,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,u),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)}):await this._emitInitialSession(r)))(),{data:{subscription:u}}}async _emitInitialSession(n){return await this._useSession(async r=>{var u,o;try{const{data:{session:m},error:c}=r;if(c)throw c;await((u=this.stateChangeEmitters.get(n))===null||u===void 0?void 0:u.callback("INITIAL_SESSION",m)),this._debug("INITIAL_SESSION","callback id",n,"session",m)}catch(m){if(await((o=this.stateChangeEmitters.get(n))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",m),Eh(m))return;fu(m)||Su(m)||Ph(m)&&(m.code==="refresh_token_not_found"||m.code==="refresh_token_already_used"||m.code==="session_expired")?console.warn(m):console.error(m)}})}async resetPasswordForEmail(n,r={}){let u=null,o=null,m=null;this.flowType==="pkce"&&([u,o,m]=await this._getCodeChallengeAndMethod(!0));try{return await Z(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:u,code_challenge_method:o,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(r.redirectTo,m)})}catch(c){if(await kn(this.storage,this.storageKey,m),F(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var n;try{const{data:r,error:u}=await this.getUser();if(u)throw u;return this._returnResult({data:{identities:(n=r.user.identities)!==null&&n!==void 0?n:[]},error:null})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(n){return"token"in n?this.linkIdentityIdToken(n):this.linkIdentityOAuth(n)}async linkIdentityOAuth(n){var r;let u=null;try{const{data:o,error:m}=await this._useSession(async c=>{var h,g,b,y,f;const{data:j,error:T}=c;if(T)throw T;const{url:P,flowId:E}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(h=n.options)===null||h===void 0?void 0:h.redirectTo,scopes:(g=n.options)===null||g===void 0?void 0:g.scopes,queryParams:(b=n.options)===null||b===void 0?void 0:b.queryParams,skipBrowserRedirect:!0});return u=E,await Z(this.fetch,"GET",P,{headers:this.headers,jwt:(f=(y=j.session)===null||y===void 0?void 0:y.access_token)!==null&&f!==void 0?f:void 0})});if(m)throw m;return ce()&&!(!((r=n.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(o?.url),this._returnResult({data:{provider:n.provider,url:o?.url,flowId:u},error:null})}catch(o){if(F(o))return this._returnResult({data:{provider:n.provider,url:null,flowId:u},error:o});throw o}}async linkIdentityIdToken(n){return await this._useSession(async r=>{var u;try{const{error:o,data:{session:m}}=r;if(o)throw o;const{options:c,provider:h,token:g,access_token:b,nonce:y}=n,f=await Z(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(u=m?.access_token)!==null&&u!==void 0?u:void 0,body:{provider:h,id_token:g,access_token:b,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:c?.captchaToken}},xform:Qe}),{data:j,error:T}=f;return T?this._returnResult({data:{user:null,session:null},error:T}):!j||!j.session||!j.user?this._returnResult({data:{user:null,session:null},error:new Ci}):(j.session&&(await this._saveSession(j.session),await this._notifyAllSubscribers("USER_UPDATED",j.session)),this._returnResult({data:j,error:T}))}catch(o){if(await kn(this.storage,this.storageKey,null),F(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(n){try{return await this._useSession(async r=>{var u,o;const{data:m,error:c}=r;if(c)throw c;return await Z(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(o=(u=m.session)===null||u===void 0?void 0:u.access_token)!==null&&o!==void 0?o:void 0})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(n){const r="#_refreshAccessToken()";this._debug(r,"begin");try{const u=Date.now();return await bT(async o=>(o>0&&await pT(200*Math.pow(2,o-1)),this._debug(r,"refreshing attempt",o),await Z(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:Qe})),(o,m)=>{const c=200*Math.pow(2,o);return m&&Su(m)&&Date.now()+c-u<Jn})}catch(u){if(this._debug(r,"error",u),F(u))return this._returnResult({data:{session:null,user:null},error:u});throw u}finally{this._debug(r,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,r){const{url:u,flowId:o}=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",r,"url",u),ce()&&!r.skipBrowserRedirect&&window.location.assign(u),{data:{provider:n,url:u,flowId:o},error:null}}async _recoverAndRefresh(){var n,r;const u="#_recoverAndRefresh()";this._debug(u,"begin");try{const o=await ve(this.storage,this.storageKey);if(o&&this.userStorage){let c=await ve(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!c&&(c={user:o.user},await Gn(this.userStorage,this.storageKey+"-user",c)),o.user=(n=c?.user)!==null&&n!==void 0?n:id()}else if(o&&!o.user&&!o.user){const c=await ve(this.storage,this.storageKey+"-user");c&&c?.user?(o.user=c.user,await Me(this.storage,this.storageKey+"-user"),await Gn(this.storage,this.storageKey,o)):o.user=id()}if(this._debug(u,"session from storage",o),!this._isValidSession(o)){this._debug(u,"session is not valid"),o!==null&&await this._removeSession();return}const m=((r=o.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<ed;if(this._debug(u,`session has${m?"":" not"} expired with margin of ${ed}s`),m){if(this.autoRefreshToken&&o.refresh_token){const{error:c}=await this._callRefreshToken(o.refresh_token);c&&(Eh(c)?this._debug(u,"refresh discarded by commit guard",c):this._debug(u,"refresh failed",c))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:c,error:h}=await this._getUser(o.access_token);!h&&c?.user?(o.user=c.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(u,"could not get user data, skipping SIGNED_IN notification")}catch(c){console.error("Error getting user data:",c),this._debug(u,"error getting user data, skipping SIGNED_IN notification",c)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(u,"error",o),Su(o)?console.warn(o):console.error(o);return}finally{this._debug(u,"end")}}async _callRefreshToken(n){var r,u;if(!n)throw new re;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===n&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new _u,this.refreshingDeferred.promise.then(void 0,()=>{});const m=await ve(this.storage,this.storageKey),{data:c,error:h}=await this._refreshAccessToken(n);if(h)throw h;if(!c.session)throw new re;const g=await ve(this.storage,this.storageKey);if(m!==null&&(g===null||g.refresh_token!==m.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:g?"replaced":"cleared"});const j={data:null,error:new Mh};return this.refreshingDeferred.resolve(j),j}const y=this._sessionRemovalEpoch;if(await this._saveSession(c.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await Me(this.storage,this.storageKey),this.userStorage&&await Me(this.userStorage,this.storageKey+"-user");const j={data:null,error:new Mh};return this.refreshingDeferred.resolve(j),j}await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const f={data:c.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(f),f}catch(m){if(this._debug(o,"error",m),F(m)){const c={data:null,error:m};if(!Su(m)){const h=await ve(this.storage,this.storageKey);!!(h?.expires_at&&h.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:n,result:c,expiresAt:Date.now()+ZS},(r=this.refreshingDeferred)===null||r===void 0||r.resolve(c),c}throw(u=this.refreshingDeferred)===null||u===void 0||u.reject(m),m}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(n,r,u=!0){if(this._pendingInitNotifications!==null&&u){this._pendingInitNotifications.push({event:n,session:r,broadcast:u});return}const o=`#_notifyAllSubscribers(${n})`;this._debug(o,"begin",r,`broadcast = ${u}`);try{this.broadcastChannel&&u&&this.broadcastChannel.postMessage({event:n,session:r});const m=[],c=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(n,r)}catch(g){m.push(g)}});if(await Promise.all(c),m.length>0){for(let h=0;h<m.length;h+=1)console.error(m[h]);throw m[0]}}finally{this._debug(o,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),this.suppressGetSessionWarning=!0;const r=Object.assign({},n),u=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!u&&r.user&&await Gn(this.userStorage,this.storageKey+"-user",{user:r.user});const o=Object.assign({},r);delete o.user;const m=Ih(o);await Gn(this.storage,this.storageKey,m)}else{const o=Ih(r);await Gn(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Me(this.storage,this.storageKey),await _T(this.storage,this.storageKey),await Me(this.storage,this.storageKey+"-user"),this.userStorage&&await Me(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&ce()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",n)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),Jn);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var n;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(n=this.broadcastChannel)===null||n===void 0||n.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async r=>{const{data:{session:u}}=r;if(!u||!u.refresh_token||!u.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((u.expires_at*1e3-n)/Jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Jn}ms, refresh threshold is ${qr} ticks`),o<=qr&&await this._callRefreshToken(u.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n instanceof IT)this._debug("auto refresh token tick lock not available");else throw n}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const n=Date.now();try{await this._useSession(async r=>{const{data:{session:u}}=r;if(!u||!u.refresh_token||!u.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((u.expires_at*1e3-n)/Jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Jn}ms, refresh threshold is ${qr} ticks`),o<=qr&&await this._callRefreshToken(u.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ce()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(n){this._debug("#visibilityChangedCallback","error",n)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const r=`#_onVisibilityChanged(${n})`;if(this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!n)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(r,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,r,u){let o=u?.redirectTo,m=null,c=null,h=null;this.flowType==="pkce"&&([m,c,h]=await this._getCodeChallengeAndMethod(),o=this._maybeAppendFlowIdToRedirect(o,h));const g=[`provider=${encodeURIComponent(r)}`];if(o&&g.push(`redirect_to=${encodeURIComponent(o)}`),u?.scopes&&g.push(`scopes=${encodeURIComponent(u.scopes)}`),m!=null&&c!=null){const b=new URLSearchParams({code_challenge:`${encodeURIComponent(m)}`,code_challenge_method:`${encodeURIComponent(c)}`});g.push(b.toString())}if(u?.queryParams){const b=new URLSearchParams(u.queryParams);g.push(b.toString())}return u?.skipBrowserRedirect&&g.push(`skip_http_redirect=${u.skipBrowserRedirect}`),{url:`${n}?${g.join("&")}`,flowId:h}}_maybeAppendFlowIdToRedirect(n,r){return!n||!r||!this.experimental.appendPkceFlowIdToRedirects?n??void 0:PT(n,r)}async _getCodeChallengeAndMethod(n=!1){return wT(this.storage,this.storageKey,n,r=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",r))}async _unenroll(n){try{return await this._useSession(async r=>{var u;const{data:o,error:m}=r;return m?this._returnResult({data:null,error:m}):await Z(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(u=o?.session)===null||u===void 0?void 0:u.access_token})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(n){try{return await this._useSession(async r=>{var u,o;const{data:m,error:c}=r;if(c)return this._returnResult({data:null,error:c});const h=Object.assign({friendly_name:n.friendlyName,factor_type:n.factorType},n.factorType==="phone"?{phone:n.phone}:n.factorType==="totp"?{issuer:n.issuer}:{}),{data:g,error:b}=await Z(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(u=m?.session)===null||u===void 0?void 0:u.access_token});return b?this._returnResult({data:null,error:b}):(n.factorType==="totp"&&g.type==="totp"&&(!((o=g?.totp)===null||o===void 0)&&o.qr_code)&&(g.totp.qr_code=`data:image/svg+xml;utf-8,${g.totp.qr_code}`),this._returnResult({data:g,error:null}))})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _verify(n){const r=async()=>{try{return await this._useSession(async u=>{var o;const{data:m,error:c}=u;if(c)return this._returnResult({data:null,error:c});const h=Object.assign({challenge_id:n.challengeId},"webauthn"in n?{webauthn:Object.assign(Object.assign({},n.webauthn),{credential_response:n.webauthn.type==="create"?Yh(n.webauthn.credential_response):Xh(n.webauthn.credential_response)})}:{code:n.code}),{data:g,error:b}=await Z(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:h,headers:this.headers,jwt:(o=m?.session)===null||o===void 0?void 0:o.access_token});return b?this._returnResult({data:null,error:b}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+g.expires_in},g)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",g),this._returnResult({data:g,error:b}))})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challenge(n){const r=async()=>{try{return await this._useSession(async u=>{var o;const{data:m,error:c}=u;if(c)return this._returnResult({data:null,error:c});const h=await Z(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{body:n,headers:this.headers,jwt:(o=m?.session)===null||o===void 0?void 0:o.access_token});if(h.error)return h;const{data:g}=h;if(g.type!=="webauthn")return{data:g,error:null};switch(g.webauthn.type){case"create":return{data:Object.assign(Object.assign({},g),{webauthn:Object.assign(Object.assign({},g.webauthn),{credential_options:Object.assign(Object.assign({},g.webauthn.credential_options),{publicKey:Vh(g.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},g),{webauthn:Object.assign(Object.assign({},g.webauthn),{credential_options:Object.assign(Object.assign({},g.webauthn.credential_options),{publicKey:Fh(g.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challengeAndVerify(n){const{data:r,error:u}=await this._challenge({factorId:n.factorId});return u?this._returnResult({data:null,error:u}):await this._verify({factorId:n.factorId,challengeId:r.id,code:n.code})}async _listFactors(){var n;const{data:{user:r},error:u}=await this.getUser();if(u)return{data:null,error:u};const o={all:[],phone:[],totp:[],webauthn:[],recovery_code:[]};for(const m of(n=r?.factors)!==null&&n!==void 0?n:[])o.all.push(m),m.status==="verified"&&m.factor_type in o&&Array.isArray(o[m.factor_type])&&o[m.factor_type].push(m);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(n){var r,u,o,m;if(n)try{const{payload:T}=Pu(n);let P=null;T.aal&&(P=T.aal);let E=P;const{data:{user:S},error:L}=await this.getUser(n);if(L)return this._returnResult({data:null,error:L});((u=(r=S?.factors)===null||r===void 0?void 0:r.filter(z=>z.status==="verified"))!==null&&u!==void 0?u:[]).length>0&&(E="aal2");const O=T.amr||[];return{data:{currentLevel:P,nextLevel:E,currentAuthenticationMethods:O},error:null}}catch(T){if(F(T))return this._returnResult({data:null,error:T});throw T}const{data:{session:c},error:h}=await this.getSession();if(h)return this._returnResult({data:null,error:h});if(!c)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:g}=Pu(c.access_token);let b=null;g.aal&&(b=g.aal);let y=b;((m=(o=c.user.factors)===null||o===void 0?void 0:o.filter(T=>T.status==="verified"))!==null&&m!==void 0?m:[]).length>0&&(y="aal2");const j=g.amr||[];return{data:{currentLevel:b,nextLevel:y,currentAuthenticationMethods:j},error:null}}async _getRecoveryCodesStatus(){Yr(this.experimental);try{return await this._useSession(async n=>{var r;const{data:u,error:o}=n;if(o)return this._returnResult({data:null,error:o});const{data:m,error:c}=await Z(this.fetch,"GET",`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:(r=u?.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):this._returnResult({data:m,error:null})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _generateRecoveryCodes(n){Yr(this.experimental);try{return await this._useSession(async r=>{var u;const{data:o,error:m}=r;if(m)return this._returnResult({data:null,error:m});const{data:c,error:h}=await Z(this.fetch,"POST",`${this.url}/factors/recovery-codes`,{body:n?.friendlyName?{friendly_name:n.friendlyName}:void 0,headers:this.headers,jwt:(u=o?.session)===null||u===void 0?void 0:u.access_token});return h?this._returnResult({data:null,error:h}):this._returnResult({data:c,error:null})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _verifyRecoveryCode(n){Yr(this.experimental);const r=async()=>{try{return await this._useSession(async u=>{var o;const{data:m,error:c}=u;if(c)return this._returnResult({data:null,error:c});const{data:h,error:g}=await Z(this.fetch,"POST",`${this.url}/factors/recovery-codes/verify`,{body:{code:n.code},headers:this.headers,jwt:(o=m?.session)===null||o===void 0?void 0:o.access_token});if(g)return this._returnResult({data:null,error:g});const b=Object.assign({expires_at:Oh(h.expires_in)},h);return await this._saveSession(b),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",b),this._returnResult({data:h,error:null})})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _regenerateRecoveryCodes(){Yr(this.experimental);try{return await this._useSession(async n=>{var r;const{data:u,error:o}=n;if(o)return this._returnResult({data:null,error:o});const{data:m,error:c}=await Z(this.fetch,"POST",`${this.url}/factors/recovery-codes/regenerate`,{headers:this.headers,jwt:(r=u?.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):this._returnResult({data:m,error:null})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _unenrollRecoveryCodes(){Yr(this.experimental);try{return await this._useSession(async n=>{var r;const{data:u,error:o}=n;if(o)return this._returnResult({data:null,error:o});const{data:m,error:c}=await Z(this.fetch,"DELETE",`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:(r=u?.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):this._returnResult({data:m,error:null})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _getAuthorizationDetails(n){try{return await this._useSession(async r=>{const{data:{session:u},error:o}=r;return o?this._returnResult({data:null,error:o}):u?await Z(this.fetch,"GET",`${this.url}/oauth/authorizations/${n}`,{headers:this.headers,jwt:u.access_token,xform:m=>({data:m,error:null})}):this._returnResult({data:null,error:new re})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(n,r){try{return await this._useSession(async u=>{const{data:{session:o},error:m}=u;if(m)return this._returnResult({data:null,error:m});if(!o)return this._returnResult({data:null,error:new re});const c=await Z(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:h=>({data:h,error:null})});return c.data&&c.data.redirect_url&&ce()&&!r?.skipBrowserRedirect&&window.location.assign(c.data.redirect_url),c})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}}async _denyAuthorization(n,r){try{return await this._useSession(async u=>{const{data:{session:o},error:m}=u;if(m)return this._returnResult({data:null,error:m});if(!o)return this._returnResult({data:null,error:new re});const c=await Z(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:h=>({data:h,error:null})});return c.data&&c.data.redirect_url&&ce()&&!r?.skipBrowserRedirect&&window.location.assign(c.data.redirect_url),c})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}}async _listOAuthGrants(){try{return await this._useSession(async n=>{const{data:{session:r},error:u}=n;return u?this._returnResult({data:null,error:u}):r?await Z(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new re})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _revokeOAuthGrant(n){try{return await this._useSession(async r=>{const{data:{session:u},error:o}=r;return o?this._returnResult({data:null,error:o}):u?(await Z(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:u.access_token,query:{client_id:n.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new re})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(n,r={keys:[]}){let u=r.keys.find(h=>h.kid===n);if(u)return u;const o=Date.now();if(u=this.jwks.keys.find(h=>h.kid===n),u&&this.jwks_cached_at+rT>o)return u;const{data:m,error:c}=await Z(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(c)throw c;return!m.keys||m.keys.length===0||(this.jwks=m,this.jwks_cached_at=o,u=m.keys.find(h=>h.kid===n),!u)?null:u}async getClaims(n,r={}){try{let u=n;if(!u){const{data:T,error:P}=await this.getSession();if(P||!T.session)return this._returnResult({data:null,error:P});u=T.session.access_token}const{header:o,payload:m,signature:c,raw:{header:h,payload:g}}=Pu(u);if(!r?.allowExpired)try{RT(m.exp)}catch(T){throw new Tu(T instanceof Error?T.message:"JWT validation failed")}const b=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,r?.keys?{keys:r.keys}:r?.jwks);if(!b){const{error:T}=await this.getUser(u);if(T)throw T;return{data:{claims:m,header:o,signature:c},error:null}}const y=NT(o.alg),f=await crypto.subtle.importKey("jwk",b,y,!0,["verify"]);if(!await crypto.subtle.verify(y,f,c,kT(`${h}.${g}`)))throw new Tu("Invalid JWT signature");return{data:{claims:m,header:o,signature:c},error:null}}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}}async signInWithPasskey(n){var r,u,o,m;try{if(!Eu())return this._returnResult({data:null,error:new cn("Browser does not support WebAuthn",null)});const{data:c,error:h}=await this._startPasskeyAuthentication({options:{captchaToken:(r=n?.options)===null||r===void 0?void 0:r.captchaToken}});if(h||!c)return this._returnResult({data:null,error:h});const g=Fh(c.options),b=(o=(u=n?.options)===null||u===void 0?void 0:u.signal)!==null&&o!==void 0?o:sd.createNewAbortSignal(),{data:y,error:f}=await Zh({publicKey:g,signal:b,mediation:(m=n?.options)===null||m===void 0?void 0:m.mediation});if(f||!y)return this._returnResult({data:null,error:f??new cn("WebAuthn ceremony failed",null)});const j=Xh(y);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:j})}catch(c){if(F(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(n){var r,u;try{if(!Eu())return this._returnResult({data:null,error:new cn("Browser does not support WebAuthn",null)});const{data:o,error:m}=await this._startPasskeyRegistration();if(m||!o)return this._returnResult({data:null,error:m});const c=Vh(o.options),h=(u=(r=n?.options)===null||r===void 0?void 0:r.signal)!==null&&u!==void 0?u:sd.createNewAbortSignal(),{data:g,error:b}=await Wh({publicKey:c,signal:h});if(b||!g)return this._returnResult({data:null,error:b??new cn("WebAuthn ceremony failed",null)});const y=Yh(g);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(F(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){try{return await this._useSession(async n=>{const{data:{session:r},error:u}=n;if(u)return this._returnResult({data:null,error:u});if(!r)return this._returnResult({data:null,error:new re});const{data:o,error:m}=await Z(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:r.access_token,body:{}});return m?this._returnResult({data:null,error:m}):this._returnResult({data:o,error:null})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyRegistration(n){try{return await this._useSession(async r=>{const{data:{session:u},error:o}=r;if(o)return this._returnResult({data:null,error:o});if(!u)return this._returnResult({data:null,error:new re});const{data:m,error:c}=await Z(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:u.access_token,body:{challenge_id:n.challengeId,credential:n.credential}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:m,error:null})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyAuthentication(n){var r;try{const{data:u,error:o}=await Z(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(r=n?.options)===null||r===void 0?void 0:r.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:u,error:null})}catch(u){if(F(u))return this._returnResult({data:null,error:u});throw u}}async _verifyPasskeyAuthentication(n){try{const{data:r,error:u}=await Z(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:n.challengeId,credential:n.credential},xform:Qe});return u?this._returnResult({data:null,error:u}):(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:r,error:null}))}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _listPasskeys(){try{return await this._useSession(async n=>{const{data:{session:r},error:u}=n;if(u)return this._returnResult({data:null,error:u});if(!r)return this._returnResult({data:null,error:new re});const{data:o,error:m}=await Z(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:r.access_token,xform:c=>({data:c,error:null})});return m?this._returnResult({data:null,error:m}):this._returnResult({data:o,error:null})})}catch(n){if(F(n))return this._returnResult({data:null,error:n});throw n}}async _updatePasskey(n){try{return await this._useSession(async r=>{const{data:{session:u},error:o}=r;if(o)return this._returnResult({data:null,error:o});if(!u)return this._returnResult({data:null,error:new re});const{data:m,error:c}=await Z(this.fetch,"PATCH",`${this.url}/passkeys/${n.passkeyId}`,{headers:this.headers,jwt:u.access_token,body:{friendly_name:n.friendlyName}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:m,error:null})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}async _deletePasskey(n){try{return await this._useSession(async r=>{const{data:{session:u},error:o}=r;if(o)return this._returnResult({data:null,error:o});if(!u)return this._returnResult({data:null,error:new re});const{error:m}=await Z(this.fetch,"DELETE",`${this.url}/passkeys/${n.passkeyId}`,{headers:this.headers,jwt:u.access_token,noResolveJson:!0});return m?this._returnResult({data:null,error:m}):this._returnResult({data:null,error:null})})}catch(r){if(F(r))return this._returnResult({data:null,error:r});throw r}}}Xr.nextInstanceID={};const aA=Xr,eA="2.117.2";let Qr="",Nu;if(typeof Deno<"u"){var ud;Qr="deno",Nu=(ud=Deno.version)===null||ud===void 0?void 0:ud.deno}else if(typeof document<"u")Qr="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Qr="react-native";else{var ld;Qr="node";const i=globalThis.process;Nu=i==null||(ld=i.version)===null||ld===void 0?void 0:ld.replace(/^v/,"")}const eg=[`runtime=${Qr}`];Nu&&eg.push(`runtime-version=${Nu}`);const nA={headers:{"X-Client-Info":`supabase-js/${eA}; ${eg.join("; ")}`}},tA={schema:"public"},iA={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},rA={},sA={enabled:!1,respectSamplingDecision:!0};function uA(i){if(!i||typeof i!="string")return null;const n=i.split("-");if(n.length!==4)return null;const[r,u,o,m]=n;if(r.length!==2||u.length!==32||o.length!==16||m.length!==2)return null;const c=/^[0-9a-f]+$/i;return!c.test(r)||!c.test(u)||!c.test(o)||!c.test(m)||u==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:r,traceId:u,parentId:o,traceFlags:m,isSampled:(parseInt(m,16)&1)===1}}function lA(i,n){if(!i||!n||n.length===0)return!1;let r;if(i instanceof URL)r=i;else try{r=new URL(i)}catch{return!1}for(const u of n)try{if(typeof u=="string"){if(oA(r.hostname,u))return!0}else if(u instanceof RegExp){if(u.test(r.hostname))return!0}else if(typeof u=="function"&&u(r))return!0}catch{continue}return!1}function oA(i,n){if(n===i)return!0;if(n.startsWith("*.")){const r=n.slice(2);if(i.endsWith(r)&&(i===r||i.endsWith("."+r)))return!0}return!1}function dA(i){const n=[];try{const r=new URL(i);n.push(r.hostname)}catch{}return n.push("*.supabase.co","*.supabase.in"),n.push("localhost","127.0.0.1","[::1]"),n}function Wr(i){"@babel/helpers - typeof";return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wr(i)}function mA(i,n){if(Wr(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var u=r.call(i,n);if(Wr(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function cA(i){var n=mA(i,"string");return Wr(n)=="symbol"?n:n+""}function kA(i,n,r){return(n=cA(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function ng(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);n&&(u=u.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),r.push.apply(r,u)}return r}function Ya(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ng(Object(r),!0).forEach(function(u){kA(i,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):ng(Object(r)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(r,u))})}return i}const hA=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),gA=()=>Headers,tg=i=>i.startsWith("sb_publishable_")||i.startsWith("sb_secret_"),pA="sb_temp_",ig=new Set,bA=i=>{var n,r;if(!i.startsWith("sb_")||tg(i)||i.startsWith(pA))return;const u=(n=(r=i.match(/^sb_[a-zA-Z0-9]+_/))===null||r===void 0?void 0:r[0])!==null&&n!==void 0?n:"unknown";ig.has(u)||(ig.add(u),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},rg=(i,n,r,u,o,m)=>{const c=hA(u),h=gA(),g=o?.enabled===!0,b=o?.respectSamplingDecision!==!1,y=g?dA(n):null,f=!(m?.omitApiKeyAsBearer&&tg(i));return async(j,T)=>{const P=await r();let E=new h(T?.headers);if(E.has("apikey")||E.set("apikey",i),!E.has("Authorization")){const S=P??(f?i:null);S&&E.set("Authorization",`Bearer ${S}`)}if(y){const S=fA(j,y,b);S&&(S.traceparent&&!E.has("traceparent")&&E.set("traceparent",S.traceparent),S.tracestate&&!E.has("tracestate")&&E.set("tracestate",S.tracestate),S.baggage&&!E.has("baggage")&&E.set("baggage",S.baggage))}return c(j,Ya(Ya({},T),{},{headers:E}))}};let sg=!1,ug=!1;function fA(i,n,r){const u=y0();if(!u)return sg||(sg=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!lA(typeof i=="string"||i instanceof URL?i:i.url,n))return null;const o=u();if(!o||!o.traceparent){var m;if(!(o==null||(m=o.carrierKeys)===null||m===void 0)&&m.length&&!ug){ug=!0;const c=o.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${o.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+c)}return null}if(r){const c=uA(o.traceparent);if(c&&!c.isSampled)return{traceparent:o.traceparent}}return o}function lg(i){return typeof i=="boolean"?{enabled:i}:i}function yA(i){return i.endsWith("/")?i:i+"/"}let og=!1;function vA(i){og||typeof i!="object"||i===null||!("schema"in i)||i.schema===void 0||(og=!0,console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`))}function jA(i,n){var r,u,o,m,c,h;const{db:g,auth:b,realtime:y,global:f}=i,{db:j,auth:T,realtime:P,global:E}=n,S=lg(i.tracePropagation),L=lg(n.tracePropagation),U={db:Ya(Ya({},j),g),auth:Ya(Ya({},T),b),realtime:Ya(Ya({},P),y),storage:{},global:Ya(Ya(Ya({},E),f),{},{headers:Ya(Ya({},(r=E?.headers)!==null&&r!==void 0?r:{}),(u=f?.headers)!==null&&u!==void 0?u:{})}),tracePropagation:{enabled:(o=(m=S?.enabled)!==null&&m!==void 0?m:L?.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(c=(h=S?.respectSamplingDecision)!==null&&h!==void 0?h:L?.respectSamplingDecision)!==null&&c!==void 0?c:!0},accessToken:async()=>""};return i.accessToken?U.accessToken=i.accessToken:delete U.accessToken,U}function SA(i){const n=i?.trim();if(!n)throw new Error("supabaseUrl is required.");if(!n.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(yA(n))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var TA=class extends aA{constructor(i){super(i)}},AA=class{constructor(i,n,r){var u,o;this.supabaseUrl=i,this.supabaseKey=n;const m=SA(i);if(!n)throw new Error("supabaseKey is required.");bA(n),vA(r),this.realtimeUrl=new URL("realtime/v1",m),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",m),this.storageUrl=new URL("storage/v1",m),this.functionsUrl=new URL("functions/v1",m);const c=`sb-${m.hostname.split(".")[0]}-auth-token`,h={db:tA,realtime:rA,auth:Ya(Ya({},iA),{},{storageKey:c}),global:nA,tracePropagation:sA},g=jA(r??{},h);if(this.settings=g,this.storageKey=(u=g.auth.storageKey)!==null&&u!==void 0?u:"",this.headers=(o=g.global.headers)!==null&&o!==void 0?o:{},g.accessToken)this.accessToken=g.accessToken,this.auth=new Proxy({},{get:(y,f)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)}});else{var b;this.auth=this._initSupabaseAuthClient((b=g.auth)!==null&&b!==void 0?b:{},this.headers,g.global.fetch)}this.fetch=rg(n,i,this._getSessionToken.bind(this),g.global.fetch,g.tracePropagation),this.functionsFetch=rg(n,i,this._getSessionToken.bind(this),g.global.fetch,g.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(Ya({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},g.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new C0(new URL("rest/v1",m).href,{headers:this.headers,schema:g.db.schema,fetch:this.fetch,timeout:g.db.timeout,urlLengthLimit:g.db.urlLengthLimit,retry:g.db.retry}),this.storage=new WS(this.storageUrl.href,this.headers,this.fetch,r?.storage),g.accessToken||this._listenForAuthEvents()}get functions(){return new T0(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}getOpenApiSpec(){return this.rest.getOpenApiSpec()}rpc(i,n={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(i,n,r)}channel(i,n={config:{}}){return this.realtime.channel(i,n)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var i=this,n,r;if(i.accessToken)return await i.accessToken();const{data:u}=await i.auth.getSession();return(n=(r=u.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:null}async _getAccessToken(){var i=this,n;return(n=await i._getSessionToken())!==null&&n!==void 0?n:i.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:u,userStorage:o,storageKey:m,flowType:c,lock:h,debug:g,throwOnError:b,experimental:y,lockAcquireTimeout:f,skipAutoInitialize:j},T,P){const E={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new TA({url:this.authUrl.href,headers:Ya(Ya({},E),T),storageKey:m,autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:u,userStorage:o,flowType:c,lock:h,debug:g,throwOnError:b,experimental:y,fetch:P,lockAcquireTimeout:f,skipAutoInitialize:j,hasCustomAuthorizationHeader:Object.keys(this.headers).some(S=>S.toLowerCase()==="authorization")})}_initRealtimeClient(i){return new TS(this.realtimeUrl.href,Ya(Ya({},i),{},{params:Ya(Ya({},{apikey:this.supabaseKey}),i?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,n)=>{this._handleTokenChanged(i,"CLIENT",n?.access_token)})}_handleTokenChanged(i,n,r){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN"||i==="INITIAL_SESSION")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):i==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const _A=(i,n,r)=>new AA(i,n,r);function PA(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const i=globalThis.process;if(!i)return!1;const n=i.version;if(n==null)return!1;const r=n.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=20:!1}PA()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");const dg=window.MAHARATI_CONFIG,mg=dg?.supabaseUrl,cg=dg?.publishableKey,xu=!!(mg&&cg&&!$o),fa=xu?_A(mg,cg,{auth:{flowType:"pkce"}}):null,kg=new WeakMap;async function od(i){if(!fa)throw Error("Layanan belum tersedia.");const{data:n,error:r}=await fa.functions.invoke("proof-drive",{body:i});if(r){let u="Penghubung bukti belum dapat dihubungi. Periksa deployment proof-drive dan ALLOWED_ORIGINS, lalu coba lagi.";try{u=(await r.context?.json())?.error||u}catch{}throw Error(u)}if(n?.error)throw Error(n.error);return n}async function hn(i,n={}){if(!fa)throw new Error("Layanan akun belum dikonfigurasi. Prompt gratis tetap dapat digunakan.");const{data:r,error:u}=await fa.rpc(i,n);if(u)throw u;return r}async function hg(i,n){if(!fa)throw Error("Layanan belum tersedia.");if(!["image/jpeg","image/png","application/pdf"].includes(i.type)||i.size>5*1024*1024||!i.size)throw Error("Pilih JPG, PNG, atau PDF maksimal 5 MB.");const{data:{user:r}}=await fa.auth.getUser();if(!r)throw Error("Masuk terlebih dahulu.");const{data:u,error:o}=await fa.from("app_settings").select("setting_value").eq("setting_key","proof_provider").maybeSingle();if(o)throw Error("Pengaturan unggahan belum siap. Pengelola perlu menerapkan migrasi terbaru.");if(!u||!["drive","supabase"].includes(u.setting_value))throw Error("Provider bukti tidak ditemukan atau tidak valid. Hubungi pengelola; file belum diunggah.");if(u.setting_value==="drive"){let g=kg.get(i);g||(g=new Map,kg.set(i,g)),g.has(n)||g.set(n,crypto.randomUUID());const b=new Uint8Array(await i.arrayBuffer());let y="";for(let j=0;j<b.length;j+=8192)y+=String.fromCharCode(...b.slice(j,j+8192));const f=await od({action:"upload",request_id:g.get(n),kind:n,mime:i.type,base64:btoa(y)});if(typeof f?.path!="string"||!f.path.startsWith(`${r.id}/${n}/`))throw Error("Respons penghubung bukti tidak valid. Donasi belum diajukan.");return f.path}const m=i.type==="application/pdf"?"pdf":i.type==="image/png"?"png":"jpg",c=`${r.id}/${n}/${crypto.randomUUID()}.${m}`,{error:h}=await fa.storage.from("proofs").upload(c,i,{contentType:i.type,upsert:!1});if(h)throw h;return c}async function Cu(i){if(!fa)throw Error("Layanan belum tersedia.");const{data:n,error:r}=await fa.from("proof_files").select("id").eq("proof_path",i).maybeSingle();if(r)throw Error("Metadata bukti tidak dapat diperiksa.");if(n){const m=await od({action:"read",path:i}),c=Uint8Array.from(atob(m.base64),g=>g.charCodeAt(0)),h=URL.createObjectURL(new Blob([c],{type:m.mime}));return setTimeout(()=>URL.revokeObjectURL(h),6e4),h}const{data:u,error:o}=await fa.storage.from("proofs").createSignedUrl(i,60);if(o)throw o;return u.signedUrl}async function gn(i){if(!fa)return[];const n=i==="app_settings"?"setting_key":i==="partners"?"user_id":i==="public_partners"?"referral_code":i.startsWith("public_")?"created_at":"id",r=[];for(let u=0;;u+=500){const{data:o,error:m}=await fa.from(i).select("*").order(n).range(u,u+499);if(m)throw m;if(r.push(...o||[]),!o||o.length<500)return r}}const De=i=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(i),mt=i=>new Date(i).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"});async function gg(){const i=await od({action:"health"});if(i?.ok!==!0||i?.bridge_version!=="2026-10-04")throw Error("Versi penghubung belum cocok. Deploy ulang proof-drive dan Apps Script terbaru.");return i}const pg=_.createContext({user:null,profile:null,loading:!0,error:"",login:async()=>{},logout:async()=>{},refresh:async()=>{}});function wA({children:i}){const[n,r]=_.useState(null),[u,o]=_.useState(null),[m,c]=_.useState(!0),[h,g]=_.useState("");async function b(){if(!fa)return;const{data:{user:j},error:T}=await fa.auth.getUser();if(T){g(T.message);return}if(r(j),j){const{data:P,error:E}=await fa.from("profiles").select("*").eq("id",j.id).single();E?g("Status akun belum dapat dimuat. Coba muat ulang."):(o(P),g(""))}else o(null)}_.useEffect(()=>{if(!fa){c(!1);return}let j=!0,T=0;const P=async S=>{const L=++T;if(j){if(r(S),o(null),S){const{data:U,error:O}=await fa.from("profiles").select("*").eq("id",S.id).single();j&&L===T&&(o(U),g(O?"Status akun gagal dimuat. Muat ulang untuk mencoba lagi.":""))}j&&L===T&&c(!1)}};fa.auth.getSession().then(({data:S,error:L})=>{L?(g(L.message),c(!1)):P(S.session?.user||null)});const{data:E}=fa.auth.onAuthStateChange((S,L)=>{window.setTimeout(()=>{P(L?.user||null)},0)});return()=>{j=!1,E.subscription.unsubscribe()}},[]);async function y(){if($o)throw Error("Untuk login Google, tutup file ini lalu klik BUKA-DENGAN-AKUN.bat, atau buka website online. Generator tetap bisa dipakai di sini.");if(!fa)throw Error("Login belum tersedia: konfigurasi Supabase dan Google diperlukan.");const{error:j}=await fa.auth.signInWithOAuth({provider:"google",options:{redirectTo:Gk()}});if(j)throw j}async function f(){if(fa){const{error:j}=await fa.auth.signOut();if(j)throw j}r(null),o(null)}return k.jsx(pg.Provider,{value:{user:n,profile:u,loading:m,error:h,login:y,logout:f,refresh:b},children:i})}const zn=()=>_.useContext(pg);function Ui({title:i,onClose:n,children:r}){const u=_.useRef(null),o=_.useRef(n);return o.current=n,_.useEffect(()=>{const m=u.current,c=document.activeElement;m.showModal();const h=g=>{g.preventDefault(),o.current()};return m.addEventListener("cancel",h),()=>{m.removeEventListener("cancel",h),m.close(),c?.focus()}},[]),k.jsxs("dialog",{ref:u,className:"modal","aria-labelledby":"modal-title",children:[k.jsx("button",{className:"icon-button close","aria-label":"Tutup",onClick:n,children:k.jsx(Uk,{size:20})}),k.jsx("h2",{id:"modal-title",children:i}),r]})}function se({children:i}){return k.jsx("div",{className:"notice",role:"status",children:i})}function Zr({title:i,children:n}){return k.jsxs("div",{className:"empty",children:[k.jsx("h2",{children:i}),k.jsx("div",{children:n})]})}function Xt(){const i=_.useRef(!1),[n,r]=_.useState(!1),[u,o]=_.useState("");async function m(c,h="Perubahan disimpan."){if(!i.current){i.current=!0,r(!0),o("");try{await c(),o(h)}catch(g){o(g instanceof Error?g.message:g?.message||"Permintaan gagal. Silakan coba lagi.")}finally{i.current=!1,r(!1)}}}return{busy:n,message:u,run:m,setMessage:o}}const MA=[["/","Beranda",$j],["/prompt","Kumpulan Prompt",Hj],["/profil","Profil Mengajar",ru],["/gemini","Beli Gemini Pro",lt],["/proyek","Proyek Saya",Bk],["/kopi","Traktir Kopi",xo],["/mitra","Mitra",Dk],["/akun","Akun",ru]];function EA(){const{profile:i,loading:n,login:r}=zn(),{warning:u}=Kr(),[o,m]=_.useState(!1),[c,h]=_.useState(!1),g=dn(),b=Xt(),[y,f]=_.useState(window.innerWidth<=760),[j,T]=_.useState(()=>{try{return localStorage.getItem("maharati:sidebar-collapsed")==="true"}catch{return!1}});function P(){T(U=>{try{localStorage.setItem("maharati:sidebar-collapsed",String(!U))}catch{}return!U})}const E=_.useRef(null),S=_.useRef(null),L=_.useRef(!1);return _.useEffect(()=>{const U=()=>f(window.innerWidth<=760);return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]),_.useEffect(()=>{if(!o||!y)return;S.current?.querySelector("a")?.focus();const U=O=>{if(O.key==="Tab"){const z=Array.from(S.current?.querySelectorAll("a[href],button:not([disabled])")||[]).filter(ea=>ea.offsetParent!==null);O.shiftKey&&document.activeElement===z[0]?(O.preventDefault(),z.at(-1)?.focus()):!O.shiftKey&&document.activeElement===z.at(-1)&&(O.preventDefault(),z[0]?.focus())}O.key==="Escape"&&(m(!1),setTimeout(()=>E.current?.focus(),0))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[o,y]),_.useEffect(()=>{if(!o||!y)return;const U=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=U}},[o,y]),_.useEffect(()=>m(!1),[g.pathname]),_.useEffect(()=>{if(!n){if(i?.is_member){h(!1);return}if(!g.pathname.startsWith("/akun")&&!L.current){try{const U=new Date().toLocaleDateString("en-CA");if(localStorage.getItem("maharati:coffee-day")===U)return;localStorage.setItem("maharati:coffee-day",U)}catch{}L.current=!0,h(!0)}}},[n,i?.is_member,g.pathname]),k.jsxs("div",{className:`shell ${j?"sidebar-collapsed":""}`,children:[k.jsx("a",{className:"skip",href:"#main",onClick:U=>{U.preventDefault(),document.getElementById("main")?.focus()},children:"Lewati ke isi"}),k.jsxs("aside",{id:"navigation",ref:S,inert:y&&!o,className:`sidebar ${o?"open":""}`,children:[k.jsxs(Ra,{className:"brand",to:"/","aria-label":"Beranda MAHARATI",title:"Beranda MAHARATI",children:[k.jsx("span",{className:"brand-mark",children:k.jsx(lt,{size:23})}),k.jsxs("span",{className:"brand-word",children:["MAHARATI",k.jsx("small",{children:"RUANG IDE GURU"})]})]}),k.jsx("button",{className:"icon-button mobile-close","aria-label":"Tutup navigasi",onClick:()=>m(!1),children:k.jsx(Uk,{})}),k.jsx("div",{className:"nav-label",children:"RUANG KERJA"}),k.jsxs("nav",{children:[MA.map(([U,O,z])=>k.jsxs(tu,{to:U,end:U==="/",title:O,"aria-label":O,children:[k.jsx(z,{size:19}),k.jsx("span",{className:"nav-text",children:O})]},U)),i?.is_admin&&k.jsxs(tu,{to:"/admin",children:[k.jsx(Ok,{size:19}),k.jsx("span",{className:"nav-text",children:"Admin"})]})]}),k.jsxs("div",{className:"sidebar-bottom",children:[k.jsxs("div",{className:"coffee-mini",children:[k.jsx(xo,{size:24}),k.jsx("strong",{children:"Ide baik tumbuh bersama."}),k.jsx("p",{children:"Dukung ruang berbagi untuk guru Indonesia."}),k.jsxs(Ra,{to:"/kopi",children:["Traktir kopi ",k.jsx(Jt,{size:16})]})]}),k.jsxs("small",{children:["Dirancang untuk pendidik.",k.jsx("br",{}),"Dikembangkan bersama Anda."]})]})]}),k.jsx("button",{className:"icon-button desktop-toggle sidebar-edge-toggle","aria-label":j?"Perluas sidebar":"Minimalkan sidebar",title:j?"Perluas sidebar":"Minimalkan sidebar","aria-expanded":!j,"aria-controls":"navigation",onClick:P,children:j?k.jsx(Dj,{size:19}):k.jsx(Oj,{size:19})}),o&&k.jsx("button",{className:"nav-overlay","aria-label":"Tutup navigasi",onClick:()=>m(!1)}),k.jsxs("div",{className:"workspace",inert:y&&o,children:[k.jsxs("header",{className:"topbar",children:[k.jsx("button",{className:"icon-button mobile-menu","aria-label":"Buka navigasi",ref:E,"aria-expanded":o,"aria-controls":"navigation",onClick:()=>m(!0),children:k.jsx(Vj,{})}),k.jsx("span",{className:"top-caption",children:"Ide Anda. Kemungkinan tanpa batas."}),k.jsxs(Ra,{className:"account-pill",to:"/akun",children:[k.jsx("span",{className:"avatar",children:i?.display_name?.[0]||k.jsx(ru,{size:18})}),k.jsxs("span",{children:[i?.display_name||"Ruang Guru",k.jsx("small",{children:i?.is_member?"Member seumur hidup":"Akses gratis"})]})]})]}),k.jsxs("main",{id:"main",tabIndex:-1,children:[u&&k.jsx(se,{children:u}),k.jsx(Fv,{})]}),k.jsxs("footer",{children:["MAHARATI ",k.jsx("span",{children:"Ruang ide, karya, dan pembelajaran."}),k.jsx(Ra,{to:"/akun",children:"Data & akun"})]})]}),c&&k.jsxs(Ui,{title:"Secangkir kopi untuk ide berikutnya ☕",onClose:()=>h(!1),children:[k.jsx("p",{children:"Seluruh prompt MAHARATI dapat digunakan gratis. Dukungan Anda membantu merawat dan mengembangkan ruang ini."}),k.jsxs("div",{className:"member-highlight",children:[k.jsx("strong",{children:"Dukungan mulai Rp25.000"}),k.jsx("p",{children:"Setelah diverifikasi: member seumur hidup selama layanan beroperasi, 100 proyek tersimpan, dan bebas pop-up."})]}),k.jsxs(Ra,{className:"button amber",to:"/kopi",onClick:()=>h(!1),children:["Traktir Kopi ",k.jsx(Jt,{size:17})]}),k.jsx("button",{className:"button secondary",onClick:()=>h(!1),children:"Lanjut Gratis"}),k.jsx("button",{className:"text-button",disabled:b.busy,onClick:()=>{b.run(async()=>{await r()},"")},children:"Sudah member? Masuk dengan Google"}),b.message&&k.jsx(se,{children:b.message})]})]})}const RA={book:xk,image:Jj,game:Ij,code:Uj,video:Wj};function bg({home:i=!1}){const[n,r]=_.useState(""),[u,o]=Eo(),m=Gt.some(S=>S.id===u.get("category"))?u.get("category"):"perencanaan",c=S=>o({category:S}),{profile:h,user:g}=zn(),{state:b}=Kr(),[y,f]=_.useState([]),[j,T]=_.useState("");_.useEffect(()=>{let S=!0;return f([]),i&&h?.is_member&&fa&&fa.from("projects").select("*").order("updated_at",{ascending:!1}).limit(3).then(({data:L,error:U})=>{S&&(f(L||[]),T(U?"Proyek terakhir belum dapat dimuat.":""))}),()=>{S=!1}},[i,h?.is_member,g?.id]);const P=Gt.find(S=>S.id===m),E=uu.filter(S=>S.category===m&&(S.title+" "+S.description).toLowerCase().includes(n.toLowerCase()));return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:i?"SELAMAT DATANG DI MAHARATI":"PERPUSTAKAAN PROMPT"}),i?k.jsxs("section",{className:"hero",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"hero-tag",children:[k.jsx(lt,{size:15})," Dari ide menjadi pembelajaran"]}),k.jsxs("h1",{children:["Lebih banyak inspirasi.",k.jsx("br",{}),k.jsx("em",{children:"Lebih mudah berkarya."})]}),k.jsx("p",{children:"Temukan prompt yang Anda perlukan. Isi sesuai kebutuhan, salin, lalu gunakan di layanan AI pilihan Anda."}),k.jsxs(Ra,{className:"button",to:"/prompt",children:["Jelajahi prompt ",k.jsx(iu,{size:18})]}),k.jsx("span",{className:"hero-note",children:"Gratis untuk semua guru"})]}),k.jsxs("div",{className:"hero-art","aria-hidden":"true",children:[k.jsx("div",{className:"orbit one"}),k.jsx("div",{className:"orbit two"}),k.jsxs("div",{className:"art-card top",children:[k.jsx(xk,{}),k.jsx("span",{children:"Rencana yang terarah"})]}),k.jsxs("div",{className:"art-main",children:[k.jsx(lt,{size:44}),k.jsxs("strong",{children:["Ruang untuk",k.jsx("br",{}),"ide hebat Anda."]}),k.jsxs("div",{className:"art-lines",children:[k.jsx("i",{}),k.jsx("i",{}),k.jsx("i",{})]})]}),k.jsxs("div",{className:"art-card bottom",children:[k.jsx("span",{className:"green-dot"}),"Siap menginspirasi kelas"]})]})]}):k.jsxs(k.Fragment,{children:[k.jsx("h1",{children:"Prompt untuk setiap ide."}),k.jsx("p",{className:"lead",children:"Pilih kebutuhan Anda. Semua prompt dapat diakses langsung."})]}),i&&k.jsx(Zj,{}),k.jsxs(Ra,{className:"profile-banner",to:"/profil",children:[k.jsxs("span",{children:[k.jsx("strong",{children:b.profile.mapel?`${b.profile.mapel} · Kelas ${b.profile.kelas||"belum diisi"}`:"Mulai dengan profil mengajar Anda"}),k.jsx("small",{children:"Isi mapel, fase, dan kelas sekali untuk digunakan di berbagai prompt."})]}),k.jsx("span",{children:"Atur profil →"})]}),k.jsxs("div",{className:"section-heading",children:[k.jsxs("div",{children:[k.jsx("h2",{children:"Mulai dari kebutuhan Anda"}),k.jsx("p",{children:"Satu ruang, beragam kemungkinan."})]}),k.jsxs("span",{className:"badge",children:[Gt.length," kategori"]})]}),k.jsx("div",{className:"category-grid",children:Gt.map(S=>{const L=RA[S.icon];return k.jsxs("button",{className:`category-card cat-${S.id} ${m===S.id?"selected":""}`,onClick:()=>{c(S.id),r("")},"aria-pressed":m===S.id,children:[k.jsx("span",{className:`category-icon ${S.id}`,children:k.jsx(L,{size:24})}),k.jsx("strong",{children:S.short}),k.jsx("small",{children:S.ready?S.id==="website"?"Langsung ke Gems":`${uu.filter(U=>U.category===S.id).length} generator`:"Segera Hadir"})]},S.id)})}),k.jsxs("section",{className:"catalog-section",children:[k.jsxs("div",{className:"section-heading",children:[k.jsxs("div",{children:[k.jsx("h2",{children:P.name}),k.jsx("p",{children:P.description})]}),P.ready&&k.jsxs("label",{className:"search",children:[k.jsx(Xj,{size:18}),k.jsx("input",{"aria-label":"Cari prompt",placeholder:"Cari prompt…",value:n,onChange:S=>r(S.target.value)})]})]}),P.ready?k.jsxs(k.Fragment,{children:[P.id==="perencanaan"&&k.jsxs("details",{className:"guide",children:[k.jsx("summary",{children:"Panduan bertahap — mulai dari mana?"}),k.jsx("p",{children:"Siapkan sumber di percakapan AI yang sama. Setiap langkah dapat dibuka langsung."}),[["cp-bse","waktu","prota"],["waktu","aktivitas","gambaran-asesmen","rpp","asesmen-rpp","lkpd"],["cp-bse","blueprint","soal","analisis"]].map((S,L)=>k.jsx("div",{className:"guide-path",children:S.map((U,O)=>k.jsxs("span",{children:[O>0&&" → ",k.jsx(Ra,{to:"/prompt/"+U,children:uu.find(z=>z.id===U)?.title})]},U))},L)),k.jsx("p",{children:"Alternatif TP dengan AI merupakan langkah pilihan setelah analisis BSE. Panduan tidak mengambil hasil percakapan AI secara otomatis."})]}),k.jsx("div",{className:"prompt-grid",children:E.map((S,L)=>k.jsxs(Ra,{className:"prompt-card",to:"/prompt/"+S.id,children:[k.jsxs("div",{className:"card-top",children:[k.jsx("span",{className:"badge",children:S.group}),k.jsx(Jt,{size:18})]}),k.jsx("span",{className:"card-number",children:String(L+1).padStart(2,"0")}),k.jsx("h3",{children:S.title}),k.jsx("p",{children:S.description}),k.jsxs("div",{className:"card-bottom",children:[S.id==="aplikasi-website"?"Buka Gems Gemini":S.fields.length?"Isi sesuai kebutuhan":"Langsung salin",k.jsx(iu,{size:16})]})]},S.id))}),!E.length&&k.jsx("p",{children:"Tidak ada prompt yang cocok. Coba kata lain."})]}):k.jsxs("div",{className:"coming-soon",children:[k.jsx(lt,{size:32}),k.jsx("h3",{children:"Ide berikutnya sedang disiapkan."}),k.jsx("p",{children:"Prompt kategori ini akan tersedia setelah referensinya selesai ditinjau."}),k.jsx("button",{className:"button secondary",onClick:()=>c("perencanaan"),children:"Buka Perencanaan Pembelajaran"})]})]}),i&&h?.is_member&&k.jsxs("section",{children:[k.jsxs("div",{className:"section-heading",children:[k.jsx("h2",{children:"Proyek terakhir"}),k.jsx(Ra,{to:"/proyek",children:"Lihat semua →"})]}),j&&k.jsx("p",{role:"status",children:j}),y.map(S=>k.jsxs(Ra,{className:"project-row",to:"/prompt/"+S.template_id+"?project="+S.id,children:[k.jsx("strong",{children:S.title}),k.jsx("span",{children:mt(S.updated_at)}),k.jsx(Jt,{size:18})]},S.id)),!y.length&&!j&&k.jsx("p",{children:"Proyek yang Anda simpan ke akun akan muncul di sini."})]})]})}function NA({id:i,value:n,options:r,onChange:u,placeholder:o,invalid:m}){const[c,h]=_.useState(!!n&&!r.includes(n));return _.useEffect(()=>{n&&h(!r.includes(n))},[n,r]),k.jsxs(k.Fragment,{children:[k.jsxs("select",{id:i,"aria-invalid":m,value:c?"__custom__":n,onChange:g=>{h(g.target.value==="__custom__"),u(g.target.value==="__custom__"?"":g.target.value)},children:[k.jsx("option",{value:"",children:"Pilih…"}),r.map(g=>k.jsx("option",{children:g},g)),k.jsx("option",{value:"__custom__",children:"Isi sendiri…"})]}),c&&k.jsx("input",{"aria-label":"Isian sendiri",placeholder:o||"Tuliskan pilihan Anda",value:n,"aria-invalid":m,onChange:g=>u(g.target.value)})]})}function xA(){const{id:i="cp-bse"}=vk(),n=Qs(),[r,u]=Eo(),o=Io(i==="promes"?"prota":i),{state:m,setState:c}=Kr(),{profile:h,user:g}=zn(),b=Xt(),[y,f]=_.useState([]),[j,T]=_.useState(""),[P,E]=_.useState(!1),[S,L]=_.useState(""),[U,O]=_.useState(null),[z,ea]=_.useState(null),W=_.useRef(null),q=r.get("project");if(_.useEffect(()=>{i==="notebook-video"&&!q&&(c(R=>({...R,drafts:{...R.drafts,"notebook-buku":{...R.drafts["notebook-buku"],bab:R.drafts["notebook-buku"]?.bab||R.drafts["notebook-video"]?.bab||""}}})),n("/prompt/notebook-buku",{replace:!0}))},[i,q]),_.useEffect(()=>{f([]),O(null),T(""),L(o?.title||"")},[i]),_.useEffect(()=>{let R=!0;return O(null),q&&g&&fa&&fa.from("projects").select("*").eq("id",q).single().then(({data:G,error:Q})=>{if(R){if(Q){b.setMessage("Proyek tidak dapat dibuka. Periksa akun dan koneksi Anda.");return}if(G.template_id!==o?.id){b.setMessage("Jenis template proyek tidak sesuai halaman ini.");return}O(G),L(G.title),c(X=>({...X,profile:{...X.profile,...G.profile},drafts:{...X.drafts,...G.drafts}})),G.template_version!==o?.version&&b.setMessage("Template telah diperbarui. Isian dimuat; hasil terakhir tersedia di Proyek Saya.")}}),()=>{R=!1}},[q,g?.id,o?.id]),!o)return k.jsxs("div",{className:"empty",children:[k.jsx("h1",{children:"Prompt tidak ditemukan"}),k.jsx(Ra,{to:"/prompt",children:"Kembali ke kumpulan prompt"})]});const ia=o.id==="prota"?[o,Io("promes")]:[o],ya=ia.flatMap(R=>R.stages?.map(G=>({template:R,stage:G.id,title:G.title,key:R.id+":"+G.id}))||[{template:R,stage:"",title:R.title,key:R.id}]),Pa=Array.from(new Map(ia.flatMap(R=>R.fields).map(R=>[R.id,R])).values()),wa=Object.assign({},...ia.map(R=>su(R,m)));function Ma(R,G){f([]),T(""),c(Q=>{if(R.shared)return Oo(Q,R.id,G);let X={...Q.drafts[o.id],[R.id]:G};for(const ma of o.fields.filter(Va=>Va.dependsOn===R.id))X[ma.id]="";return R.id==="cognitivePreset"&&(X=n0(X,G)),["lots","mots","hots"].includes(R.id)&&(X.cognitivePreset="Custom"),{...Q,drafts:{...Q.drafts,[o.id]:X}}})}async function I(R,G=""){const Q=su(R,m),X=s0(R,Q);if(f(X),X.length){setTimeout(()=>W.current?.focus(),0);return}const ma=Lo(R,Q,G);try{await navigator.clipboard.writeText(ma),T(R.id+(G?":"+G:""))}catch{ea(ma)}}async function oa(){if(!fa||!h?.is_member)throw Error("Penyimpanan daring tersedia untuk member aktif.");if(!S.trim())throw Error("Isi judul proyek.");const R=Object.fromEntries(ia.map(X=>[X.id,m.drafts[X.id]||{}])),G={title:S.trim(),template_id:o.id,template_version:o.version,profile:m.profile,drafts:R,outputs:Object.fromEntries(ya.map(X=>[X.key,Lo(X.template,su(X.template,m),X.stage)]))},Q=U?await fa.from("projects").update(G).eq("id",U.id).eq("updated_at",U.updated_at).select().single():await fa.from("projects").insert(G).select().single();if(Q.error)throw U&&Q.error.code==="PGRST116"?Error("Proyek berubah di perangkat lain. Muat ulang proyek sebelum menyimpan kembali, atau simpan sebagai proyek baru."):Q.error;O(Q.data),u({project:Q.data.id},{replace:!0}),E(!1)}function pa(R){if(!Ko(R,wa))return null;const G=wa[R.id]??"";if(R.type==="multiselect")return k.jsxs("fieldset",{className:"dimension-field",children:[k.jsxs("legend",{children:[R.label,R.required?" *":""]}),Ur(R,wa).map(X=>k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:Array.isArray(G)&&G.includes(X),onChange:ma=>Ma(R,ma.target.checked?[...Array.isArray(G)?G:[],X]:(Array.isArray(G)?G:[]).filter(Va=>Va!==X))}),X]},X))]},R.id);const Q={id:"f-"+R.id,"aria-invalid":y.some(X=>X.id===R.id),"aria-describedby":R.help?"help-"+R.id:void 0};return R.type==="dimensions"?k.jsxs("fieldset",{className:"dimension-field",children:[k.jsxs("legend",{children:[R.label,R.required?" *":" (opsional)"]}),k.jsx("p",{className:"muted",children:R.help}),Ti(wa)&&k.jsx(se,{children:Ti(wa)}),k.jsxs("p",{className:"reference-note",children:["Rujukan: ",Br(wa)||"pilih fase dan jenjang",". Fase A–C memakai tabel SD; E–F memakai SMA/SMK."," ",k.jsx("a",{href:zk("assets/profil-lulusan-058-2025.pdf"),target:"_blank",rel:"noopener noreferrer",children:"Baca dokumen BSKAP ↗"})]}),!Or(R,wa).length&&k.jsx(se,{children:"Pilih fase dan jenjang terlebih dahulu untuk menampilkan subdimensi yang sesuai."}),Or(R,wa).map(X=>k.jsxs("details",{children:[k.jsx("summary",{children:X.header}),X.items.map(ma=>k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:Array.isArray(G)&&G.includes(ma.id),onChange:Va=>Ma(R,Va.target.checked?[...Array.isArray(G)?G:[],ma.id]:(Array.isArray(G)?G:[]).filter(Ue=>Ue!==ma.id))}),k.jsxs("span",{children:[k.jsx("strong",{children:ma.label||ma.text.split(`
`)[0]}),k.jsx("span",{className:"dimension-detail",children:ma.text.split(`
`).slice(1).join(`
`)}),ma.pages&&k.jsxs("small",{children:["Rujukan halaman ",ma.pages.join(", ")]})]})]},ma.id))]},X.header))]},R.id):k.jsxs("div",{className:"field",children:[k.jsxs("label",{htmlFor:Q.id,children:[R.label," ",k.jsx("small",{children:R.required?"* wajib":"opsional"})]}),R.type==="combo"?k.jsx(NA,{id:Q.id,invalid:Q["aria-invalid"],value:String(G),options:Ur(R,wa),onChange:X=>Ma(R,X),placeholder:R.placeholder},o.id+R.id):["select","preset"].includes(R.type)?k.jsxs("select",{...Q,value:String(G),onChange:X=>Ma(R,X.target.value),children:[k.jsx("option",{value:"",children:"Pilih…"}),Ur(R,wa).map(X=>k.jsx("option",{children:X},X))]}):R.type==="textarea"?k.jsx("textarea",{...Q,rows:4,value:String(G),onChange:X=>Ma(R,X.target.value),placeholder:R.placeholder}):k.jsx("input",{...Q,type:R.type==="number"?"number":"text",min:R.min,max:R.max,step:R.decimal?"any":1,value:String(G),placeholder:R.placeholder,onChange:X=>Ma(R,X.target.value)}),R.help&&k.jsx("small",{id:"help-"+R.id,children:R.help})]},R.id)}return k.jsxs(k.Fragment,{children:[k.jsxs(Ra,{className:"back-link",to:"/prompt?category="+o.category,children:[k.jsx(Nk,{size:16}),"Kumpulan prompt"]}),k.jsxs("div",{className:"eyebrow",children:[Gt.find(R=>R.id===o.category)?.name.toUpperCase()," /"," ",o.group.toUpperCase()]}),k.jsx("h1",{children:o.id==="prota"?"Prota & Prosem":o.title}),k.jsx("p",{className:"lead",children:o.description}),k.jsxs("div",{className:"prompt-profile",children:[k.jsxs("span",{children:["Identitas bersama: ",m.profile.mapel||"mapel belum diisi"," · Fase"," ",m.profile.fase||"—"," · Kelas ",m.profile.kelas||"—"]}),k.jsx(Ra,{to:"/profil",children:"Atur profil mengajar →"})]}),o.id.startsWith("lkpd")&&k.jsx("nav",{className:"lkpd-tabs","aria-label":"Jenis LKPD",children:[["lkpd","Lanjut dari RPP"],["lkpd-baru","Buat LKPD baru"],["lkpd-gambar","Jadikan gambar 1 halaman"]].map(([R,G])=>k.jsx(Ra,{className:o.id===R?"active":"",to:"/prompt/"+R,children:G},R))}),o.externalLink&&k.jsxs("a",{className:"button secondary",href:o.externalLink.url,target:"_blank",rel:"noopener noreferrer",children:[o.externalLink.label," ↗"]}),k.jsxs("div",{className:"source-box",children:[k.jsx(Gj,{size:20}),k.jsxs("div",{children:[k.jsx("strong",{children:"Siapkan di percakapan AI Anda"}),k.jsx("ul",{children:Array.from(new Set(ia.flatMap(R=>R.needs))).map(R=>k.jsx("li",{children:R},R))}),k.jsx("p",{children:"Gunakan prompt lanjutan dalam percakapan yang memiliki sumber sebelumnya. MAHARATI tidak membaca percakapan AI Anda."}),ia.some(R=>R.id==="rpp"||R.needs.some(G=>G.includes("TEMPLATE RPP")))&&k.jsxs("a",{href:zk("assets/template-rpp.docx"),download:!0,className:"download",children:[k.jsx(Lj,{size:16}),"Unduh Template RPP"]})]})]}),o.note&&k.jsx(se,{children:o.note}),b.message&&k.jsx(se,{children:b.message}),k.jsxs("div",{className:"editor-grid",children:[k.jsxs("section",{className:"panel form-panel",children:[k.jsxs("div",{className:"panel-heading",children:[k.jsx("h2",{children:"Sesuaikan kebutuhan"}),k.jsx("span",{className:"badge",children:"Draf lokal"})]}),o.example&&k.jsxs("div",{className:"example-box",children:[k.jsx("button",{className:"button secondary",onClick:()=>{c(R=>{const G={...R.profile},Q={...R.drafts[o.id]};for(const X of o.fields)o.example?.[X.id]!==void 0&&((X.shared?G:Q)[X.id]=o.example[X.id]);return{...R,profile:G,drafts:{...R.drafts,[o.id]:Q}}}),f([]),b.setMessage("Contoh dimuat. Silakan ubah sesuai kebutuhan Anda.")},children:"Gunakan contoh isian"}),k.jsx("p",{className:"muted",children:"Mengganti isian formulir ini dengan contoh. Contoh bukan data awal untuk semua guru."})]}),o.id==="rpp"&&k.jsxs("div",{className:"segmented",children:[k.jsx("button",{className:wa.mode==="form"?"active":"",onClick:()=>Ma({id:"mode"},"form"),children:"Isi formulir"}),k.jsx("button",{className:wa.mode==="paste"?"active":"",onClick:()=>Ma({id:"mode"},"paste"),children:"Tempel data kendali"})]}),o.id==="rpp"&&wa.mode==="paste"?k.jsxs("div",{className:"field",children:[k.jsx("label",{htmlFor:"kendali",children:"Data kendali modul *"}),k.jsx("textarea",{id:"kendali",rows:15,value:String(wa.kendali),onChange:R=>Ma({id:"kendali"},R.target.value)})]}):Pa.length?Pa.map(pa):k.jsxs("div",{className:"empty small",children:[k.jsx(No,{}),k.jsx("h3",{children:"Prompt siap digunakan."}),k.jsx("p",{children:"Tidak ada isian khusus. Pastikan dokumen sumber tersedia di layanan AI Anda."})]}),k.jsx("p",{className:"muted",children:"Isian lokal tersimpan di browser ini dan tidak otomatis tersinkron. Data dapat hilang saat data browser dihapus."}),k.jsxs("button",{className:"button full",onClick:()=>{if(!h?.is_member){b.setMessage("Masuk sebagai member untuk menyimpan proyek. Draf lokal Anda tetap tersedia.");return}E(!0)},children:[k.jsx(Yj,{size:17}),"Simpan ke Akun"]}),!h?.is_member&&k.jsx(Ra,{className:"text-button",to:"/kopi",children:"Tentang akses member"})]}),k.jsxs("section",{className:"preview-panel",children:[k.jsxs("div",{className:"panel-heading",children:[k.jsx("h2",{children:"Pratinjau prompt"}),k.jsx("span",{className:"badge",children:"Teks lengkap"})]}),y.length>0&&k.jsxs("div",{className:"errors",role:"alert",tabIndex:-1,ref:W,children:[k.jsx("strong",{children:"Lengkapi isian berikut:"}),k.jsx("ul",{children:y.map((R,G)=>k.jsx("li",{children:R.message},G))})]}),ya.map(R=>k.jsxs("div",{className:"output",children:[k.jsxs("div",{className:"output-heading",children:[k.jsx("h3",{children:R.title}),k.jsxs("button",{className:"button",onClick:()=>{I(R.template,R.stage)},children:[j===R.key?k.jsx(No,{size:16}):k.jsx(Co,{size:16})," ",j===R.key?"Tersalin":"Salin Prompt"]})]}),k.jsx("textarea",{"aria-label":"Pratinjau "+R.title,readOnly:!0,value:Lo(R.template,su(R.template,m),R.stage)}),k.jsxs("small",{children:["Sumber: ",R.template.source," · Versi ",R.template.version]})]},R.key))]})]}),k.jsxs("section",{className:"ai-guide panel",children:[k.jsx("h2",{children:"Langkah berikutnya"}),k.jsx("p",{children:"1. Salin prompt. 2. Buka AI pilihan Anda. 3. Tempel prompt dan lampirkan sumber yang diperlukan di sana. Untuk prompt lanjutan, gunakan percakapan yang sudah memuat sumber sebelumnya."}),k.jsx("div",{className:"ai-links",children:(o.id.startsWith("notebook")?[["NotebookLM","https://notebooklm.google.com/"]]:[["ChatGPT","https://chatgpt.com/"],["Gemini","https://gemini.google.com/"],["Claude","https://claude.ai/"]]).map(([R,G])=>k.jsxs("a",{className:"button secondary",href:G,target:"_blank",rel:"noopener noreferrer",children:["Buka ",R," ↗"]},R))}),k.jsx("small",{children:"Anda juga dapat memakai AI lain. Membuka tautan tidak mengirim isian atau prompt secara otomatis."})]}),P&&k.jsx(Ui,{title:U?"Simpan perubahan proyek":"Simpan proyek baru",onClose:()=>E(!1),children:k.jsxs("form",{onSubmit:R=>{R.preventDefault(),b.run(oa,"Proyek tersimpan ke akun.")},children:[k.jsxs("label",{className:"field",children:["Judul proyek",k.jsx("input",{autoFocus:!0,required:!0,maxLength:150,value:S,onChange:R=>L(R.target.value)})]}),k.jsx("p",{children:"Isian saat ini dan hasil prompt disimpan ke akun. Maksimal 100 proyek."}),b.message&&k.jsx(se,{children:b.message}),k.jsx("button",{className:"button",disabled:b.busy,children:"Simpan"}),U&&k.jsx("button",{type:"button",className:"button secondary",onClick:()=>{O(null),u({})},children:"Simpan sebagai proyek baru"})]})}),z!==null&&k.jsxs(Ui,{title:"Salin prompt secara manual",onClose:()=>ea(null),children:[k.jsx("p",{children:"Clipboard tidak tersedia. Pilih teks berikut, lalu salin."}),k.jsx("textarea",{autoFocus:!0,rows:14,value:z,readOnly:!0,onFocus:R=>R.target.select(),"aria-label":"Teks untuk disalin manual"})]})]})}function CA(){const{profile:i,user:n,loading:r}=zn(),[u,o]=_.useState([]),[m,c]=_.useState(null),[h,g]=_.useState(""),[b,y]=_.useState(""),f=Xt();async function j(){if(!fa)return;const{data:P,error:E}=await fa.from("projects").select("*").order("updated_at",{ascending:!1});if(E)throw E;o(P||[])}_.useEffect(()=>{o([]),i?.is_member&&f.run(j,"")},[n?.id,i?.is_member]);async function T(){if(!fa||!m)return;let P;if(h==="delete")P=await fa.from("projects").delete().eq("id",m.id);else if(h==="rename")P=await fa.from("projects").update({title:b.trim()}).eq("id",m.id);else{const{template_id:E,template_version:S,profile:L,drafts:U,outputs:O}=m;P=await fa.from("projects").insert({template_id:E,template_version:S,profile:L,drafts:U,outputs:O,title:("Salinan "+m.title).slice(0,150)})}if(P.error)throw P.error;c(null),await j()}return r?k.jsx("p",{children:"Memuat akun…"}):i?.is_member?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"RUANG KERJA PRIBADI"}),k.jsx("h1",{children:"Proyek Saya"}),k.jsxs("p",{className:"lead",children:["Lanjutkan ide Anda, kapan saja. ",u.length," / 100 proyek tersimpan."]}),f.message&&k.jsx(se,{children:f.message}),k.jsx("button",{className:"button secondary",disabled:f.busy,onClick:()=>{f.run(j,"Daftar diperbarui.")},children:"Muat ulang"}),u.length===0&&k.jsxs(Zr,{title:"Belum ada proyek",children:[k.jsx("p",{children:"Buka prompt, isi kebutuhan, lalu pilih Simpan ke Akun."}),k.jsx(Ra,{to:"/prompt",className:"button",children:"Mulai proyek pertama"})]}),u.map(P=>k.jsxs("article",{className:"project-item panel",children:[k.jsxs("div",{children:[k.jsx("h2",{children:P.title}),k.jsxs("p",{children:[P.template_id," · Diperbarui ",mt(P.updated_at)]})]}),k.jsxs("div",{className:"actions",children:[k.jsxs(Ra,{className:"button",to:"/prompt/"+P.template_id+"?project="+P.id,children:["Buka ",k.jsx(Jt,{size:16})]}),[["rename","Ganti nama",Fj],["duplicate","Gandakan",Co],["delete","Hapus",Qj]].map(([E,S,L])=>{const U=L;return k.jsx("button",{className:"icon-button","aria-label":S+" "+P.title,title:String(S),onClick:()=>{c(P),g(String(E)),y(P.title)},children:k.jsx(U,{size:17})},String(E))})]}),k.jsxs("details",{children:[k.jsx("summary",{children:"Hasil prompt terakhir"}),Object.entries(P.outputs).map(([E,S])=>k.jsxs("label",{className:"field",children:[E,k.jsx("textarea",{readOnly:!0,rows:10,value:S})]},E))]})]},P.id)),m&&k.jsx(Ui,{title:h==="delete"?"Hapus proyek?":h==="rename"?"Ganti nama proyek":"Gandakan proyek?",onClose:()=>c(null),children:k.jsxs("form",{onSubmit:P=>{P.preventDefault(),f.run(T)},children:[h==="rename"?k.jsxs("label",{className:"field",children:["Judul",k.jsx("input",{required:!0,maxLength:150,value:b,onChange:P=>y(P.target.value)})]}):k.jsxs("p",{children:[m.title,h==="delete"?" akan dihapus dari akun Anda.":""]}),k.jsx("button",{className:"button",disabled:f.busy,children:"Konfirmasi"}),k.jsx("button",{type:"button",className:"button secondary",onClick:()=>c(null),children:"Batal"}),f.message&&k.jsx(se,{children:f.message})]})})]}):k.jsxs(Zr,{title:"Ruang untuk proyek Anda",children:[k.jsx(Bk,{size:42}),k.jsx("p",{children:"Member dapat menyimpan 100 proyek dan membukanya kembali dari perangkat lain."}),k.jsx(Ra,{className:"button",to:"/kopi",children:"Lihat akses member"}),k.jsx(Ra,{className:"button secondary",to:"/akun",children:"Masuk"})]})}function BA(){const{user:i,profile:n,login:r,logout:u,loading:o,error:m,refresh:c}=zn(),{reset:h}=Kr(),[g,b]=_.useState(!1),[y,f]=_.useState(""),[j,T]=_.useState(""),P=Xt();return _.useEffect(()=>{f(n?.display_name||""),T(n?.institution||"")},[n?.id]),k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"AKUN MAHARATI"}),k.jsx("h1",{children:"Ruang Anda, di mana saja."}),k.jsx("p",{className:"lead",children:"Satu akun Google untuk profil, proyek, dukungan, dan kemitraan."}),!xu&&k.jsx(se,{children:$o?"Generator siap digunakan dari file lokal. Untuk login dan data Supabase, klik BUKA-DENGAN-AKUN.bat di paket ini atau buka website online.":"Konfigurasi Supabase belum tersedia. Jalankan SETEL-SUPABASE.bat atau hubungi pengelola. Generator tetap tersedia."}),(m||P.message)&&k.jsx(se,{children:m||P.message}),k.jsxs("div",{className:"two-col",children:[k.jsxs("section",{className:"panel",children:[k.jsx(Ok,{className:"big-icon"}),k.jsx("h2",{children:n?.display_name||"Selamat datang, Guru."}),o?k.jsx("p",{children:"Memuat akun…"}):i?k.jsxs(k.Fragment,{children:[k.jsx("p",{children:i.email}),k.jsx("span",{className:"badge",children:n?.is_member?"Member seumur hidup":"Akun gratis"}),k.jsxs("form",{onSubmit:E=>{E.preventDefault(),P.run(async()=>{await hn("update_profile",{p_name:y,p_institution:j}),await c()})},children:[k.jsxs("label",{className:"field",children:["Nama tampilan",k.jsx("input",{value:y,required:!0,maxLength:100,onChange:E=>f(E.target.value)})]}),k.jsxs("label",{className:"field",children:["Sekolah / instansi",k.jsx("input",{value:j,maxLength:200,onChange:E=>T(E.target.value)})]}),k.jsx("button",{className:"button",disabled:P.busy,children:"Simpan profil"})]}),k.jsx("button",{className:"text-button",onClick:()=>{P.run(u,"Anda telah keluar. Draf lokal tetap tersimpan di perangkat ini.")},children:"Keluar dari akun"})]}):k.jsxs(k.Fragment,{children:[k.jsx("p",{children:"Masuk tanpa membuat kata sandi baru. Semua prompt tetap dapat digunakan tanpa akun."}),k.jsxs("button",{className:"button",disabled:!xu||P.busy,onClick:()=>{P.run(r,"")},children:[k.jsx(qj,{size:18}),"Masuk dengan Google"]})]})]}),k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Data dan privasi"}),k.jsx("p",{children:"Draf gratis hanya berada di browser ini. Data tidak otomatis pindah ke akun saat Anda masuk."}),k.jsxs("p",{children:["Gunakan ",k.jsx("strong",{children:"Simpan ke Akun"})," untuk menyimpan proyek sebagai member. Jangan masukkan data pribadi murid ke isian prompt."]}),k.jsx("p",{children:"Bukti dukungan hanya dapat diakses pemilik pengajuan dan admin. Nama pada Wall of Thanks hanya tampil atas persetujuan Anda."}),k.jsx("button",{className:"button danger",onClick:()=>b(!0),children:"Hapus Semua Isian Lokal"}),k.jsx("p",{className:"muted",children:"Proyek di akun tidak ikut dihapus. Kelola melalui Proyek Saya."}),k.jsx(Ra,{to:"/kopi",children:"Dukungan dan akses member →"})]})]}),g&&k.jsxs(Ui,{title:"Hapus semua isian lokal?",onClose:()=>b(!1),children:[k.jsx("p",{children:"Identitas dan draf prompt di browser ini akan dikosongkan. Tindakan ini tidak menghapus proyek di akun."}),k.jsx("button",{className:"button danger",onClick:()=>{h(),b(!1),P.setMessage("Isian lokal telah dikosongkan.")},children:"Hapus isian"}),k.jsx("button",{className:"button secondary",onClick:()=>b(!1),children:"Batal"})]})]})}function OA(){const{user:i,profile:n}=zn(),[r]=Eo(),u=Xt(),[o,m]=_.useState("dukungan"),[c,h]=_.useState([]),[g,b]=_.useState([]),[y,f]=_.useState([]),[j,T]=_.useState([]),[P,E]=_.useState([]),[S,L]=_.useState([]),[U,O]=_.useState(25e3),[z,ea]=_.useState(""),[W,q]=_.useState(null),[ia,ya]=_.useState(""),[Pa,wa]=_.useState(!1),[Ma,I]=_.useState(r.get("ref")||""),[oa,pa]=_.useState(""),[R,G]=_.useState(""),Q=c.find(V=>V.id===z),[X,ma]=_.useState("");async function Va(){const V=await Promise.all([gn("payment_methods"),gn("public_wall"),gn("public_features"),gn("public_partners"),i?gn("donations"):[],i?gn("feature_requests"):[],gn("app_settings")]);h(V[0].filter(w=>w.active)),ma(V[6].find(w=>w.setting_key==="support_note")?.setting_value||""),f(V[1]),T(V[2]),L(V[3]),b(V[4].filter(w=>w.user_id===i?.id).sort((w,H)=>H.created_at.localeCompare(w.created_at))),E(V[5].filter(w=>w.user_id===i?.id))}_.useEffect(()=>{b([]),E([]),u.run(Va,"")},[i?.id]);async function Ue(){if(!W)throw Error("Pilih bukti transfer terlebih dahulu.");const V=await hg(W,"donations");try{await hn("submit_donation",{p_amount:U,p_method:z,p_proof:V,p_message:ia,p_consent:Pa,p_referral:Ma.trim().toUpperCase()||null})}catch(w){throw w}q(null),ya(""),m("status"),await Va()}return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow amber-text",children:"TUMBUH BERSAMA"}),k.jsxs("section",{className:"support-hero",children:[k.jsxs("div",{children:[k.jsxs("h1",{children:["Traktir kopi.",k.jsx("br",{}),k.jsx("em",{children:"Rawat ruang berbagi."})]}),k.jsx("p",{children:"Setiap dukungan membantu MAHARATI tetap menjadi ruang inspirasi bagi guru."})]}),k.jsx(xo,{size:90})]}),k.jsx("div",{className:"segmented tabs",children:[["dukungan","Dukungan"],["status","Status Saya"],["wall","Wall of Thanks"],["fitur","Usulan & Status Fitur"]].map(([V,w])=>k.jsx("button",{className:o===V?"active":"",onClick:()=>m(V),children:w},V))}),!xu&&k.jsx(se,{children:"Pengajuan dukungan belum dibuka. Pengelola perlu mengaktifkan layanan akun dan metode pembayaran terlebih dahulu."}),u.message&&k.jsx(se,{children:u.message}),X&&k.jsx("p",{className:"muted",children:X}),o==="dukungan"&&k.jsxs("div",{className:"two-col",children:[k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Berikan dukungan"}),k.jsx("div",{className:"support-options",children:[[15e3,"☕","Secangkir Semangat","Satu tegukan semangat untuk terus berkarya."],[25e3,"📚","Teman Belajar","Mendukung pengembangan fitur untuk guru."],[5e4,"✏️","Pendukung Fitur","Membantu pemeliharaan server secara optimal."],[1e5,"🚀","Sahabat Maharati","Mendukung penuh hadirnya inovasi & fitur baru."]].map(([V,w,H,ra])=>k.jsxs("button",{type:"button",className:"support-option "+(U===V?"selected":""),"aria-pressed":U===V,onClick:()=>O(Number(V)),children:[k.jsx("span",{children:w}),k.jsx("strong",{children:De(Number(V))}),k.jsx("b",{children:H}),k.jsx("small",{children:ra})]},String(V)))}),k.jsx("p",{className:"muted",children:"Dukungan bersifat sukarela. Pilih paket atau isi nominal sendiri, berapa pun mulai Rp1. Akses member aktif setelah satu dukungan minimal Rp25.000 diverifikasi."}),i?k.jsxs("form",{onSubmit:V=>{V.preventDefault(),u.run(Ue,"Pengajuan terkirim. Tunggu verifikasi admin.")},children:[k.jsxs("label",{className:"field",children:["Nominal dukungan (Rp)",k.jsx("input",{type:"number",min:1,max:1e8,step:1,required:!0,value:U,onChange:V=>O(Number(V.target.value))})]}),k.jsxs("label",{className:"field",children:["Metode pembayaran",k.jsxs("select",{required:!0,value:z,onChange:V=>ea(V.target.value),children:[k.jsx("option",{value:"",children:"Pilih metode"}),c.map(V=>k.jsx("option",{value:V.id,children:V.label},V.id))]})]}),!c.length&&k.jsx("p",{children:"Belum ada metode pembayaran aktif. Jangan mengirim pembayaran sebelum informasi tersedia."}),Q&&k.jsxs("div",{className:"payment-info",children:[k.jsxs("small",{children:["Transfer ke ",Q.label]}),k.jsx("strong",{children:Q.account_number}),k.jsx("span",{children:Q.account_name})]}),k.jsxs("label",{className:"field",children:["Bukti transfer · JPG, PNG, PDF · maksimal 5 MB",k.jsx("input",{type:"file",required:!0,accept:"image/jpeg,image/png,application/pdf",onChange:V=>q(V.target.files?.[0]||null)})]}),k.jsxs("label",{className:"field",children:["Kode mitra (opsional)",k.jsx("input",{list:"partners",value:Ma,maxLength:30,onChange:V=>I(V.target.value)}),k.jsx("datalist",{id:"partners",children:S.map(V=>k.jsx("option",{value:V.referral_code,children:V.display_name},V.referral_code))})]}),k.jsxs("label",{className:"field",children:["Pesan dukungan (opsional)",k.jsx("textarea",{maxLength:500,value:ia,onChange:V=>ya(V.target.value)})]}),k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:Pa,onChange:V=>wa(V.target.checked)}),k.jsx("span",{children:"Tampilkan nama, nominal, dan pesan saya di Wall of Thanks setelah diverifikasi."})]}),k.jsx("button",{className:"button amber",disabled:u.busy||!c.length,children:"Kirim bukti dukungan"})]}):k.jsxs(Zr,{title:"Masuk untuk mengirim dukungan",children:[k.jsx("p",{children:"Akun digunakan untuk melacak pengajuan dan mengaktifkan keanggotaan."}),k.jsx(Ra,{className:"button",to:"/akun",children:"Masuk dengan Google"})]})]}),k.jsxs("section",{className:"panel member-panel",children:[k.jsx(Bo,{size:34}),k.jsx("h2",{children:n?.is_member?"Terima kasih, Sahabat MAHARATI.":"Menjadi Sahabat MAHARATI"}),k.jsxs("div",{className:"price",children:["Rp25.000",k.jsx("small",{children:"dukungan minimum, sekali"})]}),k.jsx("p",{children:"Akses member seumur hidup selama layanan MAHARATI beroperasi, setelah dukungan diverifikasi."}),["Simpan hingga 100 proyek","Buka isian dari perangkat lain","Kelola dan gandakan proyek","Bebas pop-up Traktir Kopi"].map(V=>k.jsxs("p",{className:"benefit",children:[k.jsx(Ck,{size:18}),V]},V)),k.jsx("p",{className:"muted",children:"Seluruh prompt tetap gratis. Dukungan di bawah Rp25.000 tidak mengaktifkan member. Pengajuan menggunakan satu transaksi, bukan akumulasi."})]})]}),o==="status"&&k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Riwayat dukungan"}),i?k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"button secondary",disabled:u.busy,onClick:()=>{u.run(Va,"Status diperbarui.")},children:"Muat ulang status"}),!g.length&&k.jsx("p",{children:"Belum ada pengajuan."}),g.map(V=>k.jsxs("article",{className:"record",children:[k.jsxs("div",{className:"section-heading",children:[k.jsx("strong",{children:De(V.amount)}),k.jsx("span",{className:"badge",children:{pending:"Menunggu",verified:"Terverifikasi",rejected:"Ditolak",reversed:"Dibatalkan"}[V.status]})]}),k.jsxs("p",{children:[mt(V.created_at)," · ",V.payment_label]}),V.review_note&&k.jsx(se,{children:V.review_note}),k.jsx("button",{className:"text-button",onClick:()=>{u.run(async()=>{const w=await Cu(V.proof_path);window.open(w,"_blank","noopener,noreferrer")},"")},children:"Lihat bukti saya"}),V.status==="rejected"&&k.jsx("button",{className:"button secondary",onClick:()=>{O(V.amount),ea(V.method_id),m("dukungan")},children:"Ajukan ulang"}),k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:V.wall_consent,disabled:u.busy,onChange:w=>{u.run(async()=>{await hn("set_wall_consent",{p_id:V.id,p_consent:w.target.checked}),await Va()})}}),k.jsx("span",{children:"Izinkan tampil di Wall of Thanks"})]})]},V.id))]}):k.jsx(Ra,{to:"/akun",children:"Masuk untuk melihat status"})]}),o==="wall"&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"section-heading",children:[k.jsx("h2",{children:"Terima kasih sudah ikut merawat MAHARATI."}),k.jsx(Bo,{size:24})]}),k.jsx("div",{className:"prompt-grid",children:y.map((V,w)=>k.jsxs("article",{className:"panel thanks-card",children:[k.jsx(Bo,{}),k.jsx("h3",{children:V.display_name}),k.jsx("strong",{children:De(V.amount)}),k.jsx("p",{children:V.message||"Mendukung ruang ide guru."})]},w))}),!y.length&&k.jsx(Zr,{title:"Ruang apresiasi untuk para pendukung",children:k.jsx("p",{children:"Dukungan terverifikasi akan tampil di sini jika pemberi dukungan menyetujuinya."})})]}),o==="fitur"&&k.jsxs("div",{className:"two-col",children:[k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Apa yang ingin Anda lihat berikutnya?"}),i?k.jsxs("form",{onSubmit:V=>{V.preventDefault(),u.run(async()=>{await hn("submit_feature",{p_title:oa,p_details:R}),pa(""),G(""),await Va()},"Usulan dikirim untuk ditinjau admin.")},children:[k.jsxs("label",{className:"field",children:["Judul usulan",k.jsx("input",{required:!0,maxLength:150,value:oa,onChange:V=>pa(V.target.value)})]}),k.jsxs("label",{className:"field",children:["Ceritakan kebutuhan Anda",k.jsx("textarea",{required:!0,maxLength:2e3,value:R,onChange:V=>G(V.target.value)})]}),k.jsx("button",{className:"button",disabled:u.busy,children:"Kirim usulan"})]}):k.jsx(Ra,{to:"/akun",children:"Masuk untuk mengirim usulan"}),P.length>0&&k.jsxs(k.Fragment,{children:[k.jsx("h3",{children:"Usulan saya"}),P.map(V=>k.jsxs("div",{className:"record",children:[k.jsx("strong",{children:V.title}),k.jsxs("p",{children:[V.status," ·"," ",V.is_public?"Dipublikasikan":"Belum dipublikasikan"]})]},V.id))]})]}),k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Status pengembangan"}),!j.length&&k.jsx("p",{children:"Belum ada usulan yang dipublikasikan."}),j.map((V,w)=>k.jsxs("div",{className:"record",children:[k.jsx("span",{className:"badge",children:V.status}),k.jsx("h3",{children:V.title}),k.jsx("p",{children:V.details})]},w))]})]})]})}function DA(){const{user:i}=zn(),n=Xt(),[r,u]=_.useState(null),[o,m]=_.useState([]),[c,h]=_.useState([]),[g,b]=_.useState(""),[y,f]=_.useState(""),[j,T]=_.useState(""),[P,E]=_.useState("");async function S(){const[O,z,ea]=await Promise.all([gn("partners"),gn("partner_ledger"),gn("payouts")]);u(O.find(W=>W.user_id===i?.id)||null),m(z.filter(W=>W.partner_id===i?.id)),h(ea.filter(W=>W.partner_id===i?.id))}_.useEffect(()=>{u(null),m([]),h([]),i&&n.run(S,"")},[i?.id]);const L=o.filter(O=>!O.payout_id).reduce((O,z)=>O+z.amount,0),U=o.reduce((O,z)=>{const ea=new Date(z.created_at).toLocaleDateString("id-ID",{month:"long",year:"numeric",timeZone:"Asia/Jakarta"});return(O[ea]??=[]).push(z),O},{});return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"BERSAMA MENJANGKAU LEBIH BANYAK GURU"}),k.jsx("h1",{children:"Mitra MAHARATI"}),k.jsx("p",{className:"lead",children:"Bagikan manfaatnya. Dapatkan komisi 30% dari dukungan terverifikasi melalui referral Anda."}),n.message&&k.jsx(se,{children:n.message}),i?r?.status==="approved"?k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"stats",children:[k.jsxs("div",{className:"panel",children:[k.jsx("small",{children:"Saldo belum dibayar"}),k.jsx("h2",{children:De(L)})]}),k.jsxs("div",{className:"panel",children:[k.jsx("small",{children:"Komisi dibayarkan"}),k.jsx("h2",{children:De(c.reduce((O,z)=>O+z.amount,0))})]}),k.jsxs("div",{className:"panel",children:[k.jsx("small",{children:"Kode referral"}),k.jsx("h2",{children:r.referral_code})]})]}),k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Tautan referral Anda"}),k.jsx("input",{readOnly:!0,"aria-label":"Tautan referral",value:Hk("kopi?ref=")+r.referral_code,onFocus:O=>O.target.select()}),k.jsxs("button",{className:"button secondary",onClick:()=>{n.run(async()=>{try{await navigator.clipboard.writeText(Hk("kopi?ref=")+r.referral_code)}catch{throw Error("Pilih tautan di atas dan salin secara manual.")}},"Tautan tersalin.")},children:[k.jsx(Co,{size:16}),"Salin tautan"]}),k.jsx("p",{children:"Referral diri sendiri tidak dihitung. Komisi dibayarkan manual oleh admin."}),k.jsx("button",{className:"text-button",onClick:()=>{n.run(S,"Rekap diperbarui.")},children:"Muat ulang rekap"})]}),k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Rekap komisi bulanan"}),Object.entries(U).map(([O,z])=>k.jsxs("div",{className:"record",children:[k.jsx("strong",{children:O}),k.jsx("p",{children:De((z||[]).reduce((ea,W)=>ea+W.amount,0))}),z?.map(ea=>k.jsxs("p",{children:[mt(ea.created_at)," ·"," ",ea.kind==="credit"?"Komisi":"Koreksi"," ·"," ",De(ea.amount)," ·"," ",ea.payout_id?"Dibayarkan":"Belum dibayar"]},ea.id))]},O)),!o.length&&k.jsx("p",{children:"Belum ada komisi tercatat."})]}),k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Riwayat pembayaran komisi"}),c.map(O=>k.jsxs("div",{className:"record",children:[k.jsx("strong",{children:De(O.amount)}),k.jsxs("p",{children:[mt(O.created_at)," · sampai periode ",O.period]}),k.jsx("button",{className:"text-button",onClick:()=>{n.run(async()=>{window.open(await Cu(O.proof_path),"_blank","noopener,noreferrer")},"")},children:"Lihat bukti pembayaran"})]},O.id))]})]}):k.jsxs("section",{className:"panel narrow",children:[k.jsx("h2",{children:"Permohonan mitra"}),r&&k.jsxs(se,{children:["Status:"," ",r.status==="pending"?"Menunggu pemeriksaan":r.status==="rejected"?"Ditolak":"Dinonaktifkan",". ",r.review_note]}),(!r||r.status==="rejected")&&k.jsxs("form",{onSubmit:O=>{O.preventDefault(),n.run(async()=>{await hn("apply_partner",{p_reason:g,p_payment_method:y,p_account_number:j,p_account_name:P}),await S()},"Permohonan mitra terkirim.")},children:[k.jsxs("label",{className:"field",children:["Bagaimana Anda akan memperkenalkan MAHARATI?",k.jsx("textarea",{required:!0,maxLength:2e3,value:g,onChange:O=>b(O.target.value)})]}),k.jsxs("label",{className:"field",children:["Bank / e-wallet penerima komisi",k.jsx("input",{required:!0,maxLength:80,value:y,onChange:O=>f(O.target.value)})]}),k.jsxs("label",{className:"field",children:["Nomor rekening / e-wallet",k.jsx("input",{required:!0,maxLength:80,value:j,onChange:O=>T(O.target.value)})]}),k.jsxs("label",{className:"field",children:["Nama pemilik rekening",k.jsx("input",{required:!0,maxLength:100,value:P,onChange:O=>E(O.target.value)})]}),k.jsx("p",{children:"Data rekening hanya dapat dilihat Anda dan admin. Nama tampilan dan kode referral akan tampil pada pilihan mitra setelah disetujui."}),k.jsx("button",{className:"button",disabled:n.busy,children:"Ajukan kemitraan"})]}),k.jsx("button",{className:"text-button",onClick:()=>{n.run(S,"Status diperbarui.")},children:"Muat ulang status"})]}):k.jsxs("section",{className:"empty",children:[k.jsx(Dk,{size:44}),k.jsx("h2",{children:"Mulai dari akun Anda."}),k.jsx(Ra,{className:"button",to:"/akun",children:"Masuk untuk mengajukan"})]})]})}function UA(){const{profile:i,loading:n}=zn(),r=Xt(),[u,o]=_.useState("donations"),[m,c]=_.useState({}),[h,g]=_.useState(null),[b,y]=_.useState(""),[f,j]=_.useState(""),[T,P]=_.useState("Diajukan"),[E,S]=_.useState(!1),[L,U]=_.useState(null),[O,z]=_.useState(new Date().toISOString().slice(0,7)),[ea,W]=_.useState(0),[q,ia]=_.useState({id:"",label:"",account_number:"",account_name:"",active:!0});async function ya(){const I=["donations","partners","profiles","payment_methods","feature_requests","partner_ledger","payouts","audit_log","app_settings"],oa=await Promise.all(I.map(gn));c(Object.fromEntries(I.map((pa,R)=>[pa,oa[R]])))}_.useEffect(()=>{c({}),i?.is_admin&&r.run(ya,"")},[i?.id,i?.is_admin]);function Pa(I,oa){g(I),y(oa),j(""),U(null),W(0),oa==="feature"&&(P(I.status),S(I.is_public)),oa==="method"&&ia(I)}async function wa(){if(b==="verify"||b==="reject"||b==="reverse")await hn("review_donation",{p_id:h.id,p_action:b,p_note:f});else if(["approve-partner","reject-partner","disable-partner"].includes(b))await hn("review_partner",{p_user:h.user_id,p_status:b==="approve-partner"?"approved":b==="reject-partner"?"rejected":"disabled",p_note:f});else if(b==="feature")await hn("review_feature",{p_id:h.id,p_status:T,p_public:E});else if(b==="method")await hn("save_payment_method",{p_id:q.id,p_label:q.label,p_number:q.account_number,p_name:q.account_name,p_active:q.active});else if(b==="payout"){if(!L)throw Error("Pilih bukti pembayaran komisi.");const I=await hg(L,"payouts");try{await hn("record_payout",{p_partner:h.user_id,p_period:O+"-01",p_proof:I,p_amount:ea})}catch(oa){throw oa}}g(null),await ya()}const Ma=I=>m.profiles?.find(oa=>oa.id===I)?.display_name||I;return n?k.jsx("p",{children:"Memuat hak akses…"}):i?.is_admin?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"eyebrow",children:"PENGELOLA MAHARATI"}),k.jsx("h1",{children:"Panel Admin"}),k.jsx("p",{className:"lead",children:"Periksa dukungan, kelola mitra, dan rawat layanan."}),k.jsx("div",{className:"segmented tabs",children:[["donations","Dukungan"],["partners","Mitra & Komisi"],["payment_methods","Pembayaran"],["feature_requests","Usulan Fitur"],["profiles","Member"],["audit_log","Aktivitas Admin"],["app_settings","Pengaturan"]].map(([I,oa])=>k.jsx("button",{className:u===I?"active":"",onClick:()=>o(I),children:oa},I))}),k.jsx("button",{className:"text-button",disabled:r.busy,onClick:()=>{r.run(ya,"Data diperbarui.")},children:"Muat ulang data"}),r.message&&k.jsx(se,{children:r.message}),u==="donations"&&(m.donations||[]).sort((I,oa)=>oa.created_at.localeCompare(I.created_at)).map(I=>k.jsxs("article",{className:"panel record",children:[k.jsxs("div",{className:"section-heading",children:[k.jsx("h2",{children:Ma(I.user_id)}),k.jsx("span",{className:"badge",children:I.status})]}),k.jsx("strong",{children:De(I.amount)}),k.jsxs("p",{children:[I.payment_label," · ",mt(I.created_at)]}),k.jsx("p",{children:I.message}),k.jsxs("p",{children:["Referral: ",I.referral_code||"Tanpa referral"]}),I.review_note&&k.jsxs("p",{children:["Catatan: ",I.review_note]}),k.jsxs("div",{className:"actions",children:[k.jsx("button",{className:"button secondary",onClick:()=>{r.run(async()=>{window.open(await Cu(I.proof_path),"_blank","noopener,noreferrer")},"")},children:"Periksa bukti"}),I.status==="pending"&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"button",onClick:()=>Pa(I,"verify"),children:"Verifikasi"}),k.jsx("button",{className:"button danger",onClick:()=>Pa(I,"reject"),children:"Tolak"})]}),I.status==="verified"&&k.jsx("button",{className:"button danger",onClick:()=>Pa(I,"reverse"),children:"Batalkan & catat koreksi"})]})]},I.id)),u==="partners"&&(m.partners||[]).map(I=>k.jsxs("article",{className:"panel record",children:[k.jsxs("div",{className:"section-heading",children:[k.jsx("h2",{children:Ma(I.user_id)}),k.jsx("span",{className:"badge",children:I.status})]}),k.jsx("p",{children:I.reason}),k.jsxs("p",{children:[I.payment_method," · ",I.account_number," · ",I.account_name]}),k.jsxs("p",{children:["Kode: ",I.referral_code||"Belum aktif"," · Saldo belum dibayar:"," ",De((m.partner_ledger||[]).filter(oa=>oa.partner_id===I.user_id&&!oa.payout_id).reduce((oa,pa)=>oa+pa.amount,0))]}),k.jsxs("div",{className:"actions",children:[I.status==="pending"&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"button",onClick:()=>Pa(I,"approve-partner"),children:"Setujui"}),k.jsx("button",{className:"button danger",onClick:()=>Pa(I,"reject-partner"),children:"Tolak"})]}),I.status==="approved"&&k.jsx("button",{className:"button danger",onClick:()=>Pa(I,"disable-partner"),children:"Nonaktifkan referral"}),["approved","disabled"].includes(I.status)&&k.jsx("button",{className:"button secondary",onClick:()=>Pa(I,"payout"),children:"Catat pembayaran komisi"})]}),(m.payouts||[]).filter(oa=>oa.partner_id===I.user_id).map(oa=>k.jsxs("p",{children:["Dibayar ",De(oa.amount)," · ",mt(oa.created_at)," ",k.jsx("button",{className:"text-button",onClick:()=>{r.run(async()=>{window.open(await Cu(oa.proof_path),"_blank","noopener,noreferrer")},"")},children:"Bukti"})]},oa.id))]},I.user_id)),u==="app_settings"&&k.jsxs("section",{className:"panel",children:[k.jsx("h2",{children:"Pengaturan aplikasi"}),k.jsx("p",{children:"Rahasia penghubung Drive disimpan pada server, bukan di sini. Pemeriksaan ini tidak mengunggah file; uji unggahan tetap diperlukan."}),k.jsx("button",{className:"button secondary",disabled:r.busy,onClick:()=>{r.run(async()=>{await gg()},"Koneksi Drive dan arsip dapat dibaca. Lanjutkan dengan satu unggahan uji.")},children:"Periksa koneksi Drive"}),(m.app_settings||[]).map(I=>k.jsxs("form",{className:"record",onSubmit:oa=>{oa.preventDefault();const pa=new FormData(oa.currentTarget).get("value");r.run(async()=>{I.setting_key==="proof_provider"&&pa==="drive"&&await gg(),await hn("save_app_setting",{p_key:I.setting_key,p_value:pa}),await ya()})},children:[k.jsxs("label",{className:"field",children:[I.description,I.setting_key==="proof_provider"?k.jsxs("select",{name:"value",defaultValue:I.setting_value,children:[k.jsx("option",{value:"supabase",children:"Supabase Storage"}),k.jsx("option",{value:"drive",children:"Google Drive + arsip Sheets"})]}):k.jsx("input",{name:"value",required:!0,maxLength:500,defaultValue:I.setting_value})]}),k.jsx("button",{className:"button secondary",disabled:r.busy,children:"Simpan pengaturan"})]},I.setting_key))]}),u==="payment_methods"&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"button",onClick:()=>Pa({id:"",label:"",account_name:"",account_number:"",active:!1},"method"),children:"Tambah metode pembayaran"}),(m.payment_methods||[]).map(I=>k.jsxs("article",{className:"panel record",children:[k.jsx("h2",{children:I.label}),k.jsxs("p",{children:[I.account_number||"Belum diisi"," ·"," ",I.account_name||"Belum diisi"," ·"," ",I.active?"Aktif":"Nonaktif"]}),k.jsx("button",{className:"button secondary",onClick:()=>Pa(I,"method"),children:"Ubah"})]},I.id))]}),u==="feature_requests"&&(m.feature_requests||[]).map(I=>k.jsxs("article",{className:"panel record",children:[k.jsx("span",{className:"badge",children:I.status}),k.jsx("h2",{children:I.title}),k.jsx("p",{children:I.details}),k.jsxs("p",{children:[Ma(I.user_id)," · ",I.is_public?"Publik":"Privat"]}),k.jsx("button",{className:"button secondary",onClick:()=>Pa(I,"feature"),children:"Moderasi"})]},I.id)),u==="profiles"&&(m.profiles||[]).map(I=>k.jsxs("article",{className:"panel record",children:[k.jsx("h2",{children:I.display_name}),k.jsxs("p",{children:[I.institution," · ",I.is_member?"Member seumur hidup":"Gratis",I.is_admin?" · Admin":""]}),k.jsx("small",{children:I.id})]},I.id)),u==="audit_log"&&(m.audit_log||[]).sort((I,oa)=>oa.created_at.localeCompare(I.created_at)).map(I=>k.jsxs("div",{className:"record panel",children:[k.jsx("strong",{children:I.action}),k.jsxs("p",{children:[mt(I.created_at)," · ",Ma(I.actor_id)]}),k.jsx("code",{children:JSON.stringify(I.details)})]},I.id)),h&&k.jsx(Ui,{title:b==="method"?"Metode pembayaran":b==="payout"?"Catat pembayaran komisi":"Konfirmasi tindakan admin",onClose:()=>g(null),children:k.jsxs("form",{onSubmit:I=>{I.preventDefault(),r.run(wa)},children:[b==="method"?k.jsxs(k.Fragment,{children:[[["id","Kode metode"],["label","Nama metode"],["account_number","Nomor rekening / e-wallet"],["account_name","Nama penerima"]].map(([I,oa])=>k.jsxs("label",{className:"field",children:[oa,k.jsx("input",{required:!0,value:q[I],maxLength:100,disabled:I==="id"&&!!h.id,onChange:pa=>ia({...q,[I]:pa.target.value})})]},I)),k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:q.active,onChange:I=>ia({...q,active:I.target.checked})}),"Aktif"]})]}):b==="feature"?k.jsxs(k.Fragment,{children:[k.jsxs("label",{className:"field",children:["Status",k.jsx("select",{value:T,onChange:I=>P(I.target.value),children:["Diajukan","Direncanakan","Dikerjakan","Selesai","Tidak Dilanjutkan"].map(I=>k.jsx("option",{children:I},I))})]}),k.jsxs("label",{className:"checkbox",children:[k.jsx("input",{type:"checkbox",checked:E,onChange:I=>S(I.target.checked)}),"Publikasikan judul dan isi usulan"]})]}):b==="payout"?k.jsxs(k.Fragment,{children:[k.jsx("p",{children:"Transfer manual terlebih dahulu. Sistem menjumlahkan seluruh komisi belum dibayar sampai akhir bulan terpilih, termasuk koreksi."}),k.jsxs("label",{className:"field",children:["Sampai bulan",k.jsx("input",{type:"month",value:O,required:!0,onChange:I=>z(I.target.value)})]}),k.jsxs("label",{className:"field",children:["Bukti transfer komisi",k.jsx("input",{required:!0,type:"file",accept:"image/jpeg,image/png,application/pdf",onChange:I=>U(I.target.files?.[0]||null)})]}),k.jsxs("p",{children:["Saldo periode terpilih:"," ",k.jsx("strong",{children:De((m.partner_ledger||[]).filter(I=>I.partner_id===h.user_id&&!I.payout_id&&new Date(I.created_at).toLocaleDateString("sv-SE",{timeZone:"Asia/Jakarta"}).slice(0,7)<=O).reduce((I,oa)=>I+oa.amount,0))})]}),k.jsxs("label",{className:"field",children:["Nominal yang benar-benar ditransfer (Rp)",k.jsx("input",{type:"number",min:1,step:1,required:!0,value:ea||"",onChange:I=>W(Number(I.target.value))})]})]}):k.jsxs(k.Fragment,{children:[k.jsx("p",{children:b==="verify"?`Verifikasi ${De(h.amount)}. Pastikan dana benar-benar sudah diterima.`:b==="reverse"?"Pembatalan akan mencatat koreksi komisi dan menghitung ulang kelayakan member.":"Tindakan ini akan dicatat dalam riwayat admin."}),k.jsxs("label",{className:"field",children:["Catatan ",b==="verify"?"(opsional)":"(wajib)",k.jsx("textarea",{value:f,required:b!=="verify",maxLength:1e3,onChange:I=>j(I.target.value)})]})]}),r.message&&k.jsx(se,{children:r.message}),k.jsx("button",{className:"button",disabled:r.busy,children:"Konfirmasi"}),k.jsx("button",{type:"button",className:"button secondary",onClick:()=>g(null),children:"Batal"})]})})]}):k.jsx(Zr,{title:"Halaman khusus pengelola",children:k.jsx("p",{children:"Akun Anda tidak memiliki akses admin."})})}const KA=jj;function LA(){const{user:i}=zn();return k.jsx(Xv,{children:k.jsxs(Pe,{element:k.jsx(EA,{}),children:[k.jsx(Pe,{index:!0,element:k.jsx(bg,{home:!0})}),k.jsx(Pe,{path:"prompt",element:k.jsx(bg,{})}),k.jsx(Pe,{path:"prompt/:id",element:k.jsx(d0,{children:k.jsx(xA,{})})}),k.jsx(Pe,{path:"prompt/aplikasi-website",element:k.jsx(m0,{})}),k.jsx(Pe,{path:"profil",element:k.jsx(o0,{})}),k.jsx(Pe,{path:"proyek",element:k.jsx(CA,{})}),k.jsx(Pe,{path:"kopi",element:k.jsx(OA,{})}),k.jsx(Pe,{path:"gemini",element:k.jsx(a0,{})}),k.jsx(Pe,{path:"mitra",element:k.jsx(DA,{})}),k.jsx(Pe,{path:"akun",element:k.jsx(BA,{})}),k.jsx(Pe,{path:"admin",element:k.jsx(UA,{})}),k.jsx(Pe,{path:"*",element:k.jsxs("div",{className:"empty",children:[k.jsx("h1",{children:"Halaman tidak ditemukan"}),k.jsx("a",{href:"#/",children:"Kembali ke beranda"})]})})]})},i?.id||"guest")}b0.createRoot(document.getElementById("root")).render(k.jsx(Vy.StrictMode,{children:k.jsx(KA,{basename:void 0,children:k.jsx(wA,{children:k.jsx(l0,{children:k.jsx(LA,{})})})})}))})();
