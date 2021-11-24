<script lang="ts">
	import {settingStore} from "$store/setting.store";

	const GOOGLE = 'google';
	const DUCKDUCK = 'duckduck';

	let searchString: string;


	function setProvider(): string {
		switch ($settingStore.searchConfig.searchProvider) {
			case GOOGLE:
				return 'https://www.google.com/search?q=';
			case DUCKDUCK:
				return  'https://duckduckgo.com/?q=';
			default:
				return 'https://www.google.com/search?q=';
		}
	}

	function onSearchEnter(e) {
		const searchText: string = setProvider() + searchString;
		if (e.charCode === 13 && searchString.trim() != '') {
			search(searchText);
		}
	}

	function onSearchButton() {
		setProvider();
		const searchText: string = setProvider() + searchString;
		if( searchString.trim() != ''){
			search(searchText);
		}
	}

	function search(text: string) {
	  if ($settingStore.searchConfig?.searchOption === true){
			window.location.replace(text)
		} else if ($settingStore.searchConfig?.searchOption === false) {
			window.open(text)
		}
	}

</script>

<div>
	<input
		class='search-box'
		type='text'
		placeholder='Search...'
		bind:value={searchString}
		on:keypress={onSearchEnter}
	>
	<i class="fas fa-chevron-right search-arrow pointer" on:click={onSearchButton}></i>
</div>


<style>
	.search-box {
		border-width: 0 0 1px 0;
		font-size: 1.3rem;
		width: 30rem;
    font-family: 'Roboto', sans-serif;
		font-weight: 300;
		background-color: var(--theme-colors-background-contrast);
		color: var(--theme-colors-text);
	}

  .search-box:focus {
    outline: none;
  }
  .search-arrow{
    transition: all .2s ease-in-out;
		font-size: 1.2rem;
		color: var(--theme-colors-text);
	}
	.search-arrow:hover {
		transform: scale(1.2);
	}
</style>
