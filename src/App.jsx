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
        GAME BOARD
      </div>
    </main>

  )
}

export default App
