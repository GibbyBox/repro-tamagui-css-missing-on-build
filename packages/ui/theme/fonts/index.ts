import { createGenericFont } from "@tamagui/config";
import { isWeb } from "tamagui";

export const AcmeFonts = {
	MontserratThin: require("./Montserrat-Thin.ttf"),
	MontserratThinItalic: require("./Montserrat-ThinItalic.ttf"),
	MontserratExtraLight: require("./Montserrat-ExtraLight.ttf"),
	MontserratExtraLightItalic: require("./Montserrat-ExtraLightItalic.ttf"),
	MontserratLight: require("./Montserrat-Light.ttf"),
	MontserratLightItalic: require("./Montserrat-LightItalic.ttf"),
	MontserratRegular: require("./Montserrat-Regular.ttf"),
	MontserratRegularItalic: require("./Montserrat-Italic.ttf"),
	MontserratMedium: require("./Montserrat-Medium.ttf"),
	MontserratMediumItalic: require("./Montserrat-MediumItalic.ttf"),
	MontserratSemiBold: require("./Montserrat-SemiBold.ttf"),
	MontserratSemiBoldItalic: require("./Montserrat-SemiBoldItalic.ttf"),
	MontserratBold: require("./Montserrat-Bold.ttf"),
	MontserratBoldItalic: require("./Montserrat-BoldItalic.ttf"),
	MontserratExtraBold: require("./Montserrat-ExtraBold.ttf"),
	MontserratExtraBoldItalic: require("./Montserrat-ExtraBoldItalic.ttf"),
	MontserratBlack: require("./Montserrat-Black.ttf"),
	MontserratBlackItalic: require("./Montserrat-BlackItalic.ttf"),
};

const montserratFont = createGenericFont(
	isWeb ? "Montserrat, Helvetica, Arial, sans-serif" : "Montserrat",
	{
		weight: {
			1: "100",
			2: "200",
			3: "300",
			4: "400",
			5: "500",
			6: "600",
			7: "700",
			8: "800",
			9: "900",
		},
		face: {
			100: { normal: "MontserratThin", italic: "MontserratThinItalic" },
			200: {
				normal: "MontserratExtraLight",
				italic: "MontserratExtraLightItalic",
			},
			300: { normal: "MontserratLight", italic: "MontserratLightItalic" },
			400: { normal: "MontserratRegular", italic: "MontserratRegularItalic" },
			500: { normal: "MontserratMedium", italic: "MontserratMediumItalic" },
			600: { normal: "MontserratSemiBold", italic: "MontserratSemiBoldItalic" },
			700: { normal: "MontserratBold", italic: "MontserratBoldItalic" },
			800: {
				normal: "MontserratExtraBold",
				italic: "MontserratExtraBoldItalic",
			},
			900: { normal: "MontserratBlack", italic: "MontserratBlackItalic" },
		},
	}
);

export const fonts = {
	body: montserratFont,
	heading: montserratFont,
};
