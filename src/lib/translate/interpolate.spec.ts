import { interpolate } from './interpolate';

describe('interpolate', () => {

  test('spaces', () => {
		const subject = '{   name}';
		const params = {
			name: 'spongebob',
		};
		const expected = 'spongebob';

		expect(interpolate(subject, params)).toBe(expected);
	});


	test('basic', () => {
		const subject = '{ name }, {   name}, {number}, {foo.bar}, { nothing }';
		const params = {
			name: 'spongebob',
			number: 6,
			foo: { bar: 'baz' }
		};

		const expected = 'spongebob, spongebob, 6, baz, { nothing }';

		expect(interpolate(subject, params)).toBe(expected);
	});
});
