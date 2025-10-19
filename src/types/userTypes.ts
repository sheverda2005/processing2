
export interface IUser {
    name: string,
    password: string,
    email: string,
    phone: string,
    balance: number,
    surName: string,
    login: string,
    telegram: string,
    frozen_balance: number,
    loading: boolean,
    error: string | null
}

export interface IUserState {
    user: IUser | null,
    loading: boolean,
    error: string | null
}


export enum UserTypes {
    "GET_USER_LOADING"="GET_USER_LOADING",
   "GET_USER"="GET_USER",
   "GET_ERROR"="GET_ERROR",
   "GET_ERROR_NULL"="GET_ERROR_NULL",
}



export interface getUserAction {
    type: UserTypes.GET_USER
    payload: IUserState
}

export interface getUserErrorAction {
    type: UserTypes.GET_ERROR
    payload: IUserState
}


export interface getUserErrorActionNull {
    type: UserTypes.GET_ERROR_NULL
}

export interface getUserActionLoading {
    type: UserTypes.GET_USER_LOADING
}

export type UserActions = getUserAction | getUserErrorAction | getUserErrorActionNull | getUserActionLoading | any