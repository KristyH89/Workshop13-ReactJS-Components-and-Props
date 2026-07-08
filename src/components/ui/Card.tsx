import React from "react";

type CardProps = {
    children: React.ReactNode;
    /** Layout-related overrides: spacing, width, margin, etc. */
    className?: string;

    surfaceClassName?: string;
};

const shapeBase = "rounded-2xl p-6 transition-shadow duration-200";
const defaultSurface = "bg-white border border-gray-200 shadow-sm hover:shadow-md";

export function Card({
                         children,
                         className = "",
                         surfaceClassName = defaultSurface,
                     }: CardProps) {
    return (
        <div className={[shapeBase, surfaceClassName, className].join(" ")}>
            {children}
        </div>
    );
}
