// import DOMPurify from 'dompurify';
import sanitize from 'sanitize-html';

let failed: string = null;

export function sanitizeHtml(input: string): string {
	// import(`isomorphic-dompurify`)
	// 	.then((module) => console.log('imported', module))
	// 	.catch((er) => (failed = 'import error ' + String(er)));
	if (failed) return 'FAILURE ' + failed;

	if (typeof window === undefined) {
		failed = 'No window';
		return 'NO WINDOW';
	}
	try {
		return sanitize(input);
		// console.log(module, typeof module.sanitize);
		// return module.sanitize(input);
		// return typeof DOMPurify;
	} catch (err) {
		failed = 'Sanitize Error: ' + String(err);
		return 'Sanitize error';
	}
}
