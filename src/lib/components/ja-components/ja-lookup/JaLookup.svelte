<script lang="ts">
  import { fly } from 'svelte/transition';
  import {breadcrumbStore, clearBreadcrumb, closeLookupAction, lookupStore} from '$store/ui.store';
  import JaBreadcrumb from "$ja-component/ja-breadcrumb/JaBreadcrumb.svelte";
  import { Modules as modules} from "$models/Modules.svelte";
  import type {ModuleInterface} from "$models/Module";



  function closeLookup(){
    closeLookupAction()
    clearBreadcrumb();
  }

  function getSettingComponent(activeTab: string): any {
    return modules.filter( (response: ModuleInterface) => response.name === activeTab)[0].settingComponent;
  }
</script>


<div >
  {#if $lookupStore}
    <div transition:fly={{y: 500, opacity: 1}} class='lookup'  id="lookup">
      <div class='lookup-header'>
        <JaBreadcrumb />
        <i class='fas fa-chevron-down pointer' on:click={() => {closeLookup()}}></i>
      </div>
      <svelte:component this={getSettingComponent($breadcrumbStore.activeTab)} />
    </div>
  {/if}
</div>
