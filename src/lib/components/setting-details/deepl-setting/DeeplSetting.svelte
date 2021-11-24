<script lang='ts'>

  import {deeplEffect, settingStore} from "$store/setting.store";

  function updateDeeplApiKey(value: string) {
    deeplEffect({deeplApiKey: value});
  }
</script>

<div>
  <div class='lookup-body'>
    <p class='settings-input-label'>API-KEY</p>
    <input class='settings-input'
           on:change={(r) => updateDeeplApiKey(r.target.value)}
           type='text'
           placeholder='No API-KEY set'
           value={$settingStore.deeplConfig.deeplApiKey || ''}>
  </div>
</div>

