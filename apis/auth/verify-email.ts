import { IVerifyEmailReponse } from '@/models';

export const verifyEmail = async (
    token: string
): Promise<IVerifyEmailReponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email_verify_token: token })
        }
    );
    return res.json();
};
