import { LogoutActions } from "./types";



export function doLogout() {
    return { type: LogoutActions.DO_LOGOUT};
}

export function getDataHome() {
  return { type: LogoutActions.GET_DATA_HOME};
}

export function doUserModalChange(data: any) {
  return { type: LogoutActions.DO_USER_CHANGE, data};
}