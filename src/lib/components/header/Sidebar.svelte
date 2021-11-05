<script lang="ts">
	import { fly } from 'svelte/transition';
	import {closeSidebarAction, openLookupAction, setLookupIndexAction, sidebar} from "../../../store/ui.store";

	let show: boolean = false;

	sidebar.subscribe(value => {
		show = value;
	})

	function openLookupHandler(index: number){
		setLookupIndexAction(index)
		openLookupAction();
		closeSidebarAction();
	}

</script>

{#if show}
	<nav transition:fly={{x: -250, opacity: 1}}>
		<div class='side-header'>
			<p class='side-header-text'>Setting</p>
			<i class="fas fa-times pointer close-icon" on:click={() => closeSidebarAction()}></i>
		</div>
		<div>
			<ul class='list'>
				<li class='list-item pointer' on:click={() => {openLookupHandler(0)}}>
					Search Option
				</li>
				<li class='list-item pointer' on:click={() => {openLookupHandler(1)}}>
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
    border-right: 1px solid var(--theme-colors-background);
    background: var(--theme-colors-background);
    overflow-y: auto;
    width: 18rem;
		z-index: 1000;
  }

	.side-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.4rem 0;
	}

	.side-header-text {
    font-weight: 300;
		color: var(--theme-colors-text);;
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
		background-color: var(--theme-colors-background-contrast);
    color: var(--theme-colors-text);
		font-size: 1.2rem;
		font-weight: 300;
		padding: 1rem;
		margin: 1px;
	}

	.list-item:hover {
		color: var(--theme-colors-background-contrast);
    background-color: var(--theme-colors-background-accent);
		transition: background-color .5s;
	}

	.close-icon {
		font-size: 1.6rem;
		color: var(--theme-colors-text);
	}

</style>
