import type {
  MaskDefinitions,
  MaskOptions,
  ThemeDefinition as TThemeDefinition,
} from "@tamagui/create-theme";
import { createShiftMask } from "@tamagui/create-theme";
import { masks as baseMasks } from "@tamagui/themes";
import { palettes } from "./palettes";

export const templateColorsSpecific = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12,
};

const template = {
  ...templateColorsSpecific,
  background: 2,
  backgroundHover: 3,
  backgroundFocus: 2,
  backgroundPress: 2,
  backgroundStrong: 2,
  backgroundTransparent: 0,
  color: -1,
  colorHover: -1,
  colorPress: -1,
  colorFocus: -1,
  colorTransparent: -1,
  borderColor: 6,
  borderColorHover: 6,
  borderColorFocus: 6,
  borderColorPress: 6,
  placeholderColor: -4,
};

export const templates = {
  base: template,
};

const shadows = {
  shadowColor: 0,
  shadowColorHover: 0,
  shadowColorPress: 0,
  shadowColorFocus: 0,
};

const textColors = {
  color: 0,
  colorHover: 0,
  colorFocus: 0,
  colorPress: 0,
};

const baseMaskOptions: MaskOptions = {
  override: shadows,
  skip: shadows,
  // avoids the transparent ends
  max: palettes.light.length - 2,
  min: 1,
};

const skipShadowsAndSpecificColors = {
  ...shadows,
  ...templateColorsSpecific,
};

export const masks = {
  ...baseMasks, // required for the unmodified tamagui components
  /**
   * Use the override property to _replace_
   * the template value with the given value
   */
  customOverride: createShiftMask(
    {},
    { overrideStrategy: "shift", strength: 0 }
  ),
  /**
   * Use the overrideShift property to _increment / decrement_
   * the base template value by the given value.
   */
  customShift: createShiftMask({}, { overrideStrategy: "shift", strength: 0 }),
} satisfies MaskDefinitions;

export const maskOptions = {
  component: {
    ...baseMaskOptions,
    override: {
      ...textColors,
      ...shadows,
    },
    skip: skipShadowsAndSpecificColors,
  },
} satisfies Record<string, MaskOptions>;

export type ThemeDefinition = TThemeDefinition<keyof typeof masks>;
