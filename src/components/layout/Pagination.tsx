// components/layout/Pagination.tsx

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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </nav>
    );
}
