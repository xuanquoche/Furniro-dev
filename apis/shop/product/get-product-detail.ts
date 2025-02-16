import { fetchWithAuth } from '@/app/fetchWithAuth';
import { IProduct } from '@/types';

export const getProductDetail = async ({ productId }: { productId: string }) => {
    const res = await fetchWithAuth(`products/${productId}`, {
        method: 'GET'
    });
    const data = (await res.json()) as { data: IProduct };
    return data.data;
};
