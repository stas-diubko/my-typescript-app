export enum AdminActions {
    GET_USERS = "GET_USERS",
    GOT_USERS = "GOT_USERS",
}

export interface AdminState {
    books: object;
    users: object[];
    isAdmin: boolean;
    usersLength: number;
}