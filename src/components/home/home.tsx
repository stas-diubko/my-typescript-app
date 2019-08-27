import React from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';



class Home extends React.Component {
  // state = {
  //   isLoading: true,
  // }

  onRedir(){
    // console.log('click')
    // localStorage.removeItem('token');
    // let token = localStorage.getItem('token');
    // if (token === null){
    //   return <Redirect to="/" />
    // }
  }

  people = ['mike', 'jone', 'alex']

  render () {
    // localStorage.removeItem('token');
    
    // if (this.state.isLoading === false){
    //   return <Redirect to="/" />
    // }
    return (
      <div className="Home">
          <h3>Home page</h3>
          <Link to="/" onClick={(e:any)=>this.onRedir()}>Log Out</Link>
          <ul className="home-ul">
              {this.people.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
          </ul>
      </div>
    );
  }
 
}

export default Home;
