import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export function Input({
                          className = "",
                          type = "text",
                          ...props
                      }: InputProps) {
    const base =
        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60";

    return (
        <input
            type={type}
            className={[base, className].join(" ")}
            {...props}
        />
    );
}