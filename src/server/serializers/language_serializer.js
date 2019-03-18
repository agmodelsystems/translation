import UserSerializer from './user_serializer'

const serializer = (result) => ({
  id: result.get('id'),
  code: result.get('code'),
  name: result.get('name')
  // users: result.get('users').map(UserSerializer)
})

export default serializer
