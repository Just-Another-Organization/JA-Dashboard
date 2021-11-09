import {writable} from "svelte/store";

export const sidebar = writable(false);

export const lookupV = writable(false);
export const lookupI = writable(-1);


// Sidebar Action
export function openSidebarAction(): void {
  sidebar.update(value => value = true);
}
export function closeSidebarAction(): void {
  sidebar.update(value => value = false);
}

// Lookup Action
export function openLookupAction(): void {
  lookupV.update( value => value = true);
}
export function closeLookupAction(): void {
  lookupV.update( value => value = false);
}
export function setLookupIndexAction(index: number): void {
  lookupI.update( value => value = index);
}
