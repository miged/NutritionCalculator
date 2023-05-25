<script lang="ts">
  import { foods } from '../stores';

  $: total = {
    size: 0,
    calories: 0,
    carbs: 0,
    fats: 0,
    proteins: 0,
  };

  $: {
    const totals = $foods.reduce((acc, food) => {
      acc.size += food.serving_size_g;
      acc.calories += food.calories;
      acc.carbs += food.carbohydrates_total_g;
      acc.fats += food.fat_total_g;
      acc.proteins += food.protein_g;
      return acc;
    }, total);
    total = { ...total, ...totals };
  }
</script>

{#if $foods.length !== 0}
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

        <tr class="active">
          <td><strong>Total</strong></td>
          <td>{total.size} g</td>
          <td>{total.calories}</td>
          <td>{total.carbs} g</td>
          <td>{total.fats} g</td>
          <td>{total.proteins} g</td>
        </tr>
      </tbody>
    </table>
  </div>
{/if}
