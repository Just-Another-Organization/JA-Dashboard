<script>
	import Sidebar from '$lib/header/Sidebar.svelte';
	let sidebar_show = false;
</script>

<header>
	<div class='corner pointer'>
		<img src='./static/settings.png' width='32px' height='auto' alt='setting' id='setting' on:click={ () => sidebar_show = !sidebar_show}>
	</div>
	<div>
		<p id='title'>JA Dashboard</p>
	</div>
	<div class='corner pointer'>
		<img src='./static/github.png' width='32px' height='auto' alt='github'>
	</div>

	<Sidebar bind:show={sidebar_show} />
</header>

<style>
	header {
		width: 100%;
    background: #fafafa;
		box-shadow: 0 0.75rem 0.8rem rgba(0, 0, 0, 0.15);
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	#title {
		font-size: 1.3rem;
		font-weight: 300;
		color: var(--text-color);
	}

	.corner {
		display: flex;
		align-items: center;
		padding: 0 2rem;
	}

	#setting:hover {
    animation:spin 4s linear infinite;
	}

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform:rotate(360deg);
    }
  }


</style>
