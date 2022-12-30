import axios from "axios"

const baseUrl = 'http://localhost:3001/api/persons'


const create = NewPerson => {
    const request = axios.post(baseUrl, NewPerson)
    return request.then(res => res.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const update = (id, person) => {
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(res => res.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}

export default {
    create,
    delete: deletePerson,
    getAll,
    update
}