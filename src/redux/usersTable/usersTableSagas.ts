import { put, takeEvery, call } from "redux-saga/effects";

export function* deleteUser(): IterableIterator<any> {
    yield takeEvery('DELETE_USER', function*(action: any) {
        try {
          let id = action.data;
          const API_URL = 'http://localhost:4200/users/'                                            
          const API_PATH = id
          let dataUserToken:any = localStorage.getItem('token')
           
            yield call (() => {
                return fetch(API_URL + API_PATH, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${dataUserToken}`
                },
                }).then(res => res.json())
            } )

            yield put ({
              type: "GET_USERS",
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
    })
}