import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* onError(): IterableIterator<any> {
    yield takeEvery('ERROR_OCCURED', function*(action: any) {
      try {
        yield put({
          type: `ERROR_SHOW`,
          payload: {
            error: action.payload
          }
        });
        yield call(delay, 4000);
        yield put({
          type: `ERROR_HIDE`
        });
      } 
      catch (error) {
       
      }
    });
  }
  