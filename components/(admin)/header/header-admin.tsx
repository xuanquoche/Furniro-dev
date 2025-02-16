import { SidebarTrigger } from '@/components/ui/sidebar';
import { HeaderAction } from './header-action';
import { HEADER_ACTION } from '@/constants';
import { HeaderProps } from '@/components/(shop)/header/header';

export const HeaderAdmin = ({ userInformation }: HeaderProps) => {
    return (
        <div className="flex justify-between items-center py-2 px-4 bg-sidebar">
            <SidebarTrigger />
            <HeaderAction
                actions={HEADER_ACTION}
                userInformation={userInformation}
            />
        </div>
    );
};
