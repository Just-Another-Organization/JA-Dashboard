<script lang="ts">
  import { fly } from 'svelte/transition';
  import { lookupI, lookupV } from '../../../store/ui.store';
  import SearchSetting from '$lib/components/SettingLookup/SettingsDetails/SearchSetting.svelte';
  import DeeplSetting from '$lib/components/SettingLookup/SettingsDetails/DeeplSetting.svelte';


  let show = false;
  let index = -1;

  lookupV.subscribe(value => {
    show = value;
  });

  lookupI.subscribe(value => {
    index = value;
  });

</script>

<section>
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'>
      {#if index === 0}
        <SearchSetting />
      {/if}
      {#if index === 1}
        <DeeplSetting />
      {/if}
    </div>
  {/if}
</section>

<style>

  section {
    margin: 0 auto;
    text-align: center;
  }

  .lookup {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    margin: 0 auto;
    z-index: 9999;
    width: 80%;
    height: 30rem;
    background-color: var(--theme-colors-background-accent);
    border-radius: 15px 15px 0 0;
  }

</style>
