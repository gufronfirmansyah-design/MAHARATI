import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import {
  House,
  Library,
  FolderOpen,
  Coffee,
  Users,
  UserRound,
  ShieldCheck,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../lib/Auth";
import { useDrafts } from "../lib/Drafts";
import { Modal, Notice, useAction } from "./UI";
const nav = [
  ["/", "Beranda", House],
  ["/prompt", "Kumpulan Prompt", Library],
  ["/proyek", "Proyek Saya", FolderOpen],
  ["/kopi", "Traktir Kopi", Coffee],
  ["/mitra", "Mitra", Users],
  ["/akun", "Akun", UserRound],
] as const;
export default function Layout() {
  const { profile, loading, login } = useAuth(),
    { warning } = useDrafts(),
    [open, setOpen] = useState(false),
    [coffee, setCoffee] = useState(false),
    location = useLocation(),
    action = useAction();
  const [mobile, setMobile] = useState(window.innerWidth <= 760);
  const menuRef = useRef<HTMLButtonElement>(null),
    sidebarRef = useRef<HTMLElement>(null),
    shown = useRef(false);
  useEffect(() => {
    const resize = () => setMobile(window.innerWidth <= 760);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  useEffect(() => {
    if (!open || !mobile) return;
    sidebarRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setTimeout(() => menuRef.current?.focus(), 0);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open, mobile]);
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (loading) return;
    if (profile?.is_member) {
      setCoffee(false);
      return;
    }
    if (location.pathname.startsWith("/akun")) return;
    if (shown.current) return;
    try {
      const day = new Date().toLocaleDateString("en-CA");
      if (localStorage.getItem("maharati:coffee-day") === day) return;
      localStorage.setItem("maharati:coffee-day", day);
    } catch {
      /* once per mounted session if storage unavailable */
    }
    shown.current = true;
    setCoffee(true);
  }, [loading, profile?.is_member, location.pathname]);
  return (
    <div className="shell">
      <a className="skip" href="#main">
        Lewati ke isi
      </a>
      <aside
        id="navigation"
        ref={sidebarRef}
        inert={mobile && !open}
        className={`sidebar ${open ? "open" : ""}`}
      >
        <Link className="brand" to="/">
          <span className="brand-mark">
            <Sparkles size={23} />
          </span>
          <span>
            MAHARATI<small>RUANG IDE GURU</small>
          </span>
        </Link>
        <button
          className="icon-button mobile-close"
          aria-label="Tutup navigasi"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>
        <div className="nav-label">RUANG KERJA</div>
        <nav>
          {nav.map(([to, label, Icon]) => (
            <NavLink to={to} key={to} end={to === "/"}>
              <Icon size={19} />
              {label}
            </NavLink>
          ))}
          {profile?.is_admin && (
            <NavLink to="/admin">
              <ShieldCheck size={19} />
              Admin
            </NavLink>
          )}
        </nav>
        <div className="sidebar-bottom">
          <div className="coffee-mini">
            <Coffee size={24} />
            <strong>Ide baik tumbuh bersama.</strong>
            <p>Dukung ruang berbagi untuk guru Indonesia.</p>
            <Link to="/kopi">
              Traktir kopi <ArrowUpRight size={16} />
            </Link>
          </div>
          <small>
            Dirancang untuk pendidik.
            <br />
            Dikembangkan bersama Anda.
          </small>
        </div>
      </aside>
      {open && (
        <button
          className="nav-overlay"
          aria-label="Tutup navigasi"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="workspace" inert={mobile && open}>
        <header className="topbar">
          <button
            className="icon-button mobile-menu"
            aria-label="Buka navigasi"
            ref={menuRef}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
          <span className="top-caption">
            Ide Anda. Kemungkinan tanpa batas.
          </span>
          <Link className="account-pill" to="/akun">
            <span className="avatar">
              {profile?.display_name?.[0] || <UserRound size={18} />}
            </span>
            <span>
              {profile?.display_name || "Ruang Guru"}
              <small>
                {profile?.is_member ? "Member seumur hidup" : "Akses gratis"}
              </small>
            </span>
          </Link>
        </header>
        <main id="main" tabIndex={-1}>
          {warning && <Notice>{warning}</Notice>}
          <Outlet />
        </main>
        <footer>
          MAHARATI <span>Ruang ide, karya, dan pembelajaran.</span>
          <Link to="/akun">Data & akun</Link>
        </footer>
      </div>
      {coffee && (
        <Modal
          title="Secangkir kopi untuk ide berikutnya ☕"
          onClose={() => setCoffee(false)}
        >
          <p>
            Seluruh prompt MAHARATI dapat digunakan gratis. Dukungan Anda
            membantu merawat dan mengembangkan ruang ini.
          </p>
          <div className="member-highlight">
            <strong>Dukungan mulai Rp25.000</strong>
            <p>
              Setelah diverifikasi: member seumur hidup selama layanan
              beroperasi, 100 proyek tersimpan, dan bebas pop-up.
            </p>
          </div>
          <Link
            className="button amber"
            to="/kopi"
            onClick={() => setCoffee(false)}
          >
            Traktir Kopi <ArrowUpRight size={17} />
          </Link>
          <button className="button secondary" onClick={() => setCoffee(false)}>
            Lanjut Gratis
          </button>
          <button
            className="text-button"
            disabled={action.busy}
            onClick={() =>
              void action.run(async () => {
                await login();
              }, "")
            }
          >
            Sudah member? Masuk dengan Google
          </button>
          {action.message && <Notice>{action.message}</Notice>}
        </Modal>
      )}
    </div>
  );
}
