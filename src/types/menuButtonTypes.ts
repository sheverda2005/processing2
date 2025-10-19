


export interface IMenuButton {
    active: boolean
}

export enum MenuButtonTypes {
    "MENU_BUTTON"="MENU_BUTTON"
}

interface MenuButtonAction {
    type: MenuButtonTypes.MENU_BUTTON
}

export type IMenuButtonFalseAction = MenuButtonAction | any