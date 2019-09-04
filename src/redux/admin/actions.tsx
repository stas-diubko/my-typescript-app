import { AdminActions } from "./types";


export function getUsers() {
    return { type: AdminActions.GET_USERS, };
}

export function deleteUser(data:any) {
    return { type: AdminActions.DELETE_USER, data};
}
