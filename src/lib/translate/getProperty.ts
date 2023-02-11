import type { TranslationContent } from '$lib/translate/translateStore.js';

/**
 * Get a property arbitrarily deep within an object.
 *
 * @export
 * @param {*} obj Any object
 * @param {string} path e.g. user.address.street
 * @return {*}  {*}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getProperty(obj: any, path: string): string | TranslationContent {
	if (obj === undefined) return undefined;
	if (obj === null) return undefined;
	if (typeof obj === 'string') return obj;
	if (typeof obj !== 'object') return undefined;

	//Just incase we have properties with dots in them.
	if (obj[path] !== undefined) return obj[path];

	const parts = path.split('.');
	if (parts.length === 1) return obj[parts[0]];

	const prop = parts.shift();
	return getProperty(obj[prop], parts.join('.'));
}
