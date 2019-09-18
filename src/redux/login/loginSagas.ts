import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";
import { delay } from "q";
import  jwt_decode from 'jwt-decode';
 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        
        try {
            let {email, pass, name, isLoading} =  action.data;
           
            let req = yield call(() => {
              return fetch('http://localhost:3000/v1/authenticate', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify({email, pass}),
            })
            .then((response : any) => response.json())     
            })
           
              yield put({
                    type: 'DO_LOADER',
                    payload: {
                      isLoader: true
                    }
                  });
            if(req.success){
              yield call(delay, 1000)
              yield put({
                type: `LOADER_HIDE`
              });
                         
              let isLoadi = JSON.stringify(true)
              localStorage.setItem('load', isLoadi)

              localStorage.setItem('token', req.data)
              localStorage.setItem('basket', '[]')

              yield put({
                type: 'GET_IS_ADMIN',
                payload: {
                  isAdmin: req.isAdmin
                    
                }
            })

                yield put({
                  type: 'LOGIN_SUCCESS',
                  payload: {
                     
                  }
              })
            }
           
            else {
             
              yield call(delay, 1000)
              yield put({
                type: `LOADER_HIDE`
              });
              yield put ({
                type: 'ERROR_OCCURED',
                payload: {
                  error: req.message
                  
                }
              })
               
            } 

        } 
        
        catch (error) {

        }
    })

}