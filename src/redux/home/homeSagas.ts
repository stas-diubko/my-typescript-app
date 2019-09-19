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
                    dataUser: decoded.userData,
                    countBasket: amounBasketLength
                  
                }
              })

              if (dataUserToken !== null) {
                const API_URL = 'http://localhost:3000/v1/users/'                                            
                 const API_PATH = decoded.userData.id
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
                  userAva: dataUsers.data.imgChange
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
       
      }
    });

    yield takeEvery('DO_USER_CHANGE', function*(action: any) {
      try {
          let {name, imgChange, pass, email, id, isAdmin} = action.data;
          let dataUserToken:any = localStorage.getItem('token')
          let decoded:any = jwt_decode(dataUserToken);
          const API_URL = 'http://localhost:3000/v1/users/'                                            
          const API_PATH = `${decoded.userData.id}`
            
          let req = yield call (() => {
            
            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',                                                              
            body: JSON.stringify( { name: name, imgChange: imgChange } )                                        
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
       
      }
    });
  }
  