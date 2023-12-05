<script setup>
const route = useRoute();
console.log(route.params.category);
let products = await useFetch(`/api/category/${route.params.category}`);
products = products.data._value;
console.log(products[0]);
for (let i = 0; i < products.length; i++) {
  products[i].imgpath = '/101-2.jpg';
}
</script>

<template>
  <div class="cat-title text-4xl">{{ $route.params.category }}</div>
  <div class="container mx-auto my-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Product components go here -->
      <div v-for="product in products" class="bg-slate-50 p-4 rounded shadow">
        <!-- Your product component content -->
        <img
          :src="product.imgpath"
          alt="Product Image"
          class="w-full h-32 object-cover mb-4"
        />
        <router-link
          :to="`/products/${product.ProductCode}`"
          class="text-lg font-semibold"
          >{{ product.NameMetric }}</router-link
        >
        <p class="text-gray-600">${{ product.NZRetailCost }} NZD</p>
      </div>
    </div>
  </div>
</template>
