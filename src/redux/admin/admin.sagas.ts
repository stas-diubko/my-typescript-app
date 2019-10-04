import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../help/request';

export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        try {
            yield put({
                type: 'LOADER_CIRCULAR_SHOW',
                payload: {

                }
              });
            
              let page:any = 0;
              let pageSize:any = 2 
              page = action.data
              
              if (action.data == undefined) {
                page = 0
              }

            let dataRequest = yield call(request, `users`, 'PUT', { page: page, pageSize: pageSize });
                             
            yield put ({
                type: "GOT_USERS",
                payload: {
                  users: dataRequest.data,
                  usersLength: dataRequest.usersLength
                }
              })  
              yield put ({
                type: "LOADER_CIRCULAR_HIDE",
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
 