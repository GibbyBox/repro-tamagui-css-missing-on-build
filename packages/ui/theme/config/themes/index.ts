import { createThemeBuilder } from "@tamagui/theme-builder";
import { nonDarkLightColors, COLOR_PALETTE_KEYS, palettes } from "./palettes";
import { masks, templates } from "./masksAndTemplates";
import { componentThemes } from "./componentThemes";

export { COLOR_PALETTE_KEYS, palettes };
export const themes = createThemeBuilder()
	.addPalettes(palettes)
	.addTemplates(templates)
	.addMasks(masks)
	.addThemes({
		light: {
			template: "base",
			palette: "light",
		},
		dark: {
			template: "base",
			palette: "dark",
		},
	})
	.addChildThemes(
		(function createChildColorPalettes() {
			type ChildThemeName = keyof typeof nonDarkLightColors;
			const childThemes: Partial<
				Record<
					ChildThemeName,
					{
						template: string;
						palette: string;
						parent: string;
					}[]
				>
			> = {};

			(Object.keys(nonDarkLightColors) as ChildThemeName[]).forEach((color) => {
				childThemes[color] = [
					{
						parent: "light",
						template: "base",
						palette: color,
					},
					{
						parent: "dark",
						template: "base",
						palette: `dark_${color}`,
					},
				];
			});

			return childThemes;
		})()
	)
	.addChildThemes(componentThemes)
	.build();
