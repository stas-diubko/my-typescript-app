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
    pass: "",
    logOut: false,
    isModal: false, 
    img: '',
    isAdmin: false,
    countBasket: '',
    isChangeData: false,
    imgChange: ''
};

export function homeReducer(state: HomeState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_DATA_HOME': {
        //    const dataUserStr:any = localStorage.getItem('dataUser');
        //    const dataUser:any = JSON.parse(dataUserStr);
           let dataUser = action.payload
        //    console.log(dataUser.dataHome);
        //    console.log(dataUser.countBasket);
           
            return {
                ...state,
                email: dataUser.dataHome.email,
                name: dataUser.dataHome.name,
                isAdmin: dataUser.dataHome.isAdmin,
                img: dataUser.dataHome.imgChange,
                countBasket: dataUser.countBasket,
                pass: dataUser.dataHome.pass
            }
        }
        // case 'GET_ADMIN': {
        //     let isAdmin = action.payload 
        //     return {
        //         ...state, 
        //         isAdmin: isAdmin.isAdmin             
        //       };
        // }
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