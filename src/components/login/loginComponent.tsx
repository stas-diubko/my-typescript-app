import React from 'react';
import { LoginState, LoginRequest } from '../../redux/login/types';

import { login } from '../../redux/login/reducer';

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  email: string;
  pass: any;
  isLoading: boolean;
}
export class LoginComponent extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        error: '',
        email: '',
        pass: '',
        isLoading: false      
    }
  
    handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)
     
    handleSubmit = (e:any) => { 
        e.preventDefault();
        const { doLogin } = this.props;
        doLogin({ email: this.state.email, pass: this.state.pass });
        
        
    }
   
    render () {
      // console.log(this.props.isLoading)
      // if (this.props.isLoading === true){
      //       document.location.href = 'http://localhost:3001/home';
      // }
      return (
        <div >
            <h3>Login</h3>
            <form >
              <input type="email" name="email" placeholder="User Email" onChange={this.handle} value={this.state.email}/>              
              <input type="password" name="pass" placeholder="User Pass" onChange={this.handle} value={this.state.pass}/> 
              <button onClick={(e:any)=>this.handleSubmit(e)}>Log In</button>
          </form>
          {/* <button onClick={this.redir}>click</button> */}
        </div>
      );
    }
    
   
  }
  
  export default LoginComponent;
  