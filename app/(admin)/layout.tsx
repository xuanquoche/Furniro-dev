import { HeaderAdmin } from "@/components/(admin)/header/header-admin";
import { SidebarAdmin } from "@/components/(admin)/sidebar/sidebar-admin";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarAdmin />
      <main className="w-full h-screen overflow-hidden">
        <HeaderAdmin />
        <div className="py-8 px-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
