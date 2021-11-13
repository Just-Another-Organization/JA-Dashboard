import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import * as path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		vite: {
			server: {
				watch: {
					usePolling: true
				}
			},
			resolve: {
				alias: {
					'$lib': path.resolve('./src/lib'),
					'$ja-component': path.resolve('./src/lib/components/ja-components'),
					'$models': path.resolve('./src/lib/models'),
					'$module': path.resolve('./src/lib/components/modules'),
					'$setting': path.resolve('./src/lib/components/setting-details'),
					'$store': path.resolve('./src/store'),
				}
			}
		}
	}
};

export default config;
