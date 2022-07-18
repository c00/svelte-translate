import type { TranslationContent } from "./translateStore";

/**
 * Get a property arbitrarily deep within an object.
 *
 * @export
 * @param {*} obj Any object
 * @param {string} path e.g. user.address.street
 * @return {*}  {*}
 */
 export function getProperty(obj: TranslationContent | string, path: string): string | TranslationContent {
  if (typeof obj === 'string') return obj;
  if (typeof obj !== 'object') return undefined;

  //Just incase we have properties with dots in them.
  if (obj[path] !== undefined) return obj[path];

  const parts = path.split('.');
  if (parts.length === 1) return obj[parts[0]];
  
  const prop = parts.shift();
  return getProperty(obj[prop], parts.join('.'));
}