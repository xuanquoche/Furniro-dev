import { SidebarTrigger } from "@/components/ui/sidebar";
import { HeaderAction } from "./header-action";

export const HeaderAdmin = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 bg-sidebar">
      <SidebarTrigger />
      <HeaderAction />
    </div>
  );
};
