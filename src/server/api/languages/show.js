import LanguageSerializer from '../../serializers/language_serializer'
import Language from '../../models/language'

const route = async (req, res, trx) => {

  const language = await Language.query(qb => {
    qb.innerJoin('users_languages', 'users_languages.language_id', 'languages.id')
    qb.where('users_languages.user_id', req.user.get('id'))
    qb.where('languages.id', req.params.id)
  }).fetch({
    transacting: req.trx
  })

  res.status(200).json({
    data: LanguageSerializer(language)
  })



}

export default route
