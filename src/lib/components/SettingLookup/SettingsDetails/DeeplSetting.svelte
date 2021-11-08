<script lang='ts'>
  import { closeLookupAction } from '../../../../store/ui.store';
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
  <div class='lookup-header'>
    <p></p>
    <p>Deepl Option</p>
    <i class='fas fa-chevron-down pointer' on:click={() => {closeLookupAction();}}></i>
  </div>
  <div class='lookup-body'>
    <p class='input-header'>API-KEY</p>
    <input id='input-api-key' name='api-key' on:change='{(r) => updateDeeplApiKey(r.target.value)}' type='text'
           value={settingValue.deeplApiKey || 'No API-KEY set'}>
  </div>
</div>

<style>

  #input-api-key {
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

  .input-header {
    align-self: center;
    font-weight: 300;
    font-size: 1.3rem;
  }

</style>
