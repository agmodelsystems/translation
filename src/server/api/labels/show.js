import Label from '../../models/label'

const route = async (req, res, trx) => {

  const label = await Label.where({
    id: req.params.id
  }).fetchAll({
    withRelated: ['translations']
  })


  res.status(200).json({
    data: label
  })


}

export default route
