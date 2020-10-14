// src/components/Scoreboard.js
import React, { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  function incrementScore(playerId) {
    const updatedPlayers = players.map(player=>{
      if(player.id===playerId) {
         return {
           id:player.id,name:player.name,score:player.score+1
         }
      } else {
        return player
      }
    })
    set_players(updatedPlayers)
  }

  function sortByScore(a, b){
      return b.score - a.score;
    };
  

  const sortedPlayers = [...players].sort(sortByScore);
  console.log(sortedPlayers)

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {sortedPlayers.map((player,index)=>{
        return <Player key={index+1} id={player.id} name={player.name} score={player.score} incrementScore={incrementScore}/>
      })}
      <AddPlayerForm addNewPlayer={(name)=>{
        set_players([...players,{id:players.length+2,name:name,score:0}])
      }}/>
      
    </div>
  );
}