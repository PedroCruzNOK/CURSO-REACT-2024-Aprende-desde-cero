import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null significa que NO hay ganador, false que hay un empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardTocheck) => {
    //revisamos todas las combinaciones ganadoras
    // para ver si x o o gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardTocheck[a] &&
        boardTocheck[a] === boardTocheck[b] &&
        boardTocheck[a] === boardTocheck[c]
      ) {
        return boardTocheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion
    //si ya tiene algun otro valor
    if (board[index] || winner) return
    //actualizar el turno
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Taco Toe</h1>
        <button onClick={resetGame}>Reset to Game</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O} >{TURNS.O}</Square>
        </section>

        {
          winner != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false
                      ? 'Empate'
                      : 'Gano: '
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
