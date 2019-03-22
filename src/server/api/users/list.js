import UserSerializer from '../../serializers/user_serializer'
import User from '../../models/user'

const route = async (req, res, trx) => {

  const users = await User.fetchAll({
    transacting: req.trx
  })

  res.status(200).json({
    data: users.map(UserSerializer)
  })

}

export default route
