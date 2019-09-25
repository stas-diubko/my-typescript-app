import { AdminState } from "./types";
import { RootState } from "../rootReducer";

export const initialStateLog: AdminState = {
    books: "",
    users: [],
    isAdmin: false,
    usersLength: ''
};

export function adminReducer(state: AdminState = initialStateLog, action: any) {
    switch (action.type) {
        case 'GET_USERS': {
            return {
                ...state, 
              };
        }

        case 'GOT_USERS': {
                    
            return {
                ...state, 
                users: action.payload.users,
                usersLength: action.payload.usersLength
              };
        }

        case 'DELETE_USER': {
            return {
                ...state, 
                 
              };
        }

        case 'GET_ID': {
            return {
                ...state, 
               
              };
        }

        case 'GET_IS_ADMIN': {
            return {
                ...state, 
                isAdmin: action.payload.isAdmin
              };
        }
        
        default:
            return state;
        
    }
}

export const admin = (state: RootState) => state.admin;