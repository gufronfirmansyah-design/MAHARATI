import { useEffect, useRef, useState, type ReactNode } from "react";
import { X, LoaderCircle } from "lucide-react";
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    const el = ref.current!,
      previous = document.activeElement as HTMLElement;
    el.showModal();
    const cancel = (e: Event) => {
      e.preventDefault();
      close.current();
    };
    el.addEventListener("cancel", cancel);
    return () => {
      el.removeEventListener("cancel", cancel);
      el.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog ref={ref} className="modal" aria-labelledby="modal-title">
      <button
        className="icon-button close"
        aria-label="Tutup"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <h2 id="modal-title">{title}</h2>
      {children}
    </dialog>
  );
}
export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="notice" role="status">
      {children}
    </div>
  );
}
export function Empty({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="empty">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
export function useAction() {
  const running = useRef(false);
  const [busy, setBusy] = useState(false),
    [message, setMessage] = useState("");
  async function run(
    task: () => Promise<unknown>,
    success = "Perubahan disimpan.",
  ) {
    if (running.current) return;
    running.current = true;
    setBusy(true);
    setMessage("");
    try {
      await task();
      setMessage(success);
    } catch (e) {
      setMessage(
        e instanceof Error
          ? e.message
          : (e as { message?: string })?.message ||
              "Permintaan gagal. Silakan coba lagi.",
      );
    } finally {
      running.current = false;
      setBusy(false);
    }
  }
  return { busy, message, run, setMessage };
}
export function Busy({
  busy,
  children,
}: {
  busy: boolean;
  children: ReactNode;
}) {
  return (
    <>
      {busy && <LoaderCircle size={16} className="spin" />}
      {children}
    </>
  );
}
