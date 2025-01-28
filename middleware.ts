import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value || null;
    if (pathname === '/sign-in' && accessToken) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    if (pathname.startsWith('/admin') && !accessToken) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    const requestHeaders = new Headers(req.headers);
    if (accessToken) {
        requestHeaders.set('Authorization', `Bearer ${accessToken}`);
    }

    const originalRequest = new Request(req.url, {
        method: req.method,
        headers: requestHeaders,
        body: req.body,
        redirect: 'manual'
    });

    const response = await fetch(originalRequest);

    if (response.status === 401) {
        console.log('concak');
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/sign-in', '/admin/:path*']
};
