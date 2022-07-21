<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import type { TranslateOptions } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';
	import CurrentTranslations from './CurrentTranslations.svelte';
	import DefaultTranslations from './DefaultTranslations.svelte';

	let opts: TranslateOptions = { defaultLang: 'en', currentLang: 'nl' };
	let data = {
		en: { title: 'Hello { name }' },
		nl: {}
	};

	let name = 'world';
</script>

<div class="container mx-auto">
	<h1 class="text-2xl mt-4">Fallback to Default language</h1>
	<h4 class="mb-4">
		<a
			class="text-slate-500 hover:underline hover:text-slate-700"
			href="https://github.com/c00/svelte-translate/tree/main/src/lib/demos/Fallback.svelte"
			>code on github</a
		>
	</h4>
	<Translate {opts} {data}
		>1
		<p>
			The title is missing in the current language (nl), so it falls back to the default language
			(en)
		</p>

		<div class="my-2">
			<label>
				name
				<input type="text" bind:value={name} class="py-2 px-4 ml-2 border rounded" />
			</label>
		</div>

		<h1 class=" mt-4 mb-2 font-bold text-2xl">
			<Tx text="title" params={{ name }} />
		</h1>

		<div class="flex gap-4">
			<div class="grow">
				<CurrentTranslations />
			</div>
			<div class="grow">
				<DefaultTranslations />
			</div>
		</div>
	</Translate>
</div>
