import { AdminState } from "./types";
import { RootState } from "../rootReducer";

export const initialStateLog: AdminState = {
    books: "",
    users: [],
    isAdmin: false
};

export function adminReducer(state: AdminState = initialStateLog, action: any) {
    switch (action.type) {
        case 'GET_USERS': {
            return {
                ...state, 
              };
        }

        case 'GOT_USERS': {
            const users = action.payload
            return {
                ...state, 
                users: users.users   
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

        case 'GOT_ID': {
            const id = action.payload
            
            if (id.users.isAdmin) {
                localStorage.setItem('isAdmin', 'true' )
            }

            return {
                ...state, 
                isAdmin: id.users.isAdmin
              };
        }
        
        default:
            return state;
        
    }
}

export const admin = (state: RootState) => state.admin;