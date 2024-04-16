import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { results } } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=72c0aa703cf76e9067795aff01ba72a6")
    this.setState({ results, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, results } = this.state;
    return <div>{isLoading
      ? "Loading..."
      : results.map(movie => {
        return (
          <Movie
            id={movie.id}
            year={movie.release_date}
            title={movie.title}
            summary={movie.overview}
            poster={movie.poster_path} />
        );
      })}
    </div>;
  }
}

export default App;
