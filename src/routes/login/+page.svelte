<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let email = '';
	let password = '';
	let loading = false;
	let errorMessage = '';

	async function handleSubmit() {
		errorMessage = '';
		loading = true;

		await new Promise((resolve) => setTimeout(resolve, 1500));

		if (email === 'test@example.com' && password === 'password123') {
			// In a real app, you'd redirect to a dashboard
			alert('Logged in successfully!');
		} else {
			errorMessage = 'Invalid email or password.';
		}

		loading = false;
	}
</script>

<div class="min-h-screen w-full bg-pattern flex items-center justify-center p-4">
	<div
		in:fly={{ y: 20, duration: 300, easing: sineIn, delay: 200 }}
		out:fade={{ duration: 300 }}
		class="w-full max-w-md"
	>
		<div
			class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-sky-400/20 p-8 border border-sky-200/50"
		>
			<div class="text-center mb-10">
				<h1 class="text-3xl font-bold text-sky-800">Welcome back</h1>
				<p class="text-sky-600 mt-2">Log in to your account to continue.</p>
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

				{#if errorMessage}
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
						Logging in...
					{:else}
						Log In
					{/if}
				</button>
			</form>
			<div class="text-center mt-8">
				<p class="text-sm text-sky-700">
					Don't have an account?
					<a href="/free-trial" class="font-semibold text-sky-600 hover:underline">Sign up</a>
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