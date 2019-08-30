import { Reducer, combineReducers } from "redux";
import {RegisterState} from './registration/types';
import {registerReducer} from './registration/reducer';
import { LoginState } from "./login/types";
import { loginReducer } from './login/reducer';
import { homeReducer } from "./home/reducer";
import { HomeState } from "./home/types";
import { ErrortState } from "./error/types";
import { errorReducer } from "./error/reducer";
import { LoaderState } from "./loader/types";
import { loaderReducer } from "./loader/reducer";


export interface RootState {
    register: RegisterState;
    login: LoginState;
    home: HomeState;
    error: ErrortState;
    loader: LoaderState;
    
  }

  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    register: registerReducer,
    login: loginReducer,
    home: homeReducer,
    error: errorReducer,
    loader: loaderReducer
  });

  
  
export default rootReducer;
