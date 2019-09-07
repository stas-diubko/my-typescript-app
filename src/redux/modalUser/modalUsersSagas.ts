import { put, takeEvery, call } from "redux-saga/effects";

export function* doUserModalChange(): IterableIterator<any> {
    yield takeEvery('DO_USER_CHANGE', function*(action: any) {
      try {
          let {name, imgChange, id} = action.data;
          const API_URL = 'http://localhost:3000/users/'                                            
          const API_PATH = id

        yield call (() => {
            const load:any = localStorage.getItem('dataUser')
            const isLoad = JSON.parse(load)
            

            return fetch (API_URL + API_PATH, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',                                                              
            body: JSON.stringify( { name: name, email: isLoad.email, pass: isLoad.pass, img: imgChange } )                                        
            })
           
        })

        let userDataChanged = yield call (() => {
          return fetch(API_URL + API_PATH)
          .then(res => res.json())
        })

        let data = JSON.stringify(userDataChanged)
        localStorage.setItem('dataUser', data)
        
        yield console.log(userDataChanged)

        yield put ({
            type: "CHANGE_USER_DATA",
            payload: {
                user: userDataChanged
              
            }
          })
        
      } 
      catch (error) {
       
      }
    });
  }
  