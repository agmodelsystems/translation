import TranslationSerializer from '../../serializers/translation_serializer'
import Translation from '../../models/translation'

const route = async (req, res, trx) => {

  const translation = await Translation.where({
    // language_id: req.params.language_id,
    id: req.params.id
  }).fetchAll()


  res.status(200).json({
    data: (translation)
  })

}

export default route
