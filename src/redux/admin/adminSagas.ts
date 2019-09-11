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

export function* getId(): IterableIterator<any> {
    yield takeEvery('GET_ID', function*(action: any) {
        try {
            const userId:any = localStorage.getItem('id');
            const API_URL = 'http://localhost:3000/users/'                                            
            const API_PATH = userId
            let dataUser = yield call (() => {
                return fetch(API_URL + API_PATH)
                        .then(res => res.json())
            } )
            
            yield put ({
                type: "GOT_ID",
                payload: {
                  users: dataUser
                }
              })          
        } 
        
        catch (error) {

        }
    })
    
}
