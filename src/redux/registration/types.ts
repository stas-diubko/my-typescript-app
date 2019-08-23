import { BaseState } from "../../types/baseState";
import { User } from "../../types/user";

export enum RegisterActions {
    DO_REGISTER = "DO_REGISTER",
    SUCCESSFULL = "SUCCESSFULL",
    ERROR_OCCURED = 'ERROR_OCCURED'
  }

  
export interface RegisterState {
    users: {};
    error: string;
  }

// export interface RegisterState extends BaseState {
//     users: User[];
// }

export interface DoRegister {
    name: string;
    email: string;
    pass: string;
    // payloadFunc: Function;
  }