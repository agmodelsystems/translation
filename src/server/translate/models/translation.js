import Model from './model'

const Translation = new Model({

  tableName: 'translate_translations',

  rules: {
    text: 'required'
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