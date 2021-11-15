<script lang="ts">

  import {onDestroy, onMount} from "svelte";
  import {
    clearBreadcrumb,
    closeLookupAction,
    lookupBreadcrumb, lookupI,
    removeBreadcrumbItem,
    setLookupIndexAction
  } from "$store/ui.store";
  import type {ModuleInterface} from "$models/Modules.svelte";
  import {Modules} from "$models/Modules.svelte";

  let breadcrumbItem: ModuleInterface[] = [];
  let lookupIndex: number;
  let breadcrumbUnsubscribe;
  let lookupIndexUnsubscribe;

  onMount(() => {
    breadcrumbUnsubscribe = lookupBreadcrumb.subscribe((value) => {
      breadcrumbItem = value;
    })

    lookupIndexUnsubscribe = lookupI.subscribe(value => {
      lookupIndex = value;
    })

  });

  onDestroy(() => {
    breadcrumbUnsubscribe();
    lookupIndexUnsubscribe();
  })

  function removeTab(item: ModuleInterface): void {
    if (breadcrumbItem.length === 1){
      clearBreadcrumb();
      closeLookupAction();
    }else {
      removeBreadcrumbItem(item)
      setLookupIndexAction(Modules.indexOf(breadcrumbItem[breadcrumbItem.length-1]))
    }
  }

  function changeTab(item: ModuleInterface): void {
    setLookupIndexAction(Modules.indexOf(item))
  }

</script>

<div class="breadcrumb-wrap">
  {#if breadcrumbItem.length > 0}
    <ul class="ja-breadcrumb">
      {#each breadcrumbItem as item, i }
        <li class="ja-breadcrumb-list">
          <a class={lookupIndex === Modules.indexOf(item) ? "ja-breadcrumb-item" : "ja-breadcrumb-item-active"} on:click={() => changeTab(item)}>
            {item.name}
            <i class="fas fa-times times-icon" on:click={() => removeTab(item)}></i>
          </a>
        </li>
      {/each}
    </ul>
  {/if}

</div>

<style>

  .ja-breadcrumb {
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
    border-radius: 15px 0 0 0;
  }

  .ja-breadcrumb .ja-breadcrumb-list {
    float: left
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item {
    color: var(--theme-colors-text);
    text-decoration: none;
    padding: .5rem .5rem .5rem 2.8rem;
    background: var(--theme-colors-background);
    position: relative;
    display: block;
    float: left;
    cursor: pointer;
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 30px solid var(--theme-colors-background);
    position: absolute;
    top: 50%;
    margin-top: -50px;
    left: 100%;
    z-index: 2;
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 30px solid var(--theme-colors-background-accent);
    position: absolute;
    top: 50%;
    margin-top: -50px;
    margin-left: 2px;
    left: 100%;
    z-index: 1;
  }

  .ja-breadcrumb .ja-breadcrumb-list:first-child .ja-breadcrumb-item {
    padding-left: .6rem;
  }

  .ja-breadcrumb .ja-breadcrumb-list:first-child .ja-breadcrumb-item-active {
    padding-left: .6rem;
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item:hover {
    background: var(--theme-colors-background-contrast);
  }
  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item:hover:after {
    border-left-color: var(--theme-colors-background-contrast);
  }


  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item-active {
    color: var(--theme-colors-text);
    text-decoration: none;
    padding: .5rem .5rem .5rem 2.8rem;
    background: var(--theme-colors-background-contrast);
    position: relative;
    display: block;
    float: left;
    cursor: pointer;
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item-active:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 30px solid var(--theme-colors-background-contrast);
    position: absolute;
    top: 50%;
    margin-top: -50px;
    left: 100%;
    z-index: 2;
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item-active:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 30px solid var(--theme-colors-background-accent);
    position: absolute;
    top: 50%;
    margin-top: -50px;
    margin-left: 2px;
    left: 100%;
    z-index: 1;
  }


  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item-active:hover {
    background: var(--theme-colors-background);
  }

  .ja-breadcrumb .ja-breadcrumb-list .ja-breadcrumb-item-active:hover:after {
    border-left-color: var(--theme-colors-background);
  }

  .times-icon {
    margin: 0 0 0 .5rem;
  }
</style>


