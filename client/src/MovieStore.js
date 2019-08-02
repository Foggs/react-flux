// import Dispatcher from 'Dispatcher';
// import Constants from 'Constants';
import EventEmitter from 'events';
// import API from 'API';

const CHANGE_EVENT = 'CHANGE';
let _movies = [];

class MovieStore extends EventEmitter {
  // constructor() {
  //   super();
  //   Dispatcher.register(this.registerActions.bind(this));
  // }

  /*registerActions(action) {
    switch(action.actionType) {
      case Constants.SEARCH_MOVIES:
        API.searchMovies(action.movie);
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_MOVIE_RESULTS:
        this.setMovieResults(action.movies);
        this.emit(CHANGE_EVENT);
        break;
    }
    return true;
  }*/

  setMovieResults(movies) {
    _movies = movies;
  }

  getMovieResults(movies) {
    return _movies;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default new MovieStore();