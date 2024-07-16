/**
 * @see {@link https://reactnavigation.org/docs/themes}
 * This provides themes for react navigation
 */
import { palettes } from "./config/themes/palettes";
import { Theme } from "@react-navigation/native";

export const NavigationThemeLight: Theme = {
	dark: false,
	colors: {
		primary: "rgb(0, 122, 255)", // back links
		background: palettes.light[1],
		card: palettes.light[2],
		text: palettes.light[12],
		border: palettes.light[7],
		notification: "rgb(255, 59, 48)",
	},
};

export const NavigationThemeDark: Theme = {
	dark: true,
	colors: {
		primary: "rgb(10, 132, 255)", // back links
		background: palettes.dark[1],
		card: palettes.dark[2],
		text: palettes.dark[12],
		border: palettes.dark[7],
		notification: "rgb(255, 69, 58)",
	},
};
