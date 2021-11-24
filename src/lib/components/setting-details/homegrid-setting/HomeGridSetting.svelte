<script lang="ts">

  import {Modules as modules} from "$models/Modules.svelte";
  import type {ModuleInterface} from "$models/Module";
  import {addBreadcrumbItem, breadcrumbStore, changeBreadcrumbActiveItem} from "$store/ui.store";

  const row = [ ];

  function openNewRow() :void {
    const rowModule = modules.filter( (response: ModuleInterface) => response.name === 'home_grid_row')[0];
    if (!$breadcrumbStore.tabs.includes(rowModule)){
      addBreadcrumbItem(rowModule);
    }else {
      changeBreadcrumbActiveItem(rowModule)
    }
  }

</script>

<div class="lookup-body">
  {#if row.length === 0}
    <i class="fa fa-plus-circle add-row-button" on:click={openNewRow}></i>

  {:else if row.length !== 0}
    {#each row as r}
      <div class="row-wrapper">
        <div class="template-row">
          {r}
        </div>
        <i class="fa fa-minus-circle remove-row-button"></i>
        <i class="fa fa-pen remove-row-button"></i>
      </div>
    {/each}
  {/if}
</div>

<style>

  .add-row-button {
    font-size: 1.4rem;
    color: var(--theme-colors-text);
  }
  .add-row-button:hover {
    color: #e0e0e0;
  }

  .remove-row-button {
    font-size: 1.4rem;
    color: var(--theme-colors-text);
    margin: 0 0 0 1rem;
  }
  .remove-row-button:hover {
    color: #e0e0e0;
  }

  .row-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100%;
  }

  .template-row {
    margin: 0 0 1rem 0;
    padding: .7rem;
    display: flex;
    width: 80%;
    height: 1rem;
    background: var(--theme-colors-background-contrast);
  }


</style>
