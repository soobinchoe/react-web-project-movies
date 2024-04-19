import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, date, title, summary, poster, genres }) {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className="movie">
            <img src={BASE_URL + poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__date">{date}</h5>
                <div className="movie__genres">
                    {genres.map((genre, index) => (
                        <span key={index} className="movie__genre">
                            {genre}{index !== genres.length - 1 && '   '}
                        </span>
                    ))}
                </div>
                <h3 className="movie__summary">{summary.slice(0, 180)}...</h3>
            </div>
        </div>

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;