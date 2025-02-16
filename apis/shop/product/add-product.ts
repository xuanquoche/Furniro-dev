import { customFetchClient } from '@/apis/customFetchClient';
import { PaymentStatus } from '@/constants/enum/status-enum';

interface IProduct {
    product_name?: string;
    product_description?: string;
    thumbnail?: string;
    original_price?: number;
    discount?: number;
    color?: string;
    categories?: string;
    size?: string;
    quantity?: number;
    status?: PaymentStatus;
    brand?: string;
    image?: string[];
}

interface AddProductProps {
    url: string;
    method: 'POST' | 'PATCH' | 'DELETE';
    token: string;
    body: IProduct;
}

export const addProduct = async ({ url, method, token, body }: AddProductProps) => {
    try {
        const response = await customFetchClient<IProduct, { statusCode: number; message: string }>(
            {
                url,
                method,
                token,
                body
            }
        );

        console.log('Product operation response:', response);
        return response;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};
