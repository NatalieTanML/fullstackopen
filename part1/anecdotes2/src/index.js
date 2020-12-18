import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [maxVotes, setMaxVotes] = useState(0)

  const handleNextClick = () => {
    let i = Math.floor(Math.random() * anecdotes.length)
    while (i === selected)
      i = Math.floor(Math.random() * anecdotes.length)
    setSelected(i)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    const selectedAnecdote = votes[selected]
    if (!votes[maxVotes] || selectedAnecdote >= votes[maxVotes])
      setMaxVotes(selected)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
      <Button text="vote" onClick={handleVoteClick} />
      <Button text="next anecdote" onClick={handleNextClick} />

      <Header text="Anecdote with most votes" />
      <Anecdote text={props.anecdotes[maxVotes]} votes={votes[maxVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)