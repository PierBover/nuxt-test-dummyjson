<script setup>
const props = defineProps(['error']);
</script>

<template>
	<div>
		<h1>{{ error.statusCode }}</h1>
		<NuxtLink to="/">Go back home</NuxtLink>
	</div>
</template>