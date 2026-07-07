import React from "react";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "discount" | "limited" | "popular" | "new" | "soldOut";
    className?: string;
};

export function Badge({
                          children,
                          variant = "discount",
                          className = "",
                      }: BadgeProps) {
    const base =
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";

    const variants = {
        discount: "bg-red-100 text-red-700",
        limited: "bg-yellow-100 text-yellow-700",
        popular: "bg-blue-100 text-blue-700",
        new: "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
        soldOut: "bg-gray-200 text-gray-600",
    };

    return (
        <span className={[base, variants[variant], className].join(" ")}>
      {children}
    </span>
    );
}