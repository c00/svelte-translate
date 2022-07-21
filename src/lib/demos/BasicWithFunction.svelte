<script lang="ts">
	import { getContext } from 'svelte';
	import { CONTEXT_KEY, type SvelteTranslate } from '../translate/translateStore';

	export let name: string;

	let { t, h } = getContext<SvelteTranslate>(CONTEXT_KEY);
</script>

<p class="mb-2">
	{$t('title', { name })} <span class="italic">&lt;-- Called from function</span>
</p>

<p class="mb-2">
	{@html $h('greeting')} <span class="italic">&lt;-- Called from function</span>
</p>

<div class="m-4">
	Image with translated alt text and title
	<img
		src="https://api.lorem.space/image/movie?w=150&h=220"
		alt={$t('alt-text')}
		title={$t('alt-text')}
	/>
</div>
