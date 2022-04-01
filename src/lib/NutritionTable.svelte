<script lang="ts">
  import { foods } from '../stores';
</script>

<div class="flex justify-center my-3 mx-6">
  <table class="table table-zebra w-full">
    <!-- head -->
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
          <td>{food.serving_size_g}g</td>
          <td>{food.calories}</td>
          <td>{food.carbohydrates_total_g}g</td>
          <td>{food.fat_total_g}g</td>
          <td>{food.protein_g}g</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
