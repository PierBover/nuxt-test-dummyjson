<script setup>

let me;

me = await $fetch('https://dummyjson.com/auth/me?delay=1000', {
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
	}
});

//try {

//} catch (error) {
//	//console.log(error);
//	//console.log();
//	if (error.response.status === 401) {
//		console.log('Unauthorized');
//		await navigateTo('/login');
//	} else {
//		throw error;
//	}
//}
</script>

<template>
	<div v-if="me">
		<h1>Me</h1>
		profile: {{ me.firstName }} {{ me.lastName }}<br>
		email: {{ me.email }}<br>
		phone: {{ me.phone }}<br>
	</div>
</template>