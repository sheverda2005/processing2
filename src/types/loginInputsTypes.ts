


export interface ILoginInputs {
    email: string,
    password: string,
}

export enum LoginTypes {
    "INPUT_EMAIL"="INPUT_EMAIL",
    "INPUT_PASSWORD"= "INPUT_PASSWORD",
}

export  interface InputEmail {
    type: LoginTypes.INPUT_EMAIL,
    password: string,
}


export  interface InputPassword {
    type: LoginTypes.INPUT_PASSWORD,
    password: string,
}

export type LoginInputsActions = InputEmail | InputPassword | any
