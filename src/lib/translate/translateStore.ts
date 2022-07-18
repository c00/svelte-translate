import { derived, writable, type Readable } from 'svelte/store';

export const CONTEXT_KEY = 'svelte-translate';

export interface TranslationContent {
	[key: string]: string | TranslationContent;
}

export interface TranslateOptions {
	defaultLang: string;
	currentLang: string;
	//Add stuff like loaders, missingTranslationHandler, SanitizeHandlers
}

export interface TranslateOptionsStore extends Readable<TranslateOptions> {
	set: (allData: TranslateOptions) => void;
	setCurrent: (lang: string) => void;
	setDefault: (lang: string) => void;
}

export interface AllTranslationsStore extends Readable<TranslationContent> {
	set: (allData: TranslationContent) => void;
	setLang: (lang: string, data: TranslationContent) => void;
}

export interface SvelteTranslate {
	options: TranslateOptionsStore;
	allTranslations: AllTranslationsStore;
	defaultTranslations: Readable<TranslationContent | string>;
	translations: Readable<TranslationContent | string>;
	allLanguages: Readable<string[]>;
}

const defaultTranslateOptions: TranslateOptions = {
	defaultLang: 'en',
	currentLang: 'en'
};

function getAllTransStore(initial: TranslationContent): AllTranslationsStore {
	const { set, update, subscribe } = writable<TranslationContent>(initial);

	return {
		set,
		subscribe,
		setLang: (lang: string, data: TranslationContent) =>
			update((val) => {
				val[lang] = data;
				return { ...val };
			})
	};
}

function getOptionsStore(initial: TranslateOptions): TranslateOptionsStore {
	const { set, update, subscribe } = writable<TranslateOptions>(initial);

	return {
		set,
		subscribe,
		setCurrent: (lang: string) =>
			update((val: TranslateOptions) => {
				val.currentLang = lang;
				return { ...val };
			}),
		setDefault: (lang: string) =>
			update((val: TranslateOptions) => {
				val.defaultLang = lang;
				return { ...val };
			})
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function svelteTranslate(opts?: TranslateOptions, translationData?: any): SvelteTranslate {
	const mergedOpts = { ...defaultTranslateOptions, ...opts };
	if (!translationData) translationData = {};

	const allTranslations = getAllTransStore(translationData);
	const options = getOptionsStore(mergedOpts);

	const defaultTranslations = derived(
		[allTranslations, options],
		([$allTranslations, $options]) => {
			return $allTranslations[$options.defaultLang] || {};
		}
	);

	const translations = derived([allTranslations, options], ([$allTranslations, $options]) => {
		return $allTranslations[$options.currentLang] || {};
	});

	const allLanguages = derived(allTranslations, ($allTranslations) => {
		return Object.keys($allTranslations) || [];
	});

	return {
		options,
		allTranslations,
		defaultTranslations,
		translations,
		allLanguages
	};
}
