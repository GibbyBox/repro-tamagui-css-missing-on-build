import {
	ThemeDefinition,
	maskOptions,
} from "../../theme/config/themes/masksAndTemplates";

const MyCustomButton: ThemeDefinition = {
	mask: "customShift",
	...maskOptions.component,
	override: {
		background: 2,
		backgroundHover: 2,
		backgroundFocus: 2,
		backgroundPress: 2,
	},
};

export default MyCustomButton;
