<script lang="ts">
	import { ThemeWrapper } from 'svelte-themer'
	import {themes} from '../themes'
	import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
	import '../app.css';

	import Header from '$lib/components/core/header/Header.svelte';
	import Footer from '$lib/components/core/footer/Footer.svelte';
	import JaLookup from "$ja-component/ja-lookup/JaLookup.svelte";

	import {initStore} from "$store/setting.store";
	import JaModal from "$ja-component/ja-modal/JaModal.svelte";
	initStore();
</script>

<ThemeWrapper themes={themes}>
	<Header/>
	<main>
		<slot />
	</main>
	<Footer />
	<JaLookup/>
	<JaModal />
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
