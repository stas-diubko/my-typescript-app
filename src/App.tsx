import React from 'react';
import './App.css';
import Register from './containers/register.container';
import {Route, BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {RootState} from './redux/root.reducer'
import { Store } from "redux";
import configureStore from "./redux/store";
import Login from './containers/login.container';
import homeContainer from './containers/home.container';
import Loader from './containers/loader.container';
import ErrorComponent from './containers/error.container';
import AdminComponent from './containers/admin.container';
import BasketComponent from './containers/basket.container';
import AboutBookComponent from './containers/about-book.container'
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
