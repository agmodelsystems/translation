import transaction from '../../utils/transaction'

const route = transaction(async (req, res, trx) => {

  res.send('create a translation')

})

export default route
