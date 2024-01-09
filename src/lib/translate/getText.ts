import type { TranslationContent } from '$lib/translate/translateStore.js';
import { getProperty } from '$lib/translate/getProperty.js';
import { interpolate } from '$lib/translate/interpolate.js';
import { sanitizeHtml } from '$lib/translate/sanitizeHtml.js';

export interface GetTextData {
	path: string;
	cur: TranslationContent;
	def: TranslationContent;
	purify?: boolean;
	params?: unknown;
}

export function getText(data: GetTextData): string {
	let result = '';
	let val = getProperty(data.cur, data.path);
	//If not found, fallback to defaults
	if (val === undefined) val = getProperty(data.def, data.path);

	if (val === undefined) {
		result = data.path;
	} else if (typeof val === 'string') {
		result = val;
	} else {
		console.warn(`Path ${data.path} is not a leaf node`, val);
		result = data.path;
	}

	result = interpolate(result, data.params);

	if (data.purify) {
		result = sanitizeHtml(result);
	}

	return result;
}
