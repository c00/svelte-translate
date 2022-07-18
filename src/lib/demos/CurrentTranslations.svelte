<script lang="ts">
	import { getContext } from 'svelte';
	import { CONTEXT_KEY, type SvelteTranslate } from '../translate/translateStore';

	let { translations } = getContext<SvelteTranslate>(CONTEXT_KEY);
</script>

<h1 class="text-lg mt-4 mb-2">Current Translations Object</h1>
<pre class="border p-4 bg-slate-200 rounded">{JSON.stringify($translations, null, 2)}</pre>