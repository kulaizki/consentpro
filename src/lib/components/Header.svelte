<script lang="ts">
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-gray-950/90 backdrop-blur-md border-b-2 border-sky-600 sticky top-0 z-50 py-2">
  <nav class="container mx-auto px-4 flex justify-between items-center">
    <a href="/" aria-label="ConsentPro Home">
      <img src="/cp-logo-text-min.png" alt="ConsentPro Logo" class="h-12 w-auto" />
    </a>
    <button type="button" class="md:hidden cursor-pointer" on:click={toggleMenu} aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    </button>
    <ul class="hidden md:flex items-center space-x-6" class:!flex={isMenuOpen} class:flex-col={isMenuOpen} class:absolute={isMenuOpen} class:top-full={isMenuOpen} class:left-0={isMenuOpen} class:w-full={isMenuOpen} class:bg-gray-950={isMenuOpen} class:py-4={isMenuOpen} class:border-t-2={isMenuOpen} class:border-sky-600={isMenuOpen}>
      <li><a href="#features" class="font-semibold text-sky-200 hover:text-white transition-colors">Features</a></li>
      <li><a href="#benefits" class="font-semibold text-sky-200 hover:text-white transition-colors">Benefits</a></li>
      <li><a href="#pricing" class="font-semibold text-sky-200 hover:text-white transition-colors">Pricing</a></li>
      <li><a href="#contact" class="inline-block text-sky-800 font-bold px-4 py-2 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:scale-105">Contact</a></li>
    </ul>
  </nav>
</header> 