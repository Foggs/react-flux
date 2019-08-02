// import Actions from 'Actions';

const $ = window.jQuery

class API {
  searchMovies(movie) {
    $.ajax({
      url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a36e0862&s=' + movie.title,
      dataType: 'json',
      cache: false,
      success(data) {
        let movies = (data.Search ? data.Search : []);
        // Actions.showMovieResults(movies);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}
export default new API();