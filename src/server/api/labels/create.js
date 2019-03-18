import LabelSerializer from '../../serializers/label_serializer'
import Label from '../../models/label'

const route = async (req, res, trx) => {

  const label = await Label.forge({
    name: req.body.name,
    description: req.body.description,
    english: req.body.english
  }).save(null, {
    transacting: req.trx
  })

  res.status(200).json({
    data: LabelSerializer(label)
  })

}

export default route
