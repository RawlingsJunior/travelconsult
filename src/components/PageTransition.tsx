import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

const PageTransition = ({ children, className }: PageTransitionProps) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    const onAnimationEnd = () => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
    };

    return (
        <div
            className={cn(
                "transition-opacity duration-500 ease-in-out",
                transitionStage === "fadeIn" ? "opacity-100 animate-slide-up" : "opacity-0",
                className
            )}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    );
};

export default PageTransition;
