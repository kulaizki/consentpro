<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 py-4">
  <nav class="container mx-auto px-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-extrabold text-cyan-800">ConsentPro</a>
    <div class="md:hidden cursor-pointer" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    </div>
    <ul class="hidden md:flex items-center space-x-6" class:!flex={isMenuOpen} class:flex-col={isMenuOpen} class:absolute={isMenuOpen} class:top-full={isMenuOpen} class:left-0={isMenuOpen} class:w-full={isMenuOpen} class:bg-white={isMenuOpen} class:py-4={isMenuOpen} class:border-t={isMenuOpen} class:border-gray-200={isMenuOpen}>
      <li><a href="#features" class="font-semibold text-gray-800 hover:text-cyan-800 transition-colors">Features</a></li>
      <li><a href="#benefits" class="font-semibold text-gray-800 hover:text-cyan-800 transition-colors">Benefits</a></li>
      <li><a href="#pricing" class="font-semibold text-gray-800 hover:text-cyan-800 transition-colors">Pricing</a></li>
      <li><a href="#contact" class="bg-cyan-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-blue);
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: var(--text-color);
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: var(--primary-blue);
    text-decoration: none;
  }

  .nav-links a.cta {
    background-color: var(--primary-blue);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .nav-links a.cta:hover {
    background-color: var(--secondary-blue);
    color: var(--white);
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: var(--white);
      padding: 1rem 0;
      border-top: 1px solid #eee;
    }

    .nav-links.open {
      display: flex;
      align-items: center;
    }

    .menu-icon {
      display: block;
    }
  }
</style> 