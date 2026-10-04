export type Values = Record<string, string | string[]>;
export interface Field {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  shared?: boolean;
  options?: string[];
  optionsBy?: Record<string, string[]>;
  dependsOn?: string;
  instructionsBy?: Record<string, string>;
  min?: number;
  max?: number;
  decimal?: boolean;
  when?: string;
  help?: string;
  placeholder?: string;
  default?: string;
  groups?: { header: string; items: { id: string; text: string }[] }[];
}
export interface Template {
  id: string;
  version: number;
  category: string;
  title: string;
  group: string;
  description: string;
  source: string;
  needs: string[];
  note?: string;
  fields: Field[];
  original: string;
  rules: { start: number; end: number; old: string; value: string }[];
  order: number;
  pasteRule?: { start: number; end: number; value: string };
  format?: "authored";
  body?: string;
  stages?: { id: string; title: string; body: string }[];
  example?: Values;
  externalLink?: { label: string; url: string };
}
export interface DraftState {
  version: number;
  profile: Values;
  drafts: Record<string, Values>;
  selected: string;
  view: string;
}
export interface Profile {
  id: string;
  display_name: string;
  institution: string;
  is_member: boolean;
  is_admin: boolean;
}
export interface Project {
  id: string;
  title: string;
  template_id: string;
  template_version: number;
  profile: Values;
  drafts: Record<string, Values>;
  outputs: Record<string, string>;
  updated_at: string;
}
