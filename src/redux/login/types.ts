export enum LoginActions {
    DO_LOGIN = "DO_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED",
    REMOOVE_ISLOADING = "REMOOVE_ISLOADING"
  }

  export interface LoginRequest {
    email: string;
    pass: string;
  }

  export interface LoginState {
    email: string;
    pass: string;
    isLoading: boolean;
    error: string;
    passError: any;
    emailError: any;
    books: any;
    users: any;
  }
  
//   export interface DoLoginProps {
//     email: string;
//     password: string;
//     payloadFunc: Function;
//   }

  
  
  export interface LoginResult {
    token: string;
  }
  