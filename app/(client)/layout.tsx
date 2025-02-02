import { getAccount } from '@/apis/shop';
import Footer from '@/components/(shop)/footer/footer';
import HeaderShop from '@/components/(shop)/header/header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const res = await getAccount();
    return (
        <SidebarProvider>
            <main className="max-w-[2000px] w-full h-screen m-auto">
                <div>
                    <HeaderShop userInformation={res?.user} />
                    {children}
                    <Footer location="400 University Drive Suite 200 Coral Gables,FL 33134 USA" />
                </div>
            </main>
        </SidebarProvider>
    );
}
