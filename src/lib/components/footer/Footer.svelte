<script>
	import MyThemeToggle from '$lib/components/theme-toggle/MyThemeToggle.svelte';
</script>

<footer class="footer">
	<p class='void-box'></p>
	<p>JustAnother &copy; 2021</p>
	<MyThemeToggle />
</footer>

<style>
  .footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
    text-align: center;
    background-color: var(--theme-colors-background);
		color: var(--theme-colors-text);
		display: flex;
		justify-content: space-between;
		align-items: center;
  }

	.void-box {
    margin: 0 2rem;
	}
</style>
