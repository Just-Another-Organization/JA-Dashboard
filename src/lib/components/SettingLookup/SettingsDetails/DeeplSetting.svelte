<script lang='ts'>

  import { setDeeplApiKey, setting } from '../../../../store/store';
  import { Config } from '$lib/models/Config';

  let settingValue: Config;

  setting.subscribe(value => {
    settingValue = value;
  });

  const updateDeeplApiKey = (value: string) => {
    setDeeplApiKey(value);
  };
</script>

<div>
  <div class='lookup-body'>
    <p class='settings-input-label'>API-KEY</p>
    <input class='settings-input'
           name='api-key'
           on:change='{(r) => updateDeeplApiKey(r.target.value)}'
           type='text'
           placeholder='No API-KEY set'
           value={settingValue.deeplApiKey}>
  </div>
</div>

