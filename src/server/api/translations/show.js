import TranslationSerializer from '../../serializers/translation_serializer'
import Translation from '../../models/translation'

const route = async (req, res, trx) => {

  const translation = await Translation.where({
    language_id: req.params.language_id,
    id: req.params.id
  }).fetch({
    withRelated: ['label','language','user'],
    transacting: req.trx
  })

  if(!translation) return res.status(404).json({
    message: 'Could not find translation'
  })

  res.status(200).json({
    data: TranslationSerializer(translation)
  })

}

export default route
