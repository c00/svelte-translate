<script lang="ts">
	import { setContext } from 'svelte';
	import { CONTEXT_KEY, svelteTranslate, type TranslateOptions } from './translateStore.js';

	export let opts: TranslateOptions = null;
	export let data: any = null;

	let translate = svelteTranslate(opts, data);

	setContext(CONTEXT_KEY, translate);

	export const getTranslate = () => {
		return translate;
	};
</script>

<slot />
