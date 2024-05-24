
import React from "react";
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}

export default MovieList;