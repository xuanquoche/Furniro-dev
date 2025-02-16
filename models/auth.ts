import { IUser } from './user';

export interface ISignUpPayload {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}

export interface ISignInPayload {
    username: string;
    password: string;
}

export interface ISignUpResponse {
    message: string;
    data: {
        id: string;
    };
}

export type IUserSignInResponse = Pick<
    IUser,
    'id' | 'email' | 'username' | 'role' | 'avatar'
>;

export interface ISignInResponse {
    id: string;
    message?: string;
    statusCode: number;
    data: {
        access_token: string;
        refresh_token: string;
        user: IUserSignInResponse;
    };
}

export interface ISignInResponseAuth {
    statusCode: number;
    message?: string;
    data: {
        access_token: string;
        refresh_token: string;
        user: IUserSignInResponse;
    };
}

export interface IVerifyEmailReponse {
    message: string;
}

export interface ISignOutResponse {
    message: string;
    status: number;
    data: unknown;
}
