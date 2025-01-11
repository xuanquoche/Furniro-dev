import Providers from '@/components/layout/provider';
import './globals.css';
import { getSession } from '@/config';
import { ToastContainer } from 'react-toastify';

const RootLayout = async ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await getSession();

    return (
        <html lang="en">
            <body>
                <Providers session={session}>{children}</Providers>
                <ToastContainer position="top-right" autoClose={5000} />
            </body>
        </html>
    );
};

export default RootLayout;
