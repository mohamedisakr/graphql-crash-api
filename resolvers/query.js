const Query = {
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
}

module.exports = Query
