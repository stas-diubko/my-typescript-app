import React from 'react';
import './registration.css';

const initialState = {
  error: '',
  name: '',
  pass: '',
  email: '',
  nameError: '',
  passError: '',
  emailError: '',
}

export class Register extends React.Component<any,any>  {
  state = initialState;
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)

  validate = () => {
    let nameError = '';
    let passError = '';
    let emailError = '';
    let regEmail = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    if (!regEmail.test(this.state.email)){
      emailError = 'Email is invalid'
    }
    if (this.state.pass.length < 5){
      passError = 'Pass must be more than four characters'
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
      doInit({ name: this.state.name, email: this.state.email, pass: this.state.pass });
      this.setState(initialState)
    }
  }
   
  render () {
    return (
      <div className="Registr">
          <h3>Registration</h3>
          <form >
              <input type="text" name="name" placeholder="Your Name" onChange={this.handle} value={this.state.name}/>   
              <div className="form-error">{this.state.nameError}</div>           
              <input type="email" name="email" placeholder="Your Email" onChange={this.handle} value={this.state.email}/> 
              <div className="form-error">{this.state.emailError}</div>
              <input type="password" name="pass" placeholder="Your Pass" onChange={this.handle} value={this.state.pass}/>
              <div className="form-error">{this.state.passError}</div> 
              <button onClick={(e:any)=>this.handleSubmit(e)}>Send</button>
          </form>
      </div>
    );
  }
}

export default Register;


