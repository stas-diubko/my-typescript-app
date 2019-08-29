import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";


export function* onLoaderOccured(): IterableIterator<any> {
    yield takeEvery('DO_LOADER', function*(action: any) {
      try {
        yield put({
          type: `LOADER_SHOW`,
          payload: {
            isLoader: action.payload
          }
        });

        yield call(delay, 3000);
        yield put({
          type: `LOADER_HIDE`
        });
      } 
      catch (error) {
        // yield put({
        //   type: `@@ERROR_SHOW`,
        //   payload: {
        //     error: error.message
        //   }
        // });
        // yield call(delay, 500);
        // yield put({
        //   type: `@@ERROR_HIDE`
        // });
      }
    });
  }
  