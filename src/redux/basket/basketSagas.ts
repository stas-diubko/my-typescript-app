import { put, takeEvery, call } from "redux-saga/effects";



export function* getDataBasket(): IterableIterator<any> {
    yield takeEvery('GET_DATA_BASKET', function*(action: any) {
        
        try {
            let dataBasketStr:any = localStorage.getItem('basket')
            let dataBasket = JSON.parse(dataBasketStr)

            yield put ({
                type: "GOT_DATA_BASKET",
                payload: {
                    dataBasket: dataBasket
                   
                }
              })
              
        } 

       
          
        catch (error) {
  
        }
    })
    yield takeEvery('ADD_TO_BASKET', function*(action: any) {
        
        try {
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
    yield takeEvery('INCREASE_COUNT', function*(action: any) {
        
        try {
            let dataBasketStr:any = localStorage.getItem('basket')
            let dataBasket = JSON.parse(dataBasketStr)

            yield put ({
                type: "GOT_DATA_BASKET",
                payload: {
                    dataBasket: dataBasket
                   
                }
              })

           
        } 

       
          
        catch (error) {
  
        }
    })

    yield takeEvery('DECREASE_COUNT', function*(action: any) {
        
        try {
            let dataBasketStr:any = localStorage.getItem('basket')
            let dataBasket = JSON.parse(dataBasketStr)

            yield put ({
                type: "GOT_DATA_BASKET",
                payload: {
                    dataBasket: dataBasket
                   
                }
              })
        } 

       
          
        catch (error) {
  
        }
    })

    yield takeEvery('REMOVE_FROM_CART', function*(action: any) {
            
            try {
                let removeId = action.data

                let dataBasketStr:any = localStorage.getItem('basket')
                let dataBasket = JSON.parse(dataBasketStr)
                // console.log(dataBasket);
                //    let dataStore = JSON.parse(dataBasketStr)
                let index = dataBasket.findIndex((i:any) => i.id == removeId);
                dataBasket.splice(index, 1)
                // console.log(dataBasket);

                let newDataStore = JSON.stringify(dataBasket)
                localStorage.setItem('basket', newDataStore)
                
                let newDataBasketStr:any = localStorage.getItem('basket')
                let newDataBasket = JSON.parse(newDataBasketStr)
                yield put ({
                    
                    type: "GOT_DATA_BASKET",
                    payload: {
                        dataBasket: newDataBasket
                    
                    }
                })
            } 

        
            
            catch (error) {
    
            }
        })

}
  