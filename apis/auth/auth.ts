import {
    ISignInPayload,
    ISignInResponse,
    ISignOutResponse,
    ISignUpPayload,
    ISignUpResponse,
    IVerifyEmailReponse
} from '@/models';
import instance from '../instance';
import axios from 'axios';

// export const signIn = async (payload: ISignInPayload) => {
//     const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//         credentials: 'include'
//     });

//     if (!res.ok) throw new Error('Login failed');

//     console.log('data test', res.json());

//     const { accessToken } = await res.json();
//     useAuthStore.getState().setAccessToken(accessToken);
// };

export class AuthService {
    private static readonly basePath: string = '/auth';

    static signUp(payload: ISignUpPayload): Promise<ISignUpResponse> {
        return axios.post(`${this.basePath}/register`, payload);
    }

    static verifyEmail(token: string): Promise<IVerifyEmailReponse> {
        return instance.post('/auth/verify-email', {
            email_verify_token: token
        });
    }

    static signOut(): Promise<ISignOutResponse> {
        return instance.post(`${this.basePath}/logout`);
    }
}
