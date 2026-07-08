import { SectionTitle } from "../ui/SectionTitle";

const categories = [
    { name: "All Products", count: 124 },
    { name: "Outerwear", count: 42 },
    { name: "Footwear", count: 18 },
    { name: "Accessories", count: 64 },
];

const availabilityOptions = ["In Stock", "On Sale"];

export function Sidebar() {
    return (
        <aside className="w-60 shrink-0 space-y-8 rounded-3xl bg-[var(--color-primary)]/15 p-6">


        {/* Categories */}
            <section>
                <SectionTitle>Categories</SectionTitle>

                <ul className="mt-4 space-y-3">
                    {categories.map((category) => (
                        <li key={category.name}>
                            <label className="flex cursor-pointer items-center gap-3 text-sm">
                                <input
                                    type="radio"
                                    name="category"
                                    defaultChecked={category.name === "All Products"}
                                />

                                <span className="flex-1">{category.name}</span>

                                <span className="text-gray-500">
                  ({category.count})
                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Price range */}
            <section>
                <SectionTitle>Price Range</SectionTitle>

                <div className="mt-4">
                    <input
                        type="range"
                        min="0"
                        max="1800"
                        defaultValue="900"
                        className="w-full"
                    />

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                        <span>0 kr</span>
                        <span>1800 kr</span>
                    </div>
                </div>
            </section>

            {/* Availability */}
            <section>
                <SectionTitle>Availability</SectionTitle>

                <div className="mt-4 space-y-3">
                    {availabilityOptions.map((option) => (
                        <label
                            key={option}
                            className="flex cursor-pointer items-center gap-3 text-sm"
                        >
                            <input type="checkbox" />

                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </section>

        </aside>
    );
}