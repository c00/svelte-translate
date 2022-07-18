<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import type { TranslateOptions } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';
	import CurrentTranslations from './CurrentTranslations.svelte';
	import LanguageButtons from './LanguageButtons.svelte';

	let opts: TranslateOptions = { defaultLang: 'en', currentLang: 'nl' };
	let data = {
		en: { title: 'Hello { name }', greeting: 'You are <b>the best!</b>' },
		nl: { title: 'Hoi { name }', greeting: 'Jij bent een <b>toppertje!</b>' }
	};

	let spanish = { title: 'Hola { name }', greeting: 'Eres <b>asombrosa!</b>' };
	let translateComponent: Translate;

	let name = 'world';

	function addSpanish() {
		const tx = translateComponent.getTranslate();
		tx.allTranslations.setLang('es', spanish);
	}
</script>

<div class="container mx-auto">
	<h1 class="text-2xl mt-4 mb-2">Add Language Example</h1>
	<Translate bind:this={translateComponent} {opts} {data}>
		<LanguageButtons />

		<div>
			<button class="py-2 px-4 border rounded my-2" on:click={addSpanish}>Add Spanish</button>
		</div>

		<h1 class=" mt-4 mb-2 font-bold text-2xl">
			<Tx text="title" params={{ name }} />
		</h1>
		<p>
			<Tx html="greeting" />
		</p>

		<CurrentTranslations />
	</Translate>
</div>
