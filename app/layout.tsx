import Providers from '@/components/layout/provider';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'next-client-cookies/server';

const RootLayout = async ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body>
                <CookiesProvider>
                    <Providers>{children}</Providers>
                </CookiesProvider>
                ;
                <ToastContainer position="top-right" autoClose={5000} />
            </body>
        </html>
    );
};

export default RootLayout;
