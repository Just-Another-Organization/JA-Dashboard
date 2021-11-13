<script context='module' lang='ts'>
	export const prerender = false;
	import Search from '$module/search/Search.svelte';
	import JaGrid from "$ja-component/ja-grid/JaGrid.svelte";
</script>

<svelte:head>
	<title>JADashboard</title>
</svelte:head>

<div class="wrapper">
	<div class='search'>
		<Search />
	</div>
	<JaGrid/>
</div>


<style>
    .wrapper {
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
