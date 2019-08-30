import React from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';
import {LoginState} from '../../redux/login/types';
import {RootState} from '../../redux/rootReducer';
import { HomeState } from '../../redux/home/types';
import { initialStateLog, login } from '../../redux/login/reducer';
import configureStore from '../../redux/store';
import { object } from 'prop-types';


export interface HomeProps {
  doLogout: any,
  email: any;
  name: any;
  logOut: boolean;
  isModal: boolean;    
}
export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    email: '',
    name: '',
    logOut: false,
    isModal: false    
}

  dataUserStr:any = localStorage.getItem('dataUser');
  dataUser:any = JSON.parse(this.dataUserStr);

  async componentDidMount() {
  if (this.dataUserStr) {
    this.setState({email: this.dataUser.email})
  } else {
    this.setState({email: ''});
  }
    
}

onLogout = (e:any) => {
  e.stopPropagation();
  const { doLogout } = this.props;
  doLogout()
  localStorage.removeItem('load');
  localStorage.removeItem('dataUser');
  document.location.href = 'http://localhost:3001/home';
         
} 

toLogin = (e:any) => {
  e.stopPropagation();
  document.location.href = 'http://localhost:3001';
}

onModal = () => {
  // console.log('click');
  this.setState({
    isModal: !this.state.isModal
  })
}

el:any = null

  render () {
    if (!this.dataUserStr) {
      
      this.el = <div className="logout" onClick={this.toLogin}>Log in</div>
    }
    else {
      this.el = <div className="logout " onClick={this.onLogout}>Logout</div>
    }

    const modal = this.state.isModal && <div className="user-modal"><div onClick={this.onModal}> &times; </div> modal</div>
  
    return (
      <div className="Home">       
        <div className="home-header">
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
          <div className="user-data-wrap" onClick={this.onModal}>          
            {this.el}
            <div className="user-data">Hello: {this.state.email}</div>
          </div>
        </div>    
        <div className="home-wrap">
        <h3>Home page</h3> 
        {modal}
        </div>              
      </div>
    );
  }


 
}

export default HomeComponent;
