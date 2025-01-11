export interface ISignUpPayload {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}

export interface ISignUpResponse {
    message: string;
    data: {
        id: string;
    };
}

export interface IVerifyEmailReponse {
    message: string;
}
