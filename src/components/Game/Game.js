import React from 'react'

import GameForm from '../GameForm'
import GuessResults from '../GuessResults'
import LostBanner from '../LostBanner'
import WonBanner from '../WonBanner'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { WORDS } from '../../data'
import { sample } from '../../utils'

const answer = sample(WORDS)

console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('playing')

  const handleAddGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess]

    setGuesses(nextGuesses)

    if (tentativeGuess === answer) {
      setGameStatus('won')
    }

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GameForm handleAddGuess={handleAddGuess} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
