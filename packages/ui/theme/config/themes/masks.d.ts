import { masks } from "./masksAndTemplates";
import { ThemeDefinition as TThemeDefinition } from "@tamagui/create-theme";

type ThemeDefinition = TThemeDefinition<keyof typeof masks>;
