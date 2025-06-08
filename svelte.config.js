import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isDevelopment = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),

		csp: {
			mode: 'auto',
			directives: {
				'script-src': [
					'self',
					'https://cloud.umami.is',
					'%sveltekit.nonce%',
					// Vite's dev server needs 'unsafe-eval' for sourcemaps and HMR.
					...(isDevelopment ? ['unsafe-eval'] : [])
				],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'connect-src': ['self', 'https://cloud.umami.is', 'https://*.vercel-insights.com'],
				'base-uri': ['self'],
				'object-src': ['none']
			}
		}
	}
};

export default config;
