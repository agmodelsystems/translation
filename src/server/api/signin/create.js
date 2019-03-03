import { encode } from '../../lib/jwt'
import User from '../../models/user'

const route = async (req, res, trx) => {

  if(!req.body.username) throw new Error('username is required')

  const user = await User.where({
    username: req.body.username
  }).fetch()

  if(!user) throw new Error('unable to find user')

  if(!req.body.password) throw new Error('password is required')

  if(!user.authenticate(req.body.password)) throw new Error('invalid password')

  const token = encode(user.get('id'))

  res.status(200).json({
    data: {
      token
    }
  })


}

export default route
