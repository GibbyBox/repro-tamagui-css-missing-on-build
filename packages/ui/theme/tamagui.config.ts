import { config as configBase } from "@tamagui/config/v3";
import { tokens } from "./config/tokens";
import { fonts } from "./fonts";
import { createTamagui } from "tamagui";
import { shorthands } from "./config/shorthands";
import { themes } from "./config/themes";
import { animations } from "./config/animations";

export const config = createTamagui({
	...configBase,
	tokens,
	animations,
	shorthands,
	onlyAllowShorthands: true,
	themes,
	fonts,
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}
