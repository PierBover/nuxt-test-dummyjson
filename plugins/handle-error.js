import { showError } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.config.errorHandler = (error) => {
		console.error('Global error:', error);

		// Check if the error is a 401 Unauthorized error
		if (error.response?.status === 401) {
			console.error('Unauthorized access - redirecting to login page');
			nuxtApp.$router.push('/login');
			return;
		}

		// Handle other types of errors
		showError(error);
	}
});