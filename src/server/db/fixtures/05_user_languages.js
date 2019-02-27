exports.seed = async (knex, Promise) => {

  await knex('users_languages').del()

  await knex('users_languages').insert([
    {
      user_id: 1,
      language_id: 1
    },
    {
      user_id: 1,
      language_id: 4
    },
    {
      user_id: 2,
      language_id: 2
    },
    {
      user_id: 2,
      language_id: 3
    }
  ])

}
