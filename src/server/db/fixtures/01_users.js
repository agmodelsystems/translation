const moment = require('moment')

exports.seed = async (knex, Promise) => {

  await knex('users').del()

  await knex('users').insert([
    {
      first_name: 'Greg',
      last_name: 'Kops',
      email: 'greg@thinktopography.com',
      username: 'mochini',
      password_salt: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO',
      password_hash: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO2YGhQJ.nqv7fLT7mNFuw2YDEMH3/uPa',
      created_at: moment(),
      updated_at: moment()
    },
    {
      first_name: 'Vivian',
      last_name: 'Wu',
      email: 'ziwei@agmodelsystems.com',
      username: 'vivian',
      password_salt: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO',
      password_hash: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO2YGhQJ.nqv7fLT7mNFuw2YDEMH3/uPa',
      created_at: moment(),
      updated_at: moment()
    },
    {
      first_name: 'Alex',
      last_name: 'Converse',
      email: 'alexconverse3@gmail.com',
      username: 'alex',
      password_salt: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO',
      password_hash: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO2YGhQJ.nqv7fLT7mNFuw2YDEMH3/uPa',
      created_at: moment(),
      updated_at: moment()
    },
    {
      first_name: 'Caroline',
      last_name: 'Rasmussen',
      email: 'caroline@agmodelsystems.com',
      username: 'caroline',
      password_salt: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO',
      password_hash: '$2a$10$TaGBczo2HaQDe1Q4ZwFFbO2YGhQJ.nqv7fLT7mNFuw2YDEMH3/uPa',
      created_at: moment(),
      updated_at: moment()
    }
  ])

}
