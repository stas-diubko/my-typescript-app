import { put, takeEvery } from "redux-saga/effects";

export function* onLoaderOccured(): IterableIterator<any> {
    yield takeEvery('DO_LOADER', function*(action: any) {
      try {
        yield put({
          type: `LOADER_SHOW`,
          payload: {
            isLoader: action.payload
          }
        });

      } 
      catch (error) {
        
      }
    });
  }
  