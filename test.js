import './src/server/translate/lib/environment'
import User from './src/server/translate/models/user'

const processor = async () => {

  const user = await User.where('id', 1).fetch()

  await user.save({
    password: 'amts'
  })

  console.log(user)

}

processor().then(process.exit)
