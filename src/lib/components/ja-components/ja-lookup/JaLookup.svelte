<script lang="ts">
  import { fly } from 'svelte/transition';
  import { closeLookupAction, lookupI, lookupV } from '$store/ui.store';


  import { MenuItems } from '$models/MenuItems';
  import { SIDEBAR } from '$models/SIDEBAR';
  import {onMount} from "svelte";
  import HomeGridSetting from "$setting/homegrid-setting/HomeGridSetting.svelte";
  import SearchSetting from "$setting/search-setting/SearchSetting.svelte";
  import DeeplSetting from "$setting/deepl-setting/DeeplSetting.svelte";
  import GitLabSetting from "$setting/gitlab-setting/GitLabSetting.svelte";
  import ShortcutsSetting from "$setting/shortcuts-setting/ShortcutsSetting.svelte";



  let show = false;
  let index = -1;

  onMount(() => {
    lookupV.subscribe(value => {
      show = value;
    });
    lookupI.subscribe(value => {
      index = value;
    });
  })

  function getSettingName(index: number) {
    return SIDEBAR[index];
  }

</script>


<div >
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'  id="lookup">
      <div class='lookup-header'>
        <p>{getSettingName(index)} Option</p>
        <i class='fas fa-chevron-down pointer' on:click={() => {closeLookupAction()}}></i>
      </div>
      {#if index === MenuItems.HOME_GRID}
        <HomeGridSetting />
      {:else if index === MenuItems.SEARCH}
        <SearchSetting />
      {:else if index === MenuItems.DEEPL}
        <DeeplSetting />
      {:else if index === MenuItems.GITLAB}
        <GitLabSetting />
      {:else if index === MenuItems.SHORTCUTS}
        <ShortcutsSetting />
      {/if}
    </div>
  {/if}
</div>
