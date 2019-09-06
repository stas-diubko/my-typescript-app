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
  
  export function* getDataHome(): IterableIterator<any> {
    yield takeEvery('GET_DATA_HOME', function*(action: any) {
      try {
        const userId:any = localStorage.getItem('id');
        const API_URL = 'http://localhost:3000/users/'                                            
        const API_PATH = userId
        let dataHome = yield call (() => {
          return fetch(API_URL + API_PATH)
                  .then(res => res.json())

      } )


        yield put ({
            type: 'GOT_DATA_HOME',
            payload: {
                dataHome: dataHome
              
            }
          })

         
      } 
      catch (error) {
       
      }
    });
  }
  