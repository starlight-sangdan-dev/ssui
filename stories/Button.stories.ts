import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "SSUI/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
