<script lang="ts">
	import { ThemeWrapper } from 'svelte-themer'
	import {themes} from '../themes'
	import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
	import '../app.css';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SettingLookup from "$lib/components/SettingLookup/SettingLookup.svelte";
	import {initStore} from "$store/setting.store";

	initStore();
</script>

<ThemeWrapper themes={themes}>
	<Header/>
	<main>
		<slot />
	</main>
	<Footer />
	<SettingLookup/>
</ThemeWrapper>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
