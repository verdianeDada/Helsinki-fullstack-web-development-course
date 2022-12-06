import Country from "./Country"

const Countries = ({ setShowOneItem, filteredCountries, setFilteredCountries, showOneItem  }) => {

  const show = (index) => () => {
    setFilteredCountries([filteredCountries[index]])
    setShowOneItem(true)
    console.log(index)
    console.log(filteredCountries)
  }
  
  const country = filteredCountries[0]
  
  if (showOneItem){
    return (
      <div>
        <Country country={country}/>
      </div>
    )
  }
  else
    return(
      <div>
        {
          filteredCountries.map((country, index) => 
            <p key={index}>{country.name.common}
              <button onClick = {show(index)}>Show</button>
            </p>
          )
        }
      </div>
    )
}
export default Countries