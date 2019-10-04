import { LoginState } from "./types";
import { RootState } from "../root.reducer";

export const initialStateLog: LoginState = {
    email: "",
    pass: "",
    error: "",
    isLoading: false,
    passError: '',
    emailError: '',
    books: [],
    users: []
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
            const load:any = localStorage.getItem('load')
            const isLoad = JSON.parse(load)
           
            return {
                ...state,
                email: dataLog.email,
                isLoading: isLoad,
                users: dataLog.users,
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

        case 'REMOOVE_ISLOADING': {
            const { data } = action.payload;
            return {
              ...state,
              isLoading: false,
            };
        }

        default:
            return state;
        
    }
}

export const login = (state: RootState) => state.login;