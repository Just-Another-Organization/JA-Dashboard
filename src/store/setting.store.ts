import { writable } from 'svelte/store';
import type {Config, SearchConfig} from '$models/Config';
import {getSearchConfig, setSearchConfig} from "$lib/services/search.service";


export const setting = writable<Config>({
	searchConfig: undefined,
	deeplConfig: undefined,
	gitLabConfig: [],
	notesConfig: [],
	shortcuts: []
});

export function initStore(): void{
	initSetting();
}

/*-- EFFECT (SEND TO DB AND UPDATE THE STORE)  --*/

export function searchEffect(config: SearchConfig): void {
	setSearchConfig(config).then( () => {
		setting.update((setting) => {
			setting.searchConfig = config;
			return setting;
		});
	});
}


/*-- INIT (GET FROM DB AND SET STORAGE)  --*/

function initSetting() {
	getSearchConfig().then( (res) => {
		setting.update((setting) => {
			setting.searchConfig = res;
			return setting;
		});
	})
}





