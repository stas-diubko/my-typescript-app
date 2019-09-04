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
import { UserModalState } from "./modalUser/types";
import { userModalReducer } from "./modalUser/reducer";
import { AdminState } from "./admin/types";
import { adminReducer } from "./admin/reducer";


export interface RootState {
    register: RegisterState;
    login: LoginState;
    home: HomeState;
    error: ErrortState;
    loader: LoaderState;
    userModal: UserModalState;
    books: LoginState;
    users: LoginState;
    admin: AdminState;
  }

  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    register: registerReducer,
    login: loginReducer,
    home: homeReducer,
    error: errorReducer,
    loader: loaderReducer,
    userModal: userModalReducer,
    users: loginReducer,
    books: loginReducer,
    admin: adminReducer
  });

  
  
export default rootReducer;


