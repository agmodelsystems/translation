import transaction from '../../utils/transaction'

const route = transaction(async (req, res, trx) => {

  res.send('show a specific languages')

})

export default route