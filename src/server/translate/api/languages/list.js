import Language from '../../models/language'
import LanguageSerializer from '../../serializers/language_serializer'

const route = async (req, res) => {

  await req.user.load('languages')

  res.status(200).json({
    data: req.user.related('languages').map(LanguageSerializer)
  })

}

export default route
