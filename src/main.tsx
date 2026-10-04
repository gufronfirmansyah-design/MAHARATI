import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/Auth";
import { DraftProvider } from "./lib/Drafts";
import Layout from "./components/Layout";
import { Catalog } from "./pages/Home";
import Prompt from "./pages/Prompt";
import Projects from "./pages/Projects";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Partner from "./pages/Partner";
import Admin from "./pages/Admin";
import "./styles.css";
function AccountRoutes() {
  const { user } = useAuth();
  return (
    <Routes key={user?.id || "guest"}>
      <Route element={<Layout />}>
        <Route index element={<Catalog home />} />
        <Route path="prompt" element={<Catalog />} />
        <Route path="prompt/:id" element={<Prompt />} />
        <Route path="proyek" element={<Projects />} />
        <Route path="kopi" element={<Support />} />
        <Route path="mitra" element={<Partner />} />
        <Route path="akun" element={<Account />} />
        <Route path="admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <div className="empty">
              <h1>Halaman tidak ditemukan</h1>
              <a href="/">Kembali ke beranda</a>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DraftProvider>
          <AccountRoutes />
        </DraftProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
