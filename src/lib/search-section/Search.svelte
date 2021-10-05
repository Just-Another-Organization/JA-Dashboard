<script lang="ts">

	let searchString = '';
	const queryString = 'https://www.google.com/search?q=';

	const onSearchEnter = e => {
		const searchText:string = queryString + searchString;

		if (e.charCode === 13 && searchString.trim() != '') {
			console.log(searchText);
			// SEARCH IN SAME TAB
			//window.location.replace(search_text)
			// SEARCH IN NEW TAB
			//window.open(search_text)
		}
	};

	const onSearchButton = () => {
		const searchText:string = queryString + searchString;
		if( searchString.trim() != ''){
			console.log(searchText);
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
	<img src='./static/search.png' alt='s' width='16px' height='auto' class='search-arrow pointer' on:click={onSearchButton}>
</section>


<style>

	.search-box {
		border-width: 0 0 1px 0;
		font-size: 1.3rem;
		width: 30rem;
    font-family: 'Roboto', sans-serif;
		font-weight: 300;
	}

  .search-box:focus {
    outline: none;
  }
  .search-arrow{
    transition: all .2s ease-in-out;
	}
	.search-arrow:hover {
		transform: scale(1.2);
	}

</style>
