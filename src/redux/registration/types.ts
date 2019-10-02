export enum RegisterActions {
    DO_REGISTER = "DO_REGISTER",
    SUCCESSFULL = "SUCCESSFULL",
    ERROR_OCCURED = 'ERROR_OCCURED',
    RETURN_IS_REGISTER = "RETURN_IS_REGISTER"
  }
  
export interface RegisterState {
    name: string;
    nameError: string;
    passError: string;
    emailError: string;
    users: {};
    error: string;
    email: string;
    pass: string;
    isRegister:boolean;
    isLoader: boolean,
    isAdmin: boolean
  }

  export interface RegisterRequest {
    name: string;
    email: string;
    pass: string;
    imgChange:string;
  }

export interface DoRegister {
    name: string;
    email: string;
    pass: string;
  }