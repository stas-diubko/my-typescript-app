import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";
import { delay } from "q";

 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        
        try {
            let {email, pass, name, isLoading} =  action.data;
           
            let dataLogin = yield call (() => {
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                    
            } )
            
            let targetUserLog = dataLogin.filter((i:any) => i.email === email);
            
             if (targetUserLog.length === 0) {
                yield put ({
                    type: 'ERROR_OCCURED',
                    payload: {
                      error: 'User with this email does not exist'
                      
                    }
                  })
            }  
            else if (pass === targetUserLog[0].pass) {
              
                yield put({
                    type: 'DO_LOADER',
                    payload: {
                      isLoader: true
                    }
                  });

                  let isLoadi = JSON.stringify(true)
                  localStorage.setItem('load', isLoadi)
                  localStorage.setItem('id', targetUserLog[0].id)
                  localStorage.setItem('basket', '[]')
                                 
                yield call(delay, 2000);

                yield put({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                      users: dataLogin
                        
                    }
                })

                yield put({
                  type: 'GET_DATA_HOME',
                  payload: {
                   isAdmin: targetUserLog[0]
                  }
                });

                yield put({
                  type: 'GET_USER_DATA',
                  payload: {
                   
                  }
                });
            } 

            else {
                yield put ({
                    type: 'ERROR_OCCURED',
                    payload: {
                      error: 'password is not correct, try again'
                    }
                  })
            }   
        } 
        
        catch (error) {

        }
    })

}