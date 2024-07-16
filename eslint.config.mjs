// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	eslintConfigPrettier,
	{
		ignores: ["**/metro.config.js", "**/.tamagui/", "**/.expo/"],
	},
	jest.configs["flat/recommended"],

	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			globals: {
				process: true,
				module: true,
			},
		},
		rules: {
			"jest/no-conditional-expect": "off",
			"@typescript-eslint/ban-types": [
				"error",
				{
					types: {
						Number: {
							message: "Use number instead",
							fixWith: "number",
						},
						String: {
							message: "Use string instead",
							fixWith: "string",
						},
						Boolean: {
							message: "Use boolean instead",
							fixWith: "boolean",
						},
						Object: {
							message: "Use object instead",
							fixWith: "object",
						},
						"{}": {
							message: "Use object instead",
							fixWith: "object",
						},
						Symbol: {
							message: "Use symbol instead",
							fixWith: "symbol",
						},
					},
				},
			],
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-unused-vars": "error",
			"object-shorthand": ["error", "always"],
			"no-console": ["error", { allow: ["warn", "error"] }],
			"no-alert": "error",
			"no-debugger": "error",
			"prefer-destructuring": [
				"error",
				{
					array: true,
					object: true,
				},
			],
		},
	}
);
