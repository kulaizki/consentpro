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

		// Simulate payment processing
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Simulate a successful payment
		successMessage = 'Payment successful! Welcome to ConsentPro Basic.';
		loading = false;
	}
</script>

<div class="bg-pattern min-h-screen py-16 md:py-24 flex items-center justify-center text-slate-800">
	<div
		in:fly={{ y: 20, duration: 800, easing: sineIn, delay: 200 }}
		class="w-2/3 lg:max-w-2xl mx-auto px-4"
	>
		<div
			class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-sky-400/20 p-8 md:p-12 border border-sky-200/50"
		>
			<div class="text-center mb-10">
				<h1 class="text-3xl font-bold text-sky-800">Checkout</h1>
				<p class="text-sky-600 mt-2">You're subscribing to the <span class="font-semibold text-sky-700">Basic Plan</span>.</p>
			</div>

			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="flex flex-col gap-y-6">
					<div class="flex flex-col gap-y-2">
						<label for="card-name" class="block text-sm font-medium text-sky-700">Name on Card</label>
						<input type="text" id="card-name" placeholder="John Doe" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
					</div>
					<div class="flex flex-col gap-y-2">
						<label for="card-number" class="block text-sm font-medium text-sky-700">Card Number</label>
						<input type="text" id="card-number" placeholder="•••• •••• •••• ••••" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
					</div>
					<div class="grid grid-cols-2 gap-x-6">
						<div class="flex flex-col gap-y-2">
							<label for="expiry-date" class="block text-sm font-medium text-sky-700">Expiry Date</label>
							<input type="text" id="expiry-date" placeholder="MM / YY" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
						</div>
						<div class="flex flex-col gap-y-2">
							<label for="cvc" class="block text-sm font-medium text-sky-700">CVC</label>
							<input type="text" id="cvc" placeholder="•••" class="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
						</div>
					</div>
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
						Processing Payment...
					{:else}
						Pay ₱1,499/mo
					{/if}
				</button>
				<p class="text-xs text-center text-sky-600/70">
					By clicking "Pay", you agree to our <a href="/terms-of-service" class="underline hover:text-sky-700">Terms of Service</a>. This is a recurring subscription.
				</p>
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