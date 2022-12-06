import {useState, useEffect} from 'react'
import axios from 'axios'

import Countries from './components/Countries'
  
const App = () => {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchingValue, setSearchingValue] = useState('')
  const [warning, setWarning] = useState({isWarning: true,value:'Please type a keyword for searching'})
  const [showOneItem, setShowOneItem] = useState(false)

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then( response => {
      setCountries(response.data)
      console.log(`data found: ${countries}`);

    })
    .catch(err => console.log(err))
  }, [])
  

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchingValue(event.target.value)

    if (event.target.value) {

      setFilteredCountries([])
      setShowOneItem(false)

      const tempFiltered = countries.filter(country => {
        // if(country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
          // console.log(`country name : ${country.name.common}`)
          return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
      })

      setFilteredCountries(tempFiltered)

      // console.log(`${event.target.value}: cela donne ${tempFiltered}`);
      // console.log(`${event.target.value}: cela countries donne ${filteredCountries}`);
      
      
      if (tempFiltered.length === 0)
        setWarning({isWarning: true, value:'No matching'})
      else if (tempFiltered.length === 1)
        {
          setShowOneItem(true)
          console.log(tempFiltered[0])
        }
      else if (tempFiltered.length > 10)
        setWarning({isWarning: true, value:'Too many matches, specify another filter'})
      else 
        setWarning({isWarning: false,value:''})
    }
    else
      setWarning({isWarning: true,value:'Please type a keyword for searching'})
  }
  return (
    <div>
      <form action="">
        Find countries <input type="text" value = {searchingValue} onChange = {handleSearch}/>
        {
          warning.isWarning
          ? <p>{warning.value}</p> 
          :  <Countries setShowOneItem = {setShowOneItem} setFilteredCountries = {setFilteredCountries} filteredCountries={filteredCountries} showOneItem = {showOneItem} />
        }
      </form> 
    </div>
  )
}

export default App