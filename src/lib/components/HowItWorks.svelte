<script lang="ts">
	import { inview } from 'svelte-inview';

	let isInView = false;
	let hasAnimated = false;

	const steps = [
		{
			name: 'Build Your Forms',
			description:
				'Use our intuitive builder to create customized, legally-compliant consent forms in minutes.',
			icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
		},
		{
			name: 'Deploy & Collect',
			description:
				'Easily embed the forms on your website or app to start collecting and centralizing consent records securely.',
			icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
		},
		{
			name: 'Manage & Track',
			description:
				'Use the central dashboard to monitor compliance, view history, and handle data subject requests.',
			icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
		},
		{
			name: 'Report with Confidence',
			description:
				'Generate detailed reports for internal audits or regulatory reviews to effortlessly demonstrate compliance.',
			icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z'
		}
	];
</script>

<section
	id="how-it-works"
	class="py-16 md:py-24 bg-sky-50 border-b border-sky-200"
	use:inview={{ threshold: 0.2, unobserveOnEnter: true }}
	on:inview_change={(event) => {
		if (event.detail.inView && !hasAnimated) {
			isInView = true;
			hasAnimated = true;
		}
	}}
>
	<div class="container mx-auto px-4">
		<div class="text-center mb-16 md:mb-20">
			<h2 class="text-3xl sm:text-4xl font-bold text-sky-800 leading-tight">
				A Simple Path to Compliance
			</h2>
			<p class="mt-3 md:mt-4 text-lg md:text-xl text-sky-600 max-w-3xl mx-auto">
				Our platform breaks down your journey to data privacy compliance into four straightforward
				steps.
			</p>
		</div>

		<div class="relative">
			<div
				class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-0"
			>
				{#each steps as step, i}
					<!-- The connecting arrow, hidden on the last item and on mobile/tablet -->
					{#if i < steps.length - 1}
						<div
							class="hidden lg:block absolute top-1/2 -translate-y-1/2 -mt-16 text-sky-300/70"
							style="left: calc({(i + 1) * 25}% - 2rem); width: 4rem;"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-16 h-16"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								/>
							</svg>
						</div>
					{/if}
					<div
						class="relative text-center flex flex-col items-center transition-all duration-500 transform {isInView
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'}"
						style="transition-delay: {i * 150}ms"
					>
						<div
							class="flex-shrink-0 mb-6 bg-white/80 backdrop-blur-sm text-sky-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-4 border-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-11 w-11"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={step.icon} />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-sky-800 mb-3">{step.name}</h3>
						<p class="text-sky-600/90 text-md leading-relaxed flex-grow">{step.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section> 