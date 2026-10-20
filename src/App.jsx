import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((active)=> active === 'X'? 'O' : 'X')
  }


  return (
    <main>
      <div id="game-container" className="highlight-player">
        Players
        <ol id="players">
        <Players name="Player 1" Symbol="X" isActive={activePlayer=== 'X'} />
        <Players name="Player 1" Symbol="O" isActive={activePlayer ==='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>

  )
}

export default App
