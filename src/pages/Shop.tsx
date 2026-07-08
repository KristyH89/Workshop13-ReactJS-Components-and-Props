// pages/Shop.tsx
import { Sidebar } from "../components/layout/Sidebar";
import { ProductGrid } from "../components/products/ProductGrid";
import { Pagination } from "../components/layout/Pagination";
import { Container } from "../components/ui/Container";
import { products } from "../data/products";

export function Shop() {
    return (
        <>
            <main className="py-8">
                <Container className="max-w-7xl">
                    <div className="flex items-start gap-8">
                        <Sidebar />
                        <div className="flex-1">
                            <ProductGrid products={products} />
                            <Pagination />
                        </div>
                    </div>
                </Container>
            </main>

        </>
    );
}