<script>
    import Features from '$lib/components/Features.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import Pricing from '$lib/components/Pricing.svelte';
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>ConsentPro - Simplify Data Privacy Compliance</title>
    <meta name="description" content="ConsentPro helps Philippine businesses comply with NPC Circular No. 2023-04 on data privacy consent.">
</svelte:head>

<section class="flex items-center justify-center text-center min-h-[60vh] py-16 px-4 bg-gradient-to-b from-cyan-800/10 to-gray-50">
    <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-extrabold text-cyan-800 mb-4 leading-tight">Simplify Data Privacy Compliance with ConsentPro</h1>
        <p class="text-lg md:text-xl mb-8 text-teal-600">Automated consent management for Philippine businesses</p>
        <a href="/free-trial" class="bg-cyan-800 text-white py-4 px-8 rounded-lg text-lg font-bold transition-colors hover:bg-teal-600">Start Your Free Trial</a>
    </div>
</section>

<Features />
<Benefits />
<Pricing />
<CTA />
