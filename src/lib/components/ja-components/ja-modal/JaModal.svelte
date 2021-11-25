<script lang="ts">
  import {closeModalAction, modalStore} from "$store/ui.store";
  import { Modules as module} from "$models/Modules.svelte";
</script>

{#if $modalStore}
  <div class="ja-modal">
    <div class="ja-modal-header">
      <p class="ja-modal-header-label">Pick a module</p>
      <i class="fa fa-times ja-modal-header-icon" on:click={closeModalAction}></i>
    </div>

    <div class="ja-modal-body">
      <div class="component-dropdown-wrapper">
        <label class="component-dropdown-label" for="column">Pick Component</label>
        <select class="component-dropdown" name="column" id="column" value="">
          {#each module as item}
            {#if item.component != null}
              <option class="component-dropdown-option">{item.label}</option>
            {/if}
          {/each}
        </select>
      </div>

    </div>
  </div>

{/if}

<style>

</style>
