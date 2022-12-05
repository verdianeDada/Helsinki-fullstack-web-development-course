import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Ada Lovelace')
  const [newNumber, setNewNumber] = useState("39-44-5323523")
  const [filteredPersons, setFilteredPersons] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect (() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      const persons = response.data
      setPersons(persons)
    })
  }, [])

  const AddingName = (event) => {
    event.preventDefault()
    const tempNewPerson = {
      name: newName,
      number: newNumber
    }

    // const exists= persons.map(person => person.name === tempNewPerson.name ) 

    // checking if persons already has an object with the new name
    persons.some(person => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(tempNewPerson))
  }
  const Persons = () => {
    if (isFiltered)
      return (
        <div>
          {filteredPersons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
        </div>
      )
    else
      return (
        <div>
          {persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
        </div>
      )
  }

  const filter = (event) => {
    
    event.target.value
      ? setIsFiltered(true)
      : setIsFiltered(false)
console.log(isFiltered);

    if (isFiltered) {
      const tempFiltered = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
      setFilteredPersons(tempFiltered)
      console.log(filteredPersons)
    }

  }
  return (
    <div>
      <h2>Phonebook</h2>
       <Filter onChange = {filter}/>
        <h2>Add a new</h2>
        <PersonForm AddingName = {AddingName} newName = {newName} setNewName = {setNewName} setNewNumber = {setNewNumber}  newNumber = {newNumber} />
      <h2>Numbers</h2>
      <Persons />

    </div>
  )
}

export default App