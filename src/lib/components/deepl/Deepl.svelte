<script lang='ts'>
	import { setting } from '../../../store/store';
	import type { Config } from '$lib/models/Config';
	import { onMount } from 'svelte';
	import { Language } from '$lib/models/Language';

	const DEEPL_BASE_URL = 'https://api-free.deepl.com/v2';
	const DEEPL_TRANSLATE = DEEPL_BASE_URL + '/translate';
	const DEEPL_LANGUAGES = DEEPL_BASE_URL + '/languages';

	let inputText = '';
	let translatedText = '';
	let deeplApiKey = '';
	let sourceLanguage = 'IT';
	let targetLanguage = 'EN-US';
	let availableSourceLanguages: Language[] = [];
	let availableTargetLanguages: Language[] = [];
	let lastLanguage = '';

	function resetLastLanguage(): void {
		lastLanguage = '';
	}

	function setSourceLanguage(language: string): void {
		sourceLanguage = language;
	}

	function setTargetLanguage(language: string): void {
		switch (language) {
			case 'EN':
				language = 'EN-US';
				break;
			case 'PT':
				language = 'PT-BR';
				break;
		}
		targetLanguage = language;
	}

	function swapLanguages(): void {
		let tmpLanguage;
		if (lastLanguage.length > sourceLanguage.length) {
			tmpLanguage = lastLanguage;
		} else {
			tmpLanguage = sourceLanguage;
		}
		lastLanguage = targetLanguage;
		setSourceLanguage(targetLanguage.substring(0, 2));
		setTargetLanguage(tmpLanguage);
	}

	onMount(() => {
		setting.subscribe((value: Config) => {
			deeplApiKey = value.deeplApiKey;
			if (deeplApiKey) {
				getAvailableSourceLanguages()
					.then((result) => {
						availableSourceLanguages = result;
					});

				getAvailableTargetLanguages()
					.then((result) => {
						availableTargetLanguages = result;
					});
			}
		});
	});

	async function translate(text) {
		const formData = new FormData();
		formData.append('source_lang', sourceLanguage);
		formData.append('target_lang', targetLanguage);
		formData.append('text', text);

		const json = await consume(DEEPL_TRANSLATE, formData);
		const translations = json.translations;
		translatedText = translations[0].text;
	}

	async function getAvailableSourceLanguages(): Promise<Language[]> {
		return await getAvailableLanguages('source');
	}

	async function getAvailableTargetLanguages(): Promise<Language[]> {
		return await getAvailableLanguages('target');
	}

	async function getAvailableLanguages(type: string): Promise<Language[]> {
		const formData = new FormData();
		formData.append('type', type);
		return await consume(DEEPL_LANGUAGES, formData);
	}

	async function consume(url: string, formData: FormData): Promise<any> {
		formData.append('auth_key', deeplApiKey);

		const res = await fetch(url, {
			method: 'POST',
			body: formData
		});
		return await res.json();
	}
</script>

<section>
	<div class='component-wrapper'>
		<div id='heading'>
			<p>DeepL</p>
			<button on:click={() => {swapLanguages()}}>Swap</button>
		</div>
		<div id='content-area'>
			<div>
				<div class='languages'>
					<select bind:value={sourceLanguage} class='select-languages'
									on:change='{(r) => {
										resetLastLanguage()
										setSourceLanguage(r.target.value)
									}}'>
						{#each availableSourceLanguages as language}
							<option value={language.language}>
								{language.name}
							</option>
						{/each}
					</select>
				</div>
				<div>
				<textarea bind:value={inputText} id='input-area'
									on:change={translate(inputText)}></textarea>
				</div>
			</div>
			<div>
				<div class='languages'>
					<select bind:value={targetLanguage} class='select-languages'
									on:change='{(r) => {
										resetLastLanguage()
										setTargetLanguage(r.target.value)
									}}'>
						{#each availableTargetLanguages as language}
							<option value={language.language}>
								{language.name}
							</option>
						{/each}
					</select>
				</div>
				<div id='result-area'>{translatedText}</div>
			</div>
		</div>
	</div>
</section>

<style>
    .component-wrapper {
        padding: 0.8rem;
    }

    .languages {
        text-align-last: center;
        margin: 0.4rem;
    }

    .select-languages {
        width: 8rem;
        height: 2rem;
        justify-content: center;
        border-radius: 0.4rem;
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
