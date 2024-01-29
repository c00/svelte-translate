<script lang="ts">
	import { getContext } from 'svelte';
	import { getText } from './getText.js';
	import { CONTEXT_KEY, type SvelteTranslate } from './translateStore.js';

	export let text: string = null;
	export let html: string = null;

	export let params: any = {};

	let translate = getContext<SvelteTranslate>(CONTEXT_KEY);

	$: translations = translate.translations;
	$: defaultTranslations = translate.defaultTranslations;
	$: if ($translations || params) setOutput();

	let output: string;

	function setOutput() {
		const path = text || html;

		output = getText({
			path,
			cur: $translations,
			def: $defaultTranslations,
			params
		});
	}
</script>

{#if text}
	{output}
{:else}
	{@html output}
{/if}
