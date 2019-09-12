import { put, takeEvery, call } from "redux-saga/effects";



export function* getBookId(): IterableIterator<any> {
    yield takeEvery('GET_ID_BOOK', function*(action: any)  {
        
        try {
            const API_URL = 'http://localhost:3000/books/'                                            
            const API_PATH = action.data
          let dataBook = yield call (() => {
            return fetch(API_URL + API_PATH)
            .then(res => res.json())
  
        } )
        
        yield put ({
          type: "GOT_ID_BOOK",
          payload: {
            book: dataBook
             
          }
        })
                        
        } 
        
        catch (error) {
  
        }
    })
  } 