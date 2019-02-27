import APIError from '../utils/error'
import { decode } from '../lib/jwt'
import User from '../models/user'

const route = async (req, res, next) => {

  const token = req.headers.authorization

  if(!token) throw new APIError({
    code: 401,
    message: 'No token'
  })

  const matches = token.match(/Bearer (.*)/)

  if(!matches) throw new APIError({
    code: 401,
    message: 'Invalid token'
  })

  const { exp, user_id } = decode(matches[1])

  const iat = Math.floor(Date.now() / 1000)

  if(iat > exp) throw new APIError({
    code: 401,
    message: 'Expired token'
  })

  const user = await User.where({
    id: user_id
  }).fetch()

  if(!user) throw new APIError({
    code: 401,
    message: 'Invalid user'
  })

  req.user = user

  next()

}

export default route
