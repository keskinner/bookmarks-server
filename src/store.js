const uuid = require('uuid/v4')

const bookmarks = [
    { id: uuid(),
      title: "bookmark one",
      url: "example.com",
      description: "this is bookmark one",
      rating: 2
    },
    { id: uuid(),
      title: "bookmark two",
      url: "placeholder.com",
      description: "this is bookmark two",
      rating: 5
    }
]

module.exports = { bookmarks }