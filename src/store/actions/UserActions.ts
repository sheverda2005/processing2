import {Dispatch} from "react";
import {UserActions, UserTypes} from "@/types/userTypes";
import axios from "axios";


export function getUsers(email: any, password: any) {
    return async (dispatch: Dispatch<UserActions>) => {
       try {
           dispatch({type: UserTypes.GET_USER_LOADING})
           const user = await axios.post("https://processing-server-ashy.vercel.app/api/checkUser", {
               email: email,
               password: password,
           });
           dispatch({type: UserTypes.GET_USER, payload: user.data});
       } catch (e) {
           dispatch({type: UserTypes.GET_ERROR, payload: "Неправильный email или пароль"});
           setTimeout(()=>{
               dispatch({type: UserTypes.GET_ERROR_NULL})
           }, 3000)
       }
    }
}