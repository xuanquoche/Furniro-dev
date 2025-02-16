import { fetchWithAuth } from '@/app/fetchWithAuth';

export interface ICategory {
    _id: string;
    name: string;
    description: string;
    createdBy: {
        _id: string;
        email: string;
    };
}

export const getCategories = async () => {
    try {
        const res = await fetchWithAuth('categories', { method: 'GET' });
        const data = (await res.json()) as { data: { result: ICategory[] } };
        return data.data.result;
    } catch (error) {
        console.log('fail to get categories', error);
    }
};
