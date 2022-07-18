# Svelte-translate

An i18n library designed to be easy to use. It's all still very basic, so if it is lacking certain features, feel free to add some PRs.

The syntax for normal usage is nice and compact. The settings and translations are contained in the context of the `<Translate />` component. Translating strings is done with the `<Tx />` component to translate stuff. The <Tx /> component takes either a `html` or a `text` property to locate the string. Optionally a `params` property can be given for interpolation. (See sample code below.)

I've deliberately chosen to have a component and not just a function (e.g. like `svelte-18n`s `$_('some.path')`) as this becomes problematic with HTML strings. I didn't want to motivate people to do `{@html $_('some-path')}`, as content parsed with `@html` is not sanitized. I strongly believe any HTML that isn't specifically hardcoded should not be trusted by default. So to make sanitization easy, the `<Tx html="path">` component will sanitize output for you using [DOMPurify](https://github.com/cure53/DOMPurify)

## Features

- Use any JSON file or JS object as input
- Supports unlimited languages
- Interpolate parameters
- Svelte Stores are used a lot (Everything is reactive)
- Typescript native
- HTML output is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify)

## Install

```
npm i -D svelte-translate
```

## Sample Code 

Sample code for all the basic features can be found [here](https://github.com/c00/svelte-translate/tree/main/src/lib/demos).

## Basic Example

```html
<script lang="ts">
	import Translate from '$lib/translate/Translate.svelte';
	import type { TranslateOptions } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';
	import CurrentTranslations from './CurrentTranslations.svelte';
	import LanguageButtons from './LanguageButtons.svelte';

	let opts: TranslateOptions = { 
    defaultLang: 'en', //Set your default (or fallback) language
    currentLang: 'nl', //Set your current language
  };

  //Initial translation data. This could of course be fetched from somewhhere.
  //The library doesn't care how you get the translations.
	let data = {
		en: { title: 'Hello { name }', greeting: 'You are <b>the best!</b>' },
		nl: { title: 'Hoi { name }', greeting: 'Jij bent een <b>toppertje!</b>' },
		es: { title: 'Hola { name }', greeting: 'Eres <b>asombrosa!</b>' }
	};

	let name = 'world';
</script>

<div class="container mx-auto">
	<h1 class="text-2xl mt-4 mb-2">Basic Example</h1>
	<Translate {opts} {data}>
		<h1 class=" mt-4 mb-2 font-bold text-2xl">
			<Tx text="title" params={{ name }} />
		</h1>
		<p>
			<Tx html="greeting" />
		</p>
	</Translate>
</div>
```

## Contributing

Feel free to send PRs or create issues.