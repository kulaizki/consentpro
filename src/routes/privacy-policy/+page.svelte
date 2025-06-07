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
			class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-sky-400/10 p-8 md:p-12 border border-sky-200/50"
		>
			<h1 class="text-3xl md:text-4xl font-bold text-sky-800 mb-6">Privacy Policy</h1>
			<p class="text-sky-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

			<div class="prose prose-sky max-w-none text-sky-800/90">
				<p>
					Welcome to ConsentPro. We are committed to protecting your personal information and your
					right to privacy. If you have any questions or concerns about our policy, or our
					practices with regards to your personal information, please contact us.
				</p>

				<h2 class="text-sky-700">1. INFORMATION WE COLLECT</h2>
				<p>
					We collect personal information that you voluntarily provide to us when you register on
					the Services, express an interest in obtaining information about us or our products and
					services, when you participate in activities on the Services or otherwise when you
					contact us. The personal information that we collect depends on the context of your
					interactions with us and the Services, the choices you make and the products and
					features you use.
				</p>

				<h2 class="text-sky-700">2. HOW WE USE YOUR INFORMATION</h2>
				<p>
					We use personal information collected via our Services for a variety of business
					purposes described below. We process your personal information for these purposes in
					reliance on our legitimate business interests, in order to enter into or perform a
					contract with you, with your consent, and/or for compliance with our legal obligations.
				</p>
				<ul>
					<li>To facilitate account creation and logon process.</li>
					<li>To post testimonials.</li>
					<li>Request feedback.</li>
					<li>To enable user-to-user communications.</li>
					<li>To manage user accounts.</li>
				</ul>

				<h2 class="text-sky-700">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
				<p>
					We only share information with your consent, to comply with laws, to provide you with
					services, to protect your rights, or to fulfill business obligations. We may process or
					share your data that we hold based on the following legal basis: Consent, Legitimate
					Interests, Performance of a Contract, Legal Obligations.
				</p>

				<h2 class="text-sky-700">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
				<p>
					We may use cookies and similar tracking technologies (like web beacons and pixels) to
					access or store information. Specific information about how we use such technologies and
					how you can refuse certain cookies is set out in our Cookie Notice.
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