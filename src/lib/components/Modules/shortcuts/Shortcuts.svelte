<script lang='ts'>
	import { setting } from '../../../../store/store';
	import type { Config } from '$lib/models/Config';
	import { onMount } from 'svelte';
	import type { Shortcut } from '$lib/models/Shortcut';

	let shortcuts: Shortcut[] = [];

	onMount(() => {
		setting.subscribe((value: Config) => {
			shortcuts = value.shortcuts;
		});
	});

	function getFormattedUrl(url: string): string {
		if (!url.includes('http://') && !url.includes('www.')) {
			return 'http://' + url;
		} else {
			return url;
		}
	}
</script>

<section>
	<div class='component-wrapper'>
		<div id='heading'>
			<p>Shortcuts</p>
		</div>
		<div id='content-area'>
			{#if shortcuts && shortcuts.length > 0}
				{#each shortcuts as shortcut}
					<div class='shortcut'>
						<a href='{getFormattedUrl(shortcut.url)}'>
							<img class='shortcut-image' src='{shortcut.icon}' alt='{shortcut.name}'>
						</a>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<style>
    .component-wrapper {
        padding: 0.8rem;
    }

    .shortcut {
        display: flex;
        justify-content: center;
        overflow: hidden;
        width: 4rem;
        height: 4rem;
    }

    .shortcut-image {
        align-self: center;
        max-width: 100%;
        display: block;
        height: auto
    }

    #heading {
        text-align: center;
    }

    #content-area {
        display: flex;
        justify-content: flex-start;
        background-color: #fefefe;
        border: none;
        border-radius: 0.6rem;
        width: 24rem;
        height: 18rem;
        margin: 0 0.8rem 0 0.8rem;
        padding: 0.6rem;
    }
</style>
