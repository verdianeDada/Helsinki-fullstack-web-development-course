import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const AddingName = (event) => {
    event.preventDefault()  
    const tempNewName = {
      name: newName
    }
    const exists = persons.map(person => JSON.stringify(person) === JSON.stringify(tempNewName)) 
    console.log(exists)
    
    exists ? alert(newName + " is already added to phonebook")
      : alert(newName + " is not yet in phonebook")
      // : setPersons(persons.concat(tempNewName))

    console.log(persons)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {AddingName}>
        <div>
          name: <input type="text" required placeholder = "New Name" value={newName} onChange = { (event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map( (person, index) => <p key={index}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App