require('dotenv').config()
const express = require('express')
const app = express()
// const path = require('path')
// const favicon = require('serve-favicon')
// const fs = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())

morgan.token('info', req => JSON.stringify(req.info))
// const appLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'))

app.use(express.static('build'))
app.use(express.json())
app.use(
  morgan(
    ':method :url :status :res[content-length] :response-time ms :info',
    // { stream: appLogStream },
  ),
)

// GET Info Route
app.get('/info', async (req, res) => {
  const entries = await Person.find({}).then(people => people.length)

  res.send(
    `<div style="margin: 16px 0 0 8px; font-size: 1.3rem">
    <p>Phonebook has info for <span style="color: dodgerblue">${entries}</span> people</p>
    <p>${new Date()}</p>
    </div>`,
  )
})

// GET All Route
app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then(notes => {
      res.json(notes)
    })
    .catch(error => next(error))
})

// SHOW Route
app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

// CREATE ROUTE
app.post('/api/persons', (req, res, next) => {
  const body = req.body
  req.info = body

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedPerson => {
      res.json(savedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })

    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => res.status(204).end())
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
