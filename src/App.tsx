import React from 'react';
import './App.css';
import About from './components/about/about';
import Home from './components/home/home';
import Register from './containers/registerContainer';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {RootState} from './redux/rootReducer'
import { Store } from "redux";
import configureStore from "./redux/store";
import Login from './containers/loginContainer';

const store: Store<RootState> = configureStore();

export class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
              <Router>
              <ul id='shed'>
                <li><Link to="/">Registration</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <Route exact path="/" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />  
            </Router>
        </header>
      </div>
      </Provider>
    );
  }
  
}

export default App;
