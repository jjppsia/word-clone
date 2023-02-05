import React from 'react'

import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess({ answer, value }) {
  const result = checkGuess(value, answer)

  return (
    <p className='guess'>
      {range(5).map((num) => {
        const className = result ? `cell ${result[num].status}` : 'cell'
        const letter = result ? result[num].letter : undefined

        return (
          <span key={num} className={className}>
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
