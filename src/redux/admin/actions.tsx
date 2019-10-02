import { AdminActions } from "./types";

export function getUsers(data:number) {
    return { type: AdminActions.GET_USERS, data};
}



