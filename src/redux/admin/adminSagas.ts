import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";
import  jwt_decode from 'jwt-decode';


export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        try {
            let dataUsers = yield call (() => {
                return fetch('http://localhost:3000/v1/users')
                        .then(res => res.json())

            } )
            // yield console.log(dataUsers.data);
            
            yield put ({
                type: "GOT_USERS",
                payload: {
                  users: dataUsers.data
                   
                }
              })  

                 
        } 
        
        catch (error) {

        }
    })
}
 