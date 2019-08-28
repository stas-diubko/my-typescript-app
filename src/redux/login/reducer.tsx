import { LoginState } from "./types";
import { RootState } from "../rootReducer";


export const initialStateLog: LoginState = {
    email: "",
    pass: "",
    error: "",
    isLoading: false,
    passError: '',
    emailError: '',
};

export function loginReducer(state: LoginState = initialStateLog, action: any) {
    switch (action.type) {
        case 'DO_LOGIN': {
            return {
                ...state,
                
              };
        }

        case 'LOGIN_SUCCESS': {
            const dataLog = action.payload
            // console.log(dataLog.email)
            return {
            ...state,
            email: dataLog.email,
            isLoading: true,
            
            };
        }

        case 'LOGIN_FAILED': {
            const { data } = action.payload;
            return {
              ...state,
              data,
              isLoading: false,
              error: "error"
            };
        }

        default:
            return state;
        
    }
}

export const login = (state: RootState) => state.login;