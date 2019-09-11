import { AdminActions } from "./types";

export function getUsers() {
    return { type: AdminActions.GET_USERS, };
}

export function getId() {
    return { type: AdminActions.GET_ID, };
}

