import { put, takeEvery, call } from "redux-saga/effects";
import  jwt_decode from 'jwt-decode';
import { request } from '../../help/request';

export function* doLogout(): IterableIterator<any> {
    yield takeEvery('DO_LOGOUT', function*(action: any) {
      try {
        yield put ({
            type: 'REMOOVE_ISLOADING',
            payload: {
              
            }
          })
         
        yield put ({
            type: 'LOGOUT',
            payload: {
                logOut: true
            }
          })
      } 

      catch (error) {
        console.error(error);
      }
    });
  }
  
  export function* getDataHome(): IterableIterator<any> {
    yield takeEvery('GET_DATA_HOME', function*(action: any) {
      try {
     
    let dataUserToken:any = localStorage.getItem('token');
    let decoded:any = jwt_decode(dataUserToken);
    
    let amounBasketStr:any = localStorage.getItem('basket');
    let amounBasket = JSON.parse(amounBasketStr);
    let amounBasketLength = amounBasket.length;

            yield put ({
                type: 'GOT_DATA_HOME',
                payload: {
                    dataUser: decoded,
                    countBasket: amounBasketLength
                }
              })
                                         
              if (dataUserToken !== null) {                     
                const API_PATH = decoded.id
                let dataUsers = yield call(request, `users/avatar/${API_PATH}`, 'GET');
                                                         
                yield put ({
                  type: 'GET_AVA',
                  payload: {
                    userAva: dataUsers.data
                  }
                })
           } 
                yield put ({
                  type: 'GET_ID',
                  payload: {
                    
                  }
                })
          } 

      catch (error) {
        console.error(error);
      }
    });

    yield takeEvery('DO_USER_CHANGE', function*(action: any) {
      try {
        let { name, imgChange } = action.data;
        let dataUserToken:any = localStorage.getItem('token');
        let decoded:any = jwt_decode(dataUserToken);

        let dataUsers = yield call(request, `users/avatar/${decoded.id}`, 'PUT', { name: name, image: imgChange });
                          
        localStorage.removeItem('token');
        localStorage.setItem('token', dataUsers.data);

        yield put ({
          type: 'GET_DATA_HOME',
          payload: {
             
          }
        })
      }
      
      catch (error) {
        yield put ({
          type: 'ERROR_OCCURED',
          payload: {
            error: error
          }
        })
      }
    });
  }
  