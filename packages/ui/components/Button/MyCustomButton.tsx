import { Button, GetProps, styled } from "tamagui";

export type MyCustomButtonProps = GetProps<typeof MyCustomButton>;
export const MyCustomButton = styled(Button, {
  name: "MyCustomButton",
});
