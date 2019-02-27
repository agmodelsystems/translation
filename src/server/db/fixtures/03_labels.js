const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('translate_labels').del()

  await knex('translate_labels').insert([
    {
      name: 'Hello',
      description: 'Greeting',
      created_at: moment(),
      updated_at: moment()
    },
  ])

}
