import { cn } from "@/lib/utils";
import React from "react";

interface AnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    animation?: string;
    delay?: number;
}

const AnimationWrapper = ({
    children,
    className,
    animation = "animate-fade-in",
    delay = 0
}: AnimationWrapperProps) => {
    return (
        <div
            className={cn(animation, className)}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimationWrapper;
