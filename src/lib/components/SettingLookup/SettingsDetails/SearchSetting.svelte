<script lang="ts">
  import {SearchConfig} from "$models/Config";
  import {onDestroy, onMount} from "svelte";
  import type {Unsubscriber} from "svelte/store";
  import searchEffect, {setting} from "$store/store";

  let settingValue: SearchConfig;
  let observable: Unsubscriber;


  onMount(() => {
    observable = setting.subscribe(value => {
      settingValue = value.searchConfig;
    })
  })

  onDestroy(() => {
    observable();
  })

  function updateSearchOption(value: string){
    if (value === 'true'){
      let config: SearchConfig = {searchProvider: settingValue.searchProvider,searchOption: true}
      searchEffect(config);
    }else {
      let config: SearchConfig = {searchProvider: settingValue.searchProvider,searchOption: false}
      searchEffect(config);
    }
  }
  function updateSearchProvider(value: string){
    let config: SearchConfig = {searchProvider: value,searchOption: settingValue.searchOption}
    searchEffect(config);
  }
</script>

<div>
  <div class="lookup-body">
    <p class="settings-input-label">Search Provider</p>
    <select class="settings-input" value={settingValue.searchProvider} on:change="{(r) => updateSearchProvider(r.target.value)}">
      <option value="google">
        Google
      </option>
      <option value="duckduck">
        DuckDuck
      </option>
    </select>
    <p class="settings-input-label">Search Mode</p>
    <select class="settings-input" value={settingValue.searchOption ? 'true' : 'false'} on:change="{(r) => updateSearchOption(r.target.value)}">
      <option value="true">
        Open in same tab
      </option>
      <option value="false">
        Open in new tab
      </option>
    </select>
  </div>
</div>
