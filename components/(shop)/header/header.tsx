import LogoIcon from "@/public/icons/logo-icon.png";
import Image from "next/image";
import HeaderNav from "./header-nav";
import { HEADER_NAV, HEADER_SHOP_ACTION } from "@/constants/client-links";
import { HeaderAction } from "@/components/(admin)/header/header-action";
import { SidebarTrigger } from "@/components/ui/sidebar";
import HeaderSide from "./header-side";

const HeaderShop = () => {
  return (
    <header className="py-2 px-6 sticky top-0 z-50 left-0 right-0 bg-white">
      <div className="md:hidden">
        <SidebarTrigger />
        <div>
          <HeaderSide />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between px-6">
        <Image src={LogoIcon} alt="logo" />
        <HeaderNav navs={HEADER_NAV} />
        <HeaderAction actions={HEADER_SHOP_ACTION} />
      </div>
    </header>
  );
};

export default HeaderShop;
