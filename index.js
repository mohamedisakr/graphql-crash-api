const {ApolloServer, gql} = require('apollo-server')
const {mainCards} = require('./data')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard {
    title: String
    image: String
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
  }
`

const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
  },
}

const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
