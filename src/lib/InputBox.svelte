<script lang="ts">
  import { foods } from '../stores';
  let input = '';

  function handleClick() {
    const url = 'https://api.calorieninjas.com/v1/nutrition?query=' + input;
    fetch(url, {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY.toString(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        $foods = data.items;
        console.log($foods);
      });
  }
</script>

<div class="flex flex-row justify-center gap-2">
  <input
    type="text"
    class="input input-bordered w-full max-w-xl text-lg"
    placeholder="Enter foods..."
    bind:value={input}
  />
  <button class="btn btn-primary" on:click={handleClick}>Submit</button>
</div>
