import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import SearchForm from "../SearchForm";
import MovieResults from "../MovieResults";
import Card from "../Card";
import keys from '../config/keys';

// import API from 'API';
// import jsonData from "../data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      text: "",
      results: [],
      selectedMovie: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    // check if the user is logged in, call redux action creator
    this.props.fetchUser();

  }
  componentWillUnmount() {}
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    return true;
  }

  handleSubmit(val) {
    // e.preventDefault();
    const fetchmovie = async () => {
      const res = await fetch(`${keys.API_KEY}&s=${val}`)
      const json = await res.json()
      console.log(json);
      let movies = json.Search ? json.Search : [];
      // obj = JSON.parse(myJson);
      this.setState((prevstate, props) => ({
        results: movies
      }));
    }
    fetchmovie();
  }

  clickHandler(val) {
    console.log(val);
    fetch(`${keys.API_KEY}&t=${val}&plot=full`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        // console.log(JSON.stringify(myJson));
        console.log(myJson.Title, myJson);
        this.setState((state, props) => ({
          selectedMovie: myJson
        }));
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Jumbotron} />
          </div>
        </BrowserRouter>
        <div className="container">
          <h1>Movies</h1>
          <SearchForm handleSubmit={this.handleSubmit} />
          <MovieResults
            clickHandler={this.clickHandler}
            results={this.state.results}
          />
        </div>

        <div>{<Card data={this.state.selectedMovie} />}</div>
        <footer className="footer bg-inverse">
          <div className="container">
            <span className="text-muted">copyright 2018</span>
            <a href="/auth/google">Sign In"</a>
          </div>
        </footer>
      </div>
    );
  }
}
export default connect(null, actions)(App);
