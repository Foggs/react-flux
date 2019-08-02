import Dispatcher from 'Dispatcher';
import Constants from 'Constants';

class Actions {
  searchMovies(movie) {
    Dispatcher.dispatch({
      actionType: Constants.SEARCH_MOVIES,
      movie: movie
    })
  }
  
  showMovieResults(movies) {
    Dispatcher.dispatch({
      actionType: Constants.SHOW_MOVIE_RESULTS,
      movies: movies
    })
  }
}

export default new Actions();