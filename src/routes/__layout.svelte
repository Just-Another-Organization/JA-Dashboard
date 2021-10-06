<script lang="ts">
	import { ThemeWrapper } from 'svelte-themer'
	import {themes} from '../themes'
	import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<ThemeWrapper themes={themes}>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
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
