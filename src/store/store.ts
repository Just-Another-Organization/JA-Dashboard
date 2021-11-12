import { writable } from 'svelte/store';
import type {Config, SearchConfig} from '$models/Config';
import {setSearchConfig} from "$lib/services/search.service";


export const setting = writable<Config>({
	searchConfig: undefined,
	deeplConfig: undefined,
	gitLabConfig: [],
	notesConfig: [],
	shortcuts: []
});


export default function searchEffect(config: SearchConfig): void {
	setSearchConfig(config).then(r => {
		setting.update((setting) => {
			setting.searchConfig = config;
			return setting;
		});
	});
}

/*
export function setDeeplApiKey(deeplApiKey: string): void {
	updateConfig('deeplApiKey', deeplApiKey);
}

export function setGitLabPrivateToken(gitlabPrivateToken: string): void {
	updateConfig('gitlabPrivateToken', gitlabPrivateToken);
}

export function setGitLabDomain(gitlabDomain: string): void {
	updateConfig('gitlabDomain', gitlabDomain);
}

export function setGitLabUsername(gitlabUsername: string): void {
	updateConfig('gitlabUsername', gitlabUsername);
}

export function setNotes(notes: string): void {
	updateConfig('notes', notes);
}

export function setShortcuts(shortcuts: Shortcut[]): void {
	updateConfig('shortcuts', shortcuts);
}
*/





