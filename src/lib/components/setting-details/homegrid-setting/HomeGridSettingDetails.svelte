<script lang="ts">


  import {closeModalAction, openModalAction} from "$store/ui.store";

  let row = [{id: 1}];


  function changeRowSize(rowSize: number) {
    row = []
    for (let i = 0; i < rowSize; ++i){
      row.push({id: i+1})
    }
  }


</script>

<div class="lookup-body">
  <div class="row-wrapper">
    <label class="settings-input-label" for="column">Row Size</label>
    <select class="settings-dropdown" name="column" id="column" on:change={(r) => changeRowSize(r.target.value)}>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
      <option value=6>6</option>
      <option value=7>7</option>
      <option value=8>8</option>
      <option value=9>9</option>
      <option value=10>10</option>
      <option value=11>11</option>
      <option value=12>12</option>
    </select>
  </div>


  <div class="row">
    {#each row as item, i}
      <div class="row-block">
        <span class="block" on:click={openModalAction}><i class="fa fa-plus"></i></span>
      </div>
    {/each}
  </div>
</div>

<style>

  .row{
    background: var(--theme-colors-background-accent);
    display: grid;
    grid-template-columns: auto;
    width: 80%;
    height: 2rem;
  }

  .row-block{
    background: var(--theme-colors-background-contrast);
    color: var(--theme-colors-text);
    grid-row: 1;
    padding: .3rem;
    margin: 1rem;
    width: auto;
    height: 2rem;
    border-radius: 5px;
  }

  .block {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 2rem;
    cursor: pointer;
  }

  .row-wrapper {
    display: flex;
    justify-content: center;
    align-items: baseline;
    align-content: baseline;
  }

  .row-wrapper > * {
    margin: 0 .8rem 0 .8rem;
  }


</style>
