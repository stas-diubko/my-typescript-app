import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* onErrorOccured(): IterableIterator<any> {
    yield takeEvery('ERROR_OCCURED', function*(action: any) {
      try {
        let obj = {error: action.data}
       
        yield put({
          type: `ERROR_SHOW`,
          payload: {
            error: action.payload || obj
          }
        });
        yield call(delay, 4000);
        yield put({
          type: `ERROR_HIDE`
        });
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
  