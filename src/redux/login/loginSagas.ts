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
            // yield console.log(targetUserLog)

             if (targetUserLog.length === 0) {
                yield put ({
                    type: 'ERROR_OCCURED',
                    payload: {
                      error: 'User with this email does not exist'
                      
                    }
                  })
            }  
            else if (pass === targetUserLog[0].pass) {
              let adminEmail = 'admin@admin.com'
              if (targetUserLog[0].email === adminEmail) {
                let isAdmin = JSON.stringify(true)
                localStorage.setItem('isAdmin', isAdmin)
                yield put({
                  type: 'GET_ADMIN',
                  payload: {
                    isAdmin: true
                  }
                });
              }
                yield put({
                    type: 'DO_LOADER',
                    payload: {
                      isLoader: true
                    }
                  });

                  let dataUser = JSON.stringify(targetUserLog[0])
                  // let dataUser = JSON.stringify({email, name, isLoading})
                  localStorage.setItem('dataUser', dataUser)
                  let isLoadi = JSON.stringify(true)
                  localStorage.setItem('load', isLoadi)
                  
                                    
                yield call(delay, 2000);

                yield put({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                      users: dataLogin
                        // isLoading: true,
                        // email: targetUserLog[0].email
                    }
                })

                yield put({
                  type: 'GET_DATA_HOME',
                  // payload: {
                  //   isLoader: true
                  // }
                });

                yield put({
                  type: 'GET_USER_DATA',
                  payload: {
                    // name: targetUserLog[0].name
                  }
                });
            } 

            else {
                // alert('password is not correct, try again')
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