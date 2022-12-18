import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(input: string): string {
	if (typeof window === undefined) return 'NOT PURIFIED';
	return DOMPurify.sanitize(input);
}
