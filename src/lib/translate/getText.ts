import type { TranslationContent } from './translateStore';
import { getProperty } from './getProperty';
import { interpolate } from './interpolate';
import { sanitizeHtml } from './sanitizeHtml';

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
		console.warn(`Path ${data.path} is not a leaf node`);
		result = '[object]';
	}

	result = interpolate(result, data.params);

	if (data.purify) {
		result = sanitizeHtml(result);
	}

	return result;
}
