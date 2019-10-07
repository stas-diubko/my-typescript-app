import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
import  jwt_decode from 'jwt-decode';
import { request } from '../../help/request';
 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        try {
           let user = {
             username: action.data.email,
             password: action.data.pass
           }
           
        let dataRequest = yield call(request, `login`, 'POST', user);

            yield put({
                  type: 'DO_LOADER',
                  payload: {
                    isLoader: true
                  }
            });
                        
            if(dataRequest.success){
              yield call(delay, 1000)
              yield put({
                type: `LOADER_HIDE`
              });
              let decoded:any = jwt_decode(dataRequest.data);
               
              let isLoadi = JSON.stringify(true)
              localStorage.setItem('load', isLoadi)

              localStorage.setItem('token', dataRequest.data)
              localStorage.setItem('basket', '[]')

              yield put({
                type: 'GET_IS_ADMIN',
                payload: {
                  isAdmin: decoded.isAdmin
                    
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
                  error: dataRequest.logErrorEmail
                }
              })
            } 
        } 
        
        catch (error) {
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: 'Incorect login data!'
            }
          })
        }
    })

}