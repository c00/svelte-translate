# Svelte-translate

An i18n library designed to be easy to use.

## Install

```
npm i -D svelte-translate
```

## Basic Setup

Define your current language and your default language:

```html
<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import { translationData } from '$lib/mocks/mockTranslations';
	import type { TranslateOptions } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';

	let opts: TranslateOptions = { defaultLang: 'en', currentLang: 'nl' };
	let data = { 
    en: { title: 'Hello { name }', greeting: 'You are <b>the best!</b>' },
    nl: { title: 'Hoi { name }', greeting: 'You are <b>the best!</b>' },
    es: { title: 'Hola { name }', greeting: 'You are <b>the best!</b>' },
  };
</script>

<div class="container mx-auto">
	<Translate {opts} {data}>
		<h1 class=" mt-4 mb-2 font-bold text-2xl">
      <Tx text='title' params={{ name: 'world' }}>
    </h1>
    <p>
      <Tx html="greeting" />
    </p>
	</Translate>
</div>

```