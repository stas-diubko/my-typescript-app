import { put, takeEvery, call } from "redux-saga/effects";

export function* addBook(): IterableIterator<any> {
    yield takeEvery('ADD_BOOK', function*(action: any) {
     let {bookTitle, bookAuthor, bookDescript, bookPrice, bookImg} =  action.data;
     let dataUserToken:any = localStorage.getItem('token')
     let book = {
      title: action.data.bookTitle,
      author: action.data.bookAuthor,
      description: action.data.bookDescript,
      price: action.data.bookPrice,
      bookImage: action.data.bookImg
     }
        try {
          if (bookTitle.length === 0 || bookAuthor.length === 0 || bookDescript.length === 0 || bookPrice.length === 0 || bookImg.length === 0){
            yield put ({
              type: 'ERROR_OCCURED',
              payload: {
                error: 'All fields must be filled'
              }
            })
          } else {

            let req = yield call(() => {
            return fetch('http://localhost:4200/books', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${dataUserToken}`
                },
              body: JSON.stringify(book),
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
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: error
            }
          })
        }
    })
}

export function* deleteBook(): IterableIterator<any> {
  yield takeEvery('DELETE_BOOK', function*(action: any) {
      try {
        let id = action.data;
        const API_URL = 'http://localhost:4200/books/'                                            
        const API_PATH = id
        let dataUserToken:any = localStorage.getItem('token')
        let req = yield call (() => {
              return fetch(API_URL + API_PATH, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${dataUserToken}`
              },
              }).then((response : any) => response.json())
          } )
          
          yield put ({
            type: "GET_ALL_BOOKS",
            payload: {
                            
            }
          })         
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

export function* getBooks(): IterableIterator<any> {
  yield takeEvery('GET_ALL_BOOKS', function*(action: any) {
    let dataUserToken:any = localStorage.getItem('token')
        
      yield put({
        type: 'LOADER_CIRCULAR_SHOW',
        payload: {
          
        }
      });
      try {
             console.log(action.data);
                
        let page:any = 0;
        let pageSize:any = 2 
        page = action.data.counter

        if (action.data.counter === undefined) {
          page = 0
        }


        let dataBooks = yield call (() => {
          return fetch('http://localhost:4200/books', {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${dataUserToken}`
            },
            body: JSON.stringify( { page: page, pageSize: pageSize, isSort: action.data.isSort} )
          }).then(res => res.json())
      } )
          
      if(dataBooks.success){
        yield put ({
          type: "LOADER_CIRCULAR_HIDE",
          payload: {
                         
          }
        })
        yield put ({
          type: "GOT_BOOKS",
          payload: {
            books: dataBooks.data,
            booksLength: dataBooks.booksLength
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

  yield takeEvery('SORT_BOOK', function*(action: any) {
      try {
        yield put({
          type: 'LOADER_CIRCULAR_SHOW',
          payload: {
            
          }
        });

        let dataBooks = yield call (() => {
          return fetch('http://localhost:4200/books/sort', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization' : `Bearer ${dataUserToken}`
            }
          }).then(res => res.json())
      } )
        console.log(dataBooks);
        if(dataBooks.success){
          yield put ({
            type: 'REMOVE_BOOK',
          })

          yield put ({
            type: "LOADER_CIRCULAR_HIDE",
            payload: {
                           
            }
          })
          yield put ({
            type: "GOT_BOOKS",
            payload: {
              books: dataBooks.data
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
        
      } catch (error) {
        yield put ({
          type: 'ERROR_OCCURED',
          payload: {
            error: error
          }
        })
      }
  })


}


export function* changeDataBook(): IterableIterator<any> {
  yield takeEvery('CHANGE_DATA_BOOK', function*(action: any) {
    try {
        let {newBookTitle, newBookAuthor, newBookDescript, newBookPrice, newBookImg, bookId} = action.data;
        const book = {
          title: action.data.newBookTitle,
          author: action.data.newBookAuthor,
          description: action.data.newBookDescript,
          price: action.data.newBookPrice,
          bookImage: action.data.newBookImg
        }
        const API_URL = 'http://localhost:4200/books/'                                            
        const API_PATH = bookId
        let dataUserToken:any = localStorage.getItem('token')

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
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${dataUserToken}`
            },
            method: 'put',                                                              
            body: JSON.stringify( book )                                        
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
      yield put ({
        type: 'ERROR_OCCURED',
        payload: {
          error: error
        }
      })
    }
  });
}
