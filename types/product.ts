import { PaymentStatus } from '@/constants/enum/status-enum';

export interface IProduct {
    _id: string;
    product_name: string;
    product_description: string;
    size: string;
    original_price: number;
    discount: number;
    thumbnail: string;
    images: string[];
    status: PaymentStatus;
    quantity: number;
    brand: string;
    color: string;
    categories: {
        name: string;
    };
    createdBy: {
        _id: string;
        email: string;
    };
}
