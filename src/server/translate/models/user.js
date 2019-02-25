import Model from './model'
import Language from './language'
import Translation from './translation'

const User = new Model({

  tableName: 'translate_users',

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
    }

  },

  laguages: function() {
    return this.belongsToMany(Language, 'users_languages', 'user_id', 'language_id')
  },

  translations: function() {
    return this.hasMany(Translation, 'user_id')
  }

})

export default User
