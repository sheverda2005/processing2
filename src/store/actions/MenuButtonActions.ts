import {Dispatch} from "react";
import {IMenuButtonFalseAction, MenuButtonTypes} from "@/types/menuButtonTypes";


export function MenuButtonActions() {
    return (dispatch: Dispatch<IMenuButtonFalseAction>) => {
        dispatch({type: MenuButtonTypes.MENU_BUTTON})
    }
}
