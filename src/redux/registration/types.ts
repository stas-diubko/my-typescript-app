import { BaseState } from "../../types/baseState";
import { User } from "../../types/user";

export enum RegisterActions {
    DO_REGISTER = "DO_REGISTER",
    SUCCESSFULL = "SUCCESSFULL",
    ERROR_OCCURED = 'ERROR_OCCURED'
  }

  
export interface RegisterState {
    name: string;
    nameError: string;
    passError: string;
    emailError: string;
    users: {};
    error: string;
    email: any;
    pass: any;
    isRegister:boolean;
    isLoader: boolean,
    isAdmin: boolean
  }

  export interface RegisterRequest {
    name: string;
    email: string;
    pass: string;
    isAdmin: boolean
  }

// export interface RegisterState extends BaseState {
//     users: User[];
// }

export interface DoRegister {
    name: string;
    email: string;
    pass: string;
    isAdmin: boolean
    // payloadFunc: Function;
  }