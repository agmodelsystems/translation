import './lib/environment'
import 'express-async-errors'
import withTransaction from './utils/transaction'
import multiparty from 'connect-multiparty'
import bodyParser from 'body-parser'
import logger from './utils/logger'
import express from 'express'
import qs from 'qs'
import api from './api'

const server = express()

server.set('query parser', str => qs.parse(str, { arrayLimit: 100, depth: 10 }))

server.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }))

server.use(bodyParser.json({ limit: '5mb' }))

server.use(multiparty({ uploadDir: './tmp' }))

server.use('/ping', (req, res) => res.status(200).send('pong'))

server.use(withTransaction)

server.use(logger)

server.use('/api', api)

server.listen(3000, () => {
  console.log('Listening at 3000')
})
