import { encode } from '../../lib/jwt'
import User from '../../models/user'

const route = async (req, res, trx) => {
  
  if(!req.body.username) return res.status(422).json({
    message: 'Username is required'
  })

  const user = await User.query(qb => {
    qb.where('username', req.body.username)
  }).fetch({
    transacting: req.trx
  })

  if(!user) return res.status(404).json({
    message: 'Could not find user'
  })

  if(!req.body.password) return res.status(422).json({
    message: 'Password is required'
  })

  if(!user.authenticate(req.body.password)) return res.status(422).json({
    message: 'Password is not valid'
  })

  const token = encode(user.get('id'))

  res.status(200).json({
    data: {
      token
    }
  })

}

export default route
