import { Store, createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./root.reducer";
import {doInit} from "./registration/registration.sagas";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { doLogin } from "./login/login.sagas";
import { onErrorOccured } from "./error/error.sagas";
import { onLoaderOccured } from "./loader/loader.sagas";
import { doLogout, getDataHome } from "./home/home.sagas";
import { getUsers} from "./admin/admin.sagas";
import { deleteUser } from "./users_table/users-table.sagas";
import { addBook, getBooks, deleteBook, changeDataBook } from "./books_table/books-table.sagas";
import { getDataBasket } from "./basket/basket.sagas";
import { getBookId } from "./about_book/about-book.sagas";
import { getBooksToMain } from "./book_list/book-list.sagas";


export default function configureStore(
    initialState?: RootState
  ): Store<RootState> {
    
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const composeEnhancers = composeWithDevTools({});

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  
    const store = createStore(rootReducer, initialState!, enhancer);
    
    if (module.hot) {
      module.hot.accept("./root.reducer", () => {
          const nextRootReducer = require("./root.reducer").default;
          store.replaceReducer(nextRootReducer);
        });
      }
    sagaMiddleware.run(function*() {
        yield all([
          doInit({}),
          doLogin(),
          onErrorOccured(),
          onLoaderOccured(),
          doLogout(),
          getUsers(),
          deleteUser(),
          addBook(),
          getBooks(),
          deleteBook(),
          getDataHome(),
          changeDataBook(),
          getDataBasket(),
          getBookId(),
          getBooksToMain()
        ]);
      });
    return store;
  } 