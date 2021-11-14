import type {SearchConfig, DeeplConfig, GitLabConfig, NoteConfig, ShortcutConfig} from "$models/Config";
import type {MenuItems} from "$models/MenuItems";


export interface HomeGrid {
  rows: HomeRow[];
}

export interface HomeRow {
  element: ComponentElement;
  column: number;
}

export interface ComponentElement {
  component: MenuItems;
  componentOptions?: ComponentType;
  startColumn: number;
  finalColumn: number;
}

export type ComponentType = SearchConfig | DeeplConfig | GitLabConfig | NoteConfig | ShortcutConfig;
