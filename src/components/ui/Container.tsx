// components/ui/Container.tsx
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;

    maxWidth?: string;
};

export function Container({
                              children,
                              className = "",
                              maxWidth = "max-w-[96rem]", // ~1536px, custom "8xl" — Tailwind has no built-in 8xl
                          }: ContainerProps) {
    return (
        <div className={`${maxWidth} px-6 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}
