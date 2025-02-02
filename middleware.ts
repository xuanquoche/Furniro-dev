import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value || null;
    const refreshToken = cookieStore.get('refresh_token')?.value || null;
    if (pathname === '/sign-in' && accessToken) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    if (pathname.startsWith('/admin') && !accessToken) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }
    if (!accessToken && refreshToken) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-refresh-token': 'true' },
            body: JSON.stringify({ refresh_token: refreshToken }),
            credentials: 'include'
        });

        if (!res.ok) {
            return NextResponse.redirect(new URL('/sign-in', req.url));
        }

        const data = await res.json();
        const { access_token, refresh_token } = data.data;

        const response = NextResponse.next();

        response.cookies.set('access_token', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60
        });

        response.cookies.set('refresh_token', refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60
        });
        return response;
    }
}

export const config = {
    matcher: ['/sign-in', '/admin/:path*', '/']
};
