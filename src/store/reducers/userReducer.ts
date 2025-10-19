import {IUser, IUserState, UserActions, UserTypes} from "@/types/userTypes";


const initialState: IUserState = {
    user: null,
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {
        case UserTypes.GET_USER:
            return {...state, user: action.payload, error: null, loading: false}
        case UserTypes.GET_ERROR:
            return {...state, error: action.payload, loading: false}
        case UserTypes.GET_ERROR_NULL:
            return {...state, error: null}
        case UserTypes.GET_USER_LOADING:
            return {...state, loading: true}
        default:
            return state;
    }
}