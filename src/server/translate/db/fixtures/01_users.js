const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('translate_users').del()

  await knex('translate_users').insert([
    {
      first_name: 'Greg',
      last_name: 'Kops',
      email: 'greg@thinktopography.com',
      username: 'mochini',
      password_salt: '',
      password_hash: '',
      created_at: moment(),
      updated_at: moment()
    },
    {
      first_name: 'Vivian',
      last_name: 'Wu',
      email: 'ziwei@agmodelsystems.com',
      username: 'vivian',
      password_salt: '',
      password_hash: '',
      created_at: moment(),
      updated_at: moment()
    },
  ])

}
