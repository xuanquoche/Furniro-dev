import { fetchWithAuth } from '@/app/fetchWithAuth';
import { IProduct } from '@/types';

export const getProduct = async () => {
    const res = await fetchWithAuth('products', { method: 'GET' });
    const data = (await res.json()) as { data: { result: IProduct[] } };
    return data.data;
};
