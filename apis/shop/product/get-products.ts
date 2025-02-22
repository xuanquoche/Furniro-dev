import { customFetchClient } from '@/apis/customFetchClient';
import { fetchWithAuth } from '@/app/fetchWithAuth';
import { IProduct } from '@/types';

export interface MetaProps {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
}

export const getProduct = async () => {
    const res = await fetchWithAuth('products', { method: 'GET' });
    const data = (await res.json()) as { data: { result: IProduct[] } };
    return data.data;
};

export const getProductByClient = async ({
    token,
    current,
    pageSize
}: {
    token: string;
    current: number;
    pageSize: number;
}) => {
    const res = (await customFetchClient({
        url: `products?current=${current}&pageSize=${pageSize}`,
        method: 'GET',
        token: token
    })) as { data: { result: IProduct[]; meta: MetaProps } };
    return res;
};
