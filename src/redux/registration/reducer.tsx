import { RegisterState } from "./types";
import { RootState } from "../root.reducer";

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
    isAdmin: false
  };

export function registerReducer (state: RegisterState = initialState, action: any) {
    switch (action.type) {
        case 'DO_REGISTER': {
            return initialState;
        }
        case 'REGISTER_SUCCESSFULL': {
            const data = action.payload;
           
            return {
                ...state,
                email: data.email,
                pass: data.pass,
                isRegister: data.isRegister,
                
            };
        }
        case 'ERROR_OCCURED': {
            const { error } = action.payload;
            return {
                ...state,
                error: error 
            };
        }
        case "RETURN_IS_REGISTER": {
            return {
                ...state,
                isRegister: action.payload.isRegister
            }
        }
        default:
        return state;
    }
}

export const register = (state: RootState) => state.register;