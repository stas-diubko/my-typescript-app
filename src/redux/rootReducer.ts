import { Reducer, combineReducers } from "redux";
import {RegisterState} from './registration/types';
import {registerReducer} from './registration/reducer';
import { LoginState } from "./login/types";
import { loginReducer } from './login/reducer';


export interface RootState {
    register: RegisterState;
    login: LoginState;
  }

  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    register: registerReducer,
    login: loginReducer,
  });

  
  
export default rootReducer;
