import { TamaguiProvider, TamaguiProviderProps } from "tamagui";
import { config as defaultConfig } from "../theme/tamagui.config";

export function AcmeThemeProvider({
	config = defaultConfig,
	...props
}: TamaguiProviderProps) {
	return <TamaguiProvider config={config} {...props} />;
}
