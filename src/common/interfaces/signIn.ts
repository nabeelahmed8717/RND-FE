export interface ISHOWPASSWORD {
    password: boolean;
    confirmPassword: boolean;
    currentPassword?:boolean
}

export interface ICHECKSCHEMA {
    length: boolean;
    dot: boolean;
    number: boolean;
    small: boolean;
    special: boolean;
    capital: boolean;
    matched: boolean;
}

export type IUserType = {
    email: string,
    password: string,
    rememberMe:boolean
}

