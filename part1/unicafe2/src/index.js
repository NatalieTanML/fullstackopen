import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = ((good / all) * 100 || 0) + "%"

  return (
    <table>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </table>
  )
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodValue = () => {
    setGood(good + 1)
  }
  const handleNeutralValue = () => {
    setNeutral(neutral + 1)
  }
  const handleBadValue = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title="give feedback" />
      <Button text="good" onClick={handleGoodValue} />
      <Button text="neutral" onClick={handleNeutralValue} />
      <Button text="bad" onClick={handleBadValue} />
      
      <Header title="statistics" />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)