import {INav, INavActions, NavTypes} from "@/types/navTypes";


const initialState: INav = {
    path: ""
}

export const navReducer = (state = initialState, action: INavActions): INav => {
    switch (action.type) {
        case NavTypes.CHANGE_PATH:
            return {...state, path: action.payload}
        default:
            return state;
    }
}