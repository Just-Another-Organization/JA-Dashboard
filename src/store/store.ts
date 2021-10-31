import { writable } from "svelte/store"
import type {Config} from "$lib/models/Config";
import Configurator from '$lib/services/configurator';
const configurator = new Configurator();

export const setting = writable<Config>({searchOption: false, searchProvider: ""});

export function setSearchType (searchOption: boolean) {
  setting.subscribe(  oldSetting => {
    const newConfig: Config = { ...oldSetting, searchOption};
    configurator.setConfig(newConfig);

  });
  setting.update( setting => setting = {...setting, searchOption});
}

export function setSearchProvider (searchProvider: string) {
  setting.subscribe(  oldSetting => {
    const newConfig: Config = { ...oldSetting, searchProvider};
    configurator.setConfig(newConfig);

  });
  setting.update( setting => setting = {...setting, searchProvider});
}

