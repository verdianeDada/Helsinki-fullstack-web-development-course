const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password>')
    ptocess.exit(1)    
}
 
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://atlas:${password}@cluster0.chdfxaq.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    "name": "Arto Hellas",
    "number": "39-40-123456"
})

mongoose
    .connect(url)
    .then(result => {
        console.log('Connected')
        return person.save()
    })
    .then(() => {
        console.log('note saved')
        return mongoose.connection.close()
    })
    .catch(error => console.log(error)
    )
