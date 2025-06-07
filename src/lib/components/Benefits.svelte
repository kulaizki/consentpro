<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;

  const benefits = [
    {
      title: 'Risk Mitigation',
      description: 'Avoid fines of up to P5 million by ensuring NPC compliance, protecting your business from legal and financial penalties.'
    },
    {
      title: 'Time and Cost Savings',
      description: 'Automate complex compliance tasks, reducing manual effort and saving resources by eliminating extensive legal support needs.'
    },
    {
      title: 'Enhanced Customer Trust',
      description: 'Show commitment to data privacy, boosting customer confidence and strengthening your brand reputation.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline consent management with seamless system integration, letting you focus on core business activities.'
    },
    {
      title: 'Peace of Mind',
      description: 'Rely on an expert-built tool for correct and reliable compliance, reducing stress for Philippine businesses.'
    }
  ];
</script>

<section 
  id="benefits" 
  class="py-16 md:py-24 bg-sky-50 border-b border-sky-200 min-h-screen flex flex-col justify-center"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="pr-8">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800 mb-4">Unlock Key Advantages</h2>
        <p class="text-lg md:text-xl text-sky-600">
          Using ConsentPro is not just about compliance; it's about building a better, more trustworthy business.
        </p>
      </div>
      <div class="space-y-8">
        {#each benefits as benefit}
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-sky-500 text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-bold text-sky-700">{benefit.title}</h3>
              <p class="mt-1 text-sky-800/80">{benefit.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section> 