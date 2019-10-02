import React from 'react';
import './registration.css';
import { Redirect } from 'react-router';
import { RegisterState, RegisterRequest } from '../../redux/registration/types';

export interface RegisterProps {
  doInit: (data: RegisterRequest) => object;
  error: string,
  name: string,
  pass: string,
  email: string,
  nameError: string,
  passError: string,
  emailError: string,
  isRegister: boolean,
  isLoader: boolean,
  isAdmin: boolean
}

export class Register extends React.Component<RegisterProps, RegisterState>  {
  state: RegisterState = {
    users: {},
    error: '',
    name: '',
    pass: '',
    email: '',
    nameError: '',
    passError: '',
    emailError: '',
    isRegister: false,
    isLoader: false,
    isAdmin: false,
  };

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)

  validate = () => {
    let nameError = '';
    let passError = '';
    let emailError = '';
    let regEmail = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    
    if (!regEmail.test(this.state.email)){
      emailError = 'Email is not valid'
    }

    if (this.state.pass.length < 5){
      passError = 'Password must be more than four characters'
    }

    if (this.state.name.length < 5){
      nameError = 'Name must be more than four characters'
    }

    if (nameError || passError || emailError) {
      this.setState({nameError, passError, emailError})
      return false;
    }

    return true;
  }

  handleSubmit = (e:any) => { 
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const { doInit } = this.props;
      doInit({ 
        name: this.state.name, 
        email: this.state.email, 
        pass: this.state.pass, 
        imgChange: 'data:image/jpeg;base64,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'
      });
      this.setState(this.state)
    }
  }

  render () {
    if (this.props.isRegister){
      return <Redirect to="/"/>
    }
    
    return (
      <div >
        <div className="home-header">
            <h3>Registration</h3>
        </div>
        <div className="Registr ">
          <div>
           <h3>Registration</h3>          
          <form >
              <input type="text" name="name" placeholder="Your Name" onChange={this.handle} value={this.state.name}/>   
              <div className="form-error">{this.state.nameError}</div>           
              <input type="email" name="email" placeholder="Your Email" onChange={this.handle} value={this.state.email}/> 
              <div className="form-error">{this.state.emailError}</div>
              <input type="password" name="pass" placeholder="Your Pass" onChange={this.handle} value={this.state.pass}/>
              <div className="form-error">{this.state.passError}</div> 
              <button className="btn-form" onClick={(e:any)=>this.handleSubmit(e)}>Send</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Register;


