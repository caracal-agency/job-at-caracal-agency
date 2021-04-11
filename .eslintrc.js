module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	ignorePatterns: ['!**/.eslintrc*', 'public/static', 'node_modules*', '**/node_modules/**', 'dist', '*.svg', '*.ico', '*.json', '.gitignore', '*.md', '*.log', '*.loc'],
	rules: {
		'no-use-before-define': 'off',
		'import/no-unresolved': ['error', { ignore: ['^_.*'] }], // ignore _comps/Form and other babel aliases
		'import/order': [
			'error',
			{
				'newlines-between': 'always-and-inside-groups',
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				pathGroups: [
					{
						pattern: '@dune/**',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '@xdune/**',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '_**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '_**/**',
						group: 'internal',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: {
					order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: true /* ignore case. Options: [true, false] */,
				},
			},
		],
		'react/jsx-props-no-spreading': 'warn',
		'react/jsx-boolean-value': 'off',
		radix: ['error', 'as-needed'], // ommit for radix 10, not for the others
		camelcase: 'off',
		'no-param-reassign': 'off',
		// 'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }], // mongodb dangles
		'no-underscore-dangle': 'off',
		'prefer-destructuring': ['error', { object: true, array: false }], // enforces only object destructuring, but not array destructuring
		'global-require': 'off', // example: require(myVariable)
		// indent: ['error', 4],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-multi-assign': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'warn',
		'no-plusplus': 'off',
		'func-names': 'off',
		'no-process-exit': 'off',
		'object-shorthand': 'off',
		'class-methods-use-this': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/forbid-prop-types': 'off',
		'jsx-a11y/anchor-is-valid': 'off', // nextjs uses <a> tags without href
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		/** import */
		'import/no-dynamic-require': 'off',
		/** prettier */
		'prettier/prettier': 'error',
	},
};
