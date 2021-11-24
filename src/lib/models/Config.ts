export interface Config {
  searchConfig: SearchConfig;
  deeplConfig: DeeplConfig
  gitLabConfig: GitLabConfig[];
  notesConfig: NoteConfig;
  shortcuts: ShortcutConfig[];
}

export interface SearchConfig {
  searchProvider: string;
  searchOption: boolean;
}

export interface DeeplConfig {
  deeplApiKey: string;
}

export interface GitLabConfig {
  id: string;
  gitlabPrivateToken: string;
  gitlabDomain: string;
  gitlabUsername: string;
}

export interface NoteConfig {
  note: string;
}


export interface ShortcutConfig {
  name: string;
  icon: string;
  url: string;
}
