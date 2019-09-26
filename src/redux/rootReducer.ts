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
import { AdminState } from "./admin/types";
import { adminReducer } from "./admin/reducer";
import { UsersTableState } from "./usersTable/types";
import { usersTableReducer } from "./usersTable/reducer";
import { BooksTableState } from "./booksTable/types";
import { booksTableReducer } from "./booksTable/reducer";
import { BasketState } from "./basket/types";
import { basketReducer } from "./basket/reducer";
import { AboutBookState } from "./aboutBook/types";
import { aboutBookReducer } from "./aboutBook/reducer";
import { LoaderCircularState } from "./loaderCircular/types";
import { loaderCircularReducer } from "./loaderCircular/reducer";
import { BooksTableMainState } from "./bookList/types";
import { booksListReducer } from "./bookList/reducer";

export interface RootState {
    register: RegisterState;
    login: LoginState;
    home: HomeState;
    error: ErrortState;
    loader: LoaderState;
    loaderCircular: LoaderCircularState;
    books: LoginState;
    users: LoginState;
    admin: AdminState;
    usersTable: UsersTableState;
    booksTable: BooksTableState;
    basket: BasketState;
    aboutBook: AboutBookState;
    bookList: BooksTableMainState;
  }

  const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    register: registerReducer,
    login: loginReducer,
    home: homeReducer,
    error: errorReducer,
    loader: loaderReducer,
    loaderCircular: loaderCircularReducer,
    users: loginReducer,
    books: loginReducer,
    admin: adminReducer,
    usersTable: usersTableReducer,
    booksTable: booksTableReducer,
    basket: basketReducer,
    aboutBook: aboutBookReducer,
    bookList: booksListReducer
  });

export default rootReducer;


