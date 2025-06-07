<script lang="ts">
	import { page } from '$app/stores';

	export let title: string = 'ConsentPro';
	export let description: string =
		"Simplify data privacy compliance with ConsentPro. Our platform provides automated consent management tools to help Philippine businesses comply with NPC Circular No. 2023-04.";
	export let image: string = '/consentpro-og.png'; 
	export let siteName: string = 'ConsentPro';
	export let author: string | null = null;
	export let keywords: string = 'data privacy, NPC Circular 2023-04, consent management, Philippines, compliance software, data protection, SaaS, consent forms, privacy tool';

	const siteUrlBase: string = 'https://www.consentpro.vercel.app';

	$: currentPath = $page.url.pathname;

	function getAbsoluteImageUrl(imgPath: string): string {
		if (imgPath.startsWith('http')) {
			return imgPath;
		}
		const path = imgPath.startsWith('/') ? imgPath.substring(1) : imgPath;
		return `${siteUrlBase}/${path}`;
	}

	$: absoluteImageUrl = getAbsoluteImageUrl(image);

	$: canonicalUrl = `${siteUrlBase}${currentPath}`;

	// Construct JSON-LD
	$: jsonLdSchema = {
		'@context': 'https://schema.org',
		'@type': 'Website',
		name: siteName,
		url: canonicalUrl,
		logo: getAbsoluteImageUrl('/consentpro-logo-text-min.png'),
        description: description,
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
	<meta property="og:image" content={absoluteImageUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={new URL(siteUrlBase).hostname} />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImageUrl} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLdSchema, null, 2)}</script>`}
</svelte:head> 