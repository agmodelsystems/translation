const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('translate_languages').del()

  await knex('translate_languages').insert([
    {
      code: 'fr',
      name: 'French',
      created_at: moment(),
      updated_at: moment()
    },
    {
      code: 'es',
      name: 'Spanish',
      created_at: moment(),
      updated_at: moment()
    },
    {
      code: 'ch',
      name: 'Chinese',
      created_at: moment(),
      updated_at: moment()
    },
    {
      code: 'jp',
      name: 'Japanese',
      created_at: moment(),
      updated_at: moment()
    },
  ])

}
