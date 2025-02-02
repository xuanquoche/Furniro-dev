'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants';
import { verifyEmail } from '@/apis/auth';

const Confirm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleVerifyEmail = async (search: string) => {
        try {
            await verifyEmail(search);
            router.push(ROUTES.SIGN_IN);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const searchParam = searchParams.get('email_veriy_token');
    useEffect(() => {
        console.log('token', searchParam);
        handleVerifyEmail(searchParam as string);
    }, []);
    return <div>hello</div>;
};

export default Confirm;
