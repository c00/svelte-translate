<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import Tx from '$lib/translate/tx.svelte';
	import type { TranslateOptions } from '../translate/translateStore';
	import BasicWithFunction from './BasicWithFunction.svelte';
	import CurrentTranslations from './CurrentTranslations.svelte';
	import LanguageButtons from './LanguageButtons.svelte';

	let opts: TranslateOptions = { defaultLang: 'en', currentLang: 'nl' };
	let data = {
		en: { title: 'Hello { name }', greeting: 'You are <b>the best!</b>', 'alt-text': "Such a great movie" },
		nl: { title: 'Hoi { name }', greeting: 'Jij bent een <b>toppertje!</b>', 'alt-text': "Wat een lekkere film" },
		es: { title: 'Hola { name }', greeting: 'Eres <b>asombrosa!</b>', 'alt-text': "Una gran pelicula" }
	};

	let name = 'world';
</script>

<div class="container mx-auto">
	<h1 class="text-2xl mt-4">Basic Example</h1>
	<h4 class="mb-4">
		<a
			class="text-slate-500 hover:underline hover:text-slate-700"
			href="https://github.com/c00/svelte-translate/tree/main/src/lib/demos/Basic.svelte"
			>code on github</a
		>
	</h4>
	<Translate {opts} {data}>
		<LanguageButtons />

		<div class="my-2">
			<label>
				name
				<input type="text" bind:value={name} class="py-2 px-4 ml-2 border rounded" />
			</label>
		</div>

		<h1 class=" mt-4 mb-2 font-bold text-2xl">
			<Tx text="title" params={{ name }} />
		</h1>
		<p class="mb-2">
			<Tx html="greeting" />
		</p>

		<!-- I need the context, so it's easier to do that in a new component 
			that exists within the context. Otherwise the example gets super
			boilerplate-y
		-->
		<BasicWithFunction bind:name />

		<CurrentTranslations />
	</Translate>
</div>
