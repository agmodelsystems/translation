import Knex from 'knex'

const knex = Knex({
  client: 'pg',
  connection: {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
},
  useNullAsDefault: true,
  pool: {
    min: 3,
    max: 5
  }
})

/*connection: {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
},*/

export default knex
