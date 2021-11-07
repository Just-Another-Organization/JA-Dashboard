<script lang="ts">
	import { setting } from '../../../store/store';
	import { onMount } from 'svelte';
	import type { Config } from '$lib/models/Config';

	const GOOGLE = 'google';
	const DUCKDUCK = 'duckduck';
	const DEFAULT_PROVIDER = GOOGLE;

	let queryString: string;
	let searchString: string;
	let searchOption: boolean;

	onMount(() => {
		setting.subscribe((value: Config) => {
			searchOption = value.searchOption;
			const searchProvider = value.searchProvider || DEFAULT_PROVIDER;
			switch (searchProvider) {
				case GOOGLE:
					queryString = 'https://www.google.com/search?q=';
					break;
				case DUCKDUCK:
					queryString = 'https://duckduckgo.com/?q=';
					break;
			}
		});
	})

	const onSearchEnter = e => {
		const searchText:string = queryString + searchString;
		if (e.charCode === 13 && searchString.trim() != '') {
			search(searchText);
		}
	};

	const onSearchButton = () => {
		const searchText:string = queryString + searchString;
		if( searchString.trim() != ''){
			search(searchText);
		}
	}

	const search = (text: string) => {
	  if (searchOption === true){
			window.location.replace(text)
		} else if (searchOption === false) {
			window.open(text)
		}
	}

</script>

<section>
	<input
		class='search-box'
		type='text'
		placeholder='Search...'
		bind:value={searchString}
		on:keypress={onSearchEnter}
	>
	<i class="fas fa-chevron-right search-arrow pointer" on:click={onSearchButton}></i>
</section>


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
