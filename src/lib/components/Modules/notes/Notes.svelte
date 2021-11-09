<script lang='ts'>
	import { setNotes, setting } from '../../../../store/store';
	import type { Config } from '$lib/models/Config';
	import { onMount } from 'svelte';

	let notes = '';
	onMount(() => {
		setting.subscribe((value: Config) => {
			notes = value.notes;
		});
	});

	const updateNotes = (value: string) => {
		setNotes(value);
	};
</script>

<section>
	<div class='component-wrapper'>
		<div id='heading'>
			<p>Notes</p>
		</div>
		<div id='content-area'>
			<textarea id='notes-area' on:change='{(r) => updateNotes(r.target.value)}' type='text'
								value={notes || 'Write down some notes'}
			></textarea>
		</div>
	</div>
</section>

<style>
    .component-wrapper {
        padding: 0.8rem;
    }

    #heading {
        text-align: center;
    }

    #notes-area {
        background-color: #fefefe;
        border: none;
        border-radius: 0.6rem;
        width: 24rem;
        height: 18rem;
        margin: 0 0.8rem 0 0.8rem;
        padding: 0.6rem;
    }

    textarea {
        resize: none;
    }

    #content-area {
        display: inline-flex;
        justify-content: center;
    }
</style>
