import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { InputRootProps, TextInput } from "./Input";

export default {
  title: "Components/Input",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="johndoe@example.com" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="johndoe@example.com" />,
  },
};
