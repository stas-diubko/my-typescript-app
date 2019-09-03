import React from 'react';
import { LoginState, LoginRequest } from '../../redux/login/types';

import { login } from '../../redux/login/reducer';
import {Redirect, Link} from 'react-router-dom'
import configureStore from '../../redux/store';
// import HomeComponent from '../home/homeComponent';
// import ErrorComponent from '../../containers/errorContainer';

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  email: string;
  pass: any;
  isLoading: boolean;
  passError: any;
  emailError: any; 
  emailFromRegister: any;
  passFromRegister: any;
  users: any;
  books: any;
}
export class LoginComponent extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        error: '',
        email: this.props.emailFromRegister,
        pass: this.props.passFromRegister,
        isLoading: false,
        passError: '',
        emailError: '',    
        books: '',
        users: []  
    }

    validate = () => {
      
      let passError = '';
      let emailError = '';
      let regEmail = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
      if (!regEmail.test(this.state.email)){
        emailError = 'Email is invalid'
      }
      if (this.state.pass.length < 5){
        passError = 'Pass must be more than four characters'
      }
      
      if ( passError || emailError) {
        this.setState({passError, emailError})
        return false;
      }
      return true;
    }
  
    handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)
     
    handleSubmit = (e:any) => { 
        e.preventDefault();
        const isValidLogin = this.validate();
        if (isValidLogin) {
          const { doLogin } = this.props;
          doLogin({ email: this.state.email, pass: this.state.pass });
          // this.setState({
          //   email: '',
          //   pass: '',
          //   passError: '',
          //   emailError: '',
          // })
          this.setState(this.state)
        }   
    }
    
    render () {
      const load:any = localStorage.getItem('load')
      const isLoad = JSON.parse(load)
      if (this.props.isLoading || isLoad){
            return <Redirect to="/home"/>        
      }   

      return (       
        <div >
          {/* <ErrorComponent/> */}
          <ul>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
          <h3>Login</h3>
          <form >
              <input type="email" name="email" placeholder="User Email" onChange={this.handle} value={this.state.email}/>
              <div className="form-error">{this.state.emailError}</div>              
              <input type="password" name="pass" placeholder="User Pass" onChange={this.handle} value={this.state.pass}/>
              <div className="form-error">{this.state.passError}</div>  
              <button onClick={(e:any)=>this.handleSubmit(e)}>Log In</button>
          </form> 
        </div>
      );
    }
  }
  
  export default LoginComponent;
  