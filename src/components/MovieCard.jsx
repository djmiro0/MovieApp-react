import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="container">
      <Link to="/movie-details">
        <img src={movie.Poster} alt="Movie Poster" />
        <p>
          {movie.Title} - {movie.Year}
        </p>{" "}
      </Link>
    </div>
  );
}
