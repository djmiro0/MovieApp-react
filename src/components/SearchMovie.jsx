import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import "./SearchMovie.css";

export default function SearchMovie({ movies, searchMovies }) {
  const [title, setTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      searchMovies(title);
    } else if (!movies.includes(title)) {
      searchMovies("All");
    } else {
      filteredMovies = [];
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  let filteredMovies = movies;

  if (selectedOption === "Movies") {
    filteredMovies = movies.filter((movie) => movie.Type === "movie");
  } else if (selectedOption === "Series") {
    filteredMovies = movies.filter((movie) => movie.Type === "series");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a movie"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit" className="btn btn-secondary">
          Search
        </button>
      </form>

      <div className="input-container">
        <label htmlFor="">All</label>
        <input
          type="radio"
          value="All"
          checked={selectedOption === "All"}
          onChange={handleOptionChange}
        />

        <label htmlFor="">Movies</label>
        <input
          type="radio"
          value="Movies"
          checked={selectedOption === "Movies"}
          onChange={handleOptionChange}
        />

        <label htmlFor="">Series</label>
        <input
          type="radio"
          value="Series"
          checked={selectedOption === "Series"}
          onChange={handleOptionChange}
        />
      </div>

      {filteredMovies.length > 0 ? (
        <div className="small-container">
          {filteredMovies.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={index}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>
            {title.length > 0
              ? "No movies found"
              : "Please enter a search term"}
          </h2>
        </div>
      )}
    </div>
  );
}
