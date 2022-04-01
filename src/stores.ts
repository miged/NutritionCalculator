interface Food {
  name: string;
  calories: number;
  serving_size_g: number;
  carbohydrates_total_g: number;
  fat_total_g: number;
  protein_g: number;
}

import { writable } from 'svelte/store';
export const foods = writable([] as Food[]);
