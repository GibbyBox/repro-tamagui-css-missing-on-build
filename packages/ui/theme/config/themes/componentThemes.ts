import { componentThemeDefinitions } from "@tamagui/themes";
import { ThemeDefinitions } from "@tamagui/create-theme";
import MyCustomButton from "../../../components/Button/MyCustomButton.themes";

export const componentThemes = {
	...componentThemeDefinitions,
	MyCustomButton,
} satisfies ThemeDefinitions;
