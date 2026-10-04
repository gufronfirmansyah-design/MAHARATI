import { useState, useEffect } from "react";
export default function Combo({
  id,
  value,
  options,
  onChange,
  placeholder,
  invalid,
}: {
  id: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder?: string;
  invalid: boolean;
}) {
  const [custom, setCustom] = useState(!!value && !options.includes(value));
  useEffect(() => {
    if (value) setCustom(!options.includes(value));
  }, [value, options]);
  return (
    <>
      <select
        id={id}
        aria-invalid={invalid}
        value={custom ? "__custom__" : value}
        onChange={(e) => {
          setCustom(e.target.value === "__custom__");
          onChange(e.target.value === "__custom__" ? "" : e.target.value);
        }}
      >
        <option value="">Pilih…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
        <option value="__custom__">Isi sendiri…</option>
      </select>
      {custom && (
        <input
          aria-label="Isian sendiri"
          placeholder={placeholder || "Tuliskan pilihan Anda"}
          value={value}
          aria-invalid={invalid}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </>
  );
}
