<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isVisible = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScroll() {
    const scrollY = window.scrollY;
    const triggerY = window.innerHeight / 2;
    isVisible = scrollY > triggerY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if isVisible}
  <button
    transition:fly={{ y: 20, duration: 300 }}
    type="button"
    class="hover:cursor-pointer fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg transition-colors duration-300"
    on:click={scrollToTop}
    aria-label="Back to Top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
{/if} 