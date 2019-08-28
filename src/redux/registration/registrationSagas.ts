import { put, takeEvery, call } from "redux-saga/effects";
// import { push } from 'react-router-redux';

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass} =  action.data;
     try {
      let dataRegister = yield call (() => { 
        return fetch('http://localhost:3000/users')
              .then(res => res.json())
       })
        let targetUser = dataRegister.filter((i:any) => i.email === email);
        // console.log(targetUser.length)
        
        if (targetUser.length === 0) {
              const data = yield call(() => {
              return fetch('http://localhost:3000/users', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({name, email, pass}),
              })      
              })
              alert('User created');
              yield put({
                type: `@@register/SUCCESSFULL`,
                payload: {
                  email: email,
                  pass: pass,
                  isRegister: true,
                  isLoader: true
                }
              });
        }
        else {
          alert('User with this email already exists, enter another email')
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













