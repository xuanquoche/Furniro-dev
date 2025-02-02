'use server';

import { cookies } from 'next/headers';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`, {
        ...options,
        credentials: 'include',
        headers: {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`
        }
    });

    return res;
}
