import React from "react";

export default function Player(props) {
  

  function incrementScore () {
    props.incrementScore(props.id)
    console.log("This player got a score",props.id, props.name)
  
  }

  return (
    <li className="Player">
      <p>{props.name}</p>
  <p>score:{props.score}</p>
  <button onClick={incrementScore}>+</button>
    </li>
  );
}