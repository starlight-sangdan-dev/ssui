import { cn } from "../lib/utils";

interface ColorProps {
    className?: string;
}
const Color: React.FC<ColorProps> = ({ className, ...props }: ColorProps) => {
    return <div className={cn("w-20 h-20 rounded-2xl", className)}></div>;
};

export default Color;
