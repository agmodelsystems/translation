import LabelSerializer from '../../serializers/label_serializer'
import Label from '../../models/label'

const route = async (req, res, trx) => {

  const labels = await Label.fetchAll({
    transacting: req.trx
  })

  res.status(200).json({
    data: labels.map(LabelSerializer)
  })

}

export default route
