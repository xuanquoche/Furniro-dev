'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import {
    ProductIcon,
    OrderIcon,
    DashboardIcon,
    AnalyticsIcon,
    CustomerIcon,
    SellerIcon
} from '@/public/icons';
import LogoIcon from '@/public/icons/logo-icon.png';
import Image from 'next/image';
import { ROUTES } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const items = [
    {
        title: 'Dashboard',
        url: ROUTES.ADMIN_DASHBOARD,
        icon: DashboardIcon
    },
    {
        title: 'Product',
        subItems: [
            { title: 'Product List', url: ROUTES.PRODUCT_LIST },
            { title: 'Category', url: ROUTES.CATEGORY }
        ],
        icon: ProductIcon
    },
    {
        title: 'Order',
        url: '#orders',
        icon: OrderIcon
    },
    {
        title: 'Customers',
        url: '#customers',
        icon: CustomerIcon
    },
    {
        title: 'Seller',
        url: '#seller',
        icon: SellerIcon
    },
    {
        title: 'Analytics',
        url: '#nalytics',
        icon: AnalyticsIcon
    }
];

export const SidebarAdmin = () => {
    const pathname = usePathname();

    return (
        <Sidebar className="w-64">
            <SidebarHeader>
                <div className="my-4">
                    <Image src={LogoIcon} alt="logo" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item, index) =>
                                item.subItems ? (
                                    <Collapsible
                                        key={index}
                                        defaultOpen={pathname.includes(
                                            item.subItems[0].url
                                        )}
                                    >
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton className="hover:bg-background-hover-admin hover:text-background-admin rounded-xl">
                                                <div className="flex items-center justify-between gap-3">
                                                    {item.icon && <item.icon />}
                                                    <span className="font-semibold">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.subItems.map(
                                                    (subItem, subIndex) => {
                                                        const isActive =
                                                            pathname ===
                                                            subItem.url;
                                                        return (
                                                            <SidebarMenuSubItem
                                                                key={subIndex}
                                                                className="rounded-md"
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.url
                                                                    }
                                                                    className={cn(
                                                                        'p-2 text-sm text-gray-400 hover:bg-background-hover-admin hover:text-background-admin mb-1 w-full text-left cursor-pointer hover:rounded-md block font-semibold',
                                                                        {
                                                                            'bg-background-admin text-white rounded-xl font-semibold':
                                                                                isActive
                                                                        }
                                                                    )}
                                                                >
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </Link>
                                                            </SidebarMenuSubItem>
                                                        );
                                                    }
                                                )}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={index}>
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                'flex items-center p-2 text-gray-400 hover:bg-background-hover-admin hover:text-background-admin w-full text-left rounded-md hover:rounded-md',
                                                {
                                                    'bg-background-admin text-white rounded-xl':
                                                        pathname === item.url
                                                }
                                            )}
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                {item.icon && (
                                                    <item.icon
                                                        isActive={
                                                            pathname ===
                                                            item.url
                                                        }
                                                    />
                                                )}
                                                <span className="font-semibold">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
