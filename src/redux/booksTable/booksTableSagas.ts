import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* addBook(): IterableIterator<any> {
    yield takeEvery('ADD_BOOK', function*(action: any) {
     let {bookTitle, bookAuthor, bookDescript, bookPrice, bookImg} =  action.data;
        
        try {
          // yield console.log(bookImg.length);
          
          if (bookTitle.length === 0 || bookAuthor.length === 0 || bookDescript.length === 0 || bookPrice.length === 0 || bookImg.length === 0){
            yield put ({
              type: 'ERROR_OCCURED',
              payload: {
                error: 'All fields must be filled'
                
              }
            })
          } else {
            let req = yield call(() => {
            return fetch('http://localhost:3000/v1/books', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify({bookTitle, bookAuthor, bookDescript, bookPrice, bookImg}),
            }) 
            .then((response : any) => response.json())     
            })
                         
            yield put ({
              type: "GET_ALL_BOOKS",
              payload: {
                              
              }
            })
          }
         
         
                      
        } 
        
        catch (error) {

        }
    })
}

export function* deleteBook(): IterableIterator<any> {
  yield takeEvery('DELETE_BOOK', function*(action: any) {
      
      try {
        let id = action.data;
        const API_URL = 'http://localhost:3000/v1/books/'                                            
        const API_PATH = id
        
          yield call (() => {
              return fetch(API_URL + API_PATH, {
                method: 'DELETE'
              })

          } )

          yield put ({
            type: "GET_ALL_BOOKS",
            payload: {
                            
            }
          })
                    
      } 
      
      catch (error) {

      }
  })
}

export function* getBooks(): IterableIterator<any> {
  yield takeEvery('GET_ALL_BOOKS', function*(action: any) {
      
      try {
        let dataBooks = yield call (() => {
          return fetch('http://localhost:3000/v1/books')
                  .then(res => res.json())

      } )

     

      if(dataBooks.success){
      
        yield put ({
          type: "GOT_BOOKS",
          payload: {
            books: dataBooks.data
             
          }
        })
      }
      else {
        // console.log(req);
        yield put ({
          type: 'ERROR_OCCURED',
          payload: {
            error: dataBooks.message
            
          }
        })
         
      } 

        // yield console.log(dataBooks.data);
        
      
                      
      } 
      
      catch (error) {

      }
  })

}

export function* changeDataBook(): IterableIterator<any> {
  yield takeEvery('CHANGE_DATA_BOOK', function*(action: any) {
    try {
        let {newBookTitle, newBookAuthor, newBookDescript, newBookPrice, newBookImg, bookId} = action.data;
        
        const API_URL = 'http://localhost:3000/v1/books/'                                            
        const API_PATH = bookId

      


        if (newBookTitle.length === 0 || newBookAuthor.length === 0 || newBookDescript.length === 0 || newBookPrice.length === 0 || newBookImg.length === 0){
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: 'All fields must be filled'
              
            }
          })
        } else {
          let req = yield call (() => {
          
            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',                                                              
            body: JSON.stringify( { bookTitle: newBookTitle, bookAuthor: newBookAuthor, bookDescript: newBookDescript, bookPrice: newBookPrice,  bookImg: newBookImg, } )                                        
            })
            .then((response : any) => response.json())
        })
     
        yield put ({
          type: "GET_ALL_BOOKS",
          payload: {
          
          }
        })
      }



    } 
    catch (error) {
     
    }
  });
}
