'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { HEADER_NAV } from '@/constants';
import Link from 'next/link';
import { HeaderSideAvatar } from './header-side-avatar';

const HeaderSide = () => {
    return (
        <Sidebar>
            <div className="flex items-center justify-center w-full">
                <SidebarHeader className="w-full">
                    <SidebarTrigger className="self-end" />
                    <div className="my-4 w-full">
                        <HeaderSideAvatar name={'test'} src={'https://github.com/shadcn.png'} />
                    </div>
                </SidebarHeader>
            </div>
            <SidebarContent>
                <SidebarGroupContent>
                    {HEADER_NAV.map((item) => (
                        <SidebarMenuItem key={item.title} className="list-none border-b-2 mb-2">
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                    <span className="text-xl">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarGroupContent>
            </SidebarContent>
        </Sidebar>
    );
};

export default HeaderSide;
