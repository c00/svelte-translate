import { derived, writable } from 'svelte/store';

const en = {
	title: 'This is a title: { name }',
	ok: 'OK',
  cancel: 'cancelling',
	page: { profile: 'Profile Page', 'some-html': "<strong>I'm strong like hulk</strong>. Yay" }
};
const nl = {
	title: 'Dit is een titel',
	ok: 'Okee',
	page: { profile: 'Mijn Profiel', 'some-html': '<strong>Lekkere dikke tieten</strong>. Yay' }
};

export const allTranslations = writable<TranslationContent>({ en, nl });

export const defaultLang = writable<string>('en');
export const defaultTranslations = derived(
	[allTranslations, defaultLang],
	([$allTranslations, $defaultLang]) => {
		return $allTranslations[$defaultLang] || {};
	}
);

export const currentLang = writable<string>('en');
export const translations = derived(
	[allTranslations, currentLang],
	([$allTranslations, $currentLang]) => {
		return $allTranslations[$currentLang] || {};
	}
);

export interface TranslationContent {
	[key: string]: string | TranslationContent;
}
