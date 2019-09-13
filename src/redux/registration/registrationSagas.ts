import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass, isAdmin, imgChange} =  action.data;
     try {
      // let dataRegister = yield call (() => { 
      //   return fetch('http://localhost:3000/users')
      //         .then(res => res.json())
      //  })
      //   let targetUser = dataRegister.filter((i:any) => i.email === email);
        
        // if (targetUser.length === 0) {
          let req = yield call(() => {
                return fetch('http://localhost:3000/v1/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({name, email, pass, isAdmin, imgChange}),
              }).then((response : any) => response.json())       
              })
              console.log(req);

              if (req.success) {
                  yield put({
                  type: `@@register/SUCCESSFULL`,
                  payload: {
                    email: email,
                    pass: pass,
                    isRegister: true,
                    
                  }
                });
              
              }
              
              // yield put({
              //   type: 'DO_LOADER',
              //   payload: {
              //     isLoader: true
              //   }
              // });
              // yield call(delay, 3000);
              
             
        // }
        else {
          yield put ({
            type: 'ERROR_OCCURED',
            payload: {
              error: req.message
              
            }
          })

        } 
     
     }
     catch(error){
      yield console.log(error);
       
      yield put({
        type: `@@ERROR_OCCURED`,
        payload: {
          error: "Something went wrong while registration"
        }
      });
     }
    });
  }













