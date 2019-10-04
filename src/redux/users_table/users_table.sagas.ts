import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../help/request';

export function* deleteUser(): IterableIterator<any> {
    yield takeEvery('DELETE_USER', function*(action: any) {
        try {
            yield call(request, `users/${action.data}`, 'DELETE');

            yield put ({
              type: "GET_USERS",
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