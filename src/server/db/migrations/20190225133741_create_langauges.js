exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', table => {
    table.increments('id').unsigned().primary()
    table.string('code')
    table.string('name')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('languages')
}
