import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	 kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'public',
      assets: 'public',
      fallback: null,
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: ['/', '/results']
		}
  }
};

export default config;
