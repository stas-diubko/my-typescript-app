import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";

 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        // const url = 'http://localhost:3000/users';
        try {
            let {email, pass, isLoading} =  action.data;
           
            let dataLogin = yield call (() => {
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                    // .then(function(response) {
                    //     return response.json();
                    // })
                    // .then(function(myJson) {
                    //     let dataUsers = JSON.stringify(myJson);
                    //     let arrUsers  = JSON.parse(dataUsers);
                    //     let one = arrUsers.filter((i:any) => i.email === email);                   
                    //     console.log(one[0]) 
                    //     if (one[0].pass === pass) {
                    //         // isLoading = true
                    //         // document.location.href = 'http://localhost:3001/home';
                    //     }
                    // })
                    
            } )
            let targetUserLog = dataLogin.filter((i:any) => i.email === email);
            yield console.log(targetUserLog)

             if (targetUserLog.length === 0) {
                alert('User with this email does not exist, go to registration form')
                
            }  
            else if (pass === targetUserLog[0].pass) {
                yield put({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        isLoading: true
                    }
                })
                localStorage.setItem('token', 'qwerty');
            } 
            else {
                alert('password is not correct, try again')
            }

            // yield console.log(targetUserLog)
            
        } 
        
        catch (error) {

        }
    })


}