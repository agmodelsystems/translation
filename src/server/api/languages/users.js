import User from '../../models/user'
import Language from '../../models/language'
import UserSerializer from '../../serializers/user_serializer'
import LanguageSerializer from '../../serializers/language_serializer'
import knex from '../../lib/knex'

const route = async (req, res, trx) => {

  const check = await Language.query(qb => {
    qb.innerJoin('users_languages', 'users_languages.language_id', 'languages.id')
    qb.where('users_languages.user_id', req.body.user_id)
    qb.where('languages.id', req.body.language_id)
  }).fetch({
    transacting: req.trx
  })

  if(check) return res.status(404).json({
    message: 'The relationship already exists'
  })

/////////////////////////////////////////////////////////
  const user = await User.query(qb => {
    qb.where('id', req.body.user_id)
  }).fetch({
    transacting: req.trx
  })

  if(!user) return res.status(404).json({
    message: 'Could not find user'
  })

  await knex('users_languages').transacting(req.trx).insert({
    user_id: req.body.user_id,
    language_id: req.body.language_id
  })

  const language = await Language.query(qb => {
    qb.where('id', req.body.language_id)
  }).fetch({
    transacting: req.trx,
    withRelated: ['users']
  })

  res.status(200).json({
    data: {
      ...LanguageSerializer(language),
      users: language.related('users').map(UserSerializer)
    }
  })

}

export default route
