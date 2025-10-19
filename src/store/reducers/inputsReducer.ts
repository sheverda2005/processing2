import {ILoginInputs, LoginInputsActions, LoginTypes} from "@/types/loginInputsTypes";


const initialState: ILoginInputs = {
    email: "",
    password: ""
}

export const inputsReducer = (state = initialState, action: LoginInputsActions):ILoginInputs => {
    switch (action.type) {
        case LoginTypes.INPUT_EMAIL:
           return {...state, email: action.payload}
        case LoginTypes.INPUT_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state;
    }
}