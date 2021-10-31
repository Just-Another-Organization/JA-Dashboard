import { writable } from "svelte/store"
import type {Config} from "$lib/models/Config";


export const setting = writable<Config>({searchOption: false, searchProvider: ""});

/*
export function setSearchType (option: string) {
  let newConfig: Config;
  const unsubscribe =	setting.subscribe((value: Config) => {
    newConfig = value;
    if (option === "true"){
      newConfig.searchOption = true;
    }else {
      newConfig.searchOption = false;
    }
    setting.update( value => value = newConfig);
  })
}
*/
