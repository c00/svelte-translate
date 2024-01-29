<script lang="ts">
	import { getContext } from 'svelte';
	import { CONTEXT_KEY, type SvelteTranslate } from '../translate/translateStore';

	let { allLanguages, options } = getContext<SvelteTranslate>(CONTEXT_KEY);
</script>

<h2>Languages</h2>
{#each $allLanguages as lang}
	<button
		class="btn px-4 py-2 mr-2 border rounded"
		class:active={$options.currentLang === lang}
		on:click={() => ($options.currentLang = lang)}>{lang}</button
	>
{/each}

<style lang="postcss">
	.btn {
		min-width: 5rem;
	}

	.active {
		@apply bg-sky-400;
	}
</style>
