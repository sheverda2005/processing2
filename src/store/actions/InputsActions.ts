import {Dispatch} from "react";
import {UserActions} from "@/types/userTypes";
import {LoginInputsActions, LoginTypes} from "@/types/loginInputsTypes";


export function emailInput(email: any) {
    return  (dispatch: Dispatch<LoginInputsActions>) => {
        dispatch({type: LoginTypes.INPUT_EMAIL, payload: email});
    }
}

export function passwordInput(password: any) {
    return  (dispatch: Dispatch<LoginInputsActions>) => {
        dispatch({type: LoginTypes.INPUT_PASSWORD, payload: password});
    }
}