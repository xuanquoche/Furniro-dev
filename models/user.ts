enum ROLES {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER'
}

export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    company_name: string;
    region: string;
    street_address: string;
    city: string;
    province: string;
    zip_code: string;
    phone: string;
    email: string;
    role: ROLES;
    username: string;
    avatar: string;
}
