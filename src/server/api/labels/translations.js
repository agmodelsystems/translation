import Translation from '../../models/translation'
import TranslationSerializer from '../../serializers/translation_serializer'

const route = async (req, res, trx) => {

  const translations = await Translation.query(qb => {
    qb.where('label_id', req.params.label_id)
  }).fetchAll({
    withRelated: ['label','language','user']
  })

  res.status(200).json({
    data: translations.map(TranslationSerializer)
  })

}

export default route
