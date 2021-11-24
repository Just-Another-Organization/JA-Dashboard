<script lang='ts'>
	import {notesEffect, settingStore} from "$store/setting.store";
</script>

<section>
	<div class='component-wrapper'>
		<div id='content-area'>
			<textarea id='notes-area' on:change='{(r) => notesEffect(r.target.value)}'
								value={$settingStore.notesConfig || 'Write down some notes'}
			></textarea>
		</div>
	</div>
</section>

<style>
    .component-wrapper {
        padding: 0.8rem;
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
