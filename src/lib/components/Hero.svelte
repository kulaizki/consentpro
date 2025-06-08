<script lang="ts">
	import { onMount } from 'svelte';

	let isInView = false;
	let applyDelay = true;

	onMount(() => {
		isInView = true;
		setTimeout(() => {
			applyDelay = false;
		}, 900);
	});
</script>

<section
	class="hero-section relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-sky-200 bg-cover bg-center bg-no-repeat py-16 md:py-20"
	style="background-image: url('/hero-bg-min.png');"
>
	<div class="relative z-[2] container mx-auto px-4 text-center">
		<div
			class="mb-4 inline-block transition-all duration-700 ease-out sm:mb-6 {isInView
				? 'translate-y-0 opacity-100'
				: '-translate-y-8 opacity-0'}"
			style={applyDelay ? 'transition-delay: 100ms;' : 'transition-delay: 0ms;'}
		>
			<div class="rounded-full bg-gradient-to-r from-sky-200 to-sky-400 p-0.5 shadow-lg">
				<span
					class="block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 sm:text-sm"
				>
					Compliant with NPC Circular No. 2023-04
				</span>
			</div>
		</div>

		<h1 class="mb-5 text-4xl leading-tight font-bold text-sky-800 sm:text-5xl md:text-6xl">
			<span
				class="block transition-all duration-700 ease-out {isInView
					? 'translate-x-0 opacity-100'
					: '-translate-x-10 opacity-0'}"
				style={applyDelay ? 'transition-delay: 250ms;' : 'transition-delay: 0ms;'}
			>
				Simplify Data Privacy Compliance
			</span>
			<span
				class="mt-1 block bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent transition-all duration-700 ease-out md:mt-2 {isInView
					? 'translate-x-0 opacity-100'
					: 'translate-x-10 opacity-0'}"
				style={applyDelay ? 'transition-delay: 400ms;' : 'transition-delay: 0ms;'}
			>
				with ConsentPro
			</span>
		</h1>

		<p
			class="mx-auto mb-10 max-w-2xl text-lg text-sky-600 transition-all duration-700 ease-out md:mb-12 md:text-xl {isInView
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
			style={applyDelay ? 'transition-delay: 550ms;' : 'transition-delay: 0ms;'}
		>
			Automated consent management for Philippine businesses, ensuring you stay ahead of regulations
			with ease and confidence.
		</p>

		<a
			href="/free-trial"
			class="group relative inline-flex transform items-center justify-center gap-2.5 rounded-lg border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-500 ease-out hover:scale-105 hover:border-sky-400 hover:from-sky-500 hover:to-sky-700 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none {isInView
				? 'scale-100 opacity-100'
				: 'scale-90 opacity-0'}"
			style={applyDelay ? 'transition-delay: 700ms;' : 'transition-delay: 0ms;'}
		>
			Start Your Free Trial
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
			>
				<path
					fill-rule="evenodd"
					d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</section>

<style>
	.hero-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.95);
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='56' viewBox='0 0 28 56'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='plus' fill='%230ea5e9' fill-opacity='0.04'%3E%3Cpath d='M13 14V0h2v14h14v2H15v14h-2V16H0v-2h13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style>
