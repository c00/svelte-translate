import DOMPurify from 'dompurify';

let failed: string = null;

export function sanitizeHtml(input: string): string {
	if (failed) return 'FAILURE ' + failed;

	if (typeof window === undefined) {
		failed = 'No window';
		return 'NO WINDOW';
	}
	try {
		console.log(DOMPurify);
		return DOMPurify.sanitize(input);
		// return typeof DOMPurify;
	} catch (err) {
		failed = 'Sanitize Error: ' + String(err);
		return 'Sanitize error';
	}
}
