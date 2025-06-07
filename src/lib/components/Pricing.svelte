<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;
</script>

<section 
  id="pricing" 
  class="py-16 bg-sky-50"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="container mx-auto px-4 transition-all duration-1000 transform {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
    <h2 class="text-center text-4xl font-extrabold mb-12 text-sky-800">Pricing Plans</h2>
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-2xl font-bold mb-4 text-sky-600">Basic</h3>
        <p class="text-4xl font-extrabold mb-4 text-sky-800">P2,000</p>
        <p class="text-sky-600 mb-6">/month</p>
        <ul class="text-left space-y-2 mb-8">
          <li>✓ Consent Form Builder</li>
          <li>✓ Management Dashboard</li>
          <li>✓ Transparency Notices</li>
        </ul>
        <a href="/subscribe/basic" 
           class="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
           title="Get Started with Basic Plan">
            Get Started
        </a>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-xl border-2 border-sky-400 relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-400/30">
        <p class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-sm font-bold px-4 py-1 rounded-full">Most Popular</p>
        <h3 class="text-2xl font-bold mb-4 text-sky-600">Pro</h3>
        <p class="text-4xl font-extrabold mb-4 text-sky-800">P4,000</p>
        <p class="text-sky-600 mb-6">/month</p>
        <ul class="text-left space-y-2 mb-8">
          <li>✓ Everything in Basic</li>
          <li>✓ Consent Withdrawal</li>
          <li>✓ Compliance Reporting</li>
        </ul>
        <a href="/subscribe/pro" 
           class="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
           title="Get Started with Pro Plan">
            Get Started
        </a>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20">
        <h3 class="text-2xl font-bold mb-4 text-sky-600">Enterprise</h3>
        <p class="text-4xl font-extrabold mb-4 text-sky-800">Contact Us</p>
        <p class="text-sky-600 mb-6 invisible">/month</p>
        <ul class="text-left space-y-2 mb-8">
          <li>✓ Everything in Pro</li>
          <li>✓ Custom Integrations</li>
          <li>✓ Dedicated Support</li>
        </ul>
        <a href="/contact" 
           class="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
           title="Contact us for Enterprise Plan">
            Contact Us
        </a>
      </div>
    </div>
  </div>
</section> 