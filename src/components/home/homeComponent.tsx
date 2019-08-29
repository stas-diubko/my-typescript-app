import React from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';
import {LoginState} from '../../redux/login/types';
import {RootState} from '../../redux/rootReducer';
import { HomeState } from '../../redux/home/types';
// import { initialState } from '../../redux/home/reducer';
import { initialStateLog, login } from '../../redux/login/reducer';
import configureStore from '../../redux/store';

// const dataa = initialStateLog;
export interface HomeProps {
  email: any;
 
}
export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    email: '',
    name: ''    
}

dataUserStr:any = localStorage.getItem('dataUser');
dataUser:any = JSON.parse(this.dataUserStr);
componentDidMount() {
  this.setState({email: this.dataUser.email, name: this.dataUser.name})
}

// dataEm:any = configureStore().getState().login



  render () {
    // console.log(this.props.email);
    console.log(this.dataUser);
    // console.log(configureStore().getState().login)
    
    return (
      <div className="Home">
        <div className="home-header">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
          <div className="user-data">Hello: {this.state.email}</div>
        </div>
        
        <h3>Home page</h3>      
          
      </div>
    );
  }
 
}

export default HomeComponent;
