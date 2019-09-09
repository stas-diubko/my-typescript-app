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
  }
  