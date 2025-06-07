<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;

  const icons = {
    forms: `<svg class="w-10 h-10 text-sky-500 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    dashboard: `<svg class="w-10 h-10 text-sky-500 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`,
    automation: `<svg class="w-10 h-10 text-sky-500 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.073-.044.146-.087.22-.127.332-.183.582.495.645.87l.213-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  };

  const features = [
    {
      icon: icons.forms,
      title: "Customizable Forms",
      description: "Quickly build and deploy legally compliant consent forms tailored to your specific business needs."
    },
    {
      icon: icons.dashboard,
      title: "Centralized Dashboard",
      description: "Manage all consent records, track compliance status, and handle data subject requests from one intuitive platform."
    },
    {
      icon: icons.automation,
      title: "Automated Compliance",
      description: "Effortlessly generate transparency notices, process consent withdrawals, and create detailed compliance reports."
    }
  ];
</script>

<section 
  id="features" 
  class="py-16 md:py-24 border-b border-sky-200 min-h-screen flex flex-col justify-center bg-pattern"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800">Core Features</h2>
      <p class="text-lg md:text-xl text-sky-600 mt-3 md:mt-4">Everything you need for effortless compliance.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8 md:gap-10">
      {#each features as feature}
        <div class="text-center p-8 bg-sky-50/50 rounded-lg shadow-lg 
                    border border-sky-100 
                    hover:shadow-sky-400/20 hover:border-sky-300 hover:-translate-y-1 
                    transition-all duration-300 ease-in-out 
                    flex flex-col items-center">
          {@html feature.icon}
          <h3 class="text-2xl font-bold text-sky-700 mb-3">{feature.title}</h3>
          <p class="text-md text-sky-800/80">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section> 

<style>
  .bg-pattern {
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='56' viewBox='0 0 28 56'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='plus' fill='%230ea5e9' fill-opacity='0.04'%3E%3Cpath d='M13 14V0h2v14h14v2H15v14h-2V16H0v-2h13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style> 