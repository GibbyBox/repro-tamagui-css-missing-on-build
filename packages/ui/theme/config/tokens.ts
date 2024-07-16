import { config as configBase } from "@tamagui/config";
import { createTokens } from "tamagui";
import { base } from "../colors";

export const tokens = createTokens({
  size: configBase.tokens.size,
  space: configBase.tokens.space,
  radius: configBase.tokens.radius,
  zIndex: configBase.tokens.zIndex,
  color: {
    brown: base.light[10],
    blue: base.light[10],
  },
});
