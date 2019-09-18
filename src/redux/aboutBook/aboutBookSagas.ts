import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";



export function* getBookId(): IterableIterator<any> {
    yield takeEvery('GET_ID_BOOK', function*(action: any)  {
      
        try {
          yield put({
            type: 'RETURN_IS_SHOW',
            payload: {
              isLoader: true
            }
          });
          yield put({
            type: 'DO_LOADER',
            payload: {
              isLoader: true
            }
          });
            const API_URL = 'http://localhost:3000/v1/books/'                                            
            const API_PATH = action.data
          let dataBook = yield call (() => {
            return fetch(API_URL + API_PATH)
            .then(res => res.json())
  
        } )
        
       

        if(dataBook.success){
            yield call(delay, 1000)
            yield put({
              type: `LOADER_HIDE`
            });
          yield put ({
            type: "GOT_ID_BOOK",
            payload: {
              book: dataBook.data
              
            }
          })

        }  else {
             
          yield call(delay, 1000)
          yield put({
            type: `LOADER_HIDE`
          });
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: dataBook.message
              
            }
          })
           
        }

                        
        } 
        
        catch (error) {
  
        }
    })
  } 