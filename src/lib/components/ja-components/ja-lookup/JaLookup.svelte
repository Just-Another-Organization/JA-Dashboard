<script lang="ts">
  import { fly } from 'svelte/transition';
  import { closeLookupAction, lookupI, lookupV } from '$store/ui.store';
  import {onMount} from "svelte";
  import { Modules } from "$models/Modules.svelte";

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

  function getSettingComponent(index: number) {
    return Modules[index];
  }
</script>


<div >
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'  id="lookup">
      <div class='lookup-header'>
        <p>{getSettingComponent(index).name} Option > Item 1</p>
        <i class='fas fa-chevron-down pointer' on:click={() => {closeLookupAction()}}></i>
      </div>
      <svelte:component this={getSettingComponent(index).settingComponent} />
    </div>
  {/if}
</div>
