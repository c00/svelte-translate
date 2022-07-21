import Translate from './translate/Translate.svelte';
import Tx from './translate/tx.svelte';
import { getText } from './translate/getText';
import type { SvelteTranslate } from './translate/translateStore';
import { svelteTranslate } from './translate/translateStore';

export { Translate, Tx, getText, SvelteTranslate, svelteTranslate };
