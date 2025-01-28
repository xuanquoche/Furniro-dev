import { ReactNode } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/custom/button';
import { AuthService } from '@/apis/auth/auth';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

const DropdownAvatar = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    const handleSignOUt = async () => {
        try {
            const res = await AuthService.signOut();
            console.log('res', res);
            if (res.status === 201) {
                router.push(ROUTES.SIGN_IN);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0"
                >
                    {children}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem>
                    <Button onClick={() => handleSignOUt()} className="w-full">
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownAvatar;
