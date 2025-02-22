'use server';

import { fetchWithAuth } from '@/app/fetchWithAuth';
import { cookies } from 'next/headers';

export const logOut = async () => {
    const res = await fetchWithAuth(`auth/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    (await cookies()).delete('access_token');
    (await cookies()).delete('refresh_token');
    return res.json();
};
