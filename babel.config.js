module.exports = {
	presets: ['next/babel'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./src'],
				alias: {
					_comps: './src/comps',
				},
			},
		],
	],
};
