import LabelSerializer from '../../serializers/label_serializer'
import Label from '../../models/label'

const route = async (req, res, trx) => {

  const label = await Label.forge({
    'id': req.params.id
  }).fetch({
    transacting: req.trx,
    withRelated: ['translations']
  })

  if(!label) return res.status(404).json({
    message: 'Could not find label'
  })

  await label.related('translations').invokeThen('destroy').then(function () {
    return label.destroy().then(function () {
      res.json({ error: false, message: 'label deleted' });
    });
  }).catch(function (err) {
    res.status(500).json({ error: true, data: { message: err.message } });
  });



}

export default route
