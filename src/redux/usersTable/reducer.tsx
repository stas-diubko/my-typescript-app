import { UsersTableState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: UsersTableState = {
    users: '',
    usersLength: 0
};

export function usersTableReducer(state: UsersTableState = initialState, action: any) {
    switch (action.type) {
        case 'DELETE_USER': {
            return {
                ...state,
             
            }
        }
        
        default:
            return state;
        
    }
}

export const usersTable = (state: RootState) => state.usersTable;