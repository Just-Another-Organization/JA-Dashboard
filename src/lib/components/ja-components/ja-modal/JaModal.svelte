<script lang="ts">
  import {closeModalAction, modalStore} from "$store/ui.store";
</script>

{#if $modalStore}
  <div class="ja-modal">
    <div class="ja-modal-header">
      <p class="ja-modal-header-label">Pick a module</p>
      <i class="fa fa-times ja-modal-header-icon" on:click={closeModalAction}></i>
    </div>
    <div class="ja-modal-body">

    </div>
  </div>

{/if}
