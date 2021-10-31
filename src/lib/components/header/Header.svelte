<script>
	import Sidebar from '$lib/components/header/Sidebar.svelte';
	import {openSidebarAction} from "../../../store/ui.store";



</script>

<header>
	<div class='corner pointer'>
		<i class="fas fa-cog setting corner-icon" on:click={() => openSidebarAction()} ></i>
	</div>
	<div>
		<p id='title'>JA Dashboard</p>
	</div>
	<div class='corner pointer'>
		<i class="fab fa-github corner-icon"></i>
	</div>

	<Sidebar />
</header>

<style>
	header {
		z-index: 100;
		width: 100%;
		box-shadow: 0 0.75rem 0.8rem var(--theme-colors-shadow);
		display: flex;
		justify-content: space-between;
		align-content: center;
		background-color: var(--theme-colors-background);
	}

	#title {
		font-size: 1.3rem;
		font-weight: 300;
		color: var(--theme-colors-text);
	}

	.corner {
		display: flex;
		align-items: center;
		padding: 0 2rem;
	}

	.corner-icon {
		font-size: 1.7rem;
    color: var(--theme-colors-text);
	}

	.setting:hover {
    animation:spin 4s linear infinite;
	}

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform:rotate(360deg);
    }
  }


</style>
