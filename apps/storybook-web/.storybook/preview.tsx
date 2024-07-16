import type { Preview } from "@storybook/react";
import { AcmeThemeProvider, COLOR_PALETTE_KEYS, Theme } from "@acme/ui";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

const themeDropdown = COLOR_PALETTE_KEYS.map<{
	value: string | undefined;
	title: string;
}>((key) => ({
	value: key,
	title: key,
}));
themeDropdown.unshift({
	value: undefined,
	title: "None",
});

const preview: Preview = {
	decorators: [
		(Story, context) => {
			return (
				<AcmeThemeProvider defaultTheme={useDarkMode() ? "dark" : "light"}>
					<Theme name={context.globals.theme}>
						<Story />
					</Theme>
				</AcmeThemeProvider>
			);
		},
	],
	globalTypes: {
		theme: {
			description: "Global theme for components",
			defaultValue: undefined,
			toolbar: {
				title: "Theme",
				// cspell:disable-next-line
				icon: "circlehollow",
				items: themeDropdown,

				dynamicTitle: true,
			},
		},
	},
	parameters: {
		layout: "centered",
		darkMode: {
			stylePreview: true,
			dark: themes.dark,
			light: themes.light,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
