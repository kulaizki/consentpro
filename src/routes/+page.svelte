<script lang="ts">
    import Features from '$lib/components/Features.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import Pricing from '$lib/components/Pricing.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import { inview } from 'svelte-inview';

    let isInView = false;
    let hasAnimated = false;
</script>

<svelte:head>
    <title>ConsentPro - Simplify Data Privacy Compliance</title>
    <meta name="description" content="ConsentPro helps Philippine businesses comply with NPC Circular No. 2023-04 on data privacy consent.">
</svelte:head>

<section class="flex items-center justify-center text-center min-h-[60vh] py-16 px-4 bg-white"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
    <div class="max-w-3xl transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
        <h1 class="text-4xl md:text-6xl font-extrabold text-sky-800 mb-4 leading-tight">Simplify Data Privacy Compliance with ConsentPro</h1>
        <p class="text-lg md:text-xl mb-8 text-sky-600">Automated consent management for Philippine businesses</p>
        <a href="/free-trial" 
         class="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
         title="Start your free trial with ConsentPro">
            Start Your Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
        </a>
    </div>
</section>

<Features />
<Benefits />
<Pricing />
<CTA />
