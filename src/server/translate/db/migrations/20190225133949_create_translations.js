exports.up = function(knex, Promise) {
  return knex.schema.createTable('translate_translations', table => {
    table.increments('id').unsigned().primary()
    table.integer('label_id').unsigned()
    table.foreign('label_id').references('translate_labels.id')
    table.integer('language_id').unsigned()
    table.foreign('language_id').references('translate_languages.id')
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('translate_users.id')
    table.boolean('is_hightlighted')
    table.string('text')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translate_translations')
}
