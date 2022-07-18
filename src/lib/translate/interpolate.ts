import { getProperty } from './getProperty';

/**
 * Replace '{ value }' occurances with the data from params
 *
 * @export
 * @param {string} subject
 * @param {*} params
 * @return {*}  {string}
 */
 export function interpolate(subject: string, params: any): string {
  if (!subject) return subject;

  const regex = /{\s*\S*\s*}/gm;

  const matches = subject.matchAll(regex);
  for (const m of matches) {
    const key = m[0].substring(2, m[0].length - 2).trim();
    const value = getProperty(params, key);
    if (typeof value === 'string' || typeof value === 'number')
      subject = subject.replace(m[0], String(value));
  }

  return subject;
}