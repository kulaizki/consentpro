<script lang="ts">
	import { page } from '$app/state';

	export let title: string = 'ConsentPro';
	export let description: string =
		"Simplify data privacy compliance with ConsentPro.";
	export let image: string = '/consentpro-og.png'; 
	export let siteName: string = 'ConsentPro';
	export let author: string | null = null;
	export let keywords: string = 'data privacy, NPC Circular 2023-04, consent management, Philippines, compliance software, data protection, SaaS, consent forms, privacy tool';

	const siteUrlBase: string = 'https://consentpro.vercel.app';

	$: currentPath = page.url.pathname;

	$: canonicalUrl = `${siteUrlBase}${currentPath}`;
	const logoUrl: string = '/cp-logo-min.png';

	// Construct JSON-LD
	$: jsonLdSchema = {
		'@context': 'https://schema.org',
		'@type': 'Website',
		name: siteName,
		url: canonicalUrl,
		logo: `${siteUrlBase}/consentpro-logo-text-min.png`,
		description: description
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	{#if author}
		<meta name="author" content={author} />
	{/if}
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:logo" content={logoUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={new URL(siteUrlBase).hostname} />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLdSchema, null, 2)}</script>`}
</svelte:head> 