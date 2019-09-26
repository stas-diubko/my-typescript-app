import { put, takeEvery, call } from "redux-saga/effects";
import  jwt_decode from 'jwt-decode';

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
        yield put ({
          type: 'ERROR_OCCURED',
          payload: {
            error: error
          }
        })
      }
    });
  }
  
  export function* getDataHome(): IterableIterator<any> {
    yield takeEvery('GET_DATA_HOME', function*(action: any) {
      try {
     
    let dataUserToken:any = localStorage.getItem('token')
    let decoded:any = jwt_decode(dataUserToken);
    
    let amounBasketStr:any = localStorage.getItem('basket')
    let amounBasket = JSON.parse(amounBasketStr)
    let amounBasketLength = amounBasket.length
            yield put ({
                type: 'GOT_DATA_HOME',
                payload: {
                    dataUser: decoded,
                    countBasket: amounBasketLength
                }
              })
                                         
              if (dataUserToken !== null) {
                const API_URL = 'http://localhost:4200/users/avatar/'                                            
                 const API_PATH = decoded.id
                 let dataUsers = yield call (() => {
                 return fetch(`${API_URL}${API_PATH}`, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${dataUserToken}`
                    },
                }).then((response : any) => response.json())
               } )
                              
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
        
        // let err = JSON.stringify(error)
        // yield put ({
        //   type: 'ERROR_OCCURED',
        //   payload: {
        //     error: err
        //   }
        // })
      }
    });

    yield takeEvery('DO_USER_CHANGE', function*(action: any) {
      try {
          let {name, imgChange, pass, email, id, isAdmin} = action.data;
          let dataUserToken:any = localStorage.getItem('token')
          let decoded:any = jwt_decode(dataUserToken);
          const API_URL = 'http://localhost:4200/users/avatar/'                                            
          const API_PATH = `${decoded.id}`
                      
          let req = yield call (() => {
            
            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${dataUserToken}`
            },
            method: 'put',                                                              
            body: JSON.stringify( { name: name, image: imgChange } )                                        
            })
            .then((response : any) => response.json())
        })
                
        localStorage.removeItem('token')
        localStorage.setItem('token', req.data)
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
  