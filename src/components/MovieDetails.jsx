import React from "react";
import { Link } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails({ movie }) {
  console.log(movie);
  return (
    <div className="movie-details">
      <Link to="/">
        <button type="button" class="btn btn-danger">
          Go Home
        </button>
      </Link>
    </div>
  );
}
