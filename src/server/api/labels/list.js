import transaction from '../../utils/transaction'

const route = transaction(async (req, res, trx) => {

  res.send('list all of the labels')

})

export default route
