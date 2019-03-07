import LabelSerializer from '../../serializers/label_serializer'
import Label from '../../models/label'

const route = async (req, res, trx) => {

  const label = await Label.query(qb => {
    qb.where('id', req.params.id)
  }).fetch({
    transacting: req.trx
  })

  if(!label) return res.status(404).json({
    message: 'Could not find label'
  })

  res.status(200).json({
    data: LabelSerializer(label)
  })

}

export default route
