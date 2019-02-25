exports.up = function(knex, Promise) {
  return knex.schema.createTable('translate_labels', table => {
    table.increments('id').unsigned().primary()
    table.string('name')
    table.text('description')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translate_labels')
}
