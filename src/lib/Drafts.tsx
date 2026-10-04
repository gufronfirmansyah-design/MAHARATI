import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { loadState, saveState, clearState, initialState } from "./engine.js";
import type { DraftState } from "../types";
const Context = createContext<{
  state: DraftState;
  setState: React.Dispatch<React.SetStateAction<DraftState>>;
  warning: string;
  reset: () => void;
}>({ state: initialState(), setState: () => {}, warning: "", reset: () => {} });
export function DraftProvider({ children }: { children: ReactNode }) {
  const [loaded] = useState(() => {
    try {
      return loadState(localStorage);
    } catch {
      return loadState(undefined);
    }
  });
  const [state, setState] = useState<DraftState>(loaded.state),
    [warning, setWarning] = useState(loaded.warning || "");
  useEffect(() => {
    try {
      if (!saveState(localStorage, state))
        setWarning(
          "Penyimpanan browser tidak tersedia. Isian tetap dapat digunakan selama halaman ini terbuka.",
        );
    } catch {
      setWarning(
        "Penyimpanan browser tidak tersedia. Salin hasil sebelum menutup halaman.",
      );
    }
  }, [state]);
  function reset() {
    try {
      clearState(localStorage);
    } catch {
      /* state remains usable */
    }
    setState(initialState());
  }
  return (
    <Context.Provider value={{ state, setState, warning, reset }}>
      {children}
    </Context.Provider>
  );
}
export const useDrafts = () => useContext(Context);
