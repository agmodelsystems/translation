exports.up = function(knex, Promise) {
  return knex.schema.createTable('translate_languages', table => {
    table.increments('id').unsigned().primary()
    table.string('code')
    table.string('name')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translate_languages')
}
