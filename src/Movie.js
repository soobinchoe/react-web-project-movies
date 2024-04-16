import React from "react";
import PropTypes from "prop-types";

function Movie({ id, date, title, summary, poster }) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;