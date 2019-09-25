import { AdminActions } from "./types";

export function getUsers(data:any) {
    return { type: AdminActions.GET_USERS, data};
}



