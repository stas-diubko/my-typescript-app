import { put, takeEvery, call } from "redux-saga/effects";

export function* getDataBasket(): IterableIterator<any> {
    
    yield takeEvery('ADD_TO_BASKET', function*(action: any) {
        
        try {
            let dataBasketStr:any = localStorage.getItem('basket')
            // console.log(dataBasketStr);
            if (dataBasketStr == null) {
                yield put ({
                    type: 'ERROR_OCCURED',
                    payload: {
                      error: 'to buy a book you need to log in'
                      
                    }
                  })
            }
            
            let dataStore = JSON.parse(dataBasketStr)
            console.log(action.data.id);
            
            let index = dataStore.findIndex((i:any) => i.id == action.data.id);
            let currentBook = action.data;
            currentBook.totalPrice = currentBook.bookCount * currentBook.bookPrice

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

            yield put ({
                type: "GOT_DATA_BASKET",
                payload: {
                    dataBasket: [dataStore]
                   
                }
              })

              yield put ({
                type: "GET_DATA_HOME",
                payload: {
                    dataBasket: [dataStore]
                   
                }
              })
        } 

        catch (error) {
  
        }
    })
    

}
  