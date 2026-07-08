// components/products/ProductCard.tsx
import { ProductRating } from "./ProductRating";

type ProductCardProps = {
    image: string;
    title: string;
    category: string;
    rating: number;
    price: number;
    oldPrice?: number;
    badge?: string;
    badgeColor?: "rose" | "amber" | "blue" | "slate";
    stockStatus: string;
    disabled?: boolean;
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                    </button>
                </div>

                {/* Badge */}
                {badge && (
                    <span className={`
                        absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full
                        border border-${badgeColor}-100/50
                        bg-${badgeColor}-500/10
                        text-${badgeColor}-600
                        backdrop-blur-md
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
