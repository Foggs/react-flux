import React, { Component } from 'react';
// import Movie from './Movie'

class MovieResults extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Jaws'};

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.clickHandler(e.target.id);
  
  }


  render() {
    let list;
    if (this.props.results.length > 0) {
      list = this.props.results.map((movie, index) =>
        <li key={index} className="d-flex list-group-item justify-content-between">
          <div>{movie.Title}</div>
          <div>
            <button 
              id={movie.Title}
              onClick={this.clickHandler} 
              type="button" 
              className="btn btn-primary btn-sm">select
            </button>
          </div>
          
        </li>
      );
    } else {
      return null
    }
    
    return (
      
      <div id='results' className="container">
        <h4>Results:</h4>
        <ul className="list-group">
          {list} 
        </ul>
      </div>
    );
  }
}
export default MovieResults;