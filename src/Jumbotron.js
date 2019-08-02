import React from 'react';
import './jumbotron.scss';


const Jumbotron = (props) => {
  const greeting = 'Hello Function Component!';

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <h1 className="">Cinema Search</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>)
}

export default Jumbotron;