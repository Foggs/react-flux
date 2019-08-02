import React, { Component } from 'react';

const TopNav = (props) => {
  const greeting = 'Hello Function Component!';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Top Ten</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/">Disabled</a>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}

  export default TopNav;