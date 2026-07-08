import { Link } from "react-router-dom";

export function HomeSidebar() {
    return (
        <aside className="w-64 shrink-0 space-y-6">

            {/* Block 1 — Primary Tint */}
            <div className="rounded-2xl bg-[var(--color-primary)]/15 p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                    Shop Categories
                </h3>

                <nav className="space-y-3 text-slate-800 font-medium">
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        Women
                    </Link>
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        Men
                    </Link>
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        Kids
                    </Link>
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        Accessories
                    </Link>
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        New Arrivals
                    </Link>
                    <Link to="/shop" className="block hover:text-[var(--color-primary)] transition-colors">
                        Sale
                    </Link>
                </nav>
            </div>

            {/* Block 2 — Deep Primary Gradient */}
            <div className="
                rounded-2xl
                bg-gradient-to-br from-[var(--color-primary)] to-[#255a54]
                p-6 text-white shadow-md
            ">
                <h3 className="text-lg font-black mb-3">
                    Seasonal Picks
                </h3>

                <p className="text-sm text-white/90 leading-relaxed">
                    Fresh colors, lightweight fabrics and trending silhouettes.
                    Curated for the season.
                </p>

                <Link
                    to="/shop"
                    className="mt-4 inline-block text-amber-300 font-semibold hover:underline"
                >
                    Explore Collection →
                </Link>
            </div>

            {/* Block 3 — Soft Accent (matching jouw amber accent) */}
            <div className="rounded-2xl bg-amber-50 p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-3">
                    Trending Now
                </h3>

                <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="hover:text-[var(--color-primary)] transition-colors">
                        • Minimalist Sneakers
                    </li>
                    <li className="hover:text-[var(--color-primary)] transition-colors">
                        • Oversized Hoodies
                    </li>
                    <li className="hover:text-[var(--color-primary)] transition-colors">
                        • Summer Dresses
                    </li>
                    <li className="hover:text-[var(--color-primary)] transition-colors">
                        • Travel Backpacks
                    </li>
                </ul>

                <Link
                    to="/shop"
                    className="mt-4 inline-block text-[var(--color-primary)] font-semibold hover:underline"
                >
                    View All →
                </Link>
            </div>

        </aside>
    );
}
