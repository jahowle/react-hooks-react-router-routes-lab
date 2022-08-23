import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsToDisplay = directors.map((director) => {

    const directedMovies = director.movies.map((movie) => <li key={movie}>{movie}</li>)
    
    return (
      <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>{directedMovies}</ul>
      </div>
    )

  })

  return <div>
    <h1>Directors Page</h1>
    {directorsToDisplay}
  </div>;
}

export default Directors;
