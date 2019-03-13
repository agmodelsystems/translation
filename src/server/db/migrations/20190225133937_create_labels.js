exports.up = function(knex, Promise) {
  return knex.schema.createTable('labels', table => {
    table.increments('id').unsigned().primary()
    table.string('name')
    table.text('description')
    table.text('english')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('labels')
}
