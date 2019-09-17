import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";
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
      //   const userId:any = localStorage.getItem('id');
      //   const API_URL = 'http://localhost:3000/v1/users'                                            
      //   // const API_PATH = userId
      //   let dataUsers = yield call (() => {
      //     return fetch(API_URL)
      //             .then(res => res.json())
      // } )
      // yield console.log(dataUsers.data);
    let dataUserToken:any = localStorage.getItem('token')
    let decoded:any = jwt_decode(dataUserToken);
              // console.log(decoded.userData.id); 


      // let targetUserLog = dataUsers.data.filter((i:any) => i._id === userId);
      // yield console.log(targetUserLog[0]);

      
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
              // console.log(decoded.userData.id);
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
        // console.log(req.data);
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
  