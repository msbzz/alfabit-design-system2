import { Meta, StoryObj } from "@storybook/react";

import Box, {type BoxProps} from './Box'

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    children: { type: "string" },
    rounded: { type: "boolean" },
    border: { type: "boolean" },
    filledBackground: { type: "boolean" },
    className: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};

export const Default: StoryObj<BoxProps> = {
  args: {
    children: "Este é uma Box Padrão",
    filledBackground: true,
    type: "primary",
  },
};

export const BoxAlert: StoryObj<BoxProps> = {
  args: {
    children: "Este é um alerta!",
    filledBackground: true,
    rounded: true,
    type: "alert",
  },
};

export const BoxSuccess: StoryObj<BoxProps> = {
  args: {
    children: "Operação concluída com sucesso!",
    filledBackground: true,
    rounded: true,
    type: "success",
  },
};

export const BoxError: StoryObj<BoxProps> = {
  args: {
    children: "Ocorreu um erro durante a operação.",
    filledBackground: true,
    rounded: true,
    type: "error",
  },
};