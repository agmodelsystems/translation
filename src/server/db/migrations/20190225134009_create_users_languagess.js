exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_languages', table => {
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.integer('language_id').unsigned()
    table.foreign('language_id').references('languages.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_languages')
}
