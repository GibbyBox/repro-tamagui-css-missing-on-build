import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { TamaguiPlugin } from "tamagui-loader";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
	return path.dirname(require.resolve(path.join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../../../packages/**/*.mdx",
		"../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	staticDirs: ["../node_modules/@acme/ui/theme/fonts"],
	addons: [
		getAbsolutePath("storybook-dark-mode"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
		{
			name: getAbsolutePath("@storybook/addon-react-native-web"),
			options: {
				modulesToTranspile: ["react-native-reanimated"],
				babelPlugins: [
					"@babel/plugin-proposal-export-namespace-from",
					"react-native-reanimated/plugin",
				],
				projectRoot: "../../../",
			},
		},
		"@storybook/addon-webpack5-compiler-babel",
	],
	framework: {
		/** @ts-expect-error This is typed to a literal. */
		name: getAbsolutePath("@storybook/react-webpack5"),
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: "automatic",
				},
			},
		},
	}),
	env: (config) => ({
		...config,
		TAMAGUI_TARGET: "web",
	}),
	webpackFinal: (config) => {
		config.plugins ||= [];
		config.plugins.push(
			new TamaguiPlugin({
				config: "./node_modules/@acme/ui/theme/tamagui.config.ts",
				components: ["tamagui"],
			})
		);

		return config;
	},
};

export default config;
