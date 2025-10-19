import * as InputsLogin from "./InputsActions"
import * as UserActions from "./UserActions"
import * as MenuButtonAction from "./MenuButtonActions"
import * as NavActions from "./navActions"

export default {
    ...InputsLogin,
    ...UserActions,
    ...MenuButtonAction,
    ...NavActions,
}