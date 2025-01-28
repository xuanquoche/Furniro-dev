import { fetchWithAuth } from '@/app/fetchWithAuth';

export const getAccount = async () => {
    const res = await fetchWithAuth('auth/account', { method: 'GET' });
    const data = await res.json();
    return data.data;
};
