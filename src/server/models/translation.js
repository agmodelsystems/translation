import Model from './model'
import Label from './label'
import Language from './language'
import User from './user'

const Translation = new Model({

  tableName: 'translations',

  rules: {
    label_id: 'required',
    language_id: 'required',
    //text: 'required',
    user_id: 'required'
  },

  virtuals: {},

  label: function() {
    return this.belongsTo(Label, 'label_id')
  },

  language: function() {
    return this.belongsTo(Language, 'language_id')
  },

  user: function() {
    return this.belongsTo(User, 'user_id')
  }

})

export default Translation
