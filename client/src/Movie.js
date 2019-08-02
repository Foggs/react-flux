import React, { Component } from 'react';
import MovieStore from './MovieStore';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';

class Movie extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.getAppState = this.getAppState.bind(this);
        this.state = this.getAppState();
    }

    getAppState() {
        return {
            movies: MovieStore.getMovieResults()
        }
    }

    componentDidMount() {
        MovieStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MovieStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(this.getAppState);
    }


    render() {
        var movieResults = '';
        if (this.state.movies == '') {
            movieResults = '';
        } else {
            movieResults = <MovieResults movies={this.state.movies}/>;
        }
        return (
            <div className="album py-5 bg-light">
            <h1>Movies</h1>
            <div className="container">
              <SearchForm />
            </div>
            <div className="container pull-down">
              {movieResults}
            </div>
          </div>
        );
    }
}

export default Movie;
