<script lang="ts">
  import { fly } from 'svelte/transition';
  import {clearBreadcrumb, closeLookupAction, lookupBreadcrumb, lookupI, lookupV} from '$store/ui.store';
  import {onMount} from "svelte";
  import { Modules } from "$models/Modules.svelte";
  import JaBreadcrumb from "$ja-component/ja-breadcrumb/JaBreadcrumb.svelte";

  let show = false;
  let index = -1;
  let breadcrumb = [];

  onMount(() => {
    lookupV.subscribe(value => {
      show = value;
    });
    lookupI.subscribe(value => {
      index = value;
    });
    lookupBreadcrumb.subscribe(value => {
      breadcrumb = value;
    });
  })

  function getSettingComponent(index: number) {
    return Modules[index];
  }

  function closeLookup(){
    closeLookupAction()
    clearBreadcrumb();
  }
</script>


<div >
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'  id="lookup">
      <div class='lookup-header'>
        <JaBreadcrumb />
        <i class='fas fa-chevron-down pointer' on:click={() => {closeLookup()}}></i>
      </div>
      <svelte:component this={getSettingComponent(index).settingComponent} />
    </div>
  {/if}
</div>
