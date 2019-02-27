import transaction from '../../utils/transaction'

const route = transaction(async (req, res, trx) => {

  res.send('update a translation')

})

export default route
