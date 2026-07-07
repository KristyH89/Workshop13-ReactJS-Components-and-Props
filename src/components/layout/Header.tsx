import { Search, ShoppingCart } from "lucide-react";
import logo from "../../assets/LITESHOPLOGO2.jpg";
import { Input } from "../ui/Input";

const navigationItems = [
    "New Arrival",
    "Men",
    "Women",
    "Sale",
    "Live",
];

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">

                {/* Brand logo */}
                <a href="/" className="flex items-center shrink-0">
                    <img
                        src={logo}
                        alt="LITE.SHOP logo"
                        className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                    />
                </a>

                {/* Main navigation */}
                <nav>
                    <ul className="flex items-center gap-6 text-sm font-semibold">
                        {navigationItems.map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-[var(--color-primary)]"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Search and cart area */}
                <div className="ml-auto flex items-center gap-4">

                    {/* Search input */}
                    <div className="relative w-64 lg:w-80">

                        {/* Search icon positioned inside the input */}
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <Input
                            placeholder="Search products..."
                            className="pl-10"
                        />
                    </div>

                    {/* Shopping cart */}
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
                    >
                        <ShoppingCart size={22} />

                        <span className="text-sm font-medium">
              0
            </span>
                    </button>

                </div>

            </div>
        </header>
    );
}