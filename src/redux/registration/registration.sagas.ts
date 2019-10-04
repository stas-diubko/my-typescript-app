import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
import { request } from '../../help/request';

export function* doInit({}): IterableIterator<any> {
    yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
     let {name, email, pass, imgChange} =  action.data;
     let password = pass
     try {
          yield put({
            type: 'DO_LOADER',
            payload: {
              isLoader: true
            }
          });

        let dataRequest = yield call(request, `users/register`, 'POST', {name, email, password, imgChange});
                
          if (dataRequest.success) {
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
                error: dataRequest.message
              }
            })
          } 
     }

     catch(error){
      yield put({
        type: `LOADER_HIDE`
      });
      yield put ({
        type: 'ERROR_OCCURED',
        payload: {
          error: 'User with this email already exists!'
        }
      })
     }
    });
  }













