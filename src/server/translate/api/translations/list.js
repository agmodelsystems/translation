import Translation from '../../models/translation'
import TranslationSerializer from '../../serializers/translation_serializer'

const route = async (req, res) => {

  const translations = await Translation.where({
    language_id: req.params.language_id
  }).fetchAll({
    withRelated: ['label','language','user']
  })

  res.status(200).json({
    data: translations.map(TranslationSerializer)
  })

}

export default route
