import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "q";


export function* doLogout(): IterableIterator<any> {
    yield takeEvery('DO_LOGOUT', function*(action: any) {
      try {
        
        yield put ({
            type: 'REMOOVE_ISLOADING',
            payload: {
                // logOut: true
              
            }
          })
        // yield call(delay, 2000); 
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
        const userId:any = localStorage.getItem('id');
        const API_URL = 'http://localhost:3000/users/'                                            
        const API_PATH = userId
        let dataHome = yield call (() => {
          return fetch(API_URL + API_PATH)
                  .then(res => res.json())

      } )

      
    let amounBasketStr:any = localStorage.getItem('basket')
    let amounBasket = JSON.parse(amounBasketStr)
    let amounBasketLength = amounBasket.length
        yield put ({
            type: 'GOT_DATA_HOME',
            payload: {
                dataHome: dataHome,
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
        console.log({name, imgChange, pass, email,  id});
        
        yield call (() => {
            // const load:any = localStorage.getItem('dataUser')
            // const isLoad = JSON.parse(load)
            

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
        
      } 
      catch (error) {
       
      }
    });
  }
  