import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
        return NextResponse.json({ message: 'Login failed' }, { status: 401 });
    }

    const data = await res.json();
    const { access_token, refresh_token } = data.data;

    const response = NextResponse.json({ data: data.data });

    response.cookies.set('access_token', access_token, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'lax'
    });

    response.cookies.set('refresh_token', refresh_token, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'lax'
    });

    return response;
}
