import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonLogic from './Logic'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("39-44-5323523")
  const [filteredPersons, setFilteredPersons] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [notification, setNotification] = useState({isNotification: false, type:'', message: ''})

  useEffect(() => {
    PersonLogic
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
      .catch(error => console.log(error)
      )
  }, [])

  const AddingName = (event) => {
    event.preventDefault()
    const tempPerson = {
      name: newName,
      number: newNumber
    }


    // checking if persons already has an object with the new name
    const existPerson = persons.find(p => p.name === newName)
    if (existPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
        PersonLogic
          .update(existPerson.id, tempPerson)
          .then(changedPerson => {
            console.log('updated')
            setPersons(persons.map(p => p.id === changedPerson.id ? changedPerson : p))
            setNewName('')
            setNewNumber("39-44-5323523")
            setNotification({isNotification: true, type: 'success', message: `Successfully changed ${newName}`})
            setTimeout(() => setNotification({...notification, isNotification: false}), 3000)
          })
          .catch(error => {
            console.log(error)            
            setNotification({isNotification: true, type: 'warning', message: `Information of ${newName} has already removed from server`})
            setTimeout(() => setNotification({...notification, isNotification: false}), 3000)
            setPersons(persons.filter(p => p.id !== existPerson.id))
          })
      }
    }
    else {
      PersonLogic
        .create(tempPerson)
        .then(newPerson => {
          console.log('inserted')
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber("39-44-5323523")
          setNotification({isNotification: true, type: 'success', message: `Successfully added ${newName}`})
          setTimeout(() => setNotification({...notification, isNotification: false}), 3000)
        })
        .catch(error => console.log(error))
    }
  }

  const deletePerson = person => {
    if (window.confirm("Do you really want to delete this name?")) {
      PersonLogic
        .delete(person.id)
        .then(res => {
          setNotification({isNotification: true, type: 'warning', message: 'Successfully deleted'})
          setTimeout(() => setNotification({...notification, isNotification: false}), 3000)
          console.log("deleted")
          setPersons(persons.filter(p => p.id !== person.id))

        })
        .catch(error => {
          setNotification({isNotification: true, type: 'warning', message: `Information of ${person.name} has already removed from server`})
          setTimeout(() => setNotification({...notification, isNotification: false}), 3000)
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  const Persons = () => {
    if (isFiltered)
      return (
        <div>
          {filteredPersons.map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
        </div>
      )
    else
      return (
        <div>
          {persons.map((person) => <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>)}
        </div>
      )
  }

  const filter = (event) => {
    
    setIsFiltered(!!event.target.value)

    if (isFiltered) {
      const tempFiltered = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
      setFilteredPersons(tempFiltered)
      console.log(filteredPersons)
    }

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filter} />
      {notification.isNotification ?  <div className={notification.type}>{notification.message}</div> : <></>}
      <h2>Add a new</h2>
      <PersonForm AddingName={AddingName} newName={newName} setNewName={setNewName} setNewNumber={setNewNumber} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons />

    </div>
  )
}

export default App