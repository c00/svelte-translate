import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		package: {
			exports: (path) => {
				if (path === 'index.ts') return true;
				if (path.startsWith('demos/')) return false;
				return true;
			},
			files: (file) => {
				if (file === 'index.ts') return true;
				if (file.startsWith('demos/')) return false;
				return true;
			}
		}
	}
};

export default config;
