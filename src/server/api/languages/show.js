import LanguageSerializer from '../../serializers/language_serializer'
import UserSerializer from '../../serializers/user_serializer'
import Language from '../../models/language'
import User from '../../models/user'

const route = async (req, res, trx) => {

  const language = await Language.where({
    id: req.params.id
  }).fetchAll({
    withRelated: ['users']
  })


  res.status(200).json({
    data: language
  })



}

export default route
