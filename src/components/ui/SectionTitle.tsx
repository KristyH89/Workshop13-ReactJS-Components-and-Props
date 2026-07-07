import React from "react";

type SectionTitleProps = {
    children: React.ReactNode;
    className?: string;
};

export function SectionTitle({
                                 children,
                                 className = "",
                             }: SectionTitleProps) {
    const base = "text-lg font-semibold text-gray-900";

    return (
        <h2 className={[base, className].join(" ")}>
            {children}
        </h2>
    );
}