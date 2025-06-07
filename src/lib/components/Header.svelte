<script lang="ts">
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 py-4">
  <nav class="container mx-auto px-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-extrabold text-sky-800">ConsentPro</a>
    <button type="button" class="md:hidden cursor-pointer" on:click={toggleMenu} aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    </button>
    <ul class="hidden md:flex items-center space-x-6" class:!flex={isMenuOpen} class:flex-col={isMenuOpen} class:absolute={isMenuOpen} class:top-full={isMenuOpen} class:left-0={isMenuOpen} class:w-full={isMenuOpen} class:bg-white={isMenuOpen} class:py-4={isMenuOpen} class:border-t={isMenuOpen} class:border-gray-200={isMenuOpen}>
      <li><a href="#features" class="font-semibold text-gray-800 hover:text-sky-600 transition-colors">Features</a></li>
      <li><a href="#benefits" class="font-semibold text-gray-800 hover:text-sky-600 transition-colors">Benefits</a></li>
      <li><a href="#pricing" class="font-semibold text-gray-800 hover:text-sky-600 transition-colors">Pricing</a></li>
      <li><a href="#contact" class="inline-block text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white transform hover:scale-105">Contact</a></li>
    </ul>
  </nav>
</header> 