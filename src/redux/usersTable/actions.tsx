import { UsersTableActions } from "./types";

export function deleteUser(data:any) {
    return { type: UsersTableActions.DELETE_USER, data};
}
