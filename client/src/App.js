import React, { Component } from 'react';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';
import Card from './Card';
import TopNav from './TopNav';
import Jumbotron from './Jumbotron';
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
        this.setState((prevstate, props) => ({
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
        this.setState((state, props) => ({
          selectedMovie: myJson
        })) 
    });
  }

  render() {
    
    return (
      <div>
        <TopNav />
        <Jumbotron />
        
        <div className="container">
            <h1>Movies</h1>
            <SearchForm handleSubmit={this.handleSubmit}/>
            <MovieResults clickHandler={this.clickHandler} results={this.state.results}/>
        </div>
        
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


