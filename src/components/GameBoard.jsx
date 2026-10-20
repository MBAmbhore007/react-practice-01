import { useState } from "react";

const intialBoardValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const[game,setgame]=useState(intialBoardValues);

    function handleSquare(rowIdx, colIdx){
        setgame((prevState)=>{
            const updated =[...prevState.map(innerArray => [...innerArray])];
            updated[rowIdx][colIdx]=activePlayerSymbol;
            return updated;
        })

        onSelectSquare();
    }
  return (
    <ol id="game-board">
      {game.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((Symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleSquare(rowIndex,colIndex)}>{Symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
