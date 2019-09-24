import { put, takeEvery, call } from "redux-saga/effects";

export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        try {
            yield put({
                type: 'LOADER_CIRCULAR_SHOW',
                payload: {

                }
              });
            let dataUserToken:any = localStorage.getItem('token')

            let dataUsers = yield call (() => {
                return fetch('http://localhost:4200/users', {
                  method: 'GET', 
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization' : `Bearer ${dataUserToken}`
                  },
                   
              }).then(res => res.json())
            } )
            
            yield put ({
                type: "GOT_USERS",
                payload: {
                  users: dataUsers.data
                }
              })  
              yield put ({
                type: "LOADER_CIRCULAR_HIDE",
                payload: {
                                    
                }
              })
        } 
        
        catch (error) {

        }
    })
}
 