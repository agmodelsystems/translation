exports.up = function(knex, Promise) {
  return knex.schema.createTable('translate_users', table => {
    table.increments('id').unsigned().primary()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('username')
    table.string('password_salt')
    table.string('password_hash')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('translate_users')
}
