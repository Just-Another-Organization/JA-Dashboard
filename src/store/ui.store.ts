import {writable} from "svelte/store";

export const sidebar = writable(false);

export const lookupV = writable(false);
export const lookupI = writable(-1);


// Sidebar Action
export function openSidebarAction() {
  sidebar.update(value => value = true);
}
export function closeSidebarAction() {
  sidebar.update(value => value = false);
}

// Lookup Action
export function openLookupAction() {
  lookupV.update( value => value = true);
}
export function closeLookupAction() {
  lookupV.update( value => value = false);
}
export function setLookupIndexAction(index: number) {
  lookupI.update( value => value = index);
}
