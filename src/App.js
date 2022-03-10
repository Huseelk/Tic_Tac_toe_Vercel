import { useState } from 'react';
import Table from './components/Table';
import { calculateWinner } from './components/calculateWinner.js';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayed, setXPlayed] = useState(true);
  const winner = calculateWinner(board);

  const handlePlayerClick = (index) => {
    const boardCopy = [...board];
    //button disable
    if ( winner || boardCopy[index] ) return
    //X or O
    boardCopy[index] = xPlayed ? 'X' : 'O';
    //Set state
    setBoard(boardCopy);
    setXPlayed(!xPlayed);
  }
  
  const handleRestartClick = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <button onClick={handleRestartClick} className='restartButton'>Restart</button>
      <Table square={board} click={handlePlayerClick} />
      <span className='winnerSpan'> Winner: {winner} </span>
    </div>
  );
}

export default App;
