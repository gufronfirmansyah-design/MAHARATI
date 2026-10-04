import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabase";
import type { Profile } from "../types";
const AuthContext = createContext<{
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}>({
  user: null,
  profile: null,
  loading: true,
  error: "",
  login: async () => {},
  logout: async () => {},
  refresh: async () => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null),
    [profile, setProfile] = useState<Profile | null>(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  async function refresh() {
    if (!supabase) return;
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      setError(error.message);
      return;
    }
    setUser(user);
    if (user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) setError("Status akun belum dapat dimuat. Coba muat ulang.");
      else {
        setProfile(data);
        setError("");
      }
    } else setProfile(null);
  }
  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    let live = true;
    let revision = 0;
    const apply = async (u: User | null) => {
      const r = ++revision;
      if (!live) return;
      setUser(u);
      setProfile(null);
      if (u) {
        const { data, error } = await supabase!
          .from("profiles")
          .select("*")
          .eq("id", u.id)
          .single();
        if (live && r === revision) {
          setProfile(data);
          setError(
            error
              ? "Status akun gagal dimuat. Muat ulang untuk mencoba lagi."
              : "",
          );
        }
      }
      if (live && r === revision) setLoading(false);
    };
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        setError(error.message);
        setLoading(false);
      } else void apply(data.session?.user || null);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      window.setTimeout(() => void apply(session?.user || null), 0);
    });
    return () => {
      live = false;
      data.subscription.unsubscribe();
    };
  }, []);
  async function login() {
    if (!supabase)
      throw Error(
        "Login belum tersedia: konfigurasi Supabase dan Google diperlukan.",
      );
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/akun" },
    });
    if (error) throw error;
  }
  async function logout() {
    if (supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
    setUser(null);
    setProfile(null);
  }
  return (
    <AuthContext.Provider
      value={{ user, profile, loading, error, login, logout, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
