<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import type { TranslateOptions } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';
	import CurrentTranslations from './CurrentTranslations.svelte';
	import LanguageButtons from './LanguageButtons.svelte';

	let opts: TranslateOptions = { defaultLang: 'en', currentLang: 'nl' };
	let data = {
		en: {
			title: 'Hello world',
			pages: { home: { header: { greeting: 'You are <b>the best!</b>' } } }
		},
		nl: {
			title: 'Hoi world',
			pages: { home: { header: { greeting: 'Jij bent een <b>toppertje!</b>' } } }
		}
	};
</script>

<div class="container mx-auto">
	<h1 class="text-2xl mt-4">Nested Example</h1>
	<h4 class="mb-4">
		<a
			class="text-slate-500 hover:underline hover:text-slate-700"
			href="https://github.com/c00/svelte-translate/tree/main/src/lib/demos/Nested.svelte"
			>code on github</a
		>
	</h4>
	<Translate {opts} {data}>
		<LanguageButtons />

		<h1 class=" mt-4 mb-2 font-bold text-2xl">
			<Tx text="title" />
		</h1>
		<p>
			<Tx html="pages.home.header.greeting" />
		</p>

		<CurrentTranslations />
	</Translate>
</div>
