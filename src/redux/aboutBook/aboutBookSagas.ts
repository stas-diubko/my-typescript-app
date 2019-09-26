import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* getBookId(): IterableIterator<any> {
    yield takeEvery('GET_ID_BOOK', function*(action: any)  {
      let dataUserToken:any = localStorage.getItem('token')
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
            const API_URL = 'http://localhost:4200/books/'                                            
            const API_PATH = action.data
          let dataBook = yield call (() => {
            return fetch(API_URL + API_PATH, 
              {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${dataUserToken}`
                },
                 
            }
              ).then(res => res.json())
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
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: error
            }
          })
        }
    })
  } 