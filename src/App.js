import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    genres: []
  };
  getMovies = async () => {
    const { data: { results } } =
      await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: '72c0aa703cf76e9067795aff01ba72a6', // Replace with your TMDB API key
            language: 'en-US' // Specify the language for the genre names
          }
        }
      )
    this.setState({ results, isLoading: false });

    // Fetch genre data from TMDB API
    const { data: { genres } } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        params: {
          api_key: '72c0aa703cf76e9067795aff01ba72a6',
          language: 'en-US'
        }
      }
    );
    this.setState({ genres });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, results, genres } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {results.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                date={movie.release_date}
                title={movie.title}
                summary={movie.overview}
                poster={movie.poster_path}
                // Get genre names based on genre IDs
                genres={movie.genre_ids.map(genreId => {
                  const genre = genres.find(g => g.id === genreId);
                  return genre ? genre.name : '';
                })}
              />
            ))}
          </div>
        )
        }
      </section>
    );
  }
}

export default App;
