import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../help/request';

export function* addBook(): IterableIterator<any> {
    yield takeEvery('ADD_BOOK', function*(action: any) {
     let {bookTitle, bookAuthor, bookDescript, bookPrice, bookImg} =  action.data;
     
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

            yield call(request, `books`, 'POST', book);
                          
            yield put ({
              type: "GET_ALL_BOOKS",
              payload: {
                    counter: 0           
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
        yield call(request, `books/${action.data}`, 'DELETE');
          
          yield put ({
            type: "GET_ALL_BOOKS",
            payload: {
              counter: 0        
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
            
      yield put({
        type: 'LOADER_CIRCULAR_SHOW',
        payload: {
          
        }
      });
      
      try {           
        let page:any = 0;
        let pageSize:any = 2;
        let isSort:boolean;
        if(action.data){
          page = action.data.counter;
          isSort = action.data.isSort;
        } else {
          page = 0;
          isSort = false;
        }
        
        let dataRequest = yield call(request, `books`, 'PUT', { page: page, pageSize: pageSize, isSort: isSort});
         
      if(dataRequest.data){
        yield put ({
          type: "LOADER_CIRCULAR_HIDE",
          payload: {
                         
          }
        })
        yield put ({
          type: "GOT_BOOKS",
          payload: {
            books: dataRequest.data,
            booksLength: dataRequest.booksLength
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
            error: dataRequest.message 
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
        
        if (newBookTitle.length === 0 || newBookAuthor.length === 0 || newBookDescript.length === 0 || newBookPrice.length === 0 || newBookImg.length === 0){
          
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: 'All fields must be filled'
            }
          })

        } else {
          yield call(request, `books/${bookId}`, 'PUT', book);
             
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
