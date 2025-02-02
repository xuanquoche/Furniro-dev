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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ProductIcon, OrderIcon, DashboardIcon, AnalyticsIcon, CustomerIcon, SellerIcon } from '@/public/icons';
import LogoIcon from '@/public/icons/logo-icon.png';
import Image from 'next/image';

const items = [
    {
        title: 'Dashboard',
        url: '#dashboard',
        icon: DashboardIcon
    },
    {
        title: 'Product',
        subItems: [
            { title: 'Product List', url: '#product-list' },
            { title: 'Category', url: '#category' }
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
    const [activeTab, setActiveTab] = useState<string>('');

    const handleClickTab = (activeTab: string) => {
        setActiveTab(activeTab);
    };

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
                                    <Collapsible key={index}>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                className="hover:bg-background-hover-admin hover:text-background-admin rounded-xl"
                                                onClick={() => handleClickTab(item.title)}
                                            >
                                                <div className="flex items-center justify-between gap-3">
                                                    {item.icon && <item.icon />}
                                                    <span className="font-semibold">{item.title}</span>
                                                </div>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <SidebarMenuSubItem
                                                        key={subIndex}
                                                        className="rounded-md"
                                                        onClick={() => handleClickTab(subItem.title)}
                                                    >
                                                        <a
                                                            href={subItem.url}
                                                            className={cn(
                                                                'p-2 text-sm text-gray-400 hover:bg-background-hover-admin hover:text-background-admin mb-1 w-full text-left cursor-pointer hover:rounded-md block font-semibold',
                                                                {
                                                                    'bg-background-admin text-white rounded-xl font-semibold':
                                                                        activeTab == subItem.title
                                                                }
                                                            )}
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={index} onClick={() => handleClickTab(item.title)}>
                                        <a
                                            href={item.url}
                                            className={cn(
                                                'flex items-center p-2 text-gray-400 hover:bg-background-hover-admin hover:text-background-admin w-full text-left rounded-md hover:rounded-md',
                                                {
                                                    'bg-background-admin text-white rounded-xl': activeTab == item.title
                                                }
                                            )}
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                {item.icon && <item.icon isActive={activeTab === item.title} />}
                                                <span className="font-semibold">{item.title}</span>
                                            </div>
                                        </a>
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
