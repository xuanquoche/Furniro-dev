'use server';

import { cookies } from 'next/headers';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;

    console.log('Current access_token:', accessToken);

    let res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`, {
        ...options,
        credentials: 'include',
        headers: {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (res.status === 401) {
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
            console.log('New access token received, retrying request...', newAccessToken);
            res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`, {
                ...options,
                credentials: 'include',
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${newAccessToken.access_token}`
                }
            });
        }
    }

    return res;
}

async function refreshToken() {
    try {
        const cookieStore = await cookies();
        const refresh_token = cookieStore.get('refresh_token')?.value;

        const res = await fetch('http://localhost:3000/api/auth/refresh', {
            method: 'POST',
            credentials: 'include',
            headers: {
                ...(refresh_token && { 'x-refresh-token': refresh_token }),
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error('Refresh token failed');
        }

        const data = await res.json();
        const { access_token, refresh_token: new_refresh_token } = data;

        return { access_token, refresh_token: new_refresh_token };
    } catch (error) {
        console.error('Refresh token failed:', error);
        return null;
    }
}
