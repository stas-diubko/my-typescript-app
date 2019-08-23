import React from 'react';

export class LoginComponent extends React.Component<any,any> {
    state = {
        error: '',
        email: '',
        pass: '',
        isLoading: false,
       
    }
  
    

    handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)
     
    handleSubmit = (e:any) => { 
        e.preventDefault();
        const { doLogin } = this.props;
        doLogin({ email: this.state.email, pass: this.state.pass });
        // console.log({ name: this.state.email,  pass: this.state.pass })
        if (this.state.isLoading === true){
          document.location.href = 'http://localhost:3001/home';
        }
    }
    // redir = (e:any) => {
    //   if (this.state.isLoading === true){
    //     document.location.href = 'http://localhost:3001/home';
    //   }
    // }
    render () {
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
  