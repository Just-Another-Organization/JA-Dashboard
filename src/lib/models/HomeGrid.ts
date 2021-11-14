import type {SearchConfig, DeeplConfig, GitLabConfig, NoteConfig, ShortcutConfig} from "$models/Config";


export interface HomeGrid {
  rows: HomeRow[];
}

export interface HomeRow {
  element: ComponentElement;
  column: number;
}

export interface ComponentElement {
  component: any;
  componentOptions?: ComponentType;
  startColumn: number;
  finalColumn: number;
}

export type ComponentType = SearchConfig | DeeplConfig | GitLabConfig | NoteConfig | ShortcutConfig;
