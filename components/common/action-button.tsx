'use client';

import { ExportIcon } from '@/public/icons';
import { Button } from '../custom/button';
import { useRouter } from 'next/navigation';

interface AddButtonProps {
    isAdd?: boolean;
}

export default function ActionButton({ isAdd }: AddButtonProps) {
    const router = useRouter();
    return (
        <>
            {isAdd ? (
                <div className="flex gap-4">
                    <Button className="bg-background-hover-admin text-background-admin flex justify-center items-center gap-2 hover:bg-background-hover-admin/80">
                        <ExportIcon />
                        Export
                    </Button>
                    <Button
                        className="bg-background-admin hover:bg-background-admin/80"
                        onClick={() => router.push('/admin/product/product-list/add')}
                    >
                        + Add product
                    </Button>
                </div>
            ) : (
                <div>
                    <Button className="bg-background-hover-admin text-background-admin flex justify-center items-center gap-2 hover:bg-background-hover-admin/80">
                        X Cancel
                    </Button>
                </div>
            )}
        </>
    );
}
