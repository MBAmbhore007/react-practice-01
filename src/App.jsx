import GameBoard from "./components/GameBoard"
import Players from "./components/Players"

function App() {


  return (
    <main>
      <div id="game-container">
        Players
        <ol id="players">
        <Players name="Player 1" Symbol="X" />
        <Players name="Player 1" Symbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </main>

  )
}

export default App
