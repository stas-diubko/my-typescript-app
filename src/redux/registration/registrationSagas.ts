import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass, isAdmin, imgChange} =  action.data;
     try {
      let dataRegister = yield call (() => { 
        return fetch('http://localhost:3000/users')
              .then(res => res.json())
       })
        let targetUser = dataRegister.filter((i:any) => i.email === email);
        
        if (targetUser.length === 0) {
              const data = yield call(() => {
              return fetch('http://localhost:3000/users', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({name, email, pass, isAdmin, imgChange}),
              })      
              })
              
              yield put({
                type: 'DO_LOADER',
                payload: {
                  isLoader: true
                }
              });
              yield call(delay, 3000);
              
              yield put({
                type: `@@register/SUCCESSFULL`,
                payload: {
                  email: email,
                  pass: pass,
                  isRegister: true,
                  
                }
              });
              
        }
        else {
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: 'User with this data already exist, enter another data'
              
            }
          })

        } 
     
     }
     catch(e){
      yield put({
        type: `@@ERROR_OCCURED`,
        payload: {
          error: "Something went wrong while registration"
        }
      });
     }
    });
  }













