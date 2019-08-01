import React, { Component } from 'react';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';
import Card from './Card';
// import API from 'API';
import jsonData from'./data.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      movies: [], 
      text: '',
      results:[],
      selectedMovie: null
       
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount(){ 
    const loadData = JSON.parse(JSON.stringify(jsonData));
    console.log('componentDidMount',loadData);

  }
  componentWillUnmount() {}
  componentDidUpdate(){ console.log('componentDidUpdate') }
  shouldComponentUpdate(){return true}

  handleSubmit(val) {
    // e.preventDefault();
    console.log('handleSubmit')
    fetch(`http://www.omdbapi.com/?apikey=a36e0862&s=${val}`)
    .then( (response) => {
        return response.json();
    })
    .then( (myJson) => {
        // console.log(JSON.stringify(myJson));
        let movies = (myJson.Search ? myJson.Search : []);
        // obj = JSON.parse(myJson);
        this.setState((state) => ({
          results: movies
        })) 
    });
  }

  clickHandler(val) {

    console.log(val)
    fetch(`http://www.omdbapi.com/?apikey=a36e0862&t=${val}&plot=full`)
      .then( (response) => {
        return response.json();
      })
      .then( (myJson) => {
        // console.log(JSON.stringify(myJson));
        console.log(myJson.Title, myJson)
        this.setState((state) => ({
          selectedMovie: myJson
        })) 
    });
  }

  render() {
    
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <div className="container">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
           </div> 
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-3">Fluid</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <h1>Movies</h1>
        <div className="container">
            <SearchForm handleSubmit={this.handleSubmit}/>
        </div>
        <MovieResults clickHandler={this.clickHandler} results={this.state.results}/>
        <div>{<Card data={this.state.selectedMovie}/>}</div>
        <footer className="footer bg-inverse">
          <div className="container">
            <span className="text-muted">copyright 2018</span>
        </div>
  </footer>
      </div>
    );
  }
}
export default App;


