<script lang="ts">
	import { getProperty } from './getProperty';
	import { interpolate } from './interpolate';
	import { sanitizeHtml } from './sanitizeHtml';
	import { translations, defaultTranslations } from './translateStore';

	export let text: string = null;
	export let html: string = null;

	export let params: any = {};

	$: if ($translations) setOutput();

	let output: string;

	function setOutput() {
		const path = text || html;

		let result = '';
		let val = getProperty($translations, path);
		//If not found, fallback to defaults
		if (val === undefined) val = getProperty($defaultTranslations, path);

		if (val === undefined) {
			result = path;
		} else if (typeof val === 'string') {
			result = val;
		} else {
			console.warn(`Path ${path} is not a leaf node`);
			result = '[object]';
		}

		output = interpolate(result, params);
	}
</script>

{#if text}
	{output}
{:else}
	{@html sanitizeHtml(output)}
{/if}
