import type { Conf } from "./tamagui.config";

export { Conf };

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}
