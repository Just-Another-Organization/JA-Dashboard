<script lang='ts'>
	import Configurator from '$lib/services/configurator';

	const configurator = new Configurator();

	let theme = 'Tema 1';

	function getTheme() {
		theme = configurator.getTheme();
	}

	function setTheme() {
		configurator.setTheme('Tema 2');
		getTheme();
	}
</script>

<section>
	<p>Change theme</p>
	<p>Theme: {theme}</p>

	<button on:click={setTheme}>
		Change theme!
	</button>

</section>


<style>

</style>
