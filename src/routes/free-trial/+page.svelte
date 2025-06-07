<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let email = '';
	let password = '';
	let loading = false;
	let successMessage = '';
	let errorMessage = '';

	async function handleSubmit() {
		errorMessage = '';
		successMessage = '';
		loading = true;

		// Simulate API call to Supabase
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Simulate a common validation error
		if (!password || password.length < 8) {
			errorMessage = 'Password must be at least 8 characters long.';
			loading = false;
			return;
		}

		// Simulate a successful sign-up
		if (email && password) {
			successMessage = 'Success! Please check your email to verify your account.';
		} else {
			errorMessage = 'Please fill in all fields.';
		}

		loading = false;
	}
</script>

<div class="min-h-screen w-full bg-pattern flex items-center justify-center p-4">
	<div
		in:fly={{ y: 20, duration: 800, easing: sineIn, delay: 200 }}
		out:fade={{ duration: 300 }}
		class="w-full max-w-md"
	>
		<div
			class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-sky-400/20 p-8 border border-sky-200/50"
		>
			<div class="text-center mb-10">
				<h1 class="text-3xl font-bold text-sky-800">Create your account</h1>
				<p class="text-sky-600 mt-2">Start your 14-day free trial today.</p>
			</div>

			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="space-y-4">
					<input
						type="email"
						bind:value={email}
						placeholder="you@company.com"
						class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
						required
					/>
					<input
						type="password"
						bind:value={password}
						placeholder="••••••••"
						class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
						required
					/>
				</div>

				{#if successMessage}
					<div
						in:fade
						class="text-center p-3 rounded-lg bg-green-100 text-green-800 border border-green-200"
					>
						{successMessage}
					</div>
				{:else if errorMessage}
					<div
						in:fade
						class="text-center p-3 rounded-lg bg-red-100 text-red-800 border border-red-200"
					>
						{errorMessage}
					</div>
				{/if}

				<button
					type="submit"
					disabled={loading}
					class="hover:cursor-pointer group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{#if loading}
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Processing...
					{:else}
						Create Account
					{/if}
				</button>

				<div class="relative flex items-center py-2">
					<div class="flex-grow border-t border-sky-200"></div>
					<span class="flex-shrink mx-4 text-sm text-sky-500">OR</span>
					<div class="flex-grow border-t border-sky-200"></div>
				</div>

				<div class="space-y-4">
					<button
						type="button"
						class="hover:cursor-pointer w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
					>
						<svg class="w-5 h-5" viewBox="0 0 48 48">
							<path
								fill="#FFC107"
								d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
							<path
								fill="#FF3D00"
								d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
							></path>
							<path
								fill="#4CAF50"
								d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
							></path>
							<path
								fill="#1976D2"
								d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.089,5.571l6.19,5.238C41.38,36.258,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
						</svg>
						Sign up with Google
					</button>
				</div>
			</form>
			<div class="text-center mt-8">
				<p class="text-sm text-sky-700">
					Already have an account?
					<a href="#" class="font-semibold text-sky-600 hover:underline">Log in</a>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-pattern {
		background-color: #f0f9ff; /* bg-sky-50 */
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='56' viewBox='0 0 28 56'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='plus' fill='%230ea5e9' fill-opacity='0.04'%3E%3Cpath d='M13 14V0h2v14h14v2H15v14h-2V16H0v-2h13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style> 