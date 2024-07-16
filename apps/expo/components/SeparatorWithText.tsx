import { Separator, Text, XStack, XStackProps } from "@acme/ui";

interface SeparatorWithTextProps
	extends Omit<XStackProps, "ai" | "gap" | "children"> {
	text: string;
}

export default function SeparatorWithText({
	text,
	...xStackProps
}: SeparatorWithTextProps) {
	return (
		<XStack ai="center" gap="$2" {...xStackProps}>
			<Separator />
			<Text>{text}</Text>
			<Separator />
		</XStack>
	);
}
