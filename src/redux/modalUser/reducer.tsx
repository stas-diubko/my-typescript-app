import { UserModalState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: UserModalState = {
    name: "",
    img: "",
    isChangeData: false,
    imgChange: ""
};

export function userModalReducer(state: UserModalState = initialState, action: any) {
    switch (action.type) {
        case 'DO_USER_CHANGE': {
            return {
                ...state
            }
        }
        case 'CHANGE_USER_DATA': {
            const { data } = action.payload;
            console.log(data.imgChange);
            
             return {
                 ...state,
                 name: data.name,
                 imgChange: data.imgChange
             }
         }
         case 'GET_USER_DATA': {
            // const load:any = localStorage.getItem('dataUser')
            // const isLoad = JSON.parse(load)
            // const name = action.payload
            // console.log(isLoad);
            
            return {
                ...state,
                // name: isLoad.name,
                // imgChange: isLoad.imgChange
            }
        }




        default:
            return state;
    }
}

export const userModal = (state: RootState) => state.userModal; 