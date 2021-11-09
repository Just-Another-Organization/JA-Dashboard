<script lang="ts">
  import {setSearchProvider, setSearchType, setting} from "../../../../store/store";
  import {Config} from "$lib/models/Config";

  let settingValue: Config;

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
        Apri nella stessa finestra
      </option>
      <option value="false">
        Apri in una nuova finestra
      </option>
    </select>
  </div>
</div>
