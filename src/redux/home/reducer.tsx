import { HomeState } from "./types";
import { RootState } from "../rootReducer";
// import { LoginState } from "../login/types";

// export const initialState: HomeState = {
//     email: "",
    
// };

export const initialState: HomeState = {
    email: "",
   
};

export function homeReducer(state: HomeState = initialState, action: any) {
    switch (action.type) {
        
        default:
            return state;
        
    }
}

export const home = (state: RootState) => state.home;