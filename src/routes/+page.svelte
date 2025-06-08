<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Features from '$lib/components/Features.svelte';
    import HowItWorks from '$lib/components/HowItWorks.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import ProblemSolution from '$lib/components/ProblemSolution.svelte';
    import Pricing from '$lib/components/Pricing.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import BackToTop from '$lib/components/BackToTop.svelte';
</script>

<svelte:head>
    <title>ConsentPro</title>
    <meta
        name="description"
        content="ConsentPro helps businesses in the Philippines comply with data privacy laws through an easy-to-use platform for consent form creation, management, and reporting."
    />
</svelte:head>

<Hero />
<ProblemSolution />
<Features />
<HowItWorks />
<Benefits />
<Pricing />
<CTA />
<BackToTop />
