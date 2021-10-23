const Category = {
  animals: (parent, args, context) => {
    console.log(parent)
    return animals.filter((ani) => ani.category === parent.id)
  },
}

module.exports = Category
