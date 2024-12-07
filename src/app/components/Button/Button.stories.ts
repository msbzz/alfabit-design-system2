import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    children: { type: "string" },
    className: { type: "string" },
    onClick: { action: "clicked" },
    disabled:{type:"boolean"},
  },
};

export default meta;

 

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: true
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'secondary',
    disabled: true
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary'
  }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    disabled: true
  }
}

export const ThemeViolete: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "theme-violet",
  },
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
    variant: 'secondary'
  }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet',
    variant: 'tertiary'
  }
}

export const WithEvent: StoryObj<ButtonProps> = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};
