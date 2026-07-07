import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({
                         children,
                         className = "",
                     }: CardProps) {
    const base =
        "rounded-2xl bg-white border border-gray-200 shadow-sm transition-shadow duration-200 hover:shadow-md";

    return (
        <div className={[base, className].join(" ")}>
            {children}
        </div>
    );
}