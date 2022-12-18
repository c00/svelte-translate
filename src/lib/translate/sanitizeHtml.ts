import sanitize from 'sanitize-html';

export function sanitizeHtml(input: string): string {
	return sanitize(input);
}
