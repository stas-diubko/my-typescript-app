import React from 'react';
import { LoginState, LoginRequest } from '../../redux/login/types';
import {Redirect, Link} from 'react-router-dom';

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  email: string;
  pass: string;
  isLoading: boolean;
  passError: string;
  emailError: string; 
  emailFromRegister: string;
  passFromRegister: string;
  users: object;
  books: object;
}

export class LoginComponent extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        error: '',
        email: this.props.emailFromRegister,
        pass: this.props.passFromRegister,
        isLoading: false,
        passError: '',
        emailError: '',    
        books: [],
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
          <div className="home-header">
            <h3>Welcome to Book Shop!</h3>
          </div>  
          <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <h3>Login</h3>
            <form  style={{ marginBottom: "10px"}}>
              <input type="email" name="email" placeholder="User Email" onChange={this.handle} value={this.state.email}/>
              <div className="form-error">{this.state.emailError}</div>              
              <input type="password" name="pass" placeholder="User Pass" onChange={this.handle} value={this.state.pass}/>
              <div className="form-error">{this.state.passError}</div>  
              <button style={{width: "100px", margin: "15px 0 0 5px", borderRadius: "4px", backgroundColor: "blanchedalmond"}} onClick={(e:any)=>this.handleSubmit(e)}>Log In</button>
          </form> 
          <div><span style={{color: "brown"}}>Don't have an account? </span><Link style={{fontSize: "16px", marginTop: "30px"}} to="/registration">Go to registration</Link></div>
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default LoginComponent;
  