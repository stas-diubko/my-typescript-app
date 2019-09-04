
import { Store, createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import {doInit} from "./registration/registrationSagas";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { any } from "prop-types";
import { doLogin } from "./login/loginSagas";
import { onError } from "./error/errorSagas";
import { onLoaderOccured } from "./loader/loaderSagas";
import { doLogout } from "./home/homeSagas";
import { doUserModalChange } from "./modalUser/modalUsersSagas"
import { getUsers, deleteUser } from "./admin/adminSagas"


export default function configureStore(
    initialState?: RootState
  ): Store<RootState> {
    
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const composeEnhancers = composeWithDevTools({});

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  
    const store = createStore(rootReducer, initialState!, enhancer);
    
    if (module.hot) {
      module.hot.accept("./rootReducer", () => {
          const nextRootReducer = require("./rootReducer").default;
          store.replaceReducer(nextRootReducer);
        });
      }
    sagaMiddleware.run(function*() {
        yield all([
          doInit({}),
          doLogin(),
          onError(),
          onLoaderOccured(),
          doLogout(),
          doUserModalChange(),
          getUsers(),
          deleteUser()
        ]);
      });
    return store;
  }