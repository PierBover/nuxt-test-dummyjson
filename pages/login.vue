<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const username = ref('emilys');
const password = ref('emilyspass');

async function authenticate () {
	const response = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({username: username.value, password: password.value})
	});

	if (!response.ok) throw new Error("Login failed");

	const json = await response.json();

	console.log(json);

	localStorage.setItem('accessToken', json.accessToken);
	localStorage.setItem('refreshToken', json.refreshToken);

	await navigateTo('/me')
}

</script>

<template>
	<h1>Login</h1>
	<form @submit.prevent="authenticate">
		<div>
			<label for="username">Username:</label>
			<input type="text" id="username" v-model="username" required />
		</div>
		<div>
			<label for="password">Password:</label>
			<input type="password" id="password" v-model="password" required />
		</div>
		<button type="submit">Login</button>
	</form>
</template>