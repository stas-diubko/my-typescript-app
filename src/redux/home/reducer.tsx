import { HomeState } from "./types";
import { RootState } from "../rootReducer";
import { Redirect } from "react-router";
// import { LoginState } from "../login/types";

// export const initialState: HomeState = {
//     email: "",
    
// };

export const initialState: HomeState = {
    email: "",
    name: "",
    logOut: false,
    isModal: false, 
    img: '',
    isAdmin: false
};

export function homeReducer(state: HomeState = initialState, action: any) {
    switch (action.type) {
        case 'GET_DATA_HOME': {
           const dataUserStr:any = localStorage.getItem('dataUser');
           const dataUser:any = JSON.parse(dataUserStr);
            return {
                ...state,
                email: dataUser.email,
                name: dataUser.name

            }
        }
        case 'GET_ADMIN': {
            let isAdmin = action.payload 
            return {
                ...state, 
                isAdmin: isAdmin.isAdmin             
              };
        }
        case 'LOGOUT': {
            // localStorage.removeItem('load');
            // localStorage.removeItem('dataUser');
            return {
                ...state,
                logOut: true,
                
            }
           
        }


        
        default:
            return state;
        
    }
}

export const home = (state: RootState) => state.home;