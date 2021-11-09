<script context='module' lang='ts'>
	export const prerender = true;
	import Search from '$lib/components/Modules/search-section/Search.svelte';
	import Deepl from '$lib/components/Modules/deepl-module/Deepl.svelte';
	import Heatmap from '$lib/components/Modules/heatmap/Heatmap.svelte';
	import GitLab from '$lib/components/Modules/gitlab/GitLab.svelte';
	import Notes from '$lib/components/Modules/notes/Notes.svelte';
	import Shortcuts from '$lib/components/Modules/shortcuts/Shortcuts.svelte';
</script>


<svelte:head>
	<title>JADashboard</title>
</svelte:head>

<section>
	<div class='search'>
		<Search />
	</div>
	<div class='shortcuts'>
		<Shortcuts />
	</div>
	<div class='notes'>
		<Notes />
	</div>
	<div class='gitlab'>
		<GitLab />
	</div>
	<div class='deepl'>
		<Deepl />
	</div>
	<div class='heatmap'>
		<Heatmap />
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
