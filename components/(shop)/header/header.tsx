import LogoIcon from '@/public/icons/logo-icon.png';
import Image from 'next/image';
import HeaderNav from './header-nav';
import { HEADER_NAV, HEADER_SHOP_ACTION } from '@/constants/client-links';
import { HeaderAction } from '@/components/(admin)/header/header-action';
import { SidebarTrigger } from '@/components/ui/sidebar';
import HeaderSide from './header-side';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { IUserSignInResponse } from '@/models';

export interface HeaderProps {
    userInformation: IUserSignInResponse;
}

const HeaderShop = ({ userInformation }: HeaderProps) => {
    return (
        <header className="py-2 px-6 sticky top-0 z-50 left-0 right-0 bg-button-background md:bg-white">
            <div className="md:hidden">
                <SidebarTrigger />
                <div>
                    <HeaderSide />
                </div>
            </div>
            <div className="hidden md:flex items-center justify-between">
                <Link href={ROUTES.HOME}>
                    <Image src={LogoIcon} alt="logo" />
                </Link>
                <HeaderNav navs={HEADER_NAV} />
                <HeaderAction
                    actions={HEADER_SHOP_ACTION}
                    userInformation={userInformation}
                />
            </div>
        </header>
    );
};

export default HeaderShop;
