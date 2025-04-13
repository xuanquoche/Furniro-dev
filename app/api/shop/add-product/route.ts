import { customFetchClient } from '@/lib/customFetchClient';
import { cookies } from 'next/headers';

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

interface CustomeFetchResponse {
    statusCode: number;
    message: string;
    data: {
        _id: string;
        createdAt: string;
    };
}

export async function POST(request: Request) {
    const body = await request.json();
    const token = (await cookies()).get('access_token')?.value || '';
    if (!token) {
        return Response.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const res = await customFetchClient<AddProductProps, CustomeFetchResponse>({
        method: 'POST',
        url: 'products',
        token,
        body
    });

    if (res.statusCode !== 201) {
        return Response.json({ message: 'Error adding product' }, { status: 500 });
    }
    console.log('Response from API:', res);
    return Response.json('ok', { status: 201 });
}
