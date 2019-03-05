import Label from '../../models/label'

const route = async (req, res, trx) => {

  const labels = await Label.fetchAll()

  res.status(200).json({
    data: labels
  })

}

export default route
