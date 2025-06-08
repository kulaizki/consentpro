<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	async function smoothScroll(event: MouseEvent) {
		const anchor = event.currentTarget as HTMLAnchorElement;
		const href = anchor.getAttribute('href');

		if (href && href.startsWith('/#')) {
			event.preventDefault();
			const targetId = href.substring(2);

			if (page.url.pathname !== '/') {
				await goto('/');
				await tick();
			}

			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (href === '/') {
			if (page.url.pathname === '/') {
				event.preventDefault();
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
			// On other pages, allow default navigation to home
		}
	}
</script>

<header class="bg-gray-950/90 backdrop-blur-md border-b-2 border-sky-600 sticky top-0 z-50 py-2">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<a href="/" class="flex items-center group z-10" on:click={(e) => { smoothScroll(e); mobileMenuOpen = false; }}>
			<img
				src="/consentpro-logo-text-min.png"
				alt="ConsentPro Logo"
				class="h-12 w-auto group-hover:opacity-80 transition-opacity duration-150"
			/>
		</a>

		<!-- Desktop Navigation Links -->
		<ul class="hidden md:flex items-center space-x-6">
			<li><a href="/#solution" class="font-medium text-white hover:text-sky-300 transition-colors" on:click={smoothScroll}>Solution</a></li>
			<li><a href="/#features" class="font-medium text-white hover:text-sky-300 transition-colors" on:click={smoothScroll}>Features</a></li>
			<li><a href="/#how-it-works" class="font-medium text-white hover:text-sky-300 transition-colors" on:click={smoothScroll}>Process</a></li>
			<li><a href="/#benefits" class="font-medium text-white hover:text-sky-300 transition-colors" on:click={smoothScroll}>Benefits</a></li>
			<li><a href="/#pricing" class="font-medium text-white hover:text-sky-300 transition-colors" on:click={smoothScroll}>Pricing</a></li>
			<li><a href="/contact" class="inline-block text-sky-950 font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:scale-105">Contact</a></li>
		</ul>

		<!-- Hamburger Menu Button (Mobile) -->
		<div class="md:hidden flex items-center z-50">
			<button
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
				class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white relative w-8 h-8 text-white"
			>
				<span class="sr-only">Open main menu</span>
				<!-- Animated Hamburger/Close Icon -->
				<div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}"></span>
					<span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {mobileMenuOpen ? 'opacity-0' : ''}"></span>
					<span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}"></span>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div transition:fly={{ y: -20, duration: 300 }} class="md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-md shadow-lg pt-2 pb-4 z-40">
			<div class="container mx-auto px-4 flex flex-col space-y-2">
				<a href="/#solution" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={smoothScroll} on:click={toggleMobileMenu}>Solution</a>
				<a href="/#features" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={smoothScroll} on:click={toggleMobileMenu}>Features</a>
				<a href="/#how-it-works" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={smoothScroll} on:click={toggleMobileMenu}>Process</a>
				<a href="/#benefits" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={smoothScroll} on:click={toggleMobileMenu}>Benefits</a>
				<a href="/#pricing" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={smoothScroll} on:click={toggleMobileMenu}>Pricing</a>
				<a href="/contact" class="block px-3 py-2 rounded-md font-semibold text-white hover:text-sky-300 hover:bg-transparent transition-colors" on:click={toggleMobileMenu}>Contact</a>
			</div>
		</div>
	{/if}
</header>