<script lang="ts">
  import { fly } from 'svelte/transition';
  import { closeLookupAction, lookupI, lookupV } from '../../../store/ui.store';
  import SearchSetting from '$lib/components/SettingLookup/SettingsDetails/SearchSetting.svelte';
  import DeeplSetting from '$lib/components/SettingLookup/SettingsDetails/DeeplSetting.svelte';
  import { MenuItems } from '$lib/models/MenuItems';
  import GitLabSettings from '$lib/components/SettingLookup/SettingsDetails/GitLabSettings.svelte';
  import ShortcutsSettings from '$lib/components/SettingLookup/SettingsDetails/ShortcutsSettings.svelte';
  import { SIDEBAR } from '$lib/models/SIDEBAR';

  let show = false;
  let index = -1;

  lookupV.subscribe(value => {
    show = value;
  });

  lookupI.subscribe(value => {
    index = value;
  });

  function getSettingName(index: number) {
    return SIDEBAR[index];
  }

</script>

<div>
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'>
      <div class='lookup-header'>
        <p></p>
        <p>{getSettingName(index)} Option</p>
        <i class='fas fa-chevron-down pointer' on:click={() => {closeLookupAction()}}></i>
      </div>
      {#if index === MenuItems.SEARCH_SETTINGS}
        <SearchSetting />
      {:else if index === MenuItems.DEEPL_SETTINGS}
        <DeeplSetting />
      {:else if index === MenuItems.GITLAB_SETTINGS}
        <GitLabSettings />
      {:else if index === MenuItems.SHORTCUTS_SETTINGS}
        <ShortcutsSettings />
      {/if}
    </div>
  {/if}
</div>
