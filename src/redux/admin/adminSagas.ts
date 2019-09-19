import { put, takeEvery, call } from "redux-saga/effects";

export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        try {
            yield put({
                type: 'LOADER_CIRCULAR_SHOW',
                payload: {

                }
              });
            let dataUsers = yield call (() => {
                return fetch('http://localhost:3000/v1/users')
                        .then(res => res.json())
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
 