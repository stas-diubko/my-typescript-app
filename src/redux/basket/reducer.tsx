import { BasketState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: BasketState = {
    basket: [],
    dataStore: []
    
}

export function basketReducer(state: BasketState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_DATA_BASKET': {
            
            return {
                ...state,
                basket: action.payload.dataBasket
            }
        }
        

        case "INCREASE_COUNT": {
            let dataIncrease = action.data
            // console.log(dataIncrease);

            let dataBasketStr:any = localStorage.getItem('basket')
            let dataStore = JSON.parse(dataBasketStr)
            // console.log(dataStore);
            //    let dataStore = JSON.parse(dataBasketStr)
            let index = dataStore.findIndex((i:any) => i.id == dataIncrease);
            // console.log(index);

            dataStore[index].bookCount = dataStore[index].bookCount + 1
            // currentBook.totalPrice = currentBook.bookCount * currentBook.bookPrice
            dataStore[index].totalPrice = dataStore[index].bookCount * dataStore[index].bookPrice
            

            // console.log(dataStore[index].totalPrice);
            
            let newDataStore = JSON.stringify(dataStore)
            localStorage.setItem('basket', newDataStore)
            


            return {
                ...state,
                

            }
        }

        case "DECREASE_COUNT": {
            let dataIncrease = action.data
            // console.log(dataIncrease);

            let dataBasketStr:any = localStorage.getItem('basket')
            let dataStore = JSON.parse(dataBasketStr)
            // console.log(dataStore);
            //    let dataStore = JSON.parse(dataBasketStr)
            let index = dataStore.findIndex((i:any) => i.id == dataIncrease);
            // console.log(index);

            dataStore[index].bookCount = dataStore[index].bookCount - 1
            dataStore[index].totalPrice = dataStore[index].bookCount * dataStore[index].bookPrice

            let newDataStore = JSON.stringify(dataStore)
            localStorage.setItem('basket', newDataStore)
            
            

            return {
                ...state,
                

            }
        }
        


        
        default:
            return state;
        
    }
}

export const basket = (state: RootState) => state.basket;
