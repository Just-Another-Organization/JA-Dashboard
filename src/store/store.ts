import { writable } from 'svelte/store';
import type { Config } from '$lib/models/Config';
import Configurator from '$lib/services/configurator';

const configurator = new Configurator();

// SET SETTING STORE
export const setting = writable<Config>({
	searchOption: false,
	searchProvider: '',
	deeplApiKey: ''
});

// SEARCH TYPE SAVE FUNCTION
export function setSearchType(searchOption: boolean) {
	setting.subscribe(oldSetting => {
		const newConfig: Config = { ...oldSetting, searchOption };
		configurator.setConfig(newConfig);
	});
	setting.update(setting => setting = { ...setting, searchOption });
}

// SEARCH PROVIDER SAVE FUNCTION
export function setSearchProvider(searchProvider: string) {
	setting.subscribe(oldSetting => {
		const newConfig: Config = { ...oldSetting, searchProvider };
		configurator.setConfig(newConfig);
	});
	setting.update(setting => setting = { ...setting, searchProvider });
}

export function setDeeplApiKey(deeplApiKey: string) {
	setting.subscribe(oldSetting => {
		const newConfig: Config = { ...oldSetting, deeplApiKey: deeplApiKey };
		configurator.setConfig(newConfig);
	});
	setting.update(setting => setting = { ...setting, deeplApiKey: deeplApiKey });
}
