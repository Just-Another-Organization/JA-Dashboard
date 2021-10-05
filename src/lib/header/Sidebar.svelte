<script>
	import { fly } from 'svelte/transition';
	export let show = false;
</script>

{#if show}
	<nav transition:fly={{x: -250, opacity: 1}}>
		<div class='side-header'>
			<p class='side-header-text'>Setting</p>
			<img class='pointer' src='./static/cancel.png' alt='r' width='16px' height='16px' on:click={() => show = !show}>
		</div>
		<div>
			<ul class='list'>
				<li class='list-item pointer'>
					Primo
				</li>
				<li class='list-item pointer'>
					Secondo
				</li>
				<li class='list-item pointer'>
					Terzo
				</li>
			</ul>

		</div>

	</nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 2rem 0 0.6rem;
    border-right: 1px solid #e0e0e0;
    background: #fff;
    overflow-y: auto;
    width: 18rem;
  }

	.side-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.4rem 0;
	}

	.side-header-text {
    font-weight: 300;
	}

	.list {
		margin: 0 auto;
		padding: 0;
    width: 100%;
		text-decoration: none;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.list-item {
		width: 100%;
		background-color: #f1f1f1;
		font-size: 1.2rem;
		font-weight: 300;
		padding: 1rem;
		margin: 1px;
	}

	.list-item:hover {
    background-color: #d9d9d9;
		transition: background-color .5s;
	}
</style>
