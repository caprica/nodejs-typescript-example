import './config'
import { faker } from '@faker-js/faker'
import { capitalize, kebabCase, sortBy } from 'lodash'

// Dump environment variables, any additional environment variables declared in
// a .dotenv file should be included in this dump, sorted using lodash
const envvars = sortBy(Object.keys(process.env))
envvars.forEach(envvar => console.log(`${envvar} = ${process.env[envvar]}`))
console.log('')

// Some basic Faker tests, incorporating some lodash utilities
console.log(`name: ${faker.name.fullName()}`)
console.log('')

const id = `${faker.word.verb()} ${faker.word.adjective()} ${faker.word.noun()}`
console.log(`slug: ${kebabCase(id)}`)
console.log(`phrase: ${capitalize(id)}.`)
console.log('')
