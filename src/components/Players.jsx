import { useState } from "react"

export default function Players({name, Symbol, isActive}){
    const [isEditing, setEditing] = useState(false)
    const [playerName, setPlayerName]= useState(name);

    function hnadleChange(event){
      console.log('event.target', event.target);
      setPlayerName(event.target.value)
    }


    function setEdit(){
        // setEditing(isEditing ? false : true);
        //    setEditing(!isEditing);
           setEditing((edit) => !edit);

    }



    return (
          <li className={isActive ? 'active': undefined}>
            <span className="player">
            {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={hnadleChange}/>}

            <span className="player-symbol">{Symbol}</span>
            </span>
            <button onClick={setEdit} >{!isEditing ? 'Edit' : 'Save'}</button>
          </li>
    )
}