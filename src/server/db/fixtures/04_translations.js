const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('translations').del()

  await knex('translations').insert([
    {
      language_id: 1,
      label_id: 1,
      user_id: 1,
      is_hightlighted: false,
      text: 'Bonjour',
      created_at: moment(),
      updated_at: moment()
    },
    {
      language_id: 2,
      label_id: 1,
      user_id: 1,
      is_hightlighted: false,
      text: 'Hola',
      created_at: moment(),
      updated_at: moment()
    },
    {
      language_id: 3,
      label_id: 1,
      user_id: 1,
      is_hightlighted: false,
      text: '你好',
      created_at: moment(),
      updated_at: moment()
    },
    {
      language_id: 4,
      label_id: 1,
      user_id: 1,
      is_hightlighted: false,
      text: 'こんにちは',
      created_at: moment(),
      updated_at: moment()
    },
  ])

}
