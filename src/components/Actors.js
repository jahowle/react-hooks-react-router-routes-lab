import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsToDisplay = actors.map((actor) => {

    const movies = actor.movies.map((movie) => <li key={movie}>{movie}</li>)

    return(
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>{movies}</ul>
      </div>
    )
  })

  return <div>
    <h1>Actors Page</h1>
    {actorsToDisplay}
  </div>;
}

export default Actors;
