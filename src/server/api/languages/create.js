import LanguageSerializer from '../../serializers/language_serializer'
import Language from '../../models/language'
import User from '../../models/user'
import UserSerializer from '../../serializers/user_serializer'

const route = async (req, res, trx) => {

  const user = await User.query(qb => {
    qb.where('id', req.user.get('id'))
  }).fetch({
    transacting: req.trx
  })

  if(!user) return res.status(404).json({
    message: 'Could not find user'
  })


  const language = await Language.forge({
    name: req.body.name,
    code: req.body.code
  }).save(null, {
    transacting: req.trx

  }).tap(function (lg) {
      lg.users().attach(user, {
      transacting: req.trx
    })
  })



  res.status(200).json({
    data: LanguageSerializer(language)
  })

}

export default route
