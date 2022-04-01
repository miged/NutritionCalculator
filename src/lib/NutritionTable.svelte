<script lang="ts">
  interface FoodData {
    name: string;
    calories: number;
    serving_size_g: number;
    carbohydrates_total_g: number;
    fat_total_g: number;
    protein_g: number;
  }

  let data: FoodData;
</script>

<div class="flex justify-center my-3 mx-6">
  <table class="table table-zebra w-full">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Size</th>
        <th>Calories</th>
        <th>Carbs</th>
        <th>Fat</th>
        <th>Protein</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr />
    </tbody>
  </table>
</div>
