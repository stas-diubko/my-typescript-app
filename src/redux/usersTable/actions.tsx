import { UsersTableActions } from "./types";

export function deleteUser(data:string) {
    return { type: UsersTableActions.DELETE_USER, data};
}
