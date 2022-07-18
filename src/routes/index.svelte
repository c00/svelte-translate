<script lang="ts">
	import AddLanguage from '../lib/demos/AddLanguage.svelte';
	import Basic from '../lib/demos/Basic.svelte';
	import Fallback from '../lib/demos/Fallback.svelte';
	import Missing from '../lib/demos/Missing.svelte';
	import Nested from '../lib/demos/Nested.svelte';
	import SetCurrentAndDefault from '../lib/demos/SetCurrentAndDefault.svelte';
</script>

<div class="container mx-auto pb-24">
	<h1 class=" mt-4 mb-2 font-bold text-2xl">Svelte Translate</h1>
	<p class="mt-1 mb-4">These demos can be found inside the src/lib/demos folder.</p>

	<Basic />
	<hr class="my-4" />
	<Nested />
	<hr class="my-4" />
	<Fallback />
	<hr class="my-4" />
	<Missing />
	<hr class="my-4" />
	<AddLanguage />
	<hr class="my-4" />
	<SetCurrentAndDefault />
</div>
