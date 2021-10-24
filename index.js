const {ApolloServer} = require('apollo-server')
const {mainCards, animals, categories} = require('./data')
const typeDefs = require('./schema')
const Query = require('./resolvers/query')
const Category = require('./resolvers/category')
const Animal = require('./resolvers/animal')

const resolvers = {
  Query,
  Category,
  Animal,
}

const context = {mainCards, animals, categories}

const server = new ApolloServer({typeDefs, resolvers, context})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
