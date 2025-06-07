<script lang="ts">
	import { inview } from 'svelte-inview';
	let isInView = false;
	let hasAnimated = false;
</script>

<section 
    id="problem-solution"
	class="py-16 md:py-24 bg-sky-50 border-b border-sky-200 min-h-screen flex flex-col justify-center"
	use:inview={{ threshold: 0.1, unobserveOnEnter: true }}
	on:inview_change={(event) => {
		if (event.detail.inView && !hasAnimated) {
			isInView = true;
			hasAnimated = true;
		}
	}}
>
	<div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		<div class="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
			<h2 class="text-4xl sm:text-5xl font-bold text-sky-800 leading-tight">Tired of Compliance Headaches?</h2>
			<p class="text-4xl sm:text-5xl font-bold text-sky-500 leading-tight mt-1 sm:mt-2">We Make it Simple.</p>
			<p class="text-lg md:text-xl text-sky-600 mt-4 md:mt-5">
				ConsentPro moves beyond confusing regulations, offering a clear path to confident, automated compliance.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
			<div class="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg 
						border-2 border-transparent 
						hover:shadow-sky-400/20 hover:border-sky-300 hover:-translate-y-1 
						transition-all duration-300 ease-in-out 
						flex flex-col">
				<h3 class="text-2xl md:text-3xl font-semibold text-sky-800 mb-5">The Challenge</h3>
				<p class="text-lg text-sky-700 mb-5 flex-grow">
					Navigating NPC Circular No. 2023-04 is complex. Manual consent tracking is inefficient, prone to errors, and puts your business at risk of significant fines and reputational damage.
				</p>
				<ul class="list-disc list-inside text-sky-700 space-y-2.5 pl-2 mt-auto text-lg">
					<li>Complex legal jargon</li>
					<li>Risk of human error</li>
					<li>Time-consuming manual work</li>
				</ul>
			</div>
			<div class="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg 
						border-2 border-transparent 
						hover:shadow-sky-400/20 hover:border-sky-300 hover:-translate-y-1 
						transition-all duration-300 ease-in-out 
						flex flex-col">
				<h3 class="text-2xl md:text-3xl font-semibold text-sky-800 mb-5"><span class="text-sky-500">The ConsentPro Solution</span></h3>
				<p class="text-lg text-sky-700 mb-5 flex-grow">
					We automate and simplify the entire consent management process, from form creation to record-keeping, ensuring you are always compliant and your customer data is handled correctly.
				</p>
				<ul class="list-disc list-inside text-sky-500 space-y-2.5 pl-2 mt-auto text-lg">
					<li>Automated compliance</li>
					<li>Centralized dashboard</li>
					<li>Reduced legal risk</li>
				</ul>
			</div>
		</div>
	</div>
</section>  