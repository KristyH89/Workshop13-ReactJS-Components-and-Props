// components/layout/Pagination.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
    return (
        <nav
            className="mt-8 flex items-center justify-center gap-2"
            aria-label="Pagination"
        >
            {/* Previous button */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 font-medium transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50"
                aria-label="Previous page"
                title="Previous"
            >
                <ChevronLeft size={18} />
            </button>

            {/* Current page */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] text-white font-medium transition-all duration-200"
                aria-current="page"
            >
                1
            </button>

            {/* Other pages */}
            {[2, 3].map((page) => (
                <button
                    key={page}
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 font-medium transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50"
                >
                    {page}
                </button>
            ))}

            {/* Ellipsis */}
            <span className="px-2 text-sm text-gray-400">…</span>

            {/* Last page */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 font-medium transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50"
            >
                12
            </button>

            {/* Next button */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 font-medium transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50"
                aria-label="Next page"
                title="Next"
            >
                <ChevronRight size={18} />
            </button>
        </nav>
    );
}
