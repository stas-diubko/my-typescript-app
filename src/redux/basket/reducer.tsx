import { BasketState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: BasketState = {
    basket: []
}

export function basketReducer(state: BasketState = initialState, action: any) {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
           let data:any = action.data
        //    console.log(action.data)
        //    отсюда доработать
            return {
                ...state,
                basket:[...state.basket, data]
            }
        }
        


        
        default:
            return state;
        
    }
}

export const basket = (state: RootState) => state.basket;
