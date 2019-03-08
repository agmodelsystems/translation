import UserSerializer from '../../serializers/user_serializer'
import User from '../../models/user'

const route = async (req, res, trx) => {

  const user = await User.forge({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }).save(null, {
    transacting: req.trx
  })

  res.status(200).json({
    data: UserSerializer(user)
  })


}

export default route
