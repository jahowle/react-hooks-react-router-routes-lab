import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesToDisplay = movies.map((movie) => {

    const genres = movie.genres.map((genre) => {
      return (
        <li key={genre}>{genre}</li>
      )
    })

    return (
      <div key={movie.title}>
        <h2>
          {movie.title}
        </h2>
        <h3>
          Time {movie.time}
        </h3>
        <ul>
          Genres
          {genres}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
    {moviesToDisplay}
  </div>;
}

export default Movies;
