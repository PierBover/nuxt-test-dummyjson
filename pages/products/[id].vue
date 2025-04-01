<script setup>
const route = useRoute();
const {id} = route.params;
const products = await $fetch(`https://dummyjson.com/products/${id}?delay=2000`);
</script>

<template>
	<h1>Product {{ id }}</h1>
	<p>{{ products.title }}</p>
	<p>{{ products.description }}</p>
	<p>{{ products.price }}</p>
	<p>{{ products.category }}</p>
</template>
