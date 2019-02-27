import Model from './model'
import Language from './language'
import Translation from './translation'
import bcrypt from 'bcrypt-nodejs'

const User = new Model({

  tableName: 'users',

  rules: {
    first_name: 'required',
    last_name: 'required',
    email: ['required','email'],
    username: 'required',
    password_hash: 'required'
  },

  virtuals: {

    full_name: function() {
      return `${this.get('first_name')} ${this.get('last_name')}`
    },

    password: {
      get() {},
      set(value) {
        const password_salt = bcrypt.genSaltSync(10)
        this.set('password_salt', password_salt)
        this.set('password_hash', bcrypt.hashSync(value, password_salt))
      }
    }

  },

  authenticate(password) {
    return this.get('password_hash') === bcrypt.hashSync(password, this.get('password_salt'))
  },

  languages: function() {
    return this.belongsToMany(Language, 'users_languages', 'user_id', 'language_id')
  },

  translations: function() {
    return this.hasMany(Translation, 'user_id')
  }

})

export default User
