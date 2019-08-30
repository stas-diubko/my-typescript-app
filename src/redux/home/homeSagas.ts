import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";


export function* doLogout(): IterableIterator<any> {
    yield takeEvery('DO_LOGOUT', function*(action: any) {
      try {
        
        yield put ({
            type: 'REMOOVE_ISLOADING',
            payload: {
                // logOut: true
              
            }
          })
        // yield call(delay, 2000); 
        yield put ({
            type: 'LOGOUT',
            payload: {
                logOut: true
              
            }
          })

         
      } 
      catch (error) {
       
      }
    });
  }
  