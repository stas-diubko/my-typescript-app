import { RegisterState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: RegisterState = {   
    users: {},
    error: '',
    name: '',
    pass: '',
    email: '',
    nameError: '',
    passError: '',
    emailError: '',
    isRegister: false,
    isLoader: false,
  };

export function registerReducer (state: RegisterState = initialState, action: any) {
    switch (action.type) {
        case '@@register/DO_REGISTER': {
            return initialState;
        }
        case '@@register/SUCCESSFULL': {
            const data = action.payload;
            // console.log(data)
            return {
                ...state,
                email: data.email,
                pass: data.pass,
                isRegister: data.isRegister,
                isLoader: data.isLoader
            };
        }
        case '@@register/ERROR_OCCURED': {
            const { error } = action.payload;
            return {
                ...state,
                error: error 
            };
        }
        default:
        return state;
    }
}


// export const register = (state: RootState) => state.register;