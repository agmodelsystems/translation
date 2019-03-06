import Model from './model'
import Translation from './translation'

const Label = new Model({

  tableName: 'labels',

  rules: {
    name: 'required',
    description: 'required'
  },

  virtuals: {},

  translations: function() {
    return this.hasMany(Translation, 'label_id')
  }

})

export default Label
