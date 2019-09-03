export enum LogoutActions {
  DO_LOGOUT = "DO_LOGOUT",
  LOGOUT = "LOGOUT",
  GET_DATA_HOME = "GET_DATA_HOME",
  GET_ADMIN = "GET_ADMIN"
  
}

export interface HomeState {
  email: any;
  name: any;
  logOut: boolean; 
  isModal: boolean;
  img: any;
  isAdmin: boolean;  
}
