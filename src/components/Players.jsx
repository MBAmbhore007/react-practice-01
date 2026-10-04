export default function Players({name, Symbol}){
    return (
          <li>
            <span className="player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{Symbol}</span>
            </span>
            <button>Edit</button>
          </li>
    )
}