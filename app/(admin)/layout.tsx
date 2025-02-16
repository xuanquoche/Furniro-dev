import { getAccount } from '@/apis/shop';
import { HeaderAdmin } from '@/components/(admin)/header/header-admin';
import { SidebarAdmin } from '@/components/(admin)/sidebar/sidebar-admin';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const res = await getAccount();

    return (
        <div>
            <SidebarProvider>
                <SidebarAdmin />
                <main className="w-full">
                    <HeaderAdmin userInformation={res?.user} />
                    <div className="py-6 px-6 bg-primary-admin">{children}</div>
                </main>
            </SidebarProvider>
        </div>
    );
}
