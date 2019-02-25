import Model from './model'
import Translation from './translation'
import User from './user'

const Language = new Model({

  tableName: 'translate_langauges',

  rules: {
    name: 'required',
    code: 'required'
  },

  virtuals: {},

  translation: function() {
    return this.hasMany(Translation, 'language_id')
  },

  users: function() {
    return this.belongsToMany(User, 'users_languages', 'language_id', 'user_id')
  }

})

export default Language
