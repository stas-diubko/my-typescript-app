export enum AdminActions {
    GET_USERS = "GET_USERS",
    GOT_USERS = "GOT_USERS",
}

export interface AdminState {
    books: any;
    users: any;
    isAdmin: boolean;
  }