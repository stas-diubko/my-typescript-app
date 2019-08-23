import { put, takeEvery } from "redux-saga/effects";

export function* doLogin(): IterableIterator<any> {
    yield takeEvery('DO_LOGIN', function*(action: any) {
        
        try {
            let {email, pass} =  action.data;
            console.log({email, pass});

            yield put({
                type: 'LOGIN_SUCCESS',
                payload: {
                    data: "token"
                }
            })
        }
        
        catch (error) {

        }
    })


}