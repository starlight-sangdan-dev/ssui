import { cn } from "../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { forwardRef, HTMLAttributes } from "react";

const NOTO_KR = Noto_Sans_KR({
    subsets: ["latin"],
});

const INTER = Inter({
    subsets: ["latin"],
});

// @TODO 피그마 디자인 반영 0104
const TextVariants = cva("font-bold", {
    variants: {
        variant: {
            black: "text-black",
            white: "text-white",
        },
        size: {
            body: "text-base",
        },
        language: {
            ko: `${NOTO_KR.className}`,
            en: `${INTER.className}`,
        },
    },
    defaultVariants: {
        variant: "black",
        size: "body",
        language: "ko",
    },
});

// * 도큐먼트를 위한 자세한 속성 정의
interface TextProps
    extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof TextVariants> {
    className?: string;
    language?: "ko" | "en";
    children: React.ReactNode;
    variant?: "black" | "white" | null | undefined;
    size?: "body" | null | undefined;
}

/** 기본적인 텍스트 Atom 컴포넌트 */
const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, variant, size, language, children, ...props }, ref) => {
        return (
            <p
                className={cn(
                    TextVariants({ variant, size, language, className })
                )}
                ref={ref}
            >
                {children}
            </p>
        );
    }
);

Text.displayName = "Text";

export default Text;
