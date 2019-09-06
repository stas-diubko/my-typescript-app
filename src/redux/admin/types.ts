export enum AdminActions {
    GET_USERS = "GET_USERS",
    GOT_USERS = "GOT_USERS",
    GET_ID = "GET_ID", 
    GOT_ID = "GOT_ID"
   
}

export interface AdminState {
    books: any;
    users: any;
    isAdmin: boolean;
  }