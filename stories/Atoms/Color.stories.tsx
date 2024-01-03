import type { Meta, StoryObj } from "@storybook/react";
import Color from "./Color";

/** Primary - 철에서 튀는 불꽃을 의미한다. */
const meta: Meta<typeof Color> = {
    title: "Atoms/Color",
    component: Color,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Color>;

export const SystemSuccess: Story = {
    args: {
        className: "bg-success",
    },
};
export const SystemWarning: Story = {
    args: {
        className: "bg-warning",
    },
};
export const SystemFail: Story = {
    args: {
        className: "bg-fail",
    },
};

export const Primary50: Story = {
    args: {
        className: "bg-primary-50",
    },
};
export const Primary100: Story = {
    args: {
        className: "bg-primary-100",
    },
};
export const Primary200: Story = {
    args: {
        className: "bg-primary-200",
    },
};
export const Primary300: Story = {
    args: {
        className: "bg-primary-300",
    },
};
export const Primary400: Story = {
    args: {
        className: "bg-primary-400",
    },
};
export const Primary500: Story = {
    args: {
        className: "bg-primary-500",
    },
};
export const Primary600: Story = {
    args: {
        className: "bg-primary-600",
    },
};
export const Primary700: Story = {
    args: {
        className: "bg-primary-700",
    },
};
export const Primary800: Story = {
    args: {
        className: "bg-primary-800",
    },
};
export const Primary900: Story = {
    args: {
        className: "bg-primary-900",
    },
};

export const Secondary50: Story = {
    args: {
        className: "bg-secondary-50",
    },
};
export const Secondary100: Story = {
    args: {
        className: "bg-secondary-100",
    },
};
export const Secondary200: Story = {
    args: {
        className: "bg-secondary-200",
    },
};
export const Secondary300: Story = {
    args: {
        className: "bg-secondary-300",
    },
};
export const Secondary400: Story = {
    args: {
        className: "bg-secondary-400",
    },
};
export const Secondary500: Story = {
    args: {
        className: "bg-secondary-500",
    },
};
export const Secondary600: Story = {
    args: {
        className: "bg-secondary-600",
    },
};
export const Secondary700: Story = {
    args: {
        className: "bg-secondary-700",
    },
};
export const Secondary800: Story = {
    args: {
        className: "bg-secondary-800",
    },
};
export const Secondary900: Story = {
    args: {
        className: "bg-secondary-900",
    },
};

export const Neutral100: Story = {
    args: {
        className: "bg-neutral-100",
    },
};
export const Neutral200: Story = {
    args: {
        className: "bg-neutral-200",
    },
};
export const Neutral300: Story = {
    args: {
        className: "bg-neutral-300",
    },
};
export const Neutral400: Story = {
    args: {
        className: "bg-neutral-400",
    },
};
export const Neutral500: Story = {
    args: {
        className: "bg-neutral-500",
    },
};
export const Neutral600: Story = {
    args: {
        className: "bg-neutral-600",
    },
};
export const Neutral700: Story = {
    args: {
        className: "bg-neutral-700",
    },
};
export const Neutral800: Story = {
    args: {
        className: "bg-neutral-800",
    },
};
export const Neutral900: Story = {
    args: {
        className: "bg-neutral-900",
    },
};
export const Neutral1000: Story = {
    args: {
        className: "bg-neutral-1000",
    },
};
export const Neutral1100: Story = {
    args: {
        className: "bg-neutral-1100",
    },
};
export const Neutral1200: Story = {
    args: {
        className: "bg-neutral-1200",
    },
};
export const Neutral1300: Story = {
    args: {
        className: "bg-neutral-1300",
    },
};
