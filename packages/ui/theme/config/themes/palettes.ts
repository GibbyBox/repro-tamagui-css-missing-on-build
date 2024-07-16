import * as colors from "../../colors";
import { Palette } from "../../colors/palette";
import Color from "color";

const { base, ...nonDarkLightColors } = colors;

export { nonDarkLightColors };
export const COLOR_PALETTE_KEYS = Object.keys(nonDarkLightColors);

export const palettes = (() => {
  function transparent(color: string, opacity = 0) {
    return Color(color).alpha(opacity).hsl().toString();
  }

  // Tamagui base components are written expecting
  // 14 colors (the ends being transparent colors)
  type TamaguiColorPalette = [string, ...Palette, string];

  function modifyPalette(palette: Palette): TamaguiColorPalette {
    return [
      transparent(palette[0]),
      ...palette,
      transparent(palette[palette.length - 1]),
    ];
  }

  type GetTamaguiConventionThemeKey<K> = K extends string
    ? `light_${K}` | `dark_${K}`
    : never;

  type TamaguiColorPalettes<T extends string> = Record<
    GetTamaguiConventionThemeKey<T>,
    TamaguiColorPalette
  >;

  /**
   * All this typing does is ensure themePalettes has a type of
   * ```
   * {
   *   light: string[] // 14 colors
   *   dark: string[] // 14 colors
   *   // following repeated for each color in colorPaletteMap
   *   light_{color}: string[] // 14 colors
   *   dark_{color}: string[] // 14 colors
   * }
   * ```
   */
  function getColorPalettesWithTamaguiConventions<T extends string>(
    map: Record<T, Record<"light" | "dark", Palette>>
  ) {
    const result = {} as TamaguiColorPalettes<T>;

    Object.entries<Record<"light" | "dark", Palette>>(map).forEach(
      ([key, palette]) => {
        result[`light_${key}` as GetTamaguiConventionThemeKey<T>] =
          modifyPalette(palette.light);
        result[`dark_${key}` as GetTamaguiConventionThemeKey<T>] =
          modifyPalette(palette.dark);
      }
    );

    return result;
  }

  return {
    light: modifyPalette(base.light),
    dark: modifyPalette(base.dark),
    ...getColorPalettesWithTamaguiConventions(nonDarkLightColors),
  };
})();
