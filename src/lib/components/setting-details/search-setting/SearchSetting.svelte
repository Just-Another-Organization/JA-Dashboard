<script lang="ts">
  import {SearchConfig} from "$models/Config";
  import {onDestroy, onMount} from "svelte";
  import type {Unsubscriber} from "svelte/store";
  import {searchEffect, settingStore} from "$store/setting.store";

  let searchConfig: SearchConfig;
  let observable: Unsubscriber;

  onMount(() => {
    observable = settingStore.subscribe(value => {
      searchConfig = value.searchConfig;
    })
  })

  onDestroy(() => {
    observable();
  })

  function updateSearchOption(value: string){
    if (value === 'true'){
      searchEffect({...searchConfig, searchOption: true});
    }else {
      searchEffect({...searchConfig, searchOption: false});
    }
  }
  function updateSearchProvider(value: string){
    searchEffect({...searchConfig, searchProvider: value});
  }
</script>

<div>
  <div class="lookup-body">
    <p class="settings-input-label">Search Provider</p>
    <select class="settings-input" value={searchConfig?.searchProvider} on:change="{(r) => updateSearchProvider(r.target.value)}">
      <option value="google">
        Google
      </option>
      <option value="duckduck">
        DuckDuck
      </option>
    </select>
    <p class="settings-input-label">Search Mode</p>
    <select class="settings-input" value={searchConfig?.searchOption ? 'true' : 'false'} on:change="{(r) => updateSearchOption(r.target.value)}">
      <option value="true">
        Open in same tab
      </option>
      <option value="false">
        Open in new tab
      </option>
    </select>
  </div>
</div>
