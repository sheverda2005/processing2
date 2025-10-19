import {Dispatch} from "react";
// @ts-ignore
import {INavActions, NavTypes} from "@/types/navTypes";


export function INavActions(path: any) {
    return (dispatch: Dispatch<INavActions>) => {
        dispatch({type: NavTypes.CHANGE_PATH, payload: path});
    }
}
