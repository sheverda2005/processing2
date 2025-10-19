

export interface INav {
    path: string
}

export enum NavTypes {
    "CHANGE_PATH"="CHANGE_PATH"
}

export  interface INavAction {
    type: NavTypes.CHANGE_PATH
    payload: string
}

export type  INavActions = INavAction | any