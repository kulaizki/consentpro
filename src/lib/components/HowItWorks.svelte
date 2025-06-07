<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;

	const steps = [
    {
      name: 'Build Your Forms',
      description: 'Use our intuitive builder to create customized, legally-compliant consent forms in minutes—no coding required.',
    },
    {
      name: 'Deploy & Collect',
      description: 'Easily embed the forms on your website or app to start collecting and centralizing consent records securely.',
    },
    {
      name: 'Manage & Track',
      description: 'Use the central dashboard to monitor your compliance status, view consent history, and handle data subject requests.',
    },
    {
      name: 'Report with Confidence',
      description: 'Generate detailed reports for internal audits or regulatory reviews to effortlessly demonstrate your compliance.',
    }
  ];
</script>

<section 
  id="how-it-works" 
  class="py-16 md:py-24 bg-sky-50 border-b border-gray-200 min-h-screen flex flex-col justify-center"
  use:inview={{ threshold: 0.1, unobserveOnEnter: true }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-sky-800 leading-tight">How It Works</h2>
      <p class="mt-3 md:mt-4 text-lg md:text-xl text-sky-600 max-w-2xl mx-auto">
        A simple, four-step process to achieve full compliance.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
      {#each steps as step, i}
        <div class="text-center bg-sky-50/50 p-6 rounded-xl shadow-lg flex flex-col items-center 
                    border border-sky-100 
                    hover:shadow-sky-400/20 hover:border-sky-300 hover:-translate-y-1 
                    transition-all duration-300 ease-in-out">
          <div class="flex-shrink-0 mb-5 bg-sky-500 text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold shadow-md">
            {i + 1}
          </div>
          <h3 class="text-xl font-semibold text-sky-700 mb-2.5">{step.name}</h3>
          <p class="text-gray-600 text-sm leading-relaxed flex-grow">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section> 