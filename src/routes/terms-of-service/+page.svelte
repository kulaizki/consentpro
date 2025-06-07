<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div class="bg-pattern min-h-screen py-16 md:py-24">
	<div
		in:fly={{ y: 20, duration: 300, easing: sineIn, delay: 200 }}
		class="container mx-auto max-w-4xl px-4"
	>
		<div
			class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-sky-400/10 p-8 md:p-12 border border-sky-200/50"
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
			<h1 class="text-3xl md:text-4xl font-bold text-sky-800 mb-6 text-center">Terms of Service</h1>
			<p class="text-sky-600 mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

			<div class="prose prose-sky max-w-none text-sky-800/90">
				<p>
					Please read these Terms of Service ("Terms", "Terms of Service") carefully before using
					the ConsentPro website (the "Service") operated by us. Your access to and use of the
					Service is conditioned on your acceptance of and compliance with these Terms.
				</p>

				<h2 class="text-sky-700">1. Accounts</h2>
				<p>
					When you create an account with us, you must provide us information that is accurate,
					complete, and current at all times. Failure to do so constitutes a breach of the Terms,
					which may result in immediate termination of your account on our Service.
				</p>

				<h2 class="text-sky-700">2. Intellectual Property</h2>
				<p>
					The Service and its original content, features and functionality are and will remain
					the exclusive property of ConsentPro and its licensors. The Service is protected by
					copyright, trademark, and other laws of both the Philippines and foreign countries.
				</p>

				<h2 class="text-sky-700">3. Termination</h2>
				<p>
					We may terminate or suspend your account immediately, without prior notice or
					liability, for any reason whatsoever, including without limitation if you breach the
					Terms. Upon termination, your right to use the Service will immediately cease.
				</p>

				<h2 class="text-sky-700">4. Limitation Of Liability</h2>
				<p>
					In no event shall ConsentPro, nor its directors, employees, partners, agents,
					suppliers, or affiliates, be liable for any indirect, incidental, special,
					consequential or punitive damages, including without limitation, loss of profits, data,
					use, goodwill, or other intangible losses, resulting from your access to or use of or
					inability to access or use the Service.
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
	:global(.prose h2) {
		color: #0369a1;
	}
	:global(.prose ul > li::marker) {
		color: #0ea5e9;
	}
</style> 