import { LoginState } from "./types";
import { RootState } from "../rootReducer";


export const initialState: LoginState = {
    email: "",
    pass: "",
    error: "",
    isLoading: false
};

export function loginReducer(state: LoginState = initialState, action: any) {
    switch (action.type) {
        case 'DO_LOGIN': {
            return {
                ...state,
                isLoading: true
              };
        }
        case 'LOGIN_FAILED': {
            const { data } = action.payload;
            return {
              ...state,
              data,
              loading: false,
              error: "error"
            };
          }

        case `@@login/LOGIN_SUCCESS`: {
            const { data } = action.payload;
            return {
            ...state,
            token: data,
            loading: false
            };
        }
    
        default:
            return state;
        
    }
}

// export const login = (state: RootState) => state.login;