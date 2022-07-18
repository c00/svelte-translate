export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFiles: ['dotenv/config'],
	moduleNameMapper: { '^lodash-es$': 'lodash' },
	moduleFileExtensions: ['js', 'json', 'ts'],
	rootDir: '.',
	testRegex: '.spec.ts$'
	// transform: {
	// 	'^.+\\.(t|j)s$': 'ts-jest'
	// },
	// coverageDirectory: './coverage'
};
