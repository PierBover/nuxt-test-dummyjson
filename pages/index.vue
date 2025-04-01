<script setup>
const {products} = await $fetch('https://dummyjson.com/products?delay=2000');
//const {data} = await useAsyncData(
//	'products',
//	() => $fetch('https://dummyjson.com/products?delay=2000')
//);
</script>

<template>
	<h1>Home</h1>
	<ul>
		<li v-for="product in products" :key="product.id">
			<NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
		</li>
	</ul>
</template>