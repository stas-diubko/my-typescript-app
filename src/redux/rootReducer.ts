import { Reducer, combineReducers } from "redux";
import {RegisterState} from './registration/types';
import {registerReducer} from './registration/reducer';
import { LoginState } from "./login/types";
import { loginReducer } from './login/reducer';
import { homeReducer } from "./home/reducer";
import { HomeState } from "./home/types";


export interface RootState {
    register: RegisterState;
    login: LoginState;
    home: HomeState;
  }

  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    register: registerReducer,
    login: loginReducer,
    home: homeReducer,
  });

  
  
export default rootReducer;
