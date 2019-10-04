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
import { UsersTableState } from "./users_table/types";
import { usersTableReducer } from "./users_table/reducer";
import { BooksTableState } from "./books_table/types";
import { booksTableReducer } from "./books_table/reducer";
import { BasketState } from "./basket/types";
import { basketReducer } from "./basket/reducer";
import { AboutBookState } from "./about_book/types";
import { aboutBookReducer } from "./about_book/reducer";
import { LoaderCircularState } from "./loader_circular/types";
import { loaderCircularReducer } from "./loader_circular/reducer";
import { BooksTableMainState } from "./book_list/types";
import { booksListReducer } from "./book_list/reducer";

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


