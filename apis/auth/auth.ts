import { ISignUpPayload, ISignUpResponse, IVerifyEmailReponse } from '@/models';
import instance from '../instance';

export class AuthService {
    private static readonly basePath: string = '/auth';

    static signUp(payload: ISignUpPayload): Promise<ISignUpResponse> {
        return instance.post(`${this.basePath}/register`, payload);
    }

    static verifyEmail(token: string): Promise<IVerifyEmailReponse> {
        return instance.post('/users/verify-email', {
            email_verify_token: token
        });
    }
}
