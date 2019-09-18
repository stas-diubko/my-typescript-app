import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
import React from 'react';
import { Redirect } from 'react-router';

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass, isAdmin, imgChange} =  action.data;
     try {
      
          yield put({
            type: 'DO_LOADER',
            payload: {
              isLoader: true
            }
          });
          let req = yield call(() => {
                return fetch('http://localhost:3000/v1/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({name, email, pass, imgChange}),
              }).then((response : any) => response.json())       
              })
              console.log(req);

              if (req.success) {
                yield call(delay, 1000)
                yield put({
                  type: `LOADER_HIDE`
                });
                
                  yield put({
                  type: `@@register/SUCCESSFULL`,
                  payload: {
                    email: email,
                    pass: pass,
                    isRegister: true,
                    
                  }
                 
                });

                yield put({
                  type: `RETURN_IS_REGISTER`,
                  payload: {
                    isRegister: false
                    
                  }
              });
                
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













