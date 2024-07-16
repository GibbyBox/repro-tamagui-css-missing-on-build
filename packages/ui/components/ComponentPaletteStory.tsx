import {
	ThemeName,
	XStack,
	useTheme,
	YStack,
	Text,
	Popover,
	H5,
	ThemeableStack,
	H3,
	useThemeName,
	H6,
	SizableText,
} from "tamagui";
import Color from "color";
import { palettes } from "../theme/config/themes/palettes";
import { createContext, useContext } from "react";

type PaletteStoryProps = {
	componentName: ThemeName;
};

const PaletteStoryContext = createContext(undefined as undefined | string);
PaletteStoryContext.displayName = "PaletteStoryContext";

export default function PaletteStory({ componentName }: PaletteStoryProps) {
	return (
		<PaletteStoryContext.Provider value={componentName}>
			<YStack gap="$2" bg="$background" p="$4" br="$5">
				<Palette />
				<XStack gap="$2" fw="wrap" f={1} jc="space-between">
					<NamedTokensWithPseudoClasses title="Text Colors" className="color" />
					<NamedTokensWithPseudoClasses
						title="Background Colors"
						className="background"
					/>
					<NamedTokensWithPseudoClasses
						title="Border Colors"
						className="borderColor"
					/>
					<NamedTokensWithPseudoClasses
						title="Shadow Colors"
						className="shadowColor"
					/>
					<OneOffTokens />
				</XStack>
			</YStack>
		</PaletteStoryContext.Provider>
	);
}

/*
 * Strip the transparency colors on the ends
 * It doesn't matter which palette we grab - they're all the same shape
 */
const range = palettes.light.slice(1, -1);

const SUFFIXES = ["", "Hover", "Focus", "Press"];

function Palette() {
	const themeBase = useThemeName();
	const componentName = useContext(PaletteStoryContext);
	return (
		<YStack f={1}>
			<XStack gap="$2" ai="baseline">
				<H3 mb="$2">Palette</H3>
				<H6 mb="$2">
					({themeBase}_{componentName})
				</H6>
			</XStack>
			<XStack jc="center">
				{range.map((_, index) => (
					<YStack key={index} ai="center">
						<Text>-{range.length - index}</Text>
						<ColorSquare label="" colorName={`color${index + 1}`} />
						<Text>{index + 1}</Text>
					</YStack>
				))}
			</XStack>
		</YStack>
	);
}

function NamedTokensWithPseudoClasses({
	title,
	className,
}: {
	title: string;
	className: string;
}) {
	return (
		<YStack>
			<H5 mb="$2">{title}</H5>
			{SUFFIXES.map((suffix) => (
				<XStack key={suffix} gap="$2" ai="center">
					<ColorSquare colorName={`${className}${suffix}`} />
					<SizableText size="$3">
						{className}
						{suffix}
					</SizableText>
				</XStack>
			))}
		</YStack>
	);
}

function OneOffTokens() {
	return (
		<YStack>
			<H5 mb="$2">Other Tokens</H5>

			<XStack gap="$2" ai="center">
				<ColorSquare colorName="placeholderColor" />
				<SizableText size="$3">placeholderColor</SizableText>
			</XStack>
		</YStack>
	);
}

function ColorSquare({
	colorName,
	label,
}: {
	colorName: string;
	label?: string;
}) {
	const componentName = useContext(PaletteStoryContext);
	const theme = useTheme({ componentName });
	const colorObj = Color(theme[colorName]?.val);

	const index = range.findIndex(
		(_, index) => theme[`color${index + 1}`]?.val === theme[colorName]?.val
	);

	let textColor = colorObj.isDark() ? "white" : "black";
	if (index === -1) {
		const backgroundObj = Color(theme["$background"]?.val);
		textColor = backgroundObj.isDark() ? "white" : "black";
	}

	return (
		<Popover hoverable>
			<Popover.Trigger asChild>
				<ThemeableStack
					componentName={componentName}
					w={40}
					h={40}
					bg={`$${colorName}`}
					ai="center"
					jc="center"
				>
					<Text col={textColor}>
						{label ?? (index === -1 ? "N/A" : index + 1)}
					</Text>
				</ThemeableStack>
			</Popover.Trigger>
			<Popover.Content themeInverse>
				<Text>{colorObj.hex().toString()}</Text>
				<Text>{theme[colorName]?.val}</Text>
			</Popover.Content>
		</Popover>
	);
}
