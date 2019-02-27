import LanguageSerializer from '../../serializers/language_serializer'
import transaction from '../../utils/transaction'
import Language from '../../models/language'

const route = transaction(async (req, res, trx) => {

  await req.user.load('languages', { transacting: trx })

  res.status(200).json({
    data: req.user.related('languages').map(LanguageSerializer)
  })

})

export default route
