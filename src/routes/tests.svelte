<script lang="ts">
	import { currentLang, translations } from '$lib/translate/translateStore';
	import Tx from '$lib/translate/tx.svelte';

  const params = { foo: 'bar', name: 'Jimmy' };
	const inputs = [
		'title',
		'ok',
		'cancel',
		'page',
		'page.profile',
		'doesnt.exist',
		'page.some-html'
	];
	function toggle() {
		if ($currentLang === 'nl') {
			$currentLang = 'en';
		} else {
			$currentLang = 'nl';
		}
	}
</script>

Testing Translations.

<button on:click={toggle} class="btn">Toggle Language</button>

<pre>{JSON.stringify($translations, null, 2)}</pre>

{#each inputs as i}
	<div>
		{i}:
		<Tx text={i} {params} />
	</div>
{/each}

{#each inputs as i}
	<div>
		{i}:
		<Tx html={i} {params} />
	</div>
{/each}
