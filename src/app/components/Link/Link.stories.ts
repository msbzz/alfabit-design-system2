import { Meta, StoryObj } from "@storybook/react";
import Link, { LinkProps } from "./Link";


const meta: Meta<LinkProps> = {
    title: "Molecules/Link",
    component: Link,
    argTypes: {
        children: { type: "string" },
        className: { type: "string" },
        onClick: { action: "clicked" },
        disabled:{type:"boolean"},
        href:{type:"string"},
      },
};

export default meta;


export const Primary: StoryObj<LinkProps> = {
    args: {
      children: "Link",
      href:'/'
    },
  };


  export const Disabled: StoryObj<LinkProps> = {
    args: {
      children: 'Link',
      disabled: true
    }
  }

  export const Violet: StoryObj<LinkProps> = {
    args: {
      children: 'Link',
      disabled: false,
      className:'theme-violet',
    }
  }