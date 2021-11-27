import { writable } from 'svelte/store';
import type {Config, DeeplConfig, NoteConfig, SearchConfig} from '$models/Config';
import {getSearchConfig, setSearchConfig} from "$lib/services/search.service";
import {getDeeplConfig, setDeeplConfig} from "$lib/services/deepl.service";
import {getNotes, setNotes} from "$lib/services/note.service";
import {getHome} from "$lib/services/home.service";
import {homegridStore} from "$store/homegrid.store";


export const settingStore = writable<Config>({
	searchConfig: undefined,
	deeplConfig: undefined,
	gitLabConfig: [],
	notesConfig: undefined,
	shortcuts: []
});

export function initStore(): void{
	initSetting();
}

/*-- EFFECT (SEND TO DB AND UPDATE THE STORE)  --*/
export function searchEffect(config: SearchConfig): void {
	setSearchConfig(config).then( () => {
		settingStore.update((setting) => {
			setting.searchConfig = config;
			return setting;
		});
	});
}

export function deeplEffect(config: DeeplConfig): void {
	setDeeplConfig(config).then( () => {
		settingStore.update((setting) => {
			setting.deeplConfig = config;
			return setting;
		});
	});
}

export function notesEffect(note: NoteConfig): void {
	setNotes(note).then( () => {
		settingStore.update( (setting) => {
			setting.notesConfig = note;
			return setting;
		})
	})
}


/*-- INIT (GET FROM DB AND SET STORAGE)  --*/
function initSetting() {
	getSearchConfig().then( (res) => {
		settingStore.update((setting) => {
			setting.searchConfig = res;
			return setting;
		});
	})

	getDeeplConfig().then( (res) => {
		settingStore.update( (setting) => {
			setting.deeplConfig = res;
			return setting;
		})
	})

	getNotes().then( (res) => {
		settingStore.update( (setting) => {
			setting.notesConfig = res;
			return setting;
		})
	})

	getHome().then( (res) => {
		homegridStore.update( (home) => {
			home = res;
			return home;
		})
	})
}






