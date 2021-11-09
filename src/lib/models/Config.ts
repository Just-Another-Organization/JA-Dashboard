export interface Config {
	searchProvider: string;
	searchOption: boolean;
	deeplApiKey: string;
	gitlabPrivateToken: string;
	gitlabDomain: string;
	gitlabUsername: string;
	notes: string;
	shortcuts: Shortcut[];
}

export interface Shortcut {
	name: string;
	icon: string;
	url: string;
}
