import TranslationSerializer from '../../serializers/translation_serializer'
import Translation from '../../models/translation'

const route = async (req, res, trx) => {

  const translation = await Translation.query(qb => {
    qb.where('id', req.params.id)
  }).fetch({
    transacting: req.trx
  })

  await translation.save({
    user_id: req.user.get('id'),
    text: req.body.text,
    is_hightlighted: req.body.is_hightlighted
  }, {
    patch: true,
    transacting: req.trx
  })

  await translation.load(['label','language','user'], {
    transacting: req.trx
  })

  res.status(200).json({
    data: TranslationSerializer(translation)
  })

}

export default route
