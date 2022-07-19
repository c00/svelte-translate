# Sveltekit Translate

An i18n library designed to be easy to use. It's all still very basic, so if it is lacking certain features, feel free to add some PRs.

The syntax for normal usage is nice and compact. The settings and translations are contained in the context of the `<Translate />` component. Translating strings is done with the `<Tx />` component to translate stuff. The <Tx /> component takes either a `html` or a `text` property to locate the string. Optionally a `params` property can be given for interpolation. (See sample code below.)

I've deliberately chosen to have a component and not just a function (e.g. like `svelte-18n`s `$_('some.path')`) as this becomes problematic with HTML strings. I didn't want to motivate people to do `{@html $_('some-path')}`, as content parsed with `@html` is not sanitized. I strongly believe any HTML that isn't specifically hardcoded should not be trusted by default. So to make sanitization easy, the `<Tx html="path">` component will sanitize output for you using [DOMPurify](https://github.com/cure53/DOMPurify)

## Features

- 🛩️ Use any JSON file or JS object as input
- 🛰️ Supports unlimited languages
- 🛺 Interpolate parameters
- 🐒 Fallback to the default language for missing values in the current language
- 🚀 Svelte Stores are used a lot (Everything is reactive)
- 🦄 Typescript native
- 🦧 HTML output is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify)

## Install

```
npm i -D sveltekit-translate isomorphic-dompurify
```

## Live demo

[Demo](https://sveltekit-translate.vercel.app/)

## Sample Code 

Sample code for all the basic features can be found [here](https://github.com/c00/svelte-translate/tree/main/src/lib/demos).

## Basic Example

In your `__layout.svelte` create the setup:	

```html
<script lang="ts">
	import Translate from 'sveltekit-translate/translate/Translate.svelte';
	import type { TranslateOptions } from 'sveltekit-translate/translate/translateStore';

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
</script>

<Translate {opts} {data}>
	<slot />
</Translate>
```

Now you can translate anything in your app by using the `<Tx />` component:

```html
<script lang="ts">
	import Tx from 'sveltekit-translate/translate/tx.svelte';

	let name = 'world';
</script>

<div class="my-2">
	<label>
		name
		<input type="text" bind:value={name} class="py-2 px-4 ml-2 border rounded" />
	</label>
</div>

<h1 class=" mt-4 mb-2 font-bold text-2xl">
	<Tx text="title" params={{ name }} />
</h1>
<p>
	<Tx html="greeting" />
</p>
```

The `<Translate />` component creates a context called `svelte-translate` that contains a `SvelteTranslate` interface:

```ts
const { 
		options, // Writable store with the basic options
		translations, //Readible store with the translations object of the current language.
		defaultTranslations // Readible store with the translations object of the default language.
		allLanguages, // Readible string array of all languages we have translations for
		allTranslations, // Writable store containing all of the translations. Also container a convenience method `setLang()` to set or update an existing language.
	} = getContext<SvelteTranslate>(CONTEXT_KEY);
```

Example for language buttons:

```html
<script lang="ts">
	import { getContext } from 'svelte';
	import { CONTEXT_KEY, type SvelteTranslate } from 'sveltekit-translate/translate/translateStore';

	let { allLanguages, options } = getContext<SvelteTranslate>(CONTEXT_KEY);
</script>

{#each $allLanguages as lang}
	<button
		class="btn px-4 py-2 mr-2 border rounded"
		class:active={$options.currentLang === lang}
		on:click={() => ($options.currentLang = lang)}>{lang}</button
	>
{/each}

<style>
	.btn {
		min-width: 5rem;
	}

	.active {
		@apply bg-sky-400;
	}
</style>

```

## Contributing

Feel free to send PRs or create issues.