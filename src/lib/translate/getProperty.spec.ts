import { getProperty } from './getProperty';

describe('getProperty', () => {
	test('basic', () => {
		const data = {
			foo: 'bar',
			deep: { baz: 'wut', so: { very: { deep: 'ok' } } }
		};

		const inputs = [
			{ path: 'foo', expected: 'bar' },
			{ path: 'deep.baz', expected: 'wut' },
			{ path: 'deep.so.very.deep', expected: 'ok' },
			{ path: 'nope', expected: undefined }
		];

		for (const i of inputs) {
			expect(getProperty(data, i.path)).toBe(i.expected);
		}
	});

	test('no params object', () => {
		expect(getProperty(undefined, 'foo')).toBeUndefined();
		expect(getProperty(null, 'foo')).toBeUndefined();
	})
});
