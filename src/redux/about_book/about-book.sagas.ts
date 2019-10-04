import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
import { request } from '../../help/request';

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
            
            let dataRequest = yield call(request, `books/${action.data}`, 'GET');
          
        if(dataRequest.data){
            yield call(delay, 1000)
            yield put({
              type: `LOADER_HIDE`
            });
          yield put ({
            type: "GOT_ID_BOOK",
            payload: {
              book: dataRequest.data
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