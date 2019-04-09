const _ = require('lodash')
const userData = []
const hamsterData = [
  {
    id: 1,
    name: 'Zepto',
    type: 'Speedball',
    src: 'public/images/hamster-1-final.png',
    results: []
  }, {
    id: 2,
    name: 'Milkshake',
    type: 'Speedball',
    src: 'public/images/hamster-2-final.png',
    results: []
  }, {
    id: 3,
    name: 'Fievel',
    type: 'Tiny Terror',
    src: 'public/images/hamster-3-final.png',
    results: []
  }, {
    id: 4,
    name: 'Baby Ham',
    type: 'Roller',
    src: 'public/images/hamster-4-final.png',
    results: []
  }, {
    id: 5,
    name: 'Tater',
    type: 'Stealth',
    src: 'public/images/hamster-5-final.png',
    results: []
  }, {
    id: 6,
    name: 'Peter Pan',
    type: 'ZigZagger',
    src: 'public/images/hamster-6-final.png',
    results: []
  }
]
const favorites = []
const raceData = [
  {
    id: 1,
    venue: 'Petco 2000',
    city: 'Seattle, WA',
    date: '04/29/17',
    results: []
  }, {
    id: 2,
    venue: 'Triscuit Circuit 4700',
    city: 'Daytona Beach, FL',
    date: '09/21/17',
    results: []
  }, {
    id: 3,
    venue: 'Kraft 35',
    city: 'Toyko, Japan',
    date: '07/14/17',
    results: []
  }
]

const User = {
  sync () { return Promise.resolve() },
  findOne (query) {
    console.log(query, userData)
    return Promise.resolve(_.find(userData,
      u => u.username === query.where.username || u.id === query.where.id))
  },
  findAll (query) {
    return Promise.resolve(userData.map(u => u[query.attributes[0]]))
  },
  create (user) {
    user.id = userData.length
    userData.push(user)
    return Promise.resolve()
  }
}

const UserFavorite = {
  sync () { return Promise.resolve() },
  findAll (query) {
    return Promise.resolve(favorites.filter(f => f.userId === query.where.userId))
  },
  destroy (query) {
    _.remove(favorites, f =>
      f.userId === query.where.userId && f.hamsterId === query.where.hamsterId)
    return Promise.resolve()
  },
  create (favorite) {
    favorites.push(favorite)
    return Promise.resolve()
  }
}

const Hamster = {
  getAll () {
    return Promise.resolve(hamsterData)
  },
  put (hamster) {
    hamsterData.push(hamster)
    return Promise.resolve()
  }
}

const Race = {
  get (table, id) {
    return Promise.resolve(_.find(raceData, r => r.id === id))
  },
  getAll () {
    return Promise.resolve(raceData)
  },
  put (race) {
    raceData.push(race)
    return Promise.resolve()
  }
}

module.exports = {
  User,
  UserFavorite,
  Hamster,
  Race
}
