import type { Shortcut } from '$lib/models/Shortcut';

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
