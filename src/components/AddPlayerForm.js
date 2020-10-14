import React, { useState } from "react";

export default function AddPlayerForm(props) {

  const[newPlayer, setNewPlayer] = useState("")

  function addPlayer () {
props.addNewPlayer()
  }

  return (
    <div className="AddPlayerForm">
      <p>This is the form</p>
      <div style={{marginBottom:"15rem"}}>
        <input type="text" value={newPlayer} onChange={(event)=>{
          setNewPlayer(event.target.value)}}/>
      </div>
    </div>
  );
}