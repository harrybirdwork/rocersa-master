<script setup></script>

<template>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-xl">Your Logo</div>
      <img src="/Corten-logo.jpg" alt="" />
      <!-- Navigation Links -->
      <div class="space-x-4">
        <router-link to="/" class="text-slate-700">Home</router-link>
        <router-link to="/products/gab3-1725-300" class="text-slate-700"
          >gab3-1725-300</router-link
        >
        <router-link to="/category/hello" class="text-slate-700"
          >Hello</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style lang="css"></style>
