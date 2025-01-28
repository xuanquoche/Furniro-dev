import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const refreshToken = req.headers.get('x-refresh-token');

    if (!refreshToken) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: refreshToken }),
        credentials: 'include'
    });

    if (!res.ok) {
        return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
    }
    const data = await res.json();
    console.log('refresh token api', data);
    const { access_token, refresh_token } = data.data;
    const response = NextResponse.json(
        { access_token, refresh_token },
        {
            status: 200
        }
    );

    response.cookies.set('access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/'
    });

    response.cookies.set('refresh_token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/'
    });

    return response;
}
