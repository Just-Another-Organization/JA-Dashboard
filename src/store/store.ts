import { writable } from 'svelte/store';
import type { Config } from '$lib/models/Config';
import Configurator from '$lib/services/configurator';
import type { Shortcut } from '$lib/models/Shortcut';

const configurator = new Configurator();

export const setting = writable<Config>({
	searchOption: false,
	searchProvider: '',
	deeplApiKey: '',
	gitlabPrivateToken: '',
	gitlabDomain: '',
	gitlabUsername: '',
	notes: '',
	shortcuts: [],
});

export function setSearchType(searchOption: boolean): void {
	updateConfig('searchOption', searchOption);
}

export function setSearchProvider(searchProvider: string): void {
	updateConfig('searchProvider', searchProvider);
}

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

function updateConfig(name: string, value: any): void {
	setting.subscribe((oldSetting: Config) => {
		oldSetting[name] = value;
		configurator.setConfig(oldSetting);
	});
	setting.update((setting) => {
		setting[name] = value;
		return setting;
	});
}
