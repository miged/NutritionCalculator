<script lang="ts">
  import InputBox from './lib/InputBox.svelte';
  import NutritionTable from './lib/NutritionTable.svelte';
</script>

<main>
  <h1 class="text-4xl mb-5">Nutrition Calculator</h1>
  <InputBox />
  <NutritionTable />
</main>

<style>
  :root {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    color: white;
    padding: 1em;
    margin: 0 auto;
  }
</style>
