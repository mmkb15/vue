export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: File | null | string;
    image_path?: string;
    category_id: number;
    category: string;
    description?: string;
    brand_id: number;
    brand: string;
    reorder_level: number;
    active: boolean;
    created_at?: string;
    updated_at?: string;
}

export const defaultProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category_id: 0,
    category: '',
    brand_id: 0,
    brand: '',
    description: '',
    reorder_level: 0,
    active: true,
}

