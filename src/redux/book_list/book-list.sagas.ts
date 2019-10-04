import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../help/request';

export function* getBooksToMain(): IterableIterator<any> {
    yield takeEvery('GET_BOOKS_TO_MAIN', function*(action: any) {
       
        try {
          
          let dataRequest = yield call(request, `books`, 'GET');
       
          if(dataRequest.data){
            yield put ({
              type: "LOADER_CIRCULAR_HIDE",
              payload: {
                            
              }
            })
            yield put ({
              type: "GOT_BOOKS_TO_MAIN",
              payload: {
                books: dataRequest.data,
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