import React from 'react';
import './home.css';


class Home extends React.Component {

  people = ['mike', 'jone', 'alex']

  render () {
    return (
      <div className="Home">
          <h3>Home page</h3>
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
