import React from 'react';
import './App.css';
import About from './components/about/about';
// import HomeComponent from './components/home/homeComponent';
import Register from './containers/registerContainer';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {RootState} from './redux/rootReducer'
import { Store } from "redux";
import configureStore from "./redux/store";
import Login from './containers/loginContainer';
import homeContainer from './containers/homeContainer';
import Loader from './containers/loaderContainer';
import ErrorComponent from './containers/errorContainer';
import AdminComponent from './containers/adminContainer';

const store: Store<RootState> = configureStore();

export class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
      <div className="loader-wrap">
        <div className="loader"> <Loader/></div>
        <ErrorComponent/>      
      </div>
        <header className="App-header">
              <Router>
              {/* <ul id='shed'>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/">Log In</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul> */}
              <Route exact path="/" component={Login} />
              <Route path="/registration" component={Register} />
              <Route path="/home" component={homeContainer} />
              <Route path="/about" component={About} />  
              <Route path="/admin" component={AdminComponent} />  
            </Router>
        </header>
      </div>
      </Provider>
    );
  }
  
}

export default App;
