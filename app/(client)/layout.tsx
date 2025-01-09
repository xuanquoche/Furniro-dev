import Footer from "@/components/(shop)/footer/footer";
import HeaderShop from "@/components/(shop)/header/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="max-w-[1540px] w-full h-screen m-auto">
        <div>
          <HeaderShop />
          {children}
          <Footer location="400 University Drive Suite 200 Coral Gables,FL 33134 USA" />
        </div>
      </main>
    </SidebarProvider>
  );
}
