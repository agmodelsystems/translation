import Knex from 'knex'

const knex = Knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  useNullAsDefault: true,
  pool: {
    min: 3,
    max: 5
  }
})

export default knex
