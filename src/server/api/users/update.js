import UserSerializer from '../../serializers/user_serializer'
import User from '../../models/user'
import _ from 'lodash'

const route = async (req, res, trx) => {

  const user = await User.query(qb => {
    qb.where('id', req.params.id)
  }).fetch({
    transacting: req.trx
  })

  const params = _.pickBy({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }, _.identity)

  await user.save(params, {
    patch: true,
    transacting: req.trx
  })

  res.status(200).json({
    data: UserSerializer(user)
  })

}

export default route
