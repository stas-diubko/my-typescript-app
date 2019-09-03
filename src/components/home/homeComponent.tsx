import React from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';
import {LoginState} from '../../redux/login/types';
import {RootState} from '../../redux/rootReducer';
import { HomeState } from '../../redux/home/types';
import { initialStateLog, login } from '../../redux/login/reducer';
import configureStore from '../../redux/store';
import { object } from 'prop-types';
import ModalUserComponent from '../../containers/modalUserContainer';
import AdminComponent from '../../containers/adminContainer';

import avaDefault from '../../img/avaDefault.jpg' 



export interface HomeProps {
  doLogout: any,
  email: any;
  name: any;
  logOut: boolean;
  isModal: boolean;   
  img: any; 
  isAdmin: boolean;
}
export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    email: '',
    name: '',
    logOut: false,
    isModal: false,
    img: '' ,
    isAdmin: false   
}

  dataUserStr:any = localStorage.getItem('dataUser');
  dataUser:any = JSON.parse(this.dataUserStr);

  async componentDidMount() {
  if (this.dataUserStr) {
    this.setState({email: this.dataUser.email})
    this.setState({img: this.dataUser.imgChange})

  } else {
    this.setState({email: ''});
    this.setState({img: avaDefault})
  }
  console.log(this.props.isAdmin)
  if (this.props.isAdmin){
    this.setState({isAdmin: this.props.isAdmin})
    console.log(this.state.isAdmin)
  }
  
  // if ('imgChange' in this.dataUser) {
  //   this.setState({img: this.dataUser.imgChange})
  //   }else{
  //     this.setState({img: avaDefault})
  //   }
    // console.log('imgChange' in this.dataUser);  
    
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
// imgUser:any =null
adminComponent:any
  render () {
    if (!this.dataUserStr) {
      
      this.el = <div className="logout" onClick={this.toLogin}>Log in</div>
    }
    else {
      this.el = <div className="logout " onClick={this.onLogout}>Logout</div>
    }
    
    if(this.state.isAdmin) {
      this.adminComponent = <AdminComponent/>;
    }

    

    const modal = this.state.isModal && <div className="user-modal"><div className="close" onClick={this.onModal}> &times; </div><ModalUserComponent /></div>
    // const imgUser = avaDefault && this.dataUser.imgChange
    return (
      <div className="Home">  
           
        <div className="home-header">
          <ul>
            {/* <li><Link to="/about">About</Link></li> */}
          </ul>
          <div className="user-data-wrap" onClick={this.onModal}>          
            {this.el}
            <div className="user-data">Hello: {this.state.email} <div className="user-ava"><img src={this.state.img} alt="userAva"/></div> </div>
          </div>
        </div>    
        <div className="home-wrap">
          <div className="modal">{modal}</div>
          {this.adminComponent}
        
        </div>              
      </div>
    );
  }


 
}

export default HomeComponent;
