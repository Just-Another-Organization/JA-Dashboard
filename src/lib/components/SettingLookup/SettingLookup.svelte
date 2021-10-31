<script lang="ts">
  import { fly } from 'svelte/transition';
  import {closeLookupAction, lookupV} from "../../../store/ui.store";
  import {onDestroy} from "svelte";
  // import {setSearchType} from "../../../store/store";


  let show = false;



  const unsubscriber = lookupV.subscribe(value => {
    show = value;
  })

  let option1: boolean = false;

  onDestroy( () => unsubscriber())
  
  const update = (v: string) => {
    // setSearchType(v)
    console.log(v)
  }

</script>

<section>
  {#if show}
    <div transition:fly={{y: 500, opacity: 1}} class="lookup">
      <div class="lookup-header">
        <p></p>
        <p>Search Option</p>
        <i class="fas fa-chevron-down pointer" on:click={() => {closeLookupAction();}}></i>
      </div>
      <div class="lookup-body">
        <!--<select value={option1} on:change="{(r) => console.log(r.target.value)}">
          <option value="google">
            Google
          </option>
          <option value="duckduck">
            DuckDuck
          </option>
        </select>-->

        <select value={option1} on:change="{(r) => update(r.target.value)}">
          <option value="true">
            True
          </option>
          <option value="false">
            False
          </option>
        </select>

      </div>
    </div>
  {/if}


</section>

<style>

  section {
    margin: 0 auto;
    text-align: center;
  }

  .lookup {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    margin: 0 auto;
    z-index: 9999;
    width: 80%;
    height: 30rem;
    background-color: var(--theme-colors-background-accent);
    border-radius: 15px 15px 0 0;
  }

  .lookup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .lookup-header > p {
    font-weight: 300;
    font-size: 1.1rem;
  }

  .lookup-header > i {
    font-size: 1.2rem;
  }

</style>
