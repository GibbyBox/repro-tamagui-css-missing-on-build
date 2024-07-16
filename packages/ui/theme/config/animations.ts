import { createAnimations } from "@tamagui/animations-moti";
import { Easing } from "react-native-reanimated";

/**
 * To experiment with animations, use
 * @see {@link https://docs.swmansion.com/react-native-reanimated/docs/category/animations}
 */
export const animations = createAnimations({
  "100ms": {
    type: "timing",
    duration: 100,
  },
  "300ms": {
    type: "timing",
    duration: 300,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  fast: {
    type: "timing",
    easing: Easing.inOut(Easing.poly(4)),
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    type: "timing",
    easing: Easing.inOut(Easing.poly(4)),
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  slow: {
    type: "timing",
    easing: Easing.inOut(Easing.poly(4)),
    damping: 20,
    stiffness: 60,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});
