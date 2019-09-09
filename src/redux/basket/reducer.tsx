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
        case 'ADD_TO_BASKET': {
            // console.log(action.data.id)
           
           let dataBasketStr:any = localStorage.getItem('basket')
        //    localStorage.removeItem('basket');
           let dataStore = JSON.parse(dataBasketStr)
           

           let index = dataStore.findIndex((i:any) => i.id == action.data.id);
           let currentBook = action.data;
           currentBook.totalPrice = currentBook.bookCount * currentBook.bookPrice
           
        //    console.log(dataStore)

            if (index == -1) {
               
                dataStore.push(currentBook)
                let newDataStore = JSON.stringify(dataStore)
                localStorage.setItem('basket', newDataStore)
                

            } 
            else {
                for (let i = 0; i < dataStore.length; i++) {
                    if (dataStore[i].id === action.data.id) {
                        dataStore[i].bookCount = dataStore[i].bookCount + 1
                        dataStore[i].totalPrice = dataStore[i].bookCount * dataStore[i].bookPrice
                    }
               }
    
               let newDataStore = JSON.stringify(dataStore)
                localStorage.setItem('basket', newDataStore)
            }

           return {
                ...state,
                // basket:[dataStore]
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
