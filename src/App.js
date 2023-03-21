import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchMovie from "./components/SearchMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import { useState } from "react";
import { useEffect } from "react";
import MovieDetails from "./components/MovieDetails";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b09edf54";
function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("all");
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SearchMovie movies={movies} searchMovies={searchMovies} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/movie-details"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
