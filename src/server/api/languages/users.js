import User from '../../models/user'
import Language from '../../models/language'
import UserSerializer from '../../serializers/language_serializer'
import LanguageSerializer from '../../serializers/language_serializer'

const route = async (req, res, trx) => {

  const check = await Language.query(qb => {
    qb.innerJoin('users_languages', 'users_languages.language_id', 'languages.id')
    qb.where('users_languages.user_id', req.body.user_id)
    qb.where('languages.id', req.body.language_id)
  }).fetch({
    transacting: req.trx
  })

  if(check) return res.status(404).json({
    message: 'The relationship was already exist'
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

  const language = await Language.query(qb => {
    qb.where('id', req.body.language_id)
  }).fetch({
    transacting: req.trx
  }).tap(function (lg) {
      lg.users().attach(user, {
      transacting: req.trx
    })
  })

  await language.load(['users'], {
    transacting: req.trx
  })

  res.status(200).json({
    data: `${language.get("name")} was successfully added to ${user.get("email")}`
  })

}

export default route
