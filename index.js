'use strict'

const axios = require('axios')

exports.pokeapi = (request, response) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(function (res) {
      response.status(200).send(res.data)
    })
}
