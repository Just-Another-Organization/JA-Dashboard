import {writable} from "svelte/store";
import type {ModuleInterface} from "$models/Modules.svelte";

export const sidebar = writable(false);

export const lookupV = writable(false);
export const lookupI = writable(-1);
export const lookupBreadcrumb = writable<ModuleInterface[]>( [] )

// Sidebar Action
export function openSidebarAction(): void {
  sidebar.update(value => value = true);
}
export function closeSidebarAction(): void {
  sidebar.update(value => value = false);
}

// Breadcrumb Action
export function addBreadcrumbItem(item: ModuleInterface): void {
  lookupBreadcrumb.update(value => [...value, item])
}
export function removeBreadcrumbItem(item: ModuleInterface): void {
  lookupBreadcrumb.update(value => value.filter((tab: ModuleInterface) => tab != item))
}

export function clearBreadcrumb(): void {
  lookupBreadcrumb.set( [] );
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


