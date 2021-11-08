<script lang='ts'>
	import { setting } from '../../../store/store';
	import type { Config } from '$lib/models/Config';
	import { onMount } from 'svelte';

	const DEEPL_TRANSLATION_ENDPOINT = 'https://api-free.deepl.com/v2/translate';

	let inputText = '';
	let translatedText = '';
	let deeplApiKey = '';
	let sourceLanguage = 'IT';
	let targetLanguage = 'EN';

	onMount(() => {
		setting.subscribe((value: Config) => {
			deeplApiKey = value.deeplApiKey;
		});
	});

	async function translate(text) {
		const formData = new FormData();
		formData.append('auth_key', deeplApiKey);
		formData.append('source_lang', sourceLanguage);
		formData.append('target_lang', targetLanguage);
		formData.append('text', text);

		const res = await fetch(DEEPL_TRANSLATION_ENDPOINT, {
			method: 'POST',
			body: formData
		});

		const json = await res.json();
		const translations = json.translations;
		translatedText = translations[0].text;
	}

</script>

<section>
	<div class='component-wrapper'>
		<p id='heading'>Traduci da Italiano a Inglese</p>
		<div id='content-area'>
			<textarea bind:value={inputText} id='input-area'
								on:change={translate(inputText)}></textarea>
			<div id='result-area'>{translatedText}</div>
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

    #result-area, #input-area {
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
