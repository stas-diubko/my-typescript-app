import { HomeState } from "./types";
import { RootState } from "../root.reducer";

export const initialState: HomeState = {
    email: "",
    name: "",
    pass: "",
    logOut: true,
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
            return {
                ...state,
                email: action.payload.dataUser.email,
                name: action.payload.dataUser.name,
                isAdmin: action.payload.dataUser.isAdmin,
                countBasket: action.payload.countBasket,
                logOut: false,
            }
        }

        case 'GET_IS_ADMIN': {
            return {
                ...state,
                isAdmin: action.payload.isAdmin,
            }
        }

        case 'GET_AVA': {
            return {
                ...state,
                img: action.payload.userAva
            }
        }
        
        case 'LOGOUT': {
            return {
                ...state,
                logOut: true,
                isAdmin: false
            }
        }
        
        default:
            return state;
        
    }
}

export const home = (state: RootState) => state.home;