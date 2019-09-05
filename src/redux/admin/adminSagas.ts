import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";


export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        
        try {
            let dataLogin = yield call (() => {
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())

            } )
            
            yield put ({
                type: "GOT_USERS",
                payload: {
                  users: dataLogin
                   
                }
              })
                      
        } 
        
        catch (error) {

        }
    })
    
}

