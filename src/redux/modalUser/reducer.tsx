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
        case 'CHANGE_USER_DATA': {
            
             return {
                 ...state,
 
             }
         }
         case 'GET_USER_DATA': {
            const load:any = localStorage.getItem('dataUser')
            const isLoad = JSON.parse(load)
            // const name = action.payload
            console.log(isLoad);
            
            return {
                ...state,
                name: isLoad.name

            }
        }




        default:
            return state;
    }
}

export const userModal = (state: RootState) => state.userModal; 