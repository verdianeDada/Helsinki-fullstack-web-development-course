const PersonForm = ({ AddingName, newName, setNewName, setNewNumber, newNumber }) => {
  return (
    <div>
      <form onSubmit={AddingName}>
        <div>
          Name: <input type="text" required value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number: <input type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{7}" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>
    </div>
  )
}
export default PersonForm