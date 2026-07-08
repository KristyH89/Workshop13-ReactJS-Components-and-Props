// components/products/ProductCard.tsx
import { Eye, Plus } from "lucide-react";
import { ProductRating } from "./ProductRating";
import type { BadgeColor } from "../../types/product";

type ProductCardProps = {
    image: string;
    title: string;
    category: string;
    rating: number;
    price: number;
    oldPrice?: number;
    badge?: string;
    badgeColor?: BadgeColor;
    stockStatus: string;
    disabled?: boolean;
};

// Fully spelled-out class combinations so Tailwind's build-time scanner
// can detect them. Template literals like `text-${badgeColor}-600` are
// NOT picked up by Tailwind and silently produce no styling.
const badgeStyles: Record<BadgeColor, string> = {
    rose: "border-rose-100/50 bg-rose-500/10 text-rose-600",
    amber: "border-amber-100/50 bg-amber-500/10 text-amber-600",
    blue: "border-blue-100/50 bg-blue-500/10 text-blue-600",
    slate: "border-slate-100/50 bg-slate-500/10 text-slate-600",
};

export function ProductCard({
                                image,
                                title,
                                category,
                                rating,
                                price,
                                oldPrice,
                                badge,
                                badgeColor = "blue",
                                stockStatus,
                                disabled = false,
                            }: ProductCardProps) {
    return (
        <article className="
            border border-slate-200 rounded-[1.25rem] bg-white p-3
            transition-all duration-400
            hover:border-[var(--color-primary)]
            hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]
            hover:-translate-y-1.5
            group
        ">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay actions */}
                <div className="
                    absolute inset-0 bg-[var(--color-primary)]/10 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300
                    flex items-center justify-center gap-3
                ">
                    <button
                        type="button"
                        className="
                            h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl
                            flex items-center justify-center translate-y-4
                            group-hover:translate-y-0 transition-transform duration-500
                            hover:bg-[var(--color-primary)] hover:text-white
                        "
                        aria-label="Quick View"
                    >
                        <Eye size={20} />
                    </button>

                    <button
                        type="button"
                        className="
                            h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl
                            flex items-center justify-center translate-y-4
                            group-hover:translate-y-0 transition-transform duration-500 delay-75
                            hover:bg-[var(--color-primary)] hover:text-white
                        "
                        aria-label="Add to cart"
                    >
                        <Plus size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Badge */}
                {badge && (
                    <span className={`
                        absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full
                        backdrop-blur-md
                        ${badgeStyles[badgeColor]}
                    `}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--color-primary)]/70">
                        {category}
                    </p>

                    <ProductRating rating={rating} />
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {title}
                </h3>

                <p className="text-[11px] font-medium text-slate-500">
                    {stockStatus}
                </p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        {oldPrice && (
                            <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                                {oldPrice} kr
                            </span>
                        )}

                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {price} kr
                        </span>
                    </div>

                    <button
                        type="button"
                        disabled={disabled}
                        className={`
                            inline-flex h-10 items-center justify-center gap-2 rounded-xl px-5 text-xs font-bold
                            transition-all duration-300
                            ${disabled
                            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                            : "bg-slate-900 text-white hover:bg-[var(--color-primary)] hover:shadow-lg hover:shadow-blue-200 active:scale-95"
                        }
                        `}
                    >
                        {disabled ? "Notify Me" : "Add to cart"}
                    </button>
                </div>
            </div>
        </article>
    );
}
