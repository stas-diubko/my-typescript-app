import { put, takeEvery, call } from "redux-saga/effects";

export function* deleteUser(): IterableIterator<any> {
    yield takeEvery('DELETE_USER', function*(action: any) {
        
        try {
          let id = action.data;
          const API_URL = 'http://localhost:3000/v1/users/'                                            
          const API_PATH = id
          
            yield call (() => {
                return fetch(API_URL + API_PATH, {
                  method: 'DELETE'
                })

            } )

            yield put ({
              type: "GET_USERS",
              payload: {
                                
              }
            })
                      
        } 
        
        catch (error) {

        }
    })
}