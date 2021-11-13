<script lang="ts">

  //Inline style
  // Input() = column
  // Input() = row
  // Input() = elements = { ..., }

  // grid area = grid-row-start / grid-column-start / grid-row-end / grid-column-end.

</script>

<div class="ja-grid">

  <div class="ja-row">
  </div>

</div>

<style>
  .ja-grid {
    width: 100%;
    margin: 3rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: var(--theme-colors-background-accent);
  }

  .ja-row > div {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .ja-row {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0 .6rem;
    padding: .6rem .6rem;
  }
</style>
