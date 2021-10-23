const Animal = {
  category: (parent, args, context) => {
    console.log(parent)
    return categories.find((cate) => cate.id === parent.category)
  },
}

module.exports = Animal
