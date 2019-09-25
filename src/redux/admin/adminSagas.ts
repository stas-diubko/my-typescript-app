import { put, takeEvery, call } from "redux-saga/effects";

export function* getUsers(): IterableIterator<any> {
    yield takeEvery('GET_USERS', function*(action: any) {
        try {
            yield put({
                type: 'LOADER_CIRCULAR_SHOW',
                payload: {

                }
              });
            let dataUserToken:any = localStorage.getItem('token')
              let page:any = 0;
              let pageSize:any = 2 
              // console.log(action.data);
              page = action.data
              
            let dataUsers = yield call (() => {
                return fetch(`http://localhost:4200/users`, {
                 
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization' : `Bearer ${dataUserToken}`,
                  },

                  method: 'PUT', 
                  body: JSON.stringify( { page: page, pageSize: pageSize } )
                  
              }).then(res => res.json())
            } )
                                     
            yield put ({
                type: "GOT_USERS",
                payload: {
                  users: dataUsers.data,
                  usersLength: dataUsers.usersLength
                }
              })  
              yield put ({
                type: "LOADER_CIRCULAR_HIDE",
                payload: {
                                    
                }
              })
        } 
        
        catch (error) {

        }
    })
}
 