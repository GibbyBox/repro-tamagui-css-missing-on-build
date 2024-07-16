module.exports = function (api) {
	api.cache(true);

	return {
		plugins: [
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./node_modules/@acme/ui/theme/tamagui.config.ts",
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === "development",
				},
			],
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
		],
		presets: ["babel-preset-expo"],
	};
};
