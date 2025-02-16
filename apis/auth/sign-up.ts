import { ISignUpPayload, ISignUpResponse } from '@/models';

export const signUp = async (
    payload: ISignUpPayload
): Promise<ISignUpResponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
    );
    return res.json();
};
