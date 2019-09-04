export enum AdminActions {
    GET_USERS = "GET_USERS",
    GOT_USERS = "GOT_USERS",
    DELETE_USER = "DELETE_USER"
    
}

export interface AdminState {
    books: any;
    users: any;
  }