import { RegisterState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: RegisterState = {   
    users:{},
    error: "",
  };

export function registerReducer (state: RegisterState = initialState, action: any) {
    switch (action.type) {
        case '@@register/DO_REGISTER': {
            return initialState;
        }
        case '@@register/SUCCESSFULL': {
            const {data} = action.payload
            return {
                ...state,
                users: data 
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