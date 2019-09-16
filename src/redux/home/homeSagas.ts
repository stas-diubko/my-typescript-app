import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";

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
  
  export function* getDataHome(): IterableIterator<any> {
    yield takeEvery('GET_DATA_HOME', function*(action: any) {
      try {
        const userId:any = localStorage.getItem('id');
        const API_URL = 'http://localhost:3000/v1/users'                                            
        // const API_PATH = userId
        let dataUsers = yield call (() => {
          return fetch(API_URL)
                  .then(res => res.json())
      } )
      // yield console.log(dataUsers.data);

      let targetUserLog = dataUsers.data.filter((i:any) => i._id === userId);
      // yield console.log(targetUserLog[0]);

      
    let amounBasketStr:any = localStorage.getItem('basket')
    let amounBasket = JSON.parse(amounBasketStr)
    let amounBasketLength = amounBasket.length
        
            yield put ({
                type: 'GOT_DATA_HOME',
                payload: {
                    dataHome: targetUserLog[0],
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
          const API_URL = 'http://localhost:3000/users/'                                            
          const API_PATH = id
                
        yield call (() => {
            
            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',                                                              
            body: JSON.stringify( { name: name, 
              email: email, pass: pass, isAdmin: isAdmin,
              imgChange: imgChange } )                                        
            })
           
        })
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
  