const {ApolloServer, gql} = require('apollo-server')
const {mainCards, animals, categories} = require('./data')

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
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
    byId(id: ID!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
`

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    categories: () => categories,
    category: (parent, {slug}, context) => {
      console.log(slug)
      let categoryToFind = categories.find(
        (anim) => anim.slug.toLowerCase() === slug.toLowerCase(),
      )
      return categoryToFind
    },
    animals: () => animals,
    animal: (parent, {slug}, context) => {
      console.log(slug)
      let animalToFind = animals.find(
        (anim) => anim.slug.toLowerCase() === slug.toLowerCase(),
      )
      return animalToFind
    },
    byId: (parent, {id}, context) => {
      console.log(id)
      let animalToFind = animals.find((anim) => anim.id === id)
      return animalToFind
    },
  },
  Category: {
    animals: (parent, args, context) => {
      console.log(parent)
      return animals.filter((ani) => ani.category === parent.id)
    },
  },
  Animal: {
    category: (parent, args, context) => {
      console.log(parent)
      return categories.find((cate) => cate.id === parent.category)
    },
  },
}

const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
