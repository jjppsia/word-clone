import React from 'react'

function GameForm({ handleAddGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    handleAddGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        maxLength={5}
        value={tentativeGuess}
        required
        onChange={(e) => {
          setTentativeGuess(e.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GameForm
