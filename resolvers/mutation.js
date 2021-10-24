const {v4} = require('uuid')
const Mutation = {
  addAnimal: (parent, args, {animals}) => {
    const {
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    } = args

    const newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    }

    animals.push(newAnimal)
    return newAnimal
  },
}

module.exports = Mutation
