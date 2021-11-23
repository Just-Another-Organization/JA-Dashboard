import {writable} from "svelte/store";
import type {ModuleInterface} from "$models/Module";

interface breadcrumbStore {
  tabs: ModuleInterface[];
  activeTab: string;
}

export const sidebarStore = writable(false);
export const lookupStore = writable(false);
export const breadcrumbStore = writable<breadcrumbStore>( {tabs: [], activeTab: ''} )

// Sidebar Action
export function openSidebarAction(): void {
  sidebarStore.update(value => value = true);
}
export function closeSidebarAction(): void {
  sidebarStore.update(value => value = false);
}

// Lookup Action
export function openLookupAction(): void {
  lookupStore.update(value => value = true);
}
export function closeLookupAction(): void {
  lookupStore.update(value => value = false);
}

// Breadcrumb Action
export function addBreadcrumbItem(tab: ModuleInterface): void {
  breadcrumbStore.update(({tabs}) =>{
    return {tabs: [...tabs, tab], activeTab: tab.name};
  })
}
export function removeBreadcrumbItem(tab: ModuleInterface): void {
  breadcrumbStore.update(({tabs, activeTab}) => {
    const filtredTabs: ModuleInterface[] = tabs.filter((responseTab: ModuleInterface) => responseTab != tab);
    const newActiveTab = tabs[tabs.length-2].name;
    return {tabs: filtredTabs, activeTab: newActiveTab};
  })
}

export function changeBreadcrumbActiveItem(tab: ModuleInterface): void {
  breadcrumbStore.update( ({tabs, activeTab})=> {
    return {tabs: tabs, activeTab: tab.name}
  })
}

export function clearBreadcrumb(): void {
  breadcrumbStore.set({tabs: [], activeTab: ''} );
}





