import { put, takeEvery, call } from "redux-saga/effects";



export function* addBook(): IterableIterator<any> {
    yield takeEvery('ADD_BOOK', function*(action: any) {
        
        try {
         
          
            yield call (() => {
               

            } )
                      
        } 
        
        catch (error) {

        }
    })
}

export function* deleteBook(): IterableIterator<any> {
  yield takeEvery('DELETE_BOOK', function*(action: any) {
      
      try {
        let id = action.data;
        const API_URL = 'http://localhost:3000/books/'                                            
        const API_PATH = id
        
          yield call (() => {
              return fetch(API_URL + API_PATH, {
                method: 'DELETE'
              })

          } )
                    
      } 
      
      catch (error) {

      }
  })
}

export function* getBooks(): IterableIterator<any> {
  yield takeEvery('GET_ALL_BOOKS', function*(action: any) {
      
      try {
        let dataBooks = yield call (() => {
          return fetch('http://localhost:3000/books')
                  .then(res => res.json())

      } )
        
      yield put ({
        type: "GOT_BOOKS",
        payload: {
          books: dataBooks
           
        }
      })
         
                    
      } 
      
      catch (error) {

      }
  })
}