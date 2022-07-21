<script lang="ts">
	import { getContext } from 'svelte';
	import { CONTEXT_KEY, type SvelteTranslate } from '../translate/translateStore';

	let { defaultTranslations } = getContext<SvelteTranslate>(CONTEXT_KEY);
</script>

<h1 class="text-lg mt-4 mb-2">Default Translations Object</h1>
<pre class="border p-4 bg-slate-200 rounded">{JSON.stringify($defaultTranslations, null, 2)}</pre>
