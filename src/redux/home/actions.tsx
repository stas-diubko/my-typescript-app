import { LogoutActions } from "./types";



export function doLogout() {
    return { type: LogoutActions.DO_LOGOUT};
  }