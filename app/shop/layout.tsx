import HeaderShop from "@/components/(shop)/header/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="w-full h-screen overflow-hidden bg-gray-100 ">
        <div>
          <HeaderShop />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
