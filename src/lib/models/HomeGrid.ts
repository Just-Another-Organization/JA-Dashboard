import type {SearchConfig, DeeplConfig, GitLabConfig, NoteConfig, ShortcutConfig} from "$models/Config";


export interface HomeGrid {
  rows: HomeRow[];
}

export interface HomeRow {
  id?: number;
  elements?: ComponentElement[];
}

export interface ComponentElement {
  id?: number;
  component?: any;
  componentOptions?: ComponentType;
  startColumn?: number;
  finalColumn?: number;
}

export type ComponentType = SearchConfig | DeeplConfig | GitLabConfig | NoteConfig | ShortcutConfig;
