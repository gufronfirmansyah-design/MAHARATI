import type { Template } from "../types";
const modules = import.meta.glob("./**/*.json", {
  eager: true,
  import: "default",
});
export const templates = Object.values(modules)
  .map((t) => t as Template)
  .sort((a, b) => a.order - b.order);
export const categories = [
  {
    id: "perencanaan",
    name: "Perencanaan Pembelajaran",
    short: "Perencanaan",
    description:
      "Dari analisis CP hingga asesmen. Susun perangkat pembelajaran secara terarah.",
    icon: "book",
    ready: true,
  },
  {
    id: "media",
    name: "Prompt Media",
    short: "Media",
    description: "Wujudkan materi menjadi media pembelajaran yang menarik.",
    icon: "image",
    ready: true,
  },
  {
    id: "game",
    name: "Prompt Game",
    short: "Game",
    description: "Bawa pengalaman bermain yang bermakna ke ruang kelas.",
    icon: "game",
    ready: true,
  },
  {
    id: "website",
    name: "Prompt Aplikasi / Website",
    short: "Aplikasi / Website",
    description: "Ubah ide menjadi alat bantu digital untuk pembelajaran.",
    icon: "code",
    ready: true,
  },
  {
    id: "video",
    name: "Prompt Video",
    short: "Video",
    description: "Bangun cerita dan visual untuk menjelaskan materi.",
    icon: "video",
    ready: true,
  },
];
categories.push({
  id: "kuis",
  name: "Prompt Kuis",
  short: "Kuis",
  description:
    "Soal, pembahasan, dan aplikasi kuis yang sesuai tujuan belajar.",
  icon: "book",
  ready: true,
});
export const menuTemplates = templates
  .filter((t) => t.id !== "promes")
  .map((t) =>
    t.id === "prota"
      ? {
          ...t,
          title: "Prota & Prosem",
          description: "Satu isian bersama untuk program tahunan dan semester.",
        }
      : t,
  );
export const byId = (id: string) => templates.find((t) => t.id === id);
