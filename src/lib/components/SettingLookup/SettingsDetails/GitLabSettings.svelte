<script lang='ts'>
  import { closeLookupAction } from '../../../../store/ui.store';
  import { setGitLabDomain, setGitLabPrivateToken, setGitLabUsername, setting } from '../../../../store/store';
  import { Config } from '$lib/models/Config';

  let settingValue: Config;

  setting.subscribe(value => {
    settingValue = value;
  });

  const updateGitLabPrivateToken = (value: string) => {
    setGitLabPrivateToken(value);
  };

  const updateGitLabDomain = (value: string) => {
    setGitLabDomain(value);
  };

  const updateGitLabUsername = (value: string) => {
    setGitLabUsername(value);
  };
</script>

<div>
  <div class='lookup-header'>
    <p></p>
    <p>GitLab Option</p>
    <i class='fas fa-chevron-down pointer' on:click={() => {closeLookupAction();}}></i>
  </div>
  <div class='lookup-body'>
    <p class='input-header'>PRIVATE-TOKEN</p>
    <input class='input-text' id='input-private-token' name='private-token'
           on:change='{(r) => updateGitLabPrivateToken(r.target.value)}' type='text'
           value={settingValue.gitlabPrivateToken || 'No PRIVATE-TOKEN set'}>
    <p class='input-header'>Domain</p>
    <input class='input-text' id='input-domain' name='domain'
           on:change='{(r) => updateGitLabDomain(r.target.value)}' type='text'
           value={settingValue.gitlabDomain || 'No Domain set'}>
    <p class='input-header'>Username</p>
    <input class='input-text' id='input-username' name='username'
           on:change='{(r) => updateGitLabUsername(r.target.value)}' type='text'
           value={settingValue.gitlabUsername || 'No Username set'}>
  </div>
</div>

<style>

  .input-text {
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
