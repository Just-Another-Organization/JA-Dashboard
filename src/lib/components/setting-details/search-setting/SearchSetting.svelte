<script lang="ts">
  import {searchEffect, settingStore} from "$store/setting.store";

  function updateSearchOption(value: string){
    if (value === 'true'){
      searchEffect({...$settingStore.searchConfig, searchOption: true});
    }else {
      searchEffect({...$settingStore.searchConfig, searchOption: false});
    }
  }
  function updateSearchProvider(value: string){
    searchEffect({...$settingStore.searchConfig, searchProvider: value});
  }
</script>

<div>
  <div class="lookup-body">
    <p class="settings-input-label">Search Provider</p>
    <select class="settings-input" value={$settingStore.searchConfig?.searchProvider} on:change="{(r) => updateSearchProvider(r.target.value)}">
      <option value="google">
        Google
      </option>
      <option value="duckduck">
        DuckDuck
      </option>
    </select>
    <p class="settings-input-label">Search Mode</p>
    <select class="settings-input" value={$settingStore.searchConfig?.searchOption ? 'true' : 'false'} on:change="{(r) => updateSearchOption(r.target.value)}">
      <option value="true">
        Open in same tab
      </option>
      <option value="false">
        Open in new tab
      </option>
    </select>
  </div>
</div>
