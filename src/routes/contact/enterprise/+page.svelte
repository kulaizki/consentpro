<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let loading = false;
	let successMessage = '';
	let errorMessage = '';

	async function handleSubmit() {
		errorMessage = '';
		successMessage = '';
		loading = true;

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Simulate a successful submission
		successMessage = 'Thank you for your inquiry! Our team will get back to you shortly.';
		loading = false;
	}
</script>

<div class="bg-pattern min-h-screen py-16 md:py-24 flex items-center justify-center text-slate-800">
	<div
		in:fly={{ y: 20, duration: 300, easing: sineIn, delay: 200 }}
		class="w-full sm:w-3/4 lg:max-w-2xl mx-auto px-4"
	>
		<div
			class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-sky-400/20 p-8 md:p-12 border border-sky-200/50"
		>
			<button
				on:click={() => history.back()}
				aria-label="Go back to the previous page"
				class="hover:cursor-pointer text-sky-600 hover:text-sky-800 transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</button>
			<div class="text-center mb-10">
				<h1 class="text-3xl font-bold text-sky-800">Contact Sales</h1>
				<p class="text-sky-600 mt-2">Let's discuss an <span class="font-semibold text-sky-700">Enterprise Plan</span> tailored for you.</p>
			</div>

			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="space-y-6">
					<input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
					<input type="email" placeholder="Work Email" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
					<input type="text" placeholder="Company Name" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" />
					<textarea placeholder="Tell us about your needs..." rows="4" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required></textarea>
				</div>

				{#if successMessage}
					<div in:fade class="text-center p-3 rounded-lg bg-green-100 text-green-800 border border-green-200">
						{successMessage}
					</div>
				{:else if errorMessage}
					<div in:fade class="text-center p-3 rounded-lg bg-red-100 text-red-800 border border-red-200">
						{errorMessage}
					</div>
				{/if}

				<button
					type="submit"
					disabled={loading || !!successMessage}
					class="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{#if loading}
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Submitting...
					{:else}
						Submit Inquiry
					{/if}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	.bg-pattern {
		background-color: #f0f9ff; /* bg-sky-50 */
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='56' viewBox='0 0 28 56'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='plus' fill='%230ea5e9' fill-opacity='0.04'%3E%3Cpath d='M13 14V0h2v14h14v2H15v14h-2V16H0v-2h13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style> 