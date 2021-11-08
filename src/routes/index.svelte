<script context="module" lang="ts">
	export const prerender = true;
	import Search from '$lib/components/search-section/Search.svelte';
	import Deepl from '$lib/components/deepl/Deepl.svelte';
</script>

<svelte:head>
	<title>JADashboard</title>
</svelte:head>

<section>
	<div class='search'>
		<Search />
	</div>
	<div class='deepl'>
		<Deepl />
	</div>
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
		.search {
			margin: 5rem 0 0 0;
		}
</style>
