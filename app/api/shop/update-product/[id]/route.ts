import { PaymentStatus } from '@/constants/enum/status-enum';
import { customFetchClient } from '@/lib/customFetchClient';
import { cookies } from 'next/headers';

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

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const token = (await cookies()).get('access_token')?.value || '';
    if (!token) {
        return Response.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const res = await customFetchClient<AddProductProps, CustomeFetchResponse>({
        method: 'PATCH',
        url: `products/${params.id}`,
        token,
        body
    });

    console.log('res update', res);

    if (res.statusCode !== 200) {
        return Response.json({ message: 'Error adding product' }, { status: 500 });
    }

    return Response.json('ok', { status: 200 });
}
