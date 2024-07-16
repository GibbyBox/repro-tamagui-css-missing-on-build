// Enables typescript to throw warnings at you if a palette has too few or too many colors
export type Palette = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type LightDarkPalettes = {
  light: Palette;
  dark: Palette;
};
