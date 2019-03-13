const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('labels').del()

  await knex('labels').insert([
    {
      name: 'Hello',
      description: 'Greeting',
      english: 'Hello',
      created_at: moment(),
      updated_at: moment()
    },
  ])

}
