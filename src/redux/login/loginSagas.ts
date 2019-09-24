import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
import  jwt_decode from 'jwt-decode';
 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        
        try {
          //   let {email, pass } =  action.data;
          //  let password = action.data.pass
          //  console.log(password, email);
           let user = {
             username: action.data.email,
             password: action.data.pass
           }
                      
            let req = yield call(() => {
              return fetch('http://localhost:4200/login', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(user),
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
              let decoded:any = jwt_decode(req.data);    
               
              let isLoadi = JSON.stringify(true)
              localStorage.setItem('load', isLoadi)

              localStorage.setItem('token', req.data)
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
                  error: req.message
                }
              })
            } 
        } 
        
        catch (error) {

        }
    })

}