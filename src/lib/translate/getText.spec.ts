import { getText } from './getText';

describe('getText', () => {
	test('getText, simple', () => {
		const def = { title: 'Hello default' };
		const cur = { title: 'Hello current' };
		const params = {};
		const purify = false;
		const path = 'title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('Hello current');
	});

	test('getText, fallback to default', () => {
		const def = { title: 'Hello default' };
		const cur = {};
		const params = {};
		const purify = false;
		const path = 'title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('Hello default');
	});

	test('getText, fallback to path', () => {
		const def = {};
		const cur = {};
		const params = {};
		const purify = false;
		const path = 'title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('title');
	});

	test('getText, deep path', () => {
		const def = { its: { too: { deep: { title: 'Hello default' } } } };
		const cur = { its: { too: { deep: { title: 'Hello current' } } } };
		const params = {};
		const purify = false;
		const path = 'its.too.deep.title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('Hello current');
	});

	test('getText, params', () => {
		const def = { title: 'Hello default' };
		const cur = { title: 'Hello {name}' };
		const params = { name: 'Spongebob' };
		const purify = false;
		const path = 'title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('Hello Spongebob');
	});

	test('getText, purify', () => {
		const def = { title: 'Hello default' };
		const cur = { title: 'Hello <script>alert("wut")</script>' };
		const params = {};
		const purify = true;
		const path = 'title';

		const result = getText({ def, cur, params, purify, path });

		expect(result).toBe('Hello ');
	});
});
