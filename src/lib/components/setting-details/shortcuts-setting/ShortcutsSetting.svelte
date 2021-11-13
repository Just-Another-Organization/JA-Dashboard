<script lang='ts'>
	import {  setting } from '$store/setting.store';
	import { Config, ShortcutConfig } from '$models/Config';


	let settingValue: Config;
	let shortcuts: ShortcutConfig[];
	let newShortcut: ShortcutConfig;

	/*initNewShortcut();
	setting.subscribe(value => {
		settingValue = value;
		shortcuts = settingValue.shortcuts;
		if (!shortcuts) {
			shortcuts = [];
		}
	});

	function initNewShortcut(): void {
		newShortcut = {
			name: '',
			icon: '',
			url: ''
		};
	}

	function addShortcut(shortcut: Shortcut): void {
		if (isValidShortcut(shortcut)) {
			shortcuts.push(shortcut);
			updateShortcuts(shortcuts);
			initNewShortcut();
		}
	}

	function updateShortcuts(value: Shortcut[]): void {
		setShortcuts(value);
	}

	function editShortcut(shortcutToEdit: Shortcut): void {
		// TODO: Ask for edits

		shortcutToEdit.url = 'https://www.google.com/search?q=test';

		if (isValidShortcut(shortcutToEdit)) {
			for (const [index, shortcut] of shortcuts.entries()) {
				if (shortcut.name === shortcutToEdit.name) {
					shortcuts[index] = shortcutToEdit;
					break;
				}
			}
			updateShortcuts(shortcuts);
		}
	}

	function isValidShortcut(shortcut: Shortcut): boolean {
		return !!(shortcut.name && shortcut.icon && shortcut.url);
	}*/

</script>

<div>
	<div class='lookup-body'>
		<div id='manage-shortcuts'>
			{#if shortcuts && shortcuts.length > 0}
				{#each shortcuts as shortcut}
				<!--	<div class='shortcut-item'
							 on:click='{() => editShortcut(shortcut)}'>
						{shortcut.name}
					</div>-->
				{/each}
			{/if}
		</div>
		<div id='add-shortcut'>
			<p class='input-header'>Add a shortcut</p>
			<input bind:value={newShortcut.name} class='input-text' id='input-shortcut-name'
						 name='shortcut-name'
						 placeholder='Insert a name' type='text'>
			<input bind:value={newShortcut.icon} class='input-text' id='input-shortcut-icon'
						 name='shortcut-icon'
						 placeholder='Choose an image url' type='text'>
			<input bind:value={newShortcut.url} class='input-text' id='input-shortcut-url'
						 name='shortcut-url'
						 placeholder='Insert an url' type='text'>
			<div>
				<!--<i class='fa fa-plus fa-2x add-button'
					 on:click='{() => addShortcut(newShortcut)}'></i>-->
			</div>
		</div>
	</div>
</div>

<style>

    .shortcut-item {
        margin: 0.2rem;
        padding: 0.6rem;
        display: inline-block;
        cursor: pointer;
        border-radius: 1rem;
    }

    .shortcut-item:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .input-text {
        align-self: center;
        max-width: 30rem;
        min-width: 20rem;
        padding: .4rem;
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 300;
        border-width: 0 0 1px 0;
        background-color: #FFFFFF00;
    }

    .input-header {
        align-self: center;
        font-weight: 300;
        font-size: 1.3rem;
    }

    .add-button {
        margin: 0.8rem;
        padding: 0.6rem;
        cursor: pointer;
        border-radius: 1rem;
        display: inline-block;
    }

    .add-button:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

</style>
