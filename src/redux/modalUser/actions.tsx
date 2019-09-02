import { UserModalActions, UserChange } from "./types";

export function doUserModalChange(data: UserChange) {
    return { type: UserModalActions.DO_USER_CHANGE, data};
}