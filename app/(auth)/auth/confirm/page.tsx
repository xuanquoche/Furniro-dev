'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthService } from '@/apis/auth/auth';
import { ROUTES } from '@/constants';

const Confirm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleVerifyEmail = async (search: string) => {
        try {
            await AuthService.verifyEmail(search);
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
