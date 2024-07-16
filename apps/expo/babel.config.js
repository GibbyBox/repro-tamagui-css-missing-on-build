module.exports = function (api) {
	api.cache(true);
	return {
		plugins: [
			// NOTE: this is optional, you don't *need* the compiler
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./node_modules/@acme/ui/theme/tamagui.config.ts",
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === "development",
				},
			],
			"react-native-reanimated/plugin",
		],
		presets: ["babel-preset-expo"],
	};
};
