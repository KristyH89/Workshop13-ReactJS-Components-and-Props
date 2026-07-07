import { Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/Input";

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">

                {/* Brand logo */}
                <h1 className="text-2xl font-bold tracking-tight">
                    LITE.SHOP
                </h1>

                {/* Primary navigation */}
                <nav>
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-[var(--color-primary)]">
                                New Arrival
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[var(--color-primary)]">
                                Men
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[var(--color-primary)]">
                                Women
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[var(--color-primary)]">
                                Sale
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[var(--color-primary)]">
                                Live
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Search and cart */}
                <div className="flex items-center gap-4">

                    <div className="relative w-72">

                        {/* Search icon */}
                        <Search
                            size={18}
                            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                        />

                        <Input
                            placeholder="Search products..."
                            className="pl-10"
                        />
                    </div>

                    <button className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100">

                        <ShoppingCart size={20} />

                        <span className="font-medium">0</span>

                    </button>

                </div>

            </div>
        </header>
    );
}