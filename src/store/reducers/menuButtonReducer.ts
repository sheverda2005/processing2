import {IMenuButton, IMenuButtonFalseAction, MenuButtonTypes} from "@/types/menuButtonTypes";

const initialState: IMenuButton = {
    active: false
}

export const menuButtonReducer = (state = initialState, action: IMenuButtonFalseAction): IMenuButton => {
    switch (action.type) {
        case MenuButtonTypes.MENU_BUTTON:
            return {...state, active: !state.active}
        default:
            return state
    }
}