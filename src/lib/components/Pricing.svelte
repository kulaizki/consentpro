<script lang="ts">
  import { inview } from 'svelte-inview';

  let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
</script>

<section 
  id="pricing" 
  class="py-16 bg-sky-50 border-b border-sky-200 min-h-screen flex flex-col justify-center overflow-hidden"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
      setTimeout(() => {
        applyDelay = false;
      }, 1050);
    }
  }}
>
  <div class="container mx-auto px-4">
    <h2
      class="text-center text-4xl font-extrabold mb-12 text-sky-800 transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-8'}"
      style="transition-delay: 100ms;"
    >
      Choose Your Plan
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
      <div
        class="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-gray-200 text-center transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20 {isInView
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10'}"
        style="{applyDelay ? 'transition-delay: 250ms;' : 'transition-delay: 0ms;'}"
      >
        <h3 class="text-2xl font-bold text-sky-800 mb-4">Basic</h3>
        <p class="text-sky-600 mb-8"><span class="text-4xl font-bold">₱1,499</span>/mo</p>
        <ul class="space-y-4 mb-10 text-sky-800/80">
          <li>Consent Form Builder</li>
          <li>Consent Management Dashboard</li>
          <li>Up to 1,000 consent records</li>
          <li>Email Support</li>
        </ul>
        <a
          href="/subscribe/basic"
          class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            ><path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            /></svg
          >
        </a>
      </div>
      <div
        class="bg-white/80 backdrop-blur-sm p-10 rounded-lg shadow-lg shadow-sky-400/40 border-2 border-sky-400 text-center transform transition-all duration-500 ease-out relative {isInView
          ? 'opacity-100 scale-105'
          : 'opacity-0 scale-95'}"
        style="{applyDelay ? 'transition-delay: 400ms;' : 'transition-delay: 0ms;'}"
      >
        <p
          class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-sm font-bold px-4 py-1 rounded-full"
        >
          Most Popular
        </p>
        <h3 class="text-3xl font-extrabold text-sky-800 mb-4">Pro</h3>
        <p class="text-sky-600 mb-8"><span class="text-5xl font-bold">₱3,999</span>/mo</p>
        <ul class="space-y-4 mb-10 text-sky-800/80">
          <li>All features in Basic</li>
          <li>Automated Transparency Notices</li>
          <li>Consent Withdrawal Handling</li>
          <li>Up to 10,000 consent records</li>
          <li>Priority Email & Chat Support</li>
        </ul>
        <a
          href="/subscribe/pro"
          class="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
        >
          Choose Pro
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            ><path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            /></svg
          >
        </a>
      </div>
      <div
        class="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-gray-200 text-center transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/20 {isInView
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10'}"
        style="{applyDelay ? 'transition-delay: 550ms;' : 'transition-delay: 0ms;'}"
      >
        <h3 class="text-2xl font-bold text-sky-800 mb-4">Enterprise</h3>
        <p class="text-sky-600 mb-8"><span class="text-4xl font-bold">Custom</span></p>
        <ul class="space-y-4 mb-10 text-sky-800/80">
          <li>All features in Pro</li>
          <li>Compliance Reporting</li>
          <li>Unlimited consent records</li>
          <li>Dedicated Account Manager</li>
          <li>API Access & Integrations</li>
        </ul>
        <a
          href="/contact/enterprise"
          class="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-padding hover:from-sky-500 hover:to-sky-700 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            ><path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            /></svg
          >
        </a>
      </div>
    </div>
  </div>
</section> 