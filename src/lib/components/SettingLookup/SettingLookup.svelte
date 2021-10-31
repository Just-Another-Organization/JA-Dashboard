<script lang="ts">
  import { fly } from 'svelte/transition';
  import {closeLookupAction, lookupV} from "../../../store/ui.store";
  import {setSearchProvider, setSearchType, setting} from "../../../store/store";
  import type {Config} from "$lib/models/Config";


  let show: boolean = false;
  let settingValue: Config;

  lookupV.subscribe(value => {
    show = value;
  })

  setting.subscribe(value => {
    settingValue = value;
  })

  
  const updateSearchOption = (value: string) => {
    if (value === 'true'){
      setSearchType(true)
    }else {
      setSearchType(false)
    }
  }

  const updateSearchProvider = (value: string) => {
    setSearchProvider(value)
  }

</script>

<section>
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class="lookup">
      <div class="lookup-header">
        <p></p>
        <p>Search Option</p>
        <i class="fas fa-chevron-down pointer" on:click={() => {closeLookupAction();}}></i>
      </div>
      <div class="lookup-body">
        <p class="select-header">Search Provider</p>
        <select class="setting-select" value={settingValue.searchProvider} on:change="{(r) => updateSearchProvider(r.target.value)}">
          <option value="google">
            Google
          </option>
          <option value="duckduck">
            DuckDuck
          </option>
        </select>

        <p class="select-header">Search Mode</p>
        <select class="setting-select" value={settingValue.searchOption ? 'true' : 'false'} on:change="{(r) => updateSearchOption(r.target.value)}">
          <option value="true">
            Apri nella stessa finestra
          </option>
          <option value="false">
            Apri in una nuova finestra
          </option>
        </select>

      </div>
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

  .lookup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .lookup-header > p {
    font-weight: 300;
    font-size: 1.1rem;
  }

  .lookup-header > i {
    font-size: 1.2rem;
  }

  .lookup-body {
    display: flex;
    flex-direction: column;
  }

  .setting-select {
    align-self: center;
    max-width: 30rem;
    min-width: 20rem;
    padding: .4rem;
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    font-weight: 300;
    border-width: 0 0 1px 0;
    background-color: #FFFFFF00;
  }

  .setting-select:focus {
    outline: none;
  }

  .select-header {
    align-self: center;
    font-weight: 300;
    font-size: 1.3rem;
  }

</style>
