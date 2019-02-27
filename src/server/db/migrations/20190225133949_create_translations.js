exports.up = function(knex, Promise) {
  return knex.schema.createTable('translations', table => {
    table.increments('id').unsigned().primary()
    table.integer('label_id').unsigned()
    table.foreign('label_id').references('labels.id')
    table.integer('language_id').unsigned()
    table.foreign('language_id').references('languages.id')
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.boolean('is_hightlighted')
    table.string('text')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translations')
}
