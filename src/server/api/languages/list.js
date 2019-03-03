import LanguageSerializer from '../../serializers/language_serializer'

const route = async (req, res, trx) => {

  await req.user.load('languages', {
    transacting: req.trx
  })

  res.status(200).json({
    data: req.user.related('languages').map(LanguageSerializer)
  })

}

export default route
