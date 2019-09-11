import { HomeState } from "./types";
import { RootState } from "../rootReducer";
import { Redirect } from "react-router";

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
    imgChange: '',
    isModalMore: false 

};

export function homeReducer(state: HomeState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_DATA_HOME': {
       
           let dataUser = action.payload
                  
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
        
        case 'LOGOUT': {
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