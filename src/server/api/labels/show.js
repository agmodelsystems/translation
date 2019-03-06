import LabelSerializer from '../../serializers/label_serializer'
import Label from '../../models/label'

const route = async (req, res, trx) => {

  const label = await Label.where({
    id: req.params.id
  }).fetchAll({
    transacting: req.trx
  })


  res.status(200).json({
    data: LabelSerializer(label)
  })


}

export default route
