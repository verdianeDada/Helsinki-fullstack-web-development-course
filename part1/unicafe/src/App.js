import { useState } from 'react'

const Button = (props) => {
  const {onClick, text} = props
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {

  const {good, neutral, bad} = props

  const all = good + bad + neutral
  const average = (good - bad) / (good + bad + neutral)
  const positive = ((good / (good + bad + neutral)) * 100)+" %"
  
  if (good > 0 || bad >0 || neutral > 0)
    return (
      <div>
        <StatisticLine text="Good" value = {good}/>
        <StatisticLine text="Neutral" value = {neutral}/>
        <StatisticLine text="Bad" value = {bad}/>
        <StatisticLine text="All" value = {all}/>
        <StatisticLine text="Average" value = {average}/>
        <StatisticLine text="Positive" value = {positive}/>
      </div>
    )
  return (
    <p>No feedback given</p>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const newGood = () => setGood(good + 1)
  const newNeutral = () => setNeutral(neutral + 1)
  const newBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={newGood} text = "Good"/>
      <Button onClick={newNeutral}text="Neutral" />
      <Button onClick={newBad} text="Bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App