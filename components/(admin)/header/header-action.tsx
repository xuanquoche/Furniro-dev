'use client';

import { HeaderAvatar } from './header-avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/custom/button';
import { ReactNode, useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/use-click-outside';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import DropdownAvatar from '@/components/(shop)/header/dropdown-avatar';
import { IUserSignInResponse } from '@/models';

interface HeaderActionItem {
    icon: ReactNode;
    title: string;
}

interface HeaderActionProps {
    actions: HeaderActionItem[];
    userInformation: IUserSignInResponse;
}

export const HeaderAction = ({
    actions,
    userInformation
}: HeaderActionProps) => {
    const [isShowInputSearch, setIsShowInputSearch] = useState(false);

    const router = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    useClickOutside(inputRef, () => setIsShowInputSearch(false));

    const handleShowInputSearch = () => {
        setIsShowInputSearch(true);
    };

    return (
        <div className="flex">
            {actions.map((item, index) => (
                <div key={index} className="cursor-pointer flex items-center">
                    {item.title == 'Search' ? (
                        <div className="flex items-center">
                            {isShowInputSearch && (
                                <Input
                                    className="p-0 h-6"
                                    ref={inputRef}
                                    autoFocus
                                />
                            )}
                            <Button
                                variant="ghost"
                                className="hover:bg-background-hover-admin md:px-2 lg:px-3 hover:rounded-xl"
                                size="sm"
                                onClick={handleShowInputSearch}
                            >
                                {item.icon}
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            className="hover:bg-background-hover-admin md:px-2 lg:px-3 hover:rounded-xl w-fit"
                            size="sm"
                        >
                            {item.icon}
                        </Button>
                    )}
                </div>
            ))}
            {userInformation ? (
                <DropdownAvatar>
                    <HeaderAvatar
                        src={'https://github.com/shadcn.png'}
                        name={userInformation.username}
                        role={userInformation.role}
                    />
                </DropdownAvatar>
            ) : (
                <Button
                    className="ml-4"
                    onClick={() => router.push(ROUTES.SIGN_IN)}
                >
                    Login
                </Button>
            )}
        </div>
    );
};
