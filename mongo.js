const mongoose = require('mongoose')

const [, , password, name, number] = process.argv

const url = `mongodb+srv://cz-fs-helsinki:${password}@cluster0.otgwe.mongodb.net/phone-app-2021?retryWrites=true&w=majority`
mongoose.connect(url)

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>',
  )
  console.log(
    'Arguemnts to add entries to phonebook: <password> <name> <number>',
  )
  process.exit(1)
}

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
    process.exit(0)
  })
} else {
  const person = new Person({
    name,
    number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
