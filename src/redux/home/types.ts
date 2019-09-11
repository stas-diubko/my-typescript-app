export enum LogoutActions {
  DO_LOGOUT = "DO_LOGOUT",
  LOGOUT = "LOGOUT",
  GET_DATA_HOME = "GET_DATA_HOME",
  GOT_DATA_HOME = "GOT_DATA_HOME",
  GET_ADMIN = "GET_ADMIN",
  DO_USER_CHANGE = "DO_USER_CHANGE",
  
}

export interface HomeState {
  email: any;
  name: any;
  logOut: boolean; 
  isModal: boolean;
  img: any;
  isAdmin: boolean; 
  countBasket: string;
  pass: any;
  isChangeData: boolean,
  imgChange: any;
  isModalMore: boolean; 
}

