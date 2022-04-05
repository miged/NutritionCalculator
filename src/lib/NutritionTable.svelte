<script lang="ts">
  import { foods } from '../stores';

  $: total_size = $foods
    .map((food) => food.serving_size_g)
    .reduce((a, b) => a + b, 0);
  $: total_calories = $foods
    .map((food) => food.calories)
    .reduce((a, b) => a + b, 0);
  $: total_carbs = $foods
    .map((food) => food.carbohydrates_total_g)
    .reduce((a, b) => a + b, 0);
  $: total_fats = $foods
    .map((food) => food.fat_total_g)
    .reduce((a, b) => a + b, 0);
  $: total_proteins = $foods
    .map((food) => food.protein_g)
    .reduce((a, b) => a + b, 0);
</script>

<div class="flex justify-center m-3">
  <table class="table w-full max-w-4xl">
    <thead>
      <tr>
        <th>Name</th>
        <th>Serving Size</th>
        <th>Calories</th>
        <th>Carbs</th>
        <th>Fat</th>
        <th>Protein</th>
      </tr>
    </thead>
    <tbody>
      {#each $foods as food (food.name)}
        <tr>
          <td>{food.name}</td>
          <td>{food.serving_size_g} g</td>
          <td>{food.calories}</td>
          <td>{food.carbohydrates_total_g} g</td>
          <td>{food.fat_total_g} g</td>
          <td>{food.protein_g} g</td>
        </tr>
      {/each}
      {#if $foods.length !== 0}
        <tr class="active">
          <td><strong>Total</strong></td>
          <td>{total_size} g</td>
          <td>{total_calories}</td>
          <td>{total_carbs} g</td>
          <td>{total_fats} g</td>
          <td>{total_proteins} g</td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
