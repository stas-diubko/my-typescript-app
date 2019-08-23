import React from 'react';
import './registration.css';

export class Register extends React.Component<any,any>  {
  state = {
    error: '',
    name: '',
    pass: '',
    email: '',
  }

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)

  handleSubmit = (e:any) => { 
    e.preventDefault();
    const { doInit } = this.props;
    doInit({ name: this.state.name, email: this.state.email, pass: this.state.pass });
  }
   
  render () {
    return (
      <div className="Registr">
          <h3>Registration</h3>
          <form >
              <input type="text" name="name" placeholder="Your Name" onChange={this.handle} value={this.state.name}/>              
              <input type="email" name="email" placeholder="Your Email" onChange={this.handle} value={this.state.email}/> 
              <input type="password" name="pass" placeholder="Your Pass" onChange={this.handle} value={this.state.pass}/>
              <button onClick={(e:any)=>this.handleSubmit(e)}>Send</button>
          </form>
      </div>
    );
  }
}

export default Register;


