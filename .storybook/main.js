module.exports = {
	stories: ['../.storybook/stories/*.stories.@(js|jsx|ts|tsx|mdx)'],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		// {
		// 	name: '@storybook/addon-postcss',
		// 	options: {
		// 		postcssLoaderOptions: {
		// 			implementation: require('postcss'),
		// 		},
		// 	},
		// }
	],
	core: { builder: 'webpack5' },
	framework: '@storybook/nextjs',
	// webpackFinal: async (config) => {
	// 	config.resolve.plugins = [
	// 		...(config.resolve.plugins || []),
	// 		new TsconfigPathsPlugin(),
	// 	];

	// 	return config;
	// },
};
