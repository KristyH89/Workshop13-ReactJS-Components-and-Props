import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
                           children,
                           variant = "primary",
                           className = "",
                           type = "button",
                           ...props
                       }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2d6c64] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary:
            "bg-[#2d6c64] text-white shadow-sm hover:bg-[#255a54] active:bg-[#1e4a45]",

        secondary:
            "bg-[#d9ecea] text-[#2d6c64] hover:bg-[#cfe3e1] active:bg-[#c5d9d7]",

        outline:
            "border border-[#2d6c64] text-[#2d6c64] hover:bg-[#eef6f5] active:bg-[#d9ecea]",
    };

    return (
        <button
            type={type}
            className={[base, variants[variant], className].join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}