import { useState } from 'react'
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const newGood = () => setGood(good + 1)
  const newNeutral = () => setNeutral(neutral + 1)
  const newBad = () => setBad(bad + 1)

  const all = good + bad + neutral
  const average = (good-bad)/(good+bad+neutral)
  const positive = (good/(good+bad+neutral))*100


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={newGood}>Good</button>
      <button onClick={newNeutral}>Neutral</button>
      <button onClick={newBad}>Bad</button>
      <h1>Statistics</h1>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {average}</p>
        <p>Positive {positive} %</p>
      </div>
    </div>
  )
}
export default App