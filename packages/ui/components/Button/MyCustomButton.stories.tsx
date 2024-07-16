import type { Meta, StoryObj } from "@storybook/react";
import { MyCustomButton } from "./MyCustomButton";
import { YStack } from "tamagui";
import ComponentPaletteStory from "../ComponentPaletteStory";

const meta: Meta<typeof MyCustomButton> = {
	title: "ui/MyCustomButton",
	component: MyCustomButton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyCustomButton>;

export const Palette: Story = {
	args: {
		children: "Click Me",
	},
	render: function Render(args) {
		return (
			<YStack gap="$4">
				<ComponentPaletteStory componentName="MyCustomButton" />
				<MyCustomButton {...args} />
			</YStack>
		);
	},
};

export const Flat: Story = {
	args: {
		...Palette.args,
	},
};

export const Outlined: Story = {
	args: {
		...Palette.args,
		variant: "outlined",
	},
};

export const Disabled: Story = {
	args: {
		...Palette.args,
		disabled: true,
	},
};
