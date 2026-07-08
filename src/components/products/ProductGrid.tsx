// components/products/ProductGrid.tsx
import { ProductCard } from "./ProductCard";
import type { Product } from "../../types/product";

type ProductGridProps = {
    products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
