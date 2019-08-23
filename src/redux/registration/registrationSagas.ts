import { put, takeEvery, call } from "redux-saga/effects";
// import { push } from 'react-router-redux';

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass} =  action.data;


     try{
      const data = yield call(() => {
        return fetch('http://localhost:3000/users', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({name, email, pass}),
        })      
        })
        // console.log(data);
        // console.log({name, email, pass})
      yield put({
        type: `@@register/SUCCESSFULL`,
        payload: {
          data: data
        }
      });
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













