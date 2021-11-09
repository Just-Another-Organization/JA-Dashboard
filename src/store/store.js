import { writable } from 'svelte/store';
import Configurator from '$lib/services/configurator';
const configurator = new Configurator();
export const setting = writable({
    searchOption: false,
    searchProvider: '',
    deeplApiKey: '',
    gitlabPrivateToken: '',
    gitlabDomain: '',
    gitlabUsername: '',
    notes: '',
    shortcuts: [],
});
export function setSearchType(searchOption) {
    updateConfig('searchOption', searchOption);
}
export function setSearchProvider(searchProvider) {
    updateConfig('searchProvider', searchProvider);
}
export function setDeeplApiKey(deeplApiKey) {
    updateConfig('deeplApiKey', deeplApiKey);
}
export function setGitLabPrivateToken(gitlabPrivateToken) {
    updateConfig('gitlabPrivateToken', gitlabPrivateToken);
}
export function setGitLabDomain(gitlabDomain) {
    updateConfig('gitlabDomain', gitlabDomain);
}
export function setGitLabUsername(gitlabUsername) {
    updateConfig('gitlabUsername', gitlabUsername);
}
export function setNotes(notes) {
    updateConfig('notes', notes);
}
export function setShortcuts(shortcuts) {
    updateConfig('shortcuts', shortcuts);
}
function updateConfig(name, value) {
    setting.subscribe((oldSetting) => {
        oldSetting[name] = value;
        configurator.setConfig(oldSetting);
    });
    setting.update((setting) => {
        setting[name] = value;
        return setting;
    });
}
//# sourceMappingURL=store.js.map