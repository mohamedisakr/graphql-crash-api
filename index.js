const {ApolloServer, gql} = require('apollo-server')
const {mainCards, animals} = require('./data')

const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]
    slug: String!
    stock: String!
    onSale: Boolean
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
  }
`

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, {slug}, context) => {
      console.log(slug)
      let animalToFind = animals.find(
        (anim) => anim.slug.toLowerCase() === slug.toLowerCase(),
      )
      return animalToFind
    },
  },
}

const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
