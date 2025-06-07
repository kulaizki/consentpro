<script lang="ts">
    import { onMount } from 'svelte';

    let isInView = false;

    onMount(() => {
        isInView = true;
    });
</script>

<section 
  class="hero-section flex flex-col justify-center min-h-screen py-16 md:py-20 relative bg-cover bg-center bg-no-repeat border-b border-sky-200"
  style="background-image: url('/hero-bg-min.png');"
>
    <div class="container relative z-[2] mx-auto text-center px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
        
        <div class="mb-4 sm:mb-6 inline-block">
            <div class="p-0.5 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 shadow-lg">
                <span class="block bg-sky-50 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                    Compliant with NPC Circular No. 2023-04
                </span>
            </div>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight text-sky-800">
            Simplify Data Privacy Compliance 
            <span class="block bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent mt-1 md:mt-2">
                with ConsentPro
            </span>
        </h1>

        <p class="text-lg md:text-xl text-sky-600 mb-10 md:mb-12 max-w-2xl mx-auto">
            Automated consent management for Philippine businesses, ensuring you stay ahead of regulations with ease and confidence.
        </p>
        
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

<style>
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .92);
  }
</style> 