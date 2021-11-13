import {writable} from "svelte/store";
import type {HomeGrid} from "$models/HomeGrid";

export const homegridStore = writable<HomeGrid>({rows: []});
