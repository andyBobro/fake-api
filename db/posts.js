const faker = require('faker')
faker.locale = 'ru';

const posts = function (count) {
  let res = []

  res.length = count

  res.fill({})

  return res.map((item) => {
    return {
      id: faker.random.uuid(),
      author: faker.name.findName(),
      date: faker.date.past(),
      name: faker.lorem.sentence(),
      text: faker.lorem.paragraphs()
    }
  })
}

module.exports = posts