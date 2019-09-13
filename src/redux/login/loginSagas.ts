import { put, takeEvery, call } from "redux-saga/effects";
import { any } from "prop-types";
import { delay } from "q";
import  jwt_decode from 'jwt-decode';
 
export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        
        try {
            let {email, pass, name, isLoading} =  action.data;

           
            let req = yield call(() => {
              return fetch('http://localhost:3000/v1/authenticate', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify({email, pass}),
            })
            .then((response : any) => response.json())     
            })
 
            if(req.success){
              console.log(req.message, req.data)
              var token = req.data;
              
              var decoded:any = jwt_decode(token);
              console.log(decoded.email);
           
              // let isLoadi = JSON.stringify(true)
              // localStorage.setItem('load', isLoadi)

              //   yield put({
              //     type: 'LOGIN_SUCCESS',
              //     payload: {
              //       // users: dataLogin
                      
              //     }
              // })
            }
           



          //   export function request(url:string,  method: string, body?: object) {
          //     return (fetch(url, {
          //         method: method,
          //         headers: { 'Content-Type': 'application/json' },
          //         body: JSON.stringify(body)
          //     }).then((response : any) => {return  response.text().then(function(text :any) {
          //         return text ? JSON.parse(text) : {}
          //             }) 
          //         })
          //     );
          // } 
            
            // let targetUserLog = dataLogin.filter((i:any) => i.email === email);
            
            //  if (req.status === 200) {
            //      console.log(req.data);
                 
              
            //   // yield put({
            //   //       type: 'DO_LOADER',
            //   //       payload: {
            //   //         isLoader: true
            //   //       }
            //   //     });

                 
            //   //     localStorage.setItem('id', targetUserLog[0].id)
            //   //     localStorage.setItem('basket', '[]')
                                 
            //   //   yield call(delay, 2000);

                

            //     // yield put({
            //     //   type: 'GET_DATA_HOME',
            //     //   payload: {
            //     //    isAdmin: targetUserLog[0]
            //     //   }
            //     // });

            //     // yield put({
            //     //   type: 'GET_USER_DATA',
            //     //   payload: {
                   
            //     //   }
            //     // });
            // }  
            else {
              console.log(req);
              yield put ({
                type: 'ERROR_OCCURED',
                payload: {
                  error: req.message
                  
                }
              })
               
            } 

            // else {
            //     yield put ({
            //         type: 'ERROR_OCCURED',
            //         payload: {
            //           error: 'password is not correct, try again'
            //         }
            //       })
            // }   
        } 
        
        catch (error) {

        }
    })

}