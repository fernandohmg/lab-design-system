import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello world!",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>That's an h1 element!</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
