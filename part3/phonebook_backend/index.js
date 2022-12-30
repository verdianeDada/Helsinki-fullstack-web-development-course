const express = require('express')
// const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
// morgan.token('body', req => {
//   return req.method === "POST"? JSON.stringify(req.body): ''
// })
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person)
    res.json(person)
  else
    res.status(404).send(`There is not a person with the id ${id}`)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    persons = persons.filter(p => p.id !== id)
    console.log('deleted')
    res.status(204).end()
  }
  else
    res.status(404).send(`There is not a person with the id ${id}`)
})

app.post('/api/persons', (req, res) => {
  const person = req.body

  if (!req.body.name || !req.body.number)
    res.json({ error: "content missing" })
  // const id = persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 0
  const existing = persons.find(p => p.name === person.name)
  console.log(existing)
   
  if (existing)
    res.json({ error: "Name must be unique" })

  person.id = Math.floor(Math.random() * 10000),
    persons = persons.concat(person)
  console.log('inserted')
  res.json(person)
})

app.get('/info', (req, res) => {
  const time = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${time}</p>`)
})

const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)

})