export enum LogoutActions {
  DO_LOGOUT = "DO_LOGOUT",
  LOGOUT = "LOGOUT",
  GET_DATA_HOME = "GET_DATA_HOME",
  GOT_DATA_HOME = "GOT_DATA_HOME",
  GET_ADMIN = "GET_ADMIN",
  DO_USER_CHANGE = "DO_USER_CHANGE",
  GET_IS_ADMIN = "GET_IS_ADMIN",
  GET_AVA = "GET_AVA"
}

export interface HomeState {
  email: string;
  name: string;
  logOut: boolean; 
  isModal: boolean;
  img: string;
  isAdmin: boolean; 
  countBasket: string;
  pass: string;
  isChangeData: boolean,
  imgChange: string;
  isModalMore: boolean; 
}

