import React from 'react'
import { useState } from 'react'

const MikeNameChanger = () => {
    const [game, setGame]=useState({
    id: 1,
    player: {
        name:"John",
    },
    })

    const handleClick =()=>{
        {setGame({...game, 
            player: {
                ...game.player,
                name: "Bob",
            }
        })}
    }
  
    return (
        <div>
        <p>Player Name: {game.player.name}</p>
         <button onClick={handleClick}>Change Name to Bob</button>
        </div>
    )
}

export default MikeNameChanger
