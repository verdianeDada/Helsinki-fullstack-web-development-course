const Country = ({ country }) => {

  let languages = []
  const keys = Object.keys(country.languages)
  keys.forEach(key => {
    languages = languages.concat(country.languages[key])
  })

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital : {country.capital[0]}</p>
      <p>Area : {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((language, index) => <li key={index}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt='flag' />
    </div>
  )
}

export default Country