exports.up = function(knex, Promise) {
  return knex.schema.createTable('translate_users_languages', table => {
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('translate_users.id')
    table.integer('language_id').unsigned()
    table.foreign('language_id').references('translate_languages.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translate_users_languages')
}
