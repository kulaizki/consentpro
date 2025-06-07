<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
