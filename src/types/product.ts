// types/product.ts
export type BadgeColor = "rose" | "amber" | "blue" | "slate";

export interface Product {
    id: number;
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
}