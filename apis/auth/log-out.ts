'use server';

import { cookies } from 'next/headers';

export const logOut = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
    );
    (await cookies()).delete('access_token');
    (await cookies()).delete('refresh_token');
    return res.json();
};
