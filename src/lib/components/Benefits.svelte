<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;
</script>

<section 
  id="benefits" 
  class="py-16 bg-white border-b border-gray-200"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <h2 class="text-center text-4xl font-extrabold mb-12 text-sky-800">Benefits for Your Business</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-xl font-bold text-sky-600 mb-4">Risk Mitigation</h3>
        <p class="leading-relaxed">Avoid fines of up to P5 million by ensuring NPC compliance, protecting your business from legal and financial penalties.</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-xl font-bold text-sky-600 mb-4">Time and Cost Savings</h3>
        <p class="leading-relaxed">Automate complex compliance tasks, reducing manual effort and saving resources by eliminating extensive legal support needs.</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-xl font-bold text-sky-600 mb-4">Enhanced Customer Trust</h3>
        <p class="leading-relaxed">Show commitment to data privacy, boosting customer confidence and strengthening your brand reputation.</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-xl font-bold text-sky-600 mb-4">Operational Efficiency</h3>
        <p class="leading-relaxed">Streamline consent management with seamless system integration, letting you focus on core business activities.</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-xl font-bold text-sky-600 mb-4">Peace of Mind</h3>
        <p class="leading-relaxed">Rely on an expert-built tool for correct and reliable compliance, reducing stress for Philippine businesses.</p>
      </div>
    </div>
  </div>
</section> 