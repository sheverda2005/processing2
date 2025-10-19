import {combineReducers} from "redux";
import {userReducer} from "@/store/reducers/userReducer";
import {inputsReducer} from "@/store/reducers/inputsReducer";
import {menuButtonReducer} from "@/store/reducers/menuButtonReducer";
import {navReducer} from "@/store/reducers/navReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    inputs: inputsReducer,
    menuMutton: menuButtonReducer,
    path: navReducer,
})




export type RootReducer = ReturnType<typeof rootReducer>