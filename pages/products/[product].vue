<script setup lang="ts">
const route = useRoute();
let prod = await useFetch(`/api/products/${route.params.product}`);
prod = prod.data._value;
console.log(prod);
const productName = prod.NameMetric;
const weight = prod.Weight;
const cost = prod.NZRetailCost;
const prodID = prod.ID;
const catID = prod.CategoryID;
console.log(catID);
let productImages = ['/' + catID + '-0.jpg'];
// let i = 0;
// async function get_image_paths(prodID: string, catID: string) {
//   let path = catID + '-' + String(i);
//   console.log(path);
//   let ans = img_exists(path);
//   i = 0;
//   while (i < 2) {
//     productImages.push(path);
//     i++;
//     path = catID + '-' + String(i);
//     ans = img_exists(path);
//   }
// }
// function img_exists(path: string) {
//   try {
//     // Attempt to fetch image
//     const response = fetch(path);
//     console.log('Hello from the try');
//     return true;
//   } catch (error) {
//     return false;
//   }
// }
// get_image_paths(prodID, catID);
</script>

<template>
  <div class="flex">
    <!-- Left Column: Images -->
    <div class="w-2/3 p-4">
      <div v-for="imagepath in productImages" class="carousel">
        <img :src="imagepath" class="w-full h-auto" />
      </div>
    </div>

    <!-- Right Column: Product Information -->
    <div class="w-1/3 p-4">
      <h1 class="text-3xl font-bold mb-4">{{ productName }}</h1>
      <p class="text-gray-600 mb-4">Weight: {{ weight }} kg</p>
      <p class="text-xl font-semibold text-indigo-600 mb-4">${{ cost }} NZD</p>
      <button class="bg-indigo-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  </div>
</template>
