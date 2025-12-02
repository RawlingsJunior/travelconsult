import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-down" 
    | "slide-in" 
    | "fade-up" 
    | "fade-down" 
    | "fade-left" 
    | "fade-right" 
    | "scale-in" 
    | "scale-out" 
    | "flip-x" 
    | "flip-y" 
    | "rotate-in" 
    | "bounce-in" 
    | "unfold" 
    | "skew";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className, 
  animation = "slide-up", 
  delay = 0,
  duration,
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in": return "animate-fade-in";
      case "slide-up": return "animate-slide-up";
      case "slide-down": return "animate-slide-down";
      case "slide-in": return "animate-slide-in";
      case "fade-up": return "animate-fade-up";
      case "fade-down": return "animate-fade-down";
      case "fade-left": return "animate-fade-left";
      case "fade-right": return "animate-fade-right";
      case "scale-in": return "animate-scale-in";
      case "scale-out": return "animate-scale-out";
      case "flip-x": return "animate-flip-x";
      case "flip-y": return "animate-flip-y";
      case "rotate-in": return "animate-rotate-in";
      case "bounce-in": return "animate-bounce-in";
      case "unfold": return "animate-unfold";
      case "skew": return "animate-skew";
      default: return "animate-slide-up";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? `opacity-100 ${getAnimationClass()}` : "opacity-0",
        // Initial states to prevent flash before animation
        !isVisible && animation === "slide-up" && "translate-y-10",
        !isVisible && animation === "slide-down" && "-translate-y-10",
        !isVisible && animation === "fade-left" && "translate-x-10",
        !isVisible && animation === "fade-right" && "-translate-x-10",
        !isVisible && animation === "scale-in" && "scale-90",
        !isVisible && animation === "scale-out" && "scale-110",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: duration ? `${duration}ms` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
