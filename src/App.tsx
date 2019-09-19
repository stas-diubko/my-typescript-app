import React from 'react';
import './App.css';
import Register from './containers/registerContainer';
import {Route, BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {RootState} from './redux/rootReducer'
import { Store } from "redux";
import configureStore from "./redux/store";
import Login from './containers/loginContainer';
import homeContainer from './containers/homeContainer';
import Loader from './containers/loaderContainer';
import ErrorComponent from './containers/errorContainer';
import AdminComponent from './containers/adminContainer';
import BasketComponent from './containers/basketContainer';
import AboutBookComponent from './containers/aboutBookContainer'
const store: Store<RootState> = configureStore();

export class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
      <div className="loader-wrap">
        <Loader/>
        <ErrorComponent/>      
      </div>
        <header className="App-header">
              <Router>
                <Route exact path="/" component={Login} />
                <Route path="/registration" component={Register} />
                <Route path="/home" component={homeContainer} />
                <Route path="/admin" component={AdminComponent} /> 
                <Route path="/basket" component={BasketComponent} />  
                <Route path="/books/:id" component={AboutBookComponent} />
              </Router>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
