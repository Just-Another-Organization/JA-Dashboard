<script lang="ts">

  import {Modules as modules} from "$models/Modules.svelte";
  import type {ModuleInterface} from "$models/Module";
  import {addBreadcrumbItem, breadcrumbStore, changeBreadcrumbActiveItem} from "$store/ui.store";
  import {addNewRowAction, setEditRowAction, homegridStore, removeRowAction} from "$store/homegrid.store";
  import type {HomeRow} from "$models/HomeGrid";

  function openNewRow() :void {
    const rowModule = modules.filter( (response: ModuleInterface) => response.name === 'home_grid_row')[0];
    if (!$breadcrumbStore.tabs.includes(rowModule)){
      addBreadcrumbItem(rowModule);
      addNewRowAction();
    }else {
      changeBreadcrumbActiveItem(rowModule)
    }
  }

  function editRow(row: HomeRow): void {
    const rowModule = modules.filter( (response: ModuleInterface) => response.name === 'home_grid_row')[0];
    if (!$breadcrumbStore.tabs.includes(rowModule)){
      addBreadcrumbItem(rowModule);
    }else {
      changeBreadcrumbActiveItem(rowModule)
    }
    setEditRowAction(row);
  }

</script>

<div class="lookup-body">
  <i class="fa fa-plus-circle add-row-button" on:click={openNewRow}></i>
  {#if $homegridStore.rows && $homegridStore.rows.length !== 0}
    {#each $homegridStore.rows as row}
      <div class="row-wrapper">
        <div class="template-row">
          {row.id}
        </div>
        <i class="fa fa-minus-circle remove-row-button" on:click={() => removeRowAction(row.id)}></i>
        <i class="fa fa-pen remove-row-button" on:click={() => editRow(row)}></i>
      </div>
    {/each}
  {/if}
</div>

<style>

  .add-row-button {
    margin: 1rem 0;
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
    cursor: pointer;
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
