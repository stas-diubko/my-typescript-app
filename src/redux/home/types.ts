export enum LogoutActions {
  DO_LOGOUT = "DO_LOGOUT",
  LOGOUT = "LOGOUT",
  GET_DATA_HOME = "GET_DATA_HOME"
  
}

export interface HomeState {
    email: any;
    name: any;
    logOut: boolean; 
    isModal: boolean 
  }
