import { put, takeEvery, call } from "redux-saga/effects";

export function* getBooksToMain(): IterableIterator<any> {
    yield takeEvery('GET_BOOKS_TO_MAIN', function*(action: any) {
       
        try {
         
          let dataBooks = yield call (() => {
            return fetch('http://localhost:4200/books', {
              method: 'GET', 
              headers: {
                  'Content-Type': 'application/json',
                //   'Authorization' : `Bearer ${dataUserToken}`
              }
            }).then(res => res.json())
        } )
            // console.log(dataBooks);
            
        if(dataBooks.success){
          yield put ({
            type: "LOADER_CIRCULAR_HIDE",
            payload: {
                           
            }
          })
          yield put ({
            type: "GOT_BOOKS_TO_MAIN",
            payload: {
              books: dataBooks.data,
            }
          })
        }
        else {
          yield put ({
            type: "LOADER_CIRCULAR_HIDE",
            payload: {
                           
            }
          })
               
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: dataBooks.message 
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