<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false; 
  let hasAnimated = false;
</script>

<section 
  id="cta" 
  class="py-16 border-b border-sky-200 min-h-screen flex flex-col justify-center bg-pattern overflow-hidden"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 text-center transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <h2 class="text-5xl md:text-6xl font-extrabold mb-8 text-sky-800">Ready to Get Started?</h2>
    <p class="text-xl md:text-2xl mb-12 text-sky-600 max-w-3xl mx-auto">Take the first step towards effortless compliance. Try ConsentPro free for 14 days, no credit card required.</p>
    <a href="/free-trial" 
       class="group relative inline-flex items-center justify-center gap-2.5 px-10 py-4 text-xl font-semibold text-white rounded-lg shadow-xl transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100 transform hover:scale-105"
       title="Start your free trial with ConsentPro">
        Start Your Free Trial
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5">
          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
        </svg>
    </a>
  </div>
</section> 

<style>
  .bg-pattern {
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='56' viewBox='0 0 28 56'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='plus' fill='%230ea5e9' fill-opacity='0.04'%3E%3Cpath d='M13 14V0h2v14h14v2H15v14h-2V16H0v-2h13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>

