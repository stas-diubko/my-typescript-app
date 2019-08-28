import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="About">
      <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <h3>About page</h3>
    </div>
  );
}

export default About;

