import { put, takeEvery, call } from "redux-saga/effects";

export function* doUserModalChange(): IterableIterator<any> {
    yield takeEvery('DO_USER_CHANGE', function*(action: any) {
      try {
        let {name, imgChange, id} = action.data;
        
        yield call (() => {
            const API_URL = 'http://localhost:3000/users/'                                            
            const API_PATH = id

            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',                                                              
            body: JSON.stringify( { name: name, imgChange: imgChange } )                                        
            })
           
        })
        yield put ({
            type: "CHANGE_USER_DATA",
            payload: {
                // logOut: true
              
            }
          })
        
      } 
      catch (error) {
       
      }
    });
  }
  