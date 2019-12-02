const faker = require('faker')
faker.locale = 'ru';

const users = function (count) {
  let res = []

  res.length = count

  res.fill({})

  return res.map((item) => {
    return {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      job: faker.image.avatar()
    }
  })
}

module.exports = users