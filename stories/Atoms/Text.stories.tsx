import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
    title: "Atoms/Text",
    component: Text,
    tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Text> = {
    args: {
        children: "Text",
    },
};
