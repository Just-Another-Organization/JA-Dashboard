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

	<div class='lookup-body'>
		<p class='settings-input-label'>PRIVATE-TOKEN</p>
		<input class='settings-input' id='input-private-token' name='private-token'
					 on:change='{(r) => updateGitLabPrivateToken(r.target.value)}' placeholder='No PRIVATE-TOKEN set'
					 type='text'
					 value={settingValue.gitlabPrivateToken}>
		<p class='settings-input-label'>Domain</p>
		<input class='settings-input' id='input-domain' name='domain'
					 on:change='{(r) => updateGitLabDomain(r.target.value)}' placeholder='No Domain set'
					 type='text'
					 value={settingValue.gitlabDomain}>
		<p class='settings-input-label'>Username</p>
		<input class='settings-input' id='input-username' name='username'
					 on:change='{(r) => updateGitLabUsername(r.target.value)}' placeholder='No Username set'
					 type='text'
					 value={settingValue.gitlabUsername}>
	</div>
</div>

