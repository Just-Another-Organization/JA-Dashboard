<script context='module' lang='ts'>
	export const prerender = true;
	import Search from '$module/search-section/Search.svelte';
	import Deepl from '$module/deepl-module/Deepl.svelte';
	import Heatmap from '$module/heatmap/Heatmap.svelte';
	import GitLab from '$module/gitlab/GitLab.svelte';
	import Notes from '$module/notes/Notes.svelte';
	import Shortcuts from '$module/shortcuts/Shortcuts.svelte';
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
