import React from 'react';
import './jumbotron.css';
import popcorn from './images/popcorn.jpg';


const Jumbotron = (props) => {

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <h1 className="">Cinema Search</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>)
}

export default Jumbotron;
